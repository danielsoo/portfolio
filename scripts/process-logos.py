#!/usr/bin/env python3
"""One-off: remove fake checkerboard / solid backdrop from THON & ribbon PNGs."""
from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image


def is_thon_checker_or_edge_bg(r: int, g: int, b: int) -> bool:
    """Pixels that belong to the gray/white checker (or similar flat backdrop), not the mark."""
    # Navy / blue letter body & anti-alias toward blue
    if b > 75 and (r + g) < 230 and (r + g + b) < 420:
        return False
    # Anything clearly dark is foreground
    if max(r, g, b) < 95:
        return False
    # Yellow should not appear in THON asset; if it does, keep it
    if r > 210 and g > 170 and b < 130:
        return False
    # Light neutral = checker tiles, white margins, etc.
    if max(r, g, b) - min(r, g, b) < 52 and (r + g + b) / 3 > 148:
        return True
    return False


def flood_transparent_thon(im: Image.Image) -> Image.Image:
    w, h = im.size
    px = im.load()
    out = Image.new("RGBA", (w, h))
    ox = out.load()
    for y in range(h):
        for x in range(w):
            ox[x, y] = px[x, y]

    seen = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    def try_seed(x: int, y: int) -> None:
        if x < 0 or x >= w or y < 0 or y >= h or seen[y][x]:
            return
        r, g, b = px[x, y][:3]
        if is_thon_checker_or_edge_bg(r, g, b):
            seen[y][x] = True
            q.append((x, y))

    for x in range(w):
        try_seed(x, 0)
        try_seed(x, h - 1)
    for y in range(h):
        try_seed(0, y)
        try_seed(w - 1, y)

    while q:
        x, y = q.popleft()
        ox[x, y] = (0, 0, 0, 0)
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if nx < 0 or nx >= w or ny < 0 or ny >= h or seen[ny][nx]:
                continue
            r, g, b = px[nx, ny][:3]
            if is_thon_checker_or_edge_bg(r, g, b):
                seen[ny][nx] = True
                q.append((nx, ny))

    return out


def ribbon_make_black_transparent(im: Image.Image) -> Image.Image:
    """Ribbon asset: mostly black canvas — drop near-black pixels, soften fringe."""
    w, h = im.size
    px = im.load()
    out = Image.new("RGBA", (w, h))
    ox = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, *rest = px[x, y]
            a = rest[0] if rest else 255
            mx = max(r, g, b)
            if mx < 28:
                ox[x, y] = (0, 0, 0, 0)
            elif mx < 55:
                # soften anti-alias ring around yellow
                t = (mx - 28) / (55 - 28)
                ox[x, y] = (r, g, b, int(a * t))
            else:
                ox[x, y] = (r, g, b, a)
    return out


def trim_alpha(im: Image.Image, pad: int = 2) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    x0, y0, x1, y1 = bbox
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(im.width, x1 + pad)
    y1 = min(im.height, y1 + pad)
    return im.crop((x0, y0, x1, y1))


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    logos = root / "public" / "logos"

    thon_path = logos / "thon.png"
    ftk_path = logos / "ftk.png"

    thon = Image.open(thon_path).convert("RGBA")
    thon = flood_transparent_thon(thon)
    thon = trim_alpha(thon, pad=3)
    thon.save(thon_path, optimize=True)

    ftk = Image.open(ftk_path).convert("RGBA")
    ftk = ribbon_make_black_transparent(ftk)
    ftk = trim_alpha(ftk, pad=3)
    ftk.save(ftk_path, optimize=True)

    print("Wrote:", thon_path, thon.size)
    print("Wrote:", ftk_path, ftk.size)


if __name__ == "__main__":
    main()
