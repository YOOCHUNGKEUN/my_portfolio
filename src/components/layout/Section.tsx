import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
