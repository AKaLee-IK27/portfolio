export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "BLoC", "Riverpod", "iOS & Android"],
  },
  {
    label: "AI / Agentic",
    items: ["Claude Code", "Local LLMs (Ollama)", "LLM integration", "Agentic workflows"],
  },
  {
    label: "Web",
    items: ["TypeScript", "React", "Astro", "HTML & CSS"],
  },
  {
    label: "Platform & tooling",
    items: ["Firebase", "Git / GitHub", "Agile", "Testing & debugging", "Jira"],
  },
];
