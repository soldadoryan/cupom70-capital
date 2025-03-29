"use client";
import { useCallback, useContext, useMemo, useState } from "react";
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
  })
  .required();

export function CartAndResume() {
  const { products, setProducts } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const { createRequest } = useRequest();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormType>({
    defaultValues: {
      email: "",
      discordTag: "",
    },
    resolver: yupResolver(schema),
  });

  const userId = watch("userId");

  const setProductQuantity = (productId: string, value: string) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity >= 0) {
      setProducts((oldProducts) =>
        quantity === 0
          ? oldProducts.filter((product) => product.id !== productId)
          : oldProducts.map((product) =>
              product.id === productId ? { ...product, quantity } : product
            )
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
      const { userId, email, discordTag } = data;
      try {
        const response = await createRequest<CreatePreferenceType>({
          url: "/create-preference",
          method: "POST",
          body: {
            userId,
            email,
            discordTag,
            products,
          },
        });

        if (response.payment_url) {
          console.log(response.payment_url);
          window.location.href = response.payment_url;
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    },
    [products]
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
                          String((item.quantity || 0) + 1)
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
                          String((item.quantity || 0) - 1)
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
