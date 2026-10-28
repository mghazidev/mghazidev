import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { stack } from "@/content/profile";

/** The spec-sheet table from Direction B: layer on the left, tools on the right. */
export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8">
      <SectionHeading
        id="stack-title"
        eyebrow="Stack"
        title="The tools, by the layer they live in."
        lede="Grouped the way the projects use them. Most of the work crosses at least two of these."
      />
      <Reveal>
        <dl className="glass overflow-hidden rounded-2xl font-mono text-sm">
          {stack.map((row, i) => (
            <div
              key={row.layer}
              className={`grid gap-2 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:px-6 ${i ? "border-t border-line" : ""}`}
            >
              <dt className="text-faint">{row.layer.toLowerCase()}</dt>
              <dd className="flex flex-wrap gap-x-3 gap-y-1 text-fg">
                {row.items.map((item, j) => (
                  <span key={item}>
                    {item}
                    {j < row.items.length - 1 && (
                      <span aria-hidden className="ml-3 text-faint">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
