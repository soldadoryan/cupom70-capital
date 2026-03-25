import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import s from "./page.module.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Capital City | AL Prime",
};

export default function AlPrime() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>
              <span>AL Prime</span>
            </h2>
            <p>
              <b>- Aprovação Instantânea:</b> Ao realizar a compra, sua
              whitelist é liberada automaticamente na Capital City. Sem
              necessidade de abrir ticket ou aguardar análise.
              <br />
              <br />
              <b>- VIP Capital:</b> Ao entrar no servidor, utilize o comando{" "}
              <b>&quot;/alprime&quot;</b> para receber seu VIP Capital como
              bônus exclusivo da AL Automática.
              <br />
              <br />
              <h4>Como funciona:</h4>
              <br />
              1. Adicione a AL Automática ao carrinho;
              <br />
              2. Informe o seu ID de WL no checkout;
              <br />
              3. Realize o pagamento;
              <br />
              4. Sua whitelist será aprovada automaticamente;
              <br />
              5. Entre no servidor e use <b>/alprime</b> para receber seu VIP
              Capital.
              <br />
              <br />
            </p>
            <div className={s.warning}>
              ATENÇÃO: Jogadores que foram banidos ou tiveram sua whitelist
              removida por qualquer motivo NÃO poderão utilizar este produto
              para retornar ao servidor. A AL Automática é destinada
              exclusivamente a novos jogadores ou jogadores que ainda não
              possuem whitelist aprovada. Compras realizadas por jogadores
              nessas condições não serão reembolsadas.
            </div>
            <div className={s.warning}>
              ATENÇÃO: Este produto é apenas para jogadores maiores de de 18
              anos.
            </div>
          </main>
          <div className={s.wrapResume}>
            <Sidebar />
          </div>
        </Container>
      </PageStructure>
    </>
  );
}
