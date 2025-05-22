import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
