"use client";
import { FiRefreshCw, FiX } from "react-icons/fi";
import s from "./styles.module.css";
import { useState } from "react";

export function CartAndResume() {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(1);

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
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className={s.amountInput}
          />
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
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        type="number"
        placeholder="Digite o ID do seu personagem"
      />
      <div className={s.total}>Total R$24.00</div>
    </div>
  );
}
