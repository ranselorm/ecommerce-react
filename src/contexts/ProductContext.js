import React, { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      if (!response.ok) {
        console.log("Error!!!");
        setIsLoading(false);
      }
      setProducts(data);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
