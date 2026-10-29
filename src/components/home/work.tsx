import { ProjectCard } from "@/components/home/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";

/**
 * Bento layout on a six-column grid: two featured projects across the top,
 * then the rest three to a row. Eight projects fill it exactly (2 + 3 + 3).
 */
export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8">
      <SectionHeading
        id="work-title"
        eyebrow="Selected work"
        title={
          <>
            Shipped for real companies. <span className="text-aurora">Engineered like I own them.</span>
          </>
        }
        lede="Apps I built at Softex, and products I designed and engineered on my own. Each opens into a case study: the problem, how it's built, and the calls I made."
      />
      <ul className="grid gap-5 lg:grid-cols-6">
        {projects.map((project, index) => (
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
