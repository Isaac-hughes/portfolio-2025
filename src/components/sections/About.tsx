import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                Frontend developer with a passion for building exceptional
                digital experiences. Currently focused on building responsive
                web applications with modern technologies.
              </p>
              <p>
                Founder of Circle Club, where I led the development of a
                full-stack MVP. Previously, I worked at InHealth Intelligence
                and E-Sign, where I contributed to large-scale React and Angular
                applications.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>BSc in Digital and Technology Solutions (In Progress)</li>
                <li>Level 4 Diploma in Software Development Methodologies</li>
              </ul>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-accent-primary/20 rounded-lg -rotate-6"></div>
            <div className="absolute inset-0 bg-accent-secondary/20 rounded-lg rotate-6"></div>
            <div className="relative h-full rounded-lg overflow-hidden">
              <Image
                src="/isaac.jpeg"
                alt="Portrait photo"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-foreground/5" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
