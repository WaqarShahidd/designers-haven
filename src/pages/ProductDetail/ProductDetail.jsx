import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { productDetailsData, wearNowData } from "../../assets/data/dummyData";
import { fonts } from "../../theme/theme";
import Layout from "../../layout/Layout";
import CustomBtn from "../../components/Common/CustomBtn";
import { useNavigate } from "react-router-dom";
import RelatedProducts from "../../components/Products/RelatedProducts";

const ProductDetail = () => {
  const navigate = useNavigate();
  const colors = [
    { color: "#C4C4B0", name: "Beige" },
    { color: "#000000", name: "Black" },
    { color: "#9fc5e8", name: "Blue" },
  ];
  const [selectedColor, setSelectedColor] = useState(colors?.[0]);
  const selectedColorName = colors?.find(
    (c) => c.color === selectedColor
  )?.name;

  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(sizes?.[0]);
  const selectedSizeName = colors?.find((c) => c.color === selectedSize)?.name;

  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 1, sm: 0 } }}>
            {productDetailsData.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  height: "auto",
                  overflow: "hidden",
                  borderRadius: 1,
                  cursor: "pointer",
                  mb: 1,
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
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
                Cool Shirt
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
                $50.00
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
                This is a cool shirt that you can wear to any occasion. It is
                made of high-quality fabric and is very comfortable to wear. The
                design is modern and stylish, making it a great addition to your
                wardrobe.
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
                onClick={() => navigate("/store/1")}
              >
                <Box
                  component={"img"}
                  src={require("../../assets/images/brand-logo.jpg")}
                  alt={"brand-logo"}
                  sx={{
                    width: 50,
                    height: 50,
                    objectFit: "cover",
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
                  Brand Name
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
                Product Color:{" "}
                <Typography
                  component={"span"}
                  sx={{ fontSize: "16px", fontFamily: fonts.styreneLight }}
                >
                  {selectedColorName}
                </Typography>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1.2,
                }}
              >
                {(colors || []).map((clr) => (
                  <Box
                    sx={{
                      width: 25,
                      height: 25,
                      borderRadius: "50%",
                      border:
                        selectedColor === clr.color ? "1px solid #000" : "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedColor(clr.color);
                      }}
                      sx={{
                        width: 23,
                        height: 23,
                        borderRadius: "50%",
                        bgcolor: clr.color,
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                ))}
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: fonts.styreneBold,
                    lineHeight: "22px",
                    color: "#000",
                    mb: 1,
                  }}
                >
                  Product Size:{" "}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.2,
                    mb: 4,
                  }}
                >
                  {(sizes || []).map((size) => (
                    <Box
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSize(size);
                      }}
                      sx={{
                        width: 40,
                        height: 40,
                        border:
                          selectedSize === size
                            ? "1px solid #000"
                            : "1px solid #ddd",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: fonts.styreneLight,
                          color: "#000",
                        }}
                      >
                        {size}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <CustomBtn
                text={"Contact to Order"}
                width={smScreen ? "100%" : "70%"}
                secondary={false}
              />
            </Box>
          </Grid>
          <Grid item size={{ xs: 12 }}>
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
      </Box>
    </Layout>
  );
};

export default ProductDetail;
