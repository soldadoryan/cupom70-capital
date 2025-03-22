import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import { Products } from "@/components/Products";
import { Sidebar } from "@/components/Sidebar";
import s from "./page.module.css";
import productsList from "./products.json";

export const metadata: Metadata = {
  title: "Capital City | Morada do Valley",
};

export default function MoradaValley() {
  return (
    <PageStructure>
      <Container customClass={s.customContainer}>
        <main>
          <h2 className={s.title}>Coins - Morada do Valley</h2>
          <Products products={productsList} />
        </main>
        <Sidebar />
      </Container>
    </PageStructure>
  );
}
