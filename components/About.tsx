import Section from "./Section";
import Reveal from "./Reveal";
import { profile, education } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="Turning research questions into working systems">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Education
            </h3>
            <ul className="mt-4 space-y-5">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-semibold text-ink">{e.school}</p>
                  <p className="mt-0.5 text-sm text-muted">{e.degree}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {e.period}
                    {e.note && (
                      <span className="ml-2 rounded bg-accent-soft px-1.5 py-0.5 font-semibold text-accent-ink">
                        {e.note}
                      </span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
