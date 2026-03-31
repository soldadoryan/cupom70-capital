import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import s from "./page.module.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Capital City | Unban Automático",
};

export default function UnbanAuto() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>
              <span>Unban Automático</span>
            </h2>
            <p>
              Adquira este produto e tenha o seu ban removido de forma
              automática, sem precisar abrir ticket ou aguardar atendimento da
              equipe.
            </p>
            <p>
              Assim que o pagamento for aprovado, o sistema processa a liberação
              automaticamente e você já pode logar na cidade normalmente.
            </p>
            <h3>Importante:</h3>
            <ul>
              <li>
                O unban é processado de forma automática após a confirmação do
                pagamento. Não é necessário entrar em contato com a equipe.
              </li>
              <li>
                Certifique-se de realizar a compra com a mesma conta que está
                banida para que o sistema identifique corretamente o jogador.
              </li>
              <li>
                O produto não oferece cobertura em casos de banimento decorrentes de atitudes preconceituosas ou uso de ferramentas ilegais.
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
