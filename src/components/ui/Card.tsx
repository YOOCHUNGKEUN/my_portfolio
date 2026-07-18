import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <article
      className={`rounded-lg border border-line bg-panel p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lift ${className}`}
    >
      {children}
    </article>
  );
}
