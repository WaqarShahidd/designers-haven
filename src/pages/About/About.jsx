import React from "react";
import Layout from "../../layout/Layout";
import { Box, Grid, Typography } from "@mui/material";
import { fonts } from "../../theme/theme";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: "24px",
            fontFamily: fonts.styreneMedium,
            mb: 2,
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            color: "#000",
            fontSize: "16px",
            fontFamily: fonts.styreneLight,
            textAlign: "center",
            maxWidth: "50%",
          }}
        >
          We are a fashion brand dedicated to providing high-quality, stylish
          clothing for all occasions. Our mission is to empower individuals
          through fashion, offering a wide range of products that cater to
          diverse tastes and preferences. Join us on our journey to redefine
          style and comfort.
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ p: 4 }}>
        <Grid
          item
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontSize: "20px",
              fontFamily: fonts.styreneMedium,
              mb: 2,
            }}
          >
            Stores
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: fonts.styreneLight,
              textAlign: "left",
              maxWidth: "80%",
              mb: 2,
              lineHeight: "1.5",
            }}
          >
            We have stores located in major cities across the country. Visit us
            to experience our collections in person and receive personalized
            styling advice from our expert team.
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: fonts.styreneLight,
              textAlign: "left",
              maxWidth: "80%",
              lineHeight: "1.5",
            }}
          >
            Our stores are designed to provide a unique shopping experience,
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <Box
            component={"img"}
            src={require("../../assets/images/store.jpg")}
            alt="Store"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
