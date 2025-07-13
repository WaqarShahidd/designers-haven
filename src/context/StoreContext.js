import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const StoreContext = createContext();

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_PROD_BASE_URL}/api`,
});

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [designers, setDesigners] = useState([]);
  const [loading, setLoading] = useState({ products: false, designers: false });
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading((prev) => ({ ...prev, products: true }));
      const res = await axiosInstance.get(
        `/product/getAllProducts?status=active`
      );
      setProducts(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch products");
    } finally {
      setLoading((prev) => ({ ...prev, products: false }));
    }
  };

  const fetchDesigners = async () => {
    try {
      setLoading((prev) => ({ ...prev, designers: true }));
      const res = await axiosInstance.get(
        `/user/getAllDesigners?status=active`
      );
      setDesigners(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch designers");
    } finally {
      setLoading((prev) => ({ ...prev, designers: false }));
    }
  };

  const clearStore = () => {
    setProducts([]);
    setDesigners([]);
    setError(null);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        designers,
        loading,
        error,
        fetchProducts,
        fetchDesigners,
        clearStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};
