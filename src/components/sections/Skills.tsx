"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";

export default function Skills() {
  const { ref, inView } = useInView();
  const { t } = useLocale();
  const groups = messages.skills.groups;

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            {t(messages.skills.sectionLabel)}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t(messages.skills.heading)}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {groups.map((group, gi) => (
              <motion.div
                key={group.category.en}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.12 }}
                className="p-6 rounded-xl border border-[var(--foreground)]/10 hover:border-indigo-500/40 transition-colors"
              >
                <h3 className="font-semibold text-base mb-4 text-indigo-400 font-mono">
                  {t(group.category)}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-[var(--foreground)]/70 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
