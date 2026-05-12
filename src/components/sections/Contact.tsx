"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useCallback, useEffect, useState } from "react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/danielsoo",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/younsoo/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:danielpark0605@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const DOCUMENTS = [
  {
    label: "Résumé",
    short: "Industry-focused résumé",
    href: "/docs/Younsoo_Park_Resume.pdf",
    downloadName: "Younsoo_Park_Resume.pdf",
  },
  {
    label: "CV",
    short: "Academic curriculum vitae",
    href: "/docs/Younsoo_Park_CV.pdf",
    downloadName: "Younsoo_Park_CV.pdf",
  },
] as const;

type Preview = (typeof DOCUMENTS)[number] | null;

export default function Contact() {
  const { ref, inView } = useInView();
  const [preview, setPreview] = useState<Preview>(null);

  const closePreview = useCallback(() => setPreview(null), []);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [preview, closePreview]);

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            08. Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-[var(--foreground)]/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you have a research opportunity, a project idea, or just want to connect — my inbox is always open.
          </p>

          <a
            href="mailto:danielpark0605@gmail.com"
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-colors shadow-lg shadow-indigo-500/25 mb-12"
          >
            Say Hello
          </a>

          <div className="text-left max-w-xl mx-auto mb-12">
            <p className="text-center text-indigo-400 font-mono text-xs uppercase tracking-widest mb-4">
              Résumé &amp; CV
            </p>
            <div className="space-y-3">
              {DOCUMENTS.map((doc) => (
                <div
                  key={doc.href}
                  className="flex flex-col gap-3 rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <button
                    type="button"
                    onClick={() => setPreview(doc)}
                    className="group flex-1 text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <span className="block font-semibold text-[var(--foreground)] group-hover:text-indigo-400 transition-colors">
                      {doc.label}
                      <span className="ml-2 text-indigo-400/80 text-sm font-normal">View</span>
                    </span>
                    <span className="text-sm text-[var(--foreground)]/50">{doc.short}</span>
                  </button>
                  <div className="flex shrink-0 gap-2 sm:pl-2">
                    <button
                      type="button"
                      onClick={() => setPreview(doc)}
                      className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-[var(--foreground)]/20 text-sm font-medium text-[var(--foreground)]/80 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors"
                    >
                      크게 보기
                    </button>
                    <a
                      href={doc.href}
                      download={doc.downloadName}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
                    >
                      다운로드
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[var(--foreground)]/50 hover:text-indigo-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="text-center text-xs text-[var(--foreground)]/30 mt-16 font-mono">
        Designed &amp; Built by Younsoo Park
      </p>

      <AnimatePresence>
        {preview && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-preview-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) closePreview();
            }}
          >
            <motion.div
              key={preview.href}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--background)] shadow-2xl max-h-[min(92vh,900px)] h-[min(92vh,900px)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 border-b border-[var(--foreground)]/10 px-4 py-3 shrink-0">
                <h3 id="pdf-preview-title" className="text-sm font-semibold truncate sm:text-base">
                  {preview.label}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={preview.href}
                    download={preview.downloadName}
                    className="hidden sm:inline-flex px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                  >
                    다운로드
                  </a>
                  <button
                    type="button"
                    onClick={closePreview}
                    className="rounded-lg p-2 text-[var(--foreground)]/60 hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-colors"
                    aria-label="Close preview"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <iframe
                title={preview.label}
                src={`${preview.href}#view=FitH`}
                className="w-full flex-1 min-h-0 bg-[var(--foreground)]/[0.04]"
              />
              <a
                href={preview.href}
                download={preview.downloadName}
                className="sm:hidden border-t border-[var(--foreground)]/10 px-4 py-3 text-center text-sm font-semibold text-indigo-400 hover:bg-indigo-500/10 transition-colors"
              >
                다운로드
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
