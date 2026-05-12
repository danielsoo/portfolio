import type { Project } from "@/data/projects";
import { messages } from "./messages";
import type { Locale } from "./types";

type ProjectSlug = keyof typeof messages.projects.bySlug;

export function localizeProject(project: Project, locale: Locale): Project {
  const copy = messages.projects.bySlug[project.slug as ProjectSlug];
  if (!copy) return project;
  const pick = (b: { en: string; ko: string }) => b[locale];
  return {
    ...project,
    title: pick(copy.title),
    type: pick(copy.type),
    badge: pick(copy.badge),
    shortDescription: pick(copy.shortDescription),
    longDescription: pick(copy.longDescription),
    highlights: copy.highlights.map((h) => pick(h)),
  };
}
