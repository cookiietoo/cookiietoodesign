import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjects, getProjectBySlug, getNextProject } from "@/lib/content/projects";
import CaseStudyHeader from "@/components/work/CaseStudyHeader";
import CaseStudySection from "@/components/work/CaseStudySection";
import CaseStudyOutcomes from "@/components/work/CaseStudyOutcomes";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return {};
  return { title: `${p.title} — ${p.client} · Nilesh Chhipa`, description: p.summary };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const next = getNextProject(project.slug);

  return (
    <main>
      <CaseStudyHeader project={project} />
      {project.sections.map((s) => (
        <CaseStudySection key={s.heading} section={s} />
      ))}
      <CaseStudyOutcomes outcomes={project.outcomes} />

      <nav className="px-6 py-24 md:px-16">
        <Link href={`/work/${next.slug}`} data-cursor="view"
              className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>
          Next project
        </Link>
        <Link href={`/work/${next.slug}`} data-cursor="view"
              className="mt-3 block text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
          {next.title} →
        </Link>
      </nav>
    </main>
  );
}
