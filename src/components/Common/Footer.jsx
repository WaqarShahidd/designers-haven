import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { footerData } from "../../assets/data/dummyData";
import { fonts } from "../../theme/theme";

const Footer = () => {
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        bgcolor: "#F5F4F4",
        p: 4,
        display: "flex",
        flexDirection: smScreen ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #DDDDDD",
      }}
    >
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            mb: smScreen ? 2 : 0,
          }}
        >
          <Stack direction={"row"} gap={1}>
            <img
              src={require("../../assets/icons/logo.png")}
              alt="logo"
              style={{
                width: "75px",
                height: "75px",
                cursor: "pointer",
              }}
            />
            <Stack direction={"column"} alignItems={"center"} gap={2}>
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: fonts.styreneLight,
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                Based in Zimbabwe — Orders are currently managed directly by
                designers, with local delivery options available. Some designers
                may offer international shipping. A full checkout system is
                coming soon as we grow.
              </Typography>
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
                  backgroundColor: "#000",
                  color: "#fff",
                  fontFamily: !smScreen
                    ? fonts.styreneRegular
                    : fonts.styreneLight,
                  fontSize: "15px",
                  borderRadius: "0px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  width: smScreen ? "100%" : "40%",
                  minWidth: 0,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#333",
                    boxShadow: "none",
                  },
                }}
              >
                Join as a Designer
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Grid container spacing={2}>
            {footerData.map((item) => (
              <Grid size={{ xs: 12, sm: 6 }} key={item.id}>
                <Box>
                  <Typography
                    sx={{
                      color: "#565656",
                      textTransform: "uppercase",
                      fontSize: "11px",
                      lineHeight: "17px",
                      fontFamily: fonts.styreneRegular,
                      mb: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {item.links.map((i) => {
                    const IconComponent = i.Icon;
                    return (
                      <Box
                        key={i.name}
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          gap: 1,
                          mb: 1,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          if (i.linkUrl) {
                            window.open(
                              i.linkUrl,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }
                        }}
                      >
                        <IconComponent sx={i.iconStyle} />
                        <Typography
                          component="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "#000",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontFamily: fonts.styreneRegular,
                            mr: 1,

                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {i.name}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
            ))}
          </Grid>

          <Button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeRNEHi0dqkQHZD_SZD2OseTZmCpQ43GLlGZTMnZW3UP_lY5Q/viewform?usp=header",
                "_blank",
                "noopener,noreferrer"
              )
            }
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              fontFamily: !smScreen ? fonts.styreneRegular : fonts.styreneLight,
              fontSize: "15px",
              borderRadius: "0px",
              mt: 2,
              px: 3,
              py: 1,
              textTransform: "none",
              width: smScreen ? "100%" : "40%",
              minWidth: 0,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#333",
                boxShadow: "none",
              },
            }}
          >
            Leave Feedback
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography
            sx={{
              color: "#000",
              fontFamily: fonts.styreneLight,
              fontSize: "16px",
              textAlign: "center",
              mt: 2,
            }}
          >
            © 2025 Designer’s Haven | All rights reserved
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography
            sx={{
              color: "#565656",
              textTransform: "uppercase",
              fontSize: "11px",
              fontFamily: fonts.styreneRegular,
              textAlign: "center",
            }}
          >
            You’re viewing an early access version of Designer’s Haven. Orders
            are handled manually while we build our full checkout and delivery
            tools.
          </Typography>
        </Grid>
      </Grid>

      {/* <Box
        sx={{
          width: smScreen ? "100%" : "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontFamily: fonts.styreneMedium,
            fontSize: "16px",
            mb: 1,
          }}
        >
          Get the latest new from us
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          sx={{
            width: "70%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              boxShadow: "none",
              fontFamily: fonts.styreneRegular,
              fontSize: "14px",
              fontWeight: "400",
              borderRadius: "0px",
              "&.Mui-focused": {
                boxShadow: "none",
              },
              "& fieldset": {
                boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
                border: "1px solid #D3D4D5",
              },
              "&:hover fieldset": {
                border: "1px solid #3f3f3f",
              },
              "&.Mui-focused fieldset": {
                border: "1px solid #3f3f3f",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #D3D4D5",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D3D4D5",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D3D4D5",
                borderWidth: "1px",
              },
              "& .MuiOutlinedInput-input": {
                color: "#000",
                boxShadow: "none",
                backgroundColor: "transparent",
              },
            },
          }}
          InputProps={{
            sx: {
              height: "50px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "0px",
              },
              boxShadow: "none",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D3D4D5",
                borderWidth: "1px",
              },
            },
          }}
          type={"text"}
          placeholder={"Enter your email address"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Typography
          sx={{
            color: "#000",
            fontFamily: fonts.styreneRegular,
            fontSize: "12px",
            lineHeight: "20px",
            mt: 1.5,
          }}
        >
          By signing up, you agree to our{" "}
          <Box
            component="span"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Privacy Policy
          </Box>{" "}
          and{" "}
          <Box
            component="span"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Terms of Service
          </Box>
          .
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            fontFamily: !smScreen ? fonts.styreneRegular : fonts.styreneLight,
            fontSize: "15px",
            borderRadius: "0px",
            mt: 1,
            px: 3,
            py: 1,
            textTransform: "none",
            width: "fit-content",
            minWidth: 0,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#333",
              boxShadow: "none",
            },
          }}
        >
          Subscribe
        </Button>
      </Box> */}
    </Box>
  );
};

export default Footer;
