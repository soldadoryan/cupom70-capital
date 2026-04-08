"use client";
import { useState, useEffect, useCallback } from "react";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import useRequest from "@/hooks/useRequest";
import capitalProducts from "@/app/capital-city/products.json";
import moradaProducts from "@/app/morada-valley/products.json";
import s from "./styles.module.css";

const CITY_OPTIONS = [
  { value: "capitalcity", label: "Capital City" },
  { value: "moradadovalley", label: "Morada" },
];

const CITY_PRODUCTS: Record<string, { id: string; name: string; price: number }[]> = {
  capitalcity: capitalProducts,
  moradadovalley: moradaProducts,
};

type DiscordUser = {
  id: string;
  username: string;
  global_name: string | null;
};

type SelectedProduct = {
  id: string;
  name: string;
  quantity: number;
};

export function AdminLinkForm() {
  const { createRequest } = useRequest();

  const [discordUser, setDiscordUser] = useState<DiscordUser | null>(null);
  const [discordLoading, setDiscordLoading] = useState(false);
  const [roleVerified, setRoleVerified] = useState(false);
  const [roleError, setRoleError] = useState("");

  const [idType, setIdType] = useState<"wl" | "user">("user");
  const [userId, setUserId] = useState("");
  const [city, setCity] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
  const [valorDoLink, setValorDoLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState("");

  const handleMessage = useCallback(
    async (event: MessageEvent) => {
      if (event.data?.type !== "discord-oauth" || !event.data.code) return;

      setDiscordLoading(true);
      setRoleError("");
      try {
        const user = await createRequest<DiscordUser>({
          url: "/discord/exchange",
          method: "POST",
          body: {
            code: event.data.code,
            redirectUri: `${window.location.origin}/discord/callback`,
          },
        });

        if (user.id) {
          setDiscordUser(user);
          const { hasRole } = await createRequest<{ hasRole: boolean }>({
            url: "/discord/check-role",
            method: "POST",
            body: { discordId: user.id },
          });

          if (hasRole) {
            setRoleVerified(true);
          } else {
            setRoleError("Você não possui o cargo necessário para acessar este formulário.");
          }
        }
      } catch {
        setRoleError("Erro ao verificar permissões. Tente novamente.");
      } finally {
        setDiscordLoading(false);
      }
    },
    [createRequest]
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  const handleDiscordLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
    const redirectUri = encodeURIComponent(`${window.location.origin}/discord/callback`);
    const url = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`;
    const width = 500;
    const height = 700;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    window.open(url, "discord-oauth", `width=${width},height=${height},left=${left},top=${top}`);
  };

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
    setSelectedProducts([]);
  };

  const toggleProduct = (productId: string, productName: string) => {
    setSelectedProducts((prev) => {
      const exists = prev.find((p) => p.id === productId);
      if (exists) return prev.filter((p) => p.id !== productId);
      return [...prev, { id: productId, name: productName, quantity: 1 }];
    });
  };

  const roundToMultipleOf250 = (value: number): number => {
    if (value <= 0) return 0;
    return Math.floor(value / 250) * 250;
  };

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    if (!raw) { setValorDoLink(""); return; }
    const num = Math.min(parseInt(raw, 10), 10000);
    setValorDoLink(String(num));
  };

  const handleValorBlur = () => {
    const num = parseInt(valorDoLink, 10);
    if (!isNaN(num)) setValorDoLink(String(roundToMultipleOf250(num)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId.trim()) { toast.warning("Informe o ID."); return; }
    if (!city) { toast.warning("Selecione uma cidade."); return; }
    if (selectedProducts.length === 0) { toast.warning("Selecione pelo menos um produto."); return; }

    const valor = roundToMultipleOf250(parseInt(valorDoLink, 10) || 0);
    if (valor <= 0) { toast.warning("Informe um valor válido para o link (múltiplo de 250, máx 10.000)."); return; }

    setLoading(true);
    setPaymentUrl("");
    try {
      const response = await createRequest<{ payment_url: string }>({
        url: "/admin/create-preference",
        method: "POST",
        body: {
          discordId: discordUser!.id,
          discordTag: discordUser!.global_name || discordUser!.username,
          idType,
          userId: userId.trim(),
          city,
          products: selectedProducts.map((p) => ({ id: p.id, quantity: p.quantity })),
          valorDoLink: valor,
        },
      });

      if (response.payment_url) {
        setPaymentUrl(response.payment_url);
        window.open(response.payment_url, "_blank");
      }
    } catch {
      toast.error("Erro ao gerar link de pagamento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const availableProducts = city ? CITY_PRODUCTS[city] || [] : [];
  const valorNum = parseInt(valorDoLink, 10);
  const valorAjustado = !isNaN(valorNum) && valorNum > 0 ? roundToMultipleOf250(valorNum) : null;

  if (!discordUser) {
    return (
      <div className={s.adminCard}>
        <h3>Gerar Link de Pagamento</h3>
        <p className={s.adminDesc}>Acesso restrito. Faça login com Discord para continuar.</p>
        <button
          type="button"
          className={s.discordLoginButton}
          onClick={handleDiscordLogin}
          disabled={discordLoading}
        >
          {discordLoading ? (
            <AiOutlineLoading className={s.spin} />
          ) : (
            <>
              <FaDiscord />
              Logar com Discord
            </>
          )}
        </button>
      </div>
    );
  }

  if (!roleVerified) {
    return (
      <div className={s.adminCard}>
        <h3>Gerar Link de Pagamento</h3>
        {roleError ? (
          <p className={s.errorText}>{roleError}</p>
        ) : (
          <div className={s.checkingRole}>
            <AiOutlineLoading className={s.spin} />
            <span>Verificando permissões...</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={s.adminCard}>
      <div className={s.adminHeader}>
        <h3>Gerar Link de Pagamento</h3>
        <div className={s.loggedAs}>
          <FaDiscord className={s.discordIcon} />
          <span>{discordUser.global_name || discordUser.username}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.row}>
          <div className={s.fieldGroup}>
            <span className={s.fieldLabel}>Tipo de ID</span>
            <div className={s.pillGroup}>
              <button
                type="button"
                className={`${s.pill} ${idType === "user" ? s.pillActive : ""}`}
                onClick={() => setIdType("user")}
              >
                ID Usuário
              </button>
              <button
                type="button"
                className={`${s.pill} ${idType === "wl" ? s.pillActive : ""}`}
                onClick={() => setIdType("wl")}
              >
                ID WL
              </button>
            </div>
          </div>

          <div className={s.fieldGroup}>
            <label className={s.fieldLabel}>Cidade</label>
            <select
              className={s.select}
              value={city}
              onChange={(e) => handleCityChange(e.target.value)}
            >
              <option value="">Selecione uma cidade</option>
              {CITY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={s.fieldGroup}>
          <label className={s.fieldLabel}>{idType === "wl" ? "ID WL" : "ID Usuário"}</label>
          <input
            type="text"
            className={s.input}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder={idType === "wl" ? "Digite o ID WL" : "Digite o ID do usuário"}
            autoComplete="off"
          />
        </div>

        <div className={s.fieldGroup}>
          <label className={s.fieldLabel}>
            Produtos
            {selectedProducts.length > 0 && (
              <span className={s.selectedCount}> ({selectedProducts.length} selecionado{selectedProducts.length > 1 ? "s" : ""})</span>
            )}
          </label>
          <div className={`${s.productList} ${!city ? s.disabled : ""}`}>
            {!city && <span className={s.placeholder}>Selecione uma cidade primeiro</span>}
            {availableProducts.map((product) => {
              const isSelected = selectedProducts.some((p) => p.id === product.id);
              return (
                <label
                  key={product.id}
                  className={`${s.productItem} ${isSelected ? s.productSelected : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleProduct(product.id, product.name)}
                    disabled={!city}
                    className={s.checkbox}
                  />
                  <span className={s.productName}>{product.name}</span>
                  <span className={s.productPrice}>R$ {product.price.toFixed(2)}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className={s.fieldGroup}>
          <label className={s.fieldLabel}>Valor do Link</label>
          <input
            type="number"
            className={s.input}
            value={valorDoLink}
            onChange={handleValorChange}
            onBlur={handleValorBlur}
            placeholder="Múltiplo de 250, máx. R$ 10.000"
            min={0}
            max={10000}
            step={250}
            autoComplete="off"
          />
          {valorAjustado !== null && valorAjustado !== valorNum && (
            <small className={s.valorHint}>
              Será ajustado para: R$ {valorAjustado.toFixed(2)}
            </small>
          )}
        </div>

        {paymentUrl && (
          <div className={s.paymentUrlBox}>
            <span>Link gerado com sucesso!</span>
            <a href={paymentUrl} target="_blank" rel="noreferrer" className={s.paymentLink}>
              Abrir link
            </a>
          </div>
        )}

        <button type="submit" className={s.submitButton} disabled={loading}>
          {loading ? <AiOutlineLoading className={s.spin} /> : "Gerar Link"}
        </button>
      </form>
    </div>
  );
}
