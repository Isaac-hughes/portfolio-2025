"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";

export function ApiStatusBanner() {
  const { data: apiStatus } = useQuery({
    queryKey: ["api-status"],
    queryFn: async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`
      );
      const data = await response.json();
      return !data.Information?.includes("API rate limit");
    },
    staleTime: 60000, // 1 minute
  });

  return (
    <div className="bg-accent-primary/5 border-b border-accent-primary/10 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-foreground/70">
          <InformationCircleIcon className="h-5 w-5 text-accent-primary" />
          <div>
            <span>
              This dashboard uses the Alpha Vantage API for real-time market
              data.{" "}
            </span>
            {apiStatus === false && (
              <span className="text-yellow-500">
                API rate limit reached - displaying randomly generated mock
                data.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
