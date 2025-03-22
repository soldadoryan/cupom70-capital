import Image from "next/image";
import s from "./styles.module.css";
import { FaCartPlus } from "react-icons/fa6";
import { ProductCardPropsType } from "./ProductCard.types";

export function ProductCard({ product }: ProductCardPropsType) {
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
      <h5 className={s.price}>{product.formattedPrice}</h5>
      <button className={s.buyButton}>
        <div className={s.buyButtonIcon}>
          <FaCartPlus />
        </div>
        <span>Comprar agora</span>
      </button>
    </div>
  );
}
