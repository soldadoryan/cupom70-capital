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
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>Seguir para o pagamento</h2>
            <p>
              Após a aprovação do pagamento, os produtos serão entregues
              automaticamente na cidade em que a compra foi efetuada. Estamos
              falando de uma loja de FiveM, e o prazo máximo para entrega é de
              até <b>4 horas após a aprovação da compra.</b>
            </p>
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
    </>
  );
}
