"use client";
import Image from "next/image";
import s from "./styles.module.css";
import { FaCartPlus } from "react-icons/fa6";
import { ProductCardPropsType } from "./ProductCard.types";
import { useCallback, useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { toast } from "react-toastify";
import { formatToBRL } from "@/utils/currency";

export function ProductCard({ product }: ProductCardPropsType) {
  const { products, setProducts } = useContext(CartContext);

  const handleAddProduct = useCallback(() => {
    const differentCityExists = products.some(
      (prod) => prod.city !== product.city
    );
    if (differentCityExists) {
      toast.error("Adicione produtos de uma mesma cidade no carrinho!");
      return;
    }

    setProducts((prevProducts) => {
      const productExists = prevProducts.some((prod) => prod.id === product.id);

      if (productExists) {
        return prevProducts.map((prod) =>
          prod.id === product.id
            ? { ...prod, quantity: (prod.quantity || 0) + 1 }
            : prod
        );
      }

      return [...prevProducts, { ...product, quantity: 1 }];
    });
    toast.success("Produto adicionado ao carrinho!");
  }, [products, product, setProducts]);

  return (
    <div className={s.card}>
      <Image
        width={260}
        height={260}
        src="/coins.webp"
        alt="Imagem de algumas coins "
        title="Coins"
        className={s.productImage}
      />
      <h4 className={s.title}>{product.name}</h4>
      <h5 className={s.price}>{formatToBRL(product.price)}</h5>
      <button onClick={handleAddProduct} className={s.buyButton}>
        <div className={s.buyButtonIcon}>
          <FaCartPlus />
        </div>
        <span>Comprar agora</span>
      </button>
    </div>
  );
}
