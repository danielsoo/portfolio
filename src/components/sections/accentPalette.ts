export const accentPalette = [
  {
    accent: "text-indigo-300",
    accentMuted: "text-indigo-400/70",
    groupHoverAccent: "group-hover:text-indigo-300",
    border: "border-indigo-400/25",
    hoverBorder: "hover:border-indigo-300/45",
    line: "border-indigo-400/35",
    dot: "bg-indigo-400",
    chip: "border-indigo-400/20 bg-indigo-500/[0.09] text-indigo-300",
    surface: "bg-indigo-500/[0.035]",
    hoverSurface: "hover:bg-indigo-500/[0.045]",
    gradient: "from-indigo-500/[0.11] to-violet-500/[0.035]",
    glow: "bg-indigo-500/[0.10]",
  },
  {
    accent: "text-cyan-300",
    accentMuted: "text-cyan-400/70",
    groupHoverAccent: "group-hover:text-cyan-300",
    border: "border-cyan-400/25",
    hoverBorder: "hover:border-cyan-300/45",
    line: "border-cyan-400/35",
    dot: "bg-cyan-400",
    chip: "border-cyan-400/20 bg-cyan-500/[0.09] text-cyan-300",
    surface: "bg-cyan-500/[0.035]",
    hoverSurface: "hover:bg-cyan-500/[0.045]",
    gradient: "from-cyan-500/[0.11] to-blue-500/[0.035]",
    glow: "bg-cyan-500/[0.10]",
  },
  {
    accent: "text-violet-300",
    accentMuted: "text-violet-400/70",
    groupHoverAccent: "group-hover:text-violet-300",
    border: "border-violet-400/25",
    hoverBorder: "hover:border-violet-300/45",
    line: "border-violet-400/35",
    dot: "bg-violet-400",
    chip: "border-violet-400/20 bg-violet-500/[0.09] text-violet-300",
    surface: "bg-violet-500/[0.035]",
    hoverSurface: "hover:bg-violet-500/[0.045]",
    gradient: "from-violet-500/[0.11] to-fuchsia-500/[0.035]",
    glow: "bg-violet-500/[0.10]",
  },
  {
    accent: "text-amber-300",
    accentMuted: "text-amber-400/70",
    groupHoverAccent: "group-hover:text-amber-300",
    border: "border-amber-400/25",
    hoverBorder: "hover:border-amber-300/45",
    line: "border-amber-400/35",
    dot: "bg-amber-400",
    chip: "border-amber-400/20 bg-amber-500/[0.09] text-amber-300",
    surface: "bg-amber-500/[0.035]",
    hoverSurface: "hover:bg-amber-500/[0.045]",
    gradient: "from-amber-500/[0.11] to-orange-500/[0.035]",
    glow: "bg-amber-500/[0.10]",
  },
] as const;

export function getAccent(index: number) {
  return accentPalette[index % accentPalette.length];
}

export function getAlternatingAccent(index: number) {
  return accentPalette[index % 2];
}
