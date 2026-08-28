"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";
import { localizeProject } from "@/i18n/useLocalizedProject";
import { getAlternatingAccent } from "./accentPalette";

const projectPriority = new Map([
  ["levit-shopport-ai", 0],
  ["ieee-battlebot", 1],
  ["federated-tinyml", 2],
  ["signum", 3],
  ["asme-website", 4],
  ["hangukgwan", 5],
]);

export default function Projects() {
  const { ref, inView } = useInView();
  const { locale, t } = useLocale();
  const railRef = useRef<HTMLDivElement>(null);
  const orderedProjects = [...projects].sort(
    (a, b) => (projectPriority.get(a.slug) ?? Number.MAX_SAFE_INTEGER) - (projectPriority.get(b.slug) ?? Number.MAX_SAFE_INTEGER),
  );

  const moveRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = Array.from(rail.querySelectorAll<HTMLElement>("[data-project-card]"));
    if (!cards.length) return;

    // Scroll exactly to the next/previous card's snap-center position instead
    // of an approximate clientWidth-based offset. An approximate offset lands
    // between snap points, so the smooth-scroll animation and the browser's
    // own snap-correction fight each other mid-scroll, which reads as stutter.
    const railCenter = rail.scrollLeft + rail.clientWidth / 2;
    let currentIndex = 0;
    let closestDistance = Infinity;
    cards.forEach((card, i) => {
      const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - railCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        currentIndex = i;
      }
    });

    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), cards.length - 1);
    const target = cards[nextIndex];
    rail.scrollTo({
      left: target.offsetLeft + target.offsetWidth / 2 - rail.clientWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="overflow-hidden bg-[var(--foreground)]/[0.02] py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto mb-9 flex max-w-6xl flex-col justify-between gap-5 px-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {t(messages.projects.sectionLabel)}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">{t(messages.projects.heading)}</h2>
          </div>
          <div className="md:text-right">
            <p className="max-w-md text-sm leading-relaxed text-[var(--foreground)]/45">
              {t(messages.projects.browseHint)}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-700/70 dark:text-cyan-400/55">
              ← {t(messages.projects.dragHint)} →
            </p>
          </div>
        </div>

        <div
          ref={railRef}
          className="project-carousel flex snap-x snap-mandatory items-start gap-5 overflow-x-auto px-[max(1.5rem,calc((100vw-72rem)/2))] pb-7 md:items-stretch"
        >
          {orderedProjects.map((project, index) => {
            const localized = localizeProject(project, locale);
            const accent = getAlternatingAccent(index);
            return (
              <motion.article
                key={project.slug}
                data-project-card
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative grid min-h-[34rem] w-[86vw] max-w-[62rem] flex-none snap-center overflow-hidden rounded-3xl border border-[var(--foreground)]/10 bg-[var(--background)]/75 shadow-2xl shadow-black/10 transition duration-300 md:grid-cols-[1.06fr_.94fr] ${accent.hoverBorder}`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`${t(messages.projects.viewDetails)}: ${localized.title}`}
                  className="absolute inset-0 z-10 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                />

                <div className="relative h-64 overflow-hidden border-b border-[var(--foreground)]/10 bg-[#090910] md:h-auto md:min-h-full md:border-b-0 md:border-r">
                  {project.images[0] ? (
                    project.slug === "levit-shopport-ai" ? (
                      <Image
                        src={project.images[0]}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 86vw, 52vw"
                        className="object-cover object-[center_64%] opacity-90 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
                      />
                    ) : (
                      <Image
                        src={project.images[0]}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 86vw, 52vw"
                        className="object-cover opacity-80 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
                      />
                    )
                  ) : (
                    <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,.2),transparent_45%),linear-gradient(135deg,#0d0d18,#08080d)]">
                      <span className="font-mono text-8xl font-black text-white/[0.04]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070c] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#07070c]/35" />
                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-black/70 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/60">
                      CASE / {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`rounded-full px-3 py-1.5 font-mono text-[9px] ${project.badgeColor}`}>
                      {localized.badge}
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none relative flex flex-col p-7 sm:p-9">
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(99,102,241,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.12)_1px,transparent_1px)] [background-size:34px_34px]" />
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-60 ${accent.gradient}`} />
                  <div className="relative">
                    <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${accent.accentMuted}`}>
                      {localized.type}
                    </p>
                    <h3 className={`mt-4 min-h-[4.05rem] text-3xl font-bold leading-[1.08] transition-colors ${accent.groupHoverAccent}`}>
                      {localized.title}
                    </h3>
                    <p className="mt-5 line-clamp-4 text-sm leading-7 text-[var(--foreground)]/58">
                      {localized.shortDescription}
                    </p>
                  </div>

                  {project.impact?.length ? (
                    <div className="relative mt-7 grid grid-cols-2 gap-3">
                      {project.impact.slice(0, 2).map((item) => (
                        <div key={`${item.value}-${item.label}`} className="rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.025] p-3">
                          <p className="text-xl font-black text-cyan-700 dark:text-cyan-300">{item.value}</p>
                          <p className="mt-1 line-clamp-2 font-mono text-[9px] uppercase tracking-wide text-[var(--foreground)]/35">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="relative mt-auto pt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="rounded-full bg-indigo-500/10 px-2.5 py-1 font-mono text-[10px] text-indigo-600/80 dark:text-indigo-300/80">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1 py-1 font-mono text-[10px] text-[var(--foreground)]/30">+{project.tags.length - 4}</span>
                      )}
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-[var(--foreground)]/10 pt-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
                        {t(messages.projects.viewDetails)} →
                      </span>
                      <div className="pointer-events-auto relative z-20 flex gap-3">
                        {project.appLinks?.appStore && (
                          <a
                            href={project.appLinks.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-[var(--foreground)]/15 px-2.5 py-1 font-mono text-[9px] text-[var(--foreground)]/50 transition hover:border-indigo-400/50 hover:text-indigo-600 dark:hover:text-indigo-300"
                            title={t(messages.projects.appStoreTitle)}
                            aria-label={t(messages.projects.appStoreTitle)}
                          >
                            iOS
                          </a>
                        )}
                        {project.appLinks?.googlePlay && (
                          <a
                            href={project.appLinks.googlePlay}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-[var(--foreground)]/15 px-2.5 py-1 font-mono text-[9px] text-[var(--foreground)]/50 transition hover:border-cyan-400/50 hover:text-cyan-700 dark:hover:text-cyan-300"
                            title={t(messages.projects.googlePlayTitle)}
                            aria-label={t(messages.projects.googlePlayTitle)}
                          >
                            Android
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)]/35 transition hover:text-[var(--foreground)]" title={t(messages.projects.githubTitle)}>
                            <GitHubIcon />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)]/35 transition hover:text-indigo-600 dark:hover:text-indigo-400" title={t(messages.projects.liveSiteTitle)}>
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
          <div aria-hidden="true" className="w-[max(0px,calc((100vw-72rem)/2-1.25rem))] flex-none" />
        </div>

        <div className="mt-9 flex items-center justify-center gap-8">
          <RailButton label={t(messages.projects.previousProject)} direction="left" onClick={() => moveRail(-1)} />
          <span className="h-px w-10 bg-gradient-to-r from-transparent via-[var(--foreground)]/15 to-transparent" />
          <RailButton label={t(messages.projects.nextProject)} direction="right" onClick={() => moveRail(1)} />
        </div>
      </motion.div>
    </section>
  );
}

function RailButton({
  label,
  direction,
  onClick,
}: {
  label: string;
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group relative grid h-12 w-12 place-items-center rounded-full border border-[var(--foreground)]/15 bg-[var(--background)]/80 text-[var(--foreground)]/55 shadow-lg shadow-black/10 backdrop-blur-sm transition-colors hover:border-indigo-400/60 hover:text-indigo-600 dark:hover:text-indigo-300"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-indigo-500/0 shadow-[0_0_0_0_rgba(99,102,241,0)] transition group-hover:bg-indigo-500/10 group-hover:shadow-[0_0_22px_2px_rgba(99,102,241,0.25)]" />
      <svg
        className={`relative h-4 w-4 transition-transform ${direction === "left" ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "left" ? <path d="M15 19l-7-7 7-7" /> : <path d="M9 5l7 7-7 7" />}
      </svg>
    </motion.button>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12.017 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
