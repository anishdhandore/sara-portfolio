"use client";

import { motion } from "motion/react";

import { DURATION, IN_VIEW, transition, wipeVariants } from "@/lib/motion";

type WipeProps = {
  children: React.ReactNode;
  index?: number;
  delay?: number;
  className?: string;
};

/**
 * Opens a frame with a film wipe.
 *
 * The clip-path travels up from the lower edge while the image settles back
 * from a slight push-in, which reads like a shot being revealed rather than
 * a box fading on.
 */
export function Wipe({
  children,
  index = 0,
  delay = 0,
  className = "",
}: WipeProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={IN_VIEW}
      variants={wipeVariants}
      transition={transition(DURATION.cinematic, delay + index * 0.09)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
