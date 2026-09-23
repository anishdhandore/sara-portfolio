import Link from "next/link";

import { Frame } from "@/components/ui/Frame";
import { GoldLink } from "@/components/ui/GoldLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { photography } from "@/content/site";

/**
 * Section 04 — photography.
 *
 * A contact-sheet strip of three stills. On wide screens the "More
 * photography" link sits beside the strip, baseline-aligned with it, so the
 * row reads as a single caption line rather than a stacked CTA.
 */
export function Photography() {
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
          {photography.images.map((img) => (
            <li key={img.alt} className="group overflow-hidden">
              <Frame
                src={img.src}
                alt={img.alt}
                sizes="(max-width:768px) 30vw, 15vw"
                className="aspect-[4/3] w-full transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
              />
            </li>
          ))}
        </ul>

        <GoldLink href={photography.moreHref} className="shrink-0">
          More photography
        </GoldLink>
      </div>
    </section>
  );
}
