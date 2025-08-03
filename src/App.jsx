// src/App.jsx
import React from "react";
import chartData from "./data/data.json";
import ChartRenderer from "./components/ChartRenderer";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      {chartData.map((chart, index) => (
        <ChartRenderer key={index} title={chart.title} data={chart.data} />
      ))}
    </div>
  );
}
