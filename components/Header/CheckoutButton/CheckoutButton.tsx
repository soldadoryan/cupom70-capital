"use client";
import { useContext, useMemo } from "react";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import s from "./styles.module.css";

export function CheckoutButton() {
  const { products } = useContext(CartContext);

  const productsQuantity = useMemo(() => {
    return products.reduce((total, prod) => {
      return total + (prod.quantity ?? 0);
    }, 0);
  }, [products]);

  return (
    <Link href="/checkout" className={`${s.headerButton} ${s.checkoutButton}`}>
      <FaShoppingCart />
      Carrinho
      {products.length > 0 && <span>{productsQuantity}</span>}
    </Link>
  );
}
