/**
 * Turns a screenplay written in standard form into typed blocks the
 * renderer can lay out.
 *
 * The scripts are authored as plain text so they stay readable and editable
 * in the content files; this is the one place that knows how to read them.
 */

export type ScreenplayBlock =
  | { kind: "scene"; text: string }
  | { kind: "action"; text: string }
  | { kind: "transition"; text: string }
  | { kind: "title"; text: string }
  | { kind: "dialogue"; who: string; parenthetical?: string; lines: string[] };

/** Lines that are direction to the editor rather than to the camera. */
const TRANSITIONS = new Set([
  "FADE IN:",
  "FADE OUT.",
  "FADE OUT",
  "FADE TO BLACK.",
  "CUT.",
  "CUT TO:",
  "CUT TO BLACK.",
  "SMASH CUT TO BLACK.",
  "THE END",
  "THE END.",
  "END",
]);

const SCENE_PREFIXES = ["INT.", "EXT.", "MONTAGE", "INSERT"];

const isBlank = (line: string) => line.trim().length === 0;

const isScene = (line: string) =>
  SCENE_PREFIXES.some((prefix) => line.startsWith(prefix));

const isTitle = (line: string) =>
  line.startsWith("TITLE:") || line.startsWith("TITLE CARD:");

/**
 * A character cue is a short, all-caps line — optionally carrying a
 * "(V.O.)" or "(CONT'D)" extension — that introduces spoken lines.
 */
const isCharacterCue = (line: string) => {
  if (line.length === 0 || line.length > 38) return false;
  if (isScene(line) || isTitle(line) || TRANSITIONS.has(line)) return false;

  const withoutExtension = line.replace(/\s*\([^)]*\)\s*$/, "").trim();
  if (withoutExtension.length === 0) return false;

  // Must contain a letter, and no lowercase ones.
  if (!/[A-Z]/.test(withoutExtension)) return false;
  return withoutExtension === withoutExtension.toUpperCase();
};

export function parseScreenplay(source: string): ScreenplayBlock[] {
  const lines = source.split("\n").map((line) => line.trim());
  const blocks: ScreenplayBlock[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (isBlank(line)) {
      i += 1;
      continue;
    }

    if (TRANSITIONS.has(line)) {
      blocks.push({ kind: "transition", text: line });
      i += 1;
      continue;
    }

    if (isScene(line)) {
      blocks.push({ kind: "scene", text: line });
      i += 1;
      continue;
    }

    if (isTitle(line)) {
      blocks.push({ kind: "title", text: line });
      i += 1;
      continue;
    }

    // A cue only counts as one if something is actually spoken after it.
    if (isCharacterCue(line) && !isBlank(lines[i + 1] ?? "")) {
      const who = line;
      i += 1;

      let parenthetical: string | undefined;
      if (lines[i]?.startsWith("(") && lines[i]?.endsWith(")")) {
        parenthetical = lines[i].slice(1, -1);
        i += 1;
      }

      const spoken: string[] = [];
      while (i < lines.length && !isBlank(lines[i])) {
        spoken.push(lines[i]);
        i += 1;
      }

      blocks.push({ kind: "dialogue", who, parenthetical, lines: spoken });
      continue;
    }

    blocks.push({ kind: "action", text: line });
    i += 1;
  }

  return blocks;
}
