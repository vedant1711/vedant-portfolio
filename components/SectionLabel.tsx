export default function SectionLabel({
  children,
  n,
}: {
  children: React.ReactNode;
  n?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="mono-label whitespace-nowrap">{children}</span>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
      {n && <span className="mono-label">{n}</span>}
    </div>
  );
}
