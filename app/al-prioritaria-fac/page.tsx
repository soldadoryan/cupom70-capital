import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import s from "./page.module.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Capital City | Al Prioritária (Fac/Org)",
};

export default function AlPrioritariaFac() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>
              <span>Al Prioritária (Fac/Org)</span>
            </h2>

            <p>
              <b>
                ATENÇÃO: A aquisição deste produto é exclusiva para líderes de
                organizações/facções ativas que possuam painel e produto
                cadastrados na Capital City.
              </b>
              <br />
              <br />
              <b>
                A compra deste produto requer autorização prévia da Head Staff,
                obtida mediante alinhamento via ticket ou grupo de suporte.
              </b>
              <br />
              <br />
              A Al Prioritária (Fac/Org) é destinada a líderes de
              organizações/facções que buscam otimizar a eficiência operacional
              no servidor. Ao adquirir este produto, sua organização/facção
              obtém o direito de indicar até 15 novos membros externos à cidade.
              Consulte as condições abaixo:
            </p>
            <ul>
              <li>
                A aquisição é restrita a líderes de organizações/facções
                devidamente ativas;
              </li>
              <li>
                É obrigatória a autorização prévia da Staff para efetuar a
                compra;
              </li>
              <li>
                Após a aquisição, o comprovante deve ser enviado no Grupo de
                Suporte e/ou via ticket para dar início ao processo de
                indicação;
              </li>
              <li>
                Todas as indicações estão sujeitas à avaliação da Staff,
                podendo ser aprovadas ou recusadas;
              </li>
              <li>
                Em caso de recusa, a organização poderá apresentar um novo
                candidato em substituição;
              </li>
              <li>
                Caso um membro indicado perca a Whitelist por inatividade, sua
                reintegração estará condicionada à aquisição do Unban
                Inatividade;
              </li>
              <li>
                O membro indicado que se desligar da organização terá sua
                Whitelist revogada automaticamente;
              </li>
            </ul>
          </main>
          <div className={s.wrapResume}>
            <Sidebar />
          </div>
        </Container>
      </PageStructure>
    </>
  );
}
