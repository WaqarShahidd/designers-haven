import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { fonts } from "../../theme/theme";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { bannerSlides } from "../../assets/data/dummyData";

const Banner = () => {
  const navigate = useNavigate();
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {bannerSlides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: "100vh",
              width: "100%",
              backgroundImage: `url(${slide.image})`,
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
                  {slide.title}
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
                    whiteSpace: "pre-line",
                    mb: 2,
                  }}
                >
                  {slide.description}
                </Typography>

                <Stack spacing={2} direction="row">
                  {slide.buttons.map((button, btnIndex) => (
                    <Button
                      key={btnIndex}
                      onClick={() => {
                        if (button.route) {
                          navigate(button.route);
                        } else if (button.linkUrl) {
                          window.open(button.linkUrl, "_blank");
                        }
                      }}
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
                      {button.text}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Banner;
