declare interface Project {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  status: string;
  image?: string;
  link?: string;
}

declare interface Skill {
  name: string;
  description: string;
}

declare interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

declare interface WorkExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

declare interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

declare interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

declare interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

declare interface FlipCharacterProps {
  char: string;
  delay: number;
}

declare interface Testimonial {
  author: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}
