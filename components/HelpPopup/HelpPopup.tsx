"use client";
import { useState, useEffect } from "react";
import { FaDiscord, FaTimes, FaHeadset } from "react-icons/fa";
import s from "./styles.module.css";

const DISCORD_INVITE = "https://discord.gg/jpHd2yXvXB";

export function HelpPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        className={s.floatingButton}
        onClick={() => setIsOpen(true)}
        title="Precisa de ajuda?"
      >
        <span className={s.pingRing} aria-hidden="true" />
        <FaHeadset className={s.helpIcon} />
        <span className={s.floatingLabel}>Precisa de ajuda?</span>
      </button>

      {isOpen && (
        <div className={s.overlay} onClick={() => setIsOpen(false)}>
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={s.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Fechar"
            >
              <FaTimes />
            </button>

            <div className={s.iconBadge}>
              <FaHeadset />
            </div>

            <h3 className={s.title}>Precisa de ajuda?</h3>
            <p className={s.text}>
              Entre no nosso servidor do Discord e acesse o canal{" "}
              <strong>&quot;Abra um ticket&quot;</strong>.
            </p>

            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer"
              className={s.discordButton}
            >
              <FaDiscord />
              Entrar no Discord
            </a>
          </div>
        </div>
      )}
    </>
  );
}
