import type { Stat } from '@/types';

export const PROFILE = {
  name: '유충근',
  englishName: 'Benjamin',
  title: 'Senior Mobile Developer',
  headline: '모바일에서 서버까지, 제품이 되는 흐름을 설계하고 연결합니다.',
  subline:
    '핀테크 송금, 디지털 자산 거래소, 차량 인포테인먼트 경험을 바탕으로 앱, 웹, 백엔드가 함께 움직이는 서비스 구조를 설계하고 고도화해 왔습니다.',
  email: 'tosoon3535@gmail.com',
  location: 'Seoul, Korea',
} as const;

export const STATS: Stat[] = [
  { category: 'CAREER', value: '9y 8m', label: '상용 모바일 개발 경력' },
  { category: 'PRODUCT', value: '4', label: '식수대장 제품 구성 경험' },
  { category: 'PROJECTS', value: '10+', label: '참여한 회사와 서비스' },
  { category: 'DOMAIN', value: '4', label: '핀테크·거래소·차량·SaaS 도메인' },
];
