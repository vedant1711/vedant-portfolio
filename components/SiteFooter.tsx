import Link from "next/link";
import { profile } from "@/lib/data";

const social = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "eScience", href: profile.links.escience },
  { label: "ResearchGate", href: profile.links.researchgate },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="frame">
        {/* CTA band */}
        <div className="px-5 py-14 sm:px-8 sm:py-20">
          <p className="mono-label">Get in touch</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Have a system worth building? Let us talk.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Start a conversation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-md border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* link columns */}
        <div className="grid grid-cols-2 gap-y-8 border-t border-line px-5 py-10 sm:grid-cols-4 sm:px-8">
          <div className="col-span-2 sm:col-span-1">
            <p className="mono-label">Vedant Somani</p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              {profile.roleShort} based in {profile.location}.
            </p>
          </div>
          <div>
            <p className="mono-label">Pages</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ["About", "/about"],
                ["Experience", "/experience"],
                ["Projects", "/projects"],
                ["Resume", "/resume"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-muted transition-colors hover:text-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mono-label">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-sm">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mono-label">Resume</p>
            <ul className="mt-3 space-y-2 text-sm">
              {profile.resumes.map((r) => (
                <li key={r.short}>
                  <a href={r.file} download className="text-muted transition-colors hover:text-accent">
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* baseline */}
        <div className="flex flex-col gap-2 border-t border-line px-5 py-6 font-mono text-[11px] uppercase tracking-wider text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {year} Vedant Somani</span>
          <span>Built with Next.js · Seattle, WA</span>
        </div>
      </div>
    </footer>
  );
}
