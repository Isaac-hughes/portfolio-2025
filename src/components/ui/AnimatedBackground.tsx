"use client";

import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0 transition-all duration-[1500ms] ease-out bg-gradient-to-br from-accent-primary/10 via-background to-accent-secondary/10"
        style={
          !isMobile
            ? {
                backgroundImage: `radial-gradient(
                  circle at ${mousePosition.x}% ${mousePosition.y}%,
                  var(--accent-primary) 0%,
                  transparent 25%,
                  transparent 50%
                )`,
                opacity: 0.3,
              }
            : undefined
        }
      />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--foreground) 1px, transparent 1px),
            linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
