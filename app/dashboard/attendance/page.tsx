import type { Metadata } from "next"
import { AttendanceOverview } from "@/components/dashboard/attendance/attendance-overview"

export const metadata: Metadata = {
  title: "Attendance | Campus Management System",
  description: "Track and manage attendance records",
}

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Attendance Tracking</h1>
        <p className="text-muted-foreground">Mark attendance, generate reports, and analyze attendance trends.</p>
      </div>
      <AttendanceOverview />
    </div>
  )
}
