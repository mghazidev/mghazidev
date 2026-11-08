"use client";

import { motion } from "motion/react";

import { Reveal } from "@/components/reveal";

/**
 * A home section's heading, numbered like a magazine feature: "(02) HOW I WORK"
 * with a hairline rule that draws across the page as it scrolls into view.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <div className="numbered mb-14">
      <div className="flex items-center gap-4">
        <p className="eyebrow shrink-0">{eyebrow}</p>
        <motion.span
          aria-hidden
          className="h-px flex-1 origin-left bg-line-strong"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <Reveal className="max-w-3xl">
        <h2 id={id} className="mt-6 font-display text-6xl leading-[1.02] text-balance sm:text-7xl">
          {title}
        </h2>
        {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{lede}</p>}
      </Reveal>
    </div>
  );
}
