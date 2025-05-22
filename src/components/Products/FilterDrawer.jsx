import { Box, Drawer, IconButton, Typography } from "@mui/material";
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

  const selectedColorName = colorsData?.find(
    (c) => c.color === selectedColor
  )?.name;

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Box
        sx={{
          width: 400,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            borderBottom: "1px solid #DDDDDD",
          }}
        >
          <IconButton></IconButton>
          <Typography
            sx={{
              color: "#000",
              fontSize: "18px",
              fontFamily: fonts.styreneRegular,
            }}
          >
            Filters
          </Typography>

          <IconButton>
            <Close sx={{ color: "#000" }} onClick={toggleDrawer} />
          </IconButton>
        </Box>

        <Box sx={{ p: 4 }}>
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

        <Box
          sx={{
            p: 2,
            borderTop: "1px solid #DDDDDD",
          }}
        >
          <CustomBtn onClick={toggleDrawer} text={"Apply Filters"} />
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
