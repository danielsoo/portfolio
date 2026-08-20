"use client";

import { useEffect } from "react";

/**
 * Locks page scroll without ever moving the scroll position.
 *
 * `overflow: hidden` on the scrolling element resets its scrollTop to 0,
 * which then has to be restored on unlock — producing a visible jump even
 * with instant scrolling. Fixing body in place at a negative offset equal
 * to the current scroll position avoids the jump entirely: the page never
 * visually moves while locked, and unlocking just removes the offset.
 */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [locked]);
}
