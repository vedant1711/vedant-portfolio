/* eslint-disable @next/next/no-img-element */
import type { Project } from "@/lib/data";

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function ProjectCard({
  project,
  index,
  full = false,
}: {
  project: Project;
  index: number;
  full?: boolean;
}) {
  const href = project.live ?? project.github;
  const description = full ? project.description : project.description.slice(0, 1);

  return (
    <article className="group flex h-full flex-col border border-line bg-surface transition-colors hover:border-accent/50">
      {project.image && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block aspect-[16/10] overflow-hidden border-b border-line bg-ground"
        >
          <img
            src={project.image}
            alt={project.imageAlt ?? `${project.name} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </a>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="mono-label">
            {String(index).padStart(2, "0")}
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {project.status}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-1 font-mono text-[13px] text-accent">{project.subtitle}</p>

        <div className="mt-4 flex-1 space-y-3">
          {description.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <li
              key={t}
              className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        {(project.live || project.github) && (
          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-4 font-mono text-[12px] font-medium uppercase tracking-wider">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
              >
                Live <ExternalIcon />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
              >
                Code <ExternalIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
