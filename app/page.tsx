/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CursorGrid from "@/components/CursorGrid";
import Marquee from "@/components/Marquee";
import Stat from "@/components/Stat";
import SkillPill from "@/components/SkillPill";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { profile, projects, skillGroups } from "@/lib/data";

const featured = projects.filter((p) => p.featured);
const tickerSkills = skillGroups.flatMap((g) => g.skills).filter((s) => s.icon);

export default function Home() {
  return (
    <div className="frame">
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 opacity-70" aria-hidden="true">
          <CursorGrid />
        </div>

        <div className="relative px-5 py-14 sm:px-8 sm:py-20">
          <div className="flex items-center justify-between">
            <span className="mono-label">Portfolio · 2026</span>
            {profile.available && (
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available
              </span>
            )}
          </div>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.55fr_1fr] lg:items-end">
            {/* headline block */}
            <div>
              <p className="mono-label">{profile.name}</p>
              <Reveal>
                <h1 className="mt-5 text-[clamp(2.6rem,8.5vw,5.7rem)] font-semibold leading-[0.95] tracking-tight text-ink">
                  Agents, data,
                  <br />
                  and software
                  <br />
                  that <span className="text-accent">ships.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                  {profile.intro}
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    View projects
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                  <Link
                    href="/resume"
                    className="inline-flex items-center rounded-md border border-line bg-surface/70 px-5 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    Read resume
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* spec card */}
            <Reveal delay={0.12}>
              <div className="border border-line bg-surface/80 backdrop-blur-sm">
                {/* Fixed heights rather than an aspect ratio: the card spans the
                    full width between sm and lg, and a ratio would blow the
                    portrait up to ~575px there. object-contain keeps the whole
                    portrait visible at every breakpoint, uncropped. */}
                <div className="portrait-plate h-[290px] overflow-hidden border-b border-line sm:h-[380px] lg:h-[320px] xl:h-[350px]">
                  <img
                    src="/media/vedant-headshot.webp"
                    alt="Vedant Somani"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-contain object-bottom"
                  />
                </div>
                <dl>
                  {profile.facts.map((f) => (
                    <div
                      key={f.k}
                      className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 last:border-b-0"
                    >
                      <dt className="mono-label">{f.k}</dt>
                      <dd className="text-right text-sm font-medium text-ink">
                        {f.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="border-b border-line">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "px-5 py-8 sm:px-6 sm:py-10",
                i % 2 !== 0 ? "border-l border-line" : "",
                "sm:border-l sm:border-line",
                i % 4 === 0 ? "sm:border-l-0" : "",
                i >= 2 ? "border-t border-line sm:border-t-0" : "",
              ].join(" ")}
            >
              <Stat value={s.value} label={s.label} />
            </div>
          ))}
        </div>
      </section>

      {/* ---- Toolkit ticker ---- */}
      <section className="border-b border-line py-12">
        <div className="mb-6 px-5 sm:px-8">
          <SectionLabel>Toolkit</SectionLabel>
        </div>
        <Marquee>
          <div className="flex items-center gap-3 pr-3">
            {tickerSkills.map((s) => (
              <SkillPill key={s.name} skill={s} />
            ))}
          </div>
        </Marquee>
        <div className="mt-6 px-5 sm:px-8">
          <Link
            href="/about"
            className="link-underline font-mono text-[12px] font-medium uppercase tracking-wider text-muted hover:text-accent"
          >
            See the full stack →
          </Link>
        </div>
      </section>

      {/* ---- Selected work ---- */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionLabel n={String(featured.length).padStart(2, "0")}>
          Selected work
        </SectionLabel>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i * 0.06, 0.18)} className="h-full">
              <ProjectCard project={p} index={i + 1} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-[12px] font-medium uppercase tracking-wider text-ink transition-colors hover:border-accent hover:text-accent"
          >
            All projects ({projects.length})
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
