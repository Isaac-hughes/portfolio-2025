import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export function DashboardHeader({
  onMenuClick,
}: Readonly<DashboardHeaderProps>) {
  return (
    <header className="h-16 border-b border-accent-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg hover:bg-accent-muted/10"
              aria-label="Toggle menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Example Stocks Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-lg hover:bg-accent-muted/10 relative"
              aria-label="Notifications"
            >
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <div className="h-8 w-8 rounded-full bg-accent-primary/10" />
          </div>
        </div>
      </Container>
    </header>
  );
}
