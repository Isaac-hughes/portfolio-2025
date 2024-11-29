import Image from "next/image";

export function UserProfile() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 animate-pulse" />
          <div className="relative h-16 w-16 rounded-full overflow-hidden">
            <Image
              src={"/finance-dashboard/john-doe.jpg"}
              alt="User avatar"
              fill
              className="object-cover"
              priority
              sizes="64px"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
        </div>
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent-primary" />
            <p className="text-foreground/60">Premium Member</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-accent-muted/10">
          <div className="text-sm text-foreground/60 mb-1">Portfolio Value</div>
          <div className="text-2xl font-bold">$124,500.00</div>
          <div className="text-sm text-green-500">+2.5% today</div>
        </div>

        <div className="p-4 rounded-lg bg-accent-muted/10">
          <div className="text-sm text-foreground/60 mb-1">Watchlist Items</div>
          <div className="text-2xl font-bold">15</div>
        </div>

        <div className="p-4 rounded-lg bg-accent-muted/10">
          <div className="text-sm text-foreground/60 mb-1">Alerts Active</div>
          <div className="text-2xl font-bold">3</div>
        </div>
      </div>
    </div>
  );
}
