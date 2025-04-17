"use client"

import { CreditCard, Download, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { FeePaymentChart } from "@/components/dashboard/charts/fee-payment-chart"

const feeTransactions = [
  {
    id: "TRX001",
    student: "John Doe",
    amount: "$2,500",
    date: "2023-05-10",
    status: "Paid",
    type: "Tuition",
  },
  {
    id: "TRX002",
    student: "Jane Smith",
    amount: "$1,800",
    date: "2023-05-08",
    status: "Paid",
    type: "Tuition",
  },
  {
    id: "TRX003",
    student: "Michael Johnson",
    amount: "$2,500",
    date: "2023-05-15",
    status: "Pending",
    type: "Tuition",
  },
  {
    id: "TRX004",
    student: "Emily Brown",
    amount: "$500",
    date: "2023-05-12",
    status: "Paid",
    type: "Hostel",
  },
  {
    id: "TRX005",
    student: "Robert Wilson",
    amount: "$2,500",
    date: "2023-05-20",
    status: "Overdue",
    type: "Tuition",
  },
]

export function FeesOverview() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="payment">New Payment</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
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
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Collected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$432,680</div>
              <p className="text-xs text-muted-foreground">+$12,580 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$86,432</div>
              <p className="text-xs text-muted-foreground">18% of total fees</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Overdue Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$48,240</div>
              <p className="text-xs text-muted-foreground">10% of total fees</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72%</div>
              <p className="text-xs text-muted-foreground">+5% from last semester</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest fee payments and transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feeTransactions.slice(0, 5).map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.student}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            transaction.status === "Paid"
                              ? "default"
                              : transaction.status === "Pending"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Payment Status</CardTitle>
              <CardDescription>Current fee payment status by category</CardDescription>
            </CardHeader>
            <CardContent>
              <FeePaymentChart />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="transactions" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Fee Transactions</CardTitle>
            <CardDescription>View and manage all fee transactions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full items-center gap-2 sm:max-w-sm">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search transactions..." className="h-9 w-full" />
              </div>
              <Button size="sm" className="h-9 gap-1">
                <Plus className="h-4 w-4" />
                <span>Add Transaction</span>
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{transaction.student}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          transaction.status === "Paid"
                            ? "default"
                            : transaction.status === "Pending"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="payment" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Process New Payment</CardTitle>
            <CardDescription>Record a new fee payment or transaction</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Student ID</label>
                <Input placeholder="Enter student ID" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Student Name</label>
                <Input placeholder="Student name will appear here" disabled />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Fee Type</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select fee type</option>
                  <option value="tuition">Tuition Fee</option>
                  <option value="hostel">Hostel Fee</option>
                  <option value="transport">Transport Fee</option>
                  <option value="library">Library Fee</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount</label>
                <Input placeholder="Enter amount" type="number" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Payment Method</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select payment method</option>
                  <option value="cash">Cash</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="online">Online Payment</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Transaction ID</label>
                <Input placeholder="Enter transaction ID (if applicable)" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Notes</label>
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Add any additional notes"
              />
            </div>
            <div className="flex gap-2">
              <Button className="gap-1">
                <CreditCard className="h-4 w-4" />
                <span>Process Payment</span>
              </Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
