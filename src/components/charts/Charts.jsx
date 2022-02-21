import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
export default function Charts() {
  const data = [
    {
      name: "Jan",
      pv: 10000,
    },
    {
      name: "Feb",
      pv: 5000,
    },
    {
      name: "Mar",
      pv: 11000,
    },
    {
      name: "Apr",
      pv: 20000,
    },
    {
      name: "May",
      pv: 13000,
    },
    {
      name: "Jun",
      pv: 27000,
    },
    {
      name: "Jul",
      pv: 17000,
    },
    {
      name: "Aug",
      pv: 4000,
    },
    {
      name: "Sep",
      pv: 14000,
    },
    {
      name: "Oct",
      pv: 13000,
    },
    {
      name: "Nov",
      pv: 14000,
    },
    {
      name: "Dec",
      pv: 5000,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Performance Over Time</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="pv" stroke="#0303b8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
