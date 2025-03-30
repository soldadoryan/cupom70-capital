"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { paymentStatusType } from "./PaymentCallback.type";
import { paymentStatus } from "./paymentStatus.mock";
import s from "./styles.module.css";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";

export function PaymentCallback() {
  const router = useRouter();
  const { clearProducts } = useContext(CartContext);
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const status = searchParams.get("status");
  const currentStatus =
    paymentStatus[(status! as paymentStatusType) ?? "in_process"];

  useEffect(() => {
    if (status) {
      clearProducts();
    } else {
      router.push("/");
    }
  }, []);

  return (
    <main className={s.main}>
      <h2 className={s.title}>
        Pagamento{" "}
        <span className={s[status ?? "in_process"]}>{currentStatus.label}</span>
      </h2>
      <h3 className={s.subtitle}>Número da operação: #{paymentId}</h3>
      <p className={s.description}>{currentStatus.description}</p>
      <p className={s.description}>
        Em caso de dúvidas, basta entrar em contato através dos tickets de
        suporte nos servidores do Discord da cidade em questão e{" "}
        <b>informar o seu número de operação descrito acima</b>.
      </p>
    </main>
  );
}
