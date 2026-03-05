import { TrendingUp, ArrowRight } from "lucide-react";

export function Philosophy() {
  return (
    <section id="vision360" className="w-full bg-white py-20 px-6 md:px-10 lg:px-20">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto">
        {/* Press Logos */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 mb-32">
          {["FORBES", "TECHCRUNCH", "WIRED", "BLOOMBERG", "VERGE"].map((logo) => (
            <span key={logo} className="text-[#888888] text-lg md:text-xl font-bold tracking-tighter">
              {logo}
            </span>
          ))}
        </div>

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-4 text-[#D946EF] font-bold tracking-[0.2em] text-[10px] uppercase">
            <span className="w-12 h-[1px] bg-[#D946EF]/30"></span>
            Quiénes Somos
            <span className="w-12 h-[1px] bg-[#D946EF]/30"></span>
          </div>
          
          <h2 className="text-black text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-[-0.02em]">
            Tu socio en<br />
            <span className="text-[#D946EF] italic">crecimiento</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            <p className="text-[#333333] text-lg leading-[1.6] font-medium max-w-[500px]">
              En VISIÓN 360, creemos que toda marca tiene el potencial de brillar. Nuestra misión es ayudarte a lograrlo a través de estrategias personalizadas y soluciones integrales de marketing. Desde la creación de empresas hasta la revitalización de negocios establecidos, nuestro enfoque es 360°.
            </p>
            
            <div className="w-full h-px bg-[#E5E5E5] my-10"></div>
            
            <div className="flex items-center gap-10 md:gap-16">
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">+84</p>
                <p className="text-[10px] text-[#888888] uppercase tracking-widest font-bold mt-3">Empleados Creados</p>
              </div>
              <div className="w-px h-16 bg-[#E5E5E5]"></div>
              <div>
                <p className="text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">5</p>
                <p className="text-[10px] text-[#888888] uppercase tracking-widest font-bold mt-3">Casos de Éxito</p>
              </div>
            </div>
            
            <a href="#" className="mt-14 w-fit group flex items-center gap-3 text-black font-bold text-lg border-b-2 border-[#D946EF] pb-2 hover:opacity-80 transition-opacity">
              Conoce nuestra metodología
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: Graphic */}
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-fuchsia-100 via-[#D946EF]/5 to-orange-50 blur-[80px] rounded-full z-0"></div>
            
            {/* Main Card */}
            <div className="relative w-[90%] h-[75%] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-gray-100 rotate-[-2deg] z-10 overflow-hidden flex items-center justify-center">
              {/* Dotted Grid Background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}></div>
              
              {/* Chart Lines */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 300">
                <path d="M-20,250 C100,250 150,150 250,200 C350,250 420,50 420,50" fill="none" stroke="url(#grad1)" strokeWidth="3" />
                <path d="M-20,200 C150,200 200,280 420,150" fill="none" stroke="url(#grad2)" strokeWidth="1.5" opacity="0.6" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fca5a5" />
                    <stop offset="100%" stopColor="#D946EF" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fdba74" />
                    <stop offset="100%" stopColor="#D946EF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-[5%] right-[2%] z-20 p-3 bg-[#D946EF] rounded-xl shadow-xl shadow-[#D946EF]/20" style={{ animation: 'float 4s ease-in-out infinite' }}>
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            
            <div className="absolute bottom-[8%] left-[2%] z-20 px-4 py-2.5 bg-white rounded-lg shadow-lg border border-gray-100 flex items-center gap-2" style={{ animation: 'float 4s ease-in-out 2s infinite' }}>
              <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
              <span className="text-[10px] font-bold text-black uppercase tracking-widest">Active Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
