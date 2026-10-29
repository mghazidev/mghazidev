import { getProject } from "@/content/projects";

/**
 * How Ghazi engineers, stated as rules and backed by evidence.
 *
 * A rule may only cite decisions that a case study actually records: evidence
 * is looked up by project slug and decision title, and a citation that matches
 * nothing throws while the page is built. The section can therefore never claim
 * something the projects don't show.
 */

type Citation = { project: string; decision: string };

type PrincipleSource = { title: string; belief: string; evidence: Citation[] };

export type Evidence = { slug: string; project: string; decision: string; detail: string };

export type Principle = { title: string; belief: string; evidence: Evidence[] };

const SOURCES: PrincipleSource[] = [
  {
    title: "Correct before clever",
    belief: "Facts come from deterministic code. AI interprets the question; it never produces the number.",
    evidence: [{ project: "finance-intelligence", decision: "The model never produces an amount" }],
  },
  {
    title: "Honest about uncertainty",
    belief: "When the data can't say, the interface says so. It never fills the gap with a confident guess.",
    evidence: [{ project: "finance-intelligence", decision: "Uncertainty stays uncertain" }],
  },
  {
    title: "Design the failure path",
    belief: "Decide what breaking looks like before it happens, so the user loses as little as possible.",
    evidence: [
      { project: "lecture-ai-companion", decision: "A failure costs formatting, not content" },
      { project: "lecture-ai-companion", decision: "Fail before the lecture, not during it" },
      { project: "softex-hrm", decision: "Errors as part of the design" },
    ],
  },
  {
    title: "Make wrong states impossible",
    belief: "If a state shouldn't exist, the interface shouldn't be able to reach it.",
    evidence: [
      { project: "zyturf", decision: "Every step is gated" },
      { project: "softex-chat", decision: "One source of truth for live state" },
    ],
  },
  {
    title: "Boundaries before features",
    belief: "Clear seams between interface, data and domain are what let a product change late without breaking.",
    evidence: [
      { project: "menupk", decision: "Feature modules for three products" },
      { project: "tiny-giggle", decision: "Modules, not screens" },
      { project: "buy-n-grab", decision: "Repositories between UI and API" },
      { project: "daily-cook", decision: "A modular monolith" },
    ],
  },
  {
    title: "Prove it, then write it down",
    belief: "Gates, tests and written decisions, so the reasoning survives longer than the code.",
    evidence: [
      { project: "daily-cook", decision: "Quality gates from day one" },
      { project: "zyturf", decision: "Prototype the backend twice before committing" },
      { project: "finance-intelligence", decision: "Decisions written down" },
    ],
  },
];

function resolve({ project, decision }: Citation): Evidence {
  const owner = getProject(project);
  const found = owner?.decisions.find((d) => d.title === decision);
  if (!owner || !found) throw new Error(`Principle cites "${decision}" in "${project}", which no case study records.`);
  return { slug: project, project: owner.title, decision: found.title, detail: found.detail };
}

export const principles: Principle[] = SOURCES.map((p) => ({ ...p, evidence: p.evidence.map(resolve) }));
