import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { education } from "@/content/credentials";
import { profile } from "@/content/profile";

const current = education.find((stage) => stage.current) ?? education[0];

export function About() {
  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid items-center gap-10 md:grid-cols-[18rem_1fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-56 overflow-hidden rounded-3xl border border-line md:w-full">
            <Image
              src="/about.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 768px) 288px, 224px"
              className="object-cover"
            />
            <span aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance">
            A little <span className="text-aurora">about me.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted text-pretty">
            <p>
              I started out building websites with React and Next.js, then moved into mobile with Flutter. Today I
              work across both, and on the backends behind them.
            </p>
            <p>
              I enjoy the details users never notice but always feel: screens that stay in sync, numbers that are
              always right, and errors that explain what happened. Since 2026 I&apos;ve been studying in Germany —
              and learning German along the way.
            </p>
          </div>
          <dl className="mt-8 grid gap-4 border-t border-line pt-6 font-mono text-sm sm:grid-cols-2">
            <div>
              <dt className="text-faint">Studying</dt>
              <dd className="mt-1 text-fg">
                {current.award} · {current.school}
              </dd>
            </div>
            <div>
              <dt className="text-faint">Community</dt>
              <dd className="mt-1 text-fg">ACM-MAJU team, Jinnah League &apos;24</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
