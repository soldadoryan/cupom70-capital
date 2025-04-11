"use client";
import useRequest from "@/hooks/useRequest";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function ShopStatus() {
  const { createRequest } = useRequest();
  const router = useRouter();
  const pathname = usePathname();

  const handleGetShopStatus = async () => {
    const response: { status: "on" | "off" } = await createRequest({
      url: "/shop-status",
      method: "GET",
    });

    if (response!.status === "off" && pathname !== "/manutencao") {
      router.push("/manutencao");
    }
    if (response!.status === "on" && pathname === "/manutencao") {
      router.push("/");
    }
  };

  useEffect(() => {
    handleGetShopStatus();
  }, []);

  return <></>;
}
