"use client";

import { motion, useReducedMotion } from "motion/react";

import { Doodle } from "@/components/ui/Doodle";
import { Frame } from "@/components/ui/Frame";
import { ScriptNote } from "@/components/ui/ScriptNote";
import { Showreel } from "@/components/ui/Showreel";
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
      {/* The scrims exist to hold copy off a photograph, so they only
          appear alongside one. Without it the hero sits on bare ink. */}
      {hero.image ? (
        <>
          <Frame
            src={hero.image}
            alt={hero.imageAlt}
            priority
            sizes="100vw"
            className="absolute inset-0"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,16,14,0.85)_0%,rgba(23,16,14,0.6)_35%,rgba(23,16,14,0)_65%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,16,14,0.75)_0%,rgba(23,16,14,0.15)_30%,rgba(23,16,14,0)_60%)]"
          />
        </>
      ) : null}

      <div className="relative z-10 flex min-h-[clamp(30rem,78vh,46rem)] items-center px-[var(--space-gutter)] py-[var(--space-section)]">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-start gap-[clamp(2.5rem,5vw,4.5rem)] lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-2xl lg:w-fit">
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
                className="absolute -right-6 top-1/3 hidden size-[10px] rounded-full bg-gold lg:block"
              />
            </div>

            {/* The reel, and the margin annotation that leans on it. */}
            <motion.div
              {...rise(2 + hero.titleLines.length)}
              className="relative w-full max-w-[16rem] shrink-0 sm:max-w-[19rem] lg:w-[clamp(15rem,23vw,21rem)] lg:max-w-none"
            >
              <Showreel src={hero.reel} label={hero.reelAlt} />

              <div className="mt-6 lg:absolute lg:bottom-6 lg:left-0 lg:mt-0 lg:w-48 lg:-translate-x-[88%]">
                <ScriptNote
                  text={hero.note}
                  rotate={-14}
                  className="text-[length:clamp(1.5rem,1.1rem+1.4vw,1.875rem)]"
                />
                <Doodle
                  kind="underline"
                  className="mt-2 w-16 translate-x-2 -rotate-[10deg]"
                />
                <Doodle
                  kind="underline"
                  className="mt-1 w-16 translate-x-8 -rotate-[16deg] opacity-70"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
