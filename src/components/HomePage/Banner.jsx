import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import banner from "../../assets/images/banner1.png";
import { fonts } from "../../theme/theme";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            left: smScreen ? "10%" : "2%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontFamily: fonts.styreneMedium,
              maxWidth: smScreen ? "75%" : "50%",
              lineHeight: "32px",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Designer’s Haven
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                xs: "18px",
                sm: "24px",
              },
              fontFamily: fonts.styreneLight,
              maxWidth: smScreen ? "75%" : "50%",
              lineHeight: smScreen ? "24px" : "32px",
              mb: 2,
            }}
          >
            Empowering Zimbabwean Fashion, Connecting Africa.
            <br />
            Designer’s Haven is a curated fashion tech platform that supports
            emerging designers through digital access, visibility, and
            resources. Our mission is to build a thriving ecosystem that links
            local talent with a wider audience across Africa and beyond.
          </Typography>

          <Stack spacing={2} direction="row">
            <Button
              onClick={() => navigate("/products")}
              variant="contained"
              sx={{
                backgroundColor: "#F8F9FA",
                color: "#000",
                fontFamily: !smScreen
                  ? fonts.styreneRegular
                  : fonts.styreneLight,
                fontSize: "15px",
                width: smScreen ? "50%" : null,
                mt: 2,
                px: 2,
                py: 1,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#F8F9FA",
                  color: "#000",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              Shop Now
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://admin.designershaven.africa/signup",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              variant="contained"
              sx={{
                backgroundColor: "#F8F9FA",
                color: "#000",
                fontFamily: !smScreen
                  ? fonts.styreneRegular
                  : fonts.styreneLight,
                fontSize: "15px",
                width: smScreen ? "50%" : null,
                mt: 2,
                px: 2,
                py: 1,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#F8F9FA",
                  color: "#000",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              Join as a Designer
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
