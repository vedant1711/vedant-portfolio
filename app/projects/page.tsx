import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { profile, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Vedant Somani: research pipelines, agentic AI systems, and full-stack products.",
};

export default function ProjectsPage() {
  return (
    <div className="frame">
      <PageHeader
        index="04"
        kicker="Selected work"
        title="Things I have designed, built, and shipped."
        description="Research pipelines, autonomous agents, and full-stack products. A few are live, a few are competition builds, and one is running in production at UW."
      />

      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-8 flex items-center justify-between">
          <SectionLabel n={String(projects.length).padStart(2, "0")}>
            All projects
          </SectionLabel>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={Math.min((i % 2) * 0.06, 0.12)} className="h-full">
              <ProjectCard project={p} index={i + 1} full />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="text-muted">
            More experiments and smaller builds live on my GitHub.
          </p>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-[12px] font-medium uppercase tracking-wider text-ink transition-colors hover:border-accent hover:text-accent"
          >
            View GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
