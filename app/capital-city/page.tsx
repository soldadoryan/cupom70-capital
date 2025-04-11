import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import { Products } from "@/components/Products";
import { Sidebar } from "@/components/Sidebar";
import s from "./page.module.css";
import productsList from "./products.json";

export const metadata: Metadata = {
  title: "Capital City | Principal",
};

export default function CapitalCity() {
  return (
    <PageStructure>
      <Container customClass={s.customContainer}>
        <main className={s.main}>
          <h2 className={s.title}>Coins - Capital City</h2>
          <Products products={productsList} />
        </main>
        <Sidebar />
      </Container>
    </PageStructure>
  );
}
