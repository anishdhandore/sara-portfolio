import { Doodle } from "@/components/ui/Doodle";
import { Frame } from "@/components/ui/Frame";
import { GoldLink } from "@/components/ui/GoldLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { shortFilm } from "@/content/site";

/**
 * Section 01 — the featured short film.
 *
 * Fills its cell in the parent films row: copy on the left, poster on the
 * right, collapsing to a single stacked column below `md`. The poster is
 * given a fixed ratio on small screens so it cannot collapse to zero height
 * once the two halves stop sharing a row.
 */
export function ShortFilm() {
  return (
    <section
      id="films"
      aria-labelledby="short-film-title"
      className={`group grid h-full grid-cols-1 bg-wine ${
        shortFilm.poster ? "md:grid-cols-2" : ""
      }`}
    >
      <div className="flex flex-col justify-center p-[var(--space-gutter)] py-[calc(var(--space-gutter)*1.5)]">
        <SectionLabel index="01" label="Short film" />

        <h3
          id="short-film-title"
          className="u-display mt-5 text-[length:var(--text-title)] italic text-cream"
        >
          {shortFilm.title}
        </h3>

        <p className="mt-3 text-[0.6875rem] tracking-[0.1em] text-cream/65">
          <span>{shortFilm.runtime}</span>
          <span aria-hidden className="mx-2 text-gold">
            /
          </span>
          <span>{shortFilm.genre}</span>
        </p>

        {shortFilm.synopsis ? (
          <p className="mt-4 max-w-[32ch] text-[length:var(--text-body)] text-cream/70">
            {shortFilm.synopsis}
          </p>
        ) : null}

        <div className="mt-6">
          <GoldLink href={shortFilm.href}>Watch</GoldLink>
        </div>

        {/* Hand-drawn accent, tucked under the call to action. */}
        <Doodle kind="squiggle" className="mt-7 w-16 -rotate-6" />
      </div>

      {shortFilm.poster ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-full">
          <Frame
            src={shortFilm.poster}
            alt={shortFilm.posterAlt}
            sizes="(max-width:768px) 100vw, 30vw"
            className="h-full min-h-[16rem] w-full transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
    </section>
  );
}
