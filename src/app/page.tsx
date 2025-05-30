import { CarouselPlugin } from "@/components/CarouselPlugin";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";

export default function Home() {
  return (
    <main className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10">
      <header
        className="flex justify-between items-center"
        style={{ background: "var(--color-principal)", color: "white" }}
      >
        <Logo />
        <div className="flex gap-8">
          <NavigationMenuDemo />
          <ModeToggle />
        </div>
        <a className="cursor-pointer border rounded-2xl p-2 mr-28 text-white" style={{boxShadow: '0 0 10px white'}}>
          <span className="flex items-center gap-2">
            <img src="telefone.png" className="w-7" alt="tel" />
            11 3552-5300
          </span>
          
          <h3>ENTRE EM CONTATO</h3>
        </a>
      </header>
      <section className="flex items-center justify-center h-">
        <CarouselPlugin/>
      </section>
    </main>
  );
}
