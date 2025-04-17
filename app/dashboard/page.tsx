import type { Metadata } from "next"
import { DashboardOverview } from "@/components/dashboard/overview"

export const metadata: Metadata = {
  title: "Dashboard | Campus Management System",
  description: "Overview of campus activities and metrics",
}

export default function DashboardPage() {
  return <DashboardOverview />
}
