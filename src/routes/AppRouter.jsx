import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Products from "../pages/Products/Products";
import StoreFront from "../pages/StoreFront/StoreFront";
import About from "../pages/About/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store/:id" element={<StoreFront />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
