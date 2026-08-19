const SYSTEM_MARKERS = [
  { top: "7%", label: "PROFILE" },
  { top: "20%", label: "EXPERIENCE" },
  { top: "34%", label: "STACK" },
  { top: "48%", label: "PROJECTS" },
  { top: "64%", label: "LEADERSHIP" },
  { top: "79%", label: "RECOGNITION" },
  { top: "93%", label: "CONTACT" },
] as const;

const SIGNAL_LINES = [14, 39, 58, 84] as const;

const DATA_ROUTES = [
  {
    id: "route-a",
    d: "M 54 220 H 216 L 276 280 V 760 H 504 L 564 820 H 946",
    color: "#22d3ee",
    duration: "12s",
    delay: "-2s",
  },
  {
    id: "route-b",
    d: "M 946 690 H 802 L 742 750 V 1370 H 462 L 402 1430 H 64",
    color: "#818cf8",
    duration: "16s",
    delay: "-9s",
  },
  {
    id: "route-c",
    d: "M 74 1610 H 238 L 298 1670 V 2280 H 648 L 708 2340 H 938",
    color: "#22d3ee",
    duration: "18s",
    delay: "-5s",
  },
  {
    id: "route-d",
    d: "M 936 2480 H 816 L 756 2540 V 3230 H 506 L 446 3290 H 82",
    color: "#a78bfa",
    duration: "14s",
    delay: "-11s",
  },
  {
    id: "route-e",
    d: "M 164 920 V 1080 H 322 L 382 1140 V 1900 H 524 L 584 1960 V 2920 H 850",
    color: "#6366f1",
    duration: "22s",
    delay: "-15s",
  },
] as const;

const ROUTE_NODES = [
  [216, 220],
  [276, 760],
  [504, 760],
  [802, 690],
  [742, 1370],
  [402, 1430],
  [238, 1610],
  [298, 2280],
  [708, 2340],
  [816, 2480],
  [756, 3230],
  [446, 3290],
  [164, 1080],
  [382, 1900],
  [584, 2920],
] as const;

export default function PortfolioBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(99,102,241,0.045),transparent_12%,transparent_88%,rgba(34,211,238,0.04))]" />
      <div
        className="absolute inset-0 opacity-[0.16] dark:opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--foreground) 12%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--foreground) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to right, transparent 2%, black 14%, black 86%, transparent 98%)",
        }}
      />

      <div className="absolute -right-56 top-[6%] h-[42rem] w-[42rem] rounded-full bg-indigo-500/[0.055] blur-3xl" />
      <div className="absolute -left-72 top-[31%] h-[46rem] w-[46rem] rounded-full bg-cyan-400/[0.045] blur-3xl" />
      <div className="absolute -right-64 top-[58%] h-[48rem] w-[48rem] rounded-full bg-violet-500/[0.05] blur-3xl" />
      <div className="absolute -left-52 top-[82%] h-[36rem] w-[36rem] rounded-full bg-sky-400/[0.04] blur-3xl" />

      <svg
        className="absolute inset-0 hidden h-full w-full md:block"
        viewBox="0 0 1000 4000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id="signal-glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {DATA_ROUTES.map((route) => (
          <g key={route.id}>
            <path
              d={route.d}
              stroke={route.color}
              strokeOpacity="0.14"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <path
              className="portfolio-signal-flow"
              d={route.d}
              stroke={route.color}
              strokeOpacity="0.68"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
              style={{ animationDelay: route.delay, animationDuration: route.duration }}
            />
            <g className="portfolio-signal-packet" filter="url(#signal-glow)">
              <rect
                x="-3"
                y="-3"
                width="6"
                height="6"
                rx="1"
                fill={route.color}
                fillOpacity="0.72"
                transform="rotate(45)"
              >
                <animateMotion
                  path={route.d}
                  dur={route.duration}
                  begin={route.delay}
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </rect>
            </g>
          </g>
        ))}

        {ROUTE_NODES.map(([x, y], index) => (
          <rect
            key={`${x}-${y}`}
            x={x - 3}
            y={y - 3}
            width="6"
            height="6"
            fill={index % 3 === 0 ? "#22d3ee" : "#818cf8"}
            fillOpacity="0.13"
            stroke={index % 3 === 0 ? "#22d3ee" : "#818cf8"}
            strokeOpacity="0.22"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            transform={`rotate(45 ${x} ${y})`}
          />
        ))}
      </svg>

      <div className="absolute bottom-24 left-[max(2rem,calc((100vw-80rem)/2))] top-24 hidden border-l border-[var(--foreground)]/[0.055] xl:block" />

      <div className="absolute bottom-24 right-[max(2rem,calc((100vw-80rem)/2))] top-24 hidden border-r border-indigo-400/10 xl:block">
        {SYSTEM_MARKERS.map((marker, index) => (
          <div
            key={marker.label}
            className="absolute right-0 flex translate-x-[4px] items-center"
            style={{ top: marker.top }}
          >
            <span className={`h-2 w-2 rotate-45 border ${index % 2 === 0 ? "border-cyan-400/25 bg-cyan-400/10" : "border-indigo-400/25 bg-indigo-400/10"}`} />
            <span className="ml-3 font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--foreground)]/15">
              {String(index + 1).padStart(2, "0")} / {marker.label}
            </span>
          </div>
        ))}
      </div>

      {SIGNAL_LINES.map((top, index) => (
        <div
          key={top}
          className="absolute hidden h-px xl:block"
          style={{
            top: `${top}%`,
            left: index % 2 === 0 ? "7%" : "72%",
            width: index % 2 === 0 ? "18%" : "20%",
            background:
              index % 2 === 0
                ? "linear-gradient(90deg, transparent, rgba(34,211,238,.16))"
                : "linear-gradient(90deg, rgba(99,102,241,.15), transparent)",
          }}
        >
          <span
            className={`absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 ${index % 2 === 0 ? "right-0 bg-cyan-300/30" : "left-0 bg-indigo-300/30"}`}
          />
          <span
            className={`portfolio-rail-pulse absolute top-1/2 h-px w-12 -translate-y-1/2 ${index % 2 === 0 ? "bg-gradient-to-r from-transparent to-cyan-300/70" : "bg-gradient-to-r from-indigo-300/70 to-transparent"}`}
            style={{
              animationDelay: `${index * -1.7}s`,
              animationDirection: index % 2 === 0 ? "normal" : "reverse",
            }}
          />
        </div>
      ))}
    </div>
  );
}
