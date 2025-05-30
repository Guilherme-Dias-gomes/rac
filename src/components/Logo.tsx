import Image from "next/image"

export default function Logo() {
  return (
    <div>
      {/* Logo para tema claro */}
      <Image
        src="/logo_rac_branca.png"
        alt="Logo Claro"
        className="block dark:hidden"
        width={150}
        height={40}
      />

      {/* Logo para tema escuro */}
      <Image
        src="/logo_rac_preta.png"
        alt="Logo Escuro"
        className="hidden dark:block"
        width={150}
        height={40}
      />
    </div>
  )
}
