"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export const EVIDENCE_CARDS = [
  {
    src: "/projects/levit-shopport-ai/group_photo_2.jpeg",
    eyebrow: "Levit / Production AI",
    title: "114K lines of TypeScript shipped",
    meta: "Routing · Evaluation · Personalization",
    fit: "object-cover object-top",
    accent: "#22d3ee",
  },
  {
    src: "/projects/ieee-battlebot/weapon-mount-fea.png",
    eyebrow: "IEEE / Mechanical Validation",
    title: "Weapon mounts validated above 4,000 N",
    meta: "Fusion 360 · FEA · 2.09 safety factor",
    fit: "object-cover",
    accent: "#818cf8",
  },
  {
    src: "/projects/ieee-battlebot/winner.JPG",
    eyebrow: "IEEE / Combat Robotics",
    title: "Shot & Chaser — 1st place",
    meta: "Multibot systems engineering",
    fit: "object-cover",
    accent: "#f59e0b",
  },
  {
    src: "/projects/federated-tinyml/psu_cers2026_1.jpeg",
    eyebrow: "Research / TinyML",
    title: "Federated intelligence at the edge",
    meta: "Privacy · Embedded systems · Research",
    fit: "object-cover",
    accent: "#a78bfa",
  },
] as const;

export function circularOffset(index: number, activeIndex: number, length: number) {
  let offset = (index - activeIndex + length) % length;
  if (offset > length / 2) offset -= length;
  return offset;
}

export default function EvidenceDeckHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeCard = EVIDENCE_CARDS[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % EVIDENCE_CARDS.length);
    }, 5_500);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section className="relative min-h-[calc(100vh-7.5rem)] overflow-hidden bg-[#090b11]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeCard.src}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.12, scale: prefersReducedMotion ? 1.04 : 1.015 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={activeCard.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover grayscale contrast-125 mix-blend-luminosity"
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={activeCard.accent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 72% 46%, ${activeCard.accent}24 0%, transparent 34%)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,11,17,0.98)_0%,rgba(9,11,17,0.88)_34%,rgba(9,11,17,0.60)_68%,rgba(9,11,17,0.88)_100%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to right, transparent 2%, black 34%, black 82%, transparent 100%)",
        }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {[18, 43, 68, 92].map((left, index) => (
          <div
            key={left}
            className="absolute inset-y-0 border-l border-white/[0.045]"
            style={{ left: `${left}%` }}
          >
            <span className="absolute top-[16%] -translate-x-1/2 bg-[#090b11]/60 px-1 font-mono text-[7px] tracking-[0.18em] text-white/18">
              X{String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
        <motion.p
          key={activeIndex}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -right-4 top-[7%] font-mono text-[13rem] font-black leading-none tracking-[-0.1em] text-white/[0.035] xl:text-[18rem]"
        >
          0{activeIndex + 1}
        </motion.p>
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7.5rem)] max-w-[1500px] items-center gap-12 px-6 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:px-12">
        <div className="relative z-20 max-w-xl">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300/65">
            01 / Engineering Evidence Deck
          </p>
          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl xl:text-7xl">
            Work that
            <br />
            <span className="text-white/35">proves itself.</span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/48 sm:text-base">
            AI systems, production evaluation, and physical machines—shown through the artifacts that made the work measurable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-white/60">
              Product engineering
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-white/60">
              AI systems
            </span>
          </div>
        </div>

        <div className="relative h-[31rem] min-w-0 [perspective:1400px] sm:h-[36rem]">
          {EVIDENCE_CARDS.map((card, index) => {
            const offset = circularOffset(index, activeIndex, EVIDENCE_CARDS.length);
            const distance = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <motion.button
                key={card.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${card.title}`}
                animate={{
                  x: offset * 86,
                  y: distance * 34,
                  scale: 1 - distance * 0.1,
                  rotateY: offset * -8,
                  rotateZ: offset * 1.2,
                  opacity: distance > 2 ? 0 : isActive ? 1 : 0.48,
                  zIndex: EVIDENCE_CARDS.length - distance,
                }}
                transition={{ type: "spring", stiffness: 160, damping: 24 }}
                className={`absolute left-1/2 top-1/2 h-[25rem] w-[min(88vw,38rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.35rem] border text-left shadow-2xl outline-none [transform-style:preserve-3d] focus-visible:ring-2 focus-visible:ring-cyan-300 sm:h-[28rem] ${
                  isActive
                    ? "border-white/20 shadow-indigo-950/50"
                    : "pointer-events-auto border-white/10 shadow-black/50"
                }`}
              >
                <div className="relative h-[72%] overflow-hidden bg-[#10121a]">
                  <Image
                    src={card.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 610px, 88vw"
                    className={card.fit}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f16] via-transparent to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 min-h-[30%] bg-[#0d0f16] px-5 py-5 sm:px-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300/60">
                    {card.eyebrow}
                  </p>
                  <h2 className="mt-2 text-lg font-bold tracking-tight text-white sm:text-xl">
                    {card.title}
                  </h2>
                  <p className="mt-1.5 text-xs text-white/35">{card.meta}</p>
                </div>
              </motion.button>
            );
          })}

          <div className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {EVIDENCE_CARDS.map((card, index) => (
              <button
                key={card.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Select evidence ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-cyan-300" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-6 right-6 hidden items-center gap-5 border-t border-white/10 pt-3 font-mono text-[8px] uppercase tracking-[0.17em] text-white/24 lg:flex xl:left-12 xl:right-12"
      >
        <span className="text-cyan-300/50">Archive / Live Evidence</span>
        <span>04 indexed records</span>
        <span>Production · Research · Hardware</span>
        <span className="ml-auto" style={{ color: `${activeCard.accent}99` }}>
          Record 0{activeIndex + 1} / 04
        </span>
      </div>
    </section>
  );
}
