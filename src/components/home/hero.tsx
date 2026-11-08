"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { Portrait } from "@/components/home/portrait";
import { now, profile } from "@/content/profile";
import { projects } from "@/content/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

/**
 * One headline line, rising out of a mask like type pulled from a press.
 * `opacity: 0` is part of the start state so the no-JavaScript fallback in the
 * layout (which targets it) can reveal the line.
 */
function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "105%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Project names and their headline tool, for the strip along the hero's foot. */
const TICKER = projects.map((p) => ({ slug: p.slug, title: p.title, tool: p.stack[0]?.items[0] ?? "" }));

export function Hero() {
  return (
    <>
      <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-8 sm:pt-16">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_23rem]">
          <motion.div {...rise(0.15)} className="order-2 lg:pt-6">
            <Portrait />
          </motion.div>

          <div className="relative order-1">
            <motion.p {...rise(0)} className="eyebrow">
              {profile.role} · Munich
            </motion.p>

            <h1 id="hero-title" className="mt-6">
              <Line delay={0.05}>
                <span className="font-sans text-xl font-medium tracking-tight text-muted sm:text-2xl">Hi, I&apos;m Ghazi Zaidi.</span>
              </Line>
              <span className="mt-2 block font-display text-[clamp(3.25rem,8.2vw,7.6rem)] leading-[0.92]">
                <Line delay={0.15}>I build products</Line>
                <Line delay={0.27}>
                  people <span className="text-aurora">rely</span> on.
                </Line>
              </span>
            </h1>

            <motion.p {...rise(0.45)} className="mt-9 max-w-xl text-lg leading-relaxed text-muted text-pretty">
              {profile.summary}
            </motion.p>

            <motion.div {...rise(0.55)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-signal"
              >
                See selected work
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-fg px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-fg hover:text-ink"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>

        <motion.dl {...rise(0.7)} aria-label="At a glance" className="mt-16 grid border-y border-line-strong sm:grid-cols-2 lg:grid-cols-4">
          {now.map((item) => (
            <div
              key={item.label}
              className="border-t border-line px-1 py-5 first:border-t-0 sm:px-5 sm:nth-2:border-t-0 sm:even:border-l lg:border-t-0 lg:border-l lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{item.label}</dt>
              <dd className="mt-2">
                {item.href ? (
                  <Link href={item.href} className="group inline-flex items-center gap-1 font-display text-3xl leading-tight hover:text-signal">
                    {item.value}
                    <ArrowUpRight aria-hidden className="size-4 text-faint transition-colors group-hover:text-signal" />
                  </Link>
                ) : (
                  <span className="font-display text-3xl leading-tight">{item.value}</span>
                )}
                <span className="mt-0.5 block text-sm text-muted">{item.detail}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </section>

      {/* The work, scrolling past like a news ticker. Pauses under the pointer. */}
      <nav aria-label="Projects" className="marquee overflow-hidden bg-fg py-4 text-ink">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0">
              {TICKER.map((t) => (
                <li key={t.slug} className="flex items-center">
                  <Link
                    href={`/work/${t.slug}`}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="px-7 font-mono text-sm uppercase tracking-[0.12em] transition-colors hover:text-signal-bright"
                  >
                    {t.title} <span className="text-signal-bright">●</span> {t.tool}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </nav>
    </>
  );
}
