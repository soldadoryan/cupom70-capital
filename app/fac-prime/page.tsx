import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import s from "./page.module.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Capital City | Fac Prime",
};

export default function FacPrime() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>
              <span>Fac Prime</span> (30 Dias)
            </h2>
            <p>
              <b>- Salário Extra Automático:</b> Todos os membros online da
              facção recebem um bônus de R$2000,00 a cada 30 minutos jogados.
              Incentivo direto ao roleplay ativo!
              <br />
              <br />
              <b>- Rotas Turbinadas:</b> Bônus de 100% de entrega de itens nas
              rotas de fabricação. Ou seja, a cada blip você recebe o dobro de
              material.
              <br />
              <br />
              <b>- Garagem Exclusiva no QG:</b> A facção poderá solicitar a
              instalação de uma garagem em qualquer ponto dentro do seu QG, com
              suporte total da administração e equipe de desenvolvimento;
              <br />
              <br />
              <b>- Loja de Roupa Exclusiva no QG:</b> A facção poderá solicitar
              a instalação de uma loja de roupa exclusiva em qualquer ponto
              dentro do QG com suporte total da administração e equipe de
              desenvolvimento;
              <br />
              <br />
              <h4>Regras:</h4>
              <br />
              - Para a ativação, o líder da organização deverá abrir um ticket
              contendo o comprovante da compra;
              <br />
              - O período de 30 dias conta a partir da data de confirmação e
              ativação dos benefícios;
              <br />
              - Válido por 30 dias corridos;
              <br />- Renovação manual a cada mês;
              <br />- Exclusivo para líderes de facção;
              <br />- As localizações da garagem e loja de roupa estão sujeitas
              à aprovação da staff;
              <br />
              <br />
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
