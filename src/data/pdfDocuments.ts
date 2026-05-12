export const PDF_DOCUMENTS = [
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

export type PdfDocument = (typeof PDF_DOCUMENTS)[number];
