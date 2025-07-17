"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavigationMenuDemo() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Menu desktop */}
      <nav className="hidden md:flex gap-4 items-center">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/quemSomos" className="hover:underline">Quem Somos</Link>
        <Link href="/projetos" className="hover:underline">Projetos</Link>
        <Link href="/contato" className="hover:underline">Contato</Link>
      </nav>

      {/* Menu mobile */}
      <div className="md:hidden relative">
        <Button variant="ghost" size="icon" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </Button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50 flex flex-col">
            <Link href="/" onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-200">Home</Link>
            <Link href="/quemSomos" onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-200">Quem Somos</Link>
            <Link href="/projetos" onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-200">Projetos</Link>
            <Link href="/contato" onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-200">Contato</Link>
          </div>
        )}
      </div>
    </>
  )
}
