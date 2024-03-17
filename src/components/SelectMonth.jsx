import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import "./selectMonth.css";

const SelectMonth = ({ value, handleChange }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          borderRadius: "10px",
          height: 35,
          fontFamily: "Abhaya Libre",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        <MenuItem value={0}>Last Month</MenuItem>
        <MenuItem value={1}>3 Months Before</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectMonth;
