import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Doodle } from "@/components/ui/Doodle";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { blogs, scripts } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing — Sara Dhandore",
  description:
    "Screenplays and essays by Sara Dhandore — short film scripts and writing on cinema, cities and the stories we tell.",
};

/**
 * The writing index: scripts first, then blogs, each anchored so the links
 * in section 03 of the home page land on the right half of the page.
 */
export default function WritingIndex() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-blush">
        <div className="mx-auto w-full max-w-4xl px-[var(--space-gutter)] py-[var(--space-section)]">
          <p className="u-eyebrow text-cocoa-muted">Sara Dhandore</p>
          <h1 className="u-display mt-3 text-[length:clamp(2.5rem,1.6rem+3.4vw,4rem)] text-cocoa">
            Writing<span className="text-gold-deep">.</span>
          </h1>
          <Doodle kind="underline" className="mt-4 w-24" />

          <section id="scripts" className="mt-16 scroll-mt-28">
            <SectionLabel index="01" label="Scripts" onLight />

            <ul className="mt-8 divide-y divide-[var(--color-rule-light)] border-t border-[var(--color-rule-light)]">
              {scripts.map((script) => (
                <li key={script.slug}>
                  <Link
                    href={`/writing/${script.slug}`}
                    className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <span className="u-display text-[length:var(--text-title)] text-cocoa italic transition-colors duration-[var(--duration-normal)] group-hover:text-gold-deep sm:w-[38%] sm:shrink-0">
                      {script.title}
                    </span>

                    <span className="flex-1">
                      <span className="u-eyebrow block text-cocoa-muted">
                        {script.form}
                      </span>
                      <span className="mt-2 block max-w-[52ch] text-cocoa-muted">
                        {script.logline}
                      </span>
                    </span>

                    <span
                      aria-hidden
                      className="text-gold-deep transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section id="blogs" className="mt-20 scroll-mt-28">
            <SectionLabel index="02" label="Blogs" onLight />

            <ul className="mt-8 divide-y divide-[var(--color-rule-light)] border-t border-[var(--color-rule-light)]">
              {blogs.map((blog) => (
                <li key={blog.slug}>
                  <Link
                    href={`/writing/${blog.slug}`}
                    className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <span className="u-display text-[length:var(--text-title)] text-cocoa italic transition-colors duration-[var(--duration-normal)] group-hover:text-gold-deep sm:w-[38%] sm:shrink-0">
                      {blog.title}
                    </span>

                    <span className="mt-1 max-w-[52ch] flex-1 text-cocoa-muted">
                      {blog.standfirst}
                    </span>

                    <span
                      aria-hidden
                      className="text-gold-deep transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
