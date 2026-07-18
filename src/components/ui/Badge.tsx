interface BadgeProps {
  children: string;
  variant?: 'mine' | 'live' | 'default';
}

const styles = {
  mine: 'border-indigo/20 bg-indigo/10 text-indigo',
  live: 'border-live/20 bg-live/10 text-live',
  default: 'border-line bg-paper text-steel',
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold ${styles[variant]}`}
    >
      {variant === 'live' && <span className="h-1.5 w-1.5 rounded-full bg-live" />}
      {children}
    </span>
  );
}
