"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";
import type { PdfDocument } from "@/data/pdfDocuments";

type Props = {
  preview: PdfDocument | null;
  onClose: () => void;
};

export default function PdfPreviewModal({ preview, onClose }: Props) {
  const titleId = useId();

  return (
    <AnimatePresence>
      {preview && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            key={preview.href}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative flex h-[min(96dvh,920px)] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--background)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--foreground)]/10 px-3 py-2.5 sm:px-4 sm:py-3">
              <div className="min-w-0">
                <h3 id={titleId} className="truncate text-sm font-semibold sm:text-base">
                  {preview.label}
                </h3>
                <p className="truncate text-xs text-[var(--foreground)]/50">{preview.short}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={preview.href}
                  download={preview.downloadName}
                  className="hidden sm:inline-flex rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-500"
                >
                  PDF 저장
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-2 text-[var(--foreground)]/60 transition-colors hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]"
                  aria-label="Close preview"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              title={preview.label}
              src={`${preview.href}#view=FitH`}
              className="min-h-0 w-full flex-1 bg-[var(--foreground)]/[0.04]"
            />
            <a
              href={preview.href}
              download={preview.downloadName}
              className="border-t border-[var(--foreground)]/10 px-4 py-3 text-center text-sm font-semibold text-indigo-400 transition-colors hover:bg-indigo-500/10 sm:hidden"
            >
              PDF 저장
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
