"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type { ExperienceRoute } from "@/data/experiences";
import { getProject } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";
import { localizeProject } from "@/i18n/useLocalizedProject";

export default function ExperienceDetail({ experience }: { experience: ExperienceRoute }) {
  const { locale, t } = useLocale();
  const entry = messages.experience.entries[experience.entryIndex];
  const relatedProjects = experience.projectSlugs
    .map((slug) => getProject(slug))
    .filter((project) => project !== undefined)
    .map((project) => localizeProject(project, locale));
  const workstreamCount = relatedProjects.reduce(
    (count, project) => count + Math.max(project.sections?.length ?? 0, 1),
    0,
  );
  const [activeWorkstreamIndex, setActiveWorkstreamIndex] = useState(0);
  const [workstreamDirection, setWorkstreamDirection] = useState<1 | -1>(1);
  const workstreams = relatedProjects.flatMap((project) =>
    project.sections?.length
      ? project.sections.map((section, sectionIndex) => ({
          caseStudyTitle: project.title,
          projectSlug: project.slug,
          title: section.title,
          body: section.body ?? "",
          bullets: section.bullets ?? [],
          href: `/projects/${project.slug}#section-${String(sectionIndex + 1).padStart(2, "0")}`,
        }))
      : [
          {
            caseStudyTitle: project.title,
            projectSlug: project.slug,
            title: project.title,
            body: project.shortDescription,
            bullets: project.highlights,
            href: `/projects/${project.slug}`,
          },
        ],
  );
  const activeWorkstream = workstreams[activeWorkstreamIndex] ?? workstreams[0];

  const moveWorkstream = (direction: 1 | -1) => {
    if (!workstreams.length) return;
    setWorkstreamDirection(direction);
    setActiveWorkstreamIndex((current) => (current + direction + workstreams.length) % workstreams.length);
  };

  const selectWorkstream = (index: number) => {
    if (index === activeWorkstreamIndex) return;
    setWorkstreamDirection(index > activeWorkstreamIndex ? 1 : -1);
    setActiveWorkstreamIndex(index);
  };

  return (
    <main className="min-h-screen px-6 pb-24 pt-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#experience"
            className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-[var(--foreground)]/40 transition-colors hover:text-indigo-400"
          >
            <span aria-hidden="true">←</span>
            {t(messages.experienceDetail.back)}
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[var(--background)]/70 shadow-2xl shadow-black/10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(99,102,241,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.13)_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-3xl" />
          <div className="relative p-7 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400">
                {t(messages.experienceDetail.eyebrow)} / {String(experience.entryIndex + 1).padStart(2, "0")}
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--foreground)]/40">
                <span className="rounded-full border border-[var(--foreground)]/10 px-3 py-1.5">{t(entry.period)}</span>
                <span className="rounded-full border border-[var(--foreground)]/10 px-3 py-1.5">{t(entry.location)}</span>
                {workstreamCount > 0 && (
                  <span className="rounded-full border border-cyan-400/20 px-3 py-1.5 text-cyan-300/65">
                    {workstreamCount} {t(messages.experienceDetail.workstreams)}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-12 max-w-4xl">
              <p className="font-mono text-xs uppercase tracking-wider text-indigo-400">
                {t(entry.org)}
              </p>
              <h1 className="mt-3 text-4xl font-black leading-[1.02] sm:text-6xl">{t(entry.role)}</h1>
              <p className="mt-7 max-w-3xl text-xl font-medium leading-8 text-[var(--foreground)]/70 sm:text-2xl sm:leading-9">
                {t(experience.hook)}
              </p>
            </div>
          </div>

          <div
            className={`relative grid grid-cols-2 border-t border-[var(--foreground)]/10 bg-black/10 ${
              experience.stats.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {experience.stats.map((stat, index) => (
              <ImpactStat
                key={`${stat.value}-${stat.label.en}`}
                value={stat.value}
                label={t(stat.label)}
                border={index > 0}
                top={index > 1}
                spanFull={experience.stats.length === 3 && index === 2}
              />
            ))}
          </div>
        </motion.header>

        <nav className="sticky top-20 z-30 mt-4 flex items-center gap-1 overflow-x-auto rounded-2xl border border-[var(--foreground)]/10 bg-[var(--background)]/80 p-2 shadow-lg shadow-black/10 backdrop-blur-xl">
          <JumpLink href="#impact" index="01" label={t(messages.experienceDetail.jumpImpact)} />
          <JumpLink href="#role-projects" index="02" label={t(messages.experienceDetail.jumpProjects)} />
          <JumpLink href="#role-stack" index="03" label={t(messages.experienceDetail.jumpStack)} />
        </nav>

        <motion.section
          id="impact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="scroll-mt-40 py-16"
        >
          <SectionHeading
            index="01"
            eyebrow={t(messages.experienceDetail.roleScope)}
            title={t(messages.experienceDetail.roleHighlights)}
          />
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-cyan-400/15 bg-[var(--background)]/55">
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(34,211,238,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.09)_1px,transparent_1px)] [background-size:38px_38px]" />
            {entry.bullets.map((bullet, index) => (
              <article
                key={bullet.en}
                className="group relative grid gap-4 border-b border-[var(--foreground)]/[0.08] px-6 py-7 last:border-b-0 sm:grid-cols-[4rem_14rem_minmax(0,1fr)] sm:items-start sm:gap-6 sm:px-8"
              >
                <span className="font-mono text-xs text-cyan-400/65">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold leading-6 transition-colors group-hover:text-cyan-300">
                  {t(experience.highlightTitles[index])}
                </h3>
                <p className="max-w-3xl text-sm leading-7 text-[var(--foreground)]/55 sm:text-base sm:leading-8">
                  {t(bullet)}
                </p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="role-projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="scroll-mt-40 border-t border-[var(--foreground)]/10 py-16"
        >
          <SectionHeading
            index="02"
            eyebrow={t(messages.experienceDetail.projectsEyebrow)}
            title={t(messages.experienceDetail.projectsTitle)}
          />
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--foreground)]/50">
            {t(messages.experienceDetail.projectsDescription)}
          </p>

          {activeWorkstream ? (
            <div className="mt-10">
              <CarouselToolbar
                current={activeWorkstreamIndex}
                total={workstreams.length}
                hint={t(messages.experienceDetail.slideHint)}
                previousLabel={t(messages.experienceDetail.previousSlide)}
                nextLabel={t(messages.experienceDetail.nextSlide)}
                onPrevious={() => moveWorkstream(-1)}
                onNext={() => moveWorkstream(1)}
              />

              <div
                className="relative mt-4 overflow-hidden rounded-3xl border border-indigo-400/20 bg-[var(--background)]/60 shadow-xl shadow-black/10 outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50"
                role="region"
                aria-roledescription="carousel"
                aria-label={t(messages.experienceDetail.projectsTitle)}
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "ArrowLeft") moveWorkstream(-1);
                  if (event.key === "ArrowRight") moveWorkstream(1);
                }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(99,102,241,.11)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.11)_1px,transparent_1px)] [background-size:38px_38px]" />
                <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-cyan-400/[0.09] blur-3xl" />
                <AnimatePresence initial={false} custom={workstreamDirection} mode="wait">
                  <motion.article
                    key={`${activeWorkstream.projectSlug}-${activeWorkstream.title}`}
                    custom={workstreamDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) moveWorkstream(1);
                      if (info.offset.x > 60) moveWorkstream(-1);
                    }}
                    className="relative flex min-h-[35rem] cursor-grab touch-pan-y flex-col p-7 active:cursor-grabbing sm:min-h-[32rem] sm:p-10"
                  >
                    <div className="relative flex flex-wrap items-start justify-between gap-4 border-b border-[var(--foreground)]/10 pb-5">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-indigo-400">
                          {t(messages.experienceDetail.relatedCaseStudy)}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[var(--foreground)]/70">
                          {activeWorkstream.caseStudyTitle}
                        </p>
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-400/70">
                        {t(messages.experienceDetail.workstream)} / {String(activeWorkstreamIndex + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <div className="relative grid flex-1 gap-8 py-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,.9fr)] lg:items-center lg:gap-12">
                      <div>
                        <h3 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">{activeWorkstream.title}</h3>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--foreground)]/58 sm:text-base sm:leading-8">
                          {activeWorkstream.body}
                        </p>
                      </div>

                      {activeWorkstream.bullets.length > 0 && (
                        <ul className="space-y-3 border-l border-cyan-400/20 pl-5">
                          {activeWorkstream.bullets.slice(0, 4).map((bullet) => (
                            <li key={bullet} className="flex gap-3 text-sm leading-6 text-[var(--foreground)]/52">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-cyan-400/60" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="relative mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[var(--foreground)]/10 pt-5">
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--foreground)]/30">
                        {activeWorkstream.bullets.length} {t(messages.experienceDetail.deliverables)}
                      </span>
                      <div className="flex flex-wrap gap-4">
                        <Link
                          href={`/projects/${activeWorkstream.projectSlug}`}
                          className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--foreground)]/40 transition hover:text-indigo-300"
                        >
                          {t(messages.experienceDetail.openCaseStudy)}
                        </Link>
                        <Link
                          href={activeWorkstream.href}
                          className="font-mono text-[10px] uppercase tracking-[0.14em] text-indigo-400 transition hover:text-cyan-300"
                        >
                          {t(messages.experience.openDetails)} →
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              <CarouselDots
                current={activeWorkstreamIndex}
                total={workstreams.length}
                label={t(messages.experienceDetail.goToSlide)}
                onSelect={selectWorkstream}
              />
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-[var(--foreground)]/15 p-8">
              <h3 className="font-bold">{t(messages.experienceDetail.noProjectsTitle)}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--foreground)]/45">
                {t(messages.experienceDetail.noProjectsBody)}
              </p>
            </div>
          )}
        </motion.section>

        <motion.section
          id="role-stack"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="scroll-mt-40 border-t border-[var(--foreground)]/10 pt-12"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
            {t(messages.experience.stackLabel)}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-indigo-400/20 bg-indigo-500/[0.08] px-3 py-1.5 font-mono text-xs text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400/65">
        {index} / {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold">{title}</h2>
    </div>
  );
}

function ImpactStat({
  label,
  value,
  border = false,
  top = false,
  spanFull = false,
}: {
  label: string;
  value: string;
  border?: boolean;
  top?: boolean;
  spanFull?: boolean;
}) {
  return (
    <div
      className={`p-5 sm:p-6 ${border ? "border-l border-[var(--foreground)]/10" : ""} ${
        top ? "border-t border-[var(--foreground)]/10 lg:border-t-0" : ""
      } ${spanFull ? "col-span-2 lg:col-span-1" : ""}`}
    >
      <p className="text-2xl font-black text-cyan-300 sm:text-3xl">{value}</p>
      <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--foreground)]/35">{label}</p>
    </div>
  );
}

function JumpLink({ href, index, label }: { href: string; index: string; label: string }) {
  return (
    <a
      href={href}
      className="flex-none rounded-xl px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--foreground)]/45 transition hover:bg-indigo-500/10 hover:text-indigo-300"
    >
      <span className="mr-2 text-cyan-400/55">{index}</span>
      {label}
    </a>
  );
}

const slideVariants = {
  enter: (direction: 1 | -1) => ({ x: direction * 72, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: 1 | -1) => ({ x: direction * -72, opacity: 0 }),
};

function CarouselToolbar({
  current,
  total,
  hint,
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
}: {
  current: number;
  total: number;
  hint: string;
  previousLabel: string;
  nextLabel: string;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em]">
        <span className="text-cyan-400">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="hidden text-[var(--foreground)]/28 sm:inline">{hint}</span>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onPrevious}
          aria-label={previousLabel}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--foreground)]/12 text-[var(--foreground)]/55 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label={nextLabel}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--foreground)]/12 text-[var(--foreground)]/55 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

function CarouselDots({
  current,
  total,
  label,
  onSelect,
}: {
  current: number;
  total: number;
  label: string;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label={label}>
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={current === index}
          aria-label={`${label} ${index + 1}`}
          onClick={() => onSelect(index)}
          className={`h-1.5 rounded-full transition-all ${
            current === index
              ? "w-9 bg-cyan-400"
              : "w-2.5 bg-[var(--foreground)]/15 hover:bg-[var(--foreground)]/35"
          }`}
        />
      ))}
    </div>
  );
}
