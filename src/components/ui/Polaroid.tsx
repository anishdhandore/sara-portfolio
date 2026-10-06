import { Frame } from "./Frame";

type PolaroidProps = {
  src: string;
  alt: string;
  rotate?: number;
  /** A strip of washi tape across the top edge. */
  tape?: boolean;
  /** Ratio of the print itself — landscape shots need their own. */
  aspect?: string;
  className?: string;
  sizes?: string;
};

/**
 * A photograph taped to the page, slightly off-square.
 *
 * The About section reads like a physical scrapbook, so the prints get a
 * paper border, a drop shadow and a piece of tape rather than sitting flush
 * in the grid. With no photograph there is no print: the paper, shadow and
 * tape would otherwise hang in the layout around nothing.
 */
export function Polaroid({
  src,
  alt,
  rotate = -3,
  tape = true,
  aspect = "4/5",
  className = "",
  sizes = "(max-width: 768px) 60vw, 22vw",
}: PolaroidProps) {
  if (!src) return null;

  return (
    <figure
      className={`relative bg-[#faf6f2] p-2.5 pb-9 shadow-[0_18px_40px_-18px_rgba(30,12,10,0.55)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {tape ? (
        <span
          aria-hidden
          className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-gold/35 mix-blend-multiply"
        />
      ) : null}
      <Frame
        src={src}
        alt={alt}
        sizes={sizes}
        className="w-full"
        style={{ aspectRatio: aspect }}
      />
    </figure>
  );
}
