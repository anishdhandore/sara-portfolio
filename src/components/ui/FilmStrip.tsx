import { Frame } from "./Frame";
import type { Photo } from "@/content/site";

type FilmStripProps = {
  frames: readonly Photo[];
  className?: string;
};

/**
 * A length of 35mm film laid across the page — the signature element.
 *
 * The sprocket holes are a repeating-linear-gradient rather than markup, so
 * the strip stays one clean element at any width. It tilts slightly and
 * overflows its container on narrow screens, scrolling horizontally like a
 * real strip pulled across a lightbox.
 */
export function FilmStrip({ frames, className = "" }: FilmStripProps) {
  const perforations =
    "repeating-linear-gradient(to right, transparent 0 9px, rgba(247,228,221,0.82) 9px 17px)";

  return (
    <div
      className={`relative rotate-[-1.2deg] bg-[#0d0908] p-[3px] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] ${className}`}
    >
      {/* Sprocket rails, top and bottom. */}
      {(["top-[5px]", "bottom-[5px]"] as const).map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={`absolute ${pos} left-0 h-[7px] w-full`}
          style={{
            backgroundImage: perforations,
            backgroundSize: "24px 100%",
            opacity: 0.85,
            maskImage: "linear-gradient(to right, transparent, #000 2%, #000 98%, transparent)",
          }}
        />
      ))}

      <div className="flex gap-[3px] overflow-x-auto px-1 py-[18px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {frames.map((frame, i) => (
          <Frame
            key={i}
            src={frame.src}
            alt={frame.alt}
            sizes="(max-width: 768px) 45vw, 18vw"
            className="aspect-[16/10] w-[clamp(7rem,18vw,13rem)] shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
