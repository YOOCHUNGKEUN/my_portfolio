import type { ArchNode } from '@/types';
import { Badge } from './Badge';

interface ArchDiagramProps {
  nodes: ArchNode[];
}

export function ArchDiagram({ nodes }: ArchDiagramProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111622] p-4">
      {nodes.map((node, index) => (
        <div key={node.label}>
          <div
            className="flex items-start justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4"
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div>
              <p className="font-semibold text-ink">{node.label}</p>
              <p className="mt-1 font-mono text-xs text-steel">{node.detail}</p>
            </div>
            {node.mine && <Badge variant="mine">주도 개발</Badge>}
          </div>
          {index < nodes.length - 1 && <div className="ml-8 h-4 border-l-2 border-live/30" />}
        </div>
      ))}
      <p className="mt-4 border-t border-white/10 pt-4 font-mono text-xs text-steel">
        {nodes.filter((node) => node.mine).length}/{nodes.length} layers owned from design to operation
      </p>
    </div>
  );
}
