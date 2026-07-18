import { STATS } from '@/constants/profile';

export function Stats() {
  return (
    <section className="border-y border-line bg-panel/70">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x-0 divide-y divide-line px-6 md:grid-cols-4 md:divide-x md:divide-y-0">
        {STATS.map((stat) => (
          <div key={stat.label} className="py-8 md:px-8">
            <p className="font-mono text-3xl font-bold text-ink md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm text-steel">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
