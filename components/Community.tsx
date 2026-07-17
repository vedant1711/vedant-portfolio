import Section from "./Section";
import Reveal from "./Reveal";
import Gallery from "./Gallery";
import { highlights, profile } from "@/lib/data";

export default function Community() {
  return (
    <Section id="community" eyebrow="06 · Community" title="Beyond the commit log">
      <div className="grid gap-6 lg:grid-cols-2">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={Math.min(i * 0.08, 0.24)} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/60">
              {h.images && h.images.length > 0 && (
                <div className="mb-5">
                  <Gallery images={h.images} alt={h.imageAlt ?? h.title} />
                </div>
              )}
              <p className="font-mono text-xs font-semibold uppercase tracking-wide text-accent">
                {h.date}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink">
                {h.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {h.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <div className="flex flex-wrap gap-2">
                  {h.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[11px] font-medium text-accent-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {h.link && (
                  <a
                    href={h.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    {h.linkLabel ?? "Read on LinkedIn"}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 text-sm text-muted">
          More posts, milestones, and behind-the-scenes on{" "}
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
