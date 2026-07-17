import Section from "./Section";
import Reveal from "./Reveal";
import { achievements } from "@/lib/data";

const kindMeta = {
  award: { label: "Award" },
  publication: { label: "IEEE Publication" },
  certification: { label: "Certification" },
} as const;

function KindBadge({ kind }: { kind: keyof typeof kindMeta }) {
  return (
    <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-ink">
      {kindMeta[kind].label}
    </span>
  );
}

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="05 · Recognition"
      title="Achievements, publications & certifications"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={Math.min(i * 0.05, 0.25)} className="h-full">
            <li className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/60">
              <div>
                <KindBadge kind={a.kind} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold leading-snug text-ink">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.detail}</p>
              </div>
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  {a.linkLabel ?? "Learn more"}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              )}
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
