import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { ShortFilm } from "@/components/sections/ShortFilm";
import { Experimental } from "@/components/sections/Experimental";
import { Writing } from "@/components/sections/Writing";
import { Photography } from "@/components/sections/Photography";
import { MovingImage } from "@/components/sections/MovingImage";
import { AboutMe } from "@/components/sections/AboutMe";

/**
 * The portfolio is a single ordered walk: the featured film first, then the
 * shorter experiments, writing, stills, the reel, and finally Sara herself.
 *
 * The two paired rows are edge-to-edge grids with no gutter between cells —
 * the colour blocks butt directly against each other, which is what gives
 * the page its collaged, printed-page feel.
 */
export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />

        {/* 01 / 02 — films */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ShortFilm />
          </div>
          <div className="lg:col-span-5">
            <Experimental />
          </div>
        </div>

        {/* 03 / 04 — writing and stills */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Writing />
          </div>
          <div className="lg:col-span-7">
            <Photography />
          </div>
        </div>

        <MovingImage />
        <AboutMe />
      </main>

      <Footer />
    </>
  );
}
