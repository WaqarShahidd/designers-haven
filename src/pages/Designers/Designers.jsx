import React from "react";
import Layout from "../../layout/Layout";
import { Box, Grid, Typography } from "@mui/material";
import { fonts } from "../../theme/theme";
import { allDesigners } from "../../assets/data/allDesigners";
import DesignersCard from "../../components/Designers/DesignersCard";

const Designers = () => {
  return (
    <Layout>
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
          {allDesigners.map((item) => (
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
