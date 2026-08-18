/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionLabel from "@/components/SectionLabel";
import SkillPill from "@/components/SkillPill";
import HighlightCard from "@/components/HighlightCard";
import Reveal from "@/components/Reveal";
import {
  profile,
  education,
  skillGroups,
  achievements,
  highlights,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vedant Somani is an AI and software engineer at the University of Washington, working across agents, data, and the production software that carries them.",
};

const kinds = [
  { key: "award", label: "Awards" },
  { key: "publication", label: "Publications" },
  { key: "certification", label: "Certifications" },
] as const;

export default function AboutPage() {
  return (
    <div className="frame">
      <PageHeader
        index="02"
        kicker="Who I am"
        title="One engineer, three overlapping problems."
        description={profile.tagline}
      />

      {/* Bio + spec column */}
      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <SectionLabel n="01">Profile</SectionLabel>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-12">
          <div className="space-y-6">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-lg leading-relaxed text-ink/90 sm:text-xl">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.12}>
              <div className="mt-4 border-t border-line pt-6">
                <SectionLabel n="02">Education</SectionLabel>
                <dl className="mt-5 space-y-5">
                  {education.map((e) => (
                    <div key={e.school}>
                      <dt className="text-base font-semibold text-ink">
                        {e.school}
                      </dt>
                      <dd className="mt-1 text-[15px] text-muted">
                        {e.degree}
                        <span className="mx-2 text-line">·</span>
                        {e.period}
                        {e.note && (
                          <>
                            <span className="mx-2 text-line">·</span>
                            <span className="text-accent">{e.note}</span>
                          </>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          {/* vertical stage photo */}
          <Reveal delay={0.1}>
            <figure className="lg:sticky lg:top-24">
              <div className="overflow-hidden border border-line bg-ground">
                <img
                  src="/media/linkedin/stage-1.jpg"
                  alt="Vedant Somani speaking on stage"
                  loading="lazy"
                  className="stage-photo h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-wider text-faint">
                Speaking at a campus tech event
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Toolkit */}
      <section className="border-t border-line px-5 py-14 sm:px-8 sm:py-20">
        <SectionLabel n="03">Toolkit</SectionLabel>
        <div className="mt-10 space-y-10">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={Math.min(gi * 0.05, 0.2)}>
              <div className="grid gap-4 sm:grid-cols-[200px_1fr] sm:gap-8">
                <h3 className="mono-label pt-2">{group.label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li key={s.name}>
                      <SkillPill skill={s} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="border-t border-line px-5 py-14 sm:px-8 sm:py-20">
        <SectionLabel n="04">Recognition</SectionLabel>
        <div className="mt-10 space-y-12">
          {kinds.map(({ key, label }) => {
            const items = achievements.filter((a) => a.kind === key);
            if (items.length === 0) return null;
            return (
              <div key={key}>
                <h3 className="mono-label">{label}</h3>
                <div className="mt-2">
                  {items.map((a) => (
                    <div
                      key={a.title}
                      className="flex flex-col gap-2 border-t border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                    >
                      <div className="sm:max-w-2xl">
                        <h4 className="text-lg font-semibold tracking-tight text-ink">
                          {a.title}
                        </h4>
                        <p className="mt-1 text-[15px] text-muted">{a.detail}</p>
                      </div>
                      {a.link && (
                        <a
                          href={a.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-accent hover:underline"
                        >
                          {a.linkLabel ?? "Open"}
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M7 17 17 7M9 7h8v8" />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Community & talks */}
      <section className="border-t border-line px-5 py-14 sm:px-8 sm:py-20">
        <SectionLabel n="05">Community &amp; talks</SectionLabel>
        <p className="mt-6 max-w-2xl text-muted">
          Beyond the commit log: hackathons I have judged, workshops and
          institutes I have taught, and the communities that shaped how I build.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={Math.min(i * 0.05, 0.2)} className="h-full">
              <HighlightCard item={h} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
