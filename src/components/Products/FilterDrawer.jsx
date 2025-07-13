import {
  Box,
  Checkbox,
  Drawer,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { colors, fonts } from "../../theme/theme";
import { Close } from "@mui/icons-material";
import CustomBtn from "../Common/CustomBtn";
import { CATEGORIES, ORDER_TYPES } from "../../constants/options";

const FilterDrawer = ({
  open,
  toggleDrawer,
  priceRange,
  setPriceRange,
  orderType,
  setOrderType,
  selectedCategories,
  setSelectedCategories,
}) => {
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Box
        sx={{
          width: smScreen ? 250 : 450,
          height: smScreen ? "86vh" : "100vh",
          display: "flex",
          flexDirection: "column",
        }}
        role="presentation"
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

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: 2,
            py: 4,
          }}
        >
          <Typography
            sx={{
              color: colors.textColor,
              fontSize: "16px",
              fontFamily: fonts.styreneLight,
            }}
          >
            Price Range
          </Typography>

          <Box sx={{ width: "95%", px: 1, mt: 1 }}>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={2000}
              sx={{
                color: colors.primary,
                width: "100%",
                "& .MuiSlider-thumb": {
                  width: 18,
                  height: 18,
                },
                "& .MuiSlider-valueLabel": {
                  fontFamily: fonts.styreneRegular,
                },
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: fonts.styreneLight,
                  color: colors.textColor,
                }}
              >
                $0
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: fonts.styreneLight,
                  color: colors.textColor,
                }}
              >
                $2000
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: fonts.styreneLight,
              mt: 4,
              mb: 1,
            }}
          >
            Order Type
          </Typography>
          <RadioGroup
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
          >
            {ORDER_TYPES.map((type) => (
              <FormControlLabel
                key={type.value}
                value={type.value}
                control={
                  <Radio
                    sx={{
                      color: colors.primary,
                      "&.Mui-checked": {
                        color: colors.primary,
                      },
                    }}
                  />
                }
                label={type.label}
                sx={{
                  fontSize: "14px",
                  fontFamily: fonts.styreneRegular,
                  color: colors.textColor,
                }}
              />
            ))}
          </RadioGroup>

          <Typography
            sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: fonts.styreneLight,
              mt: 4,
              mb: 1,
            }}
          >
            Categories
          </Typography>
          {CATEGORIES.map((cat) => (
            <FormControlLabel
              key={cat.value}
              control={
                <Checkbox
                  checked={selectedCategories.includes(cat.value)}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...selectedCategories, cat.value]
                      : selectedCategories.filter((v) => v !== cat.value);
                    setSelectedCategories(updated);
                  }}
                  sx={{
                    color: colors.primary,
                    "&.Mui-checked": {
                      color: colors.primary,
                    },
                  }}
                />
              }
              label={cat.label}
              sx={{
                fontSize: "14px",
                fontFamily: fonts.styreneRegular,
                color: colors.textColor,
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            px: 2,
            pb: 2,
          }}
        >
          <CustomBtn
            onClick={() => {
              setPriceRange([0, 2000]);
              setOrderType("");
              setSelectedCategories([]);
              toggleDrawer();
            }}
            text={"Reset Filters"}
            width="100%"
            secondary
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
