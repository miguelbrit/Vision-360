import { Sparkles, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="flex flex-col gap-12 px-6 md:px-10 lg:px-20 py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-slate-900">
            <div className="p-1.5 bg-primary rounded-md text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg tracking-tight">VISIÓN 360</h3>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Tu aliado estratégico para alcanzar el éxito. Transformamos ideas en negocios sólidos y revitalizamos marcas.
          </p>
        </div>

        {/* Servicios */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900">
            Servicios
          </h4>
          <Link to="/servicios" className="text-slate-500 hover:text-primary text-sm transition-colors">Desde Cero</Link>
          <Link to="/servicios" className="text-slate-500 hover:text-primary text-sm transition-colors">Revitalización</Link>
          <Link to="/servicios" className="text-slate-500 hover:text-primary text-sm transition-colors">Branding</Link>
        </div>

        {/* Empresa - Sincronizado con Navbar */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900">
            Empresa
          </h4>
          <Link to="/nosotros" className="text-slate-500 hover:text-primary text-sm transition-colors">Sobre Nosotros</Link>
          <Link to="/portfolio" className="text-slate-500 hover:text-primary text-sm transition-colors">Casos de Éxito</Link>
          <Link to="/contacto" className="text-slate-500 hover:text-primary text-sm transition-colors">Contacto</Link>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900">
            Contáctanos
          </h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:contacto@vision360.com" className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm transition-colors">
              <Mail className="w-4 h-4" />
              contacto@vision360.com
            </a>
            <a href="tel:+58" className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm transition-colors">
              <Phone className="w-4 h-4" />
              +58
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-all">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
        <p>© 2024 VISIÓN 360. TODOS LOS DERECHOS RESERVADOS.</p>
        <div className="flex gap-8 items-center">
          <a href="https://soymiguelbrito.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Realizado por Soy Miguel Brito
          </a>
          <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
}
