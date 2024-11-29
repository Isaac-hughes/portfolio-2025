import { Suspense } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example Finance Dashboard | Isaac Hughes Portfolio",
  description:
    "Interactive financial dashboard with real-time market data visualization",
};

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardLayout />
    </Suspense>
  );
}
