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
  appLinks?: {
    appStore?: string;
    googlePlay?: string;
  };
  images: string[]; // paths under /public/projects/<slug>/
  videos?: string[]; // paths under /public/projects/<slug>/
  impact?: { value: string; label: string }[];
  sections?: {
    title: string;
    body?: string;
    bullets?: string[];
    media?: {
      src: string;
      width: number;
      height: number;
      alt: string;
      caption?: string;
    }[];
  }[];
  keyTakeaways?: string[];
};

export const projects: Project[] = [
  {
    slug: "levit-shopport-ai",
    title: "Levit — Shopport AI Recommendation Platform",
    type: "Levit · Shopport AI",
    badge: "Associate Problem Solver",
    badgeColor: "bg-cyan-500/10 text-cyan-400",
    shortDescription:
      "Worked across applied AI and full-stack engineering for Shopport, Levit's consumer AI shopping app officially released on iOS and Android. Evolved its LLM router into an embedding-based semantic and hybrid router, built the production quality analytics and backfill platform, and shipped a memory-grounded cross-category recommender end to end.",
    longDescription:
      "Shopport is Levit's consumer AI shopping app, officially available on iOS and Android. During a seven-week engagement at Levit, I worked across its applied-AI stack: React and Next.js operator tools, NestJS routing and recommendation services, MongoDB and Supabase analytics, background workers, and production rollout controls. I independently ran the loop from problem definition and diagnostic harnesses through implementation, deployment, backfill, and production verification.\n\nThe work was not a standalone app built in isolation. It was a set of high-leverage contributions inside a large commerce product, made in close collaboration with the CEO and adjacent product and engineering teams.",
    highlights: [
      "Evolved routing from an LLM classifier to a semantic router that skips the LLM for confident cases (~8× faster), then to a hybrid classifier for ambiguous queries",
      "Evaluated V1/V2/V3 on production-derived traffic: V3 reached 86% accuracy with 3 regressions versus 31 for V2 and rescued 93% of eligible central-router errors",
      "Built the routing-quality platform end to end: turn audit, versioned evaluation, coverage diffs, latency waterfalls, historical backfills, and operator controls",
      "Designed and shipped Wowness, a Mem0-backed cross-category discovery recommender, as sole engineer across a 919-line NestJS engine, React UI, and admin lab",
      "Grounded generated recommendations in the live catalog and used A/B evaluation to select a persona fan-out engine over the initial weighted-score baseline",
      "Diagnosed production failures at the system boundary, including a split MongoDB connection that kept V3 at zero executions and a CronJob self-call hairpin failure",
      "Corrected systematic analytics false positives through root-cause fixes and rollback-safe backfills, reducing one queue-level count from 2,005 to 811 and dashboard errors from 82 to 57",
    ],
    tags: ["TypeScript", "React", "Next.js", "NestJS", "MongoDB", "Supabase", "Redis", "OpenRouter", "Semantic Embeddings", "Mem0", "Kubernetes", "Helm", "Datadog", "A/B Testing"],
    github: "",
    live: null,
    appLinks: {
      appStore: "https://apps.apple.com/us/app/%EC%87%BC%ED%8F%AC%ED%8A%B8-ai-%EC%87%BC%ED%95%91%EB%B9%84%EC%84%9C/id6757226599",
      googlePlay: "https://play.google.com/store/apps/details?id=com.alwayz.pmf",
    },
    images: ["/projects/levit-shopport-ai/source-contribution-clean.png"],
    impact: [
      { value: "730", label: "GitHub Contributions" },
      { value: "143", label: "Merged Pull Requests" },
      { value: "+114K", label: "TS / TSX Source Lines Added" },
      { value: "~8×", label: "Faster Confident-Case Routing" },
      { value: "86%", label: "V3 Routing Accuracy" },
      { value: "93%", label: "Eligible Router Errors Rescued" },
      { value: "2,005 → 811", label: "False-Positive Queue Count Corrected" },
      { value: "919 LOC", label: "Wowness NestJS Recommendation Engine" },
    ],
    sections: [
      {
        title: "Semantic & Hybrid Routing Engine",
        body: "I took Shopport's routing stack through three architectural generations: catalog and LLM classification, a route-index semantic gate, and a hybrid router. The semantic fast path represents each catalog leaf with sentence-embedding centroids and bypasses the LLM when similarity is decisive. For the ambiguous 0.65–0.78 similarity band, chatbot 1.2.0 adds a logistic-regression destination classifier over frozen 768-dimensional embeddings while preserving deterministic safety rules for confident cases.",
        bullets: [
          "Expanded routing across small appliances, supplements, processed foods, household, baby, furniture, and sports domains",
          "Added brand/model handling, follow-up-context retention, image routing, fashion style routing, and live scope overrides",
          "Built paired evaluation harnesses and found model TTFT—not prompt size or architectural layering—to be the dominant latency lever",
          "Measured ~0.4s median routing for confident semantic fast-path cases and ~8× speedup versus the LLM path",
        ],
      },
      {
        title: "Production Evaluation & Operations Platform",
        body: "I built the operator-facing system used to measure, audit, and improve routing quality. It evolved from live turn-by-turn analysis into persisted, versioned results with fast summary reads and rollback-safe historical reclassification.",
        bullets: [
          "Turn-level pass/fail audits, failure taxonomy, analysis versioning, original-conversation traceability, and weekly trend visualization",
          "Three-way coverage comparison across routing leaves, the Core catalog, and route-index, with no-deploy override workflows",
          "Scheduled workers, catch-up backfills, concurrency controls, pacing, retries, exponential backoff, progress/ETA, and partial-failure recovery",
          "Live server-versus-local routing comparison, per-gate latency waterfalls, and post-routing outcome linking",
        ],
      },
      {
        title: "Evaluation Integrity & Production Debugging",
        body: "A major part of the work was proving when the measurement system—not the router—was wrong. I repeatedly traced misleading dashboard counts back through stored labels, serving channels, version gates, database connections, and deployment state before changing production behavior.",
        bullets: [
          "Reduced an over-counted queue metric from 2,005 to 811 by finding a missing analysis-version gate",
          "Reduced dashboard errors from 82 to 57 by synchronizing both summary and turn-detail representations during backfill",
          "Found a split main/external MongoDB connection that caused the V3 feature switch to read an empty cluster and execute zero times in production",
          "Diagnosed a Kubernetes CronJob self-call hairpin failure and repaired it with loopback routing",
        ],
      },
      {
        title: "Wowness — Memory-Grounded Discovery",
        body: "I designed and shipped Wowness end to end to help users discover products outside categories they had already purchased from. Mem0 extracts durable user facts from prior conversations; a persona-based fan-out engine proposes novel categories and queries; and a catalog search layer validates every final item to prevent hallucinated products.",
        bullets: [
          "Sole engineer across a 919-line NestJS engine, memory store, React home surface, experiment hook, and admin review lab",
          "Compared an initial relevance/coherence/novelty weighted baseline against a persona fan-out engine and removed the weaker baseline based on A/B results",
          "Implemented privacy-aware user facts, hashed identity boundaries, kill switches, and production-safe rollout controls",
          "Optimized for useful surprise—not merely similarity—while grounding every recommendation in real inventory",
        ],
      },
      {
        title: "Experimentation & Product Reliability",
        body: "I built experiments as part of the product architecture rather than as one-off analytics. Server-side sticky assignment, forced test accounts, admin rollout controls, and destination-arrival attribution supported safe product decisions across routing and personalization.",
        bullets: [
          "Single-card auto-routing treatment/control flows and actual destination-arrival completion measurement",
          "Fixed Korean IME initial-character splitting, navigation flicker, scroll restoration, infinite loading, and prompt leakage",
          "Added feature flags, kill switches, Datadog reporting, and degraded-mode fallbacks around AI-dependent paths",
        ],
      },
    ],
    keyTakeaways: [
      "A production AI system is incomplete without an evaluation loop that can distinguish model failures from measurement failures.",
      "Optimize the measured bottleneck: several architectural latency ideas failed before the harness showed that model TTFT was the real lever.",
      "Rules should enforce and verify decisions, not pretend to understand natural-language meaning; semantic judgment belongs to models, with deterministic safety boundaries around them.",
      "Personalization is not remembering everything—it is extracting the few durable preferences that create useful surprise, safely.",
    ],
  },
  {
    slug: "ieee-battlebot",
    title: "GladIEEEators — Penn State IEEE Battle Bots Champion",
    type: "Combat Robotics · Penn State IEEE",
    badge: "1st Place · Shot & Chaser",
    badgeColor: "bg-red-500/10 text-red-400",
    shortDescription:
      "Competed under Penn State IEEE as GladIEEEators with Shot & Chaser, a coordinated two-robot combat system: a belt-driven AR500 vertical-spinner main bot and a 15° five-fork wedge minibot. Integrated weapon dynamics, mixed-material armor, LiPo electronics, FEA, arena testing, and weight/budget engineering to win 1st place in April 2026.",
    longDescription:
      "Shot & Chaser was the GladIEEEators multibot entry representing Penn State IEEE at the IEEE Student Chapter Battle Bots Competition, where the team earned 1st place in April 2026. The strategy paired Shot, a roughly five-pound vertical-spinner robot, with Chaser, a roughly one-pound wedge-and-fork support robot. The split created positioning and ground-game options, defensive redundancy, and easier repair without giving up much of the six-pound system allowance.\n\nThe project required full-system engineering rather than isolated CAD work: parametric weapon optimization, kinetic-energy and tip-speed calculations, belt geometry, shaft support, mixed-material armor, drivetrain and radio control, protected LiPo electronics, serviceability, weight accounting, procurement, FEA, physical testing, and rapid repair. Reliability also meant reasoning about coupled failure modes: whether LiPo packs and ESCs could remain thermally safe in hot outdoor weather, whether rubber and polymer parts would soften, stretch, or creep, and whether Shot's own 334 J weapon reaction could be carried through the shaft, mounts, UHMW, and aluminum chassis. Iterative fabrication and arena tests turned those constraints into a coordinated robot system that could survive impacts and perform reliably in competition.",
    highlights: [
      "Won 1st place at the IEEE Student Chapter Battle Bots Competition in April 2026",
      "Represented Penn State IEEE as team GladIEEEators in the IEEE Student Chapter Battle Bots Competition",
      "Developed a multibot strategy pairing Shot's asymmetric AR500 vertical spinner with Chaser's 15° five-fork wedge",
      "Calculated 334 J of weapon energy at 18,500 RPM, with approximately one pound of spinning mass and a 200+ mph maximum tip speed",
      "Built a live-shaft weapon assembly with bearings, shaft collars, keyed shaft, 15T/22T pulleys, and an HTD-5M timing belt",
      "Designed mixed-material protection using 6061 aluminum plates, TPU sidewalls/spacers, UHMW weapon mounts, and wheel guards",
      "Integrated separate brushed drive and brushless weapon systems, radio control, protected LiPo power, switches, fuses, and serviceable electronics",
      "Engineered around thermal buildup in LiPo packs and ESCs, elastomer stretch and creep, and chassis reaction loads generated by the robot's own weapon",
      "Used Fusion simulations to verify the weapon walls above a 4,000 N load with a 2.09 minimum safety factor, then ran repeated arena tests",
      "Managed a $976.47 total build budget with $496.18 of hardware entering the arena",
    ],
    tags: ["Combat Robotics", "Fusion 360", "FEA", "Parametric Optimization", "AR500", "6061 Aluminum", "UHMW", "TPU", "PETG", "3D Printing", "Belt Drive", "Brushless Motors", "Brushed Motors", "LiPo", "Rapid Prototyping", "System Integration"],
    github: "",
    live: null,
    images: [
      "/projects/ieee-battlebot/winner.JPG",
      "/projects/ieee-battlebot/trophy.JPG",
      "/projects/ieee-battlebot/gladeeeators_team_1.JPG",
      "/projects/ieee-battlebot/gladeeeators_team_2.JPG",
      "/projects/ieee-battlebot/gladeeeators_team_3.JPG",
      "/projects/ieee-battlebot/gladeeeators_team_4.JPG",
      "/projects/ieee-battlebot/gladeeeators_round_1.JPG",
      "/projects/ieee-battlebot/gladeeeators_round_2.JPG",
      "/projects/ieee-battlebot/gladeeeators_round_3.JPG",
    ],
    videos: [
      "/projects/ieee-battlebot/gladeeeators_round_1.mov",
      "/projects/ieee-battlebot/gladeeeators_round_2.mov",
      "/projects/ieee-battlebot/gladeeeators_round_3.mov",
      "/projects/ieee-battlebot/weapon_test.mov",
    ],
    impact: [
      { value: "1st", label: "IEEE Battle Bots Competition" },
      { value: "2 Bots", label: "Shot & Chaser Multibot Strategy" },
      { value: "334 J", label: "Calculated Weapon Energy" },
      { value: "200+ mph", label: "Maximum Spinner Tip Speed" },
      { value: ">4,000 N", label: "Validated Weapon-Wall Load" },
      { value: "$496", label: "In-Arena Hardware Cost" },
    ],
    sections: [
      {
        title: "Multibot Strategy",
        body: "Representing Penn State IEEE, GladIEEEators split the system into Shot and Chaser instead of concentrating every capability in one chassis. Shot delivered weapon energy through a vertical spinner, while Chaser used a compact wedge, five forks, and wheel protection to control space and support the primary bot.",
        bullets: [
          "Designed both bots as one coordinated competition system rather than independent builds",
          "Balanced weapon potential, maneuverability, robustness, repairability, weight, and budget across two platforms",
          "Built both drivetrains to remain mobile and useful after impacts or orientation changes",
        ],
        media: [
          {
            src: "/projects/ieee-battlebot/chaser-cad.png",
            width: 1707,
            height: 1002,
            alt: "CAD assembly of the Chaser support robot",
            caption: "Chaser CAD — 15-degree wedge, five forks, protected wheels, and compact packaging.",
          },
          {
            src: "/projects/ieee-battlebot/chaser-prototype.png",
            width: 501,
            height: 362,
            alt: "Physical Chaser prototype during fit testing",
            caption: "Chaser prototype used to verify packaging, wheel guards, fork geometry, and ground clearance.",
          },
          {
            src: "/projects/ieee-battlebot/chaser-purple-prototype.png",
            width: 310,
            height: 299,
            alt: "Early purple Chaser prototype with exposed electronics",
            caption: "Early Chaser prototype used to test the 15-degree five-fork geometry and internal packaging.",
          },
        ],
      },
      {
        title: "Weapon System",
        body: "Shot used an asymmetric AR500 steel vertical spinner driven by a 1250 kV brushless outrunner through an HTD-5M belt reduction. Parametric optimization balanced its center of mass; a live keyed shaft, bearings, collars, spacers, and a dedicated aluminum motor bracket carried the roughly one-pound rotating assembly.",
        bullets: [
          "Evaluated spinner dimensions and belt lengths before finalizing pulley center distance",
          "Used 15-tooth motor and 22-tooth spinner pulleys with replaceable timing belts",
          "Calculated 18,500 RPM, 334 J of kinetic energy, and a maximum tip speed above 200 mph",
          "Added weapon stops, clearance checks, thicker mounts, fillets, and stress testing around the weapon arms",
        ],
        media: [
          {
            src: "/projects/ieee-battlebot/shot-cad.png",
            width: 1358,
            height: 984,
            alt: "CAD assembly of Shot's vertical-spinner weapon system",
            caption: "Shot CAD — spinner, belt drive, live shaft, weapon mounts, and chassis packaging.",
          },
          {
            src: "/projects/ieee-battlebot/weapon-assembly-cad.png",
            width: 1324,
            height: 1240,
            alt: "Close-up CAD render of Shot's spinner and live-shaft assembly",
            caption: "Weapon-subsystem CAD — AR500 spinner, live shaft, bearings, collars, and mount interfaces.",
          },
          {
            src: "/projects/ieee-battlebot/weapon-inertia-properties.png",
            width: 667,
            height: 982,
            alt: "Fusion iProperties showing Shot weapon mass and inertia",
            caption: "Fusion iProperties — the 0.610 lb·in² mass moment used in the 334 J energy calculation.",
          },
        ],
      },
      {
        title: "Chassis, Armor & Drivetrain",
        body: "Shot used a sandwich chassis combining 0.125-inch 6061 aluminum plates, 95A TPU walls, aluminum spacers, UHMW weapon holders, and steel forks. Chaser used a 15° wedge with five forks, a TPU body, and PETG top plate and wheel guards. Both designs prioritized arena-impact survival and fast repair.",
        bullets: [
          "6061 aluminum supplied rigid structure while UHMW absorbed weapon loads and TPU provided resilient side protection",
          "Integrated 3-inch neoprene foam wheels and combat-robotics brushed motors on Shot; Chaser used 22:1 16 mm gearmotors, 2-inch wheels, and reached 3.9 ft/s",
          "Designed Chaser for invertibility so it could remain mobile after orientation changes",
          "Accounted for softening, stretch, and long-term deformation across TPU armor, neoprene wheels, and the timing-belt drive",
          "Iterated bolt-hole tolerances, standoffs, wheel clearance, forks, ribs, infill, and component compartments through physical prototypes",
        ],
        media: [
          {
            src: "/projects/ieee-battlebot/shot-fabricated-parts.jpg",
            width: 2048,
            height: 1536,
            alt: "Fabricated aluminum, UHMW, and TPU parts for Shot",
            caption: "Shot's fabricated mixed-material parts before final assembly.",
          },
          {
            src: "/projects/ieee-battlebot/chassis-material-parts.jpg",
            width: 2048,
            height: 1536,
            alt: "Fabricated 6061 aluminum plates and UHMW weapon holders",
            caption: "Fabricated 6061 plates and UHMW weapon holders before Shot's sandwich-chassis assembly.",
          },
        ],
      },
      {
        title: "Power, Control & Safety",
        body: "The two robots used separate radio and power architectures sized to their roles. Shot combined a 4S LiPo, dual brushed drive ESC, brushless weapon ESC, and high-current protection. Chaser used a compact 3S LiPo and dual-channel drive ESC.",
        bullets: [
          "Protected and insulated receivers, ESCs, batteries, wiring, connectors, switches, and fuses inside serviceable compartments",
          "Used 12AWG/18AWG silicone wiring, XT60/T-plug/bullet connectors, heat shrink, and mechanical strain management",
          "Designed battery access for charging and between-match replacement without sacrificing protection",
          "Considered hot-weather operation, high-current heat buildup, and between-match inspection and cooldown for both LiPo and ESC systems",
        ],
        media: [
          {
            src: "/projects/ieee-battlebot/internal-motor-mount.jpg",
            width: 1536,
            height: 2048,
            alt: "3D-printed internal wall and drive-motor mount",
            caption: "3D-printed internal wall and motor mount used to constrain shaft alignment while protecting wiring.",
          },
        ],
      },
      {
        title: "Thermal, Material & Self-Impact Reliability",
        body: "The hardest reliability problems were coupled. Ambient heat affected LiPo and ESC temperature margins; repeated loading could stretch or permanently deform compliant rubber and polymer parts; and every weapon strike sent the spinner's energy back into Shot's own shaft, mounts, and chassis. These were treated as system-level load cases rather than isolated component concerns.",
        bullets: [
          "Placed and protected batteries and ESCs with hot outdoor conditions, high-current heating, inspection access, and cooldown time in mind",
          "Controlled belt geometry and constrained compliant TPU, neoprene, and rubber components so useful flexibility did not become slack, misalignment, or creep",
          "Traced the spinner's reaction-load path through the live shaft, bearings, UHMW weapon holders, aluminum plates, spacers, and fasteners",
          "Used FEA and arena tests to ask the critical question: could the chassis repeatedly survive the power of its own weapon?",
        ],
        media: [
          {
            src: "/projects/ieee-battlebot/tpu-sidewalls-fabrication.png",
            width: 1345,
            height: 836,
            alt: "Blue TPU sidewalls during additive fabrication",
            caption: "95A TPU sidewalls during fabrication — compliant armor designed around flexibility, heat, stretch, and creep.",
          },
        ],
      },
      {
        title: "Validation & Resource Engineering",
        body: "The design review treated testing, weight, thermal behavior, material deformation, and budget as engineering constraints. Fusion simulations verified the weapon walls above a 4,000 N load with a 2.09 minimum safety factor, and repeated arena trials checked whether the complete load path could withstand both opponent impacts and Shot's own weapon reaction. A component-level weight model and procurement sheet made tradeoffs visible before fabrication.",
        bullets: [
          "Tracked measured component weights and used lightweighting or reinforcement depending on the current margin",
          "Validated weapon clearance, pulley geometry, inverted wheel contact, mount strength, live drivetrain behavior, and an externally accessible kill switch",
          "Managed a $976.47 total project bill of materials, with $496.18 of components designated for in-arena use",
        ],
        media: [
          {
            src: "/projects/ieee-battlebot/weapon-mount-fea.png",
            width: 2048,
            height: 1147,
            alt: "Fusion finite-element analysis of Shot's weapon mount",
            caption: "Weapon-mount FEA — validated above 4,000 N with a minimum safety factor of 2.09.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "A multibot is one system with two failure surfaces: strategy, weight, electronics, and repair planning have to be coordinated across both machines.",
      "Material selection is functional architecture—AR500 cuts, aluminum carries structure, UHMW absorbs impact, and TPU adds compliant protection.",
      "Competition reliability comes from testing how a design fails, not only proving that it works once.",
      "A combat robot has to survive its own stored energy: weapon power is also a chassis, bearing, fastener, thermal, and maintenance load case.",
      "Under match pressure, accessible batteries, replaceable belts, protected wheels, and diagnosable wiring matter as much as peak weapon performance.",
    ],
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
    keyTakeaways: [
      "Compression and robustness are different axes — a model can be small and still fragile, or robust and still too large for the target device.",
      "Federated learning is a coordination problem as much as a training problem; how the server aggregates client updates matters as much as local training.",
      "Accuracy alone hides how a model fails — class imbalance and adversarial robustness need to be measured explicitly, not assumed from a single metric.",
    ],
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
    keyTakeaways: [
      "Permission systems need to be designed in from the start, not bolted on — retrofitting RBAC onto existing features is far harder than starting with it.",
      "Real-time sync simplifies the UI but pushes complexity into handling partial and optimistic updates correctly.",
      "Building for a real organization's leadership hierarchy taught me to design around how people actually make decisions, not an idealized workflow.",
    ],
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
    keyTakeaways: [
      "Internationalization is more than translation — layout, date/number formats, and even tone need to adapt per locale.",
      "Building admin tools for non-technical users forces simpler, more constrained interfaces than a typical developer-facing dashboard.",
      "Small full-stack projects are a good forcing function for end-to-end ownership — from auth to deployment, there's nowhere to hide from a rough edge.",
    ],
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
    keyTakeaways: [
      "Domain-grounded RAG is only as trustworthy as the data pipeline underneath it — bad data in the warehouse means confident-sounding but wrong answers.",
      "Forecasting and retrieval solve different problems; combining the Markov model with RAG gave caregivers both a trend and an explanation, which neither alone provided.",
      "Co-founding a funded project taught me the hardest part is often scoping something a small team can actually ship and demo convincingly, not the ML itself.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
