"use client";

import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { now, profile } from "@/content/profile";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28">
      <motion.p {...rise(0)} className="eyebrow">
        {profile.role}
      </motion.p>

      <motion.h1
        {...rise(0.08)}
        id="hero-title"
        className="mt-6 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.045em] text-balance"
      >
        <span className="block">Interfaces people trust.</span>
        <span className="block text-aurora">Systems that earn it.</span>
      </motion.h1>

      <motion.p {...rise(0.18)} className="mt-8 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
        {profile.summary}
      </motion.p>

      <motion.div {...rise(0.26)} className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          See the work
          <ArrowDownRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors hover:border-line-strong"
        >
          <Mail aria-hidden className="size-4" />
          {profile.email}
        </a>
      </motion.div>

      <motion.section {...rise(0.34)} aria-labelledby="now-title" className="glass mt-16 overflow-hidden rounded-2xl">
        <h2
          id="now-title"
          className="flex items-center gap-2.5 border-b border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-faint"
        >
          <span aria-hidden className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-mint" />
          </span>
          Now
        </h2>
        {/* One column, then two, then four: rules sit between cells, never on the panel's edge. */}
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
          {now.map((item) => (
            <div
              key={item.label}
              className="border-t border-line px-5 py-4 first:border-t-0 sm:nth-2:border-t-0 sm:even:border-l lg:border-t-0 lg:border-l lg:first:border-l-0"
            >
              <dt className="font-mono text-xs text-faint">{item.label}</dt>
              <dd className="mt-1.5">
                {item.href ? (
                  <Link href={item.href} className="group inline-flex items-center gap-1 font-medium text-fg hover:text-cyan-soft">
                    {item.value}
                    <ArrowUpRight aria-hidden className="size-3.5 text-faint transition-colors group-hover:text-cyan-soft" />
                  </Link>
                ) : (
                  <span className="font-medium text-fg">{item.value}</span>
                )}
                <span className="block text-sm text-muted">{item.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </motion.section>
    </section>
  );
}
