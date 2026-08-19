"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ArchitectureStackHero from "./ArchitectureStackHero";
import AICommandCoreHero from "./AICommandCoreHero";
import EditorialHero from "./EditorialHero";
import EvidenceCommandHero from "./EvidenceCommandHero";
import EvidenceDeckHero from "./EvidenceDeckHero";

const DESIGNS = [
  {
    id: "evidence",
    number: "01",
    label: "Evidence Deck",
    shortLabel: "Evidence",
    component: EvidenceDeckHero,
  },
  {
    id: "architecture",
    number: "02",
    label: "Architecture Stack",
    shortLabel: "Stack",
    component: ArchitectureStackHero,
  },
  {
    id: "editorial",
    number: "03",
    label: "Editorial Engineering",
    shortLabel: "Editorial",
    component: EditorialHero,
  },
  {
    id: "command-core",
    number: "04",
    label: "Engineering Command Core",
    shortLabel: "Eng Core",
    component: AICommandCoreHero,
  },
  {
    id: "evidence-command",
    number: "05",
    label: "Evidence Command",
    shortLabel: "Hybrid",
    component: EvidenceCommandHero,
  },
] as const;

type DesignId = (typeof DESIGNS)[number]["id"];

export default function DesignLab() {
  const [activeDesign, setActiveDesign] = useState<DesignId>("evidence");
  const selected = DESIGNS.find((design) => design.id === activeDesign) ?? DESIGNS[0];
  const ActiveHero = selected.component;

  return (
    <main className="min-h-screen bg-[#08090d] pt-16 text-white">
      <header className="sticky top-16 z-40 border-y border-white/10 bg-[#08090d]/90 px-5 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300/55">
              Hero design lab
            </span>
            <span className="hidden text-xs text-white/30 md:inline">Choose a direction to preview</span>
          </div>

          <div className="flex w-full gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1 xl:w-auto">
            {DESIGNS.map((design) => {
              const isActive = design.id === activeDesign;
              return (
                <button
                  key={design.id}
                  type="button"
                  onClick={() => setActiveDesign(design.id)}
                  aria-pressed={isActive}
                  className={`min-w-0 flex-1 rounded-lg px-2 py-2 text-center font-mono text-[9px] uppercase tracking-[0.08em] transition-colors xl:flex-none xl:px-4 xl:text-left xl:text-[10px] xl:tracking-[0.12em] ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white/45 hover:bg-white/[0.06] hover:text-white/80"
                  }`}
                >
                  <span className={isActive ? "text-black/45" : "text-cyan-300/40"}>
                    {design.number}
                  </span>{" "}
                  <span className="xl:hidden">{design.shortLabel}</span>
                  <span className="hidden xl:inline">{design.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <ActiveHero />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
