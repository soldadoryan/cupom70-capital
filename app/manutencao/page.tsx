import Image from "next/image";
import { Container } from "@/components/Container";
import { ShopStatus } from "@/components/ShopStatus";
import s from "./page.module.css";

export default function Manutencao() {
  return (
    <>
      <ShopStatus />
      <section className={s.page}>
        <Container customClass={`${s.container}`}>
          <Image
            width={150}
            height={150}
            src="/logo.webp"
            alt="A letra C com alguns prédios dentro sendo utilizada como logo"
            title="Logo Grupo Capital"
            className={s.logo}
          />
          <h1>
            Serviço indisponível no momento.
            <br /> Voltaremos em breve.
          </h1>
        </Container>
      </section>
    </>
  );
}
