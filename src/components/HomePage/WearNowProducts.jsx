import { Box, Typography, useMediaQuery } from "@mui/material";
import { fonts } from "../../theme/theme";
import RelatedProducts from "../Products/RelatedProducts";

const WearNowProducts = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        mt: isSmallScreen ? 0 : -2,
        display: "flex",
        flexDirection: "column",
        p: 4,
      }}
    >
      <Typography
        sx={{
          color: "#000",
          fontSize: "20px",
          fontFamily: fonts.styreneMedium,
          maxWidth: isSmallScreen ? null : "50%",
          mb: 4,
        }}
      >
        What to Wear Now
      </Typography>

      <RelatedProducts />
    </Box>
  );
};

export default WearNowProducts;
