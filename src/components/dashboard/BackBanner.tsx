import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function BackBanner() {
  return (
    <div className="bg-accent-primary/10 border-b border-accent-primary/20">
      <Container>
        <Link
          href="/"
          className="flex items-center gap-2 py-2 text-sm hover:text-accent-primary transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </Container>
    </div>
  );
}
