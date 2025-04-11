"use client";
import { useForm } from "react-hook-form";
import { AuthFormType } from "./AuthForm.type";
import * as yup from "yup";
import s from "./styles.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import useCode from "@/hooks/useCode";
import { toast } from "react-toastify";

const schema = yup
  .object({
    authCode: yup.string().required("Digite o código de autenticação!"),
  })
  .required();

export function AuthForm() {
  const validateCode = useCode();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormType>({
    defaultValues: {
      authCode: "",
    },
    resolver: yupResolver(schema),
  });

  const handleAuthSubmit = async (data: AuthFormType) => {
    const response = await validateCode(data.authCode, true);
    if (response.valid) {
      window.localStorage.setItem("authCode", data.authCode);
      window.location.href = "/home";
    } else {
      toast.error("Código inválido!");
    }
  };
  return (
    <form onSubmit={handleSubmit(handleAuthSubmit)} className={s.form}>
      <Image
        width={150}
        height={150}
        src="/logo.webp"
        alt="A letra C com alguns prédios dentro sendo utilizada como logo"
        title="Logo Grupo Capital"
        className={s.logo}
      />
      <input
        {...register("authCode")}
        type="text"
        placeholder="Código de autenticação"
        className={s.input}
      />
      {errors.authCode && (
        <span className={s.error}>{errors.authCode.message}</span>
      )}
      <button type="submit" className={s.authButton}>
        ACESSAR
      </button>
    </form>
  );
}
