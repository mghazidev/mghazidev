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
      <Reveal className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(124_92_255/0.45),transparent)]"
        />
        <p className="eyebrow relative">Contact</p>
        <h2
          id="contact-title"
          className="relative mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
        >
          Have something worth building? <span className="text-aurora">Let&apos;s talk.</span>
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
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
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-line-strong hover:text-fg"
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
