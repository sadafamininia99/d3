// src/components/LineChartSingle.jsx
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function LineChartSingle({ data }) {
  const ref = useRef();

  useEffect(() => {
    const filtered = data.filter((d) => d[1] !== null);
    const width = 500,
      height = 300,
      margin = 40;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const x = d3
      .scaleLinear()
      .domain(d3.extent(filtered, (d) => d[0]))
      .range([margin, width - margin]);

    const y = d3
      .scaleLinear()
      .domain(d3.extent(filtered, (d) => d[1]))
      .range([height - margin, margin]);

    const line = d3
      .line()
      .x((d) => x(d[0]))
      .y((d) => y(d[1]));

    svg
      .append("path")
      .datum(filtered)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin},0)`)
      .call(d3.axisLeft(y));
  }, [data]);

  return <svg ref={ref} width={500} height={300} />;
}
