import { CodeXml, PenTool } from "lucide-react";

import { Frame } from "@/components/case/frame";
import { Reveal } from "@/components/reveal";
import type { Shot, Surface } from "@/content/projects";

const SOURCE = {
  live: { label: "Running code · captured locally", Icon: CodeXml },
  design: { label: "From the product's Figma file", Icon: PenTool },
} as const;

/**
 * A multi-product project, one product at a time.
 *
 * Every surface says where its screens come from, so a design frame is never
 * mistaken for a screenshot of the running product.
 */
export function Surfaces({ surfaces }: { surfaces: Surface[] }) {
  return (
    <section aria-labelledby="surfaces-title" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <Reveal className="max-w-2xl">
        <h2 id="surfaces-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Inside the product
        </h2>
        <p className="mt-4 leading-relaxed text-muted text-pretty">
          Each part of the platform in turn. Every section says whether its screens are running code or frames from
          the product&apos;s Figma file; customer names and numbers in the designs are replaced with placeholders.
        </p>
      </Reveal>

      {surfaces.map((surface) => {
        const { label, Icon } = SOURCE[surface.source];
        const headingId = `surface-${surface.title.toLowerCase().replace(/\W+/g, "-")}`;
        return (
          <section key={surface.title} aria-labelledby={headingId} className="mt-14 border-t border-line pt-10">
            <Reveal className="max-w-2xl">
              <p className="inline-flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
                <Icon aria-hidden className="size-3.5" />
                {label}
              </p>
              <h3 id={headingId} className="mt-3 font-display text-2xl font-semibold tracking-tight">
                {surface.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted text-pretty">{surface.summary}</p>
            </Reveal>
            {surface.video && (
              <Reveal className="mt-8">
                <figure>
                  <video
                    src={surface.video.src}
                    poster={surface.video.poster}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full rounded-xl border border-line-strong bg-ink-2"
                  />
                  <figcaption className="mt-3 font-mono text-xs text-faint">{surface.video.caption}</figcaption>
                </figure>
              </Reveal>
            )}
            <List ordered={surface.flow} className="mt-8 grid items-start gap-6 lg:grid-cols-6">
              {surface.shots.map((shot, i) => (
                <li key={shot.src} className={surface.flow ? flowSpan(shot, i, surface.shots) : span(shot, i, surface.shots)}>
                  <Reveal delay={(i % 3) * 0.05}>
                    {surface.flow && shot.step && (
                      <p className="mb-3 flex items-baseline gap-3">
                        <span aria-hidden className="font-mono text-xs text-[var(--accent)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-medium text-fg">{shot.step}</span>
                      </p>
                    )}
                    <figure>
                      <Frame shot={shot} sizes={shot.frame === "phone" ? "288px" : "(min-width: 1024px) 560px, 100vw"} />
                      {shot.caption && (
                        <figcaption className="mt-3 text-sm leading-relaxed text-muted">{shot.caption}</figcaption>
                      )}
                    </figure>
                  </Reveal>
                </li>
              ))}
            </List>
          </section>
        );
      })}
    </section>
  );
}

/**
 * Column span on the six-column grid: phones take two columns (three to a
 * row), screens take half. A lone screen takes two thirds — beside phones, or
 * on its own without stretching a sparse frame — and an odd screen out leads
 * full width.
 */
function span(shot: Shot, index: number, shots: Shot[]): string {
  if (shot.frame === "phone") return "lg:col-span-2";
  const screens = shots.filter((s) => s.frame !== "phone");
  if (screens.length === 1) return "lg:col-span-4";
  return screens.length % 2 === 1 && index === 0 ? "lg:col-span-6" : "lg:col-span-3";
}

/** A journey is an ordered list, so screen readers announce the step numbers. */
function List({ ordered, className, children }: { ordered?: boolean; className: string; children: React.ReactNode }) {
  return ordered ? <ol className={className}>{children}</ol> : <ul className={className}>{children}</ul>;
}

/**
 * Steps of a flow: a pop-up takes a third of the row and a full screen the
 * other two thirds, so steps pair up across the page; the final screen closes
 * the journey full width.
 */
function flowSpan(shot: Shot, index: number, shots: Shot[]): string {
  if (shot.frame !== "browser") return "lg:col-span-2";
  return index === shots.length - 1 ? "lg:col-span-6" : "lg:col-span-4";
}
