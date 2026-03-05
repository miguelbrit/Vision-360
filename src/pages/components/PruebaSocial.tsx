import { Sparkles, ArrowRight } from "lucide-react";

const casos = [
  {
    title: "Pallá Restaurante & Pastelería",
    category: "Gastronomía",
    year: "2024",
    description: "De 6 a 90 empleados. Expansión a nuevos mercados.",
    metric: "+84 empleados",
  },
  {
    title: "Cero 30 Marca Automotriz",
    category: "Automóvil",
    year: "2023",
    description: "+50% en ventas en menos de 6 meses tras renovar su imagen.",
    metric: "+50% ventas",
  },
  {
    title: "Hotel Naciones Unidas",
    category: "Hotelería",
    year: "2023",
    description: "+35% en ocupación en el primer trimestre con rebranding.",
    metric: "+35% ocupación",
  },
];

export function PruebaSocial() {
  return (
    <section className="relative w-full py-24 px-6 md:px-10 lg:px-20 bg-slate-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            Prueba Social
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Historias que hemos <span className="gradient-text">transformado</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {casos.map((caso, index) => (
            <div
              key={index}
              className="group relative bg-white bg-slate-900 p-8 rounded-2xl border border-slate-200 border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {caso.category}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {caso.year}
                  </span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-900 text-white">
                  {caso.title}
                </h3>
                
                <p className="text-slate-600 text-slate-300 leading-relaxed text-lg mb-4">
                  {caso.description}
                </p>
                
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/20 rounded-xl">
                  <Sparkles className="w-4 h-4 text-primary mr-2" />
                  <span className="text-primary font-bold text-lg">{caso.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all"
          >
            Ver todos los casos de éxito
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
