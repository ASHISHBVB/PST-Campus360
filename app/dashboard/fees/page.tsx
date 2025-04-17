import type { Metadata } from "next"
import { FeesOverview } from "@/components/dashboard/fees/fees-overview"

export const metadata: Metadata = {
  title: "Fees | Campus Management System",
  description: "Manage fee payments and records",
}

export default function FeesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Fee Management</h1>
        <p className="text-muted-foreground">Track fee payments, manage records, and process transactions.</p>
      </div>
      <FeesOverview />
    </div>
  )
}
