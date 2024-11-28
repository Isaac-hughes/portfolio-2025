import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FlipBoard } from "@/components/ui/FlipBoard";

export function Hero() {
  const mainInfo = ["ISAAC HUGHES | DEVELOPER"];
  const roles = [
    "FULL STACK ENGINEER",
    "REACT SPECIALIST",
    "NEXT.JS PROJECT BUILDER",
    "NODE API FABRICATOR",
    "MONGODB ARCHITECT",
    "TYPESCRIPT ENTHUSIAST",
    "UI/UX DEVISOR",
  ];

  return (
    <section className="min-h-screen flex items-center z-10 bg-background/95">
      <Container className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border border-border/50 bg-black/20 backdrop-blur-sm p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
              <div className="text-sm font-mono text-foreground/60">
                PORTFOLIO WEBSITE: 2024
              </div>
              <div className="text-sm font-mono text-foreground/60">
                AVAILABLE: TRUE
              </div>
            </div>

            {/* Main Display */}
            <div className="space-y-6">
              <FlipBoard
                messages={mainInfo}
                className="text-2xl sm:text-4xl font-bold text-yellow-300/90 tracking-wider"
                interval={10000}
              />

              <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent my-6" />

              <FlipBoard
                messages={roles}
                className="text-lg sm:text-2xl text-green-400/90 tracking-wide"
                interval={3000}
              />

              <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent my-6" />

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-yellow-600/90 hover:bg-yellow-500/90 text-black font-mono uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
                >
                  → View Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-600/50 text-yellow-300/90 hover:bg-yellow-600/20 font-mono uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
                >
                  → Contact Info
                </Button>
              </div>
            </div>

            {/* Board Footer */}
            <div className="mt-8 pt-4 border-t border-border/50 flex justify-between text-xs font-mono text-foreground/60">
              <div>UPDATED: {new Date().toLocaleTimeString()}</div>
              <div>SCROLL FOR MORE INFORMATION ↓</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
