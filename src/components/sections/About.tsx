"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import PdfPreviewModal from "@/components/PdfPreviewModal";
import { PDF_DOCUMENTS } from "@/data/pdfDocuments";
import { usePdfPreview } from "@/hooks/usePdfPreview";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";

export default function About() {
  const { ref, inView } = useInView();
  const { preview, setPreview, closePreview } = usePdfPreview();
  const { t } = useLocale();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
              {t(messages.about.sectionLabel)}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t(messages.about.title)}</h2>
            <div className="space-y-4 text-[var(--foreground)]/70 leading-relaxed">
              <p>{t(messages.about.p1)}</p>
              <p>{t(messages.about.p2)}</p>
              <p>{t(messages.about.p3)}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {messages.about.interests.map((i) => (
                <span
                  key={i.en}
                  className="text-xs px-3 py-1.5 rounded-full border border-indigo-500/30 text-indigo-400 font-mono"
                >
                  {t(i)}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
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
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-colors text-left shadow-lg shadow-indigo-500/15"
                >
                  <span className="block leading-tight">{t(messages.documents[doc.id].label)}</span>
                  <span className="mt-0.5 block text-xs font-normal text-white/85">
                    {t(messages.documents[doc.id].short)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/20">
              <div className="bg-[#1e1e2e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-white/25 font-mono">{t(messages.about.codeFileName)}</span>
              </div>

              <div className="bg-[#0d0d1a] px-5 py-5 font-mono text-xs leading-6 overflow-x-auto">
                <div>
                  <Kw>{t(messages.about.codeConst)}</Kw> <Var>{t(messages.about.codeVar)}</Var> <Punct>= {"{"}</Punct>
                </div>
                <div className="pl-5">
                  <Key>{t(messages.about.codeKeys.name)}</Key>
                  <Punct>:</Punct> <Str>&quot;{t(messages.about.codeStrings.nameVal)}&quot;</Str>
                  <Punct>,</Punct>
                </div>
                <div className="pl-5">
                  <Key>{t(messages.about.codeKeys.school)}</Key>
                  <Punct>:</Punct> <Str>&quot;{t(messages.about.codeStrings.schoolVal)}&quot;</Str>
                  <Punct>,</Punct>
                </div>
                <div className="pl-5">
                  <Key>{t(messages.about.codeKeys.major)}</Key>
                  <Punct>:</Punct> <Str>&quot;{t(messages.about.codeStrings.majorVal)}&quot;</Str>
                  <Punct>,</Punct>
                </div>
                <div className="pl-5">
                  <Key>{t(messages.about.codeKeys.status)}</Key>
                  <Punct>:</Punct> <Str>&quot;{t(messages.about.codeStrings.statusVal)}&quot;</Str>
                  <Punct>,</Punct>
                </div>
                <div className="pl-5">
                  <Key>{t(messages.about.codeKeys.location)}</Key>
                  <Punct>:</Punct> <Str>&quot;{t(messages.about.codeStrings.locationVal)}&quot;</Str>
                  <Punct>,</Punct>
                </div>
                <div className="pl-5 mt-1">
                  <Key>{t(messages.about.codeKeys.research)}</Key>
                  <Punct>: [</Punct>
                </div>
                <div className="pl-10">
                  <Str>&quot;{t(messages.about.codeStrings.r1)}&quot;</Str>
                  <Punct>,</Punct>
                </div>
                <div className="pl-10">
                  <Str>&quot;{t(messages.about.codeStrings.r2)}&quot;</Str>
                  <Punct>,</Punct>
                </div>
                <div className="pl-10">
                  <Str>&quot;{t(messages.about.codeStrings.r3)}&quot;</Str>
                  <Punct>,</Punct>
                </div>
                <div className="pl-5">
                  <Punct>],</Punct>
                </div>
                <div className="pl-5 mt-1">
                  <Key>{t(messages.about.codeKeys.openTo)}</Key>
                  <Punct>:</Punct> <Str>&quot;{t(messages.about.codeStrings.openVal)}&quot;</Str>
                  <Punct>,</Punct>
                </div>
                <div>
                  <Punct>{"}"}</Punct>
                  <Punct>;</Punct>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <PdfPreviewModal preview={preview} onClose={closePreview} />
    </section>
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
