import { notFound, redirect } from "next/navigation";
import { experienceRoutes, getExperienceRoute } from "@/data/experiences";

export function generateStaticParams() {
  return experienceRoutes.map((experience) => ({ slug: experience.slug }));
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = getExperienceRoute(slug);
  if (!experience) notFound();

  redirect("/#experience");
}
