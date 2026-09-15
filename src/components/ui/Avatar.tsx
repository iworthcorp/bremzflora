const palette = [
  "bg-blush text-rose-dark",
  "bg-lavender text-charcoal",
  "bg-sage text-charcoal",
  "bg-rose/40 text-rose-dark",
];

export function Avatar({ initials, seed = 0 }: { initials: string; seed?: number }) {
  const colorClass = palette[seed % palette.length];
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-serif text-sm font-semibold ${colorClass}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
