import Gallery from "./Gallery";
import type { Highlight } from "@/lib/data";

export default function HighlightCard({ item }: { item: Highlight }) {
  return (
    <article className="flex h-full flex-col border border-line bg-surface transition-colors hover:border-accent/50">
      {item.images && item.images.length > 0 && (
        <Gallery images={item.images} alt={item.imageAlt ?? item.title} />
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="mono-label">{item.date}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
          {item.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-accent hover:underline"
            >
              {item.linkLabel ?? "LinkedIn"}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
