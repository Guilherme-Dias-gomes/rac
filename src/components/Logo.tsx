import Image from "next/image"

export default function Logo() {
  return (
    <div>
      <Image
        src="/logo_rac_branca.png"
        alt="Logo Claro"
        className="block"
        width={150}
        height={40}
      />
    </div>
  )
}
