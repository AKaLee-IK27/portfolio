export interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tags: string[];
  logo?: string;
}

// Employers are named; their end-clients and product names are described
// generically (a public, indexed page is a wider disclosure surface than a resume).
export const experience: Role[] = [
  {
    company: "Axon",
    title: "Software Engineer I",
    location: "Ho Chi Minh City (Hybrid)",
    period: "Jul 2026 – Present",
    current: true,
    highlights: [
      "Building native iOS and Android applications using Swift/SwiftUI and Kotlin/Jetpack Compose, delivering platform-specific experiences with modern declarative UI frameworks.",
      "Collaborating in an agile team to design, implement, and ship mobile features end-to-end — from architecture decisions through App Store and Play Store releases.",
    ],
    tags: ["Swift", "Kotlin", "SwiftUI", "Jetpack Compose", "Native Mobile"],
    logo: "axon.svg",
  },
  {
    company: "Vietnam Silicon",
    title: "Software Engineer",
    location: "Ho Chi Minh City",
    period: "Dec 2025 - May 2026",
    highlights: [
      "Delivered a digital-transformation platform for a national agriculture ministry, replacing manual paperwork with a searchable audit trail — built the Flutter Web application for durian export and supply-chain tracking.",
      "Improved team productivity by introducing AI-assisted coding tools (Claude Code) into the workflow for automated refactoring, feature work, and unit testing, with manual review maintaining quality standards.",
      "Shipped an offline-capable mobile app with on-device AI for agricultural guidance, delivering a cross-platform solution with no cloud dependency.",
    ],
    tags: ["Flutter", "Flutter Web", "Digital transformation", "Claude Code", "Agile"],
    logo: "vietnam-silicon.svg",
  },
  {
    company: "ITBee Solutions",
    title: "Mobile Developer",
    location: "Ho Chi Minh City",
    period: "May 2025 - Dec 2025",
    highlights: [
      "Led a sub-team of 4 across two concurrent products, owning the Git workflow, code reviews, PR merges, and the full build cycle — coordinating delivery across both workstreams.",
      "Built a real-time monitoring app for an automotive manufacturer's factory floor, enabling sub-second telemetry and control of robotic arms.",
      "Identified and resolved performance bottlenecks on critical screens, improving list rendering and animation smoothness to meet production requirements.",
    ],
    tags: ["Flutter", "Real-time", "Team lead", "Agile"],
    logo: "itbee.svg",
  },
  {
    company: "NPH Digital",
    title: "Software Engineer",
    location: "Remote",
    period: "Nov 2024 - May 2025",
    highlights: [
      "Delivered livestreaming and real-time messaging features for a social-networking app ahead of public launch, integrating Agora SDK and Socket.io within project deadlines.",
      "Restructured BLoC state management across 6 screens to eliminate a recurring state-sync bug, improving application stability and maintainability.",
    ],
    tags: ["Flutter", "BLoC", "Real-time", "Remote delivery"],
    logo: "nph-digital.svg",
  },
  {
    company: "3xp0",
    title: "Software Developer, Intern",
    location: "Ho Chi Minh City",
    period: "Oct 2023 - Oct 2024",
    highlights: [
      "Launched a cross-platform kitchen-management application to both iOS and Android, built in Flutter/Dart with Riverpod state management.",
      "Integrated POS systems and peer-to-peer sync to keep orders updating in real time with minimal latency across devices.",
    ],
    tags: ["Flutter", "Dart", "Riverpod", "Cross-platform"],
    logo: "3xp0.svg",
  },
];
