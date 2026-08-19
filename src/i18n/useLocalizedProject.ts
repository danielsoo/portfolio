import type { Project } from "@/data/projects";
import { messages } from "./messages";
import type { Bilingual, Locale } from "./types";

type ProjectSlug = keyof typeof messages.projects.bySlug;
type ProjectCopy = (typeof messages.projects.bySlug)[ProjectSlug] & {
  impact?: readonly { value: string; label: Bilingual }[];
  sections?: readonly {
    title: Bilingual;
    body?: Bilingual;
    bullets?: readonly Bilingual[];
    media?: readonly {
      alt: Bilingual;
      caption?: Bilingual;
    }[];
  }[];
  keyTakeaways?: readonly Bilingual[];
};

export function localizeProject(project: Project, locale: Locale): Project {
  const copy = messages.projects.bySlug[project.slug as ProjectSlug] as ProjectCopy | undefined;
  if (!copy) return project;
  const pick = (b: Bilingual) => b[locale];
  return {
    ...project,
    title: pick(copy.title),
    type: pick(copy.type),
    badge: pick(copy.badge),
    shortDescription: pick(copy.shortDescription),
    longDescription: pick(copy.longDescription),
    highlights: copy.highlights.map((h) => pick(h)),
    keyTakeaways: copy.keyTakeaways ? copy.keyTakeaways.map(pick) : project.keyTakeaways,
    impact: copy.impact ? copy.impact.map((i) => ({ value: i.value, label: pick(i.label) })) : project.impact,
    sections: copy.sections
      ? copy.sections.map((section, sectionIndex) => ({
          title: pick(section.title),
          body: section.body ? pick(section.body) : undefined,
          bullets: section.bullets?.map(pick),
          media: project.sections?.[sectionIndex]?.media?.map((item, mediaIndex) => {
            const mediaCopy = section.media?.[mediaIndex];
            return {
              ...item,
              alt: mediaCopy ? pick(mediaCopy.alt) : item.alt,
              caption: mediaCopy?.caption ? pick(mediaCopy.caption) : item.caption,
            };
          }),
        }))
      : project.sections,
  };
}
