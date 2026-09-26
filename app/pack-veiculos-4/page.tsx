import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import { Sidebar } from "@/components/Sidebar";
import { FaCar, FaCarSide, FaFlagCheckered } from "react-icons/fa";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Capital City | Pack Veículos 4",
};

const items = [
  { icon: <FaCar />, label: "Africat", value: "30 dias" },
  { icon: <FaCar />, label: "Spider", value: "30 dias" },
];

export default function PackVeiculos4() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <div className={s.highlight}>
              <FaFlagCheckered /> Oferta limitada
            </div>
            <h2 className={s.title}>
              <span>Pack Veículos 4</span>
            </h2>
            <p>
              A porta de entrada pra garagem VIP. Dois veículos por um preço
              acessível pra você começar a rodar a cidade com estilo.
            </p>

            <h4 className={s.sectionTitle}>O que vem no pacote</h4>
            <ul className={s.items}>
              <li className={`${s.item} ${s.featured}`}>
                <div className={s.icon}>
                  <FaCarSide />
                </div>
                <div className={s.itemText}>
                  <span className={s.itemLabel}>Garagem</span>
                  <span className={s.itemValue}>2 veículos VIP por 30 dias</span>
                </div>
              </li>
              {items.map((item) => (
                <li key={item.label} className={s.item}>
                  <div className={s.icon}>{item.icon}</div>
                  <div className={s.itemText}>
                    <span className={s.itemLabel}>{item.label}</span>
                    <span className={s.itemValue}>{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <h4 className={s.sectionTitle}>Regras</h4>
            <p className={s.rules}>
              - Para a ativação, abra um ticket contendo o comprovante da compra
              e o seu ID na cidade;
              <br />
              - A entrega dos veículos pode levar até 2 dias úteis;
              <br />
              - Os veículos contam a partir da data de ativação;
              <br />
              - Válido por dias corridos, sem pausa;
              <br />- Produto sujeito à alteração sem aviso prévio.
            </p>
          </main>
          <div className={s.wrapResume}>
            <Sidebar />
          </div>
        </Container>
      </PageStructure>
    </>
  );
}
