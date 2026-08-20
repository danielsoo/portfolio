import type { Bilingual } from "./types";

/**
 * All UI copy in one place. Each field is `{ en, ko }` so you can edit both languages side by side.
 * Sections mirror the page: nav → hero → about → …
 */
export const messages = {
  /* ---------- Nav ---------- */
  nav: {
    about: { en: "About", ko: "소개" },
    experience: { en: "Experience", ko: "경력" },
    projects: { en: "Projects", ko: "프로젝트" },
    leadership: { en: "Leadership", ko: "리더십" },
    contact: { en: "Contact", ko: "연락" },
    toggleTheme: { en: "Toggle theme", ko: "테마 전환" },
    menu: { en: "Menu", ko: "메뉴" },
    language: { en: "Language", ko: "언어" },
    langShortEn: { en: "EN", ko: "EN" },
    langShortKo: { en: "KO", ko: "한" },
  },

  /* ---------- Hero ---------- */
  hero: {
    greet: { en: "Hello, world!", ko: "Hello, world!" },
    proofLineTop: { en: "Work that", ko: "결과로" },
    proofLineBottom: { en: "proves itself.", ko: "증명합니다." },
    roleLine: { en: "Software Engineer & Researcher", ko: "소프트웨어 엔지니어 & 연구원" },
    blurb: {
      en: "Penn State CS student building at the intersection of AI systems and full-stack engineering.",
      ko: "펜실베니아 주립대 컴퓨터과학 전공으로, AI 시스템과 풀스택 엔지니어링이 만나는 지점에서 만듭니다.",
    },
    viewProjects: { en: "View Projects", ko: "프로젝트 보기" },
    contactMe: { en: "Contact Me", ko: "연락하기" },
    showEvidence: { en: "Show", ko: "보기" },
    selectEvidence: { en: "Select evidence", ko: "증거 자료 선택" },
    evidence: [
      {
        eyebrow: { en: "Levit / Production AI", ko: "Levit / 프로덕션 AI" },
        title: { en: "114K lines of TypeScript shipped", ko: "TypeScript 코드 11만 4천 줄 배포" },
        meta: { en: "Routing · Evaluation · Personalization", ko: "라우팅 · 평가 · 개인화" },
      },
      {
        eyebrow: { en: "IEEE / Combat Robotics", ko: "IEEE / 전투 로보틱스" },
        title: { en: "GladIEEEators — 1st place", ko: "GladIEEEators — 1위" },
        meta: { en: "Shot & Chaser · Multibot systems engineering", ko: "Shot & Chaser · 멀티봇 시스템 엔지니어링" },
      },
      {
        eyebrow: { en: "Research / TinyML", ko: "연구 / TinyML" },
        title: { en: "Federated intelligence at the edge", ko: "엣지에서 구현한 연합 지능" },
        meta: { en: "Privacy · Embedded systems · Research", ko: "프라이버시 · 임베디드 시스템 · 연구" },
      },
      {
        eyebrow: { en: "SIGNUM / AI Platform", ko: "SIGNUM / AI 플랫폼" },
        title: { en: "$3,750 awarded for hospital AI", ko: "병원 AI 플랫폼으로 $3,750 지원금 수상" },
        meta: { en: "PIT-UN · RAG · Healthcare analytics", ko: "PIT-UN · RAG · 의료 데이터 분석" },
      },
    ] as const,
  },

  /* ---------- About ---------- */
  about: {
    sectionLabel: { en: "01. About Me", ko: "01. 소개" },
    title: { en: "Who I Am", ko: "저는 이런 사람입니다" },
    browseHint: {
      en: "Start with the signals. Open a card when you want the full story.",
      ko: "핵심 신호부터 살펴보고, 전체 이야기가 궁금할 때 카드를 열어보세요.",
    },
    openStory: { en: "Open my story", ko: "전체 이야기 보기" },
    closeStory: { en: "Close details", ko: "상세 내용 닫기" },
    cardBuild: { en: "What I build", ko: "무엇을 만드는가" },
    cardBuildTitle: { en: "AI systems that hold up in production", ko: "실제 서비스에서 신뢰할 수 있는 AI 시스템" },
    cardResearch: { en: "Research", ko: "연구" },
    cardResearchTitle: { en: "Intelligence at the edge", ko: "엣지에서 구현하는 지능" },
    cardProfile: { en: "Profile", ko: "프로필" },
    cardNow: { en: "Latest role", ko: "최근 경력" },
    storySummary: {
      en: "I connect AI research, production engineering, and product decisions to build systems people can actually rely on.",
      ko: "AI 연구와 프로덕션 엔지니어링, 제품 의사결정을 연결해 사람들이 실제로 신뢰할 수 있는 시스템을 만듭니다.",
    },
    portraitLabel: { en: "Portrait coming soon", ko: "전신 사진 추가 예정" },
    documentsLabel: { en: "Documents", ko: "문서" },
    p1: {
      en: "I'm Younsoo Park — a Computer Science student at Penn State University (Dean's List, B.S. CS + Math minor, graduating May 2027) with a passion for building reliable AI systems and full-stack applications.",
      ko: "저는 박윤수입니다 — 펜실베니아 주립대학교 컴퓨터과학 전공(딘스 리스트, CS 학사 + 수학 부전공, 2027년 5월 졸업 예정)이며, 안정적인 AI 시스템과 풀스택 애플리케이션을 만드는 일에 열정이 있습니다.",
    },
    p2: {
      en: "My research focuses on federated learning and TinyML for IoT security under Dr. Suman Saha and Dr. Peilong Li — targeting deployment on resource-constrained edge devices like ESP32. Outside the lab, I build real products: from an AI hospital-quality platform to multilingual restaurant web apps.",
      ko: "연구는 Suman Saha 교수님과 Peilong Li 교수님 지도 아래 IoT 보안을 위한 연합학습·TinyML에 초점을 두고, ESP32 같은 자원이 제한된 엣지 기기 배포를 목표로 합니다. 연구실 밖에서는 AI 기반 병원 품질 플랫폼부터 다국어 레스토랑 웹앱까지 실제 제품을 만듭니다.",
    },
    p3: {
      en: "I've also served as a Squad Leader in the Republic of Korea Air Force, where I was commended for leadership and operational readiness.",
      ko: "대한민국 공군에서 분대장으로 복무하며 리더십과 작전 준비태세로 표창을 받은 경험이 있습니다.",
    },
    interests: [
      { en: "Federated Learning", ko: "연합학습" },
      { en: "TinyML & Edge AI", ko: "TinyML & 엣지 AI" },
      { en: "IoT Security", ko: "IoT 보안" },
      { en: "Adversarial ML", ko: "적대적 ML" },
      { en: "Full-Stack Engineering", ko: "풀스택 엔지니어링" },
      { en: "Distributed Systems", ko: "분산 시스템" },
    ] as const satisfies readonly Bilingual[],
    codeFileName: { en: "younsoo.ts", ko: "younsoo.ts" },
    codeConst: { en: "const", ko: "const" },
    codeVar: { en: "younsoo", ko: "younsoo" },
    codeKeys: {
      name: { en: "name", ko: "name" },
      school: { en: "school", ko: "school" },
      major: { en: "major", ko: "major" },
      status: { en: "status", ko: "status" },
      location: { en: "location", ko: "location" },
      currentRole: { en: "currentRole", ko: "currentRole" },
      research: { en: "research", ko: "research" },
      openTo: { en: "openTo", ko: "openTo" },
    },
    codeStrings: {
      nameVal: { en: "Younsoo Park", ko: "Younsoo Park" },
      schoolVal: { en: "Penn State '27", ko: "Penn State '27" },
      majorVal: { en: "CS + Mathematics", ko: "CS + Mathematics" },
      statusVal: { en: "Dean's List", ko: "Dean's List" },
      locationVal: { en: "University Park, PA", ko: "University Park, PA" },
      currentRoleVal: { en: "Associate Problem Solver @ Levit", ko: "Associate Problem Solver @ Levit" },
      r1: { en: "Federated Learning", ko: "Federated Learning" },
      r2: { en: "TinyML / IoT Security", ko: "TinyML / IoT Security" },
      r3: { en: "Adversarial ML", ko: "Adversarial ML" },
      openVal: { en: "new opportunities", ko: "new opportunities" },
    },
  },

  documents: {
    resume: {
      label: { en: "Résumé", ko: "이력서" },
      short: { en: "Industry-focused résumé", ko: "산업 중심 이력서" },
    },
    cv: {
      label: { en: "CV", ko: "CV" },
      short: { en: "Academic curriculum vitae", ko: "학술 이력서(CV)" },
    },
  },

  /* ---------- Experience ---------- */
  experience: {
    sectionLabel: { en: "02. Experience", ko: "02. 경력" },
    heading: { en: "Where I've Worked", ko: "경험한 곳" },
    browseHint: {
      en: "A concise record of where I worked, when I was there, and the roles I held.",
      ko: "어디에서 언제 어떤 역할로 일했는지 간결하게 정리했습니다.",
    },
    dragHint: { en: "Drag to follow the timeline", ko: "밀어서 경력 흐름 보기" },
    previousRole: { en: "Previous role", ko: "이전 경력" },
    nextRole: { en: "Next role", ko: "다음 경력" },
    highlightsLabel: { en: "role highlights", ko: "개 주요 성과" },
    openDetails: { en: "Open role", ko: "경력 열기" },
    closeDetails: { en: "Close role details", ko: "경력 상세 닫기" },
    impactLabel: { en: "What changed", ko: "만들어낸 변화" },
    stackLabel: { en: "Working stack", ko: "사용 기술" },
    entries: [
      {
        role: { en: "Associate Problem Solver", ko: "Associate Problem Solver" },
        employmentType: { en: "Internship", ko: "인턴십" },
        org: {
          en: "Levit — Shopport (AI Shopping App on iOS & Android)",
          ko: "Levit — Shopport (iOS·Android 정식 출시 AI 쇼핑 앱)",
        },
        location: {
          en: "Seoul, South Korea",
          ko: "대한민국 서울",
        },
        period: { en: "June 2026 – Aug 2026", ko: "2026년 6월 – 2026년 8월" },
        bullets: [
          {
            en: "Owned Shopport routing improvements from LLM classification to an embedding-based semantic fast path (~8× faster for confident cases) and a hybrid destination classifier for ambiguous queries.",
            ko: "Shopport 라우팅을 LLM 분류에서 확신 구간을 약 8배 빠르게 처리하는 임베딩 시맨틱 fast path와 애매한 쿼리용 하이브리드 목적지 분류기로 발전.",
          },
          {
            en: "Built the routing-quality platform end to end across Next.js, NestJS, MongoDB, workers, and admin: turn audits, versioned evaluation, coverage diffs, latency waterfalls, and rollback-safe backfills.",
            ko: "Next.js·NestJS·MongoDB·워커·어드민 전반에 턴 검수, 평가 버저닝, 커버리지 대조, 지연 워터폴, 롤백 안전 백필을 포함한 라우팅 품질 플랫폼을 엔드투엔드로 구축.",
          },
          {
            en: "Designed and shipped Wowness, a Mem0-backed cross-category discovery recommender, as sole engineer across a 919-line NestJS engine, React UI, catalog grounding, and experimentation lab.",
            ko: "Mem0 기반 크로스카테고리 발견 추천 시스템 Wowness를 919줄 NestJS 엔진, React UI, 실카탈로그 접지, 실험 랩까지 단독 엔지니어로 설계·배포.",
          },
          {
            en: "Diagnosed systemic production failures and misleading analytics at their source, including a split MongoDB connection that kept V3 at zero executions and false-positive counts reduced from 2,005 to 811.",
            ko: "V3 실행을 0회로 만든 MongoDB 연결 분리 버그와 2,005건에서 811건으로 줄인 오탐 집계 등 시스템 경계의 프로덕션 장애와 잘못된 지표를 근본 원인부터 진단·수정.",
          },
        ] as const satisfies readonly Bilingual[],
        tags: ["TypeScript", "React", "Next.js", "NestJS", "MongoDB", "OpenRouter", "Semantic Embeddings", "Mem0", "Kubernetes", "A/B Testing"],
      },
      {
        role: { en: "Co-founder", ko: "공동 창업" },
        employmentType: { en: "Part-time", ko: "파트타임" },
        org: { en: "SIGNUM — Nittany AI Alliance (PIT-UN Funded)", ko: "SIGNUM — Nittany AI Alliance (PIT-UN 지원)" },
        location: { en: "University Park, PA", ko: "University Park, PA" },
        period: { en: "Aug 2024 – Nov 2025", ko: "2024년 8월 – 2025년 11월" },
        bullets: [
          {
            en: "Co-founded a $3,750 PIT-UN-funded AI platform for hospital quality analysis and caregiver decision support.",
            ko: "PIT-UN 지원금 3,750달러로 병원 품질 분석·간병 의사결정 지원 AI 플랫폼을 공동 창업.",
          },
          {
            en: "Built a multi-source ETL pipeline (CMS, NPPES, Google Places) into a DuckDB warehouse; developed a Markov Transition Model for hospital star-rating prediction with confidence intervals.",
            ko: "CMS·NPPES·Google Places 다중 소스 ETL을 DuckDB에 구축하고, 병원 별점 예측을 위한 마르코프 전이 모델과 신뢰구간을 개발.",
          },
          {
            en: "Designed and deployed domain-specific RAG pipelines using FAISS and AWS Bedrock, reducing caregiver research time from 50+ hours/week to near-instant responses.",
            ko: "FAISS·AWS Bedrock 기반 도메인 특화 RAG를 설계·배포해 간병 연구 시간을 주당 50시간 이상에서 거의 즉시 응답으로 단축.",
          },
        ] as const satisfies readonly Bilingual[],
        tags: ["Python", "AWS Bedrock", "FAISS", "DuckDB", "RAG"],
      },
      {
        role: { en: "Squad Leader (Promoted)", ko: "분대장 (진급)" },
        employmentType: { en: "Full-time", ko: "풀타임" },
        org: { en: "Republic of Korea Air Force", ko: "대한민국 공군" },
        location: { en: "Republic of Korea", ko: "대한민국" },
        period: { en: "Sept 2022 – June 2024", ko: "2022년 9월 – 2024년 6월" },
        bullets: [
          {
            en: "Promoted to Squad Leader; managed and coordinated 20+ airmen across high-tempo operational missions.",
            ko: "분대장으로 진급 후 고강도 작전 임무에서 20명 이상의 병력을 관리·조율.",
          },
          {
            en: "Received a Commendation Award for sustained leadership performance and operational readiness.",
            ko: "지속적인 리더십과 작전 준비태세로 표창 수여.",
          },
        ] as const satisfies readonly Bilingual[],
        tags: ["Leadership", "Operations"],
      },
      {
        role: { en: "Software Engineering Intern", ko: "소프트웨어 엔지니어링 인턴" },
        employmentType: { en: "Internship", ko: "인턴십" },
        org: { en: "Atom Tech Solutions LTD", ko: "Atom Tech Solutions LTD" },
        location: { en: "Berkeley, CA", ko: "Berkeley, CA" },
        period: { en: "May 2022 – Aug 2022", ko: "2022년 5월 – 2022년 8월" },
        bullets: [
          {
            en: "Built secure login with SQL/JWT authentication, encrypted data storage, and automated credential generation.",
            ko: "SQL/JWT 인증, 암호화 저장소, 자동 자격 증명 생성이 포함된 보안 로그인 구축.",
          },
          {
            en: "Implemented authenticated onboarding workflows for production user management.",
            ko: "프로덕션 사용자 관리를 위한 인증 온보딩 워크플로 구현.",
          },
        ] as const satisfies readonly Bilingual[],
        tags: ["SQL", "JWT", "Node.js"],
      },
    ],
  },

  /* ---------- Skills ---------- */
  skills: {
    sectionLabel: { en: "03. Skills", ko: "03. 기술 스택" },
    heading: { en: "Technologies I Work With", ko: "기술 스택" },
    browseHint: {
      en: "Every tool is visible, organized by how an AI product moves from code to production.",
      ko: "AI 제품을 만들고 개선해 운영하는 순서에 따라 기술 스택을 정리했습니다.",
    },
    systemLabel: { en: "Capability system map", ko: "기술 흐름 한눈에 보기" },
    systemTitle: { en: "AI product engineering — end to end", ko: "AI 제품을 처음부터 끝까지 만드는 기술" },
    systemStatus: { en: "All capabilities online", ko: "전체 기술 표시 중" },
    systemFooter: { en: "From interface to intelligence to operations", ko: "화면 구현부터 AI, 실험, 운영까지" },
    stages: [
      {
        eyebrow: { en: "Foundation", ko: "기초" },
        title: { en: "Languages & Runtime", ko: "언어와 실행 환경" },
        description: { en: "The core tools used to express, automate, and ship systems.", ko: "서비스를 구현하고 자동화하는 데 사용하는 기본 기술입니다." },
        groupIndices: [0],
      },
      {
        eyebrow: { en: "Product Layer", ko: "제품 개발" },
        title: { en: "Interfaces & Services", ko: "프론트엔드와 백엔드" },
        description: { en: "User-facing experiences connected to reliable application services.", ko: "사용자가 접하는 화면부터 이를 뒷받침하는 API와 서비스까지 구현합니다." },
        groupIndices: [1, 2],
      },
      {
        eyebrow: { en: "Intelligence Layer", ko: "AI·데이터" },
        title: { en: "Data & Models", ko: "데이터와 AI 시스템" },
        description: { en: "Storage, retrieval, routing, memory, and model-powered decisions.", ko: "데이터 저장과 검색부터 라우팅, 장기 기억, 모델 기반 판단까지 연결합니다." },
        groupIndices: [3, 4],
      },
      {
        eyebrow: { en: "Learning Loop", ko: "평가·개선" },
        title: { en: "Evaluation & Experiments", ko: "실험과 성능 평가" },
        description: { en: "Measurement systems that turn production behavior into improvement.", ko: "실제 사용 결과를 측정하고 다음 제품 개선으로 이어지게 합니다." },
        groupIndices: [5],
      },
      {
        eyebrow: { en: "Production", ko: "배포·운영" },
        title: { en: "Delivery & Reliability", ko: "안정적인 서비스 운영" },
        description: { en: "Infrastructure, observability, and tests that keep the system running.", ko: "배포와 모니터링, 테스트를 통해 서비스가 안정적으로 동작하게 합니다." },
        groupIndices: [6, 7],
      },
    ] as const,
    openGroup: { en: "Open stack", ko: "기술 스택 열기" },
    closeGroup: { en: "Close skill details", ko: "기술 상세 닫기" },
    tools: { en: "tools", ko: "가지 기술" },
    groups: [
      {
        category: { en: "Languages", ko: "언어" },
        items: ["TypeScript", "JavaScript / Node.js", "Python", "Java", "C / C++", "SQL", "YAML"],
      },
      {
        category: { en: "Frontend", ko: "프론트엔드" },
        items: ["React", "Next.js", "Vite", "React Router", "TanStack Query", "Tailwind CSS", "Recharts", "Axios", "React Testing Library"],
      },
      {
        category: { en: "Backend", ko: "백엔드" },
        items: ["Node.js", "NestJS", "Express", "Flask", "REST API", "Swagger / OpenAPI", "Dependency Injection"],
      },
      {
        category: { en: "Database / Storage", ko: "데이터베이스·저장소" },
        items: ["MongoDB", "Mongoose", "Supabase / PostgreSQL", "Redis", "DuckDB", "Firebase", "Mem0 Vector Memory Store"],
      },
      {
        category: { en: "AI / LLM", ko: "AI·LLM" },
        items: ["OpenAI API", "AWS Bedrock", "OpenRouter", "Prompt Engineering", "RAG", "FAISS", "Semantic Embeddings", "Vector Similarity Routing", "LLM Evaluation", "Mem0 OSS", "Vision / Multimodal LLM", "Federated Learning", "PyTorch", "TensorFlow", "Scikit-learn", "spaCy", "SHAP", "Flower (FL)"],
      },
      {
        category: { en: "Experimentation / Analytics", ko: "실험·분석" },
        items: ["A/B Testing", "Sticky Treatment / Control Assignment", "Evaluation Harnesses", "Backfill Pipelines", "Funnel Analysis", "Recommendation Completion Rate"],
      },
      {
        category: { en: "Infrastructure / Operations", ko: "인프라·운영" },
        items: ["Kubernetes", "Helm", "Kubernetes CronJob", "Docker / ECR", "ArgoCD", "GitHub Actions", "Datadog", "Feature Flags", "Retry / Exponential Backoff"],
      },
      {
        category: { en: "Testing / Dev Tools", ko: "테스트·개발 도구" },
        items: ["Jest", "Vitest", "ESLint", "Git", "pnpm", "Turborepo"],
      },
    ],
  },

  /* ---------- Projects (list + shared) ---------- */
  projects: {
    sectionLabel: { en: "04. Projects", ko: "04. 프로젝트" },
    heading: { en: "Things I've Built", ko: "나의 프로젝트" },
    browseHint: {
      en: "Scan the evidence, then enter a card for the complete case study.",
      ko: "핵심 증거를 훑어보고, 카드를 열어 전체 케이스 스터디를 확인하세요.",
    },
    dragHint: { en: "Swipe or drag to explore", ko: "옆으로 밀어서 둘러보기" },
    previousProject: { en: "Previous project", ko: "이전 프로젝트" },
    nextProject: { en: "Next project", ko: "다음 프로젝트" },
    viewDetails: { en: "View details", ko: "자세히 보기" },
    githubTitle: { en: "GitHub", ko: "GitHub" },
    liveSiteTitle: { en: "Live site", ko: "라이브 사이트" },
    appStoreTitle: { en: "Download Shopport on the App Store", ko: "App Store에서 Shopport 다운로드" },
    googlePlayTitle: { en: "Get Shopport on Google Play", ko: "Google Play에서 Shopport 다운로드" },
    bySlug: {
      "levit-shopport-ai": {
        title: {
          en: "Levit — Shopport AI Recommendation Platform",
          ko: "Levit — Shopport AI 추천 플랫폼",
        },
        type: { en: "Levit · Shopport AI", ko: "Levit · Shopport AI" },
        badge: { en: "Associate Problem Solver", ko: "Associate Problem Solver" },
        shortDescription: {
          en: "Worked across applied AI and full-stack engineering for Shopport, Levit's consumer AI shopping app officially released on iOS and Android. Evolved its LLM router into an embedding-based semantic and hybrid router, built the production quality analytics and backfill platform, and shipped a memory-grounded cross-category recommender end to end.",
          ko: "Levit이 iOS와 Android에 정식 출시한 소비자용 AI 쇼핑 앱 Shopport에서 AI·풀스택 개발을 담당했습니다. LLM 라우터를 임베딩 기반 시맨틱·하이브리드 라우터로 발전시키고, 서비스 품질 분석·백필 플랫폼과 메모리 기반 크로스카테고리 추천 시스템을 처음부터 끝까지 구축했습니다.",
        },
        longDescription: {
          en: "Shopport is Levit's consumer AI shopping app, officially available on iOS and Android. During a seven-week engagement at Levit, I worked across its applied-AI stack: React and Next.js operator tools, NestJS routing and recommendation services, MongoDB and Supabase analytics, background workers, and production rollout controls. I independently ran the loop from problem definition and diagnostic harnesses through implementation, deployment, backfill, and production verification.\n\nThe work was not a standalone app built in isolation. It was a set of high-leverage contributions inside a large commerce product, made in close collaboration with the CEO and adjacent product and engineering teams.",
          ko: "Shopport는 Levit이 iOS와 Android에 정식 출시한 소비자용 AI 쇼핑 앱입니다. Levit에서 약 7주 동안 React·Next.js 운영 도구, NestJS 라우팅·추천 서비스, MongoDB·Supabase 분석, 백그라운드 워커, 실제 서비스 배포 제어까지 Shopport의 AI 기술 전반을 다뤘습니다. 문제 정의와 진단 도구 구축부터 구현, 배포, 과거 데이터 재처리, 실제 서비스 검증까지 한 사이클을 독립적으로 수행했습니다.\n\n앱 전체를 혼자 새로 만든 것이 아니라, 이미 운영 중인 대규모 커머스 제품 안에서 CEO와 제품·엔지니어링 팀과 긴밀히 협업하며 핵심 기능을 개선했습니다.",
        },
        highlights: [
          { en: "Evolved routing from an LLM classifier to a semantic router that skips the LLM for confident cases (~8× faster), then to a hybrid classifier for ambiguous queries", ko: "LLM 분류기를 확신 구간에서 LLM을 건너뛰는 시맨틱 라우터(약 8배 빠름), 이후 애매한 쿼리를 처리하는 하이브리드 분류기로 발전" },
          { en: "Evaluated V1/V2/V3 on production-derived traffic: V3 reached 86% accuracy with 3 regressions versus 31 for V2 and rescued 93% of eligible central-router errors", ko: "프로덕션 기반 트래픽에서 V1/V2/V3를 평가해 V3 정확도 86%, 회귀 3건(V2 31건), 대상 중앙 라우터 오류 구제율 93% 달성" },
          { en: "Built the routing-quality platform end to end: turn audit, versioned evaluation, coverage diffs, latency waterfalls, historical backfills, and operator controls", ko: "턴 검수, 평가 버저닝, 커버리지 대조, 지연 워터폴, 히스토리 백필, 운영 제어를 갖춘 라우팅 품질 플랫폼을 엔드투엔드로 구축" },
          { en: "Designed and shipped Wowness, a Mem0-backed cross-category discovery recommender, as sole engineer across a 919-line NestJS engine, React UI, and admin lab", ko: "Mem0 기반 크로스카테고리 발견 추천 Wowness를 919줄 NestJS 엔진, React UI, 어드민 랩까지 단독 엔지니어로 설계·배포" },
          { en: "Grounded generated recommendations in the live catalog and used A/B evaluation to select a persona fan-out engine over the initial weighted-score baseline", ko: "생성 추천을 실제 카탈로그에 접지하고, A/B 평가로 초기 가중 점수 베이스라인보다 페르소나 fan-out 엔진을 선택" },
          { en: "Diagnosed production failures at the system boundary, including a split MongoDB connection that kept V3 at zero executions and a CronJob self-call hairpin failure", ko: "V3 실행을 0회로 만든 MongoDB 연결 분리와 CronJob self-call hairpin 실패 등 시스템 경계의 프로덕션 장애를 진단" },
          { en: "Corrected systematic analytics false positives through root-cause fixes and rollback-safe backfills, reducing one queue-level count from 2,005 to 811 and dashboard errors from 82 to 57", ko: "근본 원인 수정과 롤백 안전 백필로 체계적인 분석 오탐을 바로잡아 큐 단위 집계를 2,005→811, 대시보드 오류를 82→57로 감소" },
        ] as const satisfies readonly Bilingual[],
        impact: [
          { value: "730", label: { en: "GitHub Contributions", ko: "GitHub 기여 커밋" } },
          { value: "143", label: { en: "Merged Pull Requests", ko: "병합 PR" } },
          { value: "+114K", label: { en: "TS / TSX Source Lines Added", ko: "추가한 TS / TSX 소스 라인" } },
          { value: "~8×", label: { en: "Faster Confident-Case Routing", ko: "확신 구간 라우팅 속도 향상" } },
          { value: "86%", label: { en: "V3 Routing Accuracy", ko: "V3 라우팅 정확도" } },
          { value: "93%", label: { en: "Eligible Router Errors Rescued", ko: "대상 라우터 오류 구제율" } },
          { value: "2,005 → 811", label: { en: "False-Positive Queue Count Corrected", ko: "수정한 오탐 큐 집계" } },
          { value: "919 LOC", label: { en: "Wowness NestJS Recommendation Engine", ko: "Wowness NestJS 추천 엔진" } },
        ],
        sections: [
          {
            title: { en: "Semantic & Hybrid Routing Engine", ko: "시맨틱 & 하이브리드 라우팅 엔진" },
            body: {
              en: "I took Shopport's routing stack through three architectural generations: catalog and LLM classification, a route-index semantic gate, and a hybrid router. The semantic fast path represents each catalog leaf with sentence-embedding centroids and bypasses the LLM when similarity is decisive. For the ambiguous 0.65–0.78 similarity band, chatbot 1.2.0 adds a logistic-regression destination classifier over frozen 768-dimensional embeddings while preserving deterministic safety rules for confident cases.",
              ko: "Shopport 라우팅 스택을 카탈로그·LLM 분류, route-index 시맨틱 게이트, 하이브리드 라우터의 세 세대로 발전시켰습니다. 시맨틱 fast path는 각 카탈로그 리프를 문장 임베딩 centroid로 표현해 유사도가 확실할 때 LLM을 건너뜁니다. 유사도 0.65~0.78의 애매 구간에는 동결된 768차원 임베딩 위 로지스틱 회귀 목적지 분류기를 추가하되, 확신 구간의 결정론적 안전 규칙은 유지했습니다.",
            },
            bullets: [
              { en: "Expanded routing across small appliances, supplements, processed foods, household, baby, furniture, and sports domains", ko: "소형가전·영양제·가공식품·생활·유아·가구·스포츠 도메인으로 라우팅 확장" },
              { en: "Added brand/model handling, follow-up-context retention, image routing, fashion style routing, and live scope overrides", ko: "브랜드·모델명 처리, 후속 대화 문맥 유지, 이미지 라우팅, 패션 스타일 라우팅, 실시간 스코프 override 추가" },
              { en: "Built paired evaluation harnesses and found model TTFT—not prompt size or architectural layering—to be the dominant latency lever", ko: "paired 평가 하네스로 프롬프트 크기나 구조가 아니라 모델 TTFT가 주 지연 레버임을 규명" },
              { en: "Measured ~0.4s median routing for confident semantic fast-path cases and ~8× speedup versus the LLM path", ko: "확신 구간 시맨틱 fast path에서 중앙값 약 0.4초, LLM 경로 대비 약 8배 속도 향상 측정" },
            ],
          },
          {
            title: { en: "Production Evaluation & Operations Platform", ko: "프로덕션 평가 & 운영 플랫폼" },
            body: {
              en: "I built the operator-facing system used to measure, audit, and improve routing quality. It evolved from live turn-by-turn analysis into persisted, versioned results with fast summary reads and rollback-safe historical reclassification.",
              ko: "라우팅 품질을 측정·감사·개선하는 운영자용 시스템을 구축했습니다. 실시간 턴별 분석에서 시작해 결과 영속화, 평가 버저닝, 빠른 summary 조회, 롤백 가능한 과거 재분류까지 발전시켰습니다.",
            },
            bullets: [
              { en: "Turn-level pass/fail audits, failure taxonomy, analysis versioning, original-conversation traceability, and weekly trend visualization", ko: "턴 단위 pass/fail 검수, 실패 분류 체계, 분석 버저닝, 원본 대화 추적, 주간 추세 시각화" },
              { en: "Three-way coverage comparison across routing leaves, the Core catalog, and route-index, with no-deploy override workflows", ko: "라우팅 리프·Core 카탈로그·route-index 3자 커버리지 대조와 무배포 override 워크플로" },
              { en: "Scheduled workers, catch-up backfills, concurrency controls, pacing, retries, exponential backoff, progress/ETA, and partial-failure recovery", ko: "예약 워커, catch-up 백필, 동시성·페이싱 제어, 재시도·지수 백오프, 진행률·ETA, 부분 실패 복구" },
              { en: "Live server-versus-local routing comparison, per-gate latency waterfalls, and post-routing outcome linking", ko: "실서버 대 로컬 라우팅 비교, 게이트별 지연 워터폴, 라우팅 후 outcome 연결" },
            ],
          },
          {
            title: { en: "Evaluation Integrity & Production Debugging", ko: "평가 무결성 & 프로덕션 디버깅" },
            body: {
              en: "A major part of the work was proving when the measurement system—not the router—was wrong. I traced misleading dashboard counts through stored labels, serving channels, version gates, database connections, and deployment state before changing production behavior.",
              ko: "라우터가 아니라 측정 시스템이 틀린 경우를 입증하는 것이 중요한 작업이었습니다. 프로덕션 동작을 바꾸기 전에 저장 라벨, 실제 서빙 채널, 버전 게이트, DB 연결, 배포 상태까지 추적해 잘못된 대시보드 수치의 원인을 찾았습니다.",
            },
            bullets: [
              { en: "Reduced an over-counted queue metric from 2,005 to 811 by finding a missing analysis-version gate", ko: "누락된 분석 버전 게이트를 찾아 과집계된 큐 지표를 2,005에서 811로 감소" },
              { en: "Reduced dashboard errors from 82 to 57 by synchronizing summary and turn-detail representations during backfill", ko: "백필 시 summary와 턴 상세 표현을 동기화해 대시보드 오류를 82에서 57로 감소" },
              { en: "Found a split main/external MongoDB connection that caused the V3 switch to read an empty cluster and execute zero times", ko: "V3 스위치가 빈 클러스터를 읽어 실행 0회가 되게 한 main/external MongoDB 연결 분리 발견" },
              { en: "Diagnosed a Kubernetes CronJob self-call hairpin failure and repaired it with loopback routing", ko: "Kubernetes CronJob self-call hairpin 실패를 진단하고 loopback 라우팅으로 복구" },
            ],
          },
          {
            title: { en: "Wowness — Memory-Grounded Discovery", ko: "Wowness — 메모리 기반 발견 추천" },
            body: {
              en: "I designed and shipped Wowness end to end to help users discover products outside categories they had already purchased from. Mem0 extracts durable user facts; a persona-based fan-out engine proposes novel categories and queries; and catalog search validates every final item to prevent hallucinated products.",
              ko: "사용자가 이미 구매한 카테고리 밖의 상품을 발견하도록 Wowness를 엔드투엔드로 설계·배포했습니다. Mem0가 지속 가능한 사용자 fact를 추출하고, 페르소나 기반 fan-out 엔진이 새로운 카테고리와 쿼리를 제안하며, 카탈로그 검색이 최종 상품을 검증해 환각 상품을 방지합니다.",
            },
            bullets: [
              { en: "Sole engineer across a 919-line NestJS engine, memory store, React home surface, experiment hook, and admin review lab", ko: "919줄 NestJS 엔진, 메모리 저장소, React 홈 화면, 실험 훅, 어드민 검수 랩 전 계층을 단독 구현" },
              { en: "Compared a relevance/coherence/novelty weighted baseline against a persona fan-out engine and removed the weaker baseline based on A/B results", ko: "관련성·일관성·참신함 가중 베이스라인과 페르소나 fan-out 엔진을 비교하고 A/B 결과에 따라 약한 베이스라인 제거" },
              { en: "Implemented privacy-aware user facts, hashed identity boundaries, kill switches, and production-safe rollout controls", ko: "프라이버시를 고려한 사용자 fact, 해시 ID 경계, 킬스위치, 프로덕션 안전 롤아웃 제어 구현" },
              { en: "Optimized for useful surprise—not merely similarity—while grounding every recommendation in real inventory", ko: "단순 유사도가 아닌 유용한 의외성을 최적화하면서 모든 추천을 실제 재고에 접지" },
            ],
          },
          {
            title: { en: "Experimentation & Product Reliability", ko: "실험 & 제품 안정성" },
            body: {
              en: "I built experiments as part of the product architecture rather than as one-off analytics. Server-side sticky assignment, forced test accounts, admin rollout controls, and destination-arrival attribution supported safe product decisions across routing and personalization.",
              ko: "실험을 일회성 분석이 아니라 제품 아키텍처의 일부로 구축했습니다. 서버 사이드 sticky 배정, 테스트 계정 강제 배정, 어드민 롤아웃 제어, 실제 목적지 도착 attribution으로 라우팅과 개인화 의사결정을 안전하게 지원했습니다.",
            },
            bullets: [
              { en: "Single-card auto-routing treatment/control flows and actual destination-arrival completion measurement", ko: "단일 카드 자동 라우팅 treatment/control 흐름과 실제 목적지 도착 기준 완료율 측정" },
              { en: "Fixed Korean IME initial-character splitting, navigation flicker, scroll restoration, infinite loading, and prompt leakage", ko: "한글 IME 첫 글자 분리, 내비게이션 깜빡임, 스크롤 복원, 무한 로딩, 내부 프롬프트 노출 수정" },
              { en: "Added feature flags, kill switches, Datadog reporting, and degraded-mode fallbacks around AI-dependent paths", ko: "AI 의존 경로에 기능 플래그, 킬스위치, Datadog 보고, degraded-mode 폴백 추가" },
            ],
          },
        ] as const,
        keyTakeaways: [
          {
            en: "A production AI system is incomplete without an evaluation loop that can distinguish model failures from measurement failures.",
            ko: "모델 실패와 측정 실패를 구분할 수 있는 평가 루프가 없다면 프로덕션 AI 시스템은 완성되지 않은 것입니다.",
          },
          {
            en: "Optimize the measured bottleneck: several architectural latency ideas failed before the harness showed that model TTFT was the real lever.",
            ko: "측정된 병목을 최적화해야 합니다. 여러 구조적 지연 개선안이 실패한 뒤 하네스가 모델 TTFT가 진짜 레버임을 보여줬습니다.",
          },
          {
            en: "Rules should enforce and verify decisions, not pretend to understand natural-language meaning; semantic judgment belongs to models, with deterministic safety boundaries around them.",
            ko: "규칙은 자연어 의미를 이해하는 척하기보다 결정을 집행하고 검증해야 합니다. 의미 판단은 모델이 맡고, 결정론적 코드는 그 주위에 안전 경계를 둬야 합니다.",
          },
          {
            en: "Personalization is not remembering everything—it is extracting the few durable preferences that create useful surprise, safely.",
            ko: "개인화는 모든 것을 기억하는 것이 아니라, 유용한 의외성을 만드는 소수의 지속 가능한 선호를 안전하게 추출하는 것입니다.",
          },
        ] as const satisfies readonly Bilingual[],
      },
      "ieee-battlebot": {
        title: {
          en: "GladIEEEators — Penn State IEEE Battle Bots Champion",
          ko: "GladIEEEators — Penn State IEEE Battle Bots 우승팀",
        },
        type: { en: "Combat Robotics · Penn State IEEE", ko: "컴뱃 로보틱스 · Penn State IEEE" },
        badge: { en: "1st Place · Shot & Chaser", ko: "1위 · Shot & Chaser" },
        shortDescription: {
          en: "Competed under Penn State IEEE as GladIEEEators with Shot & Chaser, a coordinated two-robot combat system: a belt-driven AR500 vertical-spinner main bot and a 15° five-fork wedge minibot. Integrated weapon dynamics, mixed-material armor, LiPo electronics, FEA, arena testing, and weight/budget engineering to win 1st place in April 2026.",
          ko: "Penn State IEEE 소속 GladIEEEators로 출전해 2대 협력 전투 로봇 Shot & Chaser를 제작했습니다. 벨트 구동 AR500 수직 스피너 메인봇과 15° 5-포크 웨지 미니봇에 무기 동역학, 복합 소재 장갑, LiPo 전장, FEA, 아레나 테스트, 중량·예산 엔지니어링을 통합해 2026년 4월 1위를 달성했습니다.",
        },
        longDescription: {
          en: "Shot & Chaser was the GladIEEEators multibot entry representing Penn State IEEE at the IEEE Student Chapter Battle Bots Competition, where the team earned 1st place in April 2026. The strategy paired Shot, a roughly five-pound vertical-spinner robot, with Chaser, a roughly one-pound wedge-and-fork support robot. The split created positioning and ground-game options, defensive redundancy, and easier repair without giving up much of the six-pound system allowance.\n\nThe project required full-system engineering rather than isolated CAD work: parametric weapon optimization, kinetic-energy and tip-speed calculations, belt geometry, shaft support, mixed-material armor, drivetrain and radio control, protected LiPo electronics, serviceability, weight accounting, procurement, FEA, physical testing, and rapid repair. Reliability also meant reasoning about coupled failure modes: whether LiPo packs and ESCs could remain thermally safe in hot outdoor weather, whether rubber and polymer parts would soften, stretch, or creep, and whether Shot's own 334 J weapon reaction could be carried through the shaft, mounts, UHMW, and aluminum chassis. Iterative fabrication and arena tests turned those constraints into a coordinated robot system that could survive impacts and perform reliably in competition.",
          ko: "Shot & Chaser는 Penn State IEEE를 대표해 IEEE 학생지부 Battle Bots 대회에 출전한 GladIEEEators의 멀티봇으로, 2026년 4월 1위를 차지했습니다. 약 5 lb 수직 스피너 로봇 Shot과 약 1 lb 웨지·포크 지원 로봇 Chaser를 조합해 6 lb 시스템 중량 범위 안에서 위치 선점과 그라운드 게임, 방어 이중화, 수리성을 확보했습니다.\n\n단순한 CAD 작업이 아니라 파라메트릭 무기 최적화, 운동에너지·팁 속도 계산, 벨트 형상, 샤프트 지지, 복합 소재 장갑, 구동계와 무선 제어, 보호된 LiPo 전장, 정비성, 중량 계산, 조달, FEA, 실물 테스트, 신속 수리를 함께 다루는 전체 시스템 엔지니어링이 필요했습니다. 신뢰성을 위해 더운 야외 환경에서 LiPo·ESC가 열적으로 안전한지, 고무·폴리머 부품이 연화·신장·크리프되지 않는지, Shot 자체의 334 J 무기 반력을 샤프트·마운트·UHMW·알루미늄 차체가 견딜 수 있는지를 함께 검토했습니다. 반복 제작과 아레나 테스트를 통해 충격을 견디고 대회에서 안정적으로 작동하는 협력 로봇 시스템으로 완성했습니다.",
        },
        highlights: [
          { en: "Won 1st place at the IEEE Student Chapter Battle Bots Competition in April 2026", ko: "2026년 4월 IEEE 학생지부 Battle Bots 대회 1위" },
          { en: "Represented Penn State IEEE as team GladIEEEators in the IEEE Student Chapter Battle Bots Competition", ko: "Penn State IEEE 소속 팀 GladIEEEators로 IEEE 학생지부 Battle Bots 대회 출전" },
          { en: "Developed a multibot strategy pairing Shot's asymmetric AR500 vertical spinner with Chaser's 15° five-fork wedge", ko: "Shot의 비대칭 AR500 수직 스피너와 Chaser의 15° 5-포크 웨지를 조합한 멀티봇 전략 개발" },
          { en: "Calculated 334 J of weapon energy at 18,500 RPM, with approximately one pound of spinning mass and a 200+ mph maximum tip speed", ko: "약 1 lb 회전체에 대해 18,500 RPM, 무기 에너지 334 J, 최대 팁 속도 200+ mph 계산" },
          { en: "Built a live-shaft weapon assembly with bearings, shaft collars, keyed shaft, 15T/22T pulleys, and an HTD-5M timing belt", ko: "베어링·샤프트 칼라·키드 샤프트·15T/22T 풀리·HTD-5M 타이밍 벨트로 live-shaft 무기계 구축" },
          { en: "Designed mixed-material protection using 6061 aluminum plates, TPU sidewalls/spacers, UHMW weapon mounts, and wheel guards", ko: "6061 알루미늄 플레이트, TPU 측벽·스페이서, UHMW 무기 마운트, 휠 가드 기반 복합 소재 방어 구조 설계" },
          { en: "Integrated separate brushed drive and brushless weapon systems, radio control, protected LiPo power, switches, fuses, and serviceable electronics", ko: "브러시드 주행계·브러시리스 무기계, 무선 제어, 보호된 LiPo 전원, 스위치·퓨즈·정비 가능한 전장 통합" },
          { en: "Engineered around thermal buildup in LiPo packs and ESCs, elastomer stretch and creep, and chassis reaction loads generated by the robot's own weapon", ko: "LiPo·ESC 열 축적, 탄성체의 신장·크리프, 자체 무기가 발생시키는 차체 반력까지 고려해 설계" },
          { en: "Used Fusion simulations to verify the weapon walls above a 4,000 N load with a 2.09 minimum safety factor, then ran repeated arena tests", ko: "Fusion 시뮬레이션으로 무기 벽을 4,000 N 이상 하중·최소 안전율 2.09에서 검증하고 반복 아레나 테스트 수행" },
          { en: "Managed a $976.47 total build budget with $496.18 of hardware entering the arena", ko: "총 제작 예산 $976.47, 아레나 투입 하드웨어 $496.18 관리" },
        ] as const satisfies readonly Bilingual[],
        impact: [
          { value: "1st", label: { en: "IEEE Battle Bots Competition", ko: "IEEE Battle Bots 대회" } },
          { value: "2 Bots", label: { en: "Shot & Chaser Multibot Strategy", ko: "Shot & Chaser 멀티봇 전략" } },
          { value: "334 J", label: { en: "Calculated Weapon Energy", ko: "계산 무기 에너지" } },
          { value: "200+ mph", label: { en: "Maximum Spinner Tip Speed", ko: "최대 스피너 팁 속도" } },
          { value: ">4,000 N", label: { en: "Validated Weapon-Wall Load", ko: "검증한 무기 벽 하중" } },
          { value: "$496", label: { en: "In-Arena Hardware Cost", ko: "아레나 투입 하드웨어 비용" } },
        ],
        sections: [
          {
            title: { en: "Multibot Strategy", ko: "멀티봇 전략" },
            body: { en: "Representing Penn State IEEE, GladIEEEators split the system into Shot and Chaser instead of concentrating every capability in one chassis. Shot delivered weapon energy through a vertical spinner, while Chaser used a compact wedge, five forks, and wheel protection to control space and support the primary bot.", ko: "Penn State IEEE를 대표한 GladIEEEators는 모든 기능을 하나의 섀시에 집중하지 않고 Shot과 Chaser로 시스템을 분리했습니다. Shot은 수직 스피너로 무기 에너지를 전달하고, Chaser는 소형 웨지·5개 포크·휠 보호 구조로 공간을 제어하며 메인봇을 지원했습니다." },
            bullets: [
              { en: "Designed both bots as one coordinated competition system rather than independent builds", ko: "두 로봇을 독립 제작물이 아닌 하나의 협력 대회 시스템으로 설계" },
              { en: "Balanced weapon potential, maneuverability, robustness, repairability, weight, and budget across two platforms", ko: "두 플랫폼의 무기력·기동성·견고성·수리성·중량·예산을 통합적으로 조율" },
              { en: "Built both drivetrains to remain mobile and useful after impacts or orientation changes", ko: "충격과 자세 변화 후에도 기동성과 역할을 유지하도록 두 구동계 설계" },
            ],
            media: [
              {
                alt: { en: "CAD assembly of the Chaser support robot", ko: "Chaser 지원 로봇 CAD 조립도" },
                caption: { en: "Chaser CAD — 15-degree wedge, five forks, protected wheels, and compact packaging.", ko: "Chaser CAD — 15도 웨지, 5개 포크, 보호된 휠, 소형 내부 배치." },
              },
              {
                alt: { en: "Physical Chaser prototype during fit testing", ko: "조립 적합성을 시험 중인 Chaser 실물 프로토타입" },
                caption: { en: "Chaser prototype used to verify packaging, wheel guards, fork geometry, and ground clearance.", ko: "내부 배치, 휠 가드, 포크 형상, 지상고를 검증한 Chaser 프로토타입." },
              },
              {
                alt: { en: "Early purple Chaser prototype with exposed electronics", ko: "전장이 노출된 초기 보라색 Chaser 프로토타입" },
                caption: { en: "Early Chaser prototype used to test the 15-degree five-fork geometry and internal packaging.", ko: "15도 5-포크 형상과 내부 배치를 시험한 초기 Chaser 프로토타입." },
              },
            ],
          },
          {
            title: { en: "Weapon System", ko: "무기 시스템" },
            body: { en: "Shot used an asymmetric AR500 steel vertical spinner driven by a 1250 kV brushless outrunner through an HTD-5M belt reduction. Parametric optimization balanced its center of mass; a live keyed shaft, bearings, collars, spacers, and a dedicated aluminum motor bracket carried the roughly one-pound rotating assembly.", ko: "Shot은 1250 kV 브러시리스 아웃러너와 HTD-5M 벨트 감속으로 구동되는 비대칭 AR500 강 수직 스피너를 사용했습니다. 파라메트릭 최적화로 무게중심을 맞추고 키드 live shaft, 베어링, 칼라, 스페이서, 전용 알루미늄 모터 브래킷으로 약 1 lb 회전체를 지지·구속했습니다." },
            bullets: [
              { en: "Evaluated spinner dimensions and belt lengths before finalizing pulley center distance", ko: "풀리 중심 거리를 확정하기 전 스피너 크기와 벨트 길이 대안 평가" },
              { en: "Used 15-tooth motor and 22-tooth spinner pulleys with replaceable timing belts", ko: "15T 모터 풀리와 22T 스피너 풀리, 교체 가능한 타이밍 벨트 사용" },
              { en: "Calculated 18,500 RPM, 334 J of kinetic energy, and a maximum tip speed above 200 mph", ko: "18,500 RPM, 운동에너지 334 J, 최대 팁 속도 200 mph 이상 계산" },
              { en: "Added weapon stops, clearance checks, thicker mounts, fillets, and stress testing around the weapon arms", ko: "무기 스톱, 간극 검사, 마운트 보강, 필렛, 무기 암 응력 테스트 적용" },
            ],
            media: [
              {
                alt: { en: "CAD assembly of Shot's vertical-spinner weapon system", ko: "Shot 수직 스피너 무기 시스템 CAD 조립도" },
                caption: { en: "Shot CAD — spinner, belt drive, live shaft, weapon mounts, and chassis packaging.", ko: "Shot CAD — 스피너, 벨트 구동계, live shaft, 무기 마운트, 차체 내부 배치." },
              },
              {
                alt: { en: "Close-up CAD render of Shot's spinner and live-shaft assembly", ko: "Shot 스피너와 live-shaft 조립부의 확대 CAD 렌더" },
                caption: { en: "Weapon-subsystem CAD — AR500 spinner, live shaft, bearings, collars, and mount interfaces.", ko: "무기 서브시스템 CAD — AR500 스피너, live shaft, 베어링, 칼라, 마운트 결합부." },
              },
              {
                alt: { en: "Fusion iProperties showing Shot weapon mass and inertia", ko: "Shot 무기의 질량과 관성 특성을 보여주는 Fusion iProperties" },
                caption: { en: "Fusion iProperties — the 0.610 lb·in² mass moment used in the 334 J energy calculation.", ko: "Fusion iProperties — 334 J 에너지 계산에 사용한 질량 관성모멘트 0.610 lb·in²." },
              },
            ],
          },
          {
            title: { en: "Chassis, Armor & Drivetrain", ko: "섀시·장갑 & 구동계" },
            body: { en: "Shot used a sandwich chassis combining 0.125-inch 6061 aluminum plates, 95A TPU walls, aluminum spacers, UHMW weapon holders, and steel forks. Chaser used a 15° wedge with five forks, a TPU body, and PETG top plate and wheel guards. Both designs prioritized arena-impact survival and fast repair.", ko: "Shot은 0.125인치 6061 알루미늄 플레이트, 95A TPU 벽, 알루미늄 스페이서, UHMW 무기 홀더, 강철 포크를 결합한 샌드위치 섀시를 사용했습니다. Chaser는 15° 웨지와 5개 포크, TPU 바디, PETG 상판·휠 가드를 적용했습니다. 두 기체 모두 아레나 충격 생존성과 빠른 수리를 우선했습니다." },
            bullets: [
              { en: "6061 aluminum supplied rigid structure while UHMW absorbed weapon loads and TPU provided resilient side protection", ko: "6061 알루미늄은 강성 구조, UHMW는 무기 하중 흡수, TPU는 탄성 측면 보호 담당" },
              { en: "Integrated 3-inch neoprene foam wheels and combat-robotics brushed motors on Shot; Chaser used 22:1 16 mm gearmotors, 2-inch wheels, and reached 3.9 ft/s", ko: "Shot에 3인치 네오프렌 폼 휠과 컴뱃 로보틱스용 브러시드 모터를 통합하고, Chaser에는 22:1 16 mm 기어모터·2인치 휠을 적용해 3.9 ft/s 달성" },
              { en: "Designed Chaser for invertibility so it could remain mobile after orientation changes", ko: "Chaser가 뒤집힌 뒤에도 기동할 수 있도록 양면 주행 가능 구조 설계" },
              { en: "Accounted for softening, stretch, and long-term deformation across TPU armor, neoprene wheels, and the timing-belt drive", ko: "TPU 장갑·네오프렌 휠·타이밍 벨트 구동계의 연화, 신장, 장기 변형 고려" },
              { en: "Iterated bolt-hole tolerances, standoffs, wheel clearance, forks, ribs, infill, and component compartments through physical prototypes", ko: "실물 프로토타입으로 볼트홀 공차, 스탠드오프, 휠 간극, 포크, 리브, 인필, 부품 수납부 반복 개선" },
            ],
            media: [
              {
                alt: { en: "Fabricated aluminum, UHMW, and TPU parts for Shot", ko: "Shot용 알루미늄·UHMW·TPU 가공 부품" },
                caption: { en: "Shot's fabricated mixed-material parts before final assembly.", ko: "최종 조립 전 Shot의 복합 소재 가공 부품." },
              },
              {
                alt: { en: "Fabricated 6061 aluminum plates and UHMW weapon holders", ko: "가공된 6061 알루미늄 플레이트와 UHMW 무기 홀더" },
                caption: { en: "Fabricated 6061 plates and UHMW weapon holders before Shot's sandwich-chassis assembly.", ko: "Shot 샌드위치 섀시 조립 전 가공된 6061 플레이트와 UHMW 무기 홀더." },
              },
            ],
          },
          {
            title: { en: "Power, Control & Safety", ko: "전원·제어 & 안전" },
            body: { en: "The two robots used separate radio and power architectures sized to their roles. Shot combined a 4S LiPo, dual brushed drive ESC, brushless weapon ESC, and high-current protection. Chaser used a compact 3S LiPo and dual-channel drive ESC.", ko: "두 로봇은 역할에 맞춘 별도 무선·전원 구조를 사용했습니다. Shot은 4S LiPo, 듀얼 브러시드 주행 ESC, 브러시리스 무기 ESC, 고전류 보호 회로를 결합했고 Chaser는 소형 3S LiPo와 듀얼 채널 주행 ESC를 사용했습니다." },
            bullets: [
              { en: "Protected and insulated receivers, ESCs, batteries, wiring, connectors, switches, and fuses inside serviceable compartments", ko: "정비 가능한 수납부 안에서 수신기·ESC·배터리·배선·커넥터·스위치·퓨즈를 보호·절연" },
              { en: "Used 12AWG/18AWG silicone wiring, XT60/T-plug/bullet connectors, heat shrink, and mechanical strain management", ko: "12AWG/18AWG 실리콘 배선, XT60·T-plug·bullet 커넥터, 열수축 튜브, 기계적 스트레인 관리 적용" },
              { en: "Designed battery access for charging and between-match replacement without sacrificing protection", ko: "보호성을 유지하면서 충전과 경기 사이 교체가 가능한 배터리 접근 구조 설계" },
              { en: "Considered hot-weather operation, high-current heat buildup, and between-match inspection and cooldown for both LiPo and ESC systems", ko: "LiPo·ESC의 더운 날씨 운용, 고전류 열 축적, 경기 사이 점검·냉각 고려" },
            ],
            media: [
              {
                alt: { en: "3D-printed internal wall and drive-motor mount", ko: "3D 프린트 내부 벽과 주행 모터 마운트" },
                caption: { en: "3D-printed internal wall and motor mount used to constrain shaft alignment while protecting wiring.", ko: "샤프트 정렬을 구속하고 배선을 보호하는 3D 프린트 내부 벽과 모터 마운트." },
              },
            ],
          },
          {
            title: { en: "Thermal, Material & Self-Impact Reliability", ko: "열·소재 & 자가 충격 신뢰성" },
            body: { en: "The hardest reliability problems were coupled. Ambient heat affected LiPo and ESC temperature margins; repeated loading could stretch or permanently deform compliant rubber and polymer parts; and every weapon strike sent the spinner's energy back into Shot's own shaft, mounts, and chassis. These were treated as system-level load cases rather than isolated component concerns.", ko: "가장 어려운 신뢰성 문제들은 서로 연결돼 있었습니다. 외기 온도는 LiPo·ESC의 열 여유에 영향을 주고, 반복 하중은 유연한 고무·폴리머 부품을 늘리거나 영구 변형시킬 수 있으며, 무기가 타격할 때마다 스피너 에너지는 Shot 자체의 샤프트·마운트·차체로 되돌아옵니다. 이를 개별 부품 문제가 아니라 시스템 수준 하중 조건으로 다뤘습니다." },
            bullets: [
              { en: "Placed and protected batteries and ESCs with hot outdoor conditions, high-current heating, inspection access, and cooldown time in mind", ko: "더운 야외 환경, 고전류 발열, 점검 접근성, 냉각 시간을 고려해 배터리와 ESC 배치·보호" },
              { en: "Controlled belt geometry and constrained compliant TPU, neoprene, and rubber components so useful flexibility did not become slack, misalignment, or creep", ko: "유용한 유연성이 늘어짐·정렬 불량·크리프로 이어지지 않도록 벨트 형상과 TPU·네오프렌·고무 부품 구속 설계" },
              { en: "Traced the spinner's reaction-load path through the live shaft, bearings, UHMW weapon holders, aluminum plates, spacers, and fasteners", ko: "스피너 반력의 전달 경로를 live shaft·베어링·UHMW 무기 홀더·알루미늄 플레이트·스페이서·패스너까지 추적" },
              { en: "Used FEA and arena tests to ask the critical question: could the chassis repeatedly survive the power of its own weapon?", ko: "FEA와 아레나 테스트로 ‘차체가 자체 무기 파워를 반복해서 견딜 수 있는가’를 검증" },
            ],
            media: [
              {
                alt: { en: "Blue TPU sidewalls during additive fabrication", ko: "적층 제조 중인 파란색 TPU 측벽" },
                caption: { en: "95A TPU sidewalls during fabrication — compliant armor designed around flexibility, heat, stretch, and creep.", ko: "제작 중인 95A TPU 측벽 — 유연성, 열, 신장, 크리프를 고려한 탄성 장갑." },
              },
            ],
          },
          {
            title: { en: "Validation & Resource Engineering", ko: "검증 & 자원 엔지니어링" },
            body: { en: "The design review treated testing, weight, thermal behavior, material deformation, and budget as engineering constraints. Fusion simulations verified the weapon walls above a 4,000 N load with a 2.09 minimum safety factor, and repeated arena trials checked whether the complete load path could withstand both opponent impacts and Shot's own weapon reaction. A component-level weight model and procurement sheet made tradeoffs visible before fabrication.", ko: "설계 리뷰에서 테스트·중량·열 거동·소재 변형·예산을 핵심 엔지니어링 제약으로 다뤘습니다. Fusion 시뮬레이션으로 무기 벽이 4,000 N 이상 하중에서 최소 안전율 2.09를 확보함을 검증하고, 반복 아레나 테스트로 전체 하중 경로가 상대 충격과 Shot 자체 무기 반력을 모두 견디는지 확인했습니다. 부품 단위 중량 모델과 구매표로 제작 전 트레이드오프를 가시화했습니다." },
            bullets: [
              { en: "Tracked measured component weights and used lightweighting or reinforcement depending on the current margin", ko: "실측 부품 중량을 추적하고 현재 여유에 따라 경량화 또는 보강 수행" },
              { en: "Validated weapon clearance, pulley geometry, inverted wheel contact, mount strength, live drivetrain behavior, and an externally accessible kill switch", ko: "무기 간극, 풀리 형상, 뒤집힌 상태 휠 접촉, 마운트 강도, 실주행 구동계, 외부 접근형 킬 스위치 검증" },
              { en: "Managed a $976.47 total project bill of materials, with $496.18 of components designated for in-arena use", ko: "총 BOM $976.47와 아레나 투입 부품 $496.18 관리" },
            ],
            media: [
              {
                alt: { en: "Fusion finite-element analysis of Shot's weapon mount", ko: "Shot 무기 마운트의 Fusion 유한요소해석" },
                caption: { en: "Weapon-mount FEA — validated above 4,000 N with a minimum safety factor of 2.09.", ko: "무기 마운트 FEA — 4,000 N 이상 하중과 최소 안전율 2.09로 검증." },
              },
            ],
          },
        ] as const,
        keyTakeaways: [
          {
            en: "A multibot is one system with two failure surfaces: strategy, weight, electronics, and repair planning have to be coordinated across both machines.",
            ko: "멀티봇은 실패 표면이 두 개인 하나의 시스템입니다. 전략·중량·전장·수리 계획을 두 기체에 걸쳐 조율해야 합니다.",
          },
          {
            en: "Material selection is functional architecture—AR500 cuts, aluminum carries structure, UHMW absorbs impact, and TPU adds compliant protection.",
            ko: "소재 선택 자체가 기능 아키텍처입니다. AR500은 타격하고, 알루미늄은 구조를 지지하며, UHMW는 충격을 흡수하고, TPU는 탄성 보호를 제공합니다.",
          },
          {
            en: "Competition reliability comes from testing how a design fails, not only proving that it works once.",
            ko: "대회에서의 신뢰성은 한 번 작동함을 증명하는 것이 아니라, 설계가 어떻게 실패하는지 테스트하는 데서 나옵니다.",
          },
          {
            en: "A combat robot has to survive its own stored energy: weapon power is also a chassis, bearing, fastener, thermal, and maintenance load case.",
            ko: "전투 로봇은 자신이 저장한 에너지를 스스로 견뎌야 합니다. 무기 파워는 곧 차체·베어링·패스너·열·정비 하중 조건이기도 합니다.",
          },
          {
            en: "Under match pressure, accessible batteries, replaceable belts, protected wheels, and diagnosable wiring matter as much as peak weapon performance.",
            ko: "경기 압박 속에서는 접근 가능한 배터리, 교체 가능한 벨트, 보호된 휠, 진단 가능한 배선이 최대 무기 성능만큼 중요합니다.",
          },
        ] as const satisfies readonly Bilingual[],
      },
      "federated-tinyml": {
        title: {
          en: "Federated TinyML for IoT Security",
          ko: "IoT 보안을 위한 연합 TinyML",
        },
        type: { en: "Research", ko: "연구" },
        badge: { en: "Penn State CERS", ko: "Penn State CERS" },
        shortDescription: {
          en: "Federated learning pipeline (FedAvgM, focal loss, cosine LR scheduling) on CIC-IDS2017. Improved attack recall from 46.7% → 93.85% and F1 from 84.1% → 89.32%. Multi-stage compression pipeline achieving 12.28× size reduction and 74.5% latency reduction for ESP32 deployment.",
          ko: "CIC-IDS2017에 FedAvgM·focal loss·코사인 LR 스케줄링을 적용한 연합학습 파이프라인. 공격 재현율 46.7%→93.85%, F1 84.1%→89.32% 개선. ESP32 배포를 위한 다단계 압축으로 모델 크기 12.28배 축소, 추론 지연 74.5% 감소.",
        },
        longDescription: {
          en: "This research project addresses the challenge of deploying reliable intrusion detection systems on severely resource-constrained IoT edge devices. Working under Dr. Suman Saha (Penn State) and Dr. Peilong Li (Elizabethtown College), I designed a complete pipeline from federated training to embedded deployment on ESP32 microcontrollers.\n\nThe federated learning framework uses FedAvgM with focal loss to handle extreme class imbalance in the CIC-IDS2017 network traffic dataset. A key contribution is server-coordinated cosine learning rate scheduling across all clients, which dramatically stabilized training and improved attack detection performance.\n\nThe compression pipeline is multi-stage: BatchNorm folding eliminates inference overhead, structured pruning reduces parameter count while preserving accuracy, knowledge distillation transfers capability to a smaller student model, and INT8 QAT/PTQ quantization brings the model to embedded-ready size. I evaluated 48 compression configurations and analyzed adversarial robustness under PGD attacks across an ε-sweep of 0.01–0.2, identifying QAT trade-offs between moderate and aggressive compression regimes.",
          ko: "본 연구는 자원이 극도로 제한된 IoT 엣지에서도 신뢰할 수 있는 침입 탐지를 배포하는 문제를 다룹니다. Suman Saha 교수(펜실베니아 주립대)와 Peilong Li 교수(엘리자베스타운 칼리지) 지도 아래 연합 학습부터 ESP32 임베디드 배포까지 전체 파이프라인을 설계했습니다.\n\n연합 학습은 CIC-IDS2017의 극심한 클래스 불균형에 대응하기 위해 FedAvgM과 focal loss를 사용합니다. 모든 클라이언트에 서버가 코사인 학습률 스케줄을 조율하는 것이 핵심 기여로, 학습 안정화와 공격 탐지 성능을 크게 향상시켰습니다.\n\n압축 파이프라인은 다단계입니다: BatchNorm folding으로 추론 부담을 줄이고, 구조적 프루닝으로 정확도를 유지하며 파라미터를 줄이며, 지식 증류로 소형 학생 모델에 능력을 이전하고, INT8 QAT/PTQ로 임베디드 크기에 맞춥니다. 48가지 압축 구성을 평가하고 PGD 적대적 공격(ε 0.01–0.2)에서 강건성을 분석해 QAT의 트레이드오프를 정리했습니다.",
        },
        highlights: [
          { en: "Attack recall improved from 46.7% → 93.85% via cosine LR scheduling", ko: "코사인 LR 스케줄링으로 공격 재현율 46.7% → 93.85% 개선" },
          { en: "F1-score improved from 84.1% → 89.32%", ko: "F1 점수 84.1% → 89.32% 개선" },
          { en: "12.28× model size reduction via multi-stage compression pipeline", ko: "다단계 압축으로 모델 크기 12.28배 축소" },
          { en: "74.5% inference latency reduction for ESP32 deployment", ko: "ESP32 배포 시 추론 지연 74.5% 감소" },
          { en: "Evaluated 48 compression configurations across QAT/PTQ regimes", ko: "QAT/PTQ 체제에서 48가지 압축 구성 평가" },
          { en: "Adversarial robustness analysis using PGD attacks (ε-sweep 0.01–0.2)", ko: "PGD 공격(ε 0.01–0.2) 적대적 강건성 분석" },
          { en: "Funded by Penn State CERS; targeting ACM LCTES 2026", ko: "Penn State CERS 지원; ACM LCTES 2026 투고 목표" },
        ] as const satisfies readonly Bilingual[],
        keyTakeaways: [
          {
            en: "Compression and robustness are different axes — a model can be small and still fragile, or robust and still too large for the target device.",
            ko: "압축과 강건성은 서로 다른 축입니다 — 모델이 작아도 취약할 수 있고, 강건해도 타깃 기기에 비해 너무 클 수 있습니다.",
          },
          {
            en: "Federated learning is a coordination problem as much as a training problem; how the server aggregates client updates matters as much as local training.",
            ko: "연합학습은 학습 문제이면서 동시에 조율 문제입니다 — 서버가 클라이언트 업데이트를 집계하는 방식이 로컬 학습만큼 중요합니다.",
          },
          {
            en: "Accuracy alone hides how a model fails — class imbalance and adversarial robustness need to be measured explicitly, not assumed from a single metric.",
            ko: "정확도만으로는 모델의 실패 방식이 드러나지 않습니다 — 클래스 불균형과 적대적 강건성은 단일 지표로 추정하지 않고 명시적으로 측정해야 합니다.",
          },
        ] as const satisfies readonly Bilingual[],
      },
      "asme-website": {
        title: { en: "ASME @ Penn State Website", ko: "ASME @ 펜실베니아 주립대 웹사이트" },
        type: { en: "Web", ko: "웹" },
        badge: { en: "Live", ko: "운영 중" },
        shortDescription: {
          en: "Official ASME Penn State web platform built with React 19, TypeScript, Vite, and Firebase. Features a 5-tier role-based permission system (Member → Admin) controlling content editing, approvals, and project management.",
          ko: "React 19, TypeScript, Vite, Firebase로 구축한 ASME 펜실베니아 공식 웹 플랫폼. 멤버→관리자 5단계 RBAC로 편집·승인·프로젝트 관리를 통제.",
        },
        longDescription: {
          en: "The official web platform for the ASME Penn State chapter, serving the organization's full membership and leadership hierarchy. Built from scratch with React 19, TypeScript, Vite, and Firebase, the site needed to handle a complex organizational structure with clearly defined permission boundaries.\n\nThe centerpiece is a 5-tier role-based access control system — Member, Officer, Director, VP, and Admin — each with distinct capabilities around content creation, approval workflows, and project management. Content changes by lower-tier members are staged for approval by higher-tier officers before going live, mirroring real organizational governance.\n\nFirebase handles both authentication and the real-time database, allowing live updates across users without polling. The frontend is built with component-driven architecture and TypeScript throughout for type safety across the permission system.",
          ko: "ASME 펜실베니아 챕터의 공식 웹 플랫폼으로, 전 구성원과 리더십 계층을 지원합니다. React 19, TypeScript, Vite, Firebase로 처음부터 구축했으며, 명확한 권한 경계가 있는 복잡한 조직 구조를 다룹니다.\n\n핵심은 5단계 RBAC(멤버·오피서·디렉터·VP·관리자)로, 콘텐츠 생성·승인 워크플로·프로젝트 관리 권한이 단계별로 다릅니다. 하위 멤버의 변경은 상위 오피서 승인 후 공개되어 실제 조직 거버넌스를 반영합니다.\n\nFirebase로 인증과 실시간 DB를 처리해 폴링 없이 여러 사용자에게 즉시 반영됩니다. 프론트엔드는 컴포넌트 기반 아키텍처와 TypeScript로 권한 시스템 전반의 타입 안전성을 확보했습니다.",
        },
        highlights: [
          { en: "5-tier RBAC system: Member → Officer → Director → VP → Admin", ko: "5단계 RBAC: 멤버 → 오피서 → 디렉터 → VP → 관리자" },
          { en: "Content approval workflow with staged publishing", ko: "단계적 게시가 있는 콘텐츠 승인 워크플로" },
          { en: "Real-time updates via Firebase Firestore", ko: "Firebase Firestore 실시간 업데이트" },
          { en: "Built with React 19 and TypeScript for full type safety", ko: "React 19 + TypeScript로 전체 타입 안전성" },
          { en: "Deployed on Vercel with continuous deployment", ko: "Vercel 배포 및 지속적 배포" },
        ] as const satisfies readonly Bilingual[],
        keyTakeaways: [
          {
            en: "Permission systems need to be designed in from the start, not bolted on — retrofitting RBAC onto existing features is far harder than starting with it.",
            ko: "권한 시스템은 처음부터 설계에 포함되어야지 나중에 덧붙이면 안 됩니다 — 기존 기능에 RBAC를 나중에 끼워 넣는 건 처음부터 설계하는 것보다 훨씬 어렵습니다.",
          },
          {
            en: "Real-time sync simplifies the UI but pushes complexity into handling partial and optimistic updates correctly.",
            ko: "실시간 동기화는 UI를 단순하게 만들지만, 그 복잡함은 부분 업데이트와 낙관적 업데이트를 올바르게 처리하는 쪽으로 옮겨갈 뿐입니다.",
          },
          {
            en: "Building for a real organization's leadership hierarchy taught me to design around how people actually make decisions, not an idealized workflow.",
            ko: "실제 조직의 리더십 계층을 위해 만들면서, 이상적인 워크플로가 아니라 사람들이 실제로 의사결정하는 방식을 중심으로 설계해야 한다는 걸 배웠습니다.",
          },
        ] as const satisfies readonly Bilingual[],
      },
      hangukgwan: {
        title: { en: "Hangukgwan — Family Restaurant App", ko: "한국관 — 가족 레스토랑 앱" },
        type: { en: "Full-Stack", ko: "풀스택" },
        badge: { en: "In Progress", ko: "진행 중" },
        shortDescription: {
          en: "Full-stack restaurant web app with 4-language i18n support (Korean, English, Simplified/Traditional Chinese). Built with React + TypeScript, Node.js/Express, and MongoDB Atlas. Integrated Google Maps API and JWT authentication.",
          ko: "한·영·간체·번체 4개 언어 i18n을 지원하는 풀스택 레스토랑 웹앱. React+TypeScript, Node.js/Express, MongoDB Atlas. Google Maps API와 JWT 인증 연동.",
        },
        longDescription: {
          en: "A full-stack web application for the family restaurant business, designed to serve an international clientele across four languages: Korean, English, Simplified Chinese, and Traditional Chinese. Every piece of user-facing content — menus, announcements, descriptions — is fully translated and rendered based on the user's selected language.\n\nThe backend is a Node.js/Express REST API backed by MongoDB Atlas, handling menu data, user authentication, and content management. JWT-based authentication secures the admin dashboard where restaurant staff can update content without needing developer involvement.\n\nGoogle Maps API integration embeds the restaurant location with directions and hours directly in the page. The frontend is built with React and TypeScript, using react-i18next for the multilingual layer with locale-aware routing.",
          ko: "가족 사업 레스토랑을 위한 풀스택 웹앱으로, 한·영·간체·번체 네 언어 고객을 대상으로 합니다. 메뉴·공지·설명 등 사용자 대면 콘텐츠는 선택 언어에 맞게 완전히 번역·렌더링됩니다.\n\n백엔드는 MongoDB Atlas 기반 Node.js/Express REST API로 메뉴·인증·콘텐츠 관리를 처리합니다. JWT로 관리자 대시보드를 보호해 직원이 개발자 없이 콘텐츠를 갱신할 수 있습니다.\n\nGoogle Maps API로 위치·길찾기·영업시간을 페이지에 삽입했고, 프론트는 React·TypeScript와 react-i18next로 로케일 인식 라우팅을 구현했습니다.",
        },
        highlights: [
          { en: "4-language i18n: Korean, English, Simplified & Traditional Chinese", ko: "4개 언어 i18n: 한·영·간체·번체" },
          { en: "JWT authentication for secure admin content management", ko: "JWT로 안전한 관리자 콘텐츠 관리" },
          { en: "Google Maps API integration with directions and hours", ko: "Google Maps API로 길찾기·영업시간" },
          { en: "REST API with Node.js/Express and MongoDB Atlas", ko: "Node.js/Express + MongoDB Atlas REST API" },
          { en: "Locale-aware routing with react-i18next", ko: "react-i18next 로케일 인식 라우팅" },
        ] as const satisfies readonly Bilingual[],
        keyTakeaways: [
          {
            en: "Internationalization is more than translation — layout, date/number formats, and even tone need to adapt per locale.",
            ko: "다국어 지원은 번역 이상입니다 — 레이아웃, 날짜·숫자 형식, 심지어 어조까지 로케일에 맞게 조정해야 합니다.",
          },
          {
            en: "Building admin tools for non-technical users forces simpler, more constrained interfaces than a typical developer-facing dashboard.",
            ko: "비개발자를 위한 관리자 도구를 만들다 보면 일반적인 개발자용 대시보드보다 더 단순하고 제약된 인터페이스를 설계하게 됩니다.",
          },
          {
            en: "Small full-stack projects are a good forcing function for end-to-end ownership — from auth to deployment, there's nowhere to hide from a rough edge.",
            ko: "작은 풀스택 프로젝트는 엔드투엔드 오너십을 기르는 좋은 훈련입니다 — 인증부터 배포까지, 허술한 부분을 숨길 곳이 없습니다.",
          },
        ] as const satisfies readonly Bilingual[],
      },
      signum: {
        title: { en: "SIGNUM — AI Hospital Platform", ko: "SIGNUM — AI 병원 품질 플랫폼" },
        type: { en: "AI / Platform", ko: "AI / 플랫폼" },
        badge: { en: "$3,750 Funded", ko: "$3,750 지원" },
        shortDescription: {
          en: "PIT-UN-funded AI platform for hospital quality analysis. Built multi-source ETL (CMS, NPPES, Google Places) into DuckDB; Markov Transition Model for star-rating prediction; RAG pipelines with FAISS + AWS Bedrock reducing research time from 50+ hrs/week to near-instant.",
          ko: "PIT-UN 지원 AI 병원 품질 분석 플랫폼. CMS·NPPES·Google Places 다중 ETL을 DuckDB에 구축, 별점 예측용 마르코프 전이 모델, FAISS+Bedrock RAG로 주당 50시간 이상 연구를 거의 즉시로 단축.",
        },
        longDescription: {
          en: "SIGNUM is an AI-powered platform for hospital quality analysis and caregiver decision support, co-founded under the Nittany AI Alliance with $3,750 in PIT-UN funding. The platform aggregates data from multiple federal and commercial sources to give caregivers a unified view of hospital quality that would otherwise require days of manual research.\n\nThe data pipeline ingests from CMS (Centers for Medicare & Medicaid Services), NPPES (National Plan and Provider Enumeration System), and Google Places, normalizing and warehousing everything into a DuckDB analytical database optimized for fast ad-hoc queries.\n\nOn top of the warehouse, a Markov Transition Model predicts hospital star-rating trajectories with confidence intervals — giving caregivers not just current ratings but trend-aware forecasts. The conversational interface is powered by domain-specific RAG pipelines using FAISS vector search and AWS Bedrock, grounding LLM responses in verified hospital data and reducing caregiver research time from 50+ hours per week to near-instant answers.",
          ko: "SIGNUM은 Nittany AI Alliance 산하 PIT-UN 지원금 3,750달러로 공동 창업한 병원 품질 분석·간병 의사결정 지원 AI 플랫폼입니다. 연방·상업 다중 소스를 집계해 수작업 며칠이 걸릴 병원 품질 통합 뷰를 제공합니다.\n\n데이터 파이프라인은 CMS, NPPES, Google Places에서 수집·정규화해 DuckDB 분석 DB에 적재합니다.\n\n마르코프 전이 모델로 병원 별점 궤적과 신뢰구간을 예측하고, FAISS·AWS Bedrock 기반 도메인 특화 RAG로 검증된 데이터에 근거한 대화형 인터페이스를 제공해 주당 50시간 이상의 연구를 거의 즉시 응답으로 줄였습니다.",
        },
        highlights: [
          { en: "Awarded $3,750 PIT-UN funding via the Nittany AI Challenge", ko: "Nittany AI Challenge로 PIT-UN 3,750달러 지원" },
          { en: "Multi-source ETL from CMS, NPPES, and Google Places into DuckDB", ko: "CMS·NPPES·Google Places 다중 ETL → DuckDB" },
          { en: "Markov Transition Model for hospital star-rating prediction with confidence intervals", ko: "신뢰구간이 있는 병원 별점 예측 마르코프 전이 모델" },
          { en: "RAG pipelines with FAISS + AWS Bedrock for grounded LLM responses", ko: "FAISS + AWS Bedrock RAG로 근거 있는 LLM 응답" },
          { en: "Reduced caregiver research time from 50+ hours/week to near-instant", ko: "간병 연구 시간 주당 50시간+ → 거의 즉시" },
        ] as const satisfies readonly Bilingual[],
        keyTakeaways: [
          {
            en: "Domain-grounded RAG is only as trustworthy as the data pipeline underneath it — bad data in the warehouse means confident-sounding but wrong answers.",
            ko: "도메인 특화 RAG는 그 아래 데이터 파이프라인만큼만 신뢰할 수 있습니다 — 웨어하우스의 데이터가 나쁘면 자신감 있게 들리지만 틀린 답이 나옵니다.",
          },
          {
            en: "Forecasting and retrieval solve different problems; combining the Markov model with RAG gave caregivers both a trend and an explanation, which neither alone provided.",
            ko: "예측과 검색은 서로 다른 문제를 해결합니다 — 마르코프 모델과 RAG를 결합하니 둘 중 하나만으로는 줄 수 없었던 추세와 설명을 함께 제공할 수 있었습니다.",
          },
          {
            en: "Co-founding a funded project taught me the hardest part is often scoping something a small team can actually ship and demo convincingly, not the ML itself.",
            ko: "지원금을 받는 프로젝트를 공동 창업하며, 가장 어려운 부분은 ML 자체가 아니라 소규모 팀이 실제로 출시하고 설득력 있게 시연할 수 있는 범위를 정하는 것임을 배웠습니다.",
          },
        ] as const satisfies readonly Bilingual[],
      },
    },
  },

  /* ---------- Leadership ---------- */
  leadership: {
    sectionLabel: { en: "05. Leadership", ko: "05. 리더십" },
    heading: { en: "Campus Roles & Impact", ko: "교내 리더십 역할" },
    intro: {
      en: "Elected and appointed to leadership positions across Penn State's most prominent engineering and CS organizations — each role carrying real responsibility and impact.",
      ko: "펜실베니아 주립대 주요 공대·CS 학생 조직에서 선출·임명된 리더십 역할을 맡았으며, 각 역할은 실질적인 책임과 영향력을 수반합니다.",
    },
    roles: [
      {
        title: { en: "Technology Captain", ko: "Technology Captain" },
        year: "2027",
        org: { en: "THON — Penn State", ko: "THON — 펜실베니아 주립대" },
        period: { en: "Apr 2026 – Present", ko: "2026년 4월 – 현재" },
        description: {
          en: "Leading all CS operations for THON year-round — maintaining the THON website, building new features and content, and overseeing every technical system the organization relies on. One of the most competitive elected positions at Penn State, with responsibilities spanning the full year, not just the 46-hour dance marathon weekend.",
          ko: "THON의 연중 CS 운영을 총괄 — THON 웹사이트 유지보수, 신규 기능·콘텐츠 구축, 조직이 의존하는 모든 기술 시스템 감독. 46시간 댄스 마라톤 주말뿐 아니라 연중 책임이 따르는, 펜실베니아에서 가장 경쟁이 치열한 선출 직책 중 하나입니다.",
        },
        stat: "$10M+",
        statLabel: { en: "raised annually", ko: "연간 모금" },
      },
      {
        title: { en: "Project Manager", ko: "프로젝트 매니저" },
        year: "",
        org: { en: "Penn State Advanced Vehicle Team (AVT)", ko: "펜실베니아 주립대 AVT" },
        period: { en: "Fall 2026 – Present", ko: "2026년 가을 – 현재" },
        description: {
          en: "Managing a multidisciplinary engineering team building high-performance electric and autonomous vehicles. Coordinating project timelines, cross-functional collaboration, and technical deliverables across subteams.",
          ko: "고성능 전기·자율주행 차량을 만드는 다학제 엔지니어링 팀을 관리. 일정, 기능 간 협업, 하위팀 기술 산출물을 조율합니다.",
        },
        stat: "AVT",
        statLabel: { en: "Flagship Team", ko: "플래그십 팀" },
      },
      {
        title: { en: "Web & Design Director", ko: "웹 & 디자인 디렉터" },
        year: "",
        org: { en: "Association for Computing Machinery (ACM)", ko: "ACM (컴퓨팅기계학회)" },
        period: { en: "Apr 2026 – Present", ko: "2026년 4월 – 현재" },
        description: {
          en: "Directing web presence and design systems for Penn State's largest CS student organization. Responsible for building and maintaining digital platforms serving hundreds of student members.",
          ko: "펜실베니아 최대 CS 학생 조직의 웹과 디자인 시스템을 총괄. 수백 명 회원을 위한 디지털 플랫폼 구축·유지를 담당합니다.",
        },
        stat: "ACM",
        statLabel: { en: "Penn State Chapter", ko: "펜실베니아 챕터" },
      },
      {
        title: { en: "Lead Teaching Assistant", ko: "수석 조교" },
        year: "",
        org: { en: "Math 230 — Multivariable Calculus", ko: "Math 230 — 다변수 미적분" },
        period: { en: "Aug 2025 – Present", ko: "2025년 8월 – 현재" },
        description: {
          en: "Leading recitation sections, holding office hours, and coordinating course activities for one of Penn State's core mathematics courses. Responsible for supporting students through one of the most challenging required courses in the engineering curriculum.",
          ko: "핵심 수학 과목 중 하나인 Math 230에서 리세이션, 오피스 아워, 수업 활동을 주도. 공학 필수 과목 중 가장 도전적인 과목을 학생들이 통과하도록 지원합니다.",
        },
        stat: "Math 230",
        statLabel: { en: "Multivariable Calc", ko: "다변수 미적분" },
      },
    ],
  },

  /* ---------- Awards ---------- */
  awards: {
    sectionLabel: { en: "06. Awards & Honors", ko: "06. 수상 & 영예" },
    heading: { en: "Recognition", ko: "수상 내역" },
    items: [
      {
        place: { en: "1st", ko: "1위" },
        title: { en: "Project Competition", ko: "프로젝트 경진대회" },
        org: { en: "ThinkNeuro LLC", ko: "ThinkNeuro LLC" },
        date: { en: "April 2026", ko: "2026년 4월" },
        icon: "🥇",
      },
      {
        place: { en: "1st", ko: "1위" },
        title: { en: "Battle Bots Competition", ko: "배틀봇 대회" },
        org: { en: "IEEE Student Chapter", ko: "IEEE 학생지부" },
        date: { en: "April 2026", ko: "2026년 4월" },
        icon: "🥇",
      },
      {
        place: { en: "Funded", ko: "지원" },
        title: { en: "PIT-UN Funding Award — $3,750", ko: "PIT-UN 지원금 — $3,750" },
        org: { en: "Nittany AI Challenge", ko: "Nittany AI Challenge" },
        date: { en: "April 2025", ko: "2025년 4월" },
        icon: "💡",
      },
      {
        place: { en: "3rd", ko: "3위" },
        title: { en: "ACM Pathfinder Robotics Challenge", ko: "ACM Pathfinder 로봇 챌린지" },
        org: { en: "Association for Computing Machinery", ko: "ACM" },
        date: { en: "April 2025", ko: "2025년 4월" },
        icon: "🥉",
      },
      {
        place: { en: "Award", ko: "표창" },
        title: { en: "Commendation Award", ko: "표창장" },
        org: { en: "Republic of Korea Air Force", ko: "대한민국 공군" },
        date: { en: "August 2023", ko: "2023년 8월" },
        icon: "🎖️",
      },
    ],
  },

  /* ---------- Site links ---------- */
  siteLinks: {
    sectionLabel: { en: "07. Live Sites", ko: "07. 라이브 사이트" },
    heading: { en: "Completed Work", ko: "완료·운영 작업" },
    statusLive: { en: "Live", ko: "운영 중" },
    statusProgress: { en: "In Progress", ko: "진행 중" },
    asme: {
      title: { en: "ASME @ Penn State", ko: "ASME @ 펜실베니아 주립대" },
      description: {
        en: "Official website for the ASME Penn State chapter — featuring a 5-tier role-based permission system for organization content management.",
        ko: "ASME 펜실베니아 챕터 공식 웹사이트 — 조직 콘텐츠 관리를 위한 5단계 역할 기반 권한 시스템.",
      },
    },
    hangukgwan: {
      title: { en: "Hangukgwan Restaurant", ko: "한국관 레스토랑" },
      description: {
        en: "Multilingual full-stack restaurant web app for the family business, supporting Korean, English, Simplified & Traditional Chinese.",
        ko: "가족 사업용 다국어 풀스택 레스토랑 웹앱 — 한국어, 영어, 간체·번체 중국어 지원.",
      },
    },
  },

  /* ---------- Contact ---------- */
  contact: {
    sectionLabel: { en: "08. Contact", ko: "08. 연락" },
    heading: { en: "Get In Touch", ko: "연락 주세요" },
    blurb: {
      en: "Whether you have a research opportunity, a project idea, or just want to connect — my inbox is always open.",
      ko: "연구 협업, 프로젝트 제안, 혹은 가벼운 인사까지 — 편지함은 항상 열려 있습니다.",
    },
    sayHello: { en: "Say Hello", ko: "메일 보내기" },
    footer: { en: "Designed & Built by Younsoo Park", ko: "Designed & Built by Younsoo Park" },
  },

  /* ---------- Experience detail page ---------- */
  experienceDetail: {
    back: { en: "cd ../experience", ko: "cd ../experience" },
    eyebrow: { en: "Experience record", ko: "경력 기록" },
    period: { en: "Period", ko: "기간" },
    location: { en: "Location", ko: "근무지" },
    scope: { en: "Role scope", ko: "역할 범위" },
    workstreams: { en: "Project workstreams", ko: "프로젝트 작업군" },
    roleScope: { en: "Role scope", ko: "역할 범위" },
    roleHighlights: { en: "Selected impact", ko: "핵심 임팩트" },
    jumpImpact: { en: "Impact", ko: "임팩트" },
    jumpProjects: { en: "Projects", ko: "프로젝트" },
    jumpStack: { en: "Stack", ko: "기술" },
    slideHint: { en: "Swipe or use the arrows", ko: "밀거나 화살표로 넘기기" },
    previousSlide: { en: "Previous card", ko: "이전 카드" },
    nextSlide: { en: "Next card", ko: "다음 카드" },
    goToSlide: { en: "Go to card", ko: "카드로 이동" },
    projectsEyebrow: { en: "Work produced here", ko: "이 경력에서 만든 작업" },
    projectsTitle: { en: "Projects from this role", ko: "이 역할에서 진행한 프로젝트" },
    projectsDescription: {
      en: "The role is the context; these workstreams are the concrete systems and product problems delivered within it.",
      ko: "경력은 작업의 맥락이고, 아래 작업군은 그 안에서 실제로 구현한 시스템과 해결한 제품 문제입니다.",
    },
    relatedCaseStudy: { en: "Related case study", ko: "연결된 케이스 스터디" },
    openCaseStudy: { en: "Open full case study", ko: "전체 케이스 스터디 보기" },
    workstream: { en: "Project", ko: "프로젝트" },
    deliverables: { en: "deliverables", ko: "개 핵심 작업" },
    noProjectsTitle: { en: "No public project attached", ko: "공개 프로젝트 없음" },
    noProjectsBody: {
      en: "This experience is documented through responsibilities and outcomes rather than a separate public case study.",
      ko: "이 경력은 별도의 공개 케이스 스터디 대신 역할과 성과 중심으로 정리했습니다.",
    },
  },

  /* ---------- Project detail page ---------- */
  projectDetail: {
    back: { en: "cd ../projects", ko: "cd ../projects" },
    liveSite: { en: "Live Site", ko: "라이브 사이트" },
    github: { en: "GitHub", ko: "GitHub" },
    appStore: { en: "App Store", ko: "App Store" },
    googlePlay: { en: "Google Play", ko: "Google Play" },
    tryApp: { en: "Try the app", ko: "앱 직접 사용해 보기" },
    overview: { en: "// Overview", ko: "// 개요" },
    highlights: { en: "// Key Highlights", ko: "// 주요 하이라이트" },
    impact: { en: "// Impact", ko: "// 임팩트" },
    keyTakeaways: { en: "// Key Takeaways", ko: "// 핵심 배운 점" },
    techStack: { en: "Tech Stack", ko: "기술 스택" },
    links: { en: "Links", ko: "링크" },
    sourceCode: { en: "Source Code", ko: "소스 코드" },
    addImagesLine: { en: "Add images to", ko: "이미지를 다음 경로에 추가하세요" },
    screenshotAlt: { en: "screenshot", ko: "스크린샷" },
  },

  /* ---------- PDF modal ---------- */
  pdfModal: {
    savePdf: { en: "Save PDF", ko: "PDF 저장" },
    close: { en: "Close preview", ko: "미리보기 닫기" },
  },

  /* ---------- THON logos (aria) ---------- */
  causeLinks: {
    thon: {
      label: {
        en: "THON — Penn State Dance Marathon (opens in new tab)",
        ko: "THON — 펜실베니아 주립대 댄스 마라톤 (새 탭)",
      },
      alt: { en: "THON logo", ko: "THON 로고" },
    },
    ftk: {
      label: {
        en: "THON — For The Kids, donate (opens in new tab)",
        ko: "THON — For The Kids 기부 (새 탭)",
      },
      alt: { en: "For The Kids yellow ribbon", ko: "For The Kids 노란 리본" },
    },
  },

  /* ---------- Terminal hero ---------- */
  terminal: {
    windowTitle: { en: "zsh — portfolio", ko: "zsh — portfolio" },
    lines: [
      { prompt: "~/portfolio", cmd: "whoami", delay: 400 },
      { prompt: null, output: { en: "Younsoo Park", ko: "Younsoo Park" }, delay: 700 },
      { prompt: "~/portfolio", cmd: "cat role.txt", delay: 1300 },
      {
        prompt: null,
        output: { en: "Software Engineer & Researcher", ko: "소프트웨어 엔지니어 & 연구원" },
        delay: 1600,
      },
      { prompt: "~/portfolio", cmd: "cat status.txt", delay: 2200 },
      {
        prompt: null,
        output: { en: "Penn State CS '27  |  Dean's List", ko: "Penn State CS '27  |  Dean's List" },
        delay: 2500,
      },
      { prompt: "~/portfolio", cmd: "cat current.txt", delay: 3100 },
      {
        prompt: null,
        output: {
          en: "Associate Problem Solver @ Levit (Jun–Aug 2026)",
          ko: "Associate Problem Solver @ Levit (2026년 6월–8월)",
        },
        delay: 3400,
      },
      { prompt: "~/portfolio", cmd: "ls research/", delay: 4000 },
      {
        prompt: null,
        output: {
          en: "federated-tinyml/   signum/   iot-security/",
          ko: "federated-tinyml/   signum/   iot-security/",
        },
        delay: 4300,
      },
      { prompt: "~/portfolio", cmd: "_", delay: 4900, cursor: true },
    ] as const,
  },
} as const;

export type Messages = typeof messages;
