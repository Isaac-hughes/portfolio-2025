interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  status: string;
  image?: string;
  link?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  features,
  status,
  image,
  link,
}: Readonly<ProjectCardProps>) {
  return (
    <div className="group relative rounded-lg overflow-hidden border border-accent-primary/10 bg-accent-muted/5 hover:bg-accent-muted/10 transition-all duration-300 shadow-lg flex flex-col h-full">
      {/* Project Image */}
      {image && (
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-fit transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono bg-accent-primary/20 text-accent-primary">
              {status}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-4 text-accent-primary group-hover:text-accent-secondary transition-colors">
          {title}
        </h3>
        <p className="text-foreground/70 mb-6 text-base leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-sm rounded-full bg-accent-primary/10 text-accent-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-foreground/60 mb-4">
            Key Features:
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-primary/60 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Link */}
        {link && (
          <div className="mt-auto pt-6 border-t border-accent-primary/10">
            <a
              href={link}
              className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <svg
                className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
