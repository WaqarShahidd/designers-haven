import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { fonts } from "../../theme/theme";
import ProductCard from "../../components/Products/ProductCard";
import FilterDrawer from "../../components/Products/FilterDrawer";
import { allProducts } from "../../assets/data/allProducts";
import { useLocation, useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";

const Products = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [filter, setFilter] = useState(false);

  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const location = useLocation();

  const searchQuery = location.state?.searchQuery || "";

  const filteredProducts = allProducts.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          // justifyContent: "space-between",
          // alignItems: "center",
          borderBottom: "1px solid #DDDDDD",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: "24px",
            fontFamily: fonts.styreneMedium,
          }}
        >
          Shop
        </Typography>

        {searchQuery && (
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Typography
              sx={{
                color: "#888",
                fontSize: "16px",
                fontFamily: fonts.styreneLight,
              }}
            >
              {filteredProducts.length} results for{" "}
              <Typography
                component={"span"}
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  fontFamily: fonts.styreneMedium,
                  fontWeight: 500,
                }}
              >
                "{searchQuery}"
              </Typography>
            </Typography>
            <IconButton
              onClick={() =>
                navigate("/products", { state: { searchQuery: "" } })
              }
            >
              <Close sx={{ color: "#000" }} />
            </IconButton>
          </Stack>
        )}

        {/* <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          width={smScreen ? "50%" : "30%"}
          justifyContent={"flex-end"}
        >
          <Typography
            sx={{
              width: smScreen ? "30%" : "15%",
              fontFamily: fonts.styreneMedium,
              fontSize: "14px",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={handleClick}
          >
            Sort
            <ArrowDropDown sx={{ color: "#000" }} />
          </Typography>
          <Typography
            sx={{
              width: smScreen ? "30%" : "15%",
              fontFamily: fonts.styreneMedium,
              fontSize: "14px",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={() => setFilter(!filter)}
          >
            Filter
          </Typography>
        </Stack> */}
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
          <MenuItem
            onClick={() => handleClose()}
            sx={{
              fontFamily: fonts.styreneLight,
              fontSize: "14px",
              color: "#000",
            }}
          >
            Featured
          </MenuItem>
          <MenuItem
            onClick={() => handleClose()}
            sx={{
              fontFamily: fonts.styreneLight,
              fontSize: "14px",
              color: "#000",
            }}
          >
            Best Selling
          </MenuItem>
          <MenuItem
            onClick={() => handleClose()}
            sx={{
              fontFamily: fonts.styreneLight,
              fontSize: "14px",
              color: "#000",
            }}
          >
            Price, low to high
          </MenuItem>
          <MenuItem
            onClick={() => handleClose()}
            sx={{
              fontFamily: fonts.styreneLight,
              fontSize: "14px",
              color: "#000",
            }}
          >
            Price, hight to low
          </MenuItem>
        </Menu>
      </Box>

      <Box sx={{ p: 4 }}>
        <Grid container spacing={2}>
          {filteredProducts.map((item) => (
            <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2.4 }} item key={item.id}>
              <ProductCard key={item.id} item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <FilterDrawer open={filter} toggleDrawer={() => setFilter(!filter)} />
    </Layout>
  );
};

export default Products;
