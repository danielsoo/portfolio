"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";

export default function Awards() {
  const { ref, inView } = useInView();
  const { t } = useLocale();
  const items = messages.awards.items;

  return (
    <section id="awards" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            {t(messages.awards.sectionLabel)}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t(messages.awards.heading)}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((award, i) => (
              <motion.div
                key={award.title.en}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group p-5 rounded-xl border border-[var(--foreground)]/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{award.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm leading-tight mb-1">{t(award.title)}</p>
                    <p className="text-indigo-400 text-xs font-mono">{t(award.org)}</p>
                    <p className="text-[var(--foreground)]/30 text-xs font-mono mt-1">{t(award.date)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
