import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import hamberg_icon from "../assets/hamberg_icon.svg";
import SvgImage from "./SvgImage";
import "./myMenu.css";

const MyMenu = ({ onCityChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (hello) => {
    onCityChange(hello.target.innerText);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SvgImage src={hamberg_icon} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onChange={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Delhi</MenuItem>
        <MenuItem onClick={handleClose}>Mumbai</MenuItem>
        <MenuItem onClick={handleClose}>Kolkata</MenuItem>
        <MenuItem onClick={handleClose}>Chennai</MenuItem>
      </Menu>
    </div>
  );
};

export default MyMenu;
