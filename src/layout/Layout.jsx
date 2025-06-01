import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import InfoBanner from "../components/Common/InfoBanner";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const pathName = location.pathname;

  return (
    <>
      {pathName === "/" && <InfoBanner />}

      <Header />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
