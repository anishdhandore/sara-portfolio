"use client";

import { motion, useReducedMotion } from "motion/react";

import { Doodle } from "@/components/ui/Doodle";
import { Frame } from "@/components/ui/Frame";
import { ScriptNote } from "@/components/ui/ScriptNote";
import { hero } from "@/content/site";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const STAGGER = 0.08;
const DURATION = 0.6;

/** Eyebrow reads "Filmmaker / Director" — the divider is picked out in gold. */
const [eyebrowLead, ...eyebrowRest] = hero.eyebrow.split(" / ");

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion keeps the fade but drops the rise.
  const rise = (index: number) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: DURATION,
      delay: index * STAGGER,
      ease: EASE_OUT_EXPO,
    },
  });

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[clamp(30rem,78vh,46rem)] overflow-hidden"
    >
      <Frame
        src={hero.image}
        alt={hero.imageAlt}
        priority
        sizes="100vw"
        className="absolute inset-0"
      />

      {/* Scrim — keeps the left-hand copy legible over any frame. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,16,14,0.85)_0%,rgba(23,16,14,0.6)_35%,rgba(23,16,14,0)_65%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,16,14,0.75)_0%,rgba(23,16,14,0.15)_30%,rgba(23,16,14,0)_60%)]"
      />

      <div className="relative z-10 flex min-h-[clamp(30rem,78vh,46rem)] items-center px-[var(--space-gutter)] py-[var(--space-section)]">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative max-w-2xl">
            <motion.p
              {...rise(0)}
              className="u-eyebrow flex flex-wrap items-center gap-x-[0.6em] text-cream/75"
            >
              <span>{eyebrowLead}</span>
              {eyebrowRest.map((part) => (
                <span key={part} className="flex items-center gap-x-[0.6em]">
                  <span aria-hidden className="text-gold">
                    /
                  </span>
                  <span>{part}</span>
                </span>
              ))}
            </motion.p>

            <h1
              id="hero-heading"
              className="u-display mt-4 text-[length:var(--text-hero)] text-cream"
            >
              {hero.titleLines.map((line, i) => (
                <motion.span key={line} {...rise(1 + i)} className="block">
                  {line}
                  {i === hero.titleLines.length - 1 && (
                    <span className="text-gold">.</span>
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              {...rise(1 + hero.titleLines.length)}
              className="mt-5 max-w-[34ch] text-[length:var(--text-body)] text-cream/75"
            >
              {hero.body}
            </motion.p>

            <Doodle kind="underline" className="mt-5 w-20" />

            {/* Gold dot accent, trailing the headline block. */}
            <span
              aria-hidden
              className="absolute -right-6 top-1/3 hidden size-[10px] rounded-full bg-gold md:block"
            />
          </div>
        </div>
      </div>

      {/* Margin annotation — collides with the headline below lg, so it hides. */}
      <div className="absolute right-[clamp(2rem,6vw,6rem)] top-[58%] z-10 hidden w-56 lg:block">
        <ScriptNote text={hero.note} rotate={-14} className="text-3xl" />
        <Doodle
          kind="underline"
          className="mt-2 w-16 -rotate-[10deg] translate-x-2"
        />
        <Doodle
          kind="underline"
          className="mt-1 w-16 -rotate-[16deg] translate-x-8 opacity-70"
        />
      </div>
    </section>
  );
}
