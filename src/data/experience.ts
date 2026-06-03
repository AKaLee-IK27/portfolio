export interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tags: string[];
}

// Employers are named; their end-clients and product names are described
// generically (a public, indexed page is a wider disclosure surface than a resume).
export const experience: Role[] = [
  {
    company: "Vietnam Silicon",
    title: "Software Engineer",
    location: "Ho Chi Minh City",
    period: "Dec 2025 — Present",
    current: true,
    highlights: [
      "Introduced Claude Code into the team workflow for automated refactoring, feature work, and unit testing, cutting review cycle time while keeping quality through manual code review.",
      "Built a Flutter Web platform for a national agriculture ministry to digitize durian export and supply-chain tracking, replacing manual paperwork with a searchable digital audit trail.",
      "Built a cross-platform app with local LLM integration that delivers AI-powered agricultural guidance to farmers without requiring cloud connectivity.",
    ],
    tags: ["Flutter", "Flutter Web", "LLM integration", "Claude Code", "Agile"],
  },
  {
    company: "ITBee Solutions",
    title: "Mobile Developer",
    location: "Ho Chi Minh City",
    period: "May 2025 — Dec 2025",
    highlights: [
      "Built a mobile app for real-time monitoring and control of an automotive manufacturer's robotic arms, handling live telemetry with sub-second update latency.",
      "Led a sub-team of 4: owned the Git workflow, code reviews, PR merges, and the full build cycle across two products.",
      "Shipped performance improvements on critical screens, reducing jank during heavy list rendering and complex animations.",
    ],
    tags: ["Flutter", "Real-time", "Team lead"],
  },
  {
    company: "NPH Digital",
    title: "Software Engineer",
    location: "Remote",
    period: "Nov 2024 — May 2025",
    highlights: [
      "Integrated Agora SDK for livestreaming and Socket.io for real-time messaging in a social-networking app before its public launch.",
      "Restructured BLoC state management across 6 screens, removing nested stream subscriptions and eliminating a recurring state-sync bug.",
    ],
    tags: ["Flutter", "BLoC", "Agora", "Socket.io"],
  },
  {
    company: "3xp0",
    title: "Software Developer, Intern",
    location: "Ho Chi Minh City",
    period: "Oct 2023 — Oct 2024",
    highlights: [
      "Built and launched a cross-platform kitchen-management app (iOS & Android) in Flutter/Dart with Riverpod.",
      "Integrated POS systems and P2P sync for real-time order updates with minimal latency.",
    ],
    tags: ["Flutter", "Dart", "Riverpod"],
  },
];
