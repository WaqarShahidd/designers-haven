import Banner from "../../components/HomePage/Banner";
import BestSeller from "../../components/HomePage/BestSeller";
import WearNowProducts from "../../components/HomePage/WearNowProducts";
import FeaturedProducts from "../../components/HomePage/FeaturedProducts";
import BottomNote from "../../components/HomePage/BottomNote";
import Layout from "../../layout/Layout";
import EarlyAccessModal from "../../components/HomePage/EarlyAccessModal";
import { useStore } from "../../context/StoreContext";
import { useEffect } from "react";

const HomePage = () => {
  const { products, fetchProducts, loading, error } = useStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

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
