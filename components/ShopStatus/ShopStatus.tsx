"use client";
import useRequest from "@/hooks/useRequest";
import { useEffect } from "react";

export function ShopStatus() {
  const { createRequest } = useRequest();

  const handleGetShopStatus = async () => {
    const origin = encodeURIComponent(window.location.hostname);
    const response: { status: "on" | "off" } = await createRequest({
      url: `/shop-status?origin=${origin}`,
      method: "GET",
    });

    if (response!.status === "off") {
      window.location.href = "https://capitalcity.tebex.io";
    }
  };

  useEffect(() => {
    handleGetShopStatus();
  }, []);

  return <></>;
}
