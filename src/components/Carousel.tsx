"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });

const servicos = [
  {
    id: 1,
    img: "/hospital.jpg",
    name: "Hospitais",
  },
  {
    id: 2,
    img: "/varejo.jpg",
    name: "Varejo",
  },
  {
    id: 3,
    img: "/industria.jpg",
    name: "Industrias",
  },
  {
    id: 4,
    img: "/agro.jpg",
    name: "Agro",
  },
  {
    id: 5,
    img: "/mineradora.jpg",
    name: "Mineradora",
  },
  {
    id: 6,
    img: "/banco.jpg",
    name: "Banco",
  },
  {
    id: 7,
    img: "/oleoEgas.jpg",
    name: "Oleo e Gás",
  },
  {
    id: 8,
    img: "/shopping.jpg",
    name: "Shopping",
  },
  {
    id: 9,
    img: "/saneamento.jpg",
    name: "Saneamento",
  },
  {
    id: 10,
    img: "/dataCenter.jpg",
    name: "Data Center",
  },
  {
    id: 11,
    img: "/concessionaria.jpg",
    name: "Concessionária Eletrica",
  },
];

export default function CarouselSize() {
  const [, setSelectedService] = useState(servicos[0]);

  return (
    <div className="w-full px-4 flex justify-center">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[autoplay]}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {servicos.map((servico) => (
            <CarouselItem
              key={servico.id}
              className="basis-full sm:basis-1/2 lg:basis-1/3 "
            >
              <div className="p-1">
                <Card
                  onClick={() => setSelectedService(servico)}
                  className="cursor-pointer shadow-black dark:shadow-white shadow-lg bg-white dark:bg-principal text-principal dark:text-white"
                >
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={servico.img}
                      alt={servico.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardContent>
                  <h1 className="text-center py-2 font-bold text-2xl">
                    {servico.name}
                  </h1>
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
