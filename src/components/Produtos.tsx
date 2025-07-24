"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Gerador de Energia",
    description:
      "Um gerador é um dispositivo que converte energia mecânica em energia elétrica. Ele é composto por um motor, que pode ser movido a diesel, gasolina, gás natural ou outras fontes, acoplado a um alternador. O motor gera movimento rotativo, que é transferido para o alternador, onde a energia mecânica é convertida em energia elétrica. Geradores são utilizados em uma variedade de aplicações, desde fornecer energia de emergência em caso de falha na rede elétrica até alimentar locais remotos ou temporários.",
    image: "/gerador.png",
  },
  {
    id: 2,
    name: "Painel MT",
    description:
      "Um painel de média tensão (MT) é um componente vital em sistemas elétricos, usado para controlar e proteger equipamentos de distribuição de energia. Ele abriga disjuntores, seccionadores e outros dispositivos de proteção em uma estrutura compacta e segura. Os painéis MT geralmente são construídos para suportar tensões entre 1 kV e 36 kV, sendo projetados conforme normas de segurança e regulamentações específicas. Sua construção modular permite fácil instalação e manutenção, garantindo a continuidade do fornecimento de energia elétrica em diversas aplicações industriais e comerciais.",
    image: "/painelMT.png",
  },
  {
    id: 3,
    name: "Subestação",
    description:
      "Uma subestação é uma instalação elétrica que recebe energia de alta tensão de uma estação transformadora e a distribui para consumidores finais em tensões menores. Geralmente, ela contém transformadores para alterar a voltagem, disjuntores para proteção e equipamentos de controle. Subestações desempenham um papel crucial na distribuição confiável de energia elétrica, facilitando a transição de tensões para atender às necessidades dos usuários finais. Elas podem ser internas ou externas, dependendo das demandas do sistema elétrico e do espaço disponível.",
    image: "/eletrocentro.png",
  },
  {
    id: 4,
    name: "Painel BT",
    description:
      "Um painel de baixa tensão (BT) é uma estrutura que abriga componentes elétricos para distribuição e controle de energia em sistemas de baixa tensão, geralmente até 1 kV. Esses painéis incluem disjuntores, contatores, relés, medidores e outros dispositivos para proteção, controle e medição de circuitos elétricos. Projetados conforme normas de segurança, esses painéis oferecem flexibilidade e facilidade de instalação, sendo essenciais para garantir a segurança e eficiência na distribuição de energia elétrica em diversos ambientes comerciais, industriais e residenciais.",
    image: "/painelBT.png",
  },
  {
    id: 5,
    name: "Transformador",
    description:
      "Transformadores são dispositivos elétricos que transferem energia entre circuitos por meio de indução eletromagnética. Eles consistem em bobinas primárias e secundárias enroladas em torno de um núcleo ferromagnético. Quando uma corrente alternada é aplicada à bobina primária, um campo magnético variável é gerado, induzindo uma corrente na bobina secundária. Essa transferência é baseada na relação de transformação entre as tensões e correntes das bobinas. Transformadores são cruciais na transmissão de energia e no ajuste de voltagem em diversos sistemas elétricos.",
    image: "transformadores.png",
  },
];

export default function Produtos() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-full p-4 gap-4 text-black">
      {/* Coluna esquerda: botões */}
      <div className="w-full md:w-1/4 flex flex-col gap-2">
        {products.map((product) => {
          const isSelected = selectedProduct.id === product.id;

          return (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`px-4 py-2 rounded-md text-left font-medium cursor-pointer shadow-md border transition-all
        ${
          isSelected
            ? "bg-gray-600 text-white border-black dark:bg-white dark:text-black dark:border-white"
            : "bg-white text-black border-gray-300 dark:bg-gray-600 dark:text-white dark:border-gray-600"
        }
      `}
            >
              {product.name}
            </button>
          );
        })}
      </div>

      {/* Coluna direita: conteúdo do produto */}
      <div className="w-full h-full md:w-3/4 bg-white dark:bg-gray-600 dark:text-white rounded-xl p-6 shadow-white shadow-lg">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{selectedProduct.name}</h1>
        <p className="text-gray-700 dark:text-white">{selectedProduct.description}</p>
      </div>
    </div>
  );
}
