
import CarouselSize from "@/components/Carousel";
import { Depoimentos } from "@/components/Depoimentos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InitialSection from "@/components/InitialSection";
import Produtos from "@/components/Produtos";

export default function Home() {
  return (
    <main className="top-0 left-0 w-full h-full bg-black/60">
      <Header/>
      <section>
        <InitialSection />
      </section>
      <section className="flex flex-col text-center text-white gap-10 p-8.5">
        <h1 className="lg:text-3xl text-2xl font-bold">Onde Nossos Serviços Estão Aplicados</h1>
        <CarouselSize/>
      </section>
      <section className="flex h-full flex-col w-full items-center text-white text-center gap-10">
        <h1 className="text-3xl font-bold">Nossos Produtos</h1>
        <p className="w-[80%] text-xl sm:text-2xl">
          A RAC Soluções é uma empresa especializada em fornecer serviços
          completos na área de geração de energia. Oferecemos uma variedade de
          serviços que incluem venda de produtos, emissão de laudos e
          consultorias, aluguel de geradores, serviços de manutenção, realização
          de estudos técnicos e muito mais.
        </p>
        <div className="lg:w-[80%]">
          <Produtos />
        </div>
        <section className="flex flex-col text-white text-center gap-10 lg:w-[80%] w-[95%] h-full items-center bg-gray-500/60 rounded-2xl p-10 shadow-black shadow-2xl">
          <h1 className="text-3xl font-bold">O que nossos clientes estão comentando</h1>
          <p>
            Hoje a RAC possui um relacionamento definitivo com seus clientes
            onde 99% opta por renovar seus contratos pela exelencia e resultado
            do trabalho feito, confira alguns comentarios de nossos clientes:
          </p>
          <div className="w-2/3 h-1 bg-white"></div>
          <div className="lg:w-full w-[370px]">
            <Depoimentos/>
          </div>
        </section>
        <div className="w-full">
          <Footer/>
        </div>
      </section>
    </main>
  );
}
