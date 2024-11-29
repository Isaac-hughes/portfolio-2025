export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Header Skeleton */}
      <div className="h-16 bg-accent-muted/5 border-b border-accent-primary/10">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="w-32 h-8 bg-accent-primary/10 rounded" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Overview Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-24 bg-accent-muted/5 rounded-xl border border-accent-primary/10"
                />
              ))}
            </div>

            {/* Chart Skeleton */}
            <div className="h-[400px] bg-accent-muted/5 rounded-xl border border-accent-primary/10">
              <div className="h-full flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-accent-primary/20 border-t-accent-primary rounded-full animate-spin" />
              </div>
            </div>

            {/* Watchlist Skeleton */}
            <div className="bg-accent-muted/5 rounded-xl border border-accent-primary/10 p-6 space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-accent-primary/10 rounded-lg" />
              ))}
            </div>
          </div>

          {/* Right Column Skeleton */}
          <div className="space-y-6">
            {/* User Profile Skeleton */}
            <div className="bg-accent-muted/5 rounded-xl border border-accent-primary/10 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-accent-primary/10 rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-24 bg-accent-primary/10 rounded" />
                  <div className="h-3 w-32 bg-accent-primary/10 rounded" />
                </div>
              </div>
            </div>

            {/* News Panel Skeleton */}
            <div className="bg-accent-muted/5 rounded-xl border border-accent-primary/10 p-6 space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-3/4 bg-accent-primary/10 rounded" />
                  <div className="h-3 w-1/2 bg-accent-primary/10 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
