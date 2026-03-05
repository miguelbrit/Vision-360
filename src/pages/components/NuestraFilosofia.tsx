import { Target, TrendingUp, Lightbulb, Handshake, ArrowRight } from "lucide-react";

const filosofias = [
  {
    icon: Target,
    title: "Personalización Total",
    description: "Cada cliente es un universo. Diseñamos estrategias únicas, nunca plantillas genéricas, porque entendemos que tu negocio tiene necesidades específicas.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Comprobados",
    description: "Nuestro portafolio habla por sí mismo: +50% en ventas, +35% en ocupación hotelera, expansión de 6 a 90 empleados. Hablamos el idioma de los números.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "El mercado cambia rápido. Nosotros también. Utilizamos las últimas herramientas de IA, análisis de datos y tendencias digitales para mantenerte siempre un paso adelante.",
  },
  {
    icon: Handshake,
    title: "Acompañamiento 360°",
    description: "Desde la primera idea hasta la medición final. No te dejamos solo tras el lanzamiento; caminamos contigo en cada ajuste y victoria.",
  },
];

export function NuestraFilosofia() {
  return (
    <section className="relative w-full py-24 px-6 md:px-10 lg:px-20 bg-slate-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            Nuestra Filosofía
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            ¿Qué hace único a <span className="gradient-text">VISIÓN 360</span>?
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            No somos una fábrica de campañas. Somos arquitectos de negocios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filosofias.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
