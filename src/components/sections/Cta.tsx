import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

export function Cta() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6 py-24 bg-background-dark">
      {/* Background Visual Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background-dark"></div>
        
        {/* Glowing Connection Lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-primary to-transparent rotate-45"></div>
          <div className="absolute top-1/2 right-1/3 w-px h-96 bg-gradient-to-b from-transparent via-primary to-transparent -rotate-12"></div>
          <div className="absolute bottom-1/4 left-1/2 w-px h-48 bg-gradient-to-b from-transparent via-primary to-transparent rotate-[110deg]"></div>
          
          {/* Radial Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] transform-gpu"></div>
        </div>

        {/* Abstract Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" 
          style={{
            backgroundImage: "linear-gradient(to right, #d946ef 1px, transparent 1px), linear-gradient(to bottom, #d946ef 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        <div className="flex flex-col items-center gap-12">
          {/* Headline Section */}
          <div className="space-y-6">
            <h2 className="text-slate-100 text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] md:leading-[0.85]">
              ¿Listo para<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                transformar tu negocio?
              </span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Hablemos de tu próximo gran proyecto. Estamos listos para ayudarte a alcanzar el éxito.
            </p>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl">
            <Button variant="gradient" size="lg" className="w-full sm:w-auto group">
              Contáctanos
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto group border-slate-700 text-white hover:bg-white/5">
              <Sparkles className="w-5 h-5 mr-2 text-primary" />
              Ver Servicios
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8">
            <p className="text-slate-500 text-sm uppercase tracking-[0.2em] font-bold">
              Liderando el futuro digital
            </p>
            <div className="mt-4 flex items-center justify-center gap-8 opacity-40 grayscale contrast-125">
              {/* Simulated Logo Marks */}
              <div className="w-8 h-8 rounded-md bg-slate-400"></div>
              <div className="w-8 h-8 rounded-full bg-slate-400"></div>
              <div className="w-8 h-8 rotate-45 bg-slate-400"></div>
              <div className="w-8 h-8 rounded-lg border-2 border-slate-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
