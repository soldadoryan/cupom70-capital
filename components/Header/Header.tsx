import Image from "next/image";
import { Container } from "@/components/Container";
import { Menu } from "./Menu";
import { DiscordButton } from "./DiscordButton";
import { FaShoppingCart } from "react-icons/fa";
import s from "./styles.module.css";
import Link from "next/link";

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
            <Link
              href="/checkout"
              className={`${s.headerButton} ${s.checkoutButton}`}
            >
              <FaShoppingCart />
              <span>3</span>
            </Link>
            <button className={`${s.headerButton} ${s.actived}`}>Login</button>
          </div>
        </Container>
      </section>
      <Menu />
    </>
  );
}
