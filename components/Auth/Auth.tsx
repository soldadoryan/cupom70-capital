"use client";
import useCode from "@/hooks/useCode";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export function Auth() {
  const validateCode = useCode();
  const router = useRouter();
  const pathname = usePathname();
  const code =
    typeof window !== "undefined" ? localStorage.getItem("authCode") : null;

  const handleValidateCode = useCallback(async () => {
    const response = await validateCode(code || "", false);
    if (!response.valid && pathname !== "/") {
      router.push("/");
    } else if (pathname === "/" && response.valid) {
      router.push("/home");
    }
  }, [code, validateCode]);

  useEffect(() => {
    handleValidateCode();
  }, []);

  return <></>;
}
