import CursorGrid from "./CursorGrid";
import Reveal from "./Reveal";

export default function PageHeader({
  index,
  kicker,
  title,
  description,
}: {
  index: string;
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <CursorGrid />
      </div>

      <div className="relative px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex items-center justify-between">
          <span className="mono-label">
            {index} <span className="text-line">/</span> 06
          </span>
          <span className="mono-label">{kicker}</span>
        </div>
        <Reveal>
          <h1 className="mt-8 max-w-4xl text-[2.75rem] font-semibold leading-[0.98] tracking-tight text-ink sm:mt-10 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
