interface BadgeProps {
  children: string;
  variant?: 'mine' | 'live' | 'default';
}

const styles = {
  mine: 'border-live/25 bg-live/10 text-live',
  live: 'border-live/25 bg-live/10 text-live',
  default: 'border-white/10 bg-white/[0.04] text-steel',
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] ${styles[variant]}`}
    >
      {variant === 'live' && <span className="h-1.5 w-1.5 rounded-full bg-live" />}
      {children}
    </span>
  );
}
