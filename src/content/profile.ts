/**
 * Everything about Ghazi that is not a project.
 *
 * Dates and titles follow the official documents where one exists: the
 * DevsquarePK experience letter (21.04.2025) and the Softex internship
 * certificate. The Softex full-time role has no letter yet; it follows LinkedIn.
 */

export const profile = {
  name: "Ghazi Zaidi",
  legalName: "Muhammad Ghazi",
  role: "Web Product Engineer & Mobile Developer",
  email: "mghazidev@gmail.com",
  location: "Munich, Germany",
  summary:
    "I take products from flow to production — the interface people touch, and the state, data and failure handling that decide whether they can rely on it.",
  socials: [
    { label: "GitHub", href: "https://github.com/mghazidev", handle: "mghazidev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mghazidev/", handle: "in/mghazidev" },
    { label: "X", href: "https://twitter.com/Ghazi99418953", handle: "@Ghazi99418953" },
    { label: "Instagram", href: "https://www.instagram.com/mghazidev/", handle: "@mghazidev" },
  ],
} as const;

/** The hero's "now" strip: what Ghazi is doing today, not a tally of the past. */
export const now: { label: string; value: string; detail: string; href?: string }[] = [
  { label: "working", value: "Frontend & mobile developer", detail: "Softex Solution" },
  { label: "studying", value: "BSc Computer Science", detail: "OTH Regensburg" },
  { label: "building", value: "Daily Cook", detail: "A budget-first meal planner", href: "/work/daily-cook" },
  { label: "based", value: "Munich", detail: "Germany" },
];

export type Role = {
  title: string;
  company: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Frontend & Mobile Developer",
    company: "Softex Solution",
    place: "United States · Remote",
    period: "Apr 2026 — present",
    points: ["Frontend and mobile work across Softex's products, against Laravel and Express backends."],
  },
  {
    title: "Flutter Developer Intern",
    company: "Softex Solution",
    place: "United States · Remote",
    period: "Nov 2025 — Feb 2026",
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
    title: "Junior Frontend Engineer",
    company: "DevsquarePK",
    place: "Munich, Germany · Remote",
    period: "Nov 2023 — Apr 2025",
    points: [
      "Led frontend development of the company's restaurant management suite: a SaaS ordering portal for restaurants, and back-office apps for online ordering and point of sale.",
      "Shaped the product from scratch for web and mobile, including a presentational layer kept consistent and scalable across every interface.",
      "Built the shared component kit the products are made from, on Next.js, React, TypeScript and MUI, and the marketing site in Next.js with GSAP.",
    ],
  },
];

/** Grouped by layer, because that is how the projects use them. */
export const stack = [
  { layer: "Mobile", items: ["Flutter", "Dart", "GetX", "Riverpod", "Socket.IO", "Pusher"] },
  { layer: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"] },
  { layer: "Backend", items: ["FastAPI", "Node.js", "PostgreSQL", "SQLite", "WebSockets"] },
  { layer: "AI", items: ["Ollama", "Tool-calling agents", "faster-whisper", "Local-first LLMs"] },
] as const;
