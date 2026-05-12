"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import PdfPreviewModal from "@/components/PdfPreviewModal";
import { PDF_DOCUMENTS } from "@/data/pdfDocuments";
import { usePdfPreview } from "@/hooks/usePdfPreview";

const interests = [
  "Federated Learning",
  "TinyML & Edge AI",
  "IoT Security",
  "Adversarial ML",
  "Full-Stack Engineering",
  "Distributed Systems",
];

export default function About() {
  const { ref, inView } = useInView();
  const { preview, setPreview, closePreview } = usePdfPreview();

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
              01. About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who I Am</h2>
            <div className="space-y-4 text-[var(--foreground)]/70 leading-relaxed">
              <p>
                I&apos;m <strong className="text-[var(--foreground)]">Younsoo Park</strong> — a Computer Science student at{" "}
                <strong className="text-[var(--foreground)]">Penn State University</strong> (Dean&apos;s List, B.S. CS + Math minor, graduating May 2027) with a passion for building reliable AI systems and full-stack applications.
              </p>
              <p>
                My research focuses on federated learning and TinyML for IoT security under Dr. Suman Saha and Dr. Peilong Li — targeting deployment on resource-constrained edge devices like ESP32. Outside the lab, I build real products: from an AI hospital-quality platform to multilingual restaurant web apps.
              </p>
              <p>
                I&apos;ve also served as a Squad Leader in the{" "}
                <strong className="text-[var(--foreground)]">Republic of Korea Air Force</strong>, where I was commended for leadership and operational readiness.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {interests.map((i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full border border-indigo-500/30 text-indigo-400 font-mono"
                >
                  {i}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {PDF_DOCUMENTS.map((doc) => (
                <button
                  key={doc.href}
                  type="button"
                  onClick={() => setPreview(doc)}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-colors text-left shadow-lg shadow-indigo-500/15"
                >
                  <span className="block leading-tight">{doc.label}</span>
                  <span className="mt-0.5 block text-xs font-normal text-white/85">{doc.short}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Code block */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/20">
              {/* Window chrome */}
              <div className="bg-[#1e1e2e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-white/25 font-mono">younsoo.ts</span>
              </div>

              {/* Code */}
              <div className="bg-[#0d0d1a] px-5 py-5 font-mono text-xs leading-6 overflow-x-auto">
                <div>
                  <Kw>const</Kw> <Var>younsoo</Var> <Punct>= {"{"}</Punct>
                </div>
                <div className="pl-5">
                  <Key>name</Key><Punct>:</Punct> <Str>&quot;Younsoo Park&quot;</Str><Punct>,</Punct>
                </div>
                <div className="pl-5">
                  <Key>school</Key><Punct>:</Punct> <Str>&quot;Penn State &apos;27&quot;</Str><Punct>,</Punct>
                </div>
                <div className="pl-5">
                  <Key>major</Key><Punct>:</Punct> <Str>&quot;CS + Mathematics&quot;</Str><Punct>,</Punct>
                </div>
                <div className="pl-5">
                  <Key>status</Key><Punct>:</Punct> <Str>&quot;Dean&apos;s List&quot;</Str><Punct>,</Punct>
                </div>
                <div className="pl-5">
                  <Key>location</Key><Punct>:</Punct> <Str>&quot;University Park, PA&quot;</Str><Punct>,</Punct>
                </div>
                <div className="pl-5 mt-1">
                  <Key>research</Key><Punct>: [</Punct>
                </div>
                <div className="pl-10">
                  <Str>&quot;Federated Learning&quot;</Str><Punct>,</Punct>
                </div>
                <div className="pl-10">
                  <Str>&quot;TinyML / IoT Security&quot;</Str><Punct>,</Punct>
                </div>
                <div className="pl-10">
                  <Str>&quot;Adversarial ML&quot;</Str><Punct>,</Punct>
                </div>
                <div className="pl-5"><Punct>],</Punct></div>
                <div className="pl-5 mt-1">
                  <Key>openTo</Key><Punct>:</Punct> <Str>&quot;new opportunities&quot;</Str><Punct>,</Punct>
                </div>
                <div>
                  <Punct>{"}"}</Punct><Punct>;</Punct>
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
