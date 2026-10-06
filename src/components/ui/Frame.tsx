import Image from "next/image";

type FrameProps = {
  /** Empty while that piece of content is still being gathered. */
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
 * An image slot.
 *
 * An empty `src` renders nothing at all, rather than a stand-in: a section
 * with no photograph should close up around the gap, not hold open a
 * labelled rectangle. Callers decide what their layout does without it.
 */
export function Frame({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  style,
}: FrameProps) {
  if (!src) return null;

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
