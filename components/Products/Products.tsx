"use client";
import useRequest from "@/hooks/useRequest";
import { ProductCard } from "./ProductCard";
import { ProductResponseType, ProductsPropsType } from "./Products.type";
import { useCallback, useEffect, useMemo, useState } from "react";
import s from "./styles.module.css";

export function Products({ products }: ProductsPropsType) {
  const { createRequest } = useRequest();
  const [limitedProducts, setLimitedProducts] = useState<ProductResponseType[]>(
    []
  );

  const handleGetProducts = useCallback(async () => {
    const { products: limitedProds } = await createRequest<{
      products: ProductResponseType[];
    }>({
      url: `/products/${products[0].city}`,
      method: "GET",
    });

    setLimitedProducts(limitedProds);
  }, [products, createRequest]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const renderProducts = useMemo(
    () =>
      products.map((product) => {
        const productData = limitedProducts.find((p) => p.id === product.id);

        return { ...product, stock: productData?.stock };
      }),
    [products, limitedProducts]
  );

  return (
    <div className={s.table}>
      {renderProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
