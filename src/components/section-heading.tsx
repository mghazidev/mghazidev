import { Reveal } from "@/components/reveal";

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
    <Reveal className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {lede && <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">{lede}</p>}
    </Reveal>
  );
}
