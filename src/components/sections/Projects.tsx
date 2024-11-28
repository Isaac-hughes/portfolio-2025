import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Circle Club",
    description: "Full-stack MVP with advanced third-party API integrations.",
    tags: ["React", "Node.js", "MongoDB", "API Integration"],
    link: "#",
    image: "/circle-club.svg",
  },
  // Add more projects as needed
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-foreground/[0.02]">
      <Container>
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
