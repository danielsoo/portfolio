"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { EVIDENCE_CARDS } from "./EvidenceDeckHero";

const SYSTEM_NODES = [
  { label: "Applied AI", short: "AI", status: "Production" },
  { label: "Validation", short: "FEA", status: "Verified" },
  { label: "Robotics", short: "BOT", status: "Champion" },
  { label: "Research", short: "R&D", status: "Edge ML" },
] as const;

export default function EvidenceCommandHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeCard = EVIDENCE_CARDS[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % EVIDENCE_CARDS.length);
    }, 6_000);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section className="relative min-h-[calc(100vh-7.5rem)] overflow-hidden bg-[#03080d]">
      <motion.div
        key={activeCard.accent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 75% 48%, ${activeCard.accent}1d 0%, transparent 34%), radial-gradient(circle at 18% 55%, rgba(34,211,238,.07), transparent 35%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.065) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.065) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage: "linear-gradient(to right, transparent, black 28%, black 90%, transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 3px, white 4px)",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-7.5rem)] max-w-[1500px] items-center gap-10 px-6 py-14 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <div className="relative z-20 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-cyan-300/20 bg-[#06131a]/70 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-200/70 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-200 opacity-45" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-100" />
            </span>
            Portfolio system / Evidence online
          </div>

          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-indigo-300/55">
            05 / Evidence Command
          </p>
          <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl xl:text-7xl">
            Work that
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              proves itself.
            </span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/48 sm:text-base">
            One engineering system, explored through the production artifacts, research results, and physical builds behind the work.
          </p>

          <div className="mt-8 grid max-w-md grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10 font-mono">
            {[
              ["6", "Featured projects"],
              ["4", "Engineering domains"],
              ["04", "Verified records"],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#050b11]/90 px-3 py-3 backdrop-blur-sm">
                <p className="text-lg font-semibold text-cyan-100">{value}</p>
                <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-white/30 sm:text-[8px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 min-w-0">
          <div className="absolute -left-10 top-1/2 hidden h-px w-12 bg-gradient-to-r from-transparent to-cyan-200/40 lg:block">
            <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-100 shadow-[0_0_12px_rgba(165,243,252,.8)]" />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-cyan-100/15 bg-[#050c12]/92 shadow-[0_28px_100px_rgba(0,0,0,.55)] backdrop-blur-md">
            <div className="flex h-12 items-center gap-3 border-b border-white/10 bg-white/[0.025] px-4 font-mono text-[8px] uppercase tracking-[0.17em] text-white/30 sm:px-5">
              <span className="text-cyan-200/65">YP / Portfolio Core</span>
              <span className="hidden sm:inline">Evidence stream</span>
              <span className="ml-auto flex items-center gap-2 text-cyan-100/45">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
                Node 0{activeIndex + 1} active
              </span>
            </div>

            <div className="grid min-h-[34rem] grid-rows-[1fr_auto] sm:min-h-[31rem] sm:grid-cols-[1fr_11rem] sm:grid-rows-1">
              <div className="relative min-h-[25rem] overflow-hidden bg-[#091018]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCard.src}
                    initial={{ opacity: 0, scale: 1.025 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeCard.src}
                      alt={activeCard.title}
                      fill
                      sizes="(min-width: 1024px) 620px, 100vw"
                      loading="eager"
                      className={activeCard.fit}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-black/15" />
                  </motion.div>
                </AnimatePresence>

                {!prefersReducedMotion && (
                  <motion.div
                    aria-hidden="true"
                    className="absolute bottom-0 top-0 z-10 w-px bg-cyan-100/50 shadow-[0_0_18px_rgba(103,232,249,.45)]"
                    initial={{ left: "8%", opacity: 0 }}
                    animate={{ left: ["8%", "92%"], opacity: [0, 0.75, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
                  />
                )}

                <div className="absolute left-4 top-4 z-20 border border-cyan-200/20 bg-[#041017]/80 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-100/60 backdrop-blur-sm">
                  Record 0{activeIndex + 1} / Verified
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#050c12] via-[#050c12]/94 to-transparent px-5 pb-5 pt-16 sm:px-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300/65">
                    {activeCard.eyebrow}
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {activeCard.title}
                  </h2>
                  <p className="mt-1.5 text-xs text-white/38">{activeCard.meta}</p>
                </div>

                <span className="absolute left-3 top-3 z-20 h-5 w-5 border-l border-t border-cyan-100/35" />
                <span className="absolute right-3 top-3 z-20 h-5 w-5 border-r border-t border-cyan-100/35" />
                <span className="absolute bottom-3 left-3 z-20 h-5 w-5 border-b border-l border-cyan-100/35" />
                <span className="absolute bottom-3 right-3 z-20 h-5 w-5 border-b border-r border-cyan-100/35" />
              </div>

              <div className="grid grid-cols-4 border-t border-white/10 bg-[#050b11] sm:grid-cols-1 sm:border-l sm:border-t-0">
                {SYSTEM_NODES.map((node, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={node.label}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Open ${node.label} evidence`}
                      aria-pressed={isActive}
                      className={`group relative min-w-0 border-r border-white/[0.07] px-2 py-3 text-left font-mono transition-colors last:border-r-0 sm:border-b sm:border-r-0 sm:px-4 sm:py-4 sm:last:border-b-0 ${
                        isActive ? "bg-cyan-300/[0.08]" : "hover:bg-white/[0.035]"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="evidence-node-marker"
                          className="absolute inset-x-2 top-0 h-px bg-cyan-200 sm:bottom-3 sm:left-0 sm:right-auto sm:top-3 sm:h-auto sm:w-px"
                        />
                      )}
                      <span className={`text-[8px] ${isActive ? "text-cyan-200/75" : "text-white/22"}`}>
                        0{index + 1}
                      </span>
                      <span className={`mt-1 block text-[9px] uppercase tracking-[0.08em] sm:hidden ${isActive ? "text-white/75" : "text-white/32"}`}>
                        {node.short}
                      </span>
                      <span className={`mt-1 hidden text-[10px] uppercase tracking-[0.1em] sm:block ${isActive ? "text-white/80" : "text-white/36"}`}>
                        {node.label}
                      </span>
                      <span className="mt-1.5 hidden text-[8px] text-white/22 sm:block">{node.status}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex h-10 items-center gap-4 border-t border-white/10 px-4 font-mono text-[8px] uppercase tracking-[0.14em] text-white/22 sm:px-5">
              <span className="text-cyan-200/55">Think</span>
              <span>Build</span>
              <span>Measure</span>
              <span className="ml-auto" style={{ color: `${activeCard.accent}99` }}>
                Evidence integrity / Pass
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-6 right-6 hidden items-center gap-5 border-t border-cyan-200/12 pt-3 font-mono text-[8px] uppercase tracking-[0.17em] text-white/22 lg:flex xl:left-12 xl:right-12">
        <span className="text-cyan-200/55">System / Evidence-first portfolio</span>
        <span>Applied AI</span>
        <span>Research</span>
        <span>Robotics</span>
        <span>Product</span>
        <span className="ml-auto text-indigo-200/40">Operator: Younsoo Park</span>
      </div>
    </section>
  );
}
