import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { fonts } from "../../theme/theme";
import Layout from "../../layout/Layout";
import CustomBtn from "../../components/Common/CustomBtn";
import { useNavigate, useParams } from "react-router-dom";
import RelatedProducts from "../../components/Products/RelatedProducts";
import { allProducts } from "../../assets/data/allProducts";
import { allDesigners } from "../../assets/data/allDesigners";

const ProductDetail = () => {
  const navigate = useNavigate();

  const params = useParams();

  const productId = params.id;

  const product = allProducts.find((item) => item.id === parseInt(productId));
  const designer = allDesigners.find(
    (designer) => designer.id === product.designer
  );

  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 1, sm: 0 } }}>
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 1, sm: 0 } }}>
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
                {product.name}
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
                ${product.price}
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
                {product.description}
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
                onClick={() => navigate(`/store/${product.designer}`)}
              >
                <Box
                  component={"img"}
                  src={designer.image}
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
                  {designer.name}
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
                  sx={{ fontSize: "16px", fontFamily: fonts.styreneLight }}
                >
                  {product.orderType}
                </Typography>
              </Typography>
              {/* <Box
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
              </Box> */}

              {/* <Box sx={{ mt: 4 }}>
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
              </Box> */}
              <CustomBtn
                text={"Contact to Order"}
                width={smScreen ? "100%" : "70%"}
                secondary={false}
                onClick={() =>
                  window.open(`https://wa.me/${designer.whatsApp}`, "_blank")
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
      </Box>
    </Layout>
  );
};

export default ProductDetail;
