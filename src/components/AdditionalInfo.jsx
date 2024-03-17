import { Typography } from "@mui/material";
import React from "react";
import "./additionalInfo.css";

const AdditionalInfo = ({ data }) => {
  return (
    <div className="additional-info-container">
      <Typography
        className="aic-heading"
        sx={{
          fontSize: "18px",
          fontWeight: "700",
          lineHeight: "21px",
          fontFamily: "Abhaya Libre",
          color: "#003339",
        }}
      >
        Additional Info
      </Typography>
      <div className="aic-content-wrapper">
        <div className="acw-item-wrapper">
          <Typography className="aiw-heading" fontFamily="Abhaya Libre">
            Precipitation
          </Typography>
          <Typography
            className="aiw-sub-heading"
            fontFamily="Abhaya Libre"
            fontWeight="700"
          >
            3%
          </Typography>
        </div>
        <div className="acw-item-wrapper">
          <Typography className="aiw-heading" fontFamily="Abhaya Libre">
            Humidity
          </Typography>
          <Typography
            className="aiw-sub-heading"
            fontFamily="Abhaya Libre"
            fontWeight="700"
          >
            {`${Math.round(data?.main?.humidity)} %`}
          </Typography>
        </div>
        <div className="acw-item-wrapper">
          <Typography className="aiw-heading" fontFamily="Abhaya Libre">
            Windy
          </Typography>
          <Typography
            className="aiw-sub-heading"
            fontFamily="Abhaya Libre"
            fontWeight="700"
          >
            {`${data?.wind?.speed} m/s`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
