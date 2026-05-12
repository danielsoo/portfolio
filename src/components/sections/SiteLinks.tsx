"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const sites = [
  {
    title: "ASME @ Penn State",
    description: "Official website for the ASME Penn State chapter — featuring a 5-tier role-based permission system for organization content management.",
    url: "https://asme-website-bice.vercel.app",
    tags: ["React 19", "TypeScript", "Firebase", "Vite"],
    status: "Live",
  },
  {
    title: "Hangukgwan Restaurant",
    description: "Multilingual full-stack restaurant web app for the family business, supporting Korean, English, Simplified & Traditional Chinese.",
    url: "#",
    tags: ["React", "Node.js", "MongoDB", "i18n"],
    status: "In Progress",
  },
];

export default function SiteLinks() {
  const { ref, inView } = useInView();

  return (
    <section id="sites" className="py-24 px-6 bg-[var(--foreground)]/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            07. Live Sites
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Completed Work
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {sites.map((site, i) => {
              const isLive = site.url !== "#";
              const Wrapper = isLive ? motion.a : motion.div;
              const wrapperProps = isLive
                ? { href: site.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Wrapper
                  key={site.title}
                  {...(wrapperProps as Record<string, string>)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-xl border border-[var(--foreground)]/10 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <h3 className="font-bold text-lg group-hover:text-indigo-400 transition-colors">
                      {site.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                          site.status === "Live"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-blue-500/10 text-blue-400"
                        }`}
                      >
                        {site.status}
                      </span>
                      {isLive && (
                        <svg className="w-4 h-4 text-[var(--foreground)]/30 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--foreground)]/60 mb-4 leading-relaxed">
                    {site.description}
                  </p>
                  {isLive && (
                    <p className="text-xs text-indigo-400/60 font-mono truncate mb-3">{site.url}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
