export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-rose-dark uppercase">
      <span className="h-px w-8 bg-rose-dark/60" aria-hidden="true" />
      {children}
    </span>
  );
}
