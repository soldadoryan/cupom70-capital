"use client";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "@/context/CartContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { formatToBRL } from "@/utils/currency";
import useRequest from "@/hooks/useRequest";
import { CreatePreferenceType } from "@/types/preference.type";
import { PaymentFormType } from "./CartAndResume.type";
import * as yup from "yup";
import { FiX } from "react-icons/fi";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineLoading } from "react-icons/ai";
import s from "./styles.module.css";

function formatCPF(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9)
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function formatCEP(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function isValidCPF(cpf: string): boolean {
  const digits = cpf.replace(/\D/g, "");
  if (digits.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digits)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(digits[i]) * (10 - i);
  let rest = (sum * 10) % 11;
  if (rest === 10) rest = 0;
  if (rest !== parseInt(digits[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(digits[i]) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest === 10) rest = 0;
  if (rest !== parseInt(digits[10])) return false;

  return true;
}

const schema = yup
  .object({
    userId: yup
      .number()
      .typeError("O ID precisa ser um número válido!")
      .required("O ID do personagem é obrigatório!"),
    email: yup
      .string()
      .email("Digite um e-mail válido!")
      .required("O e-mail é obrigatório!"),
    discordTag: yup.string().required("A tag do Discord é obrigatória!"),
    nomeCompleto: yup
      .string()
      .required("O nome completo é obrigatório!")
      .min(3, "O nome deve ter pelo menos 3 caracteres!"),
    cpf: yup
      .string()
      .required("O CPF é obrigatório!")
      .test("cpf-valid", "CPF inválido!", (value) =>
        value ? isValidCPF(value) : false,
      ),
    cep: yup
      .string()
      .required("O CEP é obrigatório!")
      .test("cep-valid", "CEP inválido!", (value) =>
        value ? value.replace(/\D/g, "").length === 8 : false,
      ),
    estado: yup.string().required("O estado é obrigatório!"),
    cidade: yup.string().required("A cidade é obrigatória!"),
    endereco: yup.string().required("O endereço é obrigatório!"),
    numero: yup.string().required("O número é obrigatório!"),
  })
  .required();

export function CartAndResume() {
  const { products, setProducts } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [cepLoading, setCepLoading] = useState(false);
  const [buyerIp, setBuyerIp] = useState("");
  const { createRequest } = useRequest();

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormType>({
    defaultValues: {
      email: "",
      discordTag: "",
      nomeCompleto: "",
      cpf: "",
      cep: "",
      estado: "",
      cidade: "",
      endereco: "",
      numero: "",
    },
    resolver: yupResolver(schema),
  });

  const userId = watch("userId");
  const cepValue = watch("cep");

  // Fetch buyer IP on mount
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setBuyerIp(data.ip))
      .catch(() => setBuyerIp(""));
  }, []);

  // CEP auto-fill
  useEffect(() => {
    const cepDigits = cepValue?.replace(/\D/g, "") || "";
    if (cepDigits.length !== 8) return;

    setCepLoading(true);
    fetch(`https://viacep.com.br/ws/${cepDigits}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.erro) {
          setValue("estado", data.uf || "", { shouldValidate: true });
          setValue("cidade", data.localidade || "", { shouldValidate: true });
          setValue("endereco", data.logradouro || "", { shouldValidate: true });
        }
      })
      .catch(() => {})
      .finally(() => setCepLoading(false));
  }, [cepValue, setValue]);

  const setProductQuantity = (productId: string, value: string) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity >= 0) {
      setProducts((oldProducts) =>
        quantity === 0
          ? oldProducts.filter((product) => product.id !== productId)
          : oldProducts.map((product) =>
              product.id === productId ? { ...product, quantity } : product,
            ),
      );
    }
  };

  const productsQuantity = useMemo(() => {
    return products.reduce((total, prod) => {
      return total + (prod.quantity ?? 0);
    }, 0);
  }, [products]);

  const totalPrice = useMemo(() => {
    return products.reduce((total, prod) => {
      const quantity = prod.quantity ?? 0;
      const price = prod.price ?? 0;
      return total + quantity * price;
    }, 0);
  }, [products]);

  const handlePaymentSubmit = useCallback(
    async (data: PaymentFormType) => {
      setLoading(true);
      const {
        userId,
        email,
        discordTag,
        nomeCompleto,
        cpf,
        cep,
        estado,
        cidade,
        endereco,
        numero,
      } = data;
      try {

        const response = await createRequest<CreatePreferenceType>({
          url: "/create-preference",
          method: "POST",
          body: {
            userId,
            email,
            discordTag,
            nomeCompleto,
            cpf: cpf.replace(/\D/g, ""),
            cep: cep.replace(/\D/g, ""),
            estado,
            cidade,
            endereco,
            numero,
            ip: buyerIp,
            products,
          },
        });

        if (response.payment_url) {
          console.log(response.payment_url);
          window.location.href = response.payment_url;
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    },
    [products, buyerIp],
  );

  return (
    <div className={s.card}>
      <div className={s.header}>
        <h4>Seu carrinho</h4>
        <small>{productsQuantity} itens</small>
      </div>
      {products.length > 0 && (
        <>
          <ul className={s.itemsList}>
            {products.map((item) => (
              <li key={item.id}>
                <div className={s.itemInfo}>
                  <strong>{item.name}</strong>
                  <span>
                    {userId && (
                      <>
                        <b>User Id:</b> {userId}
                      </>
                    )}
                  </span>
                  <span>{item.city}</span>
                </div>
                <div className={s.price}>
                  {formatToBRL(item.price * +item!.quantity!)}
                </div>
                <div className={s.wrapAmount}>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      setProductQuantity(item.id, e.target.value)
                    }
                    disabled
                    className={s.amountInput}
                  />
                  <div className={s.amountArrows}>
                    <button
                      className={s.buttonArrow}
                      onClick={() =>
                        setProductQuantity(
                          item.id,
                          String((item.quantity || 0) + 1),
                        )
                      }
                    >
                      <RiArrowUpSLine />
                    </button>
                    <button
                      className={s.buttonArrow}
                      onClick={() =>
                        setProductQuantity(
                          item.id,
                          String((item.quantity || 0) - 1),
                        )
                      }
                    >
                      <RiArrowDownSLine />
                    </button>
                  </div>
                </div>
                <div className={s.wrapIcons}>
                  <button
                    onClick={() => setProductQuantity(item.id, "0")}
                    className={s.deleteButton}
                  >
                    <FiX />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <form
            onSubmit={handleSubmit(handlePaymentSubmit)}
            className={s.formUserInfo}
          >
            <label className={s.labelResume}>Id do Personagem</label>
            <input
              className={s.inputInfo}
              type="number"
              {...register("userId", {
                required: "Id do Personagem é obrigatório",
              })}
              autoComplete="off"
            />
            {errors.userId && (
              <span className={s.errorSpan}>{errors.userId?.message}</span>
            )}

            <label className={s.labelResume}>Nome Completo</label>
            <input
              className={s.inputInfo}
              type="text"
              {...register("nomeCompleto")}
              autoComplete="name"
            />
            {errors.nomeCompleto && (
              <span className={s.errorSpan}>
                {errors.nomeCompleto?.message}
              </span>
            )}

            <label className={s.labelResume}>CPF</label>
            <input
              className={s.inputInfo}
              type="text"
              maxLength={14}
              placeholder="000.000.000-00"
              {...register("cpf", {
                onChange: (e) => {
                  e.target.value = formatCPF(e.target.value);
                },
              })}
              autoComplete="off"
            />
            {errors.cpf && (
              <span className={s.errorSpan}>{errors.cpf?.message}</span>
            )}

            <label className={s.labelResume}>E-mail</label>
            <input
              className={s.inputInfo}
              type="text"
              {...register("email")}
              autoComplete="off"
            />
            {errors.email && (
              <span className={s.errorSpan}>{errors.email?.message}</span>
            )}
            <label className={s.labelResume}>Tag do Discord</label>
            <input
              className={s.inputInfo}
              type="text"
              {...register("discordTag")}
              autoComplete="off"
            />
            {errors.discordTag && (
              <span className={s.errorSpan}>{errors.discordTag?.message}</span>
            )}

            <label className={s.labelResume}>CEP</label>
            <div className={s.cepWrapper}>
              <input
                className={s.inputInfo}
                type="text"
                maxLength={9}
                placeholder="00000-000"
                {...register("cep", {
                  onChange: (e) => {
                    e.target.value = formatCEP(e.target.value);
                  },
                })}
                autoComplete="postal-code"
              />
              {cepLoading && (
                <div className={s.cepLoading}>
                  <AiOutlineLoading />
                </div>
              )}
            </div>
            {errors.cep && (
              <span className={s.errorSpan}>{errors.cep?.message}</span>
            )}

            <div className={s.addressRow}>
              <div className={s.addressField} style={{ flex: 1 }}>
                <label className={s.labelResume}>Estado</label>
                <input
                  className={s.inputInfo}
                  type="text"
                  {...register("estado")}
                  autoComplete="address-level1"
                />
                {errors.estado && (
                  <span className={s.errorSpan}>{errors.estado?.message}</span>
                )}
              </div>
              <div className={s.addressField} style={{ flex: 2 }}>
                <label className={s.labelResume}>Cidade</label>
                <input
                  className={s.inputInfo}
                  type="text"
                  {...register("cidade")}
                  autoComplete="address-level2"
                />
                {errors.cidade && (
                  <span className={s.errorSpan}>{errors.cidade?.message}</span>
                )}
              </div>
            </div>

            <div className={s.addressRow}>
              <div className={s.addressField} style={{ flex: 3 }}>
                <label className={s.labelResume}>Endereço</label>
                <input
                  className={s.inputInfo}
                  type="text"
                  {...register("endereco")}
                  autoComplete="street-address"
                />
                {errors.endereco && (
                  <span className={s.errorSpan}>
                    {errors.endereco?.message}
                  </span>
                )}
              </div>
              <div className={s.addressField} style={{ flex: 1 }}>
                <label className={s.labelResume}>Número</label>
                <input
                  className={s.inputInfo}
                  type="text"
                  {...register("numero")}
                  autoComplete="off"
                />
                {errors.numero && (
                  <span className={s.errorSpan}>{errors.numero?.message}</span>
                )}
              </div>
            </div>

            <div className={s.footer}>
              <div className={s.total}>{formatToBRL(totalPrice)}</div>
              <button
                type="submit"
                disabled={products.length === 0 || loading}
                className={s.paymentButton}
              >
                {!loading ? (
                  "Continuar para o pagamento"
                ) : (
                  <div className={s.loading}>
                    <AiOutlineLoading />
                  </div>
                )}
              </button>
            </div>
          </form>
        </>
      )}
      {products.length == 0 && (
        <div className={s.emptyState}>
          <p>Adicione itens no carrinho para prosseguir!</p>
        </div>
      )}
    </div>
  );
}
