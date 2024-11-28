import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FlipBoard } from "@/components/ui/FlipBoard";

export function Hero() {
  const mainInfo = ["ISAAC HUGHES | DEVELOPER"];
  const roles = [
    "FULL-STACK ENGINEER",
    "REACT EXPERT",
    "NEXT.JS ARCHITECT",
    "NODE.JS API DEVELOPER",
    "MONGODB STRATEGIST",
    "TYPESCRIPT ADVOCATE",
    "UI/UX DESIGNER",
    "PERFORMANCE OPTIMISER",
    "ACCESSIBILITY CHAMPION",
    "CLEAN CODE ENFORCER",
    "SOFTWARE SOLUTIONIST",
    "DEPLOYMENT STRATEGIST",
    "TESTING PERFECTIONIST",
    "FRONTEND INNOVATOR",
    "BACKEND INTEGRATOR",
    "WEB EXPERIENCE CREATOR",
    "DIGITAL SOLUTIONS ENGINEER",
    "AGILE COLLABORATOR",
    "API INTEGRATION MASTER",
    "SCALABLE SYSTEM DESIGNER",
  ];

  return (
    <section className="min-h-[90vh] flex items-center justify-center z-10 bg-background/95 px-4">
      <Container className="py-8 md:py-20">
        <div className="w-full max-w-4xl mx-auto">
          <div className="rounded-lg border border-border/50 bg-black/20 backdrop-blur-sm p-4 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
              <div className="text-xs sm:text-sm font-mono text-foreground/60">
                PORTFOLIO WEBSITE: 2024
              </div>
              <div className="text-xs sm:text-sm font-mono text-foreground/60">
                AVAILABLE: TRUE
              </div>
            </div>

            {/* Main Display */}
            <div className="space-y-4 md:space-y-6">
              <FlipBoard
                messages={mainInfo}
                className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-300/90 tracking-wider"
                interval={10000}
              />

              <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent my-4 md:my-6" />

              <FlipBoard
                messages={roles}
                className="text-base sm:text-lg md:text-2xl text-green-400/90 tracking-wide"
                interval={3000}
              />

              <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent my-4 md:my-6" />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a href="#projects">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto bg-yellow-600/90 hover:bg-yellow-500/90 text-black font-mono uppercase tracking-wider transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
                  >
                    → View Projects
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-yellow-600/50 text-yellow-300/90 hover:bg-yellow-600/20 font-mono uppercase tracking-wider transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
                  >
                    → Contact Info
                  </Button>
                </a>
              </div>
            </div>

            {/* Board Footer */}
            <div className="mt-6 md:mt-8 pt-4 border-t border-border/50 flex flex-col sm:flex-row justify-between text-[10px] sm:text-xs font-mono text-foreground/60 gap-2">
              <div>UPDATED: {new Date().toLocaleTimeString()}</div>
              <div>SCROLL FOR MORE INFORMATION ↓</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
