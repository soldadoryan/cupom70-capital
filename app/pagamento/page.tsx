import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import { PaymentCallback } from "@/components/PaymentCallback";
import s from "./page.module.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Capital City | Pagamento",
};

export default function MoradaValley() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <Suspense>
            <PaymentCallback />
          </Suspense>
        </Container>
      </PageStructure>
    </>
  );
}
