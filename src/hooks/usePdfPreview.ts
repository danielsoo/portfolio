"use client";

import { useCallback, useEffect, useState } from "react";

export type PdfPreviewOpen = {
  href: string;
  downloadName: string;
  label: string;
  short: string;
};

export function usePdfPreview() {
  const [preview, setPreview] = useState<PdfPreviewOpen | null>(null);
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

  return { preview, setPreview, closePreview };
}
