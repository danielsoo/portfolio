"use client";

import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";
import type { Locale } from "@/i18n/types";

const NAV_ITEMS = [
  { href: "#about", msgKey: "about" as const },
  { href: "#experience", msgKey: "experience" as const },
  { href: "#projects", msgKey: "projects" as const },
  { href: "#leadership", msgKey: "leadership" as const },
  { href: "#contact", msgKey: "contact" as const },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setLang = (l: Locale) => {
    setLocale(l);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-[var(--foreground)] hover:text-indigo-500 transition-colors"
        >
          YP<span className="text-indigo-500">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-[var(--foreground)]/70 hover:text-indigo-400 transition-colors font-medium"
              >
                {t(messages.nav[item.msgKey])}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex rounded-full border border-[var(--foreground)]/20 p-0.5"
            role="group"
            aria-label={t(messages.nav.language)}
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={locale === "en"}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                locale === "en"
                  ? "bg-indigo-600 text-white"
                  : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
              }`}
            >
              {t(messages.nav.langShortEn)}
            </button>
            <button
              type="button"
              onClick={() => setLang("ko")}
              aria-pressed={locale === "ko"}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                locale === "ko"
                  ? "bg-indigo-600 text-white"
                  : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
              }`}
            >
              {t(messages.nav.langShortKo)}
            </button>
          </div>

          <button
            onClick={toggle}
            aria-label={t(messages.nav.toggleTheme)}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--foreground)]/20 hover:border-indigo-500 transition-colors"
          >
            {theme === "dark" ? (
              <SunIcon />
            ) : (
              <MoonIcon />
            )}
          </button>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t(messages.nav.menu)}
          >
            <span className="sr-only">{t(messages.nav.menu)}</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[var(--background)]/95 backdrop-blur-md border-b border-white/10"
        >
          <ul className="px-6 py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-sm text-[var(--foreground)]/70 hover:text-indigo-400 transition-colors font-medium py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(messages.nav[item.msgKey])}
                </a>
              </li>
            ))}
            <li className="flex gap-2 pt-2 border-t border-[var(--foreground)]/10 mt-2">
              <button
                type="button"
                className={`flex-1 rounded-lg py-2 text-xs font-semibold ${locale === "en" ? "bg-indigo-600 text-white" : "border border-[var(--foreground)]/20"}`}
                onClick={() => setLang("en")}
              >
                {t(messages.nav.langShortEn)}
              </button>
              <button
                type="button"
                className={`flex-1 rounded-lg py-2 text-xs font-semibold ${locale === "ko" ? "bg-indigo-600 text-white" : "border border-[var(--foreground)]/20"}`}
                onClick={() => setLang("ko")}
              >
                {t(messages.nav.langShortKo)}
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

function SunIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="5" />
      <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
