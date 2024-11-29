"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { MarketOverview } from "./MarketOverview";
import { StockChart } from "./StockChart";
import { WatchList } from "./WatchList";
import { NewsPanel } from "./NewsPanel";
import { UserProfile } from "./UserProfile";
import { BackBanner } from "./BackBanner";
import { MarketSentiment } from "./MarketSentiment";
import { ApiStatusBanner } from "./ApiStatusBanner";

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState("AAPL");

  return (
    <div className="min-h-screen bg-background">
      <BackBanner />
      <ApiStatusBanner />
      <DashboardHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex h-[calc(100vh-8rem)]">
        <DashboardSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 overflow-auto">
          <Container className="py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <MarketOverview />

                <div className="bg-accent-muted/5 rounded-xl p-6 border border-accent-primary/10">
                  <StockChart symbol={selectedSymbol} />
                </div>

                <div className="bg-accent-muted/5 rounded-xl p-6 border border-accent-primary/10">
                  <WatchList
                    onSymbolSelect={setSelectedSymbol}
                    selectedSymbol={selectedSymbol}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-accent-muted/5 rounded-xl p-6 border border-accent-primary/10">
                  <UserProfile />
                </div>

                <div className="bg-accent-muted/5 rounded-xl p-6 border border-accent-primary/10">
                  <h2 className="text-xl font-bold mb-4">Market Sentiment</h2>
                  <MarketSentiment />
                </div>

                <div className="bg-accent-muted/5 rounded-xl p-6 border border-accent-primary/10">
                  <NewsPanel symbol={selectedSymbol} />
                </div>
              </div>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}
