import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education, languages, LEVELS } from "@/content/credentials";

/** Semester results from the verified MAJU transcript, oldest first. */
const SEMESTERS = [
  { term: "Spring 2024", gpa: "4.00" },
  { term: "Fall 2024", gpa: "3.56" },
  { term: "Spring 2025", gpa: "3.82" },
];

/**
 * A timeline from school in Karachi to university in Regensburg, newest first,
 * beside a panel of the results. Every figure is from the original documents.
 */
export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8">
      <SectionHeading
        id="education-title"
        eyebrow="Education"
        title={
          <>
            From Karachi <span className="text-aurora">to Regensburg.</span>
          </>
        }
        lede="I studied software engineering at MAJU in Karachi and now study computer science at OTH Regensburg."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_22rem]">
        {/* One geometry at every width: the marker column is 1.5rem wide, and the
            track and every marker are centred on it at 0.75rem. */}
        <ol className="relative space-y-6 pl-10">
          {/* The track: bright where the path is now, fading toward the start. */}
          <span
            aria-hidden
            className="absolute bottom-6 left-[calc(0.75rem-0.5px)] top-7 w-px bg-linear-to-b from-mint via-cyan to-transparent"
          />
          {education.map((stage, i) => (
            <li key={stage.award} className="relative">
              <span
                aria-hidden
                className="absolute -left-10 top-6 flex size-6 items-center justify-center"
              >
                {stage.current && (
                  <span className="absolute inline-flex size-4 animate-ping rounded-full bg-mint/50 motion-reduce:animate-none" />
                )}
                <span
                  className={`relative size-3 rounded-full border-2 border-ink ${stage.current ? "bg-mint shadow-[0_0_16px_var(--color-mint)]" : "bg-cyan shadow-[0_0_12px_var(--color-cyan)]"}`}
                />
              </span>
              <Reveal delay={i * 0.05} className="glass rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                  <span className="rounded-md border border-line bg-glass px-2 py-0.5 text-fg">{stage.period}</span>
                  {stage.current && <span className="text-mint">now</span>}
                  <span className="text-faint">{stage.place}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight sm:text-2xl">{stage.award}</h3>
                <p className="mt-1 text-violet">{stage.school}</p>
                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted">
                  {stage.facts.map((fact) => (
                    <li key={fact} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-cyan" />
                      <span className="text-pretty">{fact}</span>
                    </li>
                  ))}
                </ul>
                {stage.courses && (
                  <ul aria-label="Courses" className="mt-4 flex flex-wrap gap-1.5">
                    {stage.courses.map((course) => (
                      <li key={course} className="rounded-md border border-line bg-glass px-2 py-1 font-mono text-[11px] text-muted">
                        {course}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.08} className="lg:sticky lg:top-24 lg:self-start">
          <aside aria-label="Results" className="brackets relative rounded-xl border border-[color-mix(in_oklab,var(--color-cyan)_22%,transparent)] bg-ink-2/80 p-6">
            <div aria-hidden className="dot-grid absolute inset-0 rounded-xl opacity-60" />
            <div className="relative">
              <p className="font-mono text-xs text-faint">MAJU · cumulative</p>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-6xl font-bold tracking-tight text-fg">3.80</span>
                <span className="font-mono text-sm text-muted">/ 4.00 CGPA</span>
              </p>
              <p className="mt-1 text-sm text-muted">Three semesters, 49 credit hours.</p>

              <dl className="mt-5 divide-y divide-line border-y border-line font-mono text-sm">
                {SEMESTERS.map((s) => (
                  <div key={s.term} className="flex items-center justify-between py-2">
                    <dt className="text-muted">{s.term}</dt>
                    <dd className="text-fg">{s.gpa}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 font-mono text-xs text-faint">languages · CEFR</p>
              <ul className="mt-3 space-y-3">
                {languages.map((lang) => {
                  const reached = LEVELS.indexOf(lang.level);
                  return (
                    <li key={lang.name}>
                      <p className="flex items-baseline justify-between text-sm">
                        <span className="text-fg">
                          {lang.name}
                          {lang.note && <span className="ml-2 text-faint">{lang.note}</span>}
                        </span>
                        <span className="font-mono text-xs text-muted">{lang.level}</span>
                      </p>
                      {/* The level is written beside the meter, so the segments are never the only signal. */}
                      <span aria-hidden className="mt-1.5 grid grid-cols-6 gap-0.5">
                        {LEVELS.map((level, i) => (
                          <span
                            key={level}
                            className={`h-1.5 rounded-full ${i <= reached ? "bg-violet" : "bg-line-strong"}`}
                          />
                        ))}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
