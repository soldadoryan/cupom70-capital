import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import { Products } from "@/components/Products";
import { Sidebar } from "@/components/Sidebar";
import productsList from "./products.json";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Capital City | Valley Sul",
};

export default function ValleySul() {
  return (
    <PageStructure>
      <Container customClass={s.customContainer}>
        <main>
          <h2 className={s.title}>Coins - Valley Sul</h2>
          <Products products={productsList} />
        </main>
        <Sidebar />
      </Container>
    </PageStructure>
  );
}
