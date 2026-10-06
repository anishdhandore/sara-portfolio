"use client";

import { motion } from "motion/react";

import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

/**
 * Every route arrives with a short dissolve.
 *
 * A `template` remounts on navigation (a `layout` would not), so this runs
 * each time you move between the home page and a piece of writing, which
 * stops the jump between the dark page and the paper ones feeling like a
 * hard cut.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slow, ease: EASE_OUT_EXPO }}
      className="flex min-h-full flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
