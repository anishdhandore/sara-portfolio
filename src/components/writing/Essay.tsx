type EssayProps = {
  paragraphs: readonly string[];
};

/**
 * A blog post, set for reading rather than scanning: one serif column, a
 * generous measure, and a dropped first line to open it.
 */
export function Essay({ paragraphs }: EssayProps) {
  return (
    <div className="max-w-[62ch]">
      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className={`text-[length:clamp(0.9375rem,0.9rem+0.2vw,1.0625rem)] leading-[1.75] text-cocoa-muted [&+p]:mt-6 ${
            i === 0
              ? "first-letter:float-left first-letter:mt-1 first-letter:mr-2 first-letter:font-display first-letter:text-[3.25rem] first-letter:leading-[0.8] first-letter:text-gold-deep"
              : ""
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
