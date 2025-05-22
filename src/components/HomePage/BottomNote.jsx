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
        The Art of Fewer, Better Choices
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
        Opting for quality over quantity means selecting timeless, durable, and
        responsibly made items. This approach simplifies our lives and fosters a
        deeper appreciation for our surroundings. Emphasizing longevity and
        responsible production resonates with a more sustainable and mindful
        lifestyle.
      </Typography>
    </Box>
  );
};

export default BottomNote;
