import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import { Sidebar } from "@/components/Sidebar";
import {
  FaCar,
  FaShieldAlt,
  FaTruck,
  FaHome,
  FaCrown,
  FaTools,
  FaSprayCan,
  FaGem,
  FaLock,
} from "react-icons/fa";
import {
  GiAk47,
  GiBearFace,
  GiDeliveryDrone,
  GiFishingHook,
} from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Capital City | Pacote Deluxe",
};

const items = [
  { icon: <FaCar />, label: "G800 Prime", value: "30 dias" },
  { icon: <FaShieldAlt />, label: "Conada 48T", value: "60 dias" },
  { icon: <MdOutlineSecurity />, label: "Robozona", value: "30 dias" },
  { icon: <FaTruck />, label: "Caminhão", value: "30 dias" },
  {
    icon: <FaHome />,
    label: "Imóvel",
    value: "Contrato de 1 casa alto padrão por 30 dias",
  },
  { icon: <FaCrown />, label: "Benefício", value: "VIP Capital" },
  { icon: <FaTools />, label: "Alicate", value: "30 unidades" },
  { icon: <FaSprayCan />, label: "Spray de carro", value: "30 unidades" },
  { icon: <GiDeliveryDrone />, label: "Drones", value: "10 unidades" },
  { icon: <GiBearFace />, label: "Ursinho", value: "30 unidades" },
  {
    icon: <GiFishingHook />,
    label: "Hook",
    value: "5 unidades + 100 munições",
  },
  { icon: <FaLock />, label: "Lock Prime", value: "10 unidades" },
];

export default function PacoteDeluxe() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <div className={s.highlight}>
              <FaGem /> Oferta limitada
            </div>
            <h2 className={s.title}>
              <span>Pacote Deluxe</span>
            </h2>
            <p>
              O kit mais completo da Capital City. Frota premium, imóvel de alto
              padrão, VIP Capital e um arsenal pronto pra dominar a cidade. Tudo
              em um único pacote, liberado de uma vez.
            </p>

            <h4 className={s.sectionTitle}>O que vem no pacote</h4>
            <ul className={s.items}>
              <li className={`${s.item} ${s.featured}`}>
                <div className={s.icon}>
                  <GiAk47 />
                </div>
                <div className={s.itemText}>
                  <span className={s.itemLabel}>Armamento</span>
                  <span className={s.itemValue}>
                    30x Fuzil AR15 de lançamento (o melhor fuzil da cidade)
                  </span>
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
              - Os itens com prazo contam a partir da data de ativação;
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
