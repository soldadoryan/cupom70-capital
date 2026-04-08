import s from "./styles.module.css";
import { AdminLinkForm } from "../AdminLinkForm/AdminLinkForm";

export function Sidebar() {
  return (
    <section className={s.aside}>
      <div className={s.highlightCard}>
        <h3>Atenção</h3>
        <p>
          Sempre que for adicionar um novo produto ao seu carrinho, não se
          esqueça de selecionar a cidade correta e adicionar seu ID.
        </p>
      </div>
      <AdminLinkForm />
    </section>
  );
}
