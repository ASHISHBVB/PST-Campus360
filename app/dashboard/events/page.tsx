import type { Metadata } from "next"
import { EventsOverview } from "@/components/dashboard/events/events-overview"

export const metadata: Metadata = {
  title: "Events | Campus Management System",
  description: "Manage campus events and registrations",
}

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Event Management</h1>
        <p className="text-muted-foreground">
          Create and manage campus events, track registrations, and send notifications.
        </p>
      </div>
      <EventsOverview />
    </div>
  )
}
