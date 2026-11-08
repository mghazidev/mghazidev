"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import Image from "next/image";

/**
 * The hero portrait, printed like a magazine figure: black and white on a
 * vermilion offset block.
 *
 * With a mouse, the block drifts against the pointer and the photo warms into
 * colour on hover. Touch screens and reduced-motion visitors get the same
 * figure, standing still.
 */
export function Portrait() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 120, damping: 16, mass: 0.5 };
  const x = useSpring(useTransform(px, [-0.5, 0.5], [30, 8]), spring);
  const y = useSpring(useTransform(py, [-0.5, 0.5], [30, 8]), spring);

  function onMove(e: React.PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <figure
      className="group relative w-full max-w-[17rem] sm:max-w-[19rem] lg:mx-auto lg:max-w-none"
      onPointerMove={onMove}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      <div className="relative aspect-[4/5]">
        <motion.span aria-hidden style={{ x, y }} className="absolute inset-0 bg-signal-bright" />
        <div className="relative h-full overflow-hidden bg-fg">
          <Image
            src="/portrait.jpg"
            alt="Ghazi Zaidi"
            fill
            priority
            sizes="(min-width: 1024px) 352px, (min-width: 640px) 304px, 240px"
            className="object-cover object-[50%_22%] grayscale contrast-[1.08] transition-[filter] duration-700 ease-out-expo group-hover:grayscale-0 group-hover:contrast-100"
          />
        </div>
      </div>
    </figure>
  );
}
