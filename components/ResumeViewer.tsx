"use client";

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
            Download {current.short}
          </a>
          <a
            href={current.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Open <ExternalIcon />
          </a>
          <a
            href={profile.resumeDrive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            All on Drive <ExternalIcon />
          </a>
        </div>
      </div>

      {/* viewer */}
      <div className="mt-6 h-[70dvh] min-h-[420px] overflow-hidden border border-line bg-ground">
        <iframe
          key={current.file}
          src={`${current.file}#view=FitH`}
          title={`${profile.name} resume, ${current.label}`}
          className="h-full w-full"
        />
      </div>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-faint">
        Trouble viewing? Use the download button above.
      </p>
    </div>
  );
}
