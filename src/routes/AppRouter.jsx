import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Products from "../pages/Products/Products";
import StoreFront from "../pages/StoreFront/StoreFront";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store/:id" element={<StoreFront />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
