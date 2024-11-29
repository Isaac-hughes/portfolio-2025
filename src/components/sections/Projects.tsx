import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Circle Club",
    description:
      "A full-stack platform designed to connect influencers with brands for seamless partnership opportunities. The platform boasts innovative features like real-time messaging, social media integration, and secure payment processing, ensuring a streamlined and user-friendly experience for all stakeholders.",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "TikTok API",
      "Meta API",
      "AWS",
      "Stripe",
      "Tailwind CSS",
      "TypeScript",
    ],
    link: "https://circleclub.network",
    image: "/circle-club-logo.svg",
    features: [
      "Real-time messaging with typing indicators and read receipts",
      "OAuth-powered social media account verification with TikTok and Meta APIs",
      "Escrow-based secure payment processing using Stripe",
      "Cloud storage integration for user assets with AWS S3",
      "Responsive, mobile-friendly dashboard for brands and influencers",
      "Interactive niche and industry selection tools",
      "In-app notifications for updates and partnership progress",
      "Daily email notifications for unread messages",
      "Role-specific user profiles tailored for influencers and businesses",
      "Advanced search and filtering for partnerships",
      "Dynamic subscription management with Stripe webhooks",
      "WCAG-compliant design for accessibility",
      "SEO optimised architecture for increased discoverability",
    ],
    status: "MVP Completed 2024",
  },
  {
    title: "Example Stocks Dashboard",
    description:
      "An interactive financial dashboard built with modern web technologies, featuring real-time market data visualization, watchlist management, and responsive design. Integrates with the Alpha Vantage API for live stock data and includes fallback mock data generation for demo purposes.",
    tags: [
      "Next.js",
      "TypeScript",
      "Chart.js",
      "TanStack Query",
      "Tailwind CSS",
      "Alpha Vantage API",
      "Zod",
      "React",
    ],
    link: "/finance-dashboard",
    image: "/finance-dashboard/finpal.png",
    features: [
      "Real-time stock price tracking with Alpha Vantage API integration",
      "Interactive price charts with Chart.js visualization",
      "Customizable watchlist with quick stock selection",
      "Market overview showing major indices performance",
      "Responsive layout adapting to all screen sizes",
      "Elegant loading states and error handling",
      "Mock data generation for demo purposes",
      "Type-safe data handling with Zod schemas",
      "Efficient data caching with TanStack Query",
      "Market sentiment visualization",
      "Latest stock news integration",
      "Clean, modern UI with dark mode support",
      "Animated transitions and micro-interactions",
    ],
    status: "Demo Project 2024",
  },
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
