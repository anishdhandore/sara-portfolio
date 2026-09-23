import { Doodle } from "@/components/ui/Doodle";
import { GoldLink } from "@/components/ui/GoldLink";
import { Polaroid } from "@/components/ui/Polaroid";
import { ScriptNote } from "@/components/ui/ScriptNote";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { about } from "@/content/site";

/**
 * Section 06 — about.
 *
 * Laid out like a scrapbook spread: a marginal column of handwriting and a
 * tilted print, the prose in the middle, and a second photograph taped on at
 * the far edge. The section clips its own overflow so the rotations never
 * push a horizontal scrollbar onto the page.
 */
export function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="relative w-full overflow-hidden bg-blush py-[var(--space-section)] px-[var(--space-gutter)]"
    >
      <div className="grid grid-cols-1 items-start gap-[var(--space-gutter)] gap-y-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.7fr)_minmax(0,0.85fr)]">
        {/* Column 1 — the margin: label, handwriting, a tilted print. */}
        <div className="relative">
          <SectionLabel
            index="06"
            label="About me"
            labelId="about-label"
            onLight
          />

          <ScriptNote
            text={about.note}
            rotate={-12}
            className="mt-6 text-2xl"
          />

          <div className="relative z-10 mt-6 w-52 max-w-full lg:translate-x-10">
            <Polaroid
              src={about.polaroid}
              alt={about.polaroidAlt}
              rotate={-4}
              sizes="(max-width: 1024px) 60vw, 13rem"
            />
          </div>
        </div>

        {/* Column 2 — the prose. */}
        <div className="lg:pt-2">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[46ch] text-cocoa-muted [&+p]:mt-5"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-8">
            <GoldLink href={about.moreHref} onLight>
              Learn more
            </GoldLink>
          </div>
        </div>

        {/* Column 3 — a second print, taped down and starred. */}
        <div className="relative w-52 max-w-full lg:ml-auto">
          <Polaroid
            src={about.taped}
            alt={about.tapedAlt}
            rotate={3}
            sizes="(max-width: 1024px) 60vw, 13rem"
          />

          <Doodle
            kind="star"
            className="pointer-events-none absolute -right-3 -top-4 w-7 rotate-12"
          />
        </div>
      </div>
    </section>
  );
}
