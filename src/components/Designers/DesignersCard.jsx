import { Box, Typography, useMediaQuery } from "@mui/material";
import { fonts } from "../../theme/theme";
import { useNavigate } from "react-router-dom";

const DesignersCard = ({ item }) => {
  const navigate = useNavigate();
  const smScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      onClick={() => navigate(`/store/${item?.id}`)}
      sx={{
        width: "100%",
        height: "300px",
        mb: 4,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.02)",
          transition: "transform 0.2s ease-in-out",
        },
      }}
    >
      <Box
        component="img"
        src={item?.avatar}
        alt={item?.fullName}
        sx={{
          width: "100%",
          height: "250px",
          objectFit: "contain",
          display: "block",
        }}
      />

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
        {item?.fullName}
      </Typography>
      <Typography
        sx={{
          fontSize: "11px",
          fontFamily: fonts.styreneRegular,
          lineHeight: "20px",
          color: "#000",
        }}
      >
        {`${item?.city || "N/A"}, ${item?.country || "N/A"}`}
      </Typography>
    </Box>
  );
};

export default DesignersCard;
