import { SKILLS } from '@/constants/skills';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';

export function AICapability() {
  const aiSkills = SKILLS.find((skill) => skill.category === 'AI / LLM')!;

  return (
    <Section id="ai" eyebrow="ai capability" title="모바일 시니어 위에 얹은 AI 실전 역량">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <p className="text-lg leading-8 text-steel">
            AI 기능을 써 본 수준을 넘어, 모바일 서비스에 붙일 수 있는 파이프라인으로 설계하고
            검증해 본 경험이 있습니다. RAG 검색 품질 저하를 임베딩 문제로 좁히고, 모델
            파인튜닝과 Judge LLM 검증 흐름까지 직접 다뤘습니다.
          </p>
          <p className="mt-6 border-l-2 border-indigo pl-4 font-semibold leading-7 text-ink">
            앱에 AI를 도입할 때 생기는 품질, 비용, 아키텍처 문제를 실무 언어로 풀어낼 수 있는
            모바일 개발자입니다.
          </p>
        </Card>
        <Card>
          <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-indigo">
            AI Stack
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {aiSkills.items.map((item) => (
              <Chip key={item.name}>{item.note ? `${item.name} · ${item.note}` : item.name}</Chip>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
