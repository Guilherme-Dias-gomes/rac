'use client';

import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FaRocket, FaChartLine, FaHandshake, FaLightbulb } from "react-icons/fa";


const AboutUs= () => {
  const [darkMode] = useState(false);

  const heroAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 280, friction: 20 }
  });

//   const trail = useTrail(4, {
//     from: { opacity: 0, transform: "translateY(50px)" },
//     to: { opacity: 1, transform: "translateY(0)" },
//     config: { mass: 1, tension: 280, friction: 20 }
//   });

  const capabilities = [
    { icon: <FaRocket className="animate-bounce" />, title: "Velocidade", desc: "10x mais rápido que o padrão da indústria" },
    { icon: <FaChartLine className="animate-pulse" />, title: "Excelência", desc: "Além da perfeição, sempre" },
    { icon: <FaHandshake className="animate-ping" />, title: "Sinergia", desc: "Criando conexões poderosas" },
    { icon: <FaLightbulb className="animate-spin" />, title: "Disrupção ", desc: "Pensamento revolucionário" }
  ];

  const values = [
    { title: "Missão", desc: "Fornecer soluções de engenharia elétrica, oferecendo serviços personalizados adaptados às necessidades específicas de cada cliente." },
    { title: "Visão", desc: "Ser uma empresa financeiramente sólida e autossuficiente, reconhecida pelos excelentes resultados em projetos e atendimento humanizado." },
    { title: "Valores", desc: "Centramos nossa atenção no cliente, norteando nossas ações pelos princípios da transparência, profissionalismo, sustentabilidade e simplicidade." },
  ];

  return (
    <div className={`${darkMode ? "dark bg-gray-900" : "bg-white"} transition-all duration-500`}>
      <div className="min-h-screen">
        <animated.div style={{...heroAnimation, backgroundImage: `linear-gradient(to bottom right, #000000, #722F37)`}} className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPgo8L3N2Zz4=')] opacity-20"></div>
          <div className="relative z-10 text-center text-white px-4 transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">RAC Soluções</h1>
            <p className="text-2xl md:text-3xl font-light">Potencializando soluções. Energizando o futuro</p>
          </div>
        </animated.div>

        <animated.section style={heroAnimation} className="py-20 px-4 md:px-8 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 transform hover:rotate-4 transition-all duration-500">
                <img
                  src="/cubiculo_de_media_tensao.png"
                  alt="RAC"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:shadow-red-900/50"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-5xl font-black text-gray-800 dark:text-white bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Quem Somos</h2>
                <p className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-bold">Soluções completas em geração de energia</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  A RAC Soluções, uma empresa da holding do grupo WGL Soluções em Energia, destaca-se como uma referência especializada e dedicada no fornecimento de soluções abrangentes para o setor de geração de energia. Nossa expertise abrange uma vasta gama de serviços, desde a comercialização de produtos de última geração até a prestação de consultorias estratégicas altamente especializadas. Além disso, oferecemos serviços personalizados, como o aluguel de geradores de alta performance, a execução de serviços de manutenção preventiva e corretiva com uma equipe altamente qualificada e a realização de estudos técnicos detalhados para otimização do sistema energético. Estamos comprometidos em atender às necessidades específicas de cada cliente, fornecendo soluções inovadoras e eficientes que agregam valor e garantem a satisfação total.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto ">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2 transform hover:-rotate-z-4 transition-all duration-500">
                <img
                  src="/rac-bg.png"
                  alt="RAC"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:shadow-red-900/50"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-5xl font-black text-gray-800 dark:text-white bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">RAC Soluções</h2>
                <p className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-bold">Nossa história</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  A Rac Soluções foi fundada em 2015 para atender a uma necessidade crucial da WGL: encontrar mão de obra altamente qualificada para os serviços de alta complexidade que realizava. Desde o início, a Rac assumiu não apenas a execução desses serviços, mas também toda a gestão da área de painéis e quadros de transferência. Essa abordagem estratégica permitiu à empresa expandir rapidamente, assumindo um papel de destaque no mercado e participando ativamente na conquista de grandes contratos de licitação em várias esferas. Hoje, consolidada como um líder no setor, a Rac continua a oferecer soluções inovadoras e de alta qualidade para seus clientes, mantendo seu compromisso com a excelência e a satisfação do cliente.
                </p>
              </div>
            </div>
          </div>
        </animated.section>
        {/* Mission and Values */}
        <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 text-gray-800 dark:text-white">Nossos Valores</h2>
            <div className="flex md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-800 dark:text-white">Nossas Capacidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((item, index) => (
                <div key={index} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl text-blue-600 dark:text-blue-400 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-gray-600 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">A RAC Soluções está pronta para colaborar na definição do escopo da sua obra</h2>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors duration-300">
              Entre em Contato
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;