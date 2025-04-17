"use client"

import { useState } from "react"
import { Download, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const students = [
  {
    id: "STU001",
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Computer Science",
    year: "3rd Year",
    status: "Active",
  },
  {
    id: "STU002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    department: "Electrical Engineering",
    year: "2nd Year",
    status: "Active",
  },
  {
    id: "STU003",
    name: "Michael Johnson",
    email: "michael.j@example.com",
    department: "Mechanical Engineering",
    year: "4th Year",
    status: "Active",
  },
  {
    id: "STU004",
    name: "Emily Brown",
    email: "emily.b@example.com",
    department: "Business Administration",
    year: "1st Year",
    status: "Active",
  },
  {
    id: "STU005",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    department: "Physics",
    year: "3rd Year",
    status: "Inactive",
  },
  {
    id: "STU006",
    name: "Sarah Davis",
    email: "sarah.d@example.com",
    department: "Chemistry",
    year: "2nd Year",
    status: "Active",
  },
  {
    id: "STU007",
    name: "David Miller",
    email: "david.m@example.com",
    department: "Mathematics",
    year: "4th Year",
    status: "Active",
  },
  {
    id: "STU008",
    name: "Jennifer Taylor",
    email: "jennifer.t@example.com",
    department: "Arts",
    year: "1st Year",
    status: "Active",
  },
]

export function StudentsTable() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.department.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center gap-2 sm:max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            className="h-9 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline-block">Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline-block">Export</span>
          </Button>
          <Button size="sm" className="h-9 gap-1">
            <Plus className="h-4 w-4" />
            <span>Add Student</span>
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[60px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell>{student.year}</TableCell>
                  <TableCell>
                    <Badge variant={student.status === "Active" ? "default" : "secondary"}>{student.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit student</DropdownMenuItem>
                        <DropdownMenuItem>Delete student</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No students found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
