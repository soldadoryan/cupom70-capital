"use client";
import { Container } from "@/components/Container";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuItems from "./menu_items.json";
import { FiMenu } from "react-icons/fi";
import s from "./styles.module.css";

export function Menu() {
  const pathname = usePathname();
  const [actived] = useState(pathname);
  const [menu, setMenu] = useState(false);

  return (
    <section className={s.menu}>
      <Container customClass={s.customContainer}>
        <button
          onClick={() => setMenu((old) => !old)}
          className={s.responsiveMenuButton}
        >
          <FiMenu /> MENU
        </button>
        <div
          onClick={() => setMenu(false)}
          className={`${s.backdrop} ${menu ? s.activedDrop : ""}`}
        ></div>
        <nav className={menu ? s.activedMenu : ""}>
          {MenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${s.linkMenu} ${
                actived == item.href ? s.activedLinkMenu : ""
              } `}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
