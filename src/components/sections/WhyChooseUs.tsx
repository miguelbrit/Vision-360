import { CheckCircle, Users, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Personalización Total",
    description: "Diseñamos estrategias únicas para cada cliente, entendiendo que cada negocio tiene necesidades distintas.",
  },
  {
    icon: TrendingUp,
    title: "Acompañamiento Completo",
    description: "Desde la idea inicial hasta la medición de resultados, estamos contigo en cada paso del proceso.",
  },
  {
    icon: CheckCircle,
    title: "Resultados Medibles",
    description: "Reportes claros y optimización constante para garantizar el crecimiento de tu negocio.",
  },
  {
    icon: Sparkles,
    title: "Innovación Constante",
    description: "Utilizamos las herramientas más avanzadas del mercado para mantenerte siempre adelante.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative w-full py-24 px-6 md:px-10 lg:px-20 bg-white bg-background-dark">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-slate-900 text-white text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Tu éxito es <span className="gradient-text">nuestra prioridad</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            En VISIÓN 360 nos diferencia nuestro compromiso genuino con cada proyecto y nuestra capacidad de transformar realidades.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white bg-slate-900 p-8 rounded-2xl border border-slate-100 border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/20 pointer-events-none"></div>
              
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-900 text-white">
                {reason.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-lg">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="#contacto" className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all">
            ¿Listo para trabajar con nosotros?
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
