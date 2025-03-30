export const paymentStatus = {
  approved: {
    label: "Aprovado",
    description:
      "Seu pagamento foi aprovado e suas coins serão entregues em até 30 minutos. Caso não queira esperar, basta entrar novamente na cidade em questão para que elas sejam entregues.",
  },
  rejected: {
    label: "Recusado",
    description:
      "Seu pagamento foi recusado no nosso Gateway de Pagamento. Tente com outro meio de pagamento antes de solicitar suporte.",
  },
  in_process: {
    label: "Em andamento",
    description:
      "Seu pagamento ainda está em andamento. Temos até 72 horas para validar e aprovar seu pagamento, por isso, espere até o final do prazo antes de solicitar suporte.",
  },
};
