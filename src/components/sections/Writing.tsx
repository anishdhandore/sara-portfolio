import Link from "next/link";

import { Doodle } from "@/components/ui/Doodle";
import { Frame } from "@/components/ui/Frame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { writing } from "@/content/site";

/**
 * Section 03 — writing.
 *
 * Two halves inside one cell: a narrow column of links on the left, the
 * photograph on the right. The zigzag doodle rides the left edge so the
 * block reads as annotated by hand rather than typeset.
 */
export function Writing() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-label"
      className="flex h-full flex-col bg-ink-soft md:flex-row"
    >
      {/* Left — label + links */}
      <div className="relative flex flex-col justify-center p-[var(--space-gutter)] md:w-[45%]">
        <Doodle
          kind="zigzag"
          className="absolute top-1/2 left-0 h-20 w-8 -translate-y-1/2"
        />

        <div className="relative pl-3 md:pl-2">
          <SectionLabel index="03" label="Writing" labelId="writing-label" />

          <ul className="mt-6 space-y-4">
            {writing.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group block max-w-[11rem] focus-visible:outline-offset-4"
                >
                  <span className="flex items-center justify-between">
                    <span className="u-display text-lg text-cream italic">
                      {link.label}
                    </span>
                    <span
                      aria-hidden
                      className="inline-block text-gold transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="mt-2 block h-px bg-gold/50 transition-colors duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:bg-gold group-focus-visible:bg-gold"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right — the photograph */}
      <Frame
        src={writing.image}
        alt={writing.imageAlt}
        sizes="(max-width:768px) 100vw, 26vw"
        className="aspect-[4/3] w-full min-h-[14rem] md:aspect-auto md:h-full md:flex-1"
      />
    </section>
  );
}
