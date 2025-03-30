import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import { PaymentCallback } from "@/components/PaymentCallback";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Capital City | Pagamento",
};

export default function MoradaValley() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <PaymentCallback />
        </Container>
      </PageStructure>
    </>
  );
}
