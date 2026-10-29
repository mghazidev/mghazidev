import Image from "next/image";

import type { Project, Shot } from "@/content/projects";

/** The first three phone screens a project has: its cover, then the gallery, then its product surfaces. */
export function phoneShots(project: Project): Shot[] {
  const all = [project.cover, ...project.gallery, ...(project.surfaces ?? []).flatMap((s) => s.shots)];
  const shots: Shot[] = [];
  for (const shot of all) {
    if (shot?.frame === "phone" && !shots.some((s) => s.src === shot.src)) shots.push(shot);
  }
  return shots.slice(0, 3);
}

/**
 * Three phones, the cover in front and raised. `compact` fills a card's
 * 16:10 box; the full size is a case study's hero.
 */
export function PhoneTrio({ shots, compact = false, priority = false }: { shots: Shot[]; compact?: boolean; priority?: boolean }) {
  const [front, left, right] = shots;
  const phone = (shot: Shot, cls: string, eager = false) => (
    <div
      className={`absolute bottom-0 overflow-hidden border border-line-strong bg-[#0d0b17] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.9)] ${compact ? "rounded-[1.1rem] p-1" : "rounded-[2.2rem] p-2"} ${cls}`}
    >
      <div className={`relative aspect-[9/19] overflow-hidden ${compact ? "rounded-[0.8rem]" : "rounded-[1.7rem]"}`}>
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          priority={eager}
          sizes={compact ? "140px" : "(min-width: 768px) 280px, 40vw"}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
  return (
    <div className={`relative mx-auto ${compact ? "h-full w-full" : "aspect-[16/10] w-full max-w-4xl"}`}>
      {left && phone(left, "left-[8%] w-[28%] translate-y-[6%] -rotate-6 opacity-90")}
      {right && phone(right, "right-[8%] w-[28%] translate-y-[6%] rotate-6 opacity-90")}
      {front && phone(front, "left-1/2 z-10 w-[32%] -translate-x-1/2", priority)}
    </div>
  );
}
