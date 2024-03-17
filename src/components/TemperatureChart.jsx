import CanvasJSReact from "@canvasjs/react-charts";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import SelectMonth from "./SelectMonth";
import "./temperatureChart.css";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const monthMapper = {
  0: {
    title: "LastMonth",
    value: [
      { x: 1, y: 20 },
      { x: 5, y: 26 },
      { x: 10, y: 22 },
      { x: 15, y: 24 },
      { x: 20, y: 21 },
      { x: 25, y: 27 },
    ],
  },
  1: {
    title: "3 Months Before",
    value: [
      { x: 1, y: 21 },
      { x: 5, y: 24 },
      { x: 10, y: 23 },
      { x: 15, y: 27 },
      { x: 20, y: 22 },
      { x: 25, y: 26 },
    ],
  },
};

const TemperatureChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(0);

  const onMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };
  const options = {
    animationEnabled: true,
    title: {
      text: "",
    },
    axisX: {
      labelFormatter: () => "", // Remove X axis data points
      gridColor: "transparent", // Remove X axis grid lines
      lineThickness: 0, // Remove Y axis line
      tickLength: 0, // Remove tick marks on X axis
    },
    axisY: {
      labelFormatter: () => "", // Remove X axis data points
      gridColor: "transparent", // Remove X axis grid lines
      lineThickness: 0, // Remove Y axis line
      tickLength: 0, // Remove tick marks on X axis
    },
    data: [
      {
        type: "splineArea",
        xValueFormatString: "",
        yValueFormatString: "#,##0.## Temperature",
        showInLegend: true, // Disable showing in legend
        legendText: "Current Month",
        color: "#FF8900",
        dataPoints: [
          { x: 1, y: 27 },
          { x: 5, y: 24 },
          { x: 10, y: 25 },
          { x: 15, y: 22 },
          { x: 20, y: 27 },
          { x: 25, y: 23 },
        ],
      },
      {
        type: "splineArea",
        xValueFormatString: "",
        yValueFormatString: "#,##0.## Temperature",
        showInLegend: true, // Disable showing in legend
        legendText: monthMapper[selectedMonth].title, // Set legend text to empty string
        color: "#FFD9B1",
        dataPoints: monthMapper[selectedMonth].value,
      },
    ],
  };
  return (
    <div className="temperature-chart-section-wrapper">
      <div className="tcsw-header-wrapper">
        <Typography
          sx={{
            fontFamily: "Abhaya Libre",
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "21px",
            color: "#003339",
          }}
        >
          Temperature
        </Typography>
        <SelectMonth value={selectedMonth} handleChange={onMonthChange} />
      </div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
};

export default TemperatureChart;
