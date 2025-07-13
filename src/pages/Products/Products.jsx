import {
  Backdrop,
  Box,
  Chip,
  CircularProgress,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Layout from "../../layout/Layout";
import { fonts } from "../../theme/theme";
import ProductCard from "../../components/Products/ProductCard";
import FilterDrawer from "../../components/Products/FilterDrawer";
import { useLocation, useNavigate } from "react-router-dom";
import { Close, SwapVert, Tune } from "@mui/icons-material";
import { useStore } from "../../context/StoreContext";
import { CATEGORIES, SORT_OPTIONS } from "../../constants/options";

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

  const { products, fetchProducts, loading } = useStore();

  const [sortOption, setSortOption] = useState("featured");

  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [orderType, setOrderType] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProducts = useMemo(() => {
    let result = products?.filter((item) =>
      item?.name?.toLowerCase()?.includes(searchQuery.toLowerCase())
    );

    if (orderType) {
      result = result.filter((item) => item.orderType === orderType);
    }

    if (selectedCategories.length > 0) {
      result = result.filter((item) =>
        selectedCategories.some((cat) => item.categories.includes(cat))
      );
    }

    result = result.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    switch (sortOption) {
      case "priceLowToHigh":
        result = result.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        result = result.sort((a, b) => b.price - a.price);
        break;
      case "featured":
      default:
        result = result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }

    return result;
  }, [
    products,
    searchQuery,
    orderType,
    selectedCategories,
    priceRange,
    sortOption,
  ]);

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  return (
    <Layout>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading.products}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Box
        sx={{
          p: 4,
          gap: 2,
          borderBottom: "1px solid #DDDDDD",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
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
            width={smScreen ? "50%" : "40%"}
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
                gap: 1,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={handleClick}
            >
              <SwapVert sx={{ color: "#000" }} />
              Sort
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
                gap: 1,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => setFilter(!filter)}
            >
              <Tune sx={{ color: "#000" }} />
              Filter
            </Typography>
          </Stack>
        </Box>

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

        {(orderType ||
          selectedCategories.length ||
          priceRange[0] !== 0 ||
          priceRange[1] !== 2000) && (
          <Box
            sx={{
              pt: 2,
              pb: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {orderType && (
              <Chip
                label={`Order Type: ${orderType}`}
                onDelete={() => setOrderType("")}
                sx={{
                  fontFamily: fonts.styreneLight,
                  backgroundColor: "#f0f0f0",
                }}
              />
            )}

            {selectedCategories.map((cat) => (
              <Chip
                key={cat}
                label={CATEGORIES.find((c) => c.value === cat)?.label || cat}
                onDelete={() =>
                  setSelectedCategories((prev) => prev.filter((c) => c !== cat))
                }
                sx={{
                  fontFamily: fonts.styreneLight,
                  backgroundColor: "#f0f0f0",
                }}
              />
            ))}

            {(priceRange[0] !== 0 || priceRange[1] !== 2000) && (
              <Chip
                label={`Price: ${priceRange[0]} - ${priceRange[1]}`}
                onDelete={() => setPriceRange([0, 2000])}
                sx={{
                  fontFamily: fonts.styreneLight,
                  backgroundColor: "#f0f0f0",
                }}
              />
            )}
          </Box>
        )}

        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
          {SORT_OPTIONS.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => {
                setSortOption(option.value);
                handleClose();
              }}
              sx={{
                fontFamily: fonts.styreneLight,
                fontSize: "14px",
              }}
            >
              {option.label}
            </MenuItem>
          ))}
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

      <FilterDrawer
        open={filter}
        toggleDrawer={() => setFilter(!filter)}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        orderType={orderType}
        setOrderType={setOrderType}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </Layout>
  );
};

export default Products;
