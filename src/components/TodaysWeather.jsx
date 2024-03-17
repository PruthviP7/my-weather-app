import { Typography } from "@mui/material";
import React from "react";
import { weatherIcon } from "../utils/IconsUtils";
import SvgImage from "./SvgImage";
import "./todaysWeather.css";

const TodaysWeather = ({ todayForecastList }) => {
  return (
    <div className="todays-weather-card-wrapper">
      {todayForecastList.map((item, index) => {
        return (
          <div className="twcw-item-wrapper" key={index}>
            <Typography className="tiw-content" fontFamily="Abhaya Libre">
              {item.time}
            </Typography>
            <SvgImage
              src={weatherIcon(`${item.icon}.png`)}
              height="30px"
              width="35px"
              style={{
                margin: '8px 0'
              }}
            />
            <Typography className="tiw-content" fontFamily="Abhaya Libre">
              {item.temperature}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default TodaysWeather;
