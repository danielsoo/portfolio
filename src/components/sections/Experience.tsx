"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    role: "Co-founder",
    org: "SIGNUM — Nittany AI Alliance (PIT-UN Funded)",
    location: "University Park, PA",
    period: "Aug 2024 – Nov 2025",
    bullets: [
      "Co-founded a $3,750 PIT-UN-funded AI platform for hospital quality analysis and caregiver decision support.",
      "Built a multi-source ETL pipeline (CMS, NPPES, Google Places) into a DuckDB warehouse; developed a Markov Transition Model for hospital star-rating prediction with confidence intervals.",
      "Designed and deployed domain-specific RAG pipelines using FAISS and AWS Bedrock, reducing caregiver research time from 50+ hours/week to near-instant responses.",
    ],
    tags: ["Python", "AWS Bedrock", "FAISS", "DuckDB", "RAG"],
  },
  {
    role: "Squad Leader (Promoted)",
    org: "Republic of Korea Air Force",
    location: "Republic of Korea",
    period: "Sept 2022 – June 2024",
    bullets: [
      "Promoted to Squad Leader; managed and coordinated 20+ airmen across high-tempo operational missions.",
      "Received a Commendation Award for sustained leadership performance and operational readiness.",
    ],
    tags: ["Leadership", "Operations"],
  },
  {
    role: "Software Engineering Intern",
    org: "Atom Tech Solutions LTD",
    location: "Berkeley, CA",
    period: "May 2022 – Aug 2022",
    bullets: [
      "Built secure login with SQL/JWT authentication, encrypted data storage, and automated credential generation.",
      "Implemented authenticated onboarding workflows for production user management.",
    ],
    tags: ["SQL", "JWT", "Node.js"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 px-6 bg-[var(--foreground)]/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            02. Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Where I&apos;ve Worked
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-6 border-l-2 border-[var(--foreground)]/10 hover:border-indigo-500/50 transition-colors group"
              >
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <div>
                    <span className="font-bold text-lg">{exp.role}</span>
                    <span className="text-[var(--foreground)]/50 mx-2">@</span>
                    <span className="text-indigo-400 font-semibold">{exp.org}</span>
                  </div>
                  <span className="text-sm text-[var(--foreground)]/40 font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-[var(--foreground)]/30 font-mono mb-3">{exp.location}</p>

                <ul className="space-y-1.5 mb-4">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2 text-sm text-[var(--foreground)]/65 leading-relaxed">
                      <span className="text-indigo-500 mt-1 flex-shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
