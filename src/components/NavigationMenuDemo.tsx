"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Transformadores",
    href: "/produtos/primitives/alert-dialog",
    description:
      "Transformadores transferem energia entre circuitos por indução eletromagnética, ajustando a voltagem com bobinas enroladas em um núcleo ferromagnético. São essenciais na transmissão e distribuição de energia elétrica.",
  },
  {
    title: "Subestações",
    href: "/produtos/primitives/hover-card",
    description:
      "Uma subestação é uma instalação que reduz a alta tensão da energia recebida para níveis adequados ao consumo, utilizando transformadores, disjuntores e equipamentos de controle. É essencial para a distribuição segura e eficiente da eletricidade.",
  },
  {
    title: "Painéis MT",
    href: "/docs/primitives/progress",
    description:
      "Um painel de média tensão (MT) controla e protege a distribuição de energia entre 1 kV e 36 kV. Com disjuntores e seccionadores, sua estrutura modular facilita a instalação e manutenção, garantindo segurança e continuidade elétrica.",
  },
  {
    title: "Painéis BT",
    href: "/docs/primitives/scroll-area",
    description: "Um painel de baixa tensão (BT) distribui e controla energia elétrica até 1 kV, abrigando disjuntores, relés e outros dispositivos. É essencial para a segurança e eficiência em instalações comerciais, industriais e residenciais.",
  },
  {
    title: "Geradores de Energia",
    href: "/docs/primitives/tabs",
    description:
      "Um gerador converte energia mecânica em elétrica usando um motor acoplado a um alternador. É usado para fornecer energia em emergências ou em locais sem acesso à rede elétrica",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/home">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/quemSomos">Quem Somos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projetos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
