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
    <div className="p-4 rounded-lg bg-accent-muted/5 border border-accent-primary/10">
      <h4 className="text-lg font-semibold text-accent-primary mb-2">
        {skill.name}
      </h4>
      <p className="text-sm text-foreground/70">{skill.description}</p>
    </div>
  );
}

function SkillCategory({ category }: { category: SkillCategory }) {
  return (
    <div className="space-y-6">
      <div className="border-l-2 border-accent-primary/50 pl-4">
        <h3 className="text-xl font-bold text-accent-primary mb-2">
          {category.title}
        </h3>
        <p className="text-sm text-foreground/60">{category.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg text-foreground/70">
            A comprehensive overview of my technical skills across different
            areas of software development, focusing on modern web technologies
            and best practices.
          </p>
        </div>
        <div className="space-y-16">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
