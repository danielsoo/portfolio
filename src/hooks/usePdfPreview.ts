"use client";

import { useCallback, useEffect, useState } from "react";
import { useScrollLock } from "./useScrollLock";

export type PdfPreviewOpen = {
  href: string;
  downloadName: string;
  label: string;
  short: string;
};

export function usePdfPreview() {
  const [preview, setPreview] = useState<PdfPreviewOpen | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);

  useScrollLock(!!preview);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [preview, closePreview]);

  return { preview, setPreview, closePreview };
}
