import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Layout from "../../layout/Layout";
import { fonts } from "../../theme/theme";
import ProductCard from "../../components/Products/ProductCard";
import { useParams } from "react-router-dom";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { axiosInstance, useStore } from "../../context/StoreContext";

const StoreFront = () => {
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const params = useParams();

  const designerId = params.id;

  const { products } = useStore();

  const [loading, setLoading] = useState(false);
  const [designerDetails, setDesignerDetails] = useState({});

  const getDesigner = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `/user/getDesignerById?designerId=${designerId}`
      );
      if (response.status === 200) {
        const data = response.data;
        setDesignerDetails(data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDesigner();
  }, [designerId]);

  return (
    <Layout>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: smScreen ? "column" : "row",
          alignItems: smScreen ? "center" : "flex-start",
          borderBottom: "1px solid #DDDDDD",
          gap: smScreen ? 2 : 4,
        }}
      >
        <Box
          component={"img"}
          src={designerDetails?.avatar}
          alt="brand-logo"
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "contain",
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
            {designerDetails?.fullName}
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "18px",
              fontFamily: fonts.styreneLight,
              textAlign: smScreen ? "center" : "left",
            }}
          >
            {`${designerDetails?.city || "N/A"}, ${
              designerDetails?.country || "N/A"
            }`}
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: fonts.styreneLight,
              lineHeight: "24px",
              letterSpacing: "0.5px",
              maxWidth: smScreen ? null : "85%",
              textAlign: smScreen ? "center" : "left",
            }}
          >
            {designerDetails?.bio}
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
                window.open(
                  `https://wa.me/${
                    designerDetails?.dialingCode + designerDetails?.whatsApp
                  }`,
                  "_blank"
                )
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
              onClick={() =>
                window.open(
                  designerDetails?.insta?.includes("instagram.com")
                    ? designerDetails?.insta
                    : `https://www.instagram.com/${designerDetails?.insta}`,
                  "_blank"
                )
              }
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
                {designerDetails?.insta}
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
          {designerDetails?.products &&
            designerDetails?.products?.map((item) => (
              <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2.4 }} item key={item.id}>
                <ProductCard
                  key={item.id}
                  item={item}
                  store={designerDetails}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default StoreFront;
