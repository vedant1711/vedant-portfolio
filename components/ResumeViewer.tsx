"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useRef, useState } from "react";
import { profile } from "@/lib/data";

const ZOOMS = [1, 1.5, 2, 3];

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
  const [zoom, setZoom] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const current = profile.resumes[active];
  const zoomed = zoom > 1;

  // keep the same spot in view when the magnification changes, instead of
  // snapping back to the top-left corner
  const applyZoom = useCallback((next: number) => {
    const el = scrollRef.current;
    const prevCentre = el
      ? {
          x: (el.scrollLeft + el.clientWidth / 2) / Math.max(el.scrollWidth, 1),
          y: (el.scrollTop + el.clientHeight / 2) / Math.max(el.scrollHeight, 1),
        }
      : null;

    setZoom(next);

    requestAnimationFrame(() => {
      const node = scrollRef.current;
      if (!node || !prevCentre) return;
      node.scrollLeft = prevCentre.x * node.scrollWidth - node.clientWidth / 2;
      node.scrollTop = prevCentre.y * node.scrollHeight - node.clientHeight / 2;
    });
  }, []);

  const step = (dir: 1 | -1) => {
    const i = ZOOMS.indexOf(zoom);
    const at = i === -1 ? 0 : i;
    applyZoom(ZOOMS[Math.min(ZOOMS.length - 1, Math.max(0, at + dir))]);
  };

  return (
    <div>
      {/* variant + file actions */}
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
              onClick={() => {
                setActive(i);
                setZoom(1); // a new resume always starts fitted to the width
              }}
              className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                i === active ? "bg-accent text-white" : "text-muted hover:text-ink"
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

      {/* zoom bar */}
      <div className="mx-auto mt-8 flex max-w-3xl items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
          {zoomed ? "Drag to pan" : "Fitted to width"}
        </p>
        <div className="flex items-center gap-1 rounded-md border border-line p-1">
          <button
            onClick={() => step(-1)}
            disabled={zoom === ZOOMS[0]}
            aria-label="Zoom out"
            className="flex h-8 w-8 items-center justify-center rounded text-ink transition-colors hover:bg-accent-soft hover:text-accent disabled:pointer-events-none disabled:opacity-35"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14" />
            </svg>
          </button>
          <button
            onClick={() => applyZoom(1)}
            aria-label="Reset zoom to fit width"
            className="min-w-[3.5rem] rounded px-2 py-1 font-mono text-[12px] font-medium text-muted transition-colors hover:text-accent"
          >
            {Math.round(zoom * 100)}%
          </button>
          <button
            onClick={() => step(1)}
            disabled={zoom === ZOOMS[ZOOMS.length - 1]}
            aria-label="Zoom in"
            className="flex h-8 w-8 items-center justify-center rounded text-ink transition-colors hover:bg-accent-soft hover:text-accent disabled:pointer-events-none disabled:opacity-35"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>

      {/* the resume page. at 100% the image is exactly the container width, so
          nothing ever scrolls sideways unless the reader zooms in on purpose. */}
      <figure className="mt-3">
        <div
          ref={scrollRef}
          className={`mx-auto max-w-3xl border border-line bg-white shadow-[0_1px_0_var(--line),0_24px_60px_-32px_rgba(0,0,0,0.45)] ${
            zoomed ? "max-h-[78dvh] overflow-auto overscroll-contain" : "overflow-hidden"
          }`}
        >
          <img
            src={current.preview}
            alt={`${profile.name} resume, ${current.label} version`}
            width={1428}
            height={2021}
            onDoubleClick={() => applyZoom(zoomed ? 1 : 2)}
            style={{ width: `${zoom * 100}%`, maxWidth: "none" }}
            className={`block h-auto select-none ${zoomed ? "cursor-grab" : "cursor-zoom-in"}`}
            draggable={false}
          />
        </div>
        <figcaption className="mx-auto mt-4 max-w-3xl font-mono text-[11px] uppercase tracking-wider text-faint">
          {current.label} resume · one page · double-tap to zoom, or open the PDF
          above
        </figcaption>
      </figure>
    </div>
  );
}
