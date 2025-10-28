import { Metadata } from "next";
import { PageStructure } from "@/components/PageStructure";
import { Container } from "@/components/Container";
import s from "./page.module.css";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Capital City | Bunkers",
};

export default function Bunkers() {
  return (
    <>
      <PageStructure>
        <Container customClass={s.customContainer}>
          <main className={s.main}>
            <h2 className={s.title}>
              <span>Bunkers</span>
            </h2>
            <h3>Bunker Tier 1</h3>
            <h4>Estrutura:</h4>
            <p>
              <b>- Trancas nas portas:</b> As trancas terão permissão de
              abertura apenas para o seu grupo;
              <br />
              <br />
              <b>- Macas:</b> Macas posicionadas dentro do bunker para sanar o
              sono dos seus membros;
              <br />
              <br />
              <b>- Baú de 500kg:</b> Baú de 500kg para armazenamento de recursos
              e suprimentos (ESTE BAÚ PODE SER ROUBADO POS OUTROS SOBREVIVENTES
              COM LOCKPICK-PRIME);
              <br />
              <br />
              <b>- Loja de roupa:</b> Blip de loja de roupa exclusivo para os
              membros do grupo;
              <br />
              <br />
              <b>- Tatuagem:</b> Blip de tatuagem exclusivo para os membros do
              grupo;
              <br />
              <br />
              <b>- Barbeiro:</b> Blip de barbeiro exclusivo para os membros do
              grupo;
              <br />
              <br />
              <b>- Fogueiras:</b> Fogueiras exclusivas para craft de comidas;
              <br />
              <br />
              <b>- Estrutura de Bunker Tier 1:</b> Bunker menor com espaço
              limitado (consulte a staff para mais informações);
              <br />
              <br />
            </p>
            <h4>Itens:</h4>
            <p>
              <b>
                - <span>3x</span> AP Pistol;
              </b>
              <br />
              <br />
              <b>
                - <span>3x</span> MTAR X;
              </b>
              <br />
              <br />
              <b>
                - <span>1000x</span> munições de 9mm;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Pet Pantera;
              </b>
              <br />
              <br />
              <b>
                - <span>100x</span> Colete Balístico;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Kits Médicos;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Bandagens;
              </b>
              <br />
              <br />
            </p>
            <Image
              src="/bunkers.png"
              className={s.bunkerImage}
              alt="Bunkers"
              width={500}
              height={300}
            />
            <h3>Bunker Tier 2</h3>
            <h4>Estrutura:</h4>
            <p>
              <b>- Estrutura do Tier 1:</b> Toda a estrutura do Tier 1 estará
              inclusa no Tier 2;
              <br />
              <br />
              <b>- Blip de garagem:</b> Blip de garagem com permissão para o
              grupo;
              <br />
              <br />
              <b>- Capacidade do baú aumentado para 800kg:</b> Baú de 500kg para
              armazenamento de recursos e suprimentos (ESTE BAÚ PODE SER ROUBADO
              POS OUTROS SOBREVIVENTES COM LOCKPICK-PRIME);
              <br />
              <br />
              <b>- Estrutura de Bunker Tier 2:</b> Bunker médio com espaço
              restrito (consulte a staff para mais informações);
              <br />
              <br />
            </p>
            <h4>Itens:</h4>
            <p>
              <b>
                - <span>3x</span> AP Pistol;
              </b>
              <br />
              <br />
              <b>
                - <span>3x</span> MTAR X;
              </b>
              <br />
              <br />
              <b>
                - <span>1600x</span> munições de 9mm;
              </b>
              <br />
              <br />
              <b>
                - <span>15x</span> Machadinha de Pedra;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Pet Pantera;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Pet Husky;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Upgrade de Barraca;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Foice Ceifatora de Zumbi;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Veículo especial de Zumbi (até 1000 coins);
              </b>
              <br />
              <br />
              <b>
                - <span>100x</span> Colete Balístico;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Kits Médicos;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Bandagens;
              </b>
              <br />
              <br />
              <b>
                - <span>10x</span> Camisa de Força;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Rações Militares;
              </b>
              <br />
              <br />
              <b>
                - <span>30x</span> Seringas;
              </b>
              <br />
              <br />
              <b>
                - <span>10x</span> Proficiências de cada;
              </b>
              <br />
              <br />
              <b>
                - <span>20x</span> Rádios;
              </b>
              <br />
              <br />
              <b>
                - <span>20x</span> GNSS;
              </b>
              <br />
              <br />
            </p>
            <Image
              src="/bunkers.png"
              className={s.bunkerImage}
              alt="Bunkers"
              width={500}
              height={300}
            />
            <h3>Bunker Tier 3</h3>
            <h4>Estrutura:</h4>
            <p>
              <b>- Estrutura do Tier 2:</b> Toda a estrutura do Tier 2 estará
              inclusa no Tier 3;
              <br />
              <br />
              <b>- Estrutura de Bunker Tier 3:</b> Bunker menor com espaço
              limitado;
              <br />
              <br />
            </p>
            <h4>Itens:</h4>
            <p>
              <b>
                - <span>Fac Prime:</span> Para todos os membros do grupo até o
                fim do roleplay de sobrevivência;
              </b>
              <br />
              <br />
              <b>
                - <span>3x</span> AP Pistol;
              </b>
              <br />
              <br />
              <b>
                - <span>3x</span> MTAR X;
              </b>
              <br />
              <br />
              <b>
                - <span>1600x</span> munições de 9mm;
              </b>
              <br />
              <br />
              <b>
                - <span>15x</span> Machadinha de Pedra;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Pet Pantera;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Pet Husky;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Upgrade de Barraca;
              </b>
              <br />
              <br />
              <b>
                - <span>2x</span> Foice Ceifatora de Zumbi;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Arco Mítico com 1000 flechas;
              </b>
              <br />
              <br />
              <b>
                - <span>5x</span> Máscara de Gás;
              </b>
              <br />
              <br />
              <b>
                - <span>10x</span> Lockpick Prime;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Veículo especial de Zumbi (até 1000 coins);
              </b>
              <br />
              <br />
              <b>
                - <span>100x</span> Colete Balístico;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Kits Médicos;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Bandagens;
              </b>
              <br />
              <br />
              <b>
                - <span>10x</span> Camisa de Força;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Rações Militares;
              </b>
              <br />
              <br />
              <b>
                - <span>30x</span> Seringas;
              </b>
              <br />
              <br />
              <b>
                - <span>10x</span> Proficiências de cada;
              </b>
              <br />
              <br />
              <b>
                - <span>20x</span> Rádios;
              </b>
              <br />
              <br />
              <b>
                - <span>20x</span> GNSS;
              </b>
              <br />
              <br />
              <b>
                - <span>5x</span> Barracas;
              </b>
              <br />
              <br />
              <b>
                - <span>5x</span> Upgrades de Barraca;
              </b>
              <br />
              <br />
              <b>
                - <span>1000x</span> Tampas de Cola;
              </b>
              <br />
              <br />
            </p>
            <Image
              src="/bunkers.png"
              className={s.bunkerImage}
              alt="Bunkers"
              width={500}
              height={300}
            />
            <h3>Bunker Tier 4</h3>
            <h4>Estrutura:</h4>
            <p>
              <b>- Estrutura do Tier 3:</b> Toda a estrutura do Tier 3 estará
              inclusa no Tier 4;
              <br />
              <br />
              <b>- Heliponto:</b> Heliponto exclusivo para o grupo;
              <br />
              <br />
              <b>- Mesa de craft padrão:</b> Mesa de craft padrão para o grupo;
              <br />
              <br />
              <b>- Mesa de craft Farmácia:</b> Mesa de craft de itens
              farmaceuticos para o grupo;
              <br />
              <br />
              <b>- Estrutura de Bunker Tier 4:</b> Bunker menor com espaço
              limitado;
              <br />
              <br />
            </p>
            <h4>Itens:</h4>
            <p>
              <b>
                - <span>Helicóptero Zumbi:</span> Helicóptero exclusivo para o
                grupo;
              </b>
              <br />
              <br />
              <b>
                - <span>Fac Prime:</span> Para todos os membros do grupo até o
                fim do roleplay de sobrevivência;
              </b>
              <br />
              <br />
              <b>
                - <span>3x</span> AP Pistol;
              </b>
              <br />
              <br />
              <b>
                - <span>3x</span> MTAR X;
              </b>
              <br />
              <br />
              <b>
                - <span>1600x</span> munições de 9mm;
              </b>
              <br />
              <br />
              <b>
                - <span>15x</span> Machadinha de Pedra;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Pet Pantera;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Pet Husky;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Upgrade de Barraca;
              </b>
              <br />
              <br />
              <b>
                - <span>2x</span> Foice Ceifatora de Zumbi;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Arco Mítico com 1000 flechas;
              </b>
              <br />
              <br />
              <b>
                - <span>5x</span> Máscara de Gás;
              </b>
              <br />
              <br />
              <b>
                - <span>10x</span> Lockpick Prime;
              </b>
              <br />
              <br />
              <b>
                - <span>1x</span> Veículo especial de Zumbi (até 1000 coins);
              </b>
              <br />
              <br />
              <b>
                - <span>100x</span> Colete Balístico;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Kits Médicos;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Bandagens;
              </b>
              <br />
              <br />
              <b>
                - <span>10x</span> Camisa de Força;
              </b>
              <br />
              <br />
              <b>
                - <span>50x</span> Rações Militares;
              </b>
              <br />
              <br />
              <b>
                - <span>30x</span> Seringas;
              </b>
              <br />
              <br />
              <b>
                - <span>10x</span> Proficiências de cada;
              </b>
              <br />
              <br />
              <b>
                - <span>20x</span> Rádios;
              </b>
              <br />
              <br />
              <b>
                - <span>20x</span> GNSS;
              </b>
              <br />
              <br />
              <b>
                - <span>5x</span> Barracas;
              </b>
              <br />
              <br />
              <b>
                - <span>5x</span> Upgrades de Barraca;
              </b>
              <br />
              <br />
              <b>
                - <span>2000x</span> Tampas de Cola;
              </b>
              <br />
              <br />
            </p>
            <Image
              src="/bunkers.png"
              className={s.bunkerImage}
              alt="Bunkers"
              width={500}
              height={300}
            />
          </main>
          <div className={s.wrapResume}>
            <Sidebar />
          </div>
        </Container>
      </PageStructure>
    </>
  );
}
