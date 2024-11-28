import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Circle Club",
    description:
      "A full-stack platform connecting influencers with brands for partnership opportunities. Features include real-time chat, social media verification, and secure payment processing.",
    tags: ["Next.js", "Node.js", "MongoDB", "TikTok API", "Meta API", "AWS"],
    link: "#",
    image: "/circle-club-logo.svg",
    features: [
      "Real-time chat system with typing indicators",
      "Social media account verification",
      "Secure payment processing with Stripe",
      "Cloud storage integration with AWS S3",
      "Responsive dashboard interface",
    ],
    status: "Completed 2024",
  },
  {
    title: "NHS Patient Portal",
    description:
      "A healthcare management system built for InHealth Intelligence, enabling patients to access screening results and manage appointments efficiently.",
    tags: ["React", "Next.js", "TypeScript", "Jest", "REST API"],
    link: "#",
    image: "/nhs-portal.png",
    features: [
      "Secure patient authentication",
      "Appointment scheduling system",
      "Test results viewer",
      "Automated notifications",
      "Accessibility compliance",
    ],
    status: "Production",
  },
  // Add more projects as needed
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            A selection of projects I&apos;ve worked on, showcasing my expertise
            in full-stack development and modern web technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
