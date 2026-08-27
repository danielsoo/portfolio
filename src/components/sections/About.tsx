"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DetailDialog from "@/components/DetailDialog";
import PdfPreviewModal from "@/components/PdfPreviewModal";
import { PDF_DOCUMENTS } from "@/data/pdfDocuments";
import { useInView } from "@/hooks/useInView";
import { usePdfPreview } from "@/hooks/usePdfPreview";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";

type StoryKey = "build" | "levit" | "research" | "profile";

function StoryPhotoBackground({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0">
      <Image src={src} alt={alt} fill className="object-cover opacity-[0.32]" />
      <div className="absolute inset-0 bg-[var(--background)]/55" />
    </div>
  );
}

function ResearchArt() {
  return (
    <div className="absolute inset-0 opacity-[0.34]">
      <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="researchGlow" cx="70%" cy="20%" r="65%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#researchGlow)" />
        <g stroke="#818cf8" strokeWidth="1" fill="none">
          <path d="M20 40 H140 L160 60 H260" />
          <path d="M40 120 H180 L200 100 H340" />
          <path d="M20 200 H120 L140 220 H300 L320 200 H380" />
          <path d="M60 260 H220 L240 240 H360" />
        </g>
        <g fill="#22d3ee">
          <circle cx="140" cy="40" r="3.5" />
          <circle cx="260" cy="60" r="3.5" />
          <circle cx="200" cy="100" r="3.5" />
          <circle cx="340" cy="100" r="3.5" />
          <circle cx="140" cy="220" r="3.5" />
          <circle cx="320" cy="200" r="3.5" />
          <circle cx="240" cy="240" r="3.5" />
        </g>
        <g stroke="#a78bfa" strokeWidth="1" fill="none">
          <circle cx="230" cy="150" r="46" />
          <circle cx="230" cy="150" r="70" />
        </g>
      </svg>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView();
  const { preview, setPreview, closePreview } = usePdfPreview();
  const { t } = useLocale();
  const [activeStory, setActiveStory] = useState<StoryKey | null>(null);

  const storyOpen = activeStory !== null;
  const openStory = (key: StoryKey) => setActiveStory(key);
  const closeStory = () => setActiveStory(null);
  const currentStory = activeStory ?? "build";

  const storyContent: Record<
    StoryKey,
    { eyebrow: string; title: string; meta: string; paragraphs: string[]; background?: ReactNode; showTags?: boolean }
  > = {
    build: {
      eyebrow: `01 / ${t(messages.about.cardBuild)}`,
      title: t(messages.about.cardBuildTitle),
      meta: "Younsoo Park · Penn State CS + Mathematics",
      paragraphs: [t(messages.about.p1), t(messages.about.p2), t(messages.about.p3)],
      showTags: true,
    },
    levit: {
      eyebrow: `02 / ${t(messages.about.cardNow)}`,
      title: "Associate Problem Solver",
      meta: "Levit · Shopport · iOS & Android · 2026",
      paragraphs: [t(messages.about.levitStoryP1), t(messages.about.levitStoryP2)],
      background: <StoryPhotoBackground src="/projects/levit-shopport-ai/pretend_working.jpeg" alt="" />,
    },
    research: {
      eyebrow: `03 / ${t(messages.about.cardResearch)}`,
      title: t(messages.about.cardResearchTitle),
      meta: "Federated Learning · TinyML · IoT Security",
      paragraphs: [t(messages.about.researchStoryP1), t(messages.about.researchStoryP2)],
      background: <ResearchArt />,
    },
    profile: {
      eyebrow: `04 / ${t(messages.about.cardProfile)}`,
      title: "Penn State University",
      meta: "CS + Mathematics · '27 · Dean's List",
      paragraphs: [t(messages.about.p1), t(messages.about.profileStoryP2)],
      background: <StoryPhotoBackground src="/projects/others/PSU_oldmain.jpg" alt="" />,
    },
  };
  const story = storyContent[currentStory];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-indigo-400">
            {t(messages.about.sectionLabel)}
          </p>
          <div className="mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="text-3xl font-bold md:text-4xl">{t(messages.about.title)}</h2>
            <p className="max-w-md text-sm leading-relaxed text-[var(--foreground)]/45">
              {t(messages.about.browseHint)}
            </p>
          </div>

          <div className="grid gap-4 min-[900px]:grid-cols-12">
            <button
              type="button"
              onClick={() => openStory("build")}
              className="group relative flex min-h-[34rem] flex-col overflow-hidden rounded-2xl border border-indigo-400/20 bg-[#0d0d1a] text-left shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 min-[900px]:col-span-6"
            >
              <div className="flex items-center gap-2 border-b border-white/5 bg-[#1e1e2e] px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/25">{t(messages.about.codeFileName)}</span>
                <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-300/45">
                  {t(messages.about.openStory)} +
                </span>
              </div>

              <div className="px-6 py-6 pb-16 font-mono text-xs leading-6 sm:px-8">
                <div>
                  <Kw>{t(messages.about.codeConst)}</Kw> <Var>{t(messages.about.codeVar)}</Var> <Punct>= {"{"}</Punct>
                </div>
                <CodeRow label={t(messages.about.codeKeys.name)} value={t(messages.about.codeStrings.nameVal)} />
                <CodeRow label={t(messages.about.codeKeys.school)} value={t(messages.about.codeStrings.schoolVal)} />
                <CodeRow label={t(messages.about.codeKeys.major)} value={t(messages.about.codeStrings.majorVal)} />
                <CodeRow label={t(messages.about.codeKeys.status)} value={t(messages.about.codeStrings.statusVal)} />
                <CodeRow label={t(messages.about.codeKeys.location)} value={t(messages.about.codeStrings.locationVal)} />
                <CodeRow label={t(messages.about.codeKeys.currentRole)} value={t(messages.about.codeStrings.currentRoleVal)} />
                <div className="mt-1 pl-5">
                  <Key>{t(messages.about.codeKeys.research)}</Key>
                  <Punct>: [</Punct>
                </div>
                {[messages.about.codeStrings.r1, messages.about.codeStrings.r2, messages.about.codeStrings.r3].map((item) => (
                  <div key={item.en} className="pl-10">
                    <Str>&quot;{t(item)}&quot;</Str>
                    <Punct>,</Punct>
                  </div>
                ))}
                <div className="pl-5"><Punct>],</Punct></div>
                <CodeRow label={t(messages.about.codeKeys.openTo)} value={t(messages.about.codeStrings.openVal)} />
                <div><Punct>{"};"}</Punct></div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-indigo-500/[0.10] to-transparent" />
            </button>

            <div className="grid gap-4 min-[900px]:col-span-6 min-[900px]:grid-rows-[1fr_auto]">
              <button
                type="button"
                onClick={() => openStory("build")}
                className="group relative min-h-[25rem] overflow-hidden rounded-2xl border border-[var(--foreground)]/10 bg-[var(--background)]/65 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(34,211,238,0.11),transparent_33%),linear-gradient(145deg,transparent_55%,rgba(99,102,241,0.08))]" />
                <div className="relative grid min-h-[25rem] grid-cols-1 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="flex flex-col p-6 sm:p-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400">
                      01 / {t(messages.about.cardBuild)}
                    </p>
                    <h3 className="mt-8 text-2xl font-bold leading-tight">
                      {t(messages.about.cardBuildTitle)}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-[var(--foreground)]/55">
                      {t(messages.about.storySummary)}
                    </p>
                    <span className="mt-auto pt-8 font-mono text-[10px] uppercase tracking-[0.15em] text-indigo-400">
                      {t(messages.about.openStory)} →
                    </span>
                  </div>

                  <div className="relative m-3 mt-0 min-h-72 overflow-hidden rounded-xl border border-dashed border-cyan-300/20 bg-[#0b0f19]/65 sm:mt-3 sm:ml-0 sm:min-h-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:18px_18px]" />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-indigo-500/15 to-transparent" />
                    <div className="absolute left-1/2 top-[24%] h-16 w-16 -translate-x-1/2 rounded-full border border-cyan-200/25 bg-cyan-300/[0.04]" />
                    <div className="absolute bottom-[12%] left-1/2 h-[48%] w-[72%] -translate-x-1/2 rounded-t-[45%] border border-b-0 border-cyan-200/20 bg-indigo-400/[0.035]" />
                    <p className="absolute inset-x-3 bottom-4 text-center font-mono text-[8px] uppercase tracking-[0.16em] text-cyan-200/35">
                      {t(messages.about.portraitLabel)}
                    </p>
                  </div>
                </div>
              </button>

              <div>
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--foreground)]/30">
                  {t(messages.about.documentsLabel)}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {PDF_DOCUMENTS.map((doc) => (
                    <button
                      key={doc.href}
                      type="button"
                      onClick={() =>
                        setPreview({
                          href: doc.href,
                          downloadName: doc.downloadName,
                          label: t(messages.documents[doc.id].label),
                          short: t(messages.documents[doc.id].short),
                        })
                      }
                      className="group min-h-28 rounded-2xl border border-indigo-400/20 bg-indigo-500/[0.08] p-4 text-left transition hover:-translate-y-0.5 hover:border-indigo-300/45 hover:bg-indigo-500/[0.12]"
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-bold">{t(messages.documents[doc.id].label)}</span>
                        <span className="font-mono text-indigo-400 transition-transform group-hover:translate-x-1">↗</span>
                      </span>
                      <span className="mt-3 block text-xs leading-5 text-[var(--foreground)]/40">
                        {t(messages.documents[doc.id].short)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 min-[900px]:col-span-12">
              <button
                type="button"
                onClick={() => openStory("levit")}
                className="group relative min-h-52 overflow-hidden rounded-2xl border border-[var(--foreground)]/10 bg-[var(--background)]/65 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40"
              >
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl" />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-indigo-400">
                  02 / {t(messages.about.cardNow)}
                </p>
                <div className="relative mt-7">
                  <p className="text-3xl font-black text-[var(--foreground)]/10">LEVIT</p>
                  <h3 className="mt-2 text-xl font-bold">Associate Problem Solver</h3>
                  <p className="mt-2 font-mono text-xs text-[var(--foreground)]/40">Shopport · iOS &amp; Android · 2026</p>
                </div>
                <CardAction label={t(messages.about.openStory)} />
              </button>

              <button
                type="button"
                onClick={() => openStory("research")}
                className="group relative min-h-52 overflow-hidden rounded-2xl border border-[var(--foreground)]/10 bg-[var(--background)]/65 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400">
                  03 / {t(messages.about.cardResearch)}
                </p>
                <h3 className="mt-7 text-xl font-bold">{t(messages.about.cardResearchTitle)}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {messages.about.interests.slice(0, 3).map((interest) => (
                    <span key={interest.en} className="rounded-full border border-cyan-400/20 px-2.5 py-1 font-mono text-[10px] text-cyan-300/75">
                      {t(interest)}
                    </span>
                  ))}
                </div>
                <CardAction label={t(messages.about.openStory)} />
              </button>

              <button
                type="button"
                onClick={() => openStory("profile")}
                className="group relative min-h-72 overflow-hidden rounded-2xl border border-[var(--foreground)]/10 bg-[var(--background)]/65 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40"
              >
                <Image
                  src="/projects/others/PSU_oldmain.jpg"
                  alt="Penn State's Old Main"
                  fill
                  sizes="(min-width: 900px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-indigo-300">
                  04 / {t(messages.about.cardProfile)}
                </p>
                <p className="relative mt-7 text-3xl font-black text-white">PSU</p>
                <p className="relative mt-2 text-sm text-white/70">CS + Mathematics · &apos;27</p>
                <p className="relative mt-1 font-mono text-xs text-indigo-300">Dean&apos;s List</p>
                <CardAction label={t(messages.about.openStory)} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <DetailDialog
        open={storyOpen}
        onClose={closeStory}
        eyebrow={story.eyebrow}
        title={story.title}
        meta={story.meta}
        closeLabel={t(messages.about.closeStory)}
        background={story.background}
      >
        <div className="space-y-5 text-[var(--foreground)]/70 leading-relaxed">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {story.showTags && (
          <div className="mt-8 flex flex-wrap gap-2">
            {messages.about.interests.map((interest) => (
              <span key={interest.en} className="rounded-full border border-indigo-400/25 bg-indigo-500/[0.08] px-3 py-1.5 font-mono text-xs text-indigo-300">
                {t(interest)}
              </span>
            ))}
          </div>
        )}
      </DetailDialog>
      <PdfPreviewModal preview={preview} onClose={closePreview} />
    </section>
  );
}

function CardAction({ label }: { label: string }) {
  return (
    <span className="absolute bottom-5 right-5 text-indigo-400">
      <span className="sr-only">{label}</span>
      <span className="grid h-7 w-7 place-items-center rounded-full border border-indigo-400/30 text-base transition-transform group-hover:rotate-90">+</span>
    </span>
  );
}

function CodeRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="pl-5">
      <Key>{label}</Key>
      <Punct>:</Punct> <Str>&quot;{value}&quot;</Str>
      <Punct>,</Punct>
    </div>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-purple-400">{children}</span>;
}

function Var({ children }: { children: React.ReactNode }) {
  return <span className="text-blue-300">{children}</span>;
}

function Key({ children }: { children: React.ReactNode }) {
  return <span className="text-indigo-300">{children}</span>;
}

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-green-300">{children}</span>;
}

function Punct({ children }: { children: React.ReactNode }) {
  return <span className="text-white/40">{children}</span>;
}
