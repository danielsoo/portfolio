"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EditorialHero() {
  return (
    <section className="min-h-[calc(100vh-7.5rem)] bg-[#ece9df] p-3 text-[#111214] sm:p-6">
      <div className="relative mx-auto min-h-[calc(100vh-10.5rem)] max-w-[1500px] overflow-hidden border border-black/20 bg-[#f4f1e8]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(#111 0.55px, transparent 0.65px)",
            backgroundSize: "18px 18px",
            maskImage: "linear-gradient(to right, transparent 8%, black 54%, transparent 94%)",
          }}
        />

        <div className="relative grid min-h-[calc(100vh-10.5rem)] grid-cols-12 grid-rows-[auto_auto_1fr_auto] gap-x-5 px-5 py-7 sm:px-8 lg:px-12 lg:py-10">
          <div className="col-span-12 flex items-start justify-between border-b border-black/30 pb-3 font-mono text-[9px] uppercase tracking-[0.18em] lg:col-span-8">
            <span>03 / Editorial Engineering</span>
            <span>Selected systems · 2024—2026</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 mt-8 lg:col-span-7"
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#2e45d3]">
              Software engineer · Product thinker
            </p>
            <h1 className="text-[clamp(3.8rem,9vw,9.2rem)] font-black leading-[0.76] tracking-[-0.075em]">
              BUILD
              <br />
              <span className="ml-[0.34em] text-[#2e45d3]">MEASURE</span>
              <br />
              LEARN.
            </h1>
          </motion.div>

          <div className="col-span-12 mt-10 grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:mt-8 lg:grid-cols-[1.2fr_0.8fr]">
            <figure className="relative min-h-64 overflow-hidden border border-black/30 bg-[#111] sm:min-h-80 lg:translate-y-12">
              <Image
                src="/projects/levit-shopport-ai/source-contribution-clean.png"
                alt="Levit TypeScript source contribution summary"
                fill
                sizes="(min-width: 1024px) 36vw, 90vw"
                className="object-cover object-left"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-[#111]/90 px-3 py-2 font-mono text-[8px] uppercase tracking-wider text-white/65">
                <span>Levit / Source</span>
                <span>+114,146 TS·TSX</span>
              </figcaption>
            </figure>

            <figure className="relative min-h-64 overflow-hidden border border-black/30 bg-white sm:min-h-80 lg:-translate-y-8">
              <Image
                src="/projects/ieee-battlebot/shot-cad.png"
                alt="Shot combat robot CAD"
                fill
                sizes="(min-width: 1024px) 24vw, 90vw"
                className="object-contain p-3"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-[#f4f1e8]/95 px-3 py-2 font-mono text-[8px] uppercase tracking-wider">
                <span>IEEE / Hardware</span>
                <span>334 J · 1st</span>
              </figcaption>
            </figure>
          </div>

          <div className="col-span-12 mt-10 grid gap-6 border-t border-black/30 pt-4 sm:grid-cols-[1fr_auto] lg:col-span-7">
            <p className="max-w-lg text-sm leading-6 text-black/58">
              I turn ambiguous product problems into systems that can be operated, evaluated, and improved—from AI recommendation infrastructure to machines that survive their own energy.
            </p>
            <div className="flex gap-5 font-mono text-[9px] uppercase tracking-[0.15em]">
              <div><strong className="block text-xl">730</strong>Commits</div>
              <div><strong className="block text-xl">86%</strong>Routing</div>
              <div><strong className="block text-xl">1st</strong>Robotics</div>
            </div>
          </div>

          <div className="col-span-12 mt-8 flex justify-between border-t border-black/30 pt-3 font-mono text-[8px] uppercase tracking-[0.18em] text-black/45">
            <span>Younsoo Park / Portfolio</span>
            <span>AI systems · Product engineering · Research</span>
          </div>
        </div>
      </div>
    </section>
  );
}
