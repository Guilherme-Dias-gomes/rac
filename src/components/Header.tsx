"use client";

import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { productLinks } from "@/components/data/product-links";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className="flex w-full justify-between items-center fixed top-0 left-0 z-50 px-4 py-2"
        style={{ background: "var(--color-principal)", color: "white" }}
      >
        <Logo />

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8">
          <NavigationMenuDemo />
        </div>

        {/* Direita */}
        <div className="flex items-center gap-4">
          <ModeToggle />

          <div className="hidden md:flex gap-2 items-center bg-gray-500/60 px-4 py-1 rounded-2xl hover:bg-green-400/50 transition delay-100 duration-300 hover:-translate-y-1 hover:scale-110">
            <a href="tel:551135525300" className="flex items-center gap-2">
              <img src="/telefone.png" className="w-7" alt="tel" />
              (11) 3552-5300
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Espaço para compensar o header fixo */}
      <div className="h-16 md:h-[72px]" />

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 w-full h-screen bg-white dark:bg-zinc-900 z-40 flex flex-col items-center justify-start pt-20 gap-6 overflow-y-auto">
          <Link href="/" onClick={closeMenu}>
            <span className="text-lg text-zinc-800 dark:text-white">
              Início
            </span>
          </Link>
          <Link href="/quemSomos" onClick={closeMenu}>
            <span className="text-lg text-zinc-800 dark:text-white">Sobre</span>
          </Link>

          {/* Produtos com dropdown animado */}
          <div className="flex flex-col items-center px-4 ">
            <button
              onClick={() => setIsProductsOpen((prev) => !prev)}
              className="flex gap-2 justify-between items-center text-lg text-zinc-800 dark:text-white font-semibold py-2"
            >
              Produtos
              <span
                className={`transition-transform duration-300 ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Dropdown com animação */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isProductsOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-2 pl-4 pt-2">
                {productLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeMenu}>
                    <span className="text-base text-zinc-700 dark:text-zinc-300 hover:underline">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/projetos" onClick={closeMenu}>
            <span className="text-lg text-zinc-800 dark:text-white">
              Projetos
            </span>
          </Link>
          <Link href="/contato" onClick={closeMenu}>
            <span className="text-lg text-zinc-800 dark:text-white">
              Contato
            </span>
          </Link>
        </div>
      )}
    </>
  );
}
