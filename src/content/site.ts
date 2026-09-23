/**
 * Single source of truth for every word and asset on the site.
 * Replace the placeholder values here when Sara's real content arrives —
 * no component should need to change.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type Film = {
  title: string;
  runtime: string;
  genre: string;
  synopsis?: string;
  /** Watch link — YouTube / Vimeo. Empty string renders a disabled link. */
  href: string;
  /** Poster frame. Empty string renders the placeholder treatment. */
  poster: string;
  posterAlt: string;
};

export type Photo = {
  src: string;
  alt: string;
};

export const nav: readonly NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Films", href: "#films" },
  { label: "Writing", href: "#writing" },
  { label: "Photography", href: "#photography" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const site = {
  name: "Sara Dhandore",
  role: "Filmmaker / Director",
  email: "sara.dhandore@gmail.com",
  instagram: "@sara.dhandore",
  instagramUrl: "https://instagram.com/sara.dhandore",
} as const;

export const hero = {
  eyebrow: "Filmmaker / Director",
  titleLines: ["Stories", "in motion"] as const,
  body: "I'm Sara, a filmmaker and storyteller. Through my lens, I try to show people the world through my perspectives — real, raw and a little bit dreamlike.",
  note: "same world,\ndifferent eyes.",
  image: "",
  imageAlt: "Sara looking up at a city skyline at dusk",
} as const;

/** Section 01 — the featured short film. */
export const shortFilm: Film = {
  title: "Everything",
  runtime: "5–7 min",
  genre: "Psychological Thriller",
  synopsis:
    "A story about perception, control and what's real. When Jay's world begins to unravel, he's left between truth and delusion.",
  href: "",
  poster: "",
  posterAlt: "A figure silhouetted against a lamplit room",
};

/** Section 02 — shorter experimental pieces. */
export const experimental: readonly Film[] = [
  {
    title: "Domus",
    runtime: "2:34",
    genre: "No Dialogue",
    href: "",
    poster: "",
    posterAlt: "A parked car on a street at night",
  },
  {
    title: "Who's Watching?",
    runtime: "1:41",
    genre: "Concept Video",
    href: "",
    poster: "",
    posterAlt: "A dark, textured interior",
  },
] as const;

/** Section 03 — writing. */
export const writing = {
  links: [
    { label: "Scripts", href: "#scripts" },
    { label: "Blogs", href: "#blogs" },
  ],
  image: "",
  imageAlt: "A notebook and pen in warm light through blinds",
} as const;

/** Section 04 — photography. */
export const photography = {
  lead: "A photo essay",
  leadHref: "#photo-essay",
  moreHref: "#more-photography",
  images: [
    { src: "", alt: "Sunset over open water" },
    { src: "", alt: "A warm interior at golden hour" },
    { src: "", alt: "Plants against a bright window" },
  ] as readonly Photo[],
} as const;

/** Section 05 — moving image reel, shown as a filmstrip. */
export const movingImage = {
  body: "A collection of moments, frames and in-between.",
  href: "#reel",
  frames: [
    { src: "", alt: "City lights at night" },
    { src: "", alt: "A figure in a doorway" },
    { src: "", alt: "Headlights on a wet road" },
    { src: "", alt: "A window at dusk" },
    { src: "", alt: "Empty street at night" },
  ] as readonly Photo[],
} as const;

/** Section 06 — about. */
export const about = {
  note: "just a girl\nwith a camera\nand a lot\nof dreams",
  paragraphs: [
    "I'm Sara, a student filmmaker. I've always been drawn to stories — the ones we see, the ones we feel, and the ones we imagine.",
    "I'm especially interested in directing because I love bringing different elements together — performance, visuals, sound, writing, and the little details that make a story feel real. I find myself constantly observing people, conversations, places, and emotions, wondering how they could become part of a story.",
    "Cinema, to me, is more than just a medium; it's a room you can return to, interpret differently as you change. I want to create films that connect people, just like conversations do. I want my films to make people feel something, see something from a different perspective, or find a part of themselves within a story.",
    "My interest in filmmaking has grown through experimenting with short films, scripts, photography, theatre, and visual storytelling. This portfolio is a collection of that process — the stories I've created, the ideas I've explored, and the things I'm still learning as I find my voice as a filmmaker.",
  ],
  moreHref: "#about-full",
  polaroid: "",
  polaroidAlt: "Sara photographed from behind, looking out over the city",
  taped: "",
  tapedAlt: "Warm light falling through a window",
} as const;

export const contact = {
  heading: "Get in touch",
  body: "Feel free to reach out for collaborations, questions or just to say hi.",
  note: "let's create something\nbeautiful",
} as const;
