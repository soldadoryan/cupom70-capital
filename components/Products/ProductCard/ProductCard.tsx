"use client";
import Image from "next/image";
import s from "./styles.module.css";
import { FaCartPlus } from "react-icons/fa6";
import { ProductCardPropsType } from "./ProductCard.types";
import { useCallback, useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { toast } from "react-toastify";
import { formatToBRL } from "@/utils/currency";
import { RiInfoI } from "react-icons/ri";

const AL_AUTOMATICA_ID = "al_automatica_capital";

export function ProductCard({ product }: ProductCardPropsType) {
  const { products, setProducts } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  console.log(product);

  const hasAlAutomatica = products.some((p) => p.id === AL_AUTOMATICA_ID);

  const addProductToCart = useCallback(() => {
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
  }, [product, setProducts]);

  const handleConfirmAlAutomatica = useCallback(() => {
    setProducts([{ ...product, quantity: 1 }]);
    setShowModal(false);
    toast.success("Carrinho atualizado com AL Automática!");
  }, [product, setProducts]);

  const handleAddProduct = useCallback(() => {
    const differentCityExists = products.some(
      (prod) => prod.city !== product.city
    );
    if (differentCityExists) {
      toast.error("Adicione produtos de uma mesma cidade no carrinho!");
      return;
    }

    // Bloqueia adicionar outros produtos se AL Automática está no carrinho
    if (hasAlAutomatica && product.id !== AL_AUTOMATICA_ID) {
      toast.error(
        "Remova a AL Automática do carrinho para adicionar outros produtos!"
      );
      return;
    }

    // Se está adicionando AL Automática e já tem itens no carrinho
    if (product.id === AL_AUTOMATICA_ID && products.length > 0) {
      setShowModal(true);
      return;
    }

    addProductToCart();
  }, [products, product, hasAlAutomatica, addProductToCart]);

  return (
    <>
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

      {showModal && (
        <div className={s.modalOverlay}>
          <div className={s.modal}>
            <h4>Atenção</h4>
            <p>
              A AL Automática não pode ser comprada junto com outros produtos.
              Todos os itens do carrinho serão removidos.
            </p>
            <div className={s.modalButtons}>
              <button
                className={s.modalConfirm}
                onClick={handleConfirmAlAutomatica}
              >
                Confirmar
              </button>
              <button
                className={s.modalCancel}
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
