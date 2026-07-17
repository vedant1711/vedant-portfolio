/* eslint-disable @next/next/no-img-element */
import Section from "./Section";
import Reveal from "./Reveal";
import { projects, profile } from "@/lib/data";
import type { Project } from "@/lib/data";

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.11-.74.4-1.25.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.68 5.38-5.24 5.66.41.36.78 1.05.78 2.13v3.16c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.25)]">
        {project.image && (
          <a
            href={project.live ?? project.github}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className="block aspect-[16/10] overflow-hidden border-b border-line bg-ground"
          >
            <img
              src={project.image}
              alt={project.imageAlt ?? `${project.name} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>
        )}
        <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              {project.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent-ink">{project.subtitle}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <GitHubIcon />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>

        <div className="mt-4 flex-1 space-y-3">
          {project.description.map((d) => (
            <p key={d.slice(0, 32)} className="text-sm leading-relaxed text-muted">
              {d}
            </p>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[11px] font-medium text-accent-ink"
            >
              {t}
            </span>
          ))}
        </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" eyebrow="03 · Projects" title="Things I've built">
      <div className="grid gap-6 lg:grid-cols-3">
        {featured.map((p, i) => (
          <ProjectCard key={p.name} project={p} delay={Math.min(i * 0.08, 0.24)} />
        ))}
      </div>

      <h3 className="mt-14 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        More builds
      </h3>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {more.map((p, i) => (
          <ProjectCard key={p.name} project={p} delay={Math.min(i * 0.08, 0.24)} />
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 text-sm text-muted">
          More experiments and coursework live on{" "}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            github.com/vedant1711
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
