import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/content/profile";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8"
    >
      <SectionHeading id="experience-title" eyebrow="Experience" title="Where I've worked." />
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {experience.map((role, i) => (
          <li key={`${role.company}-${role.period}`} className="relative">
            {/* Centred on the 1px rule: list padding + 1px border + half the 12px dot − half the rule. */}
            <span
              aria-hidden
              className="absolute -left-[calc(1.5rem+6.5px)] top-6 size-3 rounded-full border-2 border-ink bg-violet shadow-[0_0_14px_var(--color-violet)] sm:-left-[calc(2.5rem+6.5px)]"
            />
            <Reveal delay={i * 0.05} className="glass rounded-2xl p-5 sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {role.title} <span className="text-muted">· {role.company}</span>
                </h3>
                <p className="font-mono text-xs text-faint">{role.period}</p>
              </div>
              <p className="mt-1 font-mono text-xs text-violet">{role.place}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-cyan" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
