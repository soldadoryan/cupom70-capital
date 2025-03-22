import { PageStructurePropsType } from "./PageStructure.types";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import s from "./styles.module.css";

export function PageStructure({ children }: PageStructurePropsType) {
  return (
    <section className={s.page}>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
