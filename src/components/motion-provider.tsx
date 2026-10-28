"use client";

import { MotionConfig } from "motion/react";

/**
 * `reducedMotion="user"` makes every animation on the site honour the
 * operating system's reduce-motion setting, without each component checking.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
