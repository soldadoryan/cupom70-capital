"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function DiscordCallbackContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code && window.opener) {
      window.opener.postMessage({ type: "discord-oauth", code }, "*");
      window.close();
    }
  }, [searchParams]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", color: "#fff" }}>
      <p>Autenticando com Discord...</p>
    </div>
  );
}

export default function DiscordCallbackPage() {
  return (
    <Suspense fallback={<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", color: "#fff" }}><p>Carregando...</p></div>}>
      <DiscordCallbackContent />
    </Suspense>
  );
}
