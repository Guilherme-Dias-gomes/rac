import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { NavigationMenuDemo } from "./NavigationMenuDemo";

export default function Header() {
    return(
        <header
                className="flex w-full justify-between items-center fixed top-0 left-0 z-50"
                style={{ background: "var(--color-principal)", color: "white" }}
              >
                <Logo />
                <div className="flex gap-8">
                  <NavigationMenuDemo />
                </div>
                <ModeToggle />
        
                <div className="flex gap-2 items-center bg-gray-500/60 px-4 py-1 rounded-2xl hover:bg-green-400/50 transition delay-100 duration-300 hover:-translate-y-1 hover:scale-110 ">
                  <a href="tel:551135525300" className="flex items-center gap-2">
                    <img src="/telefone.png" className="w-7" alt="tel" />
                    (11) 3552-5300
                  </a>
                </div>
                <div className="pr-4"></div>
              </header>
    )
}