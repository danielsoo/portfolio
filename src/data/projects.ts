export type Project = {
  slug: string;
  title: string;
  type: string;
  badge: string;
  badgeColor: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  tags: string[];
  github: string;
  live: string | null;
  images: string[]; // paths under /public/projects/<slug>/
};

export const projects: Project[] = [
  {
    slug: "shopport-routing-quality",
    title: "Shopport — Recommendation Routing & Quality Analysis",
    type: "AI / Full-Stack",
    badge: "Levit — Internal",
    badgeColor: "bg-cyan-500/10 text-cyan-400",
    shortDescription:
      "Contributed to Shopport, Levit's AI shopping assistant, building LLM-based product/domain routing classification and an internal recommendation-quality evaluation platform with turn-level analysis, failure-type classification, and worker/cron-driven batch pipelines.",
    longDescription:
      "Shopport is Levit's production AI shopping assistant, embedded inside a broader unified-chat product. I contributed to the recommendation routing and quality-evaluation layers rather than building the app standalone.\n\nOn the routing side, I worked on LLM-based classification of user queries into product domains, driving which recommendation path a query is routed to. On the evaluation side, I designed and helped build an internal platform that scores each conversation turn for routing correctness and response quality, and classifies failures (unsupported queries, misrouting, generic responses, unanalyzable cases) — replacing manual spot-checks with a repeatable, versioned pipeline.\n\nResults are persisted in MongoDB with analysis versioning, and a Kubernetes CronJob-based worker pipeline handles scheduled evaluation runs, catch-up backfills, and retries. An operator-facing admin surfaces failure trends and coverage gaps, backed by Datadog for observability into pipeline failures.",
    highlights: [
      "LLM-based product-domain and routing classification for user queries",
      "Turn-level recommendation quality analysis with failure-type taxonomy",
      "Versioned analysis results stored in MongoDB",
      "Kubernetes CronJob worker pipeline with backfill and retry handling",
      "Admin dashboards for failure-trend visualization built with Recharts",
    ],
    tags: ["TypeScript", "React", "Next.js", "NestJS", "MongoDB", "OpenAI API", "Recharts", "Kubernetes CronJob", "Datadog", "Jest", "Vitest"],
    github: "",
    live: null,
    images: [],
  },
  {
    slug: "shopport-ab-testing",
    title: "Shopport — Recommendation A/B Testing Platform",
    type: "Experimentation",
    badge: "Levit — Internal",
    badgeColor: "bg-purple-500/10 text-purple-400",
    shortDescription:
      "Contributed to an experimentation framework inside Shopport for testing single-product auto-routing, with server-side sticky user bucketing, treatment/control assignment, and completion tracking based on actual destination arrival.",
    longDescription:
      "To validate whether auto-routing a single best-match product improved outcomes over showing a full recommendation list, I contributed to an A/B testing platform built into Shopport's recommendation flow.\n\nAssignment happens server-side with persistent per-user sticky bucketing, so a given user consistently sees the same treatment or control experience across sessions. Forced assignment is supported for internal test accounts to validate both arms without waiting on random bucketing. Rather than relying on proxy metrics like clicks, recommendation completion is measured by actual arrival at the destination product page, giving a more honest read on whether routing decisions were correct.\n\nAn admin panel lets operators configure traffic allocation, force-assign test accounts, and reset or terminate experiments without a deploy — which also surfaced and let us fix UX issues like infinite loading states and navigation flicker that only showed up under real experiment traffic.",
    highlights: [
      "Server-side experiment assignment with persistent per-user sticky bucketing",
      "Forced assignment support for internal test accounts",
      "Recommendation completion measured by actual destination arrival, not clicks",
      "Admin controls for traffic allocation, experiment reset, and termination",
      "Fixed infinite-loading and navigation-flicker issues surfaced under experiment traffic",
    ],
    tags: ["React", "NestJS", "MongoDB", "TanStack Query", "A/B Testing", "Funnel Analytics"],
    github: "",
    live: null,
    images: [],
  },
  {
    slug: "shopport-mem0-personalization",
    title: "Shopport — Mem0 Cross-Category Personalization",
    type: "AI / Personalization",
    badge: "In Progress",
    badgeColor: "bg-rose-500/10 text-rose-400",
    shortDescription:
      "In-progress work on a memory-first personalization layer for Shopport using Mem0 OSS — extracting long-term user preferences from conversations and applying them across product categories, with PII-safe memory handling and A/B-tested rollout.",
    longDescription:
      "Rather than treating each shopping conversation in isolation, this project explores giving Shopport long-term memory of a user's preferences so recommendations improve across categories over time, not just within a single session.\n\nUsing Mem0 OSS with OpenRouter/GPT-5-mini for extraction and text-embedding-3-small for semantic retrieval, the pipeline pulls out explicit, long-term-relevant facts and preferences from conversations, hashes user identifiers, and strips PII before anything is persisted. When a user starts a new shopping conversation in a different category, relevant memories are retrieved and passed to the existing recommendation engine — memory informs candidate selection, but the recommendation engine still does the final product validation, keeping the two systems cleanly separated.\n\nThis is currently being validated with a treatment/control A/B test comparing standard recommendations against memory-augmented ones, tracking impression, click, and completion rates, alongside home-page recommendation cards and admin experiment controls.",
    highlights: [
      "Long-term preference and fact extraction from conversations via Mem0 OSS",
      "PII redaction and user-ID hashing before memory persistence",
      "Cross-category recommendation using retrieved memories plus the existing recommendation engine for validation",
      "Clean separation between the LLM/memory layer and the recommendation engine",
      "Treatment/control A/B test in progress, tracking impression/click/completion rates",
    ],
    tags: ["TypeScript", "NestJS", "React", "Mem0 OSS", "OpenRouter", "GPT-5-mini", "text-embedding-3-small", "MongoDB", "Semantic Retrieval"],
    github: "",
    live: null,
    images: [],
  },
  {
    slug: "federated-tinyml",
    title: "Federated TinyML for IoT Security",
    type: "Research",
    badge: "Penn State CERS",
    badgeColor: "bg-indigo-500/10 text-indigo-400",
    shortDescription:
      "Federated learning pipeline (FedAvgM, focal loss, cosine LR scheduling) on CIC-IDS2017. Improved attack recall from 46.7% → 93.85% and F1 from 84.1% → 89.32%. Multi-stage compression pipeline achieving 12.28× size reduction and 74.5% latency reduction for ESP32 deployment.",
    longDescription:
      "This research project addresses the challenge of deploying reliable intrusion detection systems on severely resource-constrained IoT edge devices. Working under Dr. Suman Saha (Penn State) and Dr. Peilong Li (Elizabethtown College), I designed a complete pipeline from federated training to embedded deployment on ESP32 microcontrollers.\n\nThe federated learning framework uses FedAvgM with focal loss to handle extreme class imbalance in the CIC-IDS2017 network traffic dataset. A key contribution is server-coordinated cosine learning rate scheduling across all clients, which dramatically stabilized training and improved attack detection performance.\n\nThe compression pipeline is multi-stage: BatchNorm folding eliminates inference overhead, structured pruning reduces parameter count while preserving accuracy, knowledge distillation transfers capability to a smaller student model, and INT8 QAT/PTQ quantization brings the model to embedded-ready size. I evaluated 48 compression configurations and analyzed adversarial robustness under PGD attacks across an ε-sweep of 0.01–0.2, identifying QAT trade-offs between moderate and aggressive compression regimes.",
    highlights: [
      "Attack recall improved from 46.7% → 93.85% via cosine LR scheduling",
      "F1-score improved from 84.1% → 89.32%",
      "12.28× model size reduction via multi-stage compression pipeline",
      "74.5% inference latency reduction for ESP32 deployment",
      "Evaluated 48 compression configurations across QAT/PTQ regimes",
      "Adversarial robustness analysis using PGD attacks (ε-sweep 0.01–0.2)",
      "Funded by Penn State CERS; targeting ACM LCTES 2026",
    ],
    tags: ["PyTorch", "Federated Learning", "TinyML", "Python", "ESP32", "CIC-IDS2017", "FAISS"],
    github: "https://github.com/danielsoo/TinyML",
    live: null,
    images: [],
  },
  {
    slug: "asme-website",
    title: "ASME @ Penn State Website",
    type: "Web",
    badge: "Live",
    badgeColor: "bg-green-500/10 text-green-400",
    shortDescription:
      "Official ASME Penn State web platform built with React 19, TypeScript, Vite, and Firebase. Features a 5-tier role-based permission system (Member → Admin) controlling content editing, approvals, and project management.",
    longDescription:
      "The official web platform for the ASME Penn State chapter, serving the organization's full membership and leadership hierarchy. Built from scratch with React 19, TypeScript, Vite, and Firebase, the site needed to handle a complex organizational structure with clearly defined permission boundaries.\n\nThe centerpiece is a 5-tier role-based access control system — Member, Officer, Director, VP, and Admin — each with distinct capabilities around content creation, approval workflows, and project management. Content changes by lower-tier members are staged for approval by higher-tier officers before going live, mirroring real organizational governance.\n\nFirebase handles both authentication and the real-time database, allowing live updates across users without polling. The frontend is built with component-driven architecture and TypeScript throughout for type safety across the permission system.",
    highlights: [
      "5-tier RBAC system: Member → Officer → Director → VP → Admin",
      "Content approval workflow with staged publishing",
      "Real-time updates via Firebase Firestore",
      "Built with React 19 and TypeScript for full type safety",
      "Deployed on Vercel with continuous deployment",
    ],
    tags: ["React 19", "TypeScript", "Vite", "Firebase", "Vercel", "RBAC"],
    github: "https://github.com/danielsoo/ASME-Website",
    live: "https://asme-website-bice.vercel.app",
    images: [],
  },
  {
    slug: "hangukgwan",
    title: "Hangukgwan — Family Restaurant App",
    type: "Full-Stack",
    badge: "In Progress",
    badgeColor: "bg-blue-500/10 text-blue-400",
    shortDescription:
      "Full-stack restaurant web app with 4-language i18n support (Korean, English, Simplified/Traditional Chinese). Built with React + TypeScript, Node.js/Express, and MongoDB Atlas. Integrated Google Maps API and JWT authentication.",
    longDescription:
      "A full-stack web application for the family restaurant business, designed to serve an international clientele across four languages: Korean, English, Simplified Chinese, and Traditional Chinese. Every piece of user-facing content — menus, announcements, descriptions — is fully translated and rendered based on the user's selected language.\n\nThe backend is a Node.js/Express REST API backed by MongoDB Atlas, handling menu data, user authentication, and content management. JWT-based authentication secures the admin dashboard where restaurant staff can update content without needing developer involvement.\n\nGoogle Maps API integration embeds the restaurant location with directions and hours directly in the page. The frontend is built with React and TypeScript, using react-i18next for the multilingual layer with locale-aware routing.",
    highlights: [
      "4-language i18n: Korean, English, Simplified & Traditional Chinese",
      "JWT authentication for secure admin content management",
      "Google Maps API integration with directions and hours",
      "REST API with Node.js/Express and MongoDB Atlas",
      "Locale-aware routing with react-i18next",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "i18n", "JWT", "Google Maps API"],
    github: "https://github.com/danielsoo/Hangukgwan",
    live: null,
    images: [],
  },
  {
    slug: "signum",
    title: "SIGNUM — AI Hospital Platform",
    type: "AI / Platform",
    badge: "$3,750 Funded",
    badgeColor: "bg-amber-500/10 text-amber-400",
    shortDescription:
      "PIT-UN-funded AI platform for hospital quality analysis. Built multi-source ETL (CMS, NPPES, Google Places) into DuckDB; Markov Transition Model for star-rating prediction; RAG pipelines with FAISS + AWS Bedrock reducing research time from 50+ hrs/week to near-instant.",
    longDescription:
      "SIGNUM is an AI-powered platform for hospital quality analysis and caregiver decision support, co-founded under the Nittany AI Alliance with $3,750 in PIT-UN funding. The platform aggregates data from multiple federal and commercial sources to give caregivers a unified view of hospital quality that would otherwise require days of manual research.\n\nThe data pipeline ingests from CMS (Centers for Medicare & Medicaid Services), NPPES (National Plan and Provider Enumeration System), and Google Places, normalizing and warehousing everything into a DuckDB analytical database optimized for fast ad-hoc queries.\n\nOn top of the warehouse, a Markov Transition Model predicts hospital star-rating trajectories with confidence intervals — giving caregivers not just current ratings but trend-aware forecasts. The conversational interface is powered by domain-specific RAG pipelines using FAISS vector search and AWS Bedrock, grounding LLM responses in verified hospital data and reducing caregiver research time from 50+ hours per week to near-instant answers.",
    highlights: [
      "Awarded $3,750 PIT-UN funding via the Nittany AI Challenge",
      "Multi-source ETL from CMS, NPPES, and Google Places into DuckDB",
      "Markov Transition Model for hospital star-rating prediction with confidence intervals",
      "RAG pipelines with FAISS + AWS Bedrock for grounded LLM responses",
      "Reduced caregiver research time from 50+ hours/week to near-instant",
    ],
    tags: ["Python", "AWS Bedrock", "FAISS", "DuckDB", "RAG", "Markov Model", "ETL"],
    github: "https://github.com/danielsoo/Signum_1",
    live: null,
    images: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
