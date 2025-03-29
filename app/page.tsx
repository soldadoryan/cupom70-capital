import { PageStructure } from "@/components/PageStructure/PageStructure";
import { Container } from "@/components/Container";
import { Sidebar } from "@/components/Sidebar";
import s from "./page.module.css";

export default function Home() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2>Utilize as categorias acima para navegar entre os produtos.</h2>
            <p>
              Bem-vindo à Loja VIP da Capital, o lugar ideal para você adquirir
              itens exclusivos que farão toda a diferença na sua experiência no
              servidor! Aqui, priorizamos qualidade e conveniência, garantindo
              que você tenha acesso ao melhor em apenas alguns cliques. Antes de
              começar, certifique-se de utilizar o botão localizado na topbar do
              site para ajustar a moeda dos valores para reais (BRL),
              facilitando sua compra e evitando qualquer confusão.
            </p>
            <p>
              É muito importante que você preste atenção a cada detalhe durante
              o processo de compra. Verifique com cuidado o ID que está
              utilizando e certifique-se de estar comprando para a cidade
              correta, evitando transtornos. Pequenos deslizes como esses podem
              causar atrasos ou até mesmo inviabilizar a entrega dos seus itens.
              Nosso sistema foi pensado para ser simples, mas a atenção do
              player é essencial para que tudo ocorra sem problemas.
            </p>
            <p>
              Após finalizar sua compra, nossos sistemas garantem a entrega
              automática dos itens a cada 30 minutos. No entanto, se você não
              quiser esperar, temos uma solução rápida e prática: basta utilizar
              o comando /resgatar no console F8 do seu jogo. Aproveite a Loja
              VIP da Capital e eleve sua experiência na cidade a um novo nível!
            </p>
          </main>
          <Sidebar />
        </Container>
      </PageStructure>
    </>
  );
}
