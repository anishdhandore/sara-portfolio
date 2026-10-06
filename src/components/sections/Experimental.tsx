import { Doodle } from "@/components/ui/Doodle";
import { Frame } from "@/components/ui/Frame";
import { GoldLink } from "@/components/ui/GoldLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experimental } from "@/content/site";

/**
 * Section 02 — the shorter experimental pieces.
 *
 * Shares the films row with `ShortFilm`, so it carries no id of its own and
 * fills its cell. Light blush ground, dark cocoa type — the tonal inverse of
 * its neighbour.
 */
export function Experimental() {
  return (
    <section
      aria-labelledby="experimental-label"
      className="relative flex h-full flex-col overflow-hidden bg-blush p-[var(--space-gutter)] py-[calc(var(--space-gutter)*1.5)]"
    >
      <SectionLabel
        index="02"
        label="Experimental work"
        labelId="experimental-label"
        onLight
        className="relative z-10"
      />

      <ul className="mt-8 grid grid-cols-1 gap-[var(--space-gutter)] sm:grid-cols-2">
        {experimental.map((film) => (
          <li key={film.title} className="group flex flex-col">
            <h3 className="u-display text-xl italic text-cocoa">
              {film.title}
            </h3>

            <p className="mt-2 text-[0.6875rem] tracking-[0.1em] text-cocoa-muted">
              <span>{film.runtime}</span>
              <span aria-hidden className="mx-2 text-gold-deep">
                /
              </span>
              <span>{film.genre}</span>
            </p>

            {film.poster ? (
              <div className="mt-3 overflow-hidden">
                <Frame
                  src={film.poster}
                  alt={film.posterAlt}
                  sizes="(max-width:768px) 45vw, 20vw"
                  className="aspect-[16/10] w-full transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                />
              </div>
            ) : null}

            <div className="mt-4">
              <GoldLink href={film.href} onLight>
                Watch
              </GoldLink>
            </div>
          </li>
        ))}
      </ul>

      {/* Hand-drawn accent in the top-right margin. */}
      <Doodle
        kind="squiggle"
        className="pointer-events-none absolute right-[var(--space-gutter)] top-[calc(var(--space-gutter)*1.5)] w-14 rotate-12"
      />
    </section>
  );
}
