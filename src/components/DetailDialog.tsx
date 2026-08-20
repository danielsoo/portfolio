"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useScrollLock } from "@/hooks/useScrollLock";

type DetailDialogProps = {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  meta?: string;
  closeLabel: string;
  children: ReactNode;
};

export default function DetailDialog({
  open,
  onClose,
  eyebrow,
  title,
  meta,
  closeLabel,
  children,
}: DetailDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useScrollLock(open);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={() => {
        if (open) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto max-h-[88dvh] w-[min(92vw,48rem)] overflow-hidden rounded-2xl border border-indigo-400/20 bg-[var(--background)] p-0 text-[var(--foreground)] shadow-2xl shadow-black/50 backdrop:bg-black/75 backdrop:backdrop-blur-sm"
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(99,102,241,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.12)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative flex items-start justify-between gap-6 border-b border-[var(--foreground)]/10 px-6 py-5 sm:px-8">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400">
              {eyebrow}
            </p>
            <h3 className="text-2xl font-bold leading-tight sm:text-3xl">{title}</h3>
            {meta && <p className="mt-2 font-mono text-xs text-[var(--foreground)]/40">{meta}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="grid h-10 w-10 flex-none place-items-center rounded-full border border-[var(--foreground)]/15 bg-[var(--background)]/80 text-xl text-[var(--foreground)]/55 transition hover:border-indigo-400/50 hover:text-indigo-400"
          >
            ×
          </button>
        </div>
        <div className="relative max-h-[calc(88dvh-7rem)] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          {children}
        </div>
      </div>
    </dialog>
  );
}
