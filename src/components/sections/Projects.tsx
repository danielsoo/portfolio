"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";
import { localizeProject } from "@/i18n/useLocalizedProject";

export default function Projects() {
  const { ref, inView } = useInView();
  const { locale, t } = useLocale();

  return (
    <section id="projects" className="py-24 px-6 bg-[var(--foreground)]/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            {t(messages.projects.sectionLabel)}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t(messages.projects.heading)}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => {
              const lp = localizeProject(p, locale);
              return (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group p-6 rounded-xl border border-[var(--foreground)]/10 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full block"
                  >
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <div>
                        <span className="text-xs font-mono text-[var(--foreground)]/30 uppercase tracking-widest">
                          {lp.type}
                        </span>
                        <h3 className="font-bold text-lg mt-0.5 group-hover:text-indigo-400 transition-colors leading-tight">
                          {lp.title}
                        </h3>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${p.badgeColor}`}>
                          {lp.badge}
                        </span>
                        <div className="flex gap-2">
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[var(--foreground)]/30 hover:text-[var(--foreground)] transition-colors"
                            title={t(messages.projects.githubTitle)}
                          >
                            <GitHubIcon />
                          </a>
                          {p.live && (
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[var(--foreground)]/30 hover:text-indigo-400 transition-colors"
                              title={t(messages.projects.liveSiteTitle)}
                            >
                              <ExternalLinkIcon />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--foreground)]/60 leading-relaxed flex-1 mb-4">
                      {lp.shortDescription}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                        {p.tags.length > 4 && (
                          <span className="text-xs px-2.5 py-1 rounded-full text-[var(--foreground)]/30 font-mono">
                            +{p.tags.length - 4}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-indigo-400/60 font-mono flex items-center gap-1 flex-shrink-0 ml-2 group-hover:text-indigo-400 transition-colors">
                        {t(messages.projects.viewDetails)}
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
