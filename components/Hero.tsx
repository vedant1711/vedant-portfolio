"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";
import ResumeMenu from "./ResumeMenu";
import SemanticField from "./SemanticField";

function Ent({
  type,
  label,
  children,
}: {
  type: "person" | "role" | "org" | "loc";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <span className={`ent ent-${type}`}>
      <span>{children}</span>
      <span className="ent-label" aria-hidden="true">
        {label}
      </span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.65, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 top-20 -z-10" aria-hidden="true">
        <SemanticField />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <motion.p
            {...anim(0)}
            className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted"
          >
            nlp.annotate(<span className="text-accent">&quot;introduction&quot;</span>)
          </motion.p>

          <motion.h1
            {...anim(0.1)}
            className="mt-6 font-display text-[1.65rem] font-semibold leading-[1.4] text-ink min-[430px]:text-3xl sm:text-5xl sm:leading-[1.35] lg:text-[3.4rem]"
          >
            <Ent type="person" label="person">
              Vedant Somani
            </Ent>{" "}
            is a{" "}
            <Ent type="role" label="role">
              text mining analyst
            </Ent>{" "}
            &amp;{" "}
            <Ent type="role" label="role">
              software engineer
            </Ent>{" "}
            at the{" "}
            <Ent type="org" label="org">
              UW eScience Institute
            </Ent>{" "}
            in{" "}
            <Ent type="loc" label="gpe">
              Seattle
            </Ent>
            .
          </motion.h1>

          <motion.p {...anim(0.22)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div {...anim(0.34)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ground transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <ResumeMenu />
            {profile.resumeDrive && (
              <a
                href={profile.resumeDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
                </svg>
                All resumes
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
            <span className="mx-1 hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.11-.74.4-1.25.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.68 5.38-5.24 5.66.41.36.78 1.05.78 2.13v3.16c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.65, 0.36, 1] }}
          className="justify-self-center lg:justify-self-end"
        >
          <figure className="relative w-72 sm:w-80 lg:w-[23rem]">
            <div
              className="absolute -inset-3 rounded-2xl border border-line bg-surface"
              aria-hidden="true"
            />
            <Image
              src="/media/vedant.jpeg"
              alt="Vedant Somani, smiling, with Elliott Bay and a Seattle sunset behind him"
              width={438}
              height={438}
              preload
              className="relative rounded-xl object-cover"
            />
            <figcaption className="relative mt-3 flex items-center justify-between px-1 font-mono text-[11px] text-muted">
              <span>Seattle, WA</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                open to opportunities
              </span>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
