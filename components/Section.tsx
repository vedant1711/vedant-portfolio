import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2
            className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl"
            style={{ textWrap: "balance" }}
          >
            {title}
          </h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
