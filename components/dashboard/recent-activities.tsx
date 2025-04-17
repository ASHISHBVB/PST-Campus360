"use client"

import { formatDistanceToNow } from "date-fns"
import { BookOpen, Calendar, CreditCard, FileText, UserPlus } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "attendance",
    description: "Attendance marked for Computer Science class",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    icon: FileText,
  },
  {
    id: 2,
    type: "fee",
    description: "Fee payment received from John Doe",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    icon: CreditCard,
  },
  {
    id: 3,
    type: "event",
    description: "New event created: Annual Tech Symposium",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    icon: Calendar,
  },
  {
    id: 4,
    type: "student",
    description: "New student registered: Sarah Johnson",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    icon: UserPlus,
  },
  {
    id: 5,
    type: "course",
    description: "New course added: Advanced Machine Learning",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    icon: BookOpen,
  },
]

export function RecentActivities() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
            <activity.icon className="h-5 w-5" />
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{activity.description}</p>
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
