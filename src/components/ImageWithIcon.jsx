import React from "react";
import liveIcon from "../assets/live_icon.svg";

const ImageWithIcon = ({ largeImageUrl, altText = "live_logo" }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={largeImageUrl}
        alt={altText}
        height={110}
        width={130}
        style={{ borderRadius: "20px" }}
      />
      <img
        src={liveIcon}
        alt={altText}
        style={{
          position: "absolute",
          bottom: 15,
          right: 10,
          width: "43px", 
          height: "22px",
        }}
      />
    </div>
  );
};

export default ImageWithIcon;
