interface ChipProps {
  children: string;
}

export function Chip({ children }: ChipProps) {
  return (
    <span className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-steel">
      {children}
    </span>
  );
}
