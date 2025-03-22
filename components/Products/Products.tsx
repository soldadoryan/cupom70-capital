import { ProductCard } from "./ProductCard";
import { ProductsPropsType } from "./Products.type";
import s from "./styles.module.css";

export function Products({ products }: ProductsPropsType) {
  return (
    <div className={s.table}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
