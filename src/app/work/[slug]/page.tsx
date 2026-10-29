import { ArrowLeft, ArrowRight, FolderGit2, Lock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Architecture } from "@/components/architecture";
import { Frame } from "@/components/case/frame";
import { Surfaces } from "@/components/case/surfaces";
import { Reveal } from "@/components/reveal";
import { getProject, nextProject, projects } from "@/content/projects";

/** Every case study is prerendered at build time. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  // With cacheComponents on, `dynamicParams` no longer exists, so an unknown
  // slug is not rejected automatically — it has to be turned away here.
  if (!project) notFound();

  const next = nextProject(project.slug);

  return (
    <article style={{ "--accent": project.accent } as React.CSSProperties}>
      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8 sm:pt-14">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs text-faint transition-colors hover:text-fg"
        >
          <ArrowLeft aria-hidden className="size-3.5" /> All work
        </Link>

        <p className="mt-10 font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
          case_study · {project.platform} · {project.year}
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-balance">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted text-pretty">{project.tagline}</p>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line font-mono text-xs sm:grid-cols-4">
          {[
            ["role", project.role],
            ["context", project.context],
            ["status", project.statusLabel],
            ["platform", project.platform === "mobile" ? "Mobile" : "Web"],
          ].map(([term, value]) => (
            <div key={term} className="bg-ink-2 px-4 py-3.5">
              <dt className="text-faint">{term}</dt>
              <dd className="mt-1 text-fg">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors hover:border-line-strong"
            >
              <FolderGit2 aria-hidden className="size-4" /> Source on GitHub
            </a>
          )}
          {project.confidential && (
            <p className="inline-flex items-center gap-2 text-faint">
              <Lock aria-hidden className="size-3.5" />
              Built at {project.context}. The code is private, and people&apos;s names and messages in any
              screens are redacted.
            </p>
          )}
        </div>
      </header>

      {/* ── Hero visual ────────────────────────────────────────── */}
      {/* Only when there's a real screen to show. Without one, the architecture
          under "How it's built" is the visual — repeating it here said the
          same thing twice. */}
      {project.cover && (
        <section aria-label="Overview visual" className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Frame shot={project.cover} priority />
          </Reveal>
        </section>
      )}

      {/* ── Problem / built ────────────────────────────────────── */}
      <section aria-label="Overview" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-2">
        <Reveal>
          <h2 className="eyebrow">The problem</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">{project.problem}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="eyebrow">What I built</h2>
          <p className="mt-4 text-lg leading-relaxed text-fg text-pretty">{project.built}</p>
        </Reveal>
      </section>

      {/* ── How it's built ─────────────────────────────────────── */}
      <section aria-labelledby="how-title" className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 id="how-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How it&apos;s built
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <BlueprintPanel label="system">
              <Architecture project={project} />
              <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col-reverse bg-ink-2 px-4 py-3">
                    <dt className="font-mono text-[11px] text-faint">{m.label}</dt>
                    <dd className="font-display text-2xl font-semibold text-fg">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </BlueprintPanel>
          </Reveal>

          <Reveal delay={0.06}>
            <dl className="glass h-full overflow-hidden rounded-2xl font-mono text-sm">
              {project.stack.map((row, i) => (
                <div key={row.layer} className={`px-5 py-4 ${i ? "border-t border-line" : ""}`}>
                  <dt className="text-xs text-faint">{row.layer.toLowerCase()}</dt>
                  <dd className="mt-1.5 text-fg">{row.items.join("  ·  ")}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ul className="mt-5 grid gap-5 md:grid-cols-2">
          {project.decisions.map((d, i) => (
            <li key={d.title}>
              <Reveal delay={i * 0.05} className="glass h-full rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">{d.detail}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Features ───────────────────────────────────────────── */}
      <section aria-labelledby="features-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <h2 id="features-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What it does
          </h2>
        </Reveal>
        <ol className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {project.features.map((f, i) => (
            <li key={f.title} className="flex gap-4 border-t border-line pt-5">
              <span className="font-mono text-xs text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-medium text-fg">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted text-pretty">{f.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {project.surfaces && <Surfaces surfaces={project.surfaces} />}

      {/* ── Gallery and video ──────────────────────────────────── */}
      {(project.gallery.length > 0 || project.video) && (
        <section aria-labelledby="screens-title" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
          <Reveal>
            <h2 id="screens-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Screens
            </h2>
          </Reveal>

          {project.video && (
            <Reveal className="mt-8">
              <figure>
                <video
                  src={project.video.src}
                  poster={project.video.poster}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full rounded-xl border border-line-strong bg-ink-2"
                />
                <figcaption className="mt-3 font-mono text-xs text-faint">{project.video.caption}</figcaption>
              </figure>
            </Reveal>
          )}

          <ul className="mt-8 grid items-start gap-8 md:grid-cols-2">
            {project.gallery.map((shot, i) => (
              <li key={shot.src}>
                <Reveal delay={(i % 2) * 0.06}>
                  <figure>
                    <Frame shot={shot} sizes="(min-width: 768px) 520px, 100vw" />
                    {shot.caption && (
                      <figcaption className="mt-3 text-sm leading-relaxed text-muted">{shot.caption}</figcaption>
                    )}
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Next ───────────────────────────────────────────────── */}
      <nav aria-label="Next project" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Link
          href={`/work/${next.slug}`}
          className="glass group flex items-center justify-between gap-6 rounded-3xl p-6 transition-colors hover:border-line-strong sm:p-10"
        >
          <span>
            <span className="eyebrow">Next case study</span>
            <span className="mt-3 block font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {next.title}
            </span>
            <span className="mt-2 block text-muted">{next.tagline}</span>
          </span>
          <ArrowRight
            aria-hidden
            className="size-8 shrink-0 text-faint transition-[transform,color] group-hover:translate-x-1 group-hover:text-fg"
          />
        </Link>
      </nav>
    </article>
  );
}

/** Direction B's schematic panel: dotted grid, corner brackets, mono label. */
function BlueprintPanel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="brackets relative rounded-xl border border-[color-mix(in_oklab,var(--color-cyan)_22%,transparent)] bg-ink-2/80 p-6 sm:p-8">
      <div aria-hidden className="dot-grid absolute inset-0 rounded-xl opacity-60" />
      <p className="relative mb-8 flex justify-between font-mono text-xs text-faint">
        <span>{label}</span>
        <span className="text-cyan">●</span>
      </p>
      <div className="relative">{children}</div>
    </div>
  );
}
