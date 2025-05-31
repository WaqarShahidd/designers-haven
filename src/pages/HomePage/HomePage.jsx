import { Box } from "@mui/material";
import Header from "../../components/Common/Header";
import Banner from "../../components/HomePage/Banner";
import BestSeller from "../../components/HomePage/BestSeller";
import WearNowProducts from "../../components/HomePage/WearNowProducts";
import FeaturedProducts from "../../components/HomePage/FeaturedProducts";
import BottomNote from "../../components/HomePage/BottomNote";
import Layout from "../../layout/Layout";
import EarlyAccessModal from "../../components/HomePage/EarlyAccessModal";

const HomePage = () => {
  return (
    <Layout>
      <EarlyAccessModal />
      <Banner />

      <BestSeller />

      <WearNowProducts />

      <BottomNote />

      <FeaturedProducts />
    </Layout>
  );
};

export default HomePage;
