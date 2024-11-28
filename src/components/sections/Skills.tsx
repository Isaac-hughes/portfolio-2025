"use client";

import { Container } from "@/components/ui/Container";

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and user-friendly interfaces",
    skills: [
      {
        name: "React & Next.js",
        description:
          "Building scalable SPAs and SSR applications with advanced state management, hooks, and performance optimisation",
      },
      {
        name: "TypeScript",
        description:
          "Ensuring robust, type-safe development with generics, utility types, and advanced programming patterns",
      },
      {
        name: "Tailwind CSS",
        description:
          "Crafting responsive, mobile-first designs with utility-first CSS and custom theme extensions",
      },
      {
        name: "Angular",
        description:
          "Developing enterprise-grade web applications with a strong focus on modular architecture and RxJS",
      },
      {
        name: "Framer Motion",
        description:
          "Implementing fluid animations and transitions to enhance user experience",
      },
      {
        name: "Accessibility (WCAG)",
        description:
          "Designing interfaces compliant with WCAG standards for inclusive user experiences",
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Creating secure, robust, and high-performance server solutions",
    skills: [
      {
        name: "Node.js",
        description:
          "Developing RESTful APIs, microservices, and real-time applications using WebSockets",
      },
      {
        name: "MongoDB",
        description:
          "Designing efficient schemas, leveraging aggregation pipelines, and indexing for performance",
      },
      {
        name: "GraphQL",
        description:
          "Building flexible APIs with efficient schema design, query optimisation, and resolver implementation",
      },
      {
        name: "AWS Services",
        description:
          "Leveraging cloud infrastructure for scalable, serverless architectures using Lambda, S3, and DynamoDB",
      },
      {
        name: "Stripe API",
        description:
          "Integrating secure payment gateways with subscription management and webhook handling",
      },
      {
        name: "Authentication",
        description:
          "Implementing secure OAuth and JWT-based authentication solutions",
      },
    ],
  },
  {
    title: "Development Tools",
    description:
      "Streamlining development workflows with modern tools and practices",
    skills: [
      {
        name: "Git & GitHub",
        description:
          "Collaborative version control with advanced branching and CI/CD integration",
      },
      {
        name: "Testing",
        description:
          "Comprehensive unit, integration, and E2E testing with Jest, Vitest, and Cypress",
      },
      {
        name: "Docker",
        description:
          "Streamlining development and deployment with containerisation and multi-stage builds",
      },
      {
        name: "CI/CD",
        description:
          "Automating testing, linting, and deployment pipelines using GitHub Actions and Jenkins",
      },
      {
        name: "SonarCloud",
        description:
          "Static code analysis for maintaining high code quality and security standards",
      },
      {
        name: "Prettier & ESLint",
        description:
          "Enforcing consistent code formatting and linting to maintain clean codebases",
      },
      {
        name: "Figma",
        description:
          "Collaborating on UI/UX designs with pixel-perfect implementation",
      },
    ],
  },
  {
    title: "Soft Skills",
    description: "Enhancing collaboration and delivering value-driven results",
    skills: [
      {
        name: "Agile Methodologies",
        description:
          "Driving iterative development through sprints, stand-ups, and retrospectives",
      },
      {
        name: "Cross-Functional Collaboration",
        description:
          "Communicating effectively across teams to deliver cohesive, user-centric solutions",
      },
      {
        name: "Stakeholder Engagement",
        description:
          "Gathering feedback and aligning technical deliverables with business goals",
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
