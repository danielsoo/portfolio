"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const causeLinks = [
  {
    href: "https://thon.org",
    src: "/logos/thon.png",
    alt: "THON logo",
    label: "THON — Penn State Dance Marathon (opens in new tab)",
  },
  {
    href: "https://thon.org/donate",
    src: "/logos/ftk.png",
    alt: "For The Kids yellow ribbon",
    label: "THON — For The Kids, donate (opens in new tab)",
  },
] as const;

const roles = [
  {
    title: "Technology Captain",
    year: "2027",
    org: "THON — Penn State",
    period: "Apr 2026 – Present",
    description:
      "Leading all CS operations for THON year-round — maintaining the THON website, building new features and content, and overseeing every technical system the organization relies on. One of the most competitive elected positions at Penn State, with responsibilities spanning the full year, not just the 46-hour dance marathon weekend.",
    stat: "$10M+",
    statLabel: "raised annually",
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/30",
    accent: "text-indigo-400",
  },
  {
    title: "Project Manager",
    year: "",
    org: "Penn State Advanced Vehicle Team (AVT)",
    period: "Fall 2026 – Present",
    description:
      "Managing a multidisciplinary engineering team building high-performance electric and autonomous vehicles. Coordinating project timelines, cross-functional collaboration, and technical deliverables across subteams.",
    stat: "AVT",
    statLabel: "Flagship Team",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
  },
  {
    title: "Web & Design Director",
    year: "",
    org: "Association for Computing Machinery (ACM)",
    period: "Apr 2026 – Present",
    description:
      "Directing web presence and design systems for Penn State's largest CS student organization. Responsible for building and maintaining digital platforms serving hundreds of student members.",
    stat: "ACM",
    statLabel: "Penn State Chapter",
    color: "from-violet-500/20 to-pink-500/20",
    border: "border-violet-500/30",
    accent: "text-violet-400",
  },
  {
    title: "Lead Teaching Assistant",
    year: "",
    org: "Math 230 — Multivariable Calculus",
    period: "Aug 2025 – Present",
    description:
      "Leading recitation sections, holding office hours, and coordinating course activities for one of Penn State's core mathematics courses. Responsible for supporting students through one of the most challenging required courses in the engineering curriculum.",
    stat: "Math 230",
    statLabel: "Multivariable Calc",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    accent: "text-amber-400",
  },
];

export default function Leadership() {
  const { ref, inView } = useInView();

  return (
    <section id="leadership" className="py-24 px-6 bg-[var(--foreground)]/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            05. Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Campus Roles & Impact
          </h2>
          <p className="text-[var(--foreground)]/50 mb-8 max-w-2xl">
            Elected and appointed to leadership positions across Penn State&apos;s most prominent engineering and CS organizations — each role carrying real responsibility and impact.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-12">
            {causeLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex items-center rounded-lg overflow-hidden ring-1 ring-[var(--foreground)]/15 hover:ring-indigo-500/50 hover:scale-[1.02] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 bg-[var(--background)]/80 px-1.5 py-1"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-9 w-auto sm:h-10 max-h-10 object-contain object-left block"
                />
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.title + role.org}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`group relative p-6 rounded-xl border ${role.border} bg-gradient-to-br ${role.color} hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Background stat watermark */}
                <div className={`absolute -right-2 -bottom-3 text-6xl font-black opacity-[0.06] ${role.accent} select-none pointer-events-none leading-none`}>
                  {role.stat}
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className={`text-xs font-mono uppercase tracking-widest mb-1 ${role.accent}`}>
                        {role.org}
                      </p>
                      <h3 className="font-bold text-xl leading-tight">
                        {role.title}
                        {role.year && (
                          <span className={`ml-2 text-base font-semibold ${role.accent}`}>
                            ({role.year})
                          </span>
                        )}
                      </h3>
                    </div>
                    <span className="text-xs text-[var(--foreground)]/35 font-mono whitespace-nowrap mt-1">
                      {role.period}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--foreground)]/65 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
