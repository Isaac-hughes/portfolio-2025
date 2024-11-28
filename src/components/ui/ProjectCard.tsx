interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link,
}: Readonly<ProjectCardProps>) {
  return (
    <div className="group relative rounded-lg overflow-hidden bg-foreground/5 hover:bg-foreground/10 transition-colors">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/60 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-accent-primary/10 text-accent-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {link && (
        <a
          href={link}
          className="absolute inset-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} project`}
        />
      )}
    </div>
  );
}
