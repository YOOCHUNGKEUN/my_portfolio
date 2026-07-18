interface ChipProps {
  children: string;
}

export function Chip({ children }: ChipProps) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-steel">
      {children}
    </span>
  );
}
