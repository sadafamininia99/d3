import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
const colors = ["Blue", "green", "red"];

export default function LineChartMulti({ data }) {
  const ref = useRef();

  useEffect(() => {
    const width = 500,
      height = 300,
      margin = 40;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const timestamps = data.map((d) => d[0]);

    const series = [0, 1, 2].map((i) =>
      data.filter((d) => d[1][i] !== null).map((d) => [d[0], d[1][i]])
    );

    const x = d3
      .scaleLinear()
      .domain(d3.extent(timestamps))
      .range([margin, width - margin]);

    const allVals = series.flat().map((d) => d[1]);

    const y = d3
      .scaleLinear()
      .domain(d3.extent(allVals))
      .range([height - margin, margin]);

    const line = d3
      .line()
      .x((d) => x(d[0]))
      .y((d) => y(d[1]));

    series.forEach((s, i) => {
      svg
        .append("path")
        .datum(s)
        .attr("fill", "none")
        .attr("stroke", colors[i])
        .attr("stroke-width", 2)
        .attr("d", line);
    });

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
