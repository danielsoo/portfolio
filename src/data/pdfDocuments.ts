export const PDF_DOCUMENTS = [
  {
    id: "resume" as const,
    href: "/docs/Younsoo_Park_Resume.pdf",
    downloadName: "Younsoo_Park_Resume.pdf",
  },
  {
    id: "cv" as const,
    href: "/docs/Younsoo_Park_CV.pdf",
    downloadName: "Younsoo_Park_CV.pdf",
  },
] as const;

export type PdfDocMeta = (typeof PDF_DOCUMENTS)[number];
