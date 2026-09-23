import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import { Sidebar } from "@/components/Sidebar";
import {
  FaCar,
  FaHome,
  FaCrown,
  FaSprayCan,
  FaLock,
  FaCoins,
} from "react-icons/fa";
import { GiBearFace, GiDeliveryDrone, GiFishingHook } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Capital City | Pacote Super VIP",
};

const items = [
  { icon: <FaCar />, label: "Veículos", value: "Robozona e Astra" },
  { icon: <FaCrown />, label: "Benefício", value: "VIP Ouro" },
  { icon: <FaHome />, label: "Imóvel", value: "Casa básica" },
  { icon: <FaLock />, label: "Lock Prime", value: "3 unidades" },
  { icon: <GiDeliveryDrone />, label: "Drone", value: "1 unidade" },
  { icon: <GiBearFace />, label: "Ursinho", value: "5 unidades" },
  { icon: <GiFishingHook />, label: "Hook", value: "1 unidade + 10 munições" },
  { icon: <FaSprayCan />, label: "Spray", value: "5 unidades" },
];

export default function PacoteSuperVip() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <div className={s.highlight}>
              <FaCoins /> Oferta limitada
            </div>
            <h2 className={s.title}>
              <span>Pacote Super VIP</span>
            </h2>
            <p>
              O ponto de partida ideal pra quem quer começar forte na Capital
              City. Dois veículos, VIP Ouro, casa garantida e uma maleta de 500K
              Gold pra você entrar no RP já com caixa.
            </p>

            <h4 className={s.sectionTitle}>O que vem no pacote</h4>
            <ul className={s.items}>
              <li className={`${s.item} ${s.featured}`}>
                <div className={s.icon}>
                  <MdOutlineAttachMoney />
                </div>
                <div className={s.itemText}>
                  <span className={s.itemLabel}>Bônus</span>
                  <span className={s.itemValue}>Maleta de 500K Gold</span>
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
              - Os benefícios são liberados após a confirmação da compra;
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
