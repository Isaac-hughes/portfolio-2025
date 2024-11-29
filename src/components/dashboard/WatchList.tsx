"use client";

import { useQuery } from "@tanstack/react-query";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import { useStockData } from "@/hooks/useStockData";

interface WatchListProps {
  selectedSymbol: string;
  onSymbolSelect: (symbol: string) => void;
}

const watchlistStocks = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "AMZN", name: "Amazon.com Inc." },
  { symbol: "META", name: "Meta Platforms Inc." },
];

export function WatchList({
  selectedSymbol,
  onSymbolSelect,
}: Readonly<WatchListProps>) {
  // Create individual hooks for each stock
  const aaplData = useStockData("AAPL");
  const msftData = useStockData("MSFT");
  const googlData = useStockData("GOOGL");
  const amznData = useStockData("AMZN");
  const metaData = useStockData("META");

  // Combine the data
  const queries = [
    { ...watchlistStocks[0], ...aaplData },
    { ...watchlistStocks[1], ...msftData },
    { ...watchlistStocks[2], ...googlData },
    { ...watchlistStocks[3], ...amznData },
    { ...watchlistStocks[4], ...metaData },
  ];

  const isLoading = queries.some((query) => query.isLoading);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-4">Watchlist</h2>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-16 animate-pulse bg-accent-muted/5 rounded-lg"
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Watchlist</h2>
      <div className="space-y-2.5">
        {queries.map((query) => {
          const stockData = query.data?.["Global Quote"];
          const price = parseFloat(stockData?.["05. price"] || "0").toFixed(2);
          const changePercent =
            stockData?.["10. change percent"]?.replace("%", "") || "0";
          const isPositive = !changePercent.includes("-");

          return (
            <button
              key={query.symbol}
              onClick={() => onSymbolSelect(query.symbol)}
              className={`w-full p-4 rounded-lg transition-all duration-300 border ${
                selectedSymbol === query.symbol
                  ? "bg-accent-primary/15 border-accent-primary/20 shadow-md scale-[1.02]"
                  : "border-transparent hover:bg-accent-muted/10 hover:border-accent-primary/10 hover:shadow-sm hover:scale-[1.01]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-left">{query.symbol}</div>
                  <div className="text-sm text-foreground/60 text-left">
                    {query.name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${price}</div>
                  <div
                    className={`flex items-center justify-end text-sm ${
                      isPositive ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {isPositive ? (
                      <ArrowUpIcon className="h-4 w-4" />
                    ) : (
                      <ArrowDownIcon className="h-4 w-4" />
                    )}
                    <span className="ml-1">{changePercent}%</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
