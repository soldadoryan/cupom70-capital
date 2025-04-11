import { Container } from "@/components/Container";
import { AuthForm } from "@/components/AuthForm";
import { ShopStatus } from "@/components/ShopStatus";
import { Auth } from "@/components/Auth";
import s from "./page.module.css";

export default function Home() {
  return (
    <section className={s.page}>
      <Container customClass={`${s.container}`}>
        <ShopStatus />
        <AuthForm />
        <Auth />
      </Container>
    </section>
  );
}
