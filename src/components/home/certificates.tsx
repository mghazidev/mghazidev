import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { certificates, type Certificate } from "@/content/credentials";

/** Six documents, two full rows of three. Each links to the document itself. */
export function Certificates() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8"
    >
      <SectionHeading
        id="certificates-title"
        eyebrow="Credentials"
        title={
          <>
            Recognition <span className="text-aurora">along the way.</span>
          </>
        }
        lede="Professional references, academic honours, community work and continued learning."
      />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, i) => (
          <li key={certificate.title}>
            <CertificateCard certificate={certificate} delay={(i % 3) * 0.06} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function CertificateCard({ certificate, delay }: { certificate: Certificate; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-line-strong">
        <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-ink-2">
          <Image
            src={certificate.image.src}
            alt={certificate.image.alt}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            className={`object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03] ${certificate.image.anchor === "top" ? "object-top" : ""}`}
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan">{certificate.kind}</p>
          <h3 className="mt-2 flex items-start justify-between gap-3 font-display text-lg font-semibold leading-snug tracking-tight">
            {/* The whole card is the link; the overlay keeps the heading's name as its label. */}
            <a href={certificate.image.src} target="_blank" rel="noreferrer" className="after:absolute after:inset-0">
              {certificate.title}
            </a>
            <ArrowUpRight
              aria-hidden
              className="mt-1 size-4 shrink-0 text-faint transition-[transform,color] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
            />
          </h3>
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
