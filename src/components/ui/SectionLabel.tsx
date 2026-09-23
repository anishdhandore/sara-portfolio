type SectionLabelProps = {
  /** Sequence marker, e.g. "01". */
  index: string;
  /** Uppercase section name, e.g. "Short film". */
  label?: string;
  /**
   * Id applied to the rendered heading. Sections point `aria-labelledby` at
   * this so the landmark takes its name from the visible heading rather than
   * a duplicated `aria-label`.
   */
  labelId?: string;
  /** Inverts colours for the blush-backed sections. */
  onLight?: boolean;
  className?: string;
};

/**
 * The numbered marker that opens each section.
 *
 * The numbering is real: the page is an ordered walk through Sara's work,
 * from the featured film out to the shorter experiments and stills.
 */
export function SectionLabel({
  index,
  label,
  labelId,
  onLight = false,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={className}>
      <span
        className={`u-eyebrow block ${onLight ? "text-gold-deep" : "text-gold"}`}
      >
        {index}
      </span>
      {label ? (
        <h2
          id={labelId}
          className={`u-eyebrow mt-1.5 block ${
            onLight ? "text-cocoa" : "text-cream"
          }`}
        >
          {label}
        </h2>
      ) : null}
    </div>
  );
}
