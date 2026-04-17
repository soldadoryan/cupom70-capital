import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import { Products } from "@/components/Products";
import { Sidebar } from "@/components/Sidebar";
import s from "./page.module.css";
import productsList from "./products.json";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Capital City | Morada do Valley",
};

export default function MoradaValley() {
  return (
    <PageStructure>
      <Suspense fallback={<div>Loading...</div>}>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>Morada do Valley</h2>
            <Products products={productsList} />
          </main>
          <Sidebar />
        </Container>
      </Suspense>
    </PageStructure>
  );
}
