"use client";

import { useEffect, useRef } from "react";
import { Chart } from "chart.js";

export function MarketSentiment() {
  const gaugeRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = gaugeRef.current?.getContext("2d");
    if (!ctx) return;

    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [75, 25],
            backgroundColor: [
              "rgba(252, 211, 77, 0.8)",
              "rgba(252, 211, 77, 0.1)",
            ],
            circumference: 180,
            rotation: 270,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: "80%",
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false },
        },
      },
    });
  }, []);

  return (
    <div className="relative p-4 bg-gradient-to-b from-accent-muted/10 to-transparent rounded-xl">
      <canvas ref={gaugeRef} className="max-h-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-400 tracking-tight">
            75%
          </div>
          <div className="text-sm font-medium text-foreground/60">Bullish</div>
        </div>
      </div>
    </div>
  );
}
