"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";
import { localizeProject } from "@/i18n/useLocalizedProject";
import { useScrollLock } from "@/hooks/useScrollLock";
import ProjectMediaGallery from "./ProjectMediaGallery";

export default function ProjectDetail({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const p = useMemo(() => localizeProject(project, locale), [project, locale]);
  const [expandedImage, setExpandedImage] = useState<SectionMedia | null>(null);

  useScrollLock(!!expandedImage);

  useEffect(() => {
    if (!expandedImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedImage(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [expandedImage]);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground)]/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-mono mb-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t(messages.projectDetail.back)}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-mono text-[var(--foreground)]/30 uppercase tracking-widest">
              {p.type}
            </span>
            <span className={`text-xs px-2.5 py-1 rounded-full font-mono ${project.badgeColor}`}>
              {p.badge}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {p.title}
          </h1>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--foreground)]/20 hover:border-[var(--foreground)]/50 text-sm font-medium transition-colors"
              >
                <GitHubIcon /> {t(messages.projectDetail.github)}
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
              >
                <ExternalIcon /> {t(messages.projectDetail.liveSite)}
              </a>
            )}
            {project.appLinks?.appStore && (
              <a
                href={project.appLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition hover:opacity-80"
              >
                <span aria-hidden="true">↗</span>
                {t(messages.projectDetail.appStore)}
              </a>
            )}
            {project.appLinks?.googlePlay && (
              <a
                href={project.appLinks.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/35 bg-cyan-400/[0.08] px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/[0.14]"
              >
                <span aria-hidden="true">↗</span>
                {t(messages.projectDetail.googlePlay)}
              </a>
            )}
          </div>
        </motion.div>

        {p.impact && p.impact.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12"
          >
            <h2 className="text-lg font-bold mb-4 text-indigo-600 dark:text-indigo-400 font-mono">
              {t(messages.projectDetail.impact)}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {p.impact.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.02] px-4 py-5 text-center"
                >
                  <div className="text-xl md:text-2xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--foreground)]/50 mt-1.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectMediaGallery
            projectSlug={project.slug}
            projectTitle={p.title}
            staticImages={project.images}
            staticVideos={project.videos ?? []}
          />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-lg font-bold mb-4 text-indigo-600 dark:text-indigo-400 font-mono">
                {t(messages.projectDetail.overview)}
              </h2>
              <div className="space-y-4">
                {p.longDescription.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[var(--foreground)]/70 leading-relaxed text-sm md:text-base">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {p.sections?.map((section, sectionIndex) => (
              <div
                key={section.title}
                id={`section-${String(sectionIndex + 1).padStart(2, "0")}`}
                className="scroll-mt-28"
              >
                <h2 className="text-lg font-bold mb-4 text-cyan-700 dark:text-cyan-400 font-mono">
                  <span className="text-[var(--foreground)]/25 mr-2">
                    {String(sectionIndex + 1).padStart(2, "0")}.
                  </span>
                  {section.title}
                </h2>
                <div
                  className={
                    section.media?.length
                      ? "grid gap-8 md:grid-cols-2 md:items-start"
                      : undefined
                  }
                >
                  <div>
                    {section.body && (
                      <p className="text-[var(--foreground)]/70 leading-relaxed text-sm md:text-base mb-4">
                        {section.body}
                      </p>
                    )}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-3 border-l border-cyan-500/20 pl-4">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm text-[var(--foreground)]/70 leading-relaxed">
                            <span className="text-cyan-700 dark:text-cyan-400 font-mono mt-0.5 flex-shrink-0">›</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {section.media && section.media.length > 0 && (
                    <aside aria-label={locale === "ko" ? "설계 참고 자료" : "Supporting design evidence"}>
                      <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--foreground)]/30">
                        {locale === "ko" ? "설계 참고 자료" : "Design evidence"}
                      </p>
                      <div className={`grid gap-4 ${section.media.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                        {section.media.map((item, mediaIndex) => (
                          <figure
                            key={item.src}
                            className={
                              section.media &&
                              section.media.length > 1 &&
                              section.media.length % 2 === 1 &&
                              mediaIndex === section.media.length - 1
                                ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.5rem)]"
                                : undefined
                            }
                          >
                            <button
                              type="button"
                              onClick={() => setExpandedImage(item)}
                              aria-label={
                                locale === "ko"
                                  ? `${item.alt} 크게 보기`
                                  : `Enlarge ${item.alt}`
                              }
                              className="group block w-full cursor-zoom-in overflow-hidden rounded-lg bg-[var(--foreground)]/[0.03] text-left shadow-lg shadow-black/10 outline-none transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                            >
                              <Image
                                src={item.src}
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                                sizes="(min-width: 1024px) 19vw, (min-width: 768px) 24vw, 44vw"
                                className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.015]"
                              />
                            </button>
                            {item.caption && (
                              <figcaption className="mt-2 text-[11px] leading-relaxed text-[var(--foreground)]/45">
                                {item.caption}
                              </figcaption>
                            )}
                          </figure>
                        ))}
                      </div>
                    </aside>
                  )}
                </div>
              </div>
            ))}

            <div>
              <h2 className="text-lg font-bold mb-4 text-indigo-600 dark:text-indigo-400 font-mono">
                {t(messages.projectDetail.highlights)}
              </h2>
              <ul className="space-y-3">
                {p.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--foreground)]/70 leading-relaxed">
                    <span className="text-indigo-600 dark:text-indigo-400 font-mono mt-0.5 flex-shrink-0">›</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {p.keyTakeaways && p.keyTakeaways.length > 0 && (
              <div>
                <h2 className="text-lg font-bold mb-4 text-amber-400 font-mono">
                  {t(messages.projectDetail.keyTakeaways)}
                </h2>
                <ul className="space-y-3">
                  {p.keyTakeaways.map((k, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--foreground)]/70 leading-relaxed">
                      <span className="text-amber-400 font-mono mt-0.5 flex-shrink-0">✓</span>
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 lg:sticky lg:top-28 lg:self-start"
          >
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--foreground)]/30 mb-3">
                {t(messages.projectDetail.techStack)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--foreground)]/30 mb-3">
                {project.appLinks
                  ? t(messages.projectDetail.tryApp)
                  : t(messages.projectDetail.links)}
              </h3>
              <div className="space-y-2">
                {project.appLinks?.appStore && (
                  <a
                    href={project.appLinks.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--foreground)]/60 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <ExternalIcon /> {t(messages.projectDetail.appStore)}
                  </a>
                )}
                {project.appLinks?.googlePlay && (
                  <a
                    href={project.appLinks.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--foreground)]/60 transition-colors hover:text-cyan-700 dark:text-cyan-400"
                  >
                    <ExternalIcon /> {t(messages.projectDetail.googlePlay)}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--foreground)]/60 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <GitHubIcon /> {t(messages.projectDetail.sourceCode)}
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--foreground)]/60 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalIcon /> {t(messages.projectDetail.liveSite)}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {expandedImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={locale === "ko" ? "확대 이미지" : "Expanded image"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          >
            <motion.figure
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-full max-w-6xl cursor-default flex-col items-center"
            >
              <Image
                src={expandedImage.src}
                alt={expandedImage.alt}
                width={expandedImage.width}
                height={expandedImage.height}
                sizes="100vw"
                className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
              {expandedImage.caption && (
                <figcaption className="mt-3 max-w-3xl text-center text-sm leading-relaxed text-white/65">
                  {expandedImage.caption}
                </figcaption>
              )}
              <button
                type="button"
                autoFocus
                onClick={() => setExpandedImage(null)}
                aria-label={locale === "ko" ? "확대 이미지 닫기" : "Close expanded image"}
                className="absolute -right-2 -top-2 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/75 text-xl text-white/80 shadow-xl transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:-right-5 sm:-top-5"
              >
                ×
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

type SectionMedia = NonNullable<
  NonNullable<Project["sections"]>[number]["media"]
>[number];

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
