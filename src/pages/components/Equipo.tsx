import { Users, PenTool, BarChart3, MessageSquare, Search } from "lucide-react";

const roles = [
  {
    icon: BarChart3,
    title: "Estrategas de Marketing",
    description: "Analizamos tu mercado y creamos hojas de ruta personalizadas para el crecimiento.",
  },
  {
    icon: PenTool,
    title: "Diseñadores Gráficos",
    description: "Creamos identidades visuales únicas que conectan con tu audiencia.",
  },
  {
    icon: MessageSquare,
    title: "Especialistas en Redes",
    description: "Gestionamos y optimizamos tu presencia en todas las plataformas sociales.",
  },
  {
    icon: Search,
    title: "Redactores de Contenido",
    description: "Producimos textos que venden, persuaden y posicionan tu marca.",
  },
];

export function Equipo() {
  return (
    <section className="relative w-full py-24 px-6 md:px-10 lg:px-20 bg-slate-50 dark:bg-slate-900/20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            El Equipo
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Mentes detrás de la <span className="gradient-text">estrategia</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Un equipo multidisciplinario listo para potenciar tu marca. Desde diseñadores creativos hasta analistas de datos obsesivos con el ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((rol, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/20 pointer-events-none"></div>
              
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <rol.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {rol.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-lg">
                {rol.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-800 mx-auto mb-6">
            <Users className="w-12 h-12 text-slate-400" />
          </div>
          <p className="text-slate-500">
            ¿Quieres formar parte de nuestro equipo? <a href="#contacto" className="text-primary hover:underline">Contáctanos</a>
          </p>
        </div>
      </div>
    </section>
  );
}
