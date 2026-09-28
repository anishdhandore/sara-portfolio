import { parseScreenplay } from "@/lib/screenplay";

type ScreenplayProps = {
  source: string;
};

/**
 * A screenplay, set the way a screenplay is set.
 *
 * Courier, scene headings in caps against the left margin, action full
 * measure, and dialogue pulled into a narrower column with the character cue
 * above it. The indents are the point — they're how the form is read.
 */
export function Screenplay({ source }: ScreenplayProps) {
  const blocks = parseScreenplay(source);

  return (
    <div className="u-screenplay text-cocoa">
      {blocks.map((block, i) => {
        if (block.kind === "scene") {
          return (
            <h2
              key={i}
              className="mt-10 mb-4 font-semibold tracking-[0.06em] text-cocoa uppercase first:mt-0"
            >
              {block.text}
            </h2>
          );
        }

        if (block.kind === "transition") {
          return (
            <p
              key={i}
              className="mt-6 mb-6 text-right tracking-[0.08em] text-cocoa-muted uppercase"
            >
              {block.text}
            </p>
          );
        }

        if (block.kind === "title") {
          return (
            <p
              key={i}
              className="my-8 text-center tracking-[0.12em] text-gold-deep uppercase"
            >
              {block.text}
            </p>
          );
        }

        if (block.kind === "dialogue") {
          return (
            <div key={i} className="mx-auto mt-5 max-w-[22rem] sm:ml-[18%]">
              {/* The cue sits proud of the dialogue, as it does on the page. */}
              <p className="pl-[3.5rem] tracking-[0.06em] text-cocoa uppercase">
                {block.who}
              </p>
              {block.parenthetical ? (
                <p className="pl-[2.25rem] text-cocoa-muted">
                  ({block.parenthetical})
                </p>
              ) : null}
              {block.lines.map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </div>
          );
        }

        return (
          <p key={i} className="mt-4 max-w-[62ch] text-cocoa-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
