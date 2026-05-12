"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TerminalHero from "@/components/TerminalHero";
import { causeLinks } from "@/data/causeLinks";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroCanvas />
      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase"
          >
            Hello, world!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-3 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center sm:text-left">
              Younsoo Park
            </h1>
            <div className="flex shrink-0 items-center justify-center gap-2 sm:gap-2.5 sm:pt-1">
              {causeLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex items-center rounded-md p-1 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-8 w-auto max-h-9 object-contain sm:h-9 sm:max-h-10"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl font-light text-[var(--foreground)]/55 mb-5"
          >
            Software Engineer & Researcher
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-sm text-[var(--foreground)]/45 max-w-sm mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Penn State CS student building at the intersection of AI systems and full-stack engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-colors shadow-lg shadow-indigo-500/20 text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[var(--foreground)]/30 hover:border-indigo-400 hover:text-indigo-400 font-semibold rounded-full transition-colors text-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right: terminal */}
        <div className="flex-1 w-full">
          <TerminalHero />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 rounded-full border-2 border-[var(--foreground)]/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 rounded-full bg-indigo-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
