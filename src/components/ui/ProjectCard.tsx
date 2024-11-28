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
    <div className="group relative rounded-lg overflow-hidden border border-accent-primary/10 bg-accent-muted/5 hover:bg-accent-muted/10 transition-all duration-300">
      {/* Project Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-fit transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-primary/20 text-accent-primary">
              {status}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-accent-primary">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground/60 mb-2">
            Key Features:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-foreground/70"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-primary/60 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-accent-primary/10 text-accent-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <div className="mt-4">
            <a
              href={link}
              className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <svg
                className="w-4 h-4"
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
