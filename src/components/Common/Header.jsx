import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import { fonts } from "../../theme/theme";
import {
  AccountCircle,
  Close,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { nav } from "../../assets/data/dummyData";
import MobileDrawer from "./MobileDrawer";
import logo from "../../../src/assets/icons/IMG_8205.png";

const slideDown = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const Header = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [banner, setBanner] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

  const [showSearch, setShowSearch] = useState(false);

  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {banner && (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#F5F5F5", px: smScreen ? 1 : 4 }}
        >
          <Typography
            sx={{
              fontSize: "12px",

              color: "#000",
              fontFamily: fonts.styreneLight,
            }}
          >
            We’re starting with the marketplace first — to help designers start
            selling and getting seen now. As we grow together, we’ll introduce
            tools to support your brand, creativity, and professional
            development.
          </Typography>
          <IconButton onClick={() => setBanner(false)}>
            <Close
              sx={{ color: "#000" }}
              onClick={() => setShowSearch(false)}
            />
          </IconButton>
        </Stack>
      )}
      <Box
        ref={ref}
        sx={{
          position: isSticky ? "fixed" : "relative",
          top: 0,
          width: isSticky ? (smScreen ? "90%" : "97.5%") : "auto",
          backgroundColor: "#fff",
          zIndex: 5,
          animation: isSticky ? `${slideDown} 0.4s ease-in-out` : "none",
          transition: "all 0.3s ease-in-out",
          p: 3,
          py: isSticky ? 1 : 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: isSticky ? 3 : "none",
          borderBottom: "1px solid #DDDDDD",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={4}
          width={mdScreen ? "100%" : "50%"}
        >
          <IconButton onClick={toggleSidebar}>
            <MenuOutlined />
          </IconButton>
          {/* <Typography
          onClick={() => navigate("/")}
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#000",
            fontFamily: fonts.styreneBlack,
            lineHeight: "0",
            letterSpacing: "0.5px",
            cursor: "pointer",
          }}
        >
          DH.
        </Typography> */}
          <img
            onClick={() => navigate("/")}
            src={logo}
            style={{
              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
          />
          {smScreen ? (
            <MobileDrawer open={open} toggleSidebar={toggleSidebar} />
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                flexWrap: "wrap",
                gap: 4,
                width: "50%",
              }}
            >
              {nav.map((item) => (
                <Typography
                  onClick={() => navigate(item.link)}
                  sx={{
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "14px",
                    fontFamily: fonts.styreneLight,
                    letterSpacing: "0.5px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#0F3460",
                      fontFamily: fonts.styreneMedium,
                      transition: "all 0.3s ease-in-out",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          )}
        </Stack>

        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <IconButton onClick={() => setShowSearch(true)}>
            <SearchOutlined sx={{ color: "#000" }} />
          </IconButton>
          {/* <IconButton>
          <AccountCircle sx={{ color: "#000" }} />
        </IconButton> */}
        </Stack>

        {showSearch && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "20%",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
            }}
            onClick={() => setShowSearch(false)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 4,
                py: 2,
                borderBottom: "1px solid #DDD",
                backgroundColor: "#fff",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  fontFamily: fonts.styreneBlack,
                  color: "#000",
                }}
              >
                DH.
              </Typography>
              <IconButton onClick={() => setShowSearch(false)}>
                <Close sx={{ color: "#000" }} />
              </IconButton>
            </Box>

            <Box
              sx={{
                px: 4,
                py: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <SearchOutlined sx={{ color: "#000" }} />
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "18px",
                  fontFamily: fonts.styreneRegular,
                  width: "100%",
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Header;
