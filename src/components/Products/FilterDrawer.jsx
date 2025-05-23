import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { fonts } from "../../theme/theme";
import { Close } from "@mui/icons-material";
import {
  colorsData,
  materialData,
  sizesData,
} from "../../assets/data/dummyData";
import CustomBtn from "../Common/CustomBtn";

const FilterDrawer = ({ open, toggleDrawer }) => {
  const [selectedColor, setSelectedColor] = useState(colorsData?.[0]);

  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Box
        sx={{
          width: smScreen ? 250 : 400,
          height: smScreen ? "86vh" : "100vh",
          display: "flex",
          flexDirection: "column",
        }}
        role="presentation"
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            borderBottom: "1px solid #DDDDDD",
          }}
        >
          <Box />
          <Typography
            sx={{
              color: "#000",
              fontSize: "18px",
              fontFamily: fonts.styreneRegular,
            }}
          >
            Filters
          </Typography>

          <IconButton onClick={toggleDrawer}>
            <Close sx={{ color: "#000" }} />
          </IconButton>
        </Box>

        {/* Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: 2,
            py: 4,
          }}
        >
          {/* Color Section */}
          <Typography
            sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: fonts.styreneLight,
            }}
          >
            Color
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1.2,
              mt: 2,
            }}
          >
            {colorsData.map((clr) => (
              <Box
                key={clr.color}
                sx={{
                  width: 30,
                  height: 30,
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
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    bgcolor: clr.color,
                    cursor: "pointer",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Material Section */}
          <Typography
            sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: fonts.styreneLight,
              mt: 4,
              mb: 2,
            }}
          >
            Material
          </Typography>
          {materialData.map((material) => (
            <Typography
              key={material.material}
              sx={{
                color: "#565656",
                fontSize: "14px",
                fontFamily: fonts.styreneLight,
                mb: 0.5,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {material.material}
            </Typography>
          ))}

          {/* Sizes Section */}
          <Typography
            sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: fonts.styreneLight,
              mt: 4,
              mb: 2,
            }}
          >
            Sizes
          </Typography>
          {sizesData.map((size) => (
            <Typography
              key={size.size}
              sx={{
                color: "#565656",
                fontSize: "14px",
                fontFamily: fonts.styreneLight,
                mb: 0.5,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {size.size}
            </Typography>
          ))}
        </Box>

        {/* Footer */}
        <Box
          sx={{
            px: 2,
            borderTop: "1px solid #DDDDDD",
          }}
        >
          <CustomBtn
            onClick={toggleDrawer}
            text={"Apply Filters"}
            width="100%"
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
