import { FiRefreshCw, FiX } from "react-icons/fi";
import s from "./styles.module.css";

export function CartAndResume() {
  return (
    <div className={s.card}>
      <div className={s.header}>
        <h4>Seu carrinho</h4>
        <small>1 items</small>
      </div>
      <ul className={s.itemsList}>
        <li>
          <div className={s.itemInfo}>
            <strong>10 CriptoCoins</strong>
            <span>
              <b>User Id:</b> 3
            </span>
            <span>
              <b>Server:</b> Morada do Valley
            </span>
          </div>
          <div className={s.price}>R$12.00</div>
          <input type="number" value={1} className={s.amountInput} />
          <div className={s.wrapIcons}>
            <button className={s.refreshButton}>
              <FiRefreshCw />
            </button>
            <button className={s.deleteButton}>
              <FiX />
            </button>
          </div>
        </li>
        <li>
          <div className={s.itemInfo}>
            <strong>10 CriptoCoins</strong>
            <span>
              <b>User Id:</b> 3
            </span>
            <span>
              <b>Server:</b> Morada do Valley
            </span>
          </div>
          <div className={s.price}>R$12.00</div>
          <input type="number" value={1} className={s.amountInput} />
          <div className={s.wrapIcons}>
            <button className={s.refreshButton}>
              <FiRefreshCw />
            </button>
            <button className={s.deleteButton}>
              <FiX />
            </button>
          </div>
        </li>
      </ul>
      <input
        className={s.inputId}
        type="number"
        placeholder="Digite o ID do personagem"
      />
      <div className={s.total}>Total R$24.00</div>
    </div>
  );
}
