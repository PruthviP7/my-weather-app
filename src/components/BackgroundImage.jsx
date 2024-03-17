import React from "react";

const BackgroundImage = ({ backgroundImage }) => {
  // You can fetch the background image URL based on the cityName
  // For demonstration purposes, I'm using a placeholder image URL

  return (
    <div
      style={{
        width: "100%",
        // height: "calc(100% - 64px)", // Adjust height if you have a header
        height: "100%", // Adjust height if you have a header
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${backgroundImage})`,
        position: "absolute",
        zIndex: "0",
        opacity: "0.5",
      }}
    ></div>
  );
};

export default BackgroundImage;
