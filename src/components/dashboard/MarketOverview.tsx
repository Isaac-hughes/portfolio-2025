"use client";

import { useQuery } from "@tanstack/react-query";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import { useStockData } from "@/hooks/useStockData";

const marketIndices = [
  { symbol: "SPY", name: "S&P 500", description: "SPDR S&P 500 ETF Trust" },
  {
    symbol: "DIA",
    name: "Dow Jones",
    description: "SPDR Dow Jones Industrial Average ETF",
  },
  { symbol: "QQQ", name: "NASDAQ", description: "Invesco QQQ Trust" },
];

export function MarketOverview() {
  const spyData = useStockData("SPY");
  const diaData = useStockData("DIA");
  const qqqData = useStockData("QQQ");

  const queries = [
    { ...marketIndices[0], ...spyData },
    { ...marketIndices[1], ...diaData },
    { ...marketIndices[2], ...qqqData },
  ];

  const isLoading = queries.some((query) => query.isLoading);
  const error = queries.some((query) => query.error);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-[120px] animate-pulse bg-accent-muted/5 rounded-xl border border-accent-primary/10"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 rounded-lg bg-red-500/10">
        Error loading market data
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {queries.map((query) => {
        const stockData = query.data?.["Global Quote"];
        const price = parseFloat(stockData?.["05. price"] || "0").toFixed(2);
        const changePercent =
          stockData?.["10. change percent"]?.replace("%", "") || "0";
        const isPositive = !changePercent.includes("-");

        return (
          <div
            key={query.symbol}
            className="group h-[120px] p-5 rounded-xl border border-accent-primary/10 bg-accent-muted/5 hover:bg-accent-muted/10 hover:border-accent-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-1.5 min-w-0">
              <div className="text-base font-medium text-foreground/80 truncate group-hover:text-foreground/90">
                {query.name}
              </div>
              <div className="text-xs text-foreground/50 truncate group-hover:text-foreground/60">
                {query.description}
              </div>
            </div>
            <div className="flex items-end justify-between mt-auto">
              <div className="text-2xl font-semibold truncate">${price}</div>
              <div
                className={`flex items-center flex-shrink-0 ${
                  isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {isPositive ? (
                  <ArrowUpIcon className="h-4 w-4" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4" />
                )}
                <span className="ml-1 font-medium">{changePercent}%</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
