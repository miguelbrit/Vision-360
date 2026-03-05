import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 lg:px-20 py-6 max-w-[1440px] mx-auto w-full z-50 sticky top-0 bg-background-light/80 bg-background-dark/80 backdrop-blur-md border-b border-slate-100 border-slate-800">
      <Link to="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="p-2 bg-primary rounded-lg text-white">
          <Sparkles className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900 text-white">
          VISIÓN 360
        </h2>
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {[
          { name: "Inicio", href: "/" },
          { name: "Visión 360", href: "/nosotros" },
          { name: "Servicios", href: "/servicios" },
          { name: "Portfolio", href: "/portfolio" },
          { name: "Contacto", href: "/contacto" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-sm font-semibold text-slate-600 text-slate-300 hover:text-primary transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="hidden sm:inline-flex">
          Ingresar
        </Button>
        <Link to="/contacto">
          <Button variant="gradient">Escríbenos</Button>
        </Link>
      </div>
    </header>
  );
}
