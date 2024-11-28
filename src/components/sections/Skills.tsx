import { Container } from "@/components/ui/Container";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Jest", "Webpack", "Docker"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-foreground/80"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-primary mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
