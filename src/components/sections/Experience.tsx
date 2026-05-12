"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";

export default function Experience() {
  const { ref, inView } = useInView();
  const { t } = useLocale();
  const entries = messages.experience.entries;

  return (
    <section id="experience" className="py-24 px-6 bg-[var(--foreground)]/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            {t(messages.experience.sectionLabel)}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t(messages.experience.heading)}
          </h2>

          <div className="space-y-8">
            {entries.map((exp, i) => (
              <motion.div
                key={`exp-${i}`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-6 border-l-2 border-[var(--foreground)]/10 hover:border-indigo-500/50 transition-colors group"
              >
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <div>
                    <span className="font-bold text-lg">{t(exp.role)}</span>
                    <span className="text-[var(--foreground)]/50 mx-2">@</span>
                    <span className="text-indigo-400 font-semibold">{t(exp.org)}</span>
                  </div>
                  <span className="text-sm text-[var(--foreground)]/40 font-mono whitespace-nowrap">
                    {t(exp.period)}
                  </span>
                </div>
                <p className="text-xs text-[var(--foreground)]/30 font-mono mb-3">{t(exp.location)}</p>

                <ul className="space-y-1.5 mb-4">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2 text-sm text-[var(--foreground)]/65 leading-relaxed">
                      <span className="text-indigo-500 mt-1 flex-shrink-0">›</span>
                      {t(b)}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
