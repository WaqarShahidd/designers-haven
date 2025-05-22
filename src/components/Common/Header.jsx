import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import { fonts } from "../../theme/theme";
import { AccountCircle, SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const slideDown = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const nav = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Shop", link: "/products" },
];

const Header = () => {
  const navigate = useNavigate();

  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

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
        <Typography
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
        </Typography>
        {!smScreen && (
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
        <IconButton>
          <SearchOutlined sx={{ color: "#000" }} />
        </IconButton>
        <IconButton>
          <AccountCircle sx={{ color: "#000" }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Header;
