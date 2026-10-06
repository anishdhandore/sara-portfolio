"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * A gold hairline across the top of the page, filling as you read.
 *
 * Sits under the header's own border so it reads as part of the rule rather
 * than a bar stuck over the design.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Springing the raw progress stops it twitching on trackpad scroll.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gold"
    />
  );
}
