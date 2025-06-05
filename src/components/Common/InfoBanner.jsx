import { IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fonts } from "../../theme/theme";
import { Close } from "@mui/icons-material";

const InfoBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("bannerDismissed");
    if (dismissed === "true") {
      setShowBanner(false);
    }
  }, []);

  const handleClose = () => {
    setShowBanner(false);
    sessionStorage.setItem("bannerDismissed", "true");
  };

  if (!showBanner) return null;

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ backgroundColor: "#F5F5F5", px: 1 }}
    >
      <IconButton></IconButton>
      <Typography
        sx={{
          fontSize: {
            xs: "8px",
            sm: "12px",
          },
          color: "#000",
          fontFamily: fonts.styreneLight,
        }}
      >
        We’re starting with the marketplace first — to help designers start
        selling and getting seen now. As we grow together, we’ll introduce tools
        to support your brand, creativity, and professional development.
      </Typography>
      <IconButton onClick={handleClose}>
        <Close sx={{ color: "#000" }} />
      </IconButton>
    </Stack>
  );
};

export default InfoBanner;
