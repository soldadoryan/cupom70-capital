"use client";
import Image from "next/image";
import s from "./styles.module.css";
import { FaCartPlus } from "react-icons/fa6";
import { ProductCardPropsType } from "./ProductCard.types";
import { useCallback, useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { toast } from "react-toastify";
import { formatToBRL } from "@/utils/currency";
import { RiInfoI } from "react-icons/ri";

export function ProductCard({ product }: ProductCardPropsType) {
  const { products, setProducts } = useContext(CartContext);
  console.log(product);

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
        src={product.imgUrl || "/coins.webp"}
        alt="Imagem de produto"
        title="Produto Capital"
        className={s.productImage}
      />
      <h4 className={s.title}>{product.name}</h4>
      <h5 className={s.price}>{formatToBRL(product.price)}</h5>
      <div className={s.wrapButtons}>
        <button
          disabled={product.stock === 0}
          onClick={handleAddProduct}
          className={s.buyButton}
        >
          <div className={s.buyButtonIcon}>
            <FaCartPlus />
          </div>
          <span>{product.stock === 0 ? "Esgotado" : "Comprar agora"}</span>
        </button>
        {product.description && (
          <button
            disabled={product.stock === 0}
            className={s.detailsButton}
            onClick={() => window.open(product.description, "_blank")}
            title="Ver detalhes do produto"
          >
            <div className={s.detailsButtonIcon}>
              <RiInfoI />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
