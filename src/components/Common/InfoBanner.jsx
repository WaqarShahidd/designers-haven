import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { fonts } from "../../theme/theme";
import { Close } from "@mui/icons-material";

const InfoBanner = () => {
  const [banner, setBanner] = useState(true);
  return (
    banner && (
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
              xs: "10px",
              sm: "12px",
            },
            color: "#000",
            fontFamily: fonts.styreneLight,
          }}
        >
          We’re starting with the marketplace first — to help designers start
          selling and getting seen now. As we grow together, we’ll introduce
          tools to support your brand, creativity, and professional development.
        </Typography>
        <IconButton onClick={() => setBanner(false)}>
          <Close sx={{ color: "#000" }} />
        </IconButton>
      </Stack>
    )
  );
};

export default InfoBanner;
