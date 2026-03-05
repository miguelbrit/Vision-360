import { ArrowRight, MessageCircle, Mail, Instagram } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function Cierre() {
  return (
    <section className="relative w-full py-24 px-6 md:px-10 lg:px-20 bg-slate-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
          ¿Listo para transformar tu marca?
        </span>
        
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          ¿Listo para escribir el siguiente capítulo de tu marca?
        </h2>
        
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">
          Ya sea que estés empezando desde cero o necesites revitalizar tu negocio, tenemos la estrategia 360° para ti.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="gradient" size="lg" className="w-full sm:w-auto group">
            Agendar Diagnóstico Gratuito
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <a href="#" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto group border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablar por WhatsApp
            </Button>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-500">
          <a href="mailto:contacto@vision360.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            contacto@vision360.com
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" />
            @vision360_agencia
          </a>
        </div>
      </div>
    </section>
  );
}
