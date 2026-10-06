import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*
 * The three faces are self-hosted rather than fetched from Google at build
 * time: the build then needs no network, which keeps it reproducible, and
 * the browser makes no third-party request to render the page.
 *
 * Each file is the latin subset of the variable font, so one file covers
 * every weight the design uses.
 */

/* Editorial serif — hero headline and film titles. */
const playfair = localFont({
  variable: "--font-playfair",
  display: "swap",
  src: [
    {
      path: "./fonts/playfair-display-latin.woff2",
      weight: "400 600",
      style: "normal",
    },
    {
      path: "./fonts/playfair-display-italic-latin.woff2",
      weight: "400 600",
      style: "italic",
    },
  ],
});

/* Utility face — navigation, eyebrows, body copy. */
const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    {
      path: "./fonts/inter-latin.woff2",
      weight: "300 500",
      style: "normal",
    },
  ],
});

/* The gold handwriting: wordmark and margin annotations. */
const dancing = localFont({
  variable: "--font-dancing",
  display: "swap",
  src: [
    {
      path: "./fonts/dancing-script-latin.woff2",
      weight: "400 600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Sara Dhandore — Filmmaker & Director",
  description:
    "Films, writing and photography by Sara Dhandore. Stories in motion — real, raw and a little bit dreamlike.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {children}
      </body>
    </html>
  );
}
