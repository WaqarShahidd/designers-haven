import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import ProductCard from "./ProductCard";
import { fonts } from "../../theme/theme";
import { allProducts } from "../../assets/data/allProducts";

const RelatedProducts = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const limitedProducts = allProducts.slice(0, 5);
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
          {limitedProducts.map((item) => (
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
          {limitedProducts.map((item) => (
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
