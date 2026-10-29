"use client";

import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { Portrait } from "@/components/home/portrait";
import { now, profile } from "@/content/profile";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20 lg:pb-24">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <motion.div {...rise(0.1)} className="lg:order-2">
          <Portrait />
        </motion.div>

        <div className="lg:order-1">
          <motion.p {...rise(0)} className="eyebrow">
            {profile.role}
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            id="hero-title"
            className="mt-5 font-display text-[clamp(2.4rem,5.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-balance"
          >
            <span className="block">Hi, I&apos;m Ghazi.</span>
            <span className="block text-aurora">I build web and mobile products people rely on.</span>
          </motion.h1>

          <motion.p {...rise(0.18)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            {profile.summary}
          </motion.p>

          <motion.div {...rise(0.26)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              See my work
              <ArrowDownRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors hover:border-line-strong"
            >
              <Mail aria-hidden className="size-4" />
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>

      <motion.section {...rise(0.34)} aria-label="At a glance" className="glass mt-16 overflow-hidden rounded-2xl">
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
