"use client";
import { useState, createContext, useEffect, useRef } from "react";
import {
  CartContextType,
  CartProductType,
  CartProviderPropsType,
} from "./CartContext.type";

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderPropsType) {
  const firstRender = useRef(true);
  const [products, setProducts] = useState([] as CartProductType[]);

  useEffect(() => {
    if (firstRender.current) {
      const currentProducts = localStorage.getItem("products");
      if (currentProducts) {
        setProducts(JSON.parse(currentProducts) as CartProductType[]);
      }
      firstRender.current = false;
    }
  }, []);

  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  const clearProducts = () => {
    localStorage.setItem("products", JSON.stringify([]));
    setProducts([]);
  };

  return (
    <CartContext.Provider value={{ products, setProducts, clearProducts }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
