import { Box, Grid, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { fonts } from "../../theme/theme";
import { ArrowDropDown } from "@mui/icons-material";
import { wearNowData } from "../../assets/data/dummyData";
import ProductCard from "../../components/Products/ProductCard";
import FilterDrawer from "../../components/Products/FilterDrawer";

const Products = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [filter, setFilter] = useState(false);

  return (
    <Layout>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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

        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          width={"30%"}
          justifyContent={"flex-end"}
        >
          <Typography
            sx={{
              width: "15%",
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
              width: "15%",
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
        </Stack>
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
          {wearNowData.map((item) => (
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
