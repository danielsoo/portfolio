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
    roleLine: { en: "Software Engineer & Researcher", ko: "소프트웨어 엔지니어 & 연구원" },
    blurb: {
      en: "Penn State CS student building at the intersection of AI systems and full-stack engineering.",
      ko: "펜실베니아 주립대 컴퓨터과학 전공으로, AI 시스템과 풀스택 엔지니어링이 만나는 지점에서 만듭니다.",
    },
    viewProjects: { en: "View Projects", ko: "프로젝트 보기" },
    contactMe: { en: "Contact Me", ko: "연락하기" },
  },

  /* ---------- About ---------- */
  about: {
    sectionLabel: { en: "01. About Me", ko: "01. 소개" },
    title: { en: "Who I Am", ko: "저는 누구인가요" },
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
      research: { en: "research", ko: "research" },
      openTo: { en: "openTo", ko: "openTo" },
    },
    codeStrings: {
      nameVal: { en: "Younsoo Park", ko: "Younsoo Park" },
      schoolVal: { en: "Penn State '27", ko: "Penn State '27" },
      majorVal: { en: "CS + Mathematics", ko: "CS + Mathematics" },
      statusVal: { en: "Dean's List", ko: "Dean's List" },
      locationVal: { en: "University Park, PA", ko: "University Park, PA" },
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
    entries: [
      {
        role: { en: "Co-founder", ko: "공동 창업" },
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
    sectionLabel: { en: "03. Skills", ko: "03. 기술" },
    heading: { en: "Technologies I Work With", ko: "사용하는 기술" },
    groups: [
      {
        category: { en: "Languages", ko: "언어" },
        items: ["Python", "C / C++", "Java", "JavaScript", "TypeScript", "SQL"],
      },
      {
        category: { en: "Frameworks & Tools", ko: "프레임워크 & 도구" },
        items: ["React", "Node.js", "Express", "Flask", "MongoDB", "Firebase", "AWS Bedrock", "DuckDB", "Git"],
      },
      {
        category: { en: "AI / ML", ko: "AI / ML" },
        items: ["TensorFlow", "PyTorch", "FAISS", "SHAP", "spaCy", "Scikit-learn", "Flower (FL)"],
      },
    ],
  },

  /* ---------- Projects (list + shared) ---------- */
  projects: {
    sectionLabel: { en: "04. Projects", ko: "04. 프로젝트" },
    heading: { en: "Things I've Built", ko: "나의 프로젝트" },
    viewDetails: { en: "View details", ko: "자세히 보기" },
    githubTitle: { en: "GitHub", ko: "GitHub" },
    liveSiteTitle: { en: "Live site", ko: "라이브 사이트" },
    bySlug: {
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

  /* ---------- Project detail page ---------- */
  projectDetail: {
    back: { en: "cd ../projects", ko: "cd ../projects" },
    liveSite: { en: "Live Site", ko: "라이브 사이트" },
    github: { en: "GitHub", ko: "GitHub" },
    overview: { en: "// Overview", ko: "// 개요" },
    highlights: { en: "// Key Highlights", ko: "// 주요 하이라이트" },
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
      { prompt: "~/portfolio", cmd: "ls research/", delay: 3100 },
      {
        prompt: null,
        output: {
          en: "federated-tinyml/   signum/   iot-security/",
          ko: "federated-tinyml/   signum/   iot-security/",
        },
        delay: 3400,
      },
      { prompt: "~/portfolio", cmd: "_", delay: 4000, cursor: true },
    ] as const,
  },
} as const;

export type Messages = typeof messages;
