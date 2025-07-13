import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { fonts } from "../../theme/theme";
import DesignersCard from "../../components/Designers/DesignersCard";
import { useStore } from "../../context/StoreContext";

const Designers = () => {
  const { designers, fetchDesigners, loading, error } = useStore();

  useEffect(() => {
    if (designers.length === 0) {
      fetchDesigners();
    }
  }, []);

  return (
    <Layout>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading.designers}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
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
          Designers
        </Typography>
      </Box>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={2}>
          {designers &&
            designers?.map((item) => (
              <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2.4 }} item key={item.id}>
                <DesignersCard key={item.id} item={item} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Designers;
