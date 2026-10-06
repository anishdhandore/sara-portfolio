import type { Transition, Variants } from "motion/react";

/**
 * The motion vocabulary for the whole site.
 *
 * Everything eases on the same curve as the CSS transitions in globals.css,
 * so hand-written hovers and scroll reveals feel like one system. Only
 * compositor-friendly properties are animated: transform, opacity, clip-path.
 */

/** Matches --ease-out-expo. Fast out of the gate, long settle. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** A touch of overshoot, for things that should feel physical. */
export const EASE_SETTLE = [0.34, 1.26, 0.64, 1] as const;

export const DURATION = {
  fast: 0.16,
  normal: 0.32,
  slow: 0.62,
  /** Long enough to read as a camera move rather than a UI transition. */
  cinematic: 0.9,
} as const;

/** How far apart siblings start. Small — the eye should read a sweep. */
export const STAGGER = 0.07;

/** Reveals fire once, a little before the element is fully on screen. */
export const IN_VIEW = { once: true, margin: "0px 0px -12% 0px" } as const;

export const transition = (
  duration: number = DURATION.slow,
  delay = 0,
): Transition => ({ duration, delay, ease: EASE_OUT_EXPO });

/** Fade up — the default for copy. */
export const riseVariants = (distance = 22): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0 },
});

/** A line of type climbing out from behind its own mask. */
export const maskedLineVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%" },
};

/** A film wipe: the frame opens from its lower edge. */
export const wipeVariants: Variants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)", scale: 1.08 },
  visible: { clipPath: "inset(0% 0% 0% 0%)", scale: 1 },
};

/** Parent that hands its children a staggered start. */
export const staggerParent = (
  stagger: number = STAGGER,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
