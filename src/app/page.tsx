import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Leadership from "@/components/sections/Leadership";
import Awards from "@/components/sections/Awards";
import SiteLinks from "@/components/sections/SiteLinks";
import Contact from "@/components/sections/Contact";
import PortfolioBackdrop from "@/components/PortfolioBackdrop";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="portfolio-body relative isolate overflow-hidden">
        <PortfolioBackdrop />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Leadership />
        <Awards />
        <SiteLinks />
        <Contact />
      </div>
    </main>
  );
}
