"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { profile } from "@/lib/data";

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export default function ResumeViewer() {
  const [active, setActive] = useState(0);
  const current = profile.resumes[active];

  return (
    <div>
      {/* controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="inline-flex rounded-md border border-line p-1"
          role="tablist"
          aria-label="Resume variant"
        >
          {profile.resumes.map((r, i) => (
            <button
              key={r.short}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                i === active
                  ? "bg-accent text-white"
                  : "text-muted hover:text-ink"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={current.file}
            download
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <DownloadIcon />
            Download PDF
          </a>
          <a
            href={current.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Open PDF <ExternalIcon />
          </a>
        </div>
      </div>

      {/* the resume itself, rendered as the page it is. on narrow screens the
          page stays at a legible width and pans sideways instead of shrinking
          into unreadable type. */}
      <figure className="mt-8">
        <div className="mx-auto max-w-3xl overflow-x-auto">
          <a
            href={current.file}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${current.label} resume PDF`}
            className="block w-[620px] border border-line bg-white shadow-[0_1px_0_var(--line),0_24px_60px_-32px_rgba(0,0,0,0.45)] transition-colors hover:border-accent/60 sm:w-full"
          >
            <img
              key={current.preview}
              src={current.preview}
              alt={`${profile.name} resume, ${current.label} version`}
              width={1428}
              height={2021}
              className="h-auto w-full"
            />
          </a>
        </div>
        <figcaption className="mx-auto mt-4 max-w-3xl font-mono text-[11px] uppercase tracking-wider text-faint">
          {current.label} resume · one page ·{" "}
          <span className="sm:hidden">swipe to read, tap to open the PDF</span>
          <span className="hidden sm:inline">click to open the PDF</span>
        </figcaption>
      </figure>
    </div>
  );
}
