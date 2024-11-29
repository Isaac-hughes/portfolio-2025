"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { useQuery } from "@tanstack/react-query";

Chart.register(...registerables);

interface StockChartProps {
  symbol: string;
}

const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

const generateMockPriceData = (basePrice: number, days: number) => {
  const data = [];
  let currentPrice = basePrice;

  for (let i = 0; i < days; i++) {
    // Generate a random price change between -2% and +2%
    const change = currentPrice * (Math.random() * 0.04 - 0.02);
    currentPrice += change;
    data.push(currentPrice);
  }

  return data;
};

const generateMockChartData = (symbol: string) => {
  const basePrice = 100 + Math.random() * 900; // Random base price between 100 and 1000
  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return date.toLocaleDateString();
  });

  return {
    labels: dates,
    prices: generateMockPriceData(basePrice, 30),
  };
};

interface TimeSeriesData {
  "Time Series (Daily)": {
    [key: string]: {
      "4. close": string;
      [key: string]: string;
    };
  };
}

export function StockChart({ symbol }: Readonly<StockChartProps>) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["stock-chart", symbol],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
        );
        const data = await response.json();

        // Check for API limit message
        if (data.Information?.includes("API rate limit")) {
          console.warn("API limit reached, using mock chart data");
          return generateMockChartData(symbol);
        }

        if (data["Error Message"]) {
          throw new Error(data["Error Message"]);
        }

        const timeSeriesData = (data as TimeSeriesData)["Time Series (Daily)"];
        if (!timeSeriesData) {
          throw new Error("No data available");
        }

        // Convert the data into arrays for the chart
        const entries = Object.entries(timeSeriesData);
        const last30Entries = entries.slice(0, 30).reverse();

        return {
          labels: last30Entries.map(([date]) =>
            new Date(date).toLocaleDateString()
          ),
          prices: last30Entries.map(([_, values]) =>
            Number(values["4. close"])
          ),
        };
      } catch (error) {
        console.warn("Error fetching chart data, using mock data");
        return generateMockChartData(symbol);
      }
    },
    staleTime: 60000,
    retry: 2,
  });

  useEffect(() => {
    if (!chartRef.current || !data) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: symbol,
            data: data.prices,
            borderColor: "rgb(252, 211, 77)",
            backgroundColor: "rgba(252, 211, 77, 0.1)",
            fill: true,
            tension: 0.4,
            pointRadius: 0, // Hide points
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => `$${context.parsed.y}`,
            },
          },
        },
        scales: {
          y: {
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              callback: (value) => `$${value}`,
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              maxRotation: 45,
              minRotation: 45,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, symbol]);

  if (isLoading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-accent-primary/20 border-t-accent-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{symbol} Stock Price</h2>
        <div className="text-sm text-foreground/60">Last 30 Days</div>
      </div>
      <div className="h-[400px] relative bg-gradient-to-b from-accent-muted/5 to-transparent rounded-lg">
        <canvas ref={chartRef} className="p-2" />
      </div>
    </div>
  );
}
