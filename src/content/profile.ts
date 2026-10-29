/**
 * Everything about Ghazi that is not a project.
 *
 * Dates and titles follow the official documents where one exists: the
 * DevsquarePK experience letter (21.04.2025) and the Softex internship
 * certificate. After the internship Ghazi stayed one month full-time, then left.
 */

export const profile = {
  name: "Ghazi Zaidi",
  legalName: "Muhammad Ghazi",
  role: "Web Product Engineer & Mobile Developer",
  email: "mghazidev@gmail.com",
  location: "Munich, Germany",
  summary:
    "Frontend and Flutter engineer. I led the frontend of a restaurant platform at DevsquarePK, built three mobile apps at Softex, and now study computer science at OTH Regensburg.",
  socials: [
    { label: "GitHub", href: "https://github.com/mghazidev", handle: "mghazidev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mghazidev/", handle: "in/mghazidev" },
    { label: "X", href: "https://twitter.com/Ghazi99418953", handle: "@Ghazi99418953" },
    { label: "Instagram", href: "https://www.instagram.com/mghazidev/", handle: "@mghazidev" },
  ],
} as const;

/** The hero's strip: where Ghazi is now, and where he has worked. */
export const now: { label: string; value: string; detail: string; href?: string }[] = [
  { label: "Studying", value: "B.Sc. International Computer Science", detail: "OTH Regensburg" },
  { label: "Building", value: "Daily Cook", detail: "A budget-first meal planner", href: "/work/daily-cook" },
  { label: "Previously", value: "DevsquarePK · Softex", detail: "Frontend and Flutter roles" },
  { label: "Based in", value: "Munich", detail: "Germany" },
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
    title: "MERN Stack & Mobile Developer",
    company: "Softex Solution",
    place: "United States · Remote",
    period: "Apr 2026",
    points: [
      "Full-time after my internship, working across Softex's web and mobile products.",
      "Web on the MERN stack (MongoDB, Express, React, Node.js); mobile in Flutter.",
    ],
  },
  {
    title: "Flutter Developer Intern",
    company: "Softex Solution",
    place: "United States · Remote",
    period: "Nov 2025 – Feb 2026",
    points: [
      "Built three mobile apps in Flutter and Dart: Buy n Grab, an HR app, and a real-time team chat.",
      "Connected them to REST APIs and live channels (Socket.IO, Pusher), with GetX and Riverpod for state.",
      "Redesigned the HR app on a shared glass UI kit and refactored its leave, reports and projects screens.",
    ],
  },
  {
    title: "WordPress Developer",
    company: "Freelance",
    place: "Remote",
    period: "Feb – Mar 2025",
    points: [
      "Delivered a complete business website, customising theme and plugins to the client's brand.",
    ],
  },
  {
    title: "Junior Frontend Engineer",
    company: "DevsquarePK",
    place: "Munich, Germany · Remote",
    period: "Nov 2023 – Apr 2025",
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
