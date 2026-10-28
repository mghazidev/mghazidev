import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Architecture } from "@/components/architecture";
import type { Project } from "@/content/projects";

/**
 * One project in the work grid.
 *
 * With a cover image the card shows the product; without one it shows the
 * architecture, so a project still being captured never renders as an empty
 * frame.
 */
export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const chips = project.stack.flatMap((layer) => layer.items).slice(0, featured ? 5 : 4);

  return (
    <Link
      href={`/work/${project.slug}`}
      style={{ "--accent": project.accent } as React.CSSProperties}
      className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-5 transition-[transform,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] sm:p-6"
    >
      {/* Accent glow that follows the card's own colour. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_30%,transparent),transparent)] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-ink-2">
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes={featured ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 360px, 100vw"}
            className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
        ) : (
          <div className="dot-grid flex h-full flex-col justify-center px-4 py-6 sm:px-6">
            <Architecture project={project} compact />
          </div>
        )}
      </div>

      <div className="relative flex flex-1 flex-col">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)]">
          <span>{project.platform}</span>
          <span aria-hidden className="text-faint">·</span>
          <span>{project.year}</span>
          <span aria-hidden className="text-faint">·</span>
          <span className="text-muted">{project.statusLabel}</span>
          {project.confidential && (
            <span className="ml-auto inline-flex items-center gap-1 normal-case tracking-normal text-faint">
              <Lock aria-hidden className="size-3" />
              {project.context}
            </span>
          )}
        </p>

        <h3 className="mt-3 flex items-start justify-between gap-3 font-display text-2xl font-semibold tracking-tight">
          {project.title}
          <ArrowUpRight
            aria-hidden
            className="mt-1 size-5 shrink-0 text-faint transition-[transform,color] duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
          />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
          {featured ? project.summary : project.tagline}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Built with">
          {chips.map((chip) => (
            <li
              key={chip}
              className="rounded-md border border-line bg-glass px-2 py-1 font-mono text-[11px] text-muted"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
