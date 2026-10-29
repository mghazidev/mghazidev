import { ProjectCard } from "@/components/home/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";

const flagship = projects.find((p) => p.flagship);
const rest = projects.filter((p) => !p.flagship);

/**
 * Bento layout on a six-column grid: the flagship across the full width, two
 * featured projects under it, then the rest three to a row (1 + 2 + 3 + 3).
 */
export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8">
      <SectionHeading
        id="work-title"
        eyebrow="Projects"
        title={
          <>
            Selected work. <span className="text-aurora">From company products to my own.</span>
          </>
        }
        lede="Products I worked on at DevsquarePK and Softex, and apps I designed and built myself. Each one opens into the problem, how I built it, and the decisions behind it."
      />
      <ul className="grid gap-5 lg:grid-cols-6">
        {flagship && (
          <li className="lg:col-span-6">
            <Reveal className="h-full">
              <ProjectCard project={flagship} flagship />
            </Reveal>
          </li>
        )}
        {rest.map((project, index) => (
          <li key={project.slug} className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
            <Reveal delay={(index % 3) * 0.06} className="h-full">
              <ProjectCard project={project} featured={index < 2} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
