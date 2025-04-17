import type { Metadata } from "next"
import { StudentsTable } from "@/components/dashboard/students/students-table"

export const metadata: Metadata = {
  title: "Students | Campus Management System",
  description: "Manage student profiles and information",
}

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Students</h1>
        <p className="text-muted-foreground">Manage student profiles, view details, and track progress.</p>
      </div>
      <StudentsTable />
    </div>
  )
}
