import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Layout from "../../layout/Layout";
import { fonts } from "../../theme/theme";
import { wearNowData } from "../../assets/data/dummyData";
import ProductCard from "../../components/Products/ProductCard";

const StoreFront = () => {
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Layout>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: smScreen ? "column" : "row",
          alignItems: "center",
          borderBottom: "1px solid #DDDDDD",
        }}
      >
        <Box
          component={"img"}
          src={require("../../assets/images/brand-logo.jpg")}
          alt="brand-logo"
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            mr: 2,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            border: "1px solid #DDDDDD",
          }}
        />
        <Stack direction={"column"} spacing={1} mt={smScreen ? 2 : 0}>
          <Typography
            sx={{
              color: "#000",
              fontSize: "24px",
              fontFamily: fonts.styreneMedium,
              textAlign: smScreen ? "center" : "left",
            }}
          >
            ZARA
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: fonts.styreneLight,
              lineHeight: "24px",
              letterSpacing: "0.5px",
              maxWidth: smScreen ? null : "50%",
              textAlign: smScreen ? "center" : "left",
            }}
          >
            ZARA is a Spanish multinational company that specializes in
            fast-fashion clothing, accessories, shoes, and beauty products.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography
          sx={{
            color: "#000",
            fontSize: "20px",
            fontFamily: fonts.styreneMedium,
            mb: 3,
          }}
        >
          Products
        </Typography>
        <Grid container spacing={2}>
          {wearNowData.map((item) => (
            <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2.4 }} item key={item.id}>
              <ProductCard key={item.id} item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default StoreFront;
