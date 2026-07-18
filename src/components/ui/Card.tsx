import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <article
      className={`rounded-xl border border-white/10 bg-panel/88 p-6 shadow-sm transition hover:-translate-y-1 hover:border-white/18 hover:shadow-lift ${className}`}
    >
      {children}
    </article>
  );
}
