import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-0">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
