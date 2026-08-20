"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";
import { getAlternatingAccent } from "./accentPalette";

export default function Experience() {
  const { ref, inView } = useInView();
  const { t } = useLocale();
  const entries = messages.experience.entries;

  return (
    <section id="experience" className="bg-[var(--foreground)]/[0.02] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-indigo-400">
            {t(messages.experience.sectionLabel)}
          </p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            {t(messages.experience.heading)}
          </h2>

          <div className="space-y-4">
            {entries.map((experience, index) => {
              const accent = getAlternatingAccent(index);
              return (
                <motion.article
                  key={experience.org.en}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className={`group relative overflow-hidden rounded-2xl border px-5 py-5 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-0.5 sm:px-6 ${accent.border} ${accent.hoverBorder} ${accent.surface}`}
                >
                  <div className={`absolute inset-y-4 left-0 w-0.5 rounded-r-full opacity-75 transition-opacity group-hover:opacity-100 ${accent.dot}`} />

                <div className="flex items-start gap-4 sm:gap-5">
                  <div className={`grid h-14 w-14 flex-none place-items-center overflow-hidden rounded-xl border bg-white shadow-sm shadow-black/10 sm:h-16 sm:w-16 ${accent.border}`}>
                    <Image
                      src={experienceLogos[index].src}
                      alt={experienceLogos[index].alt}
                      width={64}
                      height={64}
                      className={`h-full w-full object-contain ${experienceLogos[index].className}`}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div>
                        <p className="text-lg font-bold leading-tight sm:text-xl">
                          {t(experience.org)}
                        </p>
                        <div className="mt-1.5 flex flex-wrap items-center gap-2">
                          <h3 className={`font-semibold transition-colors ${accent.accent}`}>
                            {t(experience.role)}
                          </h3>
                          <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-medium ${accent.chip}`}>
                            {t(experience.employmentType)}
                          </span>
                        </div>
                      </div>
                      <span className="whitespace-nowrap font-mono text-xs text-[var(--foreground)]/40 sm:pt-1 sm:text-sm">
                        {t(experience.period)}
                      </span>
                    </div>

                    <p className="mt-3 font-mono text-xs text-[var(--foreground)]/30">
                      {t(experience.location)}
                    </p>
                  </div>
                </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const experienceLogos = [
  {
    src: "/logos/experience/levit.png",
    alt: "Levit logo",
    className: "p-2.5",
  },
  {
    src: "/logos/experience/nittany-ai.svg",
    alt: "Penn State Nittany AI Alliance logo",
    className: "p-2",
  },
  {
    src: "/logos/experience/rokaf.png",
    alt: "Republic of Korea Air Force emblem",
    className: "p-1.5",
  },
  {
    src: "/logos/experience/atom-tech.jpg",
    alt: "Atom Tech Solutions logo",
    className: "p-1.5",
  },
] as const;
