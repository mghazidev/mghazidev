import { ArrowUpRight, Mail } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24 sm:px-8"
    >
      <Reveal className="relative overflow-hidden bg-fg px-6 py-16 text-center text-ink sm:px-12 sm:py-24">
        {/* The page inverts for the close: ink paper, vermilion signal. */}
        <span aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full border border-ink/15" />
        <span aria-hidden className="absolute -right-6 -top-6 size-56 rounded-full border border-ink/10" />
        <p className="eyebrow relative !text-signal-bright">Contact</p>
        <h2
          id="contact-title"
          className="relative mx-auto mt-5 max-w-3xl font-display text-6xl leading-[1] text-balance sm:text-7xl"
        >
          Let&apos;s build <span className="text-aurora !text-signal-bright">something together.</span>
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-signal-bright px-7 py-4 font-semibold text-fg transition-transform hover:-translate-y-0.5"
        >
          <Mail aria-hidden className="size-4" />
          {profile.email}
        </a>
        <ul className="relative mt-10 flex flex-wrap justify-center gap-3">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/25 px-4 py-2 font-mono text-xs text-ink/75 transition-colors hover:border-ink hover:text-ink"
              >
                {s.label}
                <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
