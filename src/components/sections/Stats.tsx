import { STATS } from '@/constants/profile';

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 md:px-6">
      <div className="grid gap-4 md:grid-cols-4">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`rounded-xl border bg-panel/80 p-5 shadow-sm ${
              index === 1
                ? 'border-live/25 bg-live/10'
                : index === 2
                  ? 'border-indigo/25 bg-indigo/10'
                  : index === 3
                    ? 'border-rose/25 bg-rose/10'
                    : 'border-white/10'
            }`}
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-steel">
              {stat.category}
            </p>
            <p className="mt-3 font-mono text-3xl font-bold text-ink">{stat.value}</p>
            <p className="mt-2 text-sm text-steel">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
