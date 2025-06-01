import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { fonts } from "../../theme/theme";

const BottomNote = () => {
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F5F4F4",
        px: smScreen ? 2 : 10,
      }}
    >
      <Typography
        sx={{
          color: "#000",
          fontSize: "24px",
          fontFamily: fonts.styreneMedium,
          lineHeight: "32px",
          mb: 3,
          textAlign: "center",
        }}
      >
        Crafted with Purpose, Rooted in Identity
      </Typography>
      <Typography
        sx={{
          color: "#000",
          fontSize: "16px",
          fontFamily: fonts.styreneRegular,
          lineHeight: "22px",
          textAlign: "center",
          maxWidth: smScreen ? null : "50%",
        }}
      >
        Choosing quality over quantity means celebrating custom-made pieces that
        reflect the stories, culture, and creativity of Zimbabwean designers —
        with roots in Africa’s rich design heritage. Every piece is a statement
        of care, individuality, and timeless style.
      </Typography>
    </Box>
  );
};

export default BottomNote;
