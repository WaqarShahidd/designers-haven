import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { fonts } from "../../theme/theme";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, store }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const designer = item?.store ||
    store || { fullName: "Unknown Designer", avatar: "" };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          position: "relative",
          width: "100%",
          height: "250px",
          overflow: "hidden",
          borderRadius: 1,
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
        onClick={() => navigate(`/product/${item?.id}`)}
      >
        <Box
          component="img"
          src={item?.images[0]}
          alt={item?.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />

        {hover && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "25%",
              bgcolor: "rgba(255, 255, 255, 0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <Box
                component={"img"}
                src={designer?.avatar}
                alt={designer?.fullName}
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "contain",
                }}
              />
              <Typography
                component={"span"}
                sx={{
                  fontSize: "10px",
                  fontFamily: fonts.styreneRegular,
                  lineHeight: "16px",
                  color: "#000",
                }}
              >
                {designer?.fullName}
              </Typography>
            </Stack>

            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1.2,
              }}
            >
              {(item.colors || []).map((clr) => (
                <Box
                  sx={{
                    width: 20,
                    height: 20,
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
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      bgcolor: clr.color,
                      cursor: "pointer",
                    }}
                  />
                </Box>
              ))}
            </Box> */}
          </Box>
        )}
      </Box>

      {/* Name and price */}
      <Typography
        sx={{
          mt: 1,
          mb: 0.5,
          fontSize: "12px",
          fontFamily: fonts.styreneMedium,
          lineHeight: "20px",
          color: "#000",
        }}
      >
        {item?.name}
      </Typography>
      <Typography
        sx={{
          fontSize: "11px",
          fontFamily: fonts.styreneRegular,
          lineHeight: "20px",
          color: "#000",
        }}
      >
        ${item?.price}
      </Typography>
    </Box>
  );
};

export default ProductCard;
