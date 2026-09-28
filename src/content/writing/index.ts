/**
 * Everything Sara has written, in one place.
 *
 * Scripts are authored as plain screenplay text and parsed for display;
 * blogs are plain paragraphs. Both are addressed by slug from /writing.
 */

import { everythingScript } from "./everything";
import { risingAboveTheWavesScript } from "./rising-above-the-waves";
import { unspokenScript } from "./unspoken";
import { blogs, type Blog } from "./blogs";

export type Script = {
  slug: string;
  title: string;
  /** One line on what it is — shown in the index and under the title. */
  logline: string;
  form: string;
  source: string;
};

export const scripts: readonly Script[] = [
  {
    slug: "everything",
    title: "Everything",
    logline:
      "An interrogation that keeps folding back on itself, until the story Jay is telling stops matching the room he is telling it in.",
    form: "Short film — psychological thriller",
    source: everythingScript,
  },
  {
    slug: "rising-above-the-waves",
    title: "Rising Above the Waves",
    logline:
      "Atif is fourteen, and everyone in the floating slums has already decided what he will become.",
    form: "Short film — drama",
    source: risingAboveTheWavesScript,
  },
  {
    slug: "unspoken",
    title: "Unspoken",
    logline:
      "Lily deletes the message. Then deletes the next one. A film about everything left unsaid after an argument.",
    form: "Short film — drama",
    source: unspokenScript,
  },
];

export { blogs };
export type { Blog };

export type WritingKind = "script" | "blog";

/** Resolves a slug from either collection, for the shared reader route. */
export function findWriting(slug: string) {
  const script = scripts.find((item) => item.slug === slug);
  if (script) return { kind: "script" as const, script };

  const blog = blogs.find((item) => item.slug === slug);
  if (blog) return { kind: "blog" as const, blog };

  return null;
}

export const writingSlugs = [
  ...scripts.map((item) => item.slug),
  ...blogs.map((item) => item.slug),
];
