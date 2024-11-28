import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center z-10">
      <Container className="py-20">
        <div className="max-w-3xl">
          <h1 className="animate-fadeDown text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            Isaac Hughes | Full Stack Developer
          </h1>
          <p className="animate-fadeUp delay-200 text-xl sm:text-2xl text-foreground/80 mb-8 font-mono">
            Building exceptional digital experiences with clean, efficient code.
          </p>
          <div className="animate-fadeUp delay-300 flex gap-4 flex-wrap">
            <Button
              variant="primary"
              size="lg"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
