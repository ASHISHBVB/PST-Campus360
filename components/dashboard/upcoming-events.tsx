"use client"

import { format } from "date-fns"
import { Calendar } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: 1,
    title: "Faculty Meeting",
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1), // Tomorrow
    location: "Conference Room A",
    type: "meeting",
  },
  {
    id: 2,
    title: "Freshman Orientation",
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // Day after tomorrow
    location: "Main Auditorium",
    type: "orientation",
  },
  {
    id: 3,
    title: "Science Exhibition",
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days from now
    location: "Science Block",
    type: "exhibition",
  },
  {
    id: 4,
    title: "Annual Sports Day",
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // 5 days from now
    location: "Sports Complex",
    type: "sports",
  },
]

export function UpcomingEvents() {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex flex-col space-y-2 rounded-md border p-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h4 className="font-medium">{event.title}</h4>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                {format(event.date, "EEEE, MMMM d")}
              </div>
              <p className="text-xs text-muted-foreground">{event.location}</p>
            </div>
            <div
              className={cn(
                "rounded-full px-2 py-1 text-xs font-medium",
                event.type === "meeting" && "bg-blue-100 text-blue-800",
                event.type === "orientation" && "bg-green-100 text-green-800",
                event.type === "exhibition" && "bg-purple-100 text-purple-800",
                event.type === "sports" && "bg-orange-100 text-orange-800",
              )}
            >
              {event.type}
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            View Details
          </Button>
        </div>
      ))}
    </div>
  )
}
