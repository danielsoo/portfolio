"use client";

import { useCallback, useEffect, useState } from "react";
import type { PdfDocument } from "@/data/pdfDocuments";

export function usePdfPreview() {
  const [preview, setPreview] = useState<PdfDocument | null>(null);
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
