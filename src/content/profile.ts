/**
 * Everything about Ghazi that is not a project.
 *
 * Carried over from the previous site so nothing is lost in the redesign. Dates
 * and titles are the ones that site published; the Softex end date is the only
 * value inferred (last commit to the company repos was April 2026).
 */

export const profile = {
  name: "Ghazi Zaidi",
  legalName: "Muhammad Ghazi",
  role: "Mobile & Full-Stack Engineer",
  email: "mghazidev@gmail.com",
  summary:
    "I build Flutter apps and AI-native web products end to end — the screens, the state, and the backend they talk to.",
  socials: [
    { label: "GitHub", href: "https://github.com/mghazidev", handle: "mghazidev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mghazidev/", handle: "in/mghazidev" },
    { label: "X", href: "https://twitter.com/Ghazi99418953", handle: "@Ghazi99418953" },
    { label: "Instagram", href: "https://www.instagram.com/mghazidev/", handle: "@mghazidev" },
  ],
} as const;

export type Role = {
  title: string;
  company: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Flutter Developer",
    company: "Softex Solution",
    place: "United States · Remote",
    period: "Dec 2025 — 2026",
    points: [
      "Built three production mobile apps in Flutter and Dart: Buy n Grab, an HRM suite, and a real-time chat app.",
      "Integrated REST APIs and real-time channels (Socket.IO, Pusher) with GetX and Riverpod state management.",
      "Designed the glassmorphic UI system the apps share, with clean architecture throughout.",
    ],
  },
  {
    title: "WordPress Developer",
    company: "Freelance",
    place: "Remote",
    period: "Feb — Mar 2025",
    points: [
      "Delivered a complete business website, customising theme and plugins to the client's brand.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "DevsquarePK",
    place: "Munich, Germany · Remote",
    period: "Oct 2022 — Jan 2025",
    points: [
      "Developed and scaled an in-house product with Next.js, React, TypeScript and MUI.",
      "Implemented authentication with NextAuth and handled backend tasks in Node.js.",
      "Built reusable component libraries documented in Storybook, and owned features from requirements to deployment.",
    ],
  },
];

export const education = {
  degree: "BS Software Engineering",
  school: "Mohammad Ali Jinnah University",
  note: "Leading the tech hackathon at MAJU.",
};

/** Grouped by layer, because that is how the projects use them. */
export const stack = [
  { layer: "Mobile", items: ["Flutter", "Dart", "GetX", "Riverpod", "Socket.IO", "Pusher"] },
  { layer: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"] },
  { layer: "Backend", items: ["FastAPI", "Node.js", "PostgreSQL", "SQLite", "WebSockets"] },
  { layer: "AI", items: ["Ollama", "Tool-calling agents", "faster-whisper", "Local-first LLMs"] },
] as const;
