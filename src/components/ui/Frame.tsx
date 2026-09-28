import Image from "next/image";

type FrameProps = {
  src: string;
  alt: string;
  /** Extra classes for sizing / aspect ratio. */
  className?: string;
  /** Responsive sizes hint for next/image. */
  sizes?: string;
  priority?: boolean;
  /** Escape hatch for ratios that can't be expressed as a utility class. */
  style?: React.CSSProperties;
};

/**
 * An image slot that degrades gracefully.
 *
 * Content is still being gathered, so `src` is often an empty string. Rather
 * than breaking the layout, an empty slot renders a warm placeholder at the
 * correct dimensions — the composition stays reviewable before the real
 * photographs land.
 */
export function Frame({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  style,
}: FrameProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={`Placeholder: ${alt}`}
        className={`relative overflow-hidden bg-[linear-gradient(135deg,#3a2420_0%,#5c3730_45%,#2a1a17_100%)] ${className}`}
        style={style}
      >
        <span
          aria-hidden
          className="absolute inset-0 grid place-items-center px-3 text-center text-[0.5625rem] uppercase tracking-[0.2em] text-cream/35"
        >
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
