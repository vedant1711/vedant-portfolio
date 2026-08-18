/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The roles Vedant Somani has held across AI, software engineering, and data, plus two years leading a university ACM chapter.",
};

function CompanyMark({
  logo,
  alt,
  company,
}: {
  logo?: string;
  alt?: string;
  company: string;
}) {
  const initials = company
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-white sm:h-14 sm:w-14">
      {logo ? (
        <img
          src={logo}
          alt={alt ?? `${company} logo`}
          loading="lazy"
          className="h-full w-full object-contain p-1"
        />
      ) : (
        <span
          aria-hidden="true"
          className="font-mono text-xs font-semibold text-accent"
        >
          {initials}
        </span>
      )}
    </span>
  );
}

export default function ExperiencePage() {
  return (
    <div className="frame">
      <PageHeader
        index="03"
        kicker="Where I have worked"
        title="A few years of shipping AI, data, and software."
        description="Four engineering roles across AI research, machine learning, and full-stack product work, plus two years leading a university ACM chapter."
      />

      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
          {/* sticky rail with the stage photo beside the timeline */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <SectionLabel>Timeline</SectionLabel>
            <p className="text-muted">
              From machine learning and full-stack internships to research
              engineering at the University of Washington.
            </p>
            <figure className="hidden overflow-hidden border border-line bg-ground lg:block">
              <img
                src="/media/linkedin/stage-2.jpg"
                alt="Vedant Somani presenting on stage"
                loading="lazy"
                className="stage-photo h-full w-full object-cover"
              />
              <figcaption className="border-t border-line px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-faint">
                On stage, teaching a workshop
              </figcaption>
            </figure>
          </aside>

          {/* timeline */}
          <div>
            {experience.map((job, i) => (
              <Reveal key={job.role + job.company} delay={Math.min(i * 0.05, 0.2)}>
                <article className="border-t border-line py-8 first:border-t-0 first:pt-0 sm:py-10">
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                    <div className="flex min-w-0 items-start gap-4">
                      <CompanyMark
                        logo={job.logo}
                        alt={job.logoAlt}
                        company={job.company}
                      />
                      <div className="min-w-0">
                        <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                          {job.role}
                        </h2>
                        <p className="mt-1 font-mono text-[13px] text-accent">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                      <span className="font-mono text-[13px] text-muted">
                        {job.from} <span className="text-line">→</span> {job.to}
                      </span>
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-[15px] leading-relaxed text-muted sm:text-base">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1 w-1 shrink-0 bg-accent"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {job.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
