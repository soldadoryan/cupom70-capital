import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import s from "./page.module.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Capital City | Atualização de QG",
};

export default function AtualizacaoQG() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>
              <span>Atualização de QG</span>
            </h2>

            <p>
              <b>
                ATENÇÃO: Este produto é destinado exclusivamente a líderes de
                organizações e facções ativas que possuam painel, produto e QG
                devidamente cadastrados na Capital City.
              </b>
              <br />
              <br />
              <b>
                A aquisição deste produto está condicionada à autorização prévia
                da Head Staff, obtida por meio de ticket ou grupo de suporte.
              </b>
              <br />
              <br />O serviço de Atualização de QG é direcionado a líderes de
              organizações e facções que desejam reformar ou transferir seus
              Quartéis-Generais para uma nova localidade.
            </p>
            <ul>
              <li>
                A aquisição é restrita a líderes de organizações e facções
                devidamente ativas;
              </li>
              <li>
                É indispensável a autorização prévia da Staff para a realização
                da compra;
              </li>
              <li>
                Após a aquisição, o comprovante deverá ser encaminhado ao Grupo
                de Suporte e/ou via ticket para dar início ao procedimento;
              </li>
              <li>
                Este serviço permite a atualização de um mapa existente ou a
                obtenção de um novo mapa para o grupo, conforme a
                disponibilidade na cidade. Também é possível solicitar a
                importação de um mapa externo, sujeita à disponibilidade de
                espaço autorizado pela Staff;
              </li>
              <li>
                Serão aceitos apenas mapas MLO provenientes de estabelecimentos
                reconhecidos (lojas oficiais) especializados em interiores para
                FiveM.
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
