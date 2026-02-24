import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Organizations from "@/components/Organizations";
import WorkshopGallery from "@/components/WorkshopGallery";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0F0F0F]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Organizations />
      <WorkshopGallery />
      <Certificates />
      <Contact />
    </main>
  );
}