/* eslint-disable @next/next/no-img-element */
import type { Skill } from "@/lib/data";

export default function SkillPill({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 border border-line bg-surface px-3.5 py-2.5">
      {skill.icon ? (
        <>
          <img
            src={`/logos/${skill.icon}.svg`}
            alt=""
            width={20}
            height={20}
            loading="lazy"
            className={`h-5 w-5 object-contain ${skill.invert ? "dark:invert" : ""} ${
              skill.darkIcon ? "dark:hidden" : ""
            }`}
          />
          {skill.darkIcon && (
            <img
              src={`/logos/${skill.darkIcon}.svg`}
              alt=""
              width={20}
              height={20}
              loading="lazy"
              className="hidden h-5 w-5 object-contain dark:block"
            />
          )}
        </>
      ) : (
        <span
          aria-hidden="true"
          className="flex h-5 w-5 items-center justify-center rounded-sm bg-accent-soft font-mono text-[9px] font-semibold text-accent"
        >
          {skill.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="whitespace-nowrap text-sm font-medium text-ink">
        {skill.name}
      </span>
    </span>
  );
}
