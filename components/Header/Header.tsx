import Image from "next/image";
import { Container } from "@/components/Container";
import { Menu } from "./Menu";
import { DiscordButton } from "./DiscordButton";
import { CheckoutButton } from "./CheckoutButton";
import s from "./styles.module.css";

export function Header() {
  return (
    <>
      <section className={s.header}>
        <Container customClass={s.customContainer}>
          <Image
            width={150}
            height={150}
            src="/logo.webp"
            alt="A letra C com alguns prédios dentro sendo utilizada como logo"
            title="Logo Grupo Capital"
            className={s.logo}
          />
          <div className={s.wrapButtons}>
            <DiscordButton />
            <CheckoutButton />
            {/* <button className={`${s.headerButton} ${s.actived}`}>Login</button> */}
          </div>
        </Container>
      </section>
      <Menu />
    </>
  );
}
