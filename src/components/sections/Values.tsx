import { Lightbulb, Heart, Shield, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Buscamos constantemente nuevas soluciones y tendencias para mantenernos a la vanguardia.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Nos dedicamos al éxito de nuestros clientes como si fuera propio.",
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Construimos relaciones basadas en la transparencia y la comunicación abierta.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Fomentamos el trabajo en equipo interno y externo para alcanzar mejores resultados.",
  },
  {
    icon: Rocket,
    title: "Resiliencia",
    description: "Convertimos desafíos en oportunidades, garantizando adaptabilidad y perseverancia.",
  },
];

export function Values() {
  return (
    <section className="relative w-full py-24 px-6 md:px-10 lg:px-20 bg-slate-50 bg-slate-900/20">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            Nuestros Valores
          </span>
          <h2 className="text-slate-900 text-white text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Los pilares que nos <span className="gradient-text">definen</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Nuestra filosofía de trabajo está fundamentada en valores que guían cada decisión y proyecto.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white bg-slate-900 p-6 rounded-2xl border border-slate-100 border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 text-center"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/20 pointer-events-none"></div>
              
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-slate-900 text-white text-lg font-bold mb-2">
                {value.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
