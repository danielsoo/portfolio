"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";

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

          <div className="space-y-8">
            {entries.map((experience, index) => (
              <motion.article
                key={experience.org.en}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative border-l-2 border-[var(--foreground)]/10 py-1 pl-6 transition-colors hover:border-indigo-500/50"
              >
                <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-indigo-500 transition-transform group-hover:scale-150" />

                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="grid h-14 w-14 flex-none place-items-center overflow-hidden rounded-xl border border-[var(--foreground)]/10 bg-white shadow-sm shadow-black/10 sm:h-16 sm:w-16">
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
                          <h3 className="font-semibold text-indigo-400 transition-colors group-hover:text-cyan-300">
                            {t(experience.role)}
                          </h3>
                          <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-indigo-300">
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
            ))}
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
