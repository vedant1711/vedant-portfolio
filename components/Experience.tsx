import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 · Experience" title="Where I've worked">
      <div className="relative">
        {/* decorative stage photos in the right gutter — wide screens only */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-2 hidden w-72 select-none xl:block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/linkedin/stage-1.jpg"
            alt=""
            loading="lazy"
            className="stage-photo w-full rounded-2xl"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-[56%] hidden w-72 select-none xl:block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/linkedin/stage-2.jpg"
            alt=""
            loading="lazy"
            className="stage-photo w-full rounded-2xl"
          />
        </div>

      <ol className="relative ml-3 border-l border-line sm:ml-4 xl:mr-80">
        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-12 pl-8 last:pb-2 sm:pl-12">
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                job.current
                  ? "border-accent bg-accent"
                  : "border-line bg-ground"
              }`}
            />
            {job.current && (
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 animate-ping rounded-full bg-accent opacity-30"
              />
            )}

            <Reveal delay={Math.min(i * 0.06, 0.2)}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs font-semibold uppercase tracking-wide text-accent">
                  {job.period}
                </span>
                {job.current && (
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-ink">
                    current
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                {job.role}
              </h3>
              <p className="mt-0.5 font-medium text-muted">{job.company}</p>

              <ul className="mt-4 max-w-3xl space-y-2.5">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 32)} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                    <span className="mt-[0.55em] h-1 w-3 shrink-0 rounded-full bg-accent/50" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-surface px-2 py-1 font-mono text-[11px] font-medium text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      </div>
    </Section>
  );
}
