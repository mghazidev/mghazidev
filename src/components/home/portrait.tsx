"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import Image from "next/image";

/**
 * The hero portrait: a framed photo that tilts toward the pointer, with a glow
 * behind it and two chips floating at different depths in front.
 *
 * Tilt is a pointer effect only, touch screens and reduced-motion users get
 * the same layout, standing still.
 */
export function Portrait() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 140, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [0, 1], [-9, 9]), spring);
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), spring);
  const glareX = useTransform(px, [0, 1], [10, 90]);
  const glareY = useTransform(py, [0, 1], [5, 95]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgb(255 255 255 / 0.16), transparent 55%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-[19rem] lg:max-w-[22rem] [perspective:1200px]" onPointerMove={onMove} onPointerLeave={onLeave}>
      {/* Glow and an orbit ring behind the card. */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgb(124_92_255/0.55),rgb(34_211_238/0.18)_55%,transparent)] blur-2xl"
      />
      <div aria-hidden className="absolute -inset-6 rounded-[2.75rem] border border-line [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-line-strong bg-ink-2 shadow-[0_50px_100px_-40px_rgb(0_0_0/0.95),0_0_0_1px_rgb(255_255_255/0.04)_inset]">
          <Image
            src="/portrait.jpg"
            alt="Ghazi Zaidi"
            fill
            priority
            sizes="(min-width: 1024px) 352px, (min-width: 640px) 304px, 240px"
            className="object-cover object-[50%_22%]"
          />
          {/* Ground the photo in the page: a soft fade at the foot and a gentle cool grade. */}
          <span aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/5 to-transparent" />
          {/* Darken the plain studio wall toward the edges so the photo sits in the dark page. */}
          <span aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_42%,transparent_55%,rgb(6_6_11/0.55))]" />
          <span aria-hidden className="absolute inset-0 bg-[linear-gradient(160deg,rgb(124_92_255/0.12),transparent_45%,rgb(34_211_238/0.08))] mix-blend-soft-light" />
          <motion.span aria-hidden className="absolute inset-0" style={{ background: glare }} />
        </div>

        <span
          className="absolute -left-5 bottom-12 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line-strong bg-ink-2/90 px-3.5 py-2 text-xs font-medium backdrop-blur shadow-[0_20px_40px_-20px_rgb(0_0_0/0.9)] sm:-left-10"
          style={{ transform: "translateZ(60px)" }}
        >
          <MapPin aria-hidden className="size-3.5 text-cyan" />
          Munich, Germany
        </span>
        <span
          className="absolute -right-4 -top-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line-strong bg-ink-2/90 px-3.5 py-2 text-xs font-medium backdrop-blur shadow-[0_20px_40px_-20px_rgb(0_0_0/0.9)] sm:-right-10"
          style={{ transform: "translateZ(90px)" }}
        >
          <GraduationCap aria-hidden className="size-3.5 text-violet" />
          CS at OTH Regensburg
        </span>
      </motion.div>
    </div>
  );
}
