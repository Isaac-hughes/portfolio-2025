import { z } from "zod";

const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

const MOCK_DATA: StockData = {
  "Global Quote": {
    "01. symbol": "MOCK",
    "02. open": "150.23",
    "03. high": "152.45",
    "04. low": "149.87",
    "05. price": "151.34",
    "06. volume": "1000000",
    "07. latest trading day": new Date().toISOString().split("T")[0],
    "08. previous close": "150.01",
    "09. change": "1.33",
    "10. change percent": "0.89%",
  },
};

export const StockDataSchema = z.object({
  "Global Quote": z.object({
    "01. symbol": z.string(),
    "02. open": z.string(),
    "03. high": z.string(),
    "04. low": z.string(),
    "05. price": z.string(),
    "06. volume": z.string(),
    "07. latest trading day": z.string(),
    "08. previous close": z.string(),
    "09. change": z.string(),
    "10. change percent": z.string(),
  }),
});

export type StockData = z.infer<typeof StockDataSchema>;

export class AlphaVantageService {
  static async getQuote(symbol: string): Promise<StockData> {
    try {
      const response = await fetch(
        `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Check for API limit message
      if (data.Information?.includes("API rate limit")) {
        console.warn("API limit reached, using mock data");
        return {
          "Global Quote": {
            ...MOCK_DATA["Global Quote"],
            "01. symbol": symbol,
            "05. price": (Math.random() * 1000).toFixed(2),
            "09. change": (Math.random() * 10 - 5).toFixed(2),
            "10. change percent": `${(Math.random() * 5 - 2.5).toFixed(2)}%`,
          },
        };
      }

      return StockDataSchema.parse(data);
    } catch (error) {
      console.error("Error fetching stock data:", error);
      // Return mock data as fallback
      return {
        "Global Quote": {
          ...MOCK_DATA["Global Quote"],
          "01. symbol": symbol,
          "05. price": (Math.random() * 1000).toFixed(2),
          "09. change": (Math.random() * 10 - 5).toFixed(2),
          "10. change percent": `${(Math.random() * 5 - 2.5).toFixed(2)}%`,
        },
      };
    }
  }
}
