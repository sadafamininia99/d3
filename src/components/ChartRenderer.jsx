import LineChartSingle from "./LineChartSingle";
import LineChartMulti from "./LineChartMulti";
import "./ChartRenderer.css";

export default function ChartRenderer({ title, data }) {
  const isMulti = Array.isArray(data[0][1]);

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
