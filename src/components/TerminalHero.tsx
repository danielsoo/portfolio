"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";

type TermLine = (typeof messages.terminal.lines)[number];

export default function TerminalHero() {
  const { locale, t } = useLocale();
  const lines = messages.terminal.lines as readonly TermLine[];
  const [visibleCount, setVisibleCount] = useState(0);
  const [typedCmd, setTypedCmd] = useState<Record<number, string>>({});

  useEffect(() => {
    setVisibleCount(0);
    setTypedCmd({});

    lines.forEach((line, i) => {
      const showTimer = setTimeout(() => {
        setVisibleCount((c) => Math.max(c, i + 1));

        if ("cmd" in line && line.cmd && line.cmd !== "_") {
          const cmdText = line.cmd;
          const chars = cmdText.split("");
          chars.forEach((_, ci) => {
            setTimeout(() => {
              setTypedCmd((prev) => ({
                ...prev,
                [i]: cmdText.slice(0, ci + 1),
              }));
            }, ci * 40);
          });
        }
      }, line.delay);

      return () => clearTimeout(showTimer);
    });
  }, [locale, lines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="rounded-t-xl bg-[#1e1e2e] border border-white/10 px-4 py-3 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-white/30 font-mono">{t(messages.terminal.windowTitle)}</span>
      </div>

      <div className="rounded-b-xl bg-[#13131f]/90 backdrop-blur border border-t-0 border-white/10 px-5 py-5 font-mono text-sm min-h-[220px]">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={`${locale}-${i}`} className="mb-1 leading-relaxed">
            {line.prompt && (
              <span>
                <span className="text-green-400">{line.prompt}</span>
                <span className="text-white/40"> $ </span>
                <span className="text-white">
                  {"cursor" in line && line.cursor ? (
                    <Cursor />
                  ) : (
                    typedCmd[i] ?? ""
                  )}
                </span>
              </span>
            )}
            {"output" in line && line.output && (
              <span className="text-indigo-300/80">{t(line.output)}</span>
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
