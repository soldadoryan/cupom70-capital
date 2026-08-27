"use client";
import useRequest from "@/hooks/useRequest";
import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";
import s from "./styles.module.css";

type ShopStatusPropsType = {
  children: ReactNode;
};

export function ShopStatus({ children }: ShopStatusPropsType) {
  const { createRequest } = useRequest();
  const [isReleased, setIsReleased] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const handleGetShopStatus = async () => {
      try {
        const origin = encodeURIComponent(window.location.hostname);
        const response: { status: "on" | "off" } = await createRequest({
          url: `/shop-status?origin=${origin}`,
          method: "GET",
        });

        if (response.status === "off") {
          window.location.href = "https://capitalcity.tebex.io";
          return;
        }

        if (isMounted) {
          setIsReleased(true);
        }
      } catch (error) {
        console.error("Erro ao verificar o status da loja:", error);
      }
    };

    handleGetShopStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isReleased) {
    return (
      <div className={s.loadingScreen}>
        <Image
          width={120}
          height={120}
          src="/logo.webp"
          alt="A letra C com alguns prédios dentro sendo utilizada como logo"
          title="Logo Grupo Capital"
          className={s.logo}
        />
        <AiOutlineLoading className={s.spinner} />
      </div>
    );
  }

  return <>{children}</>;
}
