"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";

const roleStyles = [
  {
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/30",
    accent: "text-indigo-400",
  },
  {
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
  },
  {
    color: "from-violet-500/20 to-pink-500/20",
    border: "border-violet-500/30",
    accent: "text-violet-400",
  },
  {
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    accent: "text-amber-400",
  },
] as const;

export default function Leadership() {
  const { ref, inView } = useInView();
  const { t } = useLocale();
  const roles = messages.leadership.roles;

  return (
    <section id="leadership" className="py-24 px-6 bg-[var(--foreground)]/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            {t(messages.leadership.sectionLabel)}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t(messages.leadership.heading)}
          </h2>
          <p className="text-[var(--foreground)]/50 mb-12 max-w-2xl">
            {t(messages.leadership.intro)}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, i) => {
              const style = roleStyles[i];
              return (
                <motion.div
                  key={`leadership-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`group relative p-6 rounded-xl border ${style.border} bg-gradient-to-br ${style.color} hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                >
                  <div className={`absolute -right-2 -bottom-3 text-6xl font-black opacity-[0.06] ${style.accent} select-none pointer-events-none leading-none`}>
                    {role.stat}
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <p className={`text-xs font-mono uppercase tracking-widest mb-1 ${style.accent}`}>
                          {t(role.org)}
                        </p>
                        <h3 className="font-bold text-xl leading-tight">
                          {t(role.title)}
                          {role.year && (
                            <span className={`ml-2 text-base font-semibold ${style.accent}`}>
                              ({role.year})
                            </span>
                          )}
                        </h3>
                      </div>
                      <span className="text-xs text-[var(--foreground)]/35 font-mono whitespace-nowrap mt-1">
                        {t(role.period)}
                      </span>
                    </div>

                    <p className="text-sm text-[var(--foreground)]/65 leading-relaxed">
                      {t(role.description)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
