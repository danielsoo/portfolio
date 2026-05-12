"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { prompt: "~/portfolio", cmd: "whoami", delay: 400 },
  { prompt: null, output: "Younsoo Park", delay: 700 },
  { prompt: "~/portfolio", cmd: "cat role.txt", delay: 1300 },
  { prompt: null, output: "Software Engineer & Researcher", delay: 1600 },
  { prompt: "~/portfolio", cmd: "cat status.txt", delay: 2200 },
  { prompt: null, output: "Penn State CS '27  |  Dean's List", delay: 2500 },
  { prompt: "~/portfolio", cmd: "ls research/", delay: 3100 },
  { prompt: null, output: "federated-tinyml/   signum/   iot-security/", delay: 3400 },
  { prompt: "~/portfolio", cmd: "_", delay: 4000, cursor: true },
];

type Line = {
  prompt: string | null;
  cmd?: string;
  output?: string;
  delay: number;
  cursor?: boolean;
};

export default function TerminalHero() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typedCmd, setTypedCmd] = useState<Record<number, string>>({});

  useEffect(() => {
    lines.forEach((line, i) => {
      const showTimer = setTimeout(() => {
        setVisibleCount((c) => Math.max(c, i + 1));

        if (line.cmd && line.cmd !== "_") {
          const chars = line.cmd.split("");
          chars.forEach((_, ci) => {
            setTimeout(() => {
              setTypedCmd((prev) => ({
                ...prev,
                [i]: line.cmd!.slice(0, ci + 1),
              }));
            }, ci * 40);
          });
        }
      }, line.delay);

      return () => clearTimeout(showTimer);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-lg mx-auto"
    >
      {/* Window chrome */}
      <div className="rounded-t-xl bg-[#1e1e2e] border border-white/10 px-4 py-3 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-white/30 font-mono">zsh — portfolio</span>
      </div>

      {/* Terminal body */}
      <div className="rounded-b-xl bg-[#13131f]/90 backdrop-blur border border-t-0 border-white/10 px-5 py-5 font-mono text-sm min-h-[220px]">
        {(lines as Line[]).slice(0, visibleCount).map((line, i) => (
          <div key={i} className="mb-1 leading-relaxed">
            {line.prompt && (
              <span>
                <span className="text-green-400">{line.prompt}</span>
                <span className="text-white/40"> $ </span>
                <span className="text-white">
                  {line.cursor ? (
                    <Cursor />
                  ) : (
                    typedCmd[i] ?? ""
                  )}
                </span>
              </span>
            )}
            {line.output && (
              <span className="text-indigo-300/80">{line.output}</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return (
    <span className={`inline-block w-2 h-4 bg-indigo-400 align-middle ${on ? "opacity-100" : "opacity-0"}`} />
  );
}
