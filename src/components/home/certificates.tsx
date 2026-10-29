import { Maximize2, Quote } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { certificates, letter, type Certificate } from "@/content/credentials";

/**
 * Certificates as their own images, each opening full size, with the
 * experience letter quoted alongside — six cards, two full rows of three.
 */
export function Certificates() {
  const [first, ...rest] = certificates;
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8"
    >
      <SectionHeading
        id="certificates-title"
        eyebrow="Certificates"
        title={
          <>
            On paper, too. <span className="text-aurora">Each one opens full size.</span>
          </>
        }
        lede="Work, academic, community and coursework — scanned from the originals."
      />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <li>
          <CertificateCard certificate={first} />
        </li>
        <li>
          <Reveal delay={0.06} className="h-full">
            <figure className="glass flex h-full flex-col justify-between rounded-2xl p-6">
              <Quote aria-hidden className="size-6 text-violet" />
              <blockquote className="mt-4 font-display text-xl leading-snug tracking-tight text-fg text-pretty">
                &ldquo;{letter.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 font-mono text-xs text-faint">
                <span className="block text-muted">Experience letter · {letter.from}</span>
                {letter.date}
              </figcaption>
            </figure>
          </Reveal>
        </li>
        {rest.map((certificate, i) => (
          <li key={certificate.title}>
            <CertificateCard certificate={certificate} delay={((i + 2) % 3) * 0.06} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function CertificateCard({ certificate, delay = 0 }: { certificate: Certificate; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl">
        <a
          href={certificate.image.src}
          target="_blank"
          rel="noreferrer"
          className="relative block aspect-[4/3] overflow-hidden border-b border-line bg-ink-2"
        >
          <Image
            src={certificate.image.src}
            alt={certificate.image.alt}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-ink/75 px-2.5 py-1 font-mono text-[11px] text-fg backdrop-blur">
            <Maximize2 aria-hidden className="size-3" />
            Full size<span className="sr-only">: {certificate.title} (opens in a new tab)</span>
          </span>
        </a>
        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan">{certificate.kind}</p>
          <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight">{certificate.title}</h3>
          <p className="mt-1 text-sm text-violet">
            {certificate.issuer}
            {certificate.date && <span className="text-faint"> · {certificate.date}</span>}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">{certificate.detail}</p>
        </div>
      </article>
    </Reveal>
  );
}
