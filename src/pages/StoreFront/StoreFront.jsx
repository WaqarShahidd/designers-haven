import React from "react";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Layout from "../../layout/Layout";
import { fonts } from "../../theme/theme";
import { wearNowData } from "../../assets/data/dummyData";
import ProductCard from "../../components/Products/ProductCard";
import { useParams } from "react-router-dom";
import { allDesigners } from "../../assets/data/allDesigners";
import { allProducts } from "../../assets/data/allProducts";
import { Instagram, WhatsApp } from "@mui/icons-material";

const StoreFront = () => {
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const params = useParams();

  const storeId = params.id;

  const store = allDesigners.find(
    (designer) => designer.id === parseInt(storeId)
  );

  const storeProducts = allProducts.filter(
    (item) => item.designer === parseInt(storeId)
  );

  return (
    <Layout>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: smScreen ? "column" : "row",
          alignItems: smScreen ? "center" : "flex-start",
          borderBottom: "1px solid #DDDDDD",
        }}
      >
        <Box
          component={"img"}
          src={store.image}
          alt="brand-logo"
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "contain",
            mr: 2,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            border: "1px solid #DDDDDD",
          }}
        />
        <Stack direction={"column"} spacing={2} mt={smScreen ? 2 : 0}>
          <Typography
            sx={{
              color: "#000",
              fontSize: "24px",
              fontFamily: fonts.styreneMedium,
              textAlign: smScreen ? "center" : "left",
            }}
          >
            {store.name}
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
            {store.description}
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "14px",
              fontFamily: fonts.styreneRegular,
              textAlign: smScreen ? "center" : "left",
            }}
          >
            Contact to Order:
          </Typography>
          <Stack
            direction={"row"}
            spacing={4}
            alignItems={"center"}
            justifyContent={smScreen ? "center" : "flex-start"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              onClick={() =>
                window.open(`https://wa.me/${store.whatsApp}`, "_blank")
              }
              sx={{ cursor: "pointer" }}
            >
              <WhatsApp sx={{ color: "#25D366", fontSize: "16px" }} />
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  fontFamily: fonts.styreneRegular,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                WhatsApp
              </Typography>
            </Stack>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#DDDDDD" }}
            />
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              onClick={() => window.open(`${store.instaLink}`, "_blank")}
              sx={{ cursor: "pointer" }}
            >
              <Instagram sx={{ color: "#E1306C", fontSize: "16px" }} />
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  fontFamily: fonts.styreneRegular,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {store.instagram}
              </Typography>
            </Stack>
          </Stack>
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
          {storeProducts.map((item) => (
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
