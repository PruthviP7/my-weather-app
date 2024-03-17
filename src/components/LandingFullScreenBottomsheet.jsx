import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import closeButton from "../assets/close_button.svg";
import currentLocation from "../assets/current_location.svg";
import liveIcon from "../assets/live_icon.svg";
import SvgImage from "./SvgImage";

const LandingFullScreenBottomsheet = ({
  isOpen,
  onClose = () => {},
  cityName,
  randomImagePath,
}) => {
  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${randomImagePath})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          rowGap: "160px",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "16px",
          }}
        >
          <SvgImage src={closeButton} onClick={onClose} />
          <SvgImage src={liveIcon} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
            width: "80%",
            alignItems: "flex-start",
          }}
        >
          <SvgImage src={currentLocation} />
          <Typography
            variant="body1"
            fontFamily="Abhaya Libre, serif"
            color={"white"}
            fontWeight={"700"}
            fontSize={"45px"}
            lineHeight={"60px"}
          >
            {cityName}
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default LandingFullScreenBottomsheet;
