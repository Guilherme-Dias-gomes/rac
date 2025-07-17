"use client";

import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="fixed top-10 left-0 w-full h-screen bg-white dark:bg-zinc-900 z-40 flex flex-col items-center justify-start pt-20 gap-6">
          <a href="/" className="text-lg text-zinc-800 dark:text-white">
            Início
          </a>
          <a href="/quemSomos" className="text-lg text-zinc-800 dark:text-white">
            Sobre
          </a>
          <a href="/projetos" className="text-lg text-zinc-800 dark:text-white">
            Serviços
          </a>
          <a href="/contato" className="text-lg text-zinc-800 dark:text-white">
            Contato
          </a>
        </div>
      )}
    </>
  );
}
