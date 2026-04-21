import s from "./styles.module.css";

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
    </section>
  );
}
