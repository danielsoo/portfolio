"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { causeLinks } from "@/data/causeLinks";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";

const EVIDENCE_MEDIA = [
  {
    src: "/projects/levit-shopport-ai/source-contribution-clean.png",
    fit: "object-contain bg-[#111]",
    accent: "#22d3ee",
  },
  {
    src: "/projects/ieee-battlebot/winner.JPG",
    fit: "object-cover",
    accent: "#f59e0b",
  },
  {
    src: "/projects/federated-tinyml/psu_cers2026_1.jpeg",
    fit: "object-cover",
    accent: "#a78bfa",
  },
  {
    src: "/projects/signum/prize.jpeg",
    fit: "object-contain bg-[#11131a]",
    accent: "#818cf8",
  },
] as const;

function circularOffset(index: number, activeIndex: number, length: number) {
  let offset = (index - activeIndex + length) % length;
  if (offset > length / 2) offset -= length;
  return offset;
}

export default function Hero() {
  const { t } = useLocale();
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = EVIDENCE_MEDIA[activeIndex];
  const activeCopy = messages.hero.evidence[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % EVIDENCE_MEDIA.length);
    }, 5_800);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#090b11] text-white"
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeMedia.src}
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 0.1, scale: prefersReducedMotion ? 1.03 : 1.012 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={activeMedia.src}
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            className="object-cover grayscale contrast-125 mix-blend-luminosity"
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={activeMedia.accent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 72% 46%, ${activeMedia.accent}26 0%, transparent 34%)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,11,17,0.99)_0%,rgba(9,11,17,0.91)_34%,rgba(9,11,17,0.62)_70%,rgba(9,11,17,0.9)_100%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.07) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to right, transparent 2%, black 34%, black 82%, transparent 100%)",
        }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {[18, 43, 68, 92].map((left, index) => (
          <div
            key={left}
            className="absolute inset-y-0 border-l border-white/[0.04]"
            style={{ left: `${left}%` }}
          >
            <span className="absolute top-[15%] -translate-x-1/2 bg-[#090b11]/60 px-1 font-mono text-[7px] tracking-[0.18em] text-white/15">
              X{String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
        <motion.p
          key={activeIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -right-4 top-[8%] font-mono text-[13rem] font-black leading-none tracking-[-0.1em] text-white/[0.03] xl:text-[18rem]"
        >
          0{activeIndex + 1}
        </motion.p>
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-[1500px] items-center gap-10 px-6 pb-16 pt-28 lg:grid-cols-[0.78fr_1.22fr] lg:px-12 lg:pt-24">
        <div className="relative z-20 max-w-xl text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300/65"
          >
            {t(messages.hero.greet)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mb-5 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
          >
            <p className="text-xl font-bold tracking-tight text-white/86 sm:text-2xl">Younsoo Park</p>
            <div className="flex shrink-0 items-center justify-center gap-1.5">
              {causeLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(messages.causeLinks[item.id].label)}
                  className="inline-flex items-center rounded-md p-1 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <Image
                    src={item.src}
                    alt={t(messages.causeLinks[item.id].alt)}
                    width={item.id === "thon" ? 805 : 179}
                    height={item.id === "thon" ? 215 : 310}
                    loading="eager"
                    className="h-7 w-auto max-h-8 object-contain"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl xl:text-7xl"
          >
            {t(messages.hero.proofLineTop)}
            <br />
            <span className="bg-gradient-to-r from-white/42 via-white/55 to-indigo-300/70 bg-clip-text text-transparent">
              {t(messages.hero.proofLineBottom)}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-6 text-lg font-light text-white/58 sm:text-xl"
          >
            {t(messages.hero.roleLine)}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/42 lg:mx-0 sm:text-base"
          >
            {t(messages.hero.blurb)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <a
              href="#projects"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-500"
            >
              {t(messages.hero.viewProjects)}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/78 transition-colors hover:border-cyan-300/70 hover:text-cyan-200"
            >
              {t(messages.hero.contactMe)}
            </a>
          </motion.div>
        </div>

        <div className="relative h-[31rem] min-w-0 [perspective:1400px] sm:h-[36rem]">
          {EVIDENCE_MEDIA.map((media, index) => {
            const copy = messages.hero.evidence[index];
            const offset = circularOffset(index, activeIndex, EVIDENCE_MEDIA.length);
            const distance = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <motion.button
                key={media.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${t(messages.hero.showEvidence)} ${t(copy.title)}`}
                animate={{
                  x: offset * 82,
                  y: distance * 32,
                  scale: 1 - distance * 0.095,
                  rotateY: offset * -8,
                  rotateZ: offset * 1.1,
                  opacity: distance > 2 ? 0 : isActive ? 1 : 0.46,
                  zIndex: EVIDENCE_MEDIA.length - distance,
                }}
                transition={{ type: "spring", stiffness: 160, damping: 24 }}
                className={`absolute left-1/2 top-1/2 h-[24rem] w-[min(88vw,37rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.35rem] border bg-[#0d0f16] text-left shadow-2xl outline-none [transform-style:preserve-3d] focus-visible:ring-2 focus-visible:ring-cyan-300 xl:h-[25rem] ${
                  isActive
                    ? "border-white/20 shadow-indigo-950/50"
                    : "border-white/10 shadow-black/50"
                }`}
              >
                <div className="relative h-[62%] overflow-hidden bg-[#10121a]">
                  <Image
                    src={media.src}
                    alt={t(copy.title)}
                    fill
                    sizes="(min-width: 1024px) 592px, 88vw"
                    loading="eager"
                    className={media.fit}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f16] via-transparent to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 min-h-[38%] bg-[#0d0f16] px-5 py-4 sm:px-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300/60">
                    {t(copy.eyebrow)}
                  </p>
                  <h2 className="mt-1.5 text-lg font-bold tracking-tight text-white sm:text-xl">
                    {t(copy.title)}
                  </h2>
                  <p className="mt-1 text-xs text-white/35">{t(copy.meta)}</p>
                </div>
              </motion.button>
            );
          })}

          <div className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {EVIDENCE_MEDIA.map((media, index) => (
              <button
                key={media.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${t(messages.hero.selectEvidence)} ${index + 1}`}
                aria-pressed={index === activeIndex}
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
        className="pointer-events-none absolute bottom-4 left-6 right-6 hidden items-center gap-5 border-t border-white/10 pt-3 font-mono text-[8px] uppercase tracking-[0.17em] text-white/22 lg:flex xl:left-12 xl:right-12"
      >
        <span className="text-cyan-300/50">Archive / Live evidence</span>
        <span>04 indexed records</span>
        <span>Production · Research · Hardware · Product</span>
        <span className="ml-auto" style={{ color: `${activeMedia.accent}99` }}>
          Record 0{activeIndex + 1} / 04 · {t(activeCopy.eyebrow)}
        </span>
      </div>
    </section>
  );
}
