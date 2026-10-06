"use client";

import { motion } from "motion/react";

import { DURATION, EASE_SETTLE, IN_VIEW } from "@/lib/motion";

type TapedPrintProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Drops a print onto the page, as though it were just taped down.
 *
 * It arrives a few degrees off and over-rotates slightly before settling,
 * which is what makes it read as placed by hand rather than laid out.
 */
export function TapedPrint({ children, className = "" }: TapedPrintProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, rotate: 7, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      viewport={IN_VIEW}
      transition={{ duration: DURATION.cinematic, ease: EASE_SETTLE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
