/* eslint-disable @next/next/no-img-element */
import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";
import type { Skill } from "@/lib/data";

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <li className="group flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 py-2.5 transition-all hover:-translate-y-0.5 hover:border-accent/60">
      {skill.icon ? (
        <>
          <img
            src={`/logos/${skill.icon}.svg`}
            alt=""
            width={22}
            height={22}
            loading="lazy"
            className={`h-[22px] w-[22px] object-contain ${
              skill.invert ? "dark:invert" : ""
            } ${skill.darkIcon ? "dark:hidden" : ""}`}
          />
          {skill.darkIcon && (
            <img
              src={`/logos/${skill.darkIcon}.svg`}
              alt=""
              width={22}
              height={22}
              loading="lazy"
              className="hidden h-[22px] w-[22px] object-contain dark:block"
            />
          )}
        </>
      ) : (
        <span
          aria-hidden="true"
          className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-accent-soft font-mono text-[10px] font-semibold text-accent-ink"
        >
          {skill.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-sm font-medium text-ink">{skill.name}</span>
    </li>
  );
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 · Skills" title="Tools I work with">
      <div className="space-y-10">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={Math.min(i * 0.05, 0.2)}>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {group.skills.map((s) => (
                <SkillChip key={s.name} skill={s} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
