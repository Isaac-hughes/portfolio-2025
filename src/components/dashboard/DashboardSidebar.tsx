import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChartBarIcon,
  HomeIcon,
  NewspaperIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Overview", icon: HomeIcon, href: "#overview" },
  { name: "Charts", icon: ChartBarIcon, href: "#charts" },
  { name: "Watchlist", icon: StarIcon, href: "#watchlist" },
  { name: "News", icon: NewspaperIcon, href: "#news" },
  { name: "Profile", icon: UserIcon, href: "#profile" },
];

export function DashboardSidebar({
  isOpen,
  onClose,
}: Readonly<DashboardSidebarProps>) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-background border-r border-accent-primary/10 transform transition-transform duration-200 ease-in-out lg:transform-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-accent-primary/10">
          <span className="text-sm font-mono text-foreground/60">
            Navigation
          </span>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-accent-muted/10"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent-muted/10 transition-colors"
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
