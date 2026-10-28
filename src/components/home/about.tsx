import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { education, profile } from "@/content/profile";

export function About() {
  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid items-center gap-10 md:grid-cols-[18rem_1fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-56 overflow-hidden rounded-3xl border border-line md:w-full">
            <Image
              src="/ghazi_image_2.jpg"
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
            Self-taught into frontend, then <span className="text-aurora">the whole stack.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted text-pretty">
            <p>
              I started on the web with React and Next.js, moved into mobile with Flutter, and now build the
              backends and local AI systems behind both.
            </p>
            <p>
              What I care about most is the part users never see: state that can&apos;t drift, numbers that
              can&apos;t be invented, and failures that say what went wrong.
            </p>
          </div>
          <dl className="mt-8 grid gap-4 border-t border-line pt-6 font-mono text-sm sm:grid-cols-2">
            <div>
              <dt className="text-faint">education</dt>
              <dd className="mt-1 text-fg">
                {education.degree} · {education.school}
              </dd>
            </div>
            <div>
              <dt className="text-faint">community</dt>
              <dd className="mt-1 text-fg">{education.note}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
