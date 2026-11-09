import type { Bilingual } from "@/i18n/types";

export type ExperienceRoute = {
  slug: string;
  entryIndex: number;
  projectSlugs: readonly string[];
  hook: Bilingual;
  highlightTitles: readonly Bilingual[];
  stats: readonly { value: string; label: Bilingual }[];
};

export const experienceRoutes = [
  {
    slug: "levit-shopport-ai",
    entryIndex: 0,
    projectSlugs: ["levit-shopport-ai"],
    hook: {
      en: "Made AI recommendation quality measurable, faster to route, and safer to improve in production.",
      ko: "AI 추천 품질을 측정 가능하게 만들고, 라우팅을 가속하며, 프로덕션 개선을 더 안전하게 만들었습니다.",
    },
    highlightTitles: [
      { en: "Routing architecture", ko: "라우팅 아키텍처" },
      { en: "Evaluation platform", ko: "평가 플랫폼" },
      { en: "Memory personalization", ko: "메모리 개인화" },
      { en: "Production debugging", ko: "프로덕션 디버깅" },
    ],
    stats: [
      { value: "730", label: { en: "GitHub contributions", ko: "GitHub 기여" } },
      { value: "~8×", label: { en: "Faster confident routing", ko: "확신 구간 라우팅 속도" } },
      { value: "86%", label: { en: "V3 routing accuracy", ko: "V3 라우팅 정확도" } },
      { value: "93%", label: { en: "Eligible errors rescued", ko: "대상 오류 복구율" } },
    ],
  },
  {
    slug: "signum",
    entryIndex: 1,
    projectSlugs: ["signum"],
    hook: {
      en: "Turned fragmented hospital data into a funded AI decision-support platform for caregivers.",
      ko: "분산된 병원 데이터를 간병인을 위한 지원금 수상 AI 의사결정 플랫폼으로 발전시켰습니다.",
    },
    highlightTitles: [
      { en: "Funded product", ko: "지원금 수상 제품" },
      { en: "Data & forecasting", ko: "데이터와 예측" },
      { en: "Grounded AI", ko: "근거 기반 AI" },
    ],
    stats: [
      { value: "$3,750", label: { en: "PIT-UN funding", ko: "PIT-UN 지원금" } },
      { value: "50+ hrs", label: { en: "Weekly research reduced", ko: "주간 조사 시간 단축" } },
      { value: "3", label: { en: "Data sources unified", ko: "통합 데이터 소스" } },
      { value: "RAG", label: { en: "Grounded decision support", ko: "근거 기반 의사결정 지원" } },
    ],
  },
  {
    slug: "rokaf-squad-leader",
    entryIndex: 2,
    projectSlugs: [],
    hook: {
      en: "Led 20+ airmen through high-tempo operations where readiness and coordination were non-negotiable.",
      ko: "준비태세와 조율이 필수인 고강도 작전 환경에서 20명 이상의 병력을 이끌었습니다.",
    },
    highlightTitles: [
      { en: "Operational leadership", ko: "작전 리더십" },
      { en: "Readiness recognized", ko: "준비태세 인정" },
    ],
    stats: [
      { value: "20+", label: { en: "Airmen coordinated", ko: "조율한 병력" } },
      { value: "Squad", label: { en: "Leadership scope", ko: "리더십 범위" } },
      { value: "Award", label: { en: "Commendation received", ko: "표창 수여" } },
    ],
  },
  {
    slug: "atom-tech-intern",
    entryIndex: 3,
    projectSlugs: [],
    hook: {
      en: "Built secure authentication and onboarding foundations for production user management.",
      ko: "프로덕션 사용자 관리를 위한 안전한 인증과 온보딩 기반을 구축했습니다.",
    },
    highlightTitles: [
      { en: "Secure authentication", ko: "보안 인증" },
      { en: "Production onboarding", ko: "프로덕션 온보딩" },
    ],
    stats: [
      { value: "SQL", label: { en: "Encrypted user data", ko: "암호화된 사용자 데이터" } },
      { value: "JWT", label: { en: "Authenticated sessions", ko: "인증 세션" } },
      { value: "2", label: { en: "Core production workflows", ko: "핵심 프로덕션 워크플로" } },
    ],
  },
] as const satisfies readonly ExperienceRoute[];

export function getExperienceRoute(slug: string): ExperienceRoute | undefined {
  return experienceRoutes.find((experience) => experience.slug === slug);
}
