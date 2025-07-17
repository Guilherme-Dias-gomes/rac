'use client';

import { useState } from "react";
import { FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";

const PainelMT = () => {
const [isDarkMode] = useState(false);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

  const productData = {
    name: "PainelMT",
    tagline: "Um painel de média tensão (MT) é um componente vital em sistemas elétricos, usado para controlar e proteger equipamentos de distribuição de energia.",
    contato: "Entre em Contato",
    features: [
      { id: 1, title: "Capacidade de potencia", description: "kilowatts (kW) ou megawatts (MW)." },
      { id: 2, title: "Movido com base a", description: "diesel, gasolina, gás natural ou outras fontes." },
      { id: 3, title: "Eficiência energética", description: "determina o consumo de combustível por unidade de energia gerada." }
    ],
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Revolutionary product!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        id: 2,
        user: "Jane Smith",
        rating: 4,
        comment: "Great innovation",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      }
    ],
    videos: [
      { id: 1, url: "/eletrocentro.webp", title: "Product Overview" },
      { id: 2, url: "https://images.unsplash.com/photo-1498049794561-7780e7231661", title: "Features Demo" }
    ]
  };


  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-background dark:bg-dark-background transition-colors duration-300">
        <section className="pt-40 pb-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto text-center relative z-10"
          >
            <motion.h2 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-1 to-chart-4 bg-clip-text text-transparent"
            >
              {productData.name}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-black dark:text-white md:text-2xl dark:text-dark-accent mb-12 max-w-2xl mx-auto"
            >
              {productData.tagline}
            </motion.p>
            <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <img
                src="/PainelMT.webp"
                alt="Product Hero"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 m-auto w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                <FiPlay className="w-6 h-6 text-white dark:text-black" />
              </motion.button>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors shadow-lg shadow-primary/25">
              {productData.contato}
            </motion.button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-secondary/50 dark:bg-dark-secondary/50">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {productData.features.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ scale: 1.05 }}
                className="bg-card dark:bg-gray-600 p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-black dark:text-white dark:text-dark-accent">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Comentarios dos Clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productData.reviews.map((review) => (
                <motion.div
                  key={review.id}
                  whileHover={{ y: -5 }}
                  className="bg-card dark:bg-white/30 p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.user}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">{review.user}</h4>
                      <div className="flex text-yellow-300">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-black dark:text-white">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PainelMT;