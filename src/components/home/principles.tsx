import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { principles } from "@/content/principles";

/**
 * Rules, each followed by the case-study decisions where it was applied, so a
 * reader can check every claim rather than take it on trust.
 */
export function Principles() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8"
    >
      <SectionHeading
        id="approach-title"
        eyebrow="How I work"
        title={
          <>
            What I care about <span className="text-aurora">when I build.</span>
          </>
        }
        lede="Six habits that show up in all my work, each with the projects where it made a difference."
      />
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, i) => (
          <li key={principle.title}>
            <Reveal delay={(i % 3) * 0.06} className="h-full">
              <article className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-colors hover:border-line-strong">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-violet via-cyan to-pink opacity-40 transition-opacity group-hover:opacity-100"
                />
                <p aria-hidden className="font-mono text-xs text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{principle.title}</h3>
                {/* Three lines reserved so "Applied in" lines up across a row. */}
                <p className="mt-2 text-sm leading-relaxed text-muted text-pretty md:min-h-[3lh]">{principle.belief}</p>
                <p className="mt-6 border-t border-line pt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-faint">
                  Applied in
                </p>
                <ul className="mt-2 space-y-1">
                  {principle.evidence.map((e) => (
                    <li key={`${e.slug}-${e.decision}`}>
                      <Link
                        href={`/work/${e.slug}`}
                        className="group/link -mx-2 flex items-start justify-between gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-glass"
                      >
                        <span className="text-sm leading-snug">
                          <span className="block font-mono text-[0.7rem] text-violet">{e.project}</span>
                          <span className="text-fg">{e.decision}</span>
                        </span>
                        <ArrowUpRight
                          aria-hidden
                          className="mt-1 size-3.5 shrink-0 text-faint transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-fg"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
