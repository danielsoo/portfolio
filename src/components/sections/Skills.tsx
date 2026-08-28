"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";
import { getAccent, getAlternatingAccent } from "./accentPalette";

export default function Skills() {
  const { ref, inView } = useInView();
  const { t } = useLocale();
  const groups = messages.skills.groups;
  const stages = messages.skills.stages;

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {t(messages.skills.sectionLabel)}
          </p>
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="text-3xl font-bold md:text-4xl">{t(messages.skills.heading)}</h2>
            <p className="max-w-md text-sm leading-relaxed text-[var(--foreground)]/45">
              {t(messages.skills.browseHint)}
            </p>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-3xl border border-cyan-400/15 bg-[var(--background)]/60 shadow-2xl shadow-black/10">
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(34,211,238,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.09)_1px,transparent_1px)] [background-size:38px_38px]" />
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/[0.08] blur-3xl" />

            <div className="relative flex flex-col gap-4 border-b border-[var(--foreground)]/10 bg-[var(--background)]/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-700/80 dark:text-cyan-400/65">
                  {t(messages.skills.systemLabel)}
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]/70">
                  {t(messages.skills.systemTitle)}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--foreground)]/48">
                <motion.span
                  className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.7)]"
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                {t(messages.skills.systemStatus)}
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute bottom-10 left-[4.45rem] top-10 hidden w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent lg:block">
                <motion.span
                  className="absolute -left-[3px] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,.85)]"
                  animate={{ top: ["0%", "98%"], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                />
              </div>

              {stages.map((stage, stageIndex) => {
                const accent = getAlternatingAccent(stageIndex);
                return (
                  <motion.article
                    key={stage.eyebrow.en}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: stageIndex * 0.09 }}
                    className={`group/stage relative grid gap-8 border-b border-[var(--foreground)]/[0.08] px-6 py-9 transition-colors last:border-b-0 sm:px-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-10 lg:pl-28 ${accent.hoverSurface}`}
                  >
                    <span className={`absolute left-[4.05rem] top-10 hidden h-3 w-3 rounded-sm border opacity-60 transition group-hover/stage:rotate-45 group-hover/stage:opacity-100 lg:block ${accent.border} ${accent.dot}`} />

                    <div>
                      <p className={`font-mono text-[9px] uppercase tracking-[0.2em] ${accent.accentMuted}`}>
                        {String(stageIndex + 1).padStart(2, "0")} / {t(stage.eyebrow)}
                      </p>
                      <h3 className={`mt-3 text-xl font-bold leading-tight ${accent.accent}`}>
                        {t(stage.title)}
                      </h3>
                      <p className="mt-3 text-xs leading-6 text-[var(--foreground)]/58">
                        {t(stage.description)}
                      </p>
                    </div>

                    <div className={`grid gap-8 ${stage.groupIndices.length > 1 ? "xl:grid-cols-2" : ""}`}>
                      {stage.groupIndices.map((groupIndex) => {
                        const group = groups[groupIndex];
                        const groupAccent = getAccent(groupIndex);
                        return (
                          <div key={group.category.en} className={`border-l pl-5 ${accent.line}`}>
                          <div className="flex items-center justify-between gap-4">
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--foreground)]/68">
                              {t(group.category)}
                            </h4>
                            <span className="font-mono text-[9px] text-[var(--foreground)]/38">
                              {String(group.items.length).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                              <SkillChip key={skill} skill={skill} chipClass={groupAccent.chip} />
                            ))}
                          </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-[var(--foreground)]/10 bg-[var(--background)]/65 px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--foreground)]/40 sm:px-8">
              <span>{t(messages.skills.systemFooter)}</span>
              <span>{groups.reduce((total, group) => total + group.items.length, 0)} {t(messages.skills.tools)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillChip({ skill, chipClass }: { skill: string; chipClass: string }) {
  return (
    <span
      className={`rounded-md border px-2.5 py-1.5 font-mono text-[11px] font-medium transition-colors hover:brightness-125 ${chipClass}`}
    >
      {skill}
    </span>
  );
}
