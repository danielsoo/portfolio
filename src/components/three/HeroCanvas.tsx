"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import NetworkGraph from "./NetworkGraph";

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.2] dark:opacity-[0.26]"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--foreground) 24%, transparent) 0.7px, transparent 0.8px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, transparent 2%, black 26%, black 72%, transparent 98%)",
        }}
      />
      <Canvas
        className="opacity-60 md:opacity-100"
        camera={{ position: [0, 0, 12], fov: 70 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <Suspense fallback={null}>
          <NetworkGraph />
        </Suspense>
      </Canvas>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        <TraceLabel className="left-[32.5%] top-[43%]">router</TraceLabel>
        <TraceLabel className="left-[49%] top-[43.5%]">eval</TraceLabel>
        <TraceLabel className="left-[49%] top-[59%]">memory</TraceLabel>
        <TraceLabel className="left-[89%] top-[48%]">recommend</TraceLabel>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[16%] left-[11%] right-[11%] hidden items-center gap-5 border-t border-indigo-400/20 pt-3 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--foreground)]/35 lg:flex"
      >
        <span className="inline-flex items-center gap-2 text-cyan-400/65">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-35" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
          </span>
          trace active
        </span>
        <span>pipeline / query-routing</span>
        <span>eval / pass</span>
        <span>memory / ready</span>
        <span className="ml-auto text-indigo-400/50">input 01 · output 07</span>
      </div>
    </div>
  );
}

function TraceLabel({ children, className }: { children: string; className: string }) {
  return (
    <span
      className={`absolute rounded border border-cyan-400/20 bg-[var(--background)]/30 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-400/55 backdrop-blur-[1px] ${className}`}
    >
      {children}
    </span>
  );
}
