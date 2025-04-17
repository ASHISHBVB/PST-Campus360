"use client"

import { useState } from "react"
import { CalendarIcon, Download, Filter, Plus, Search } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    id: "EVT001",
    title: "Annual Tech Symposium",
    date: "2023-06-15",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    organizer: "Computer Science Department",
    type: "academic",
    registrations: 124,
  },
  {
    id: "EVT002",
    title: "Freshman Orientation",
    date: "2023-06-20",
    time: "9:00 AM - 12:00 PM",
    location: "Campus Grounds",
    organizer: "Student Affairs",
    type: "orientation",
    registrations: 250,
  },
  {
    id: "EVT003",
    title: "Career Fair 2023",
    date: "2023-07-05",
    time: "11:00 AM - 3:00 PM",
    location: "Business Building",
    organizer: "Career Services",
    type: "career",
    registrations: 180,
  },
  {
    id: "EVT004",
    title: "Annual Sports Day",
    date: "2023-07-15",
    time: "8:00 AM - 6:00 PM",
    location: "Sports Complex",
    organizer: "Physical Education Department",
    type: "sports",
    registrations: 320,
  },
  {
    id: "EVT005",
    title: "Alumni Meetup",
    date: "2023-07-25",
    time: "5:00 PM - 9:00 PM",
    location: "Campus Lawn",
    organizer: "Alumni Association",
    type: "social",
    registrations: 150,
  },
]

export function EventsOverview() {
  const [date, setDate] = useState<Date>()

  return (
    <Tabs defaultValue="upcoming" className="space-y-4">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="create">Create Event</TabsTrigger>
          <TabsTrigger value="registrations">Registrations</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 gap-1 border-dashed">
                <CalendarIcon className="h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>
      <TabsContent value="upcoming" className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full items-center gap-2 sm:max-w-sm">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search events..." className="h-9 w-full" />
          </div>
          <Button size="sm" className="h-9 gap-1">
            <Plus className="h-4 w-4" />
            <span>Add Event</span>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>{event.title}</CardTitle>
                  <Badge
                    variant={
                      event.type === "academic"
                        ? "default"
                        : event.type === "orientation"
                          ? "secondary"
                          : event.type === "career"
                            ? "outline"
                            : event.type === "sports"
                              ? "destructive"
                              : "default"
                    }
                  >
                    {event.type}
                  </Badge>
                </div>
                <CardDescription>
                  {event.date} • {event.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Organizer:</span>
                    <span>{event.organizer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Registrations:</span>
                    <span>{event.registrations}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button size="sm">Register</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="create" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Create New Event</CardTitle>
            <CardDescription>Fill in the details to create a new campus event</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Event Title</label>
                <Input placeholder="Enter event title" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Event Type</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select event type</option>
                  <option value="academic">Academic</option>
                  <option value="orientation">Orientation</option>
                  <option value="career">Career</option>
                  <option value="sports">Sports</option>
                  <option value="social">Social</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Time</label>
                <Input placeholder="e.g., 10:00 AM - 2:00 PM" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Input placeholder="Enter event location" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Organizer</label>
                <Input placeholder="Enter organizer name/department" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <textarea
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter event description"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Registration Required</label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="registration-required"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="registration-required" className="text-sm">
                  Enable registration for this event
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Create Event</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="registrations" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Event Registrations</CardTitle>
            <CardDescription>Manage registrations for upcoming events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="space-y-2 sm:w-1/3">
                <label className="text-sm font-medium">Select Event</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select an event</option>
                  {events.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.title} ({event.date})
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex w-full items-center gap-2 sm:max-w-sm">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search registrations..." className="h-10 w-full" />
              </div>
              <Button variant="outline" size="sm" className="h-10 gap-1 sm:ml-auto">
                <Download className="h-4 w-4" />
                <span>Export List</span>
              </Button>
            </div>
            <div className="rounded-md border">
              <div className="p-4 text-center text-muted-foreground">Select an event to view registrations</div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
