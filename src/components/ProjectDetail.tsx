"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground)]/40 hover:text-indigo-400 transition-colors font-mono mb-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            cd ../projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-mono text-[var(--foreground)]/30 uppercase tracking-widest">
              {project.type}
            </span>
            <span className={`text-xs px-2.5 py-1 rounded-full font-mono ${project.badgeColor}`}>
              {project.badge}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--foreground)]/20 hover:border-[var(--foreground)]/50 text-sm font-medium transition-colors"
            >
              <GitHubIcon /> GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
              >
                <ExternalIcon /> Live Site
              </a>
            )}
          </div>
        </motion.div>

        {/* Image gallery */}
        {project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className={`grid gap-4 ${project.images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
              {project.images.map((src, i) => (
                <div key={i} className={`relative rounded-xl overflow-hidden border border-[var(--foreground)]/10 bg-[var(--foreground)]/5 ${i === 0 && project.images.length > 2 ? "md:col-span-2" : ""}`}>
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty image placeholder when no images */}
        {project.images.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="rounded-xl border-2 border-dashed border-[var(--foreground)]/15 bg-[var(--foreground)]/[0.02] h-52 flex flex-col items-center justify-center text-[var(--foreground)]/25">
              <ImagePlaceholderIcon />
              <p className="text-sm font-mono mt-3">Add images to</p>
              <p className="text-xs font-mono mt-1 text-indigo-400/50">
                public/projects/{project.slug}/
              </p>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 space-y-10"
          >
            {/* Description */}
            <div>
              <h2 className="text-lg font-bold mb-4 text-indigo-400 font-mono">// Overview</h2>
              <div className="space-y-4">
                {project.longDescription.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[var(--foreground)]/70 leading-relaxed text-sm md:text-base">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-lg font-bold mb-4 text-indigo-400 font-mono">// Key Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--foreground)]/70 leading-relaxed">
                    <span className="text-indigo-400 font-mono mt-0.5 flex-shrink-0">›</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Tags */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--foreground)]/30 mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 font-mono border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--foreground)]/30 mb-3">
                Links
              </h3>
              <div className="space-y-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--foreground)]/60 hover:text-indigo-400 transition-colors"
                >
                  <GitHubIcon /> Source Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--foreground)]/60 hover:text-indigo-400 transition-colors"
                  >
                    <ExternalIcon /> Live Site
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
