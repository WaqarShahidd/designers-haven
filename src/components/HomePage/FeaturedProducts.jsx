import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { featuredData } from "../../assets/data/dummyData";
import { fonts } from "../../theme/theme";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100%",
        my: 4,
        px: 4,
      }}
    >
      <Grid container spacing={2}>
        {featuredData.map((item) => (
          <Grid item size={{ xs: 12, sm: 6 }} key={item.id}>
            <Box
              onClick={() => navigate("/products")}
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
                  height: smScreen ? "450px" : "650px",
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

export default FeaturedProducts;
