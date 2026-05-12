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
