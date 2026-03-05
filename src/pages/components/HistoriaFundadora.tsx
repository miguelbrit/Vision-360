import { Sparkles } from "lucide-react";

export function HistoriaFundadora() {
  return (
    <section id="historia" className="relative w-full py-24 px-6 md:px-10 lg:px-20 bg-white bg-background-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 bg-slate-800 border-4 border-slate-900 shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm font-medium">Andrea Becerra</p>
                  <p className="text-xs opacity-60">Fundadora & Estratega</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-xl rotate-12 -z-10 shadow-xl opacity-80"></div>
          </div>

          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              La Fundadora
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-white">
              De la visión a la realidad: <span className="gradient-text">El origen de VISIÓN 360</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-slate-300 leading-relaxed">
              <p>
                <strong className="text-slate-900 text-white">Soy Andrea Becerra, fundadora de VISIÓN 360.</strong> Mi trayectoria en marketing y publicidad me ha enseñado una verdad fundamental: no existen negocios perdidos, solo estrategias agotadas.
              </p>
              <p>
                Fundé esta agencia con un propósito claro: ser el aliado estratégico que yo hubiera querido tener al inicio. Entendí que el mercado no necesita más proveedores de servicios, necesita socios comprometidos con el éxito real.
              </p>
              <p>
                Desde transformar pequeños locales en cadenas de 90 empleados hasta revivir marcas automotrices estancadas, mi equipo y yo aplicamos una filosofía de visión integral: analizamos, creamos, ejecutamos y medimos. Todo en un solo lugar.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-lg font-semibold text-slate-900 text-white italic">
                Andrea Becerra
              </p>
              <p className="text-sm text-slate-500">
                Estratega & Fundadora
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
