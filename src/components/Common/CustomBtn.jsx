import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import { fonts } from "../../theme/theme";

const CustomBtn = ({ text, onClick, width, secondary = false }) => {
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: secondary ? "#F8F9FA" : "#000",
        color: secondary ? "#000" : "#fff",
        border: secondary ? "1px solid #000" : null,
        boxShadow: "none",
        borderRadius: "0px",
        fontFamily: !smScreen ? fonts.styreneRegular : fonts.styreneLight,
        fontSize: "15px",
        width: width || "100%",
        mt: 2,
        px: 2,
        py: 1,
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#F8F9FA",
          color: "#000",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomBtn;
