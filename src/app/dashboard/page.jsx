"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Black Tea",
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: "Green Tea",
    total: Math.floor(Math.random() * 500) + 100,
  },
];
export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <div className="flex justify-around mt-20">
        <div className="w-64">
          <h2 className="text-center font-bold my-3 text-primary">
            Stock in Inventory
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Bar
                dataKey="total"
                fill="currentColor"
                radius={[4, 4, 0, 0]}
                className="fill-primary"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </>
  );
}
