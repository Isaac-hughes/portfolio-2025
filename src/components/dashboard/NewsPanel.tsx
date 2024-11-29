"use client";

import { useQuery } from "@tanstack/react-query";

interface NewsPanelProps {
  symbol: string;
}

export function NewsPanel({ symbol }: Readonly<NewsPanelProps>) {
  const { data, isLoading } = useQuery({
    queryKey: ["news", symbol],
    queryFn: async () => {
      // Implement API call here
      return [
        {
          id: 1,
          title: `Latest news for ${symbol}`,
          source: "Financial Times",
          time: "2h ago",
          url: "#",
        },
        // Add more mock news items
      ];
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-4">Latest News</h2>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-24 animate-pulse bg-accent-muted/5 rounded-lg"
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Latest News</h2>
      <div className="space-y-4">
        {data?.map((news) => (
          <a
            key={news.id}
            href={news.url}
            className="block p-4 rounded-lg hover:bg-accent-muted/10 transition-colors"
          >
            <h3 className="font-medium mb-2">{news.title}</h3>
            <div className="flex items-center text-sm text-foreground/60">
              <span>{news.source}</span>
              <span className="mx-2">•</span>
              <span>{news.time}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
