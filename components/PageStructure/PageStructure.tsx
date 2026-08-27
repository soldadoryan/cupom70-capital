import { PageStructurePropsType } from "./PageStructure.types";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Auth } from "../Auth";
import { ShopStatus } from "../ShopStatus";
import s from "./styles.module.css";

export function PageStructure({ children }: PageStructurePropsType) {
  return (
    <ShopStatus>
      <Auth />
      <section className={s.page}>
        <Header />
        {children}
        <Footer />
      </section>
    </ShopStatus>
  );
}
