"use client";

import { useRef, useSyncExternalStore } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/** Never changes after hydration, so there is nothing to subscribe to. */
const noop = () => () => {};

type ParallaxProps = {
  children: React.ReactNode;
  /** Pixels of travel across the whole pass through the viewport. */
  distance?: number;
  className?: string;
};

/**
 * Drifts its children against the scroll, to put depth between layers.
 *
 * Scroll position is read through `useScroll`, which is driven by the
 * browser rather than a scroll handler, and the output only ever touches
 * `transform`.
 *
 * The transform is withheld until after mount. Whether the viewer wants
 * reduced motion is unknowable while rendering on the server, so applying it
 * any earlier makes the server and client disagree on the element's inline
 * style, which React reports as a hydration mismatch.
 */
export function Parallax({
  children,
  distance = 60,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // False while rendering on the server, true once the client has taken over.
  const isHydrated = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
  const isActive = isHydrated && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={isActive ? { y } : undefined}>{children}</motion.div>
    </div>
  );
}
