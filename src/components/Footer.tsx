import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Quem somos", href: "#" },
    { name: "Produtos", href: "#" },
    { name: "Projetos", href: "#" },
    { name: "Contato", href: "#" },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="w-6 h-6" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="w-6 h-6" />, href: "#", label: "Twitter" },
    { icon: <FaInstagram className="w-6 h-6" />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="flex text-white text-center" style={{ background: "var(--color-principal)", color: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="col-span-1 md:col-span-1">
            <Logo/>
            <p className="text-gray-300 mt-2 text-start">
              A RAC Soluções oferece serviços completos em energia, incluindo venda de produtos, consultoria, locação e manutenção de geradores. Nosso objetivo é suprir as necessidades energéticas dos nossos clientes, entregando soluções confiáveis e inovadoras.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Mapa do Site</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contatos</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" />
                <span className="text-gray-300">11 5666-7009</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" />
                <span className="text-gray-300">21 3900-1709</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" />
                <span className="text-gray-300">11 91893-0401</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-300" />
                <span className="text-gray-300">contato@racsolucaoenergia.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-start">
                <FaMapMarkerAlt className="text-gray-300" />
                <span className="text-gray-300">Av. Maria Coelho de Aguiar, 573 - Cj 5- Bloco B - Jardim São Luiz - SP</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start col-span-1">
            <h3 className="text-xl font-semibold justify-center mb-4">Redes Sociais</h3>
            <div className="flex space-x-4 ">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label={`Follow us on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} RAC Soluções. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm mx-3 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm mx-3 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;