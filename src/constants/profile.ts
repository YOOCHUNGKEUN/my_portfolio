import type { Stat } from '@/types';

export const PROFILE = {
  name: '유충근',
  englishName: 'Benjamin',
  title: 'Senior Mobile Developer',
  headline: '말 대신, 운영 중인 서비스로 증명합니다.',
  subline:
    '핀테크 송금, 디지털 자산 거래소, 차량 인포테인먼트를 거쳐 지금은 B2B SaaS 식수대장을 1인 풀스택으로 만들고 운영합니다.',
  email: 'tosoon3535@gmail.com',
  location: 'Seoul, Korea',
} as const;

export const STATS: Stat[] = [
  { value: '9y 8m', label: '상용 모바일 개발 경력' },
  { value: '4', label: '직접 구축한 식수대장 제품' },
  { value: '10+', label: '참여한 회사와 서비스' },
  { value: '4', label: '핀테크·거래소·차량·SaaS 도메인' },
];
