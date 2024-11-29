import { useQuery } from "@tanstack/react-query";
import { AlphaVantageService } from "@/services/alphaVantage";

export function useStockData(symbol: string) {
  return useQuery({
    queryKey: ["stock", symbol],
    queryFn: () => AlphaVantageService.getQuote(symbol),
    staleTime: 60000, // 1 minute
    retry: 2,
  });
}
