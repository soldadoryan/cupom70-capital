import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import s from "./page.module.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Capital City | Al Prioritária (Fac/Org)",
};

export default function Sinuca() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>
              <span>Mesa de Sinuca</span>
            </h2>
            <p>
              Adquira este produto e libere o sistema de sinuca na sua
              organização/facção por 30 dias.
            </p>
            <p>
              Ao contratar, você garante a instalação de uma mesa personalizada
              com a logo da sua organização, fortalecendo a identidade do seu
              grupo.
            </p>
            <p>
              Para ativar o período de 1 mês + mesa personalizada, abra um
              ticket, anexe o comprovante de pagamento e solicite a liberação à
              equipe.
            </p>
            <h3>Importante:</h3>
            <ul>
              <li>
                Após os 30 dias, a mesa permanecerá posicionada no local, porém
                o acesso ao sistema será bloqueado até que o produto seja
                adquirido novamente.
              </li>
              <li>
                Qualquer player poderá utilizar o sistema desde que possua a
                “Ficha de Sinuca”, vendida na padaria. O pagamento refere-se à
                ativação do sistema na sua mesa personalizada, e não à
                exclusividade de uso.
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
