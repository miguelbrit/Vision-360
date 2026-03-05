import { TrendingUp, Users, DollarSign, BarChart3, ArrowDown, PlayCircle } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function NosotrosHero() {
  return (
    <main id="inicio" className="flex-1 flex items-center justify-center px-6 md:px-10 lg:px-20 py-12 lg:py-20 z-10 relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/15 blur-[60px] rounded-full -z-10"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-accent/15 blur-[60px] rounded-full -z-10"></div>

      <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary tracking-wider uppercase">
              Conoce nuestra historia
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900 text-white neon-glow">
            Más que una agencia, <br />
            <span className="gradient-text">tu socio</span> en nuevos <br />
            comienzos y transformaciones
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 text-slate-400 max-w-[600px] leading-relaxed">
            En VISIÓN 360, creemos que toda marca tiene el potencial de brillar. Nuestra misión es ayudarte a lograrlo, ya sea desde cero o revitalizando tu legado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#historia">
              <Button variant="gradient" size="lg">
                Conoce nuestra historia
              </Button>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="w-full max-w-[420px] glass-panel rounded-2xl shadow-2xl p-6 flex flex-col gap-6 transform hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between border-b border-slate-200/50 border-slate-700/50 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 text-white">Dashboard Marketing</h3>
                  <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>{" "}
                    MÉTRICAS EN VIVO
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 bg-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-xs text-slate-500">Leads</span>
                </div>
                <p className="text-2xl font-bold text-slate-900 text-white">+247%</p>
                <div className="w-full h-1 bg-slate-200 bg-slate-700 rounded-full mt-2">
                  <div className="h-full w-[75%] bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>
              </div>
              <div className="bg-slate-100 bg-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-slate-500">Ventas</span>
                </div>
                <p className="text-2xl font-bold text-slate-900 text-white">+156%</p>
                <div className="w-full h-1 bg-slate-200 bg-slate-700 rounded-full mt-2">
                  <div className="h-full w-[60%] bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 bg-slate-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-500">Rendimiento por Canal</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600 text-slate-300">Instagram</span>
                    <span className="text-primary font-bold">45%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 bg-slate-700 rounded-full">
                    <div className="h-full w-[45%] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600 text-slate-300">Facebook Ads</span>
                    <span className="text-primary font-bold">32%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 bg-slate-700 rounded-full">
                    <div className="h-full w-[32%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600 text-slate-300">Google Ads</span>
                    <span className="text-primary font-bold">23%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 bg-slate-700 rounded-full">
                    <div className="h-full w-[23%] bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 text-white">ROI Promedio</p>
                <p className="text-xs text-slate-500">5.2x en proyectos activos</p>
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#historia" className="text-slate-400 hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </main>
  );
}
