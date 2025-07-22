import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { fonts } from "../../theme/theme";
import Layout from "../../layout/Layout";
import CustomBtn from "../../components/Common/CustomBtn";
import { useNavigate, useParams } from "react-router-dom";
import RelatedProducts from "../../components/Products/RelatedProducts";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../context/StoreContext";

const ProductDetail = () => {
  const navigate = useNavigate();

  const params = useParams();

  const productId = params.id;

  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `/product/getProductById?productId=${productId}`
      );
      if (response.status === 200) {
        const data = response.data;
        setProductDetails(data);
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
    getProduct();
  }, [productId]);

  return (
    <Layout>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ p: 4 }}>
        {!loading && (
          <Grid container spacing={2}>
            <Grid
              item
              size={{ xs: 12, sm: 6 }}
              sx={{
                order: { xs: 1, sm: 0 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {productDetails?.images?.length > 0 &&
                productDetails?.images?.map((image, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ))}
            </Grid>

            <Grid
              item
              size={{ xs: 12, sm: 6 }}
              sx={{ order: { xs: 1, sm: 0 } }}
            >
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontSize: "28px",
                    fontFamily: fonts.styreneBold,
                    lineHeight: "32px",
                    color: "#000",
                    mb: 2,
                  }}
                >
                  {productDetails?.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: fonts.styreneBold,
                    lineHeight: "32px",
                    color: "#000",
                    mb: 1,
                  }}
                >
                  ${productDetails?.price}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: fonts.styreneLight,
                    lineHeight: "24px",
                    color: "#323232",
                    my: 3,
                    maxWidth: smScreen ? "100%" : "65%",
                  }}
                >
                  {productDetails?.description}
                </Typography>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={2}
                  mb={3}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  onClick={() =>
                    navigate(`/store/${productDetails?.store?.id}`)
                  }
                >
                  <Box
                    component={"img"}
                    src={productDetails?.store?.avatar}
                    alt={"brand-logo"}
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: "contain",
                      borderRadius: "50%",
                      border: "1px solid #ddd",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: fonts.styreneMedium,
                      lineHeight: "24px",
                      color: "#000",
                    }}
                  >
                    {productDetails?.store?.fullName}
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: fonts.styreneBold,
                    lineHeight: "22px",
                    color: "#000",
                    mb: 1,
                  }}
                >
                  Order Type:{" "}
                  <Typography
                    component={"span"}
                    sx={{
                      fontSize: "16px",
                      fontFamily: fonts.styreneLight,
                      textTransform: "capitalize",
                    }}
                  >
                    {productDetails?.orderType}
                  </Typography>
                </Typography>

                {productDetails?.categories && (
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: fonts.styreneBold,
                      lineHeight: "22px",
                      color: "#000",
                      mb: 1,
                    }}
                  >
                    Categories:{" "}
                    <Typography
                      component={"span"}
                      sx={{
                        fontSize: "16px",
                        fontFamily: fonts.styreneLight,
                        textTransform: "capitalize",
                      }}
                    >
                      {productDetails?.categories?.join(", ")}
                    </Typography>
                  </Typography>
                )}

                <CustomBtn
                  text={"Contact to Order"}
                  width={smScreen ? "100%" : "70%"}
                  secondary={false}
                  onClick={() =>
                    window.open(
                      `https://wa.me/${
                        productDetails?.store?.dialingCode +
                        productDetails?.store?.whatsApp
                      }`,
                      "_blank"
                    )
                  }
                />
              </Box>
            </Grid>
            <Grid item size={{ xs: 12 }} sx={{ order: { xs: 1, sm: 0 } }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: fonts.styreneMedium,
                  lineHeight: "20px",
                  color: "#000",
                  my: 2,
                }}
              >
                Related Products
              </Typography>
              <RelatedProducts />
            </Grid>
          </Grid>
        )}
      </Box>
    </Layout>
  );
};

export default ProductDetail;
