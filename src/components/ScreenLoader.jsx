import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const ScreenLoader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThreeCircles
        visible={true}
        height="120"
        width="120"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default ScreenLoader;
