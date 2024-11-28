import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="py-8 border-t border-foreground/10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            Designed & Built by Isaac Hughes
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/isaac-hughes"
              className="text-foreground/60 hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/isaac-hughes-software-developer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
