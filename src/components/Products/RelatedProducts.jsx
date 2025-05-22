import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { wearNowData } from "../../assets/data/dummyData";
import ProductCard from "./ProductCard";
import { fonts } from "../../theme/theme";

const RelatedProducts = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <>
      {isSmallScreen ? (
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            pb: 1,
          }}
        >
          {wearNowData.map((item) => (
            <Box
              key={item.id}
              sx={{
                minWidth: "200px",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <Typography
                sx={{
                  mt: 1,
                  mb: 0.5,
                  fontSize: "12px",
                  fontFamily: fonts.styreneRegular,
                  lineHeight: "20px",
                  color: "#000",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "11px",
                  fontFamily: fonts.styreneRegular,
                  lineHeight: "20px",
                  color: "#000",
                }}
              >
                ${item.price}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Grid container spacing={2}>
          {wearNowData.map((item) => (
            <Grid item key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default RelatedProducts;
