"use client";

import { Container } from "@/components/ui/Container";

interface Skill {
  name: string;
  description: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      {
        name: "React & Next.js",
        description:
          "Advanced state management, SSR, and performance optimisation",
      },
      {
        name: "TypeScript",
        description:
          "Type-safe development with advanced features and patterns",
      },
      {
        name: "Tailwind CSS",
        description: "Responsive design and custom component systems",
      },
      {
        name: "Angular",
        description: "Enterprise-level application development",
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server solutions",
    skills: [
      {
        name: "Node.js",
        description: "RESTful APIs and microservices architecture",
      },
      {
        name: "MongoDB",
        description: "Database design, optimisation, and aggregation pipelines",
      },
      {
        name: "GraphQL",
        description: "Schema design and efficient resolvers",
      },
      {
        name: "AWS Services",
        description: "Cloud infrastructure and serverless architecture",
      },
    ],
  },
  {
    title: "Development Tools",
    description: "Utilising modern development workflows",
    skills: [
      {
        name: "Git & GitHub",
        description: "Version control and collaborative development",
      },
      {
        name: "Testing",
        description: "Unit, integration, and E2E testing with Jest and Cypress",
      },
      {
        name: "Docker",
        description: "Containerization and deployment strategies",
      },
      {
        name: "CI/CD",
        description: "Automated testing and deployment pipelines",
      },
    ],
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="group p-6 rounded-lg bg-accent-muted/5 hover:bg-accent-muted/10 transition-all duration-300">
      <h4 className="text-lg font-semibold text-accent-primary group-hover:text-accent-secondary transition-colors mb-3">
        {skill.name}
      </h4>
      <p className="text-sm text-foreground/70 leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
}

function SkillCategory({ category }: { category: SkillCategory }) {
  return (
    <div className="relative p-8 rounded-xl border border-accent-primary/10">
      <div className="mb-8">
        <div className="inline-block">
          <h3 className="text-2xl font-bold text-accent-primary mb-3">
            {category.title}
          </h3>
          <div className="h-1 w-full bg-gradient-to-r from-accent-primary/50 to-accent-secondary/50 rounded-full" />
        </div>
        <p className="text-foreground/70 mt-4 max-w-3xl">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-xl -z-10" />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            A comprehensive overview of my technical skills across different
            areas of software development, focusing on modern web technologies
            and best practices.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
