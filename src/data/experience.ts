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
    period: "Dec 2025 - Present",
    current: true,
    highlights: [
      "Cut review-cycle time by bringing Claude Code into the team workflow for automated refactoring, feature work, and unit testing, with manual review holding the quality bar.",
      "Replaced a national agriculture ministry's manual paperwork with a searchable digital audit trail, building the Flutter Web platform that digitizes durian export and supply-chain tracking.",
      "Delivered AI-powered agricultural guidance to farmers offline, shipping a cross-platform app whose local LLM runs on-device with no cloud dependency.",
    ],
    tags: ["Flutter", "Flutter Web", "LLM integration", "Claude Code", "Agile"],
  },
  {
    company: "ITBee Solutions",
    title: "Mobile Developer",
    location: "Ho Chi Minh City",
    period: "May 2025 - Dec 2025",
    highlights: [
      "Put sub-second telemetry on the factory floor, building a mobile app that monitors and controls an automotive manufacturer's robotic arms in real time.",
      "Led a sub-team of 4 across two products, owning the Git workflow, code reviews, PR merges, and the full build cycle.",
      "Cut jank on critical screens, shipping performance work that smoothed heavy list rendering and complex animations.",
    ],
    tags: ["Flutter", "Real-time", "Team lead"],
  },
  {
    company: "NPH Digital",
    title: "Software Engineer",
    location: "Remote",
    period: "Nov 2024 - May 2025",
    highlights: [
      "Shipped livestreaming and real-time messaging into a social-networking app ahead of public launch, integrating the Agora SDK and Socket.io.",
      "Eliminated a recurring state-sync bug by restructuring BLoC state management across 6 screens and removing nested stream subscriptions.",
    ],
    tags: ["Flutter", "BLoC", "Agora", "Socket.io"],
  },
  {
    company: "3xp0",
    title: "Software Developer, Intern",
    location: "Ho Chi Minh City",
    period: "Oct 2023 - Oct 2024",
    highlights: [
      "Launched a cross-platform kitchen-management app to iOS and Android, built in Flutter/Dart with Riverpod.",
      "Kept orders updating in real time with minimal latency, integrating POS systems and peer-to-peer sync.",
    ],
    tags: ["Flutter", "Dart", "Riverpod"],
  },
];
