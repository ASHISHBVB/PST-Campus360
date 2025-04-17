"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    Engineering: 92,
    Science: 88,
    Arts: 85,
    Business: 90,
  },
  {
    name: "Feb",
    Engineering: 90,
    Science: 87,
    Arts: 82,
    Business: 88,
  },
  {
    name: "Mar",
    Engineering: 88,
    Science: 85,
    Arts: 80,
    Business: 86,
  },
  {
    name: "Apr",
    Engineering: 86,
    Science: 83,
    Arts: 78,
    Business: 84,
  },
  {
    name: "May",
    Engineering: 84,
    Science: 82,
    Arts: 76,
    Business: 82,
  },
  {
    name: "Jun",
    Engineering: 88,
    Science: 86,
    Arts: 80,
    Business: 85,
  },
]

export function AttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[70, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Engineering" fill="#2563eb" />
        <Bar dataKey="Science" fill="#16a34a" />
        <Bar dataKey="Arts" fill="#d97706" />
        <Bar dataKey="Business" fill="#9333ea" />
      </BarChart>
    </ResponsiveContainer>
  )
}
