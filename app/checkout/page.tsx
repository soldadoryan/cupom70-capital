import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import { CartAndResume } from "@/components/CartAndResume";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Capital City | Checkout",
};

export default function MoradaValley() {
  return (
    <PageStructure>
      <Container customClass={s.customContainer}>
        <main className={s.main}>
          <h2 className={s.title}>Seguir para o pagamento</h2>
          <button className={s.paymentButton}>
            Continuar para o pagamento
          </button>
        </main>
        <div className={s.wrapResume}>
          <div className={s.cardCoupon}>
            Os produtos deste carrinho já estão com o cupom de 70% de desconto
            aplicado!
          </div>
          <CartAndResume />
        </div>
      </Container>
    </PageStructure>
  );
}
