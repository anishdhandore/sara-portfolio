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
  /** Omitted where the length isn't worth stating. */
  runtime?: string;
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
  { label: "Home", href: "/#home" },
  { label: "Films", href: "/#films" },
  { label: "Writing", href: "/#writing" },
  { label: "Photography", href: "/#photography" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const site = {
  name: "Sara Dhandore",
  role: "Filmmaker / Director",
  email: "dhandoresara@gmail.com",
  instagram: "@sara_wdymsiri",
  instagramUrl: "https://instagram.com/sara_wdymsiri",
} as const;

export const hero = {
  eyebrow: "Filmmaker / Director",
  titleLines: ["Stories", "in motion"] as const,
  body: "I'm Sara, a filmmaker and storyteller. Through my lens, I try to show people the world through my perspectives — real, raw and a little bit dreamlike.",
  note: "same world,\ndifferent eyes.",
  image: "",
  imageAlt: "Sara looking up at a city skyline at dusk",
  /** Vertical showreel looping beside the headline. */
  reel: "/video/showreel.mp4",
  reelAlt: "Showreel — a cut of Sara's recent film work",
} as const;

/** Section 01 — the featured short film. */
export const shortFilm: Film = {
  title: "Everything",
  genre: "Psychological Thriller",
  synopsis:
    "A story about perception, control and what's real. When Jay's world begins to unravel, he's left between truth and delusion.",
  href: "https://youtu.be/CAUlh3PpyEg",
  poster: "",
  posterAlt: "A figure silhouetted against a lamplit room",
};

/** Section 02 — shorter experimental pieces. */
export const experimental: readonly Film[] = [
  {
    title: "Domus",
    runtime: "2:34",
    genre: "No Dialogue",
    href: "https://www.youtube.com/watch?v=VkS0chDbq6M",
    poster: "/images/domus-rooftop.jpg",
    posterAlt: "A figure on a rooftop at night, lit windows and plants behind",
  },
  {
    title: "Who's Watching?",
    runtime: "1:41",
    genre: "Concept Video",
    href: "https://www.youtube.com/watch?v=RL8hQUbF1zc",
    poster: "/images/whos-watching.jpg",
    posterAlt: "A woman at a desk lit by a laptop screen, looking past it",
  },
] as const;

/** Section 03 — writing. */
export const writing = {
  links: [
    { label: "Scripts", href: "/writing#scripts" },
    { label: "Blogs", href: "/writing#blogs" },
  ],
} as const;

/** Section 04 — photography. */
export const photography = {
  lead: "A photo essay",
  leadHref: "#photo-essay",
  images: [
    {
      src: "/images/photography/photo-01.jpg",
      alt: "A road at night beneath bridge lights, in black and white",
    },
    {
      src: "/images/photography/photo-02.jpg",
      alt: "Sunset over the sea, orange cloud breaking across a blue sky",
    },
    {
      src: "/images/photography/photo-03.jpg",
      alt: "Prayer flags strung over a mountain bazaar at sunset, a cup of coffee on the table in the foreground",
    },
    {
      src: "/images/photography/photo-04.jpg",
      alt: "Dawn over the sea from a high balcony, towers along the shoreline",
    },
    {
      src: "/images/photography/photo-05.jpg",
      alt: "Sara looking up in sunglasses against a bank of grey cloud",
    },
    {
      src: "/images/photography/photo-06.jpg",
      alt: "Shikaras moored at dusk on Dal Lake, shopfront lights reflected on the water",
    },
    {
      src: "/images/photography/photo-07.jpg",
      alt: "A cairn of balanced stones above a mountain stream",
    },
    {
      src: "/images/photography/photo-08.jpg",
      alt: "The sun setting behind a city skyline across the water",
    },
    {
      src: "/images/photography/photo-09.jpg",
      alt: "Snow on the peaks above a pine forest and a fast-running river",
    },
    {
      src: "/images/photography/photo-10.jpg",
      alt: "Carved stone ruins standing under a bright blue sky",
    },
  ] as readonly Photo[],
} as const;

/** Section 05 — about. */
export const about = {
  note: "just a girl\nwith a camera\nand a lot\nof dreams",
  paragraphs: [
    "I'm Sara, a student filmmaker. I've always been drawn to stories — the ones we see, the ones we feel, and the ones we imagine.",
    "I'm especially interested in directing because I love bringing different elements together — performance, visuals, sound, writing, and the little details that make a story feel real. I find myself constantly observing people, conversations, places, and emotions, wondering how they could become part of a story.",
    "Cinema, to me, is more than just a medium; it's a room you can return to, interpret differently as you change. I want to create films that connect people, just like conversations do. I want my films to make people feel something, see something from a different perspective, or find a part of themselves within a story.",
    "My interest in filmmaking has grown through experimenting with short films, scripts, photography, theatre, and visual storytelling. This portfolio is a collection of that process — the stories I've created, the ideas I've explored, and the things I'm still learning as I find my voice as a filmmaker.",
  ],
  moreHref: "#about-full",
  photo: "/images/about-sara.jpg",
  photoAlt: "Sara laughing, a red rose held in her teeth",
} as const;

export const contact = {
  heading: "Get in touch",
  body: "Feel free to reach out for collaborations, questions or just to say hi.",
  note: "let's create something\nbeautiful",
} as const;
