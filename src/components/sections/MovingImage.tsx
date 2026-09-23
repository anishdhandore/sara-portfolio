import { Doodle } from "@/components/ui/Doodle";
import { FilmStrip } from "@/components/ui/FilmStrip";
import { GoldLink } from "@/components/ui/GoldLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { movingImage } from "@/content/site";

/**
 * Section 05 — the moving-image reel.
 *
 * A deep wine band split two ways: a narrow caption rail on the left and a
 * length of 35mm film on the right. The strip is deliberately wider than its
 * container and clipped, so it reads as film continuing off the page rather
 * than a neatly boxed gallery.
 */
export function MovingImage() {
  return (
    <section
      id="reel"
      aria-labelledby="moving-image-label"
      className="relative flex w-full flex-col overflow-hidden bg-wine py-[var(--space-section)] md:flex-row md:items-stretch"
    >
      {/* Caption rail. */}
      <div className="relative flex flex-col justify-center p-[var(--space-gutter)] md:w-[28%] md:shrink-0">
        <SectionLabel
          index="05"
          label="Moving image"
          labelId="moving-image-label"
        />

        <p className="mt-6 max-w-[24ch] text-cream/70">{movingImage.body}</p>

        <div className="mt-6">
          <GoldLink href={movingImage.href}>View</GoldLink>
        </div>

        {/* Hand-drawn mark pinned to the outer edge of the band. */}
        <Doodle
          kind="zigzag"
          className="pointer-events-none absolute left-0 top-1/2 h-16 w-7 -translate-y-1/2"
        />
      </div>

      {/* The strip bleeds past the right edge of the band. */}
      <div className="flex min-w-0 flex-1 items-center overflow-hidden pl-[var(--space-gutter)] md:pl-0">
        <FilmStrip frames={movingImage.frames} className="w-[118%] shrink-0" />
      </div>
    </section>
  );
}
