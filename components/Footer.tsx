import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="mt-8 scroll-mt-24 border-t border-line bg-surface px-5 sm:px-8">
      <div className="mx-auto max-w-6xl py-16 sm:py-20">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            07 · Contact
          </p>
          <h2
            className="mt-2 max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl"
            style={{ textWrap: "balance" }}
          >
            Let&apos;s build something together.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            I&apos;m always happy to talk about NLP, agentic AI, research tooling, or a
            full-stack idea you want to ship. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ground transition-transform hover:-translate-y-0.5"
            >
              {profile.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={profile.links.escience}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              eScience Profile
            </a>
            <a
              href={profile.links.researchgate}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              ResearchGate
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
            <span className="font-semibold uppercase tracking-wider">Resume</span>
            {profile.resumes.map((r) => (
              <a
                key={r.short}
                href={r.file}
                download
                className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
                </svg>
                {r.label} (PDF)
              </a>
            ))}
            {profile.resumeDrive && (
              <a
                href={profile.resumeDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline"
              >
                All resumes (Drive)
              </a>
            )}
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-muted">
          <span>© {new Date().getFullYear()} Vedant Somani</span>
          <span>
            Built with Next.js in Seattle <span aria-hidden="true">·</span>{" "}
            <a href="#top" className="hover:text-accent">
              back to top ↑
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
