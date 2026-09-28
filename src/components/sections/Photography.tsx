"use client";

import Link from "next/link";
import { useState } from "react";

import { Frame } from "@/components/ui/Frame";
import { GoldLink } from "@/components/ui/GoldLink";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { photography } from "@/content/site";

/** How many stills the contact sheet shows before "More photography". */
const SHEET_COUNT = 3;

/**
 * Section 04 — photography.
 *
 * A contact sheet of three portrait stills, standing in for the full set.
 * Any of them — or the "More photography" link — opens the viewer, where the
 * whole run can be read one frame at a time at a size worth looking at.
 */
export function Photography() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sheet = photography.images.slice(0, SHEET_COUNT);

  return (
    <section
      id="photography"
      aria-labelledby="photography-label"
      className="flex h-full flex-col bg-ink p-[var(--space-gutter)]"
    >
      <SectionLabel
        index="04"
        label="Photography"
        labelId="photography-label"
      />

      <Link
        href={photography.leadHref}
        className="group mt-2 inline-flex w-fit items-center gap-1.5 text-[0.8125rem] text-cream/80"
      >
        {photography.lead}
        <span
          aria-hidden
          className="inline-block text-gold transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:translate-x-1"
        >
          →
        </span>
      </Link>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end">
        <ul className="grid flex-1 grid-cols-3 gap-2">
          {sheet.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open photograph: ${img.alt}`}
                className="group relative block w-full overflow-hidden bg-ink-soft"
              >
                <Frame
                  src={img.src}
                  alt={img.alt}
                  sizes="(max-width:768px) 30vw, 18vw"
                  className="aspect-[3/4] w-full transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />

                {/* Lifts to full colour as you reach for it. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-ink/15 transition-opacity duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:opacity-0 group-focus-visible:opacity-0"
                />
              </button>
            </li>
          ))}
        </ul>

        <GoldLink onClick={() => setOpenIndex(0)} className="shrink-0">
          More photography
        </GoldLink>
      </div>

      <Lightbox
        photos={photography.images}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
