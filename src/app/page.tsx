import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { ShortFilm } from "@/components/sections/ShortFilm";
import { Experimental } from "@/components/sections/Experimental";
import { Writing } from "@/components/sections/Writing";
import { Photography } from "@/components/sections/Photography";
import { AboutMe } from "@/components/sections/AboutMe";

/**
 * The portfolio is a single ordered walk: the featured film first, then the
 * shorter experiments, writing, stills, and finally Sara herself.
 *
 * The films row is an edge-to-edge grid with no gutter between cells — the
 * colour blocks butt directly against each other, which is what gives the
 * page its collaged, printed-page feel. Writing and photography each take a
 * full band of their own.
 */
export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />

        {/* 01 / 02 — films. The split follows the weight of each cell: while
            Everything has no poster it is a text block, so the two shorts —
            which carry a frame each — take the wider half. */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ShortFilm />
          </div>
          <div className="lg:col-span-7">
            <Experimental />
          </div>
        </div>

        {/* 03 — writing */}
        <Writing />

        {/* 04 — stills */}
        <Photography />

        <AboutMe />
      </main>

      <Footer />
    </>
  );
}
