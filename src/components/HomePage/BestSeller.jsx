import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { fonts } from "../../theme/theme";
import { bestSellerData } from "../../assets/data/dummyData";
import { useNavigate } from "react-router-dom";

const BestSeller = () => {
  const navigate = useNavigate();
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        height: "100%",
        p: 4,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
      }}
    >
      <Typography
        sx={{
          color: "#000",
          fontSize: "18px",
          fontFamily: fonts.styreneRegular,
          maxWidth: smScreen ? null : "50%",
        }}
      >
        Elevate your lifestyle with a more intelligent, superior wardrobe. Our
        range is crafted sustainably with longevity in mind.
      </Typography>

      <Grid container sx={{ mt: 4 }} spacing={2}>
        {bestSellerData.map((item) => (
          <Grid size={{ xs: 12, sm: 4 }} key={item.id}>
            <Box
              onClick={() => navigate(`/products`)}
              sx={{
                position: "relative",
                cursor: "pointer",
                "&:hover": {
                  "& img": {
                    transform: "scale(1.025)",
                    transition: "transform 0.3s ease-in-out",
                  },
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: smScreen ? "250px" : "450px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontFamily: fonts.styreneRegular,
                    lineHeight: "24px",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BestSeller;
