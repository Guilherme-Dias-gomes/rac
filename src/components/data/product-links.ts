

export type ProductLink = {
  title: string;
  href: string;
  description: string;
};

export const productLinks: ProductLink[] = [
  {
    title: "Transformadores",
    href: "/produtos/transformador",
    description: "Transformadores transferem energia entre circuitos por indução eletromagnética...",
  },
  {
    title: "Subestações",
    href: "/produtos/subestacao",
    description: "Uma subestação é uma instalação que reduz a alta tensão da energia recebida...",
  },
  {
    title: "Painéis MT",
    href: "/produtos/painelMT",
    description: "Um painel de média tensão (MT) controla e protege a distribuição de energia...",
  },
  {
    title: "Painéis BT",
    href: "/produtos/painelBT",
    description: "Um painel de baixa tensão (BT) distribui e controla energia elétrica até 1 kV...",
  },
  {
    title: "Geradores de Energia",
    href: "/produtos/gerador",
    description: "Um gerador converte energia mecânica em elétrica usando um motor acoplado...",
  },
];
