import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface WorkExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const workHistory: WorkExperienceProps[] = [
  {
    title: "Founder & CEO/CTO",
    company: "Circle Club",
    period: "July 2024 – Present",
    description:
      "A tech startup connecting influencers with brands for partnership opportunities through an innovative platform.",
    achievements: [
      "Designed and developed a full-stack MVP using Next.js, Tailwind CSS, Node.js, MongoDB, and cloud services",
      "Integrated TikTok and Meta APIs for real-time social media account verification",
      "Implemented robust deployment pipeline using DigitalOcean and Vercel",
      "Architected peer-to-peer chat system with real-time features",
      "Developed strategies for improving domain rating and IP protection",
    ],
  },
  {
    title: "Frontend Developer (React)",
    company: "InHealth Intelligence",
    period: "March 2023 – October 2024",
    description:
      "Healthcare technology company specialising in patient management solutions for the NHS.",
    achievements: [
      "Developed patient management software using React and Next.js",
      "Maintained 90%+ test coverage using Jest, Vitest and React Testing Library",
      "Refactored projects to improve performance and scalability",
      "Organised knowledge-sharing events for remote teams",
      "Championed clean code practices and quality assurance",
    ],
  },
  {
    title: "Frontend Developer (Angular)",
    company: "ESign",
    period: "April 2021 – March 2023",
    description:
      "Digital signature platform offering secure, compliant document management solutions.",
    achievements: [
      "Led complete frontend rebuild from AngularJS to Angular v15",
      "Collaborated on platform rebranding and UX improvements",
      "Introduced agile methodologies including Scrum",
      "Developed custom tools for sales and product teams",
      "Provided technical support for API integration",
    ],
  },
];

function WorkExperience({
  title,
  company,
  period,
  description,
  achievements,
}: WorkExperienceProps) {
  return (
    <div className="relative group p-6 rounded-lg border border-accent-primary/10 bg-accent-muted/5 hover:bg-accent-muted/10 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

      <div className="relative">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-accent-primary">{title}</h3>
            <p className="text-lg font-semibold">{company}</p>
          </div>
          <span className="text-sm text-foreground/60 font-mono">{period}</span>
        </div>

        <p className="text-foreground/80 mb-4">{description}</p>

        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-primary/60 flex-shrink-0" />
              <span className="text-foreground/70">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="space-y-12">
          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p className="text-lg">
                  Experienced frontend developer with a proven track record in
                  building exceptional digital experiences. Specialized in
                  React, Next.js, and modern web technologies.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "MongoDB",
                    "AWS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-accent-primary/10 text-accent-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-accent-primary/20 rounded-lg -rotate-6 transform-gpu" />
              <div className="absolute inset-0 bg-accent-secondary/20 rounded-lg rotate-6 transform-gpu" />
              <div className="relative h-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/isaac.jpeg"
                  alt="Portrait photo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* Work History Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
            <div className="space-y-6">
              {workHistory.map((job, index) => (
                <WorkExperience key={index} {...job} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
