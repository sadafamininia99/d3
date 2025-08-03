// src/components/ChartRenderer.jsx
import React from "react";
import LineChartSingle from "./LineChartSingle";
import LineChartMulti from "./LineChartMulti";
import "./ChartRenderer.css"; // Importing the CSS file

export default function ChartRenderer({ title, data }) {
  const isMulti = Array.isArray(data[0][1]); // Check if value is array

  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      {isMulti ? (
        <LineChartMulti data={data} />
      ) : (
        <LineChartSingle data={data} />
      )}
    </div>
  );
}
