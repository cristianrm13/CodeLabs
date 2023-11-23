import React from "react";
import "../../assets/styles/barra.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from "recharts";

const BarChartComponent = () => {
  const data = [
    { category: "bar A", value: 2 },
    { category: "bar B", value: 5 },
    { category: "bar C", value: 3 },
    { category: "bar D", value: 7 },
    { category: "bar E", value: 6 },
  ];

  return (
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
