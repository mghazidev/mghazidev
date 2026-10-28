"use client";

import { ArrowDownRight, Mail } from "lucide-react";
import { motion } from "motion/react";

import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

const mobileCount = projects.filter((p) => p.platform === "mobile").length;
const webCount = projects.length - mobileCount;

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
        className="mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.045em] text-balance"
      >
        I build apps people <span className="text-aurora">actually open.</span>
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

      <motion.dl
        {...rise(0.34)}
        className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8 font-mono text-xs text-faint"
      >
        <div>
          <dt className="sr-only">Products</dt>
          <dd>
            <span className="block font-display text-3xl font-semibold text-fg">{projects.length}</span>
            products
          </dd>
        </div>
        <div>
          <dt className="sr-only">Mobile apps</dt>
          <dd>
            <span className="block font-display text-3xl font-semibold text-fg">{mobileCount}</span>
            mobile apps
          </dd>
        </div>
        <div>
          <dt className="sr-only">Web products</dt>
          <dd>
            <span className="block font-display text-3xl font-semibold text-fg">{webCount}</span>
            web products
          </dd>
        </div>
      </motion.dl>
    </section>
  );
}
