"use client";
import useRequest from "@/hooks/useRequest";
import { ProductCard } from "./ProductCard";
import { ProductResponseType, ProductsPropsType } from "./Products.type";
import { useCallback, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import s from "./styles.module.css";
import { useState } from "react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export function Products({ products }: ProductsPropsType) {
  const { createRequest } = useRequest();
  const [limitedProducts, setLimitedProducts] = useState<ProductResponseType[]>(
    []
  );
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabs = useMemo(() => {
    const tabSet = new Set<string>();
    products.forEach((p) => {
      if (p.tab) tabSet.add(p.tab);
    });
    return Array.from(tabSet);
  }, [products]);

  const tabSlugMap = useMemo(() => {
    const map = new Map<string, string>();
    tabs.forEach((tab) => map.set(slugify(tab), tab));
    return map;
  }, [tabs]);

  const activeTab = useMemo(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && tabSlugMap.has(tabParam)) {
      return tabSlugMap.get(tabParam)!;
    }
    return tabs[0] ?? "";
  }, [searchParams, tabSlugMap, tabs]);

  const handleTabChange = useCallback(
    (tab: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", slugify(tab));
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
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
      products
        .filter((product) => !activeTab || product.tab === activeTab)
        .map((product) => {
          const productData = limitedProducts.find((p) => p.id === product.id);
          return { ...product, stock: productData?.stock };
        }),
    [products, limitedProducts, activeTab]
  );

  return (
    <>
      {tabs.length > 0 && (
        <div className={s.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${s.tab} ${activeTab === tab ? s.tabActive : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
      <div className={s.table}>
        {renderProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
