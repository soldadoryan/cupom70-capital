import { Container } from "@/components/Container";
import s from "./styles.module.css";

export function Footer() {
  return (
    <section className={s.footer}>
      <Container customClass={s.customContainer}>
        <p>
          © Copyright 2025 Capital City | We do not have affiliation with any
          real world brands
        </p>
      </Container>
    </section>
  );
}
