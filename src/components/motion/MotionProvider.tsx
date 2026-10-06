"use client";

import { MotionConfig } from "motion/react";

/**
 * Hands the whole tree one motion policy.
 *
 * `reducedMotion="user"` lets Motion drop transform animations itself when
 * the viewer asks for less motion, keeping opacity so nothing disappears.
 * Doing it here rather than branching per component also means the server
 * and client render the same markup.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
