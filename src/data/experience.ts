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
    title: "Software Engineer · Mobile Developer",
    location: "Ho Chi Minh City",
    period: "Dec 2025 — Present",
    current: true,
    highlights: [
      "Pioneered Claude Code (a CLI coding agent) for automated refactoring, feature work, and unit testing, lifting delivery velocity while holding code quality through rigorous manual review.",
      "Ship within a 30-engineer Agile team across complex, high-performance product modules.",
      "Architected a Flutter Web platform for a national agriculture ministry to digitize a durian export and supply-chain process, improving transparency and cutting administrative friction.",
      "Built a cross-platform app for a national farmers' association with deep LLM integration for real-time, AI-powered agricultural guidance.",
    ],
    tags: ["Flutter", "Flutter Web", "LLM integration", "Claude Code", "Agile"],
  },
  {
    company: "ITBee Solutions",
    title: "Mobile Developer",
    location: "Ho Chi Minh City",
    period: "May 2025 — Dec 2025",
    highlights: [
      "Engineered core features across two products, focused on mobile performance and UI responsiveness.",
      "Built a mobile app for real-time monitoring and control of an automotive manufacturer's robotic arms, prioritizing system stability and precision.",
      "Led a sub-team: owned the Git workflow, code reviews, PR merges, and the full build cycle.",
      "Partnered with backend and QA via Jira to harden stability and resolve complex bugs.",
    ],
    tags: ["Flutter", "Real-time", "Team lead"],
  },
  {
    company: "NPH Digital",
    title: "Software Engineer",
    location: "Remote",
    period: "Nov 2024 — May 2025",
    highlights: [
      "Implemented pre-launch features for a social-networking app during late-stage development.",
      "Advanced BLoC state management for a more responsive UI and cleaner data flow.",
      "Integrated Agora SDK for livestreaming and Socket.io for real-time messaging.",
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
