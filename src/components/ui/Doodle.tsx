type DoodleKind = "squiggle" | "zigzag" | "star" | "flourish" | "underline";

type DoodleProps = {
  kind: DoodleKind;
  className?: string;
};

/**
 * Hand-drawn gold marks scattered across the page.
 *
 * Purely decorative, so each is hidden from assistive technology. Drawn as
 * inline SVG rather than images: they inherit the gold token, scale without
 * artefacts, and cost nothing to load.
 */
export function Doodle({ kind, className = "" }: DoodleProps) {
  const common = {
    "aria-hidden": true as const,
    focusable: "false" as const,
    stroke: "currentColor",
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: `pointer-events-none text-gold ${className}`,
  };

  switch (kind) {
    case "squiggle":
      return (
        <svg viewBox="0 0 120 24" strokeWidth={2} {...common}>
          <path d="M2 14c10-14 20 10 30-2s20 12 30 0 20 8 26-2" />
        </svg>
      );

    case "zigzag":
      return (
        <svg viewBox="0 0 40 90" strokeWidth={2.5} {...common}>
          <path d="M8 4c14 10-12 16 4 26s-12 16 2 26 -10 14 6 26" />
        </svg>
      );

    case "star":
      return (
        <svg viewBox="0 0 40 40" strokeWidth={2} {...common}>
          <path d="M20 4c1.5 9 6.5 14 16 16-9.5 2-14.5 7-16 16-1.5-9-6.5-14-16-16 9.5-2 14.5-7 16-16Z" />
        </svg>
      );

    case "flourish":
      return (
        <svg viewBox="0 0 420 40" strokeWidth={1.75} {...common}>
          <path d="M2 26c46-24 92 14 138-2s92-22 138-2 92 10 140-8" />
        </svg>
      );

    case "underline":
      return (
        <svg viewBox="0 0 160 14" strokeWidth={2.5} {...common}>
          <path d="M3 8c26-5 52-6 78-3s52 4 76-2" />
        </svg>
      );
  }
}
