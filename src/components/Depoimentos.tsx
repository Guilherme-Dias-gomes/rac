"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const depoimentos = [
  {
    id: 1,
    texto:
      "Estamos extremamente satisfeitos com os serviços prestados pela RAC Soluções em nossa instalação de grupo gerador de 450KVA. Desde o fornecimento do buss way, transformador e painéis até a montagem da infraestrutura elétrica e de diesel, a equipe demonstrou profissionalismo e expertise em cada etapa do processo. A elaboração do projeto técnico e a montagem dos painéis foram feitas com precisão, garantindo um funcionamento eficiente e seguro. O enclausuramento do gerador existente também foi realizado com excelência. Recomendamos os serviços da RAC Soluções para quem busca qualidade e confiabilidade em soluções elétricas.",
    setor: "Grande Shopping",
  },
  {
    id: 2,
    texto:
      "Estamos muito satisfeitos com a construção da subestação elétrica pela RAC Soluções. Eles entregaram um trabalho de alta qualidade, desde o transformador de energia até a instalação do painel e da rede aérea de 13.800 volts. A equipe demonstrou profissionalismo e competência em todas as etapas do projeto, garantindo a segurança e a eficiência da nossa instalação elétrica. Recomendamos os serviços da RAC Soluções para quem busca soluções confiáveis e de alto padrão em energia.",
    setor: "Grande Indústria Automobística",
  },
  {
    id: 3,
    texto:
      "Contratamos a RAC Soluções para fornecer e instalar um gerador de 650 KVA, além de outros equipamentos essenciais para nosso sistema de energia. Estamos extremamente satisfeitos com o profissionalismo e a qualidade do serviço prestado. Desde o fornecimento do equipamento até a startup do gerador, tudo foi realizado de forma eficiente e dentro do prazo. A equipe da RAC Soluções demonstrou expertise e cuidado em cada etapa do processo. Recomendamos seus serviços a todos que buscam soluções confiáveis e de alta qualidade para suas necessidades de energia.",
    setor: "Grande Indústria Alimentícia",
  },
  {
    id: 4,
    texto:
      "O serviço prestado pela RAC Soluções para o comissionamento e startup dos nossos três grupos geradores de 1850KVA foi excepcional. Eles não apenas realizaram a parametrização dos relés de proteção de alta tensão, mas também cuidaram da passagem de cabos de comando e fibra ótica, garantindo o paralelismo perfeito entre os geradores. A equipe demonstrou profissionalismo, conhecimento técnico e dedicação em cada etapa do processo. Estamos muito satisfeitos com os resultados e recomendamos os serviços da RAC Soluções para quem busca qualidade e eficiência em soluções de energia.",
    setor: "Grande Shopping",
  },
];

export function Depoimentos() {
  const [, setSelectedDepoimentos] = useState(depoimentos[0]);

  return (
    <div className="w-full px-4 flex justify-center">
      <Carousel opts={{ align: "start" }} className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {depoimentos.map((depoimentos) => (
            <CarouselItem
              key={depoimentos.id}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 h-full">
                <Card
                  onClick={() => setSelectedDepoimentos(depoimentos)}
                  className="cursor-pointer h-full flex flex-col justify-between"
                  style={{
                    background: "var(--color-principal)",
                    color: "white",
                  }}
                >
                  <img
                    src="/aspa.png"
                    alt=""
                    className="ml-2 w-1/7 h-8 object-contain"
                  />

                  <CardContent className="flex-1 flex items-center justify-center p-4">
                    <h3 className="text-center">{depoimentos.texto}</h3>
                  </CardContent>

                  <h3 className="text-center py-2 font-bold">
                    {depoimentos.setor}
                  </h3>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
