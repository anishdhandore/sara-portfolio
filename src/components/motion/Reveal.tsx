"use client";

import { motion } from "motion/react";

import { DURATION, IN_VIEW, riseVariants, transition } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  /** Position in a sequence — each step waits one stagger longer. */
  index?: number;
  delay?: number;
  distance?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span" | "li";
};

/**
 * Fades its children up as they come into view, once.
 *
 * A client boundary this thin keeps the content inside it server-rendered —
 * only the wrapper ships to the browser.
 */
export function Reveal({
  children,
  index = 0,
  delay = 0,
  distance = 22,
  duration = DURATION.slow,
  className = "",
  as = "div",
}: RevealProps) {
  const Tag = motion[as];

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={IN_VIEW}
      variants={riseVariants(distance)}
      transition={transition(duration, delay + index * 0.07)}
      className={className}
    >
      {children}
    </Tag>
  );
}
