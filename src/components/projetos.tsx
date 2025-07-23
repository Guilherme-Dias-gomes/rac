"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Projetos() {
  const projects = [
    {
      id: 1,
      title: "Grande rede de varejo de materiais de Construção Civil",
      description:
        "Retrofit de Subestação de Energia - Substituição de Disjuntores MT e BT, Preventiva da subestação e pintura geral.",
      image: "/retrofit.png",
      category: "varejo",
      demoLink: "https://example.com/ecommerce-demo",
      githubLink: "https://github.com/yourusername/ecommerce-project",
    },
    {
      id: 2,
      title: "Grande Indústria Química",
      description: "Manutenção preventiva e corretiva de Subestações.",
      image: "/substacao.png",
      category: "industria",
      demoLink: "https://example.com/task-app-demo",
      githubLink: "https://github.com/yourusername/task-management-app",
    },
    {
      id: 3,
      title: "Grande Empreendimento no Segmento do Varejo",
      description:
        "Implantação de paralelismo entre geradores 5x1050kVA com seletividade, automação e controle de rejeições de cargas.",
      image: "/paralelismo.png",
      category: "varejo",
      demoLink: "https://example.com/weather-app-demo",
      githubLink: "https://github.com/yourusername/weather-forecast-app",
    },
    {
      id: 4,
      title: "Grande Indústria Automobilística",
      description:
        "Fornecimento Painel de média tensão 13.8kV - 2MVA - Disjuntor a vácuo.",
      image: "/painelMdTensao.png",
      category: "industria",
      demoLink: "https://example.com/weather-app-demo",
      githubLink: "https://github.com/yourusername/weather-forecast-app",
    },
    {
      id: 5,
      title: "Grande Indústria de Alimentos",
      description: "Fornecimento e instalação de gerador e QTA.",
      image: "/gerador.png",
      category: "industria",
      demoLink: "https://example.com/weather-app-demo",
      githubLink: "https://github.com/yourusername/weather-forecast-app",
    },
    {
      id: 6,
      title: "Grande Indústria Automobilística",
      description:
        "Fornecimento e instalação de 100 metros rede aérea 13.8kV 2MVA.",
      image: "/rede-aerea.png",
      category: "industria",
      demoLink: "https://example.com/weather-app-demo",
      githubLink: "https://github.com/yourusername/weather-forecast-app",
    },
  ];

  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="h-full lg:p-24 ">
      <div className="bg-white/50 p-10 rounded-2xl">
        <h2 className="text-4xl font-bold mb-6 ">Projetos</h2>
        <div className="mb-4">
          <button
            onClick={() => setFilter("Todos")}
            className={`mr-2 px-4 py-2 rounded ${
              filter === "Todos" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter("varejo")}
            className={`mr-2 px-4 py-2 rounded ${
              filter === "varejo"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Varejo
          </button>
          <button
            onClick={() => setFilter("industria")}
            className={`px-4 py-2 rounded ${
              filter === "industria" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Industria
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
