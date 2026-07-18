import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-24">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-live">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      <div className="mt-9">{children}</div>
    </section>
  );
}
