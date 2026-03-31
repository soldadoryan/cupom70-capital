import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import s from "./page.module.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Capital City | Retirada de Amarração",
};

export default function Amarracao() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>
              <span>Retirada de Amarração</span>
            </h2>
            <p>
              Adquira este produto e tenha a sua amarração removida de forma
              automática, sem precisar abrir ticket ou aguardar atendimento da
              equipe.
            </p>
            <p>
              Assim que o pagamento for aprovado, o sistema processa a remoção
              automaticamente e você já consegue puxar arma normalmente.
            </p>
            <h3>O que é amarração?</h3>
            <p>
              A amarração é uma punição aplicada a jogadores que tiveram
              conduta inapropriada ou foram atingidos pela arma prateada.
              Enquanto estiver amarrado, o jogador fica completamente impedido
              de puxar qualquer arma.
            </p>
            <h3>Importante:</h3>
            <ul>
              <li>
                A remoção é processada de forma automática após a confirmação
                do pagamento. Não é necessário entrar em contato com a equipe.
              </li>
              <li>
                Certifique-se de informar corretamente o seu ID de jogador no
                checkout para que o sistema identifique e remova a punição
                corretamente.
              </li>
              <li>
                Este produto remove apenas amarrações ativas no momento da
                compra. Novas punições aplicadas após a compra não estão
                cobertas.
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
