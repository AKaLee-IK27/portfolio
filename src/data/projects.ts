export interface Project {
  name: string;
  url: string;
  blurb: string;
  tags: string[];
}

// Public OSS only — never the private client/work repos.
export const projects: Project[] = [
  {
    name: "agent-harness",
    url: "https://github.com/AKaLee-IK27/agent-harness",
    blurb:
      "One source of truth for a fleet of AI coding agents: shared behavioral rules, a destructive-op safety hook, and a typed memory design across Claude Code and Pi.",
    tags: ["Bash", "Python", "Agentic", "Tooling"],
  },
  {
    name: "owlet",
    url: "https://github.com/AKaLee-IK27/owlet",
    blurb:
      "A friendly local-LLM toolkit for macOS. Its Rewriter is a Grammarly-style popup: select text, hit a hotkey, and it is rewritten in place with an inline diff, all on a local Ollama model so nothing leaves your machine.",
    tags: ["Swift", "Local LLM", "macOS"],
  },
  {
    name: "second-brain",
    url: "https://github.com/AKaLee-IK27/second-brain",
    blurb:
      "A read-only React dashboard that turns local AI coding-session logs into a navigable knowledge graph: full-text search, backlinks, and live updates over WebSocket.",
    tags: ["TypeScript", "React", "Data viz"],
  },
  {
    name: "Mogu",
    url: "https://github.com/AKaLee-IK27/Mogu",
    blurb:
      "A minimal SwiftUI front-end for the Mole system cleaner: live status, cleanup, uninstall, and disk analysis. Editorial design, a single accent, nothing it does not need.",
    tags: ["SwiftUI", "macOS"],
  },
  {
    name: "ztf-practices",
    url: "https://github.com/AKaLee-IK27/ztf-practices",
    blurb:
      "A client-side mock-exam platform for the Zalo Tech Fresher test: 100 technical and 30 aptitude questions, auto-graded, built so peers can practice under real conditions.",
    tags: ["TypeScript", "Web"],
  },
];
