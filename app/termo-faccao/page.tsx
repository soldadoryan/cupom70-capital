import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import s from "./page.module.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Capital City | Fac Prime",
};

export default function TermoFaccao() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>
              <span>Termos e Condições</span> – Aquisição de Facções/Organizações
            </h2>
            <p>Este documento estabelece os termos e condições aplicáveis à aquisição do produto denominado <strong>Facção/Organização dentro da cidade/servidor</strong>. Ao realizar a compra, o usuário declara estar ciente e concordar integralmente com as regras descritas abaixo.</p>

            <hr />

            <h2>1. Natureza do Produto</h2>

            <p><strong>1.1.</strong> A aquisição de uma Facção/Organização concede ao comprador uma <strong>licença de uso limitada, revogável e pessoal</strong> para utilização das funcionalidades associadas à organização dentro do servidor, incluindo:</p>

            <ul>
              <li>Painel de gerenciamento da organização;</li>
              <li>Produto ou atividade associada à organização;</li>
              <li>Local designado dentro da cidade;</li>
              <li>Baús ou armazenamento destinados ao grupo.</li>
            </ul>

            <p><strong>1.2.</strong> A aquisição do produto <strong>não representa propriedade permanente</strong>, controle absoluto sobre a organização ou qualquer direito sobre:</p>

            <ul>
              <li>Sistemas do servidor;</li>
              <li>Estruturas internas da cidade;</li>
              <li>Recursos digitais disponibilizados pela administração.</li>
            </ul>

            <p>Mas sim, licença de uso das funcionalidades disponibilizadas, sujeita às regras de funcionamento do servidor.</p>

            <p><strong>1.3.</strong> A compra do produto não concede autonomia absoluta sobre a organização, permanecendo a <strong>administração do servidor responsável pelo equilíbrio, manutenção e organização do ambiente de jogo</strong>. Todos esses elementos permanecem sob titularidade e controle exclusivo da administração do servidor e do Grupo Capital.</p>

            <p><strong>1.4.</strong> A transferência de liderança da organização fica condicionada exclusivamente à aquisição do item <strong>&ldquo;Troca de Líder&rdquo;</strong>.</p>

            <hr />

            <h2>2. Requisitos de Manutenção da Organização</h2>

            <p>Para que a organização permaneça ativa dentro do servidor, deverão ser atendidos continuamente os seguintes requisitos:</p>

            <h3>2.1 Quantidade mínima de membros</h3>

            <ul>
              <li>A organização deverá manter <strong>mínimo de 15 membros cadastrados no painel</strong>;</li>
              <li>Caso o número mínimo não seja mantido, a equipe administrativa poderá:
                <ul>
                  <li>Colocar o grupo em período de observação;</li>
                  <li>Emitir advertência à liderança;</li>
                  <li>Aplicar desativação da organização, caso a situação persista.</li>
                </ul>
              </li>
            </ul>

            <h3>2.2 Atividade da liderança</h3>

            <ul>
              <li>Em caso de <strong>banimento ou inatividade do líder por período superior a 20 dias consecutivos sem login</strong>, a organização poderá ser desativada automaticamente.</li>
            </ul>

            <h3>2.3 Atividade do grupo</h3>

            <ul>
              <li>A administração poderá avaliar <strong>atividade, presença e produtividade</strong> da organização dentro da cidade;</li>
              <li>Mesmo após a aquisição do produto, <strong>grupos inativos ou sem participação relevante</strong> poderão ser advertidos ou desativados.</li>
            </ul>

            <h3>2.4 Conformidade com regras administrativas</h3>

            <ul>
              <li>O grupo e seus integrantes devem seguir as regras gerais da cidade;</li>
              <li>A licença poderá ser revogada em caso de excesso de infrações;</li>
              <li>Pode haver desativação imediata em casos graves, incluindo:
                <ul>
                  <li>Uso de programas externos para vantagem;</li>
                  <li>Crimes cibernéticos dentro do servidor.</li>
                </ul>
              </li>
            </ul>

            <h3>2.5 Penalidades</h3>

            <ul>
              <li>Advertência à liderança;</li>
              <li>Suspensão temporária de funcionalidades;</li>
              <li>Intervenção administrativa;</li>
              <li>Desativação da organização.</li>
            </ul>

            <p>A administração do servidor se reserva no direito de modificar, suspender ou descontinuar funcionalidades para garantir:</p>

            <ul>
              <li>Estabilidade do servidor;</li>
              <li>Balanceamento da economia;</li>
              <li>Qualidade da experiência;</li>
              <li>Organização da comunidade.</li>
            </ul>

            <p>Tais modificações não configuram violação da licença concedida.</p>

            <hr />

            <h2>3. Gestão Administrativa e Balanceamento do Servidor</h2>

            <p><strong>3.1.</strong> A administração poderá realizar alterações necessárias, incluindo:</p>

            <ul>
              <li>Alteração de locais;</li>
              <li>Ajustes de produtos/atividades;</li>
              <li>Modificações estruturais.</li>
            </ul>

            <p><strong>3.2.</strong> Sempre que possível, haverá aviso prévio.</p>

            <p><strong>3.3.</strong> As mudanças visam equilíbrio da economia, jogabilidade e comunidade.</p>

            <hr />

            <h2>4. Desativação da Organização</h2>

            <p><strong>4.1.</strong> A organização poderá ser desativada em casos de:</p>

            <ul>
              <li>Descumprimento de requisitos;</li>
              <li>Inatividade do líder;</li>
              <li>Falta de participação;</li>
              <li>Impacto negativo no servidor.</li>
            </ul>

            <p><strong>4.2.</strong> Em caso de desativação:</p>

            <ul>
              <li>Membros removidos do painel;</li>
              <li>Sem transferência automática de liderança.</li>
            </ul>

            <p><strong>4.3.</strong> Não há obrigatoriedade de reembolso, considerando que o produto se refere à licença de uso já usufruída.</p>

            <hr />

            <h2>5. Regras de Uso da Organização</h2>

            <p><strong>5.1.</strong> A liderança é responsável pelo comportamento dos membros.</p>

            <p><strong>5.2.</strong> O grupo deve respeitar:</p>

            <ul>
              <li>Regras do servidor;</li>
              <li>Normas da comunidade;</li>
              <li>Diretrizes administrativas;</li>
              <li>Termos de uso.</li>
            </ul>

            <p><strong>5.3.</strong> O descumprimento poderá resultar em penalidades ou desativação.</p>

            <hr />

            <h2>6. Política de Reembolso</h2>

            <p><strong>6.1.</strong> Reembolso por arrependimento em até 7 dias.</p>
            <p><strong>6.2.</strong> Após isso, não há reembolso voluntário.</p>
            <p><strong>6.3.</strong> Não há reembolso de benefícios já utilizados.</p>

            <hr />

            <h2>7. Alterações de Regras e Diretrizes</h2>

            <p><strong>7.1.</strong> Regras podem ser alteradas a qualquer momento.</p>

            <p><strong>7.2.</strong> Motivos incluem:</p>

            <ul>
              <li>Economia;</li>
              <li>Jogabilidade;</li>
              <li>Estrutura;</li>
              <li>Necessidades administrativas;</li>
              <li>Contexto do servidor.</li>
            </ul>

            <p><strong>7.3.</strong> Podem afetar:</p>

            <ul>
              <li>Regras operacionais;</li>
              <li>Limites de grupos;</li>
              <li>Diretrizes de atividade;</li>
              <li>Sistemas e funcionalidades.</li>
            </ul>

            <p><strong>7.4.</strong> Definidas pela administração.</p>

            <p><strong>7.5.</strong> A liderança declara ciência das atualizações.</p>

            <hr />

            <h2>8. Disposições Finais</h2>

            <p><strong>8.1.</strong> Termos podem ser atualizados.</p>
            <p><strong>8.2.</strong> Ao adquirir, o usuário concorda integralmente.</p>
            <br />
            <br />
            <br />
            <br />
          </main>
          <div className={s.wrapResume}>
            <Sidebar />
          </div>
        </Container>
      </PageStructure>
    </>
  );
}
