export const accentPalette = [
  {
    accent: "text-indigo-600 dark:text-indigo-300",
    accentMuted: "text-indigo-600/80 dark:text-indigo-400/70",
    groupHoverAccent: "group-hover:text-indigo-600 dark:group-hover:text-indigo-300",
    border: "border-indigo-400/25",
    hoverBorder: "hover:border-indigo-300/45",
    line: "border-indigo-400/35",
    dot: "bg-indigo-400",
    chip: "border-indigo-400/30 bg-indigo-500/[0.14] text-indigo-600 dark:text-indigo-300",
    surface: "bg-indigo-500/[0.035]",
    hoverSurface: "hover:bg-indigo-500/[0.045]",
    gradient: "from-indigo-500/[0.11] to-violet-500/[0.035]",
    glow: "bg-indigo-500/[0.10]",
  },
  {
    accent: "text-cyan-700 dark:text-cyan-300",
    accentMuted: "text-cyan-700/80 dark:text-cyan-400/70",
    groupHoverAccent: "group-hover:text-cyan-700 dark:group-hover:text-cyan-300",
    border: "border-cyan-400/25",
    hoverBorder: "hover:border-cyan-300/45",
    line: "border-cyan-400/35",
    dot: "bg-cyan-400",
    chip: "border-cyan-400/30 bg-cyan-500/[0.14] text-cyan-700 dark:text-cyan-300",
    surface: "bg-cyan-500/[0.035]",
    hoverSurface: "hover:bg-cyan-500/[0.045]",
    gradient: "from-cyan-500/[0.11] to-blue-500/[0.035]",
    glow: "bg-cyan-500/[0.10]",
  },
  {
    accent: "text-violet-600 dark:text-violet-300",
    accentMuted: "text-violet-600/80 dark:text-violet-400/70",
    groupHoverAccent: "group-hover:text-violet-600 dark:group-hover:text-violet-300",
    border: "border-violet-400/25",
    hoverBorder: "hover:border-violet-300/45",
    line: "border-violet-400/35",
    dot: "bg-violet-400",
    chip: "border-violet-400/30 bg-violet-500/[0.14] text-violet-600 dark:text-violet-300",
    surface: "bg-violet-500/[0.035]",
    hoverSurface: "hover:bg-violet-500/[0.045]",
    gradient: "from-violet-500/[0.11] to-fuchsia-500/[0.035]",
    glow: "bg-violet-500/[0.10]",
  },
  {
    accent: "text-amber-700 dark:text-amber-300",
    accentMuted: "text-amber-700/80 dark:text-amber-400/70",
    groupHoverAccent: "group-hover:text-amber-700 dark:group-hover:text-amber-300",
    border: "border-amber-400/25",
    hoverBorder: "hover:border-amber-300/45",
    line: "border-amber-400/35",
    dot: "bg-amber-400",
    chip: "border-amber-400/30 bg-amber-500/[0.14] text-amber-700 dark:text-amber-300",
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
