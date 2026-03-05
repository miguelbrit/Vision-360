import { Button } from "../components/ui/Button";
import { 
  Rocket, 
  RefreshCw,
  CheckCircle2, 
  ArrowRight,
  Palette,
  Megaphone,
  FileText,
  BarChart3,
  Search,
  Globe,
  Users,
  TrendingUp,
  Sparkles,
  Target,
  Zap,
  LineChart
} from "lucide-react";

export default function Servicios() {
  const pasosRevitalizacion = [
    { numero: 1, titulo: "Diagnóstico", descripcion: "Auditoría de la marca actual, evaluación de imagen y presencia digital." },
    { numero: 2, titulo: "Rebranding", descripcion: "Actualización de identidad visual y estrategia de reposicionamiento." },
    { numero: 3, titulo: "Optimización de Presencia Digital", descripcion: "Mejora de redes sociales, SEO y optimización web." },
    { numero: 4, titulo: "Campañas de Publicidad", descripcion: "Anuncios segmentados, retargeting y promociones estratégicas." },
    { numero: 5, titulo: "Generación de Confianza", descripcion: "Contenido social proof, testimonios y casos de éxito." },
    { numero: 6, titulo: "Medición y Crecimiento", descripcion: "Seguimiento de métricas clave, ROI y escalamiento de estrategias." },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-white">
      {/* SECCIÓN 1: Hero Section - Similar a Inicio */}
      <main className="flex-1 flex items-center justify-center px-6 md:px-10 lg:px-20 py-12 lg:py-20 z-10 relative">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/15 blur-[60px] rounded-full -z-10"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-accent/15 blur-[60px] rounded-full -z-10"></div>

        <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                Agencia de Marketing Integral
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900 neon-glow">
              Estrategias para <br />
              <span className="gradient-text">construir</span> y <br />
              reconstruir marcas
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 max-w-[600px] leading-relaxed">
              Ya sea que tengas una idea esperando nacer o una marca que necesite renacer, tenemos el plan 360° perfecto para ti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="gradient" size="lg">
                Ver Servicios
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                Contáctanos
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <div className="flex -space-x-4">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDkdAnrZyhGZTvstv5zubOOqXKOXfyk70T5r_hxVT3_dZtgfuw1Wr3Jb2XN9ixnzMY5QYLIDWv1qh5Qe7ujvSY8zc_xswC7NAv2nQVkz7GxBtEnKHPoQOmcRtnuPflfCK_xVkEr927Rg6i_erOc-AstjT1eaT9N-jLT3XrJDoZN4ijyOwgPM46jk7lPt4_zzQFbH0IEPT-r8C0kkGa3DzoTBHo0EcjlxhSGiWS-mZ_b6uBNWP5BlW5qA6TkwvQrYIY4Cvyvs6KKxKET",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBBfXB9p6RX3Czf0tKc9gdC8uCjeQ9BR9IH_PXrnfuG9zkQypaIJdUmlQ-uuoOIzRmUcNaOkpO0WmklHYQGB1psQUeCNWIDaOZqMLmsHo2C-VMa9lkNIUMugJtXNlQVf-b1kpMF7uWgr0JMHnIcOpBeGW6EU2y8cpLS5JQbsdne0h2rSovQAoTxAy1RXGi7jnHrrV_ybEHZppndODMPyqzjFGpReKf4Kpx0iKpzT_q3xQUyiKOsjpR5KfRvVCHhOkeZ15sTldgcYilP",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDeYRxHZE8httNnMUbGJmAzViJw5HvlO6GQCDh5_iuBOy-NNwG3GrppY-9Y_jjW-OZCQ2s__XSl2zCdwISdkx6ZgbtDeRUJ-Cs45utqRL7u7cGn6fk2VcxZvC-8SD8ZLJJT8ia1zOu7OKCDbTqWvION_ofFhHLli74pTsS-OQpoNrZnUfn39ULN3b9_eqbTSnipOd-eeT8F-_C-5IIl6cHTbx2g21ZC0QFAggXetIyPjp_x2GOSV9PboZSoGVpwCw_drNZ-JG6i0Tke",
                ].map((url, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 bg-cover bg-center"
                    style={{ backgroundImage: `url('${url}')` }}
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white text-xs font-bold">
                  +2k
                </div>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Casos de éxito comprobados
              </p>
            </div>
          </div>

          {/* Right Content: SVG Animation */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl -z-10"></div>
            
            {/* SVG Animated Illustration */}
            <svg className="w-full max-w-[450px] h-auto" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Floating shapes with animation */}
              <circle cx="200" cy="200" r="120" fill="url(#gradient1)" opacity="0.2" className="animate-pulse">
                <animate attributeName="r" values="120;130;120" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="80" fill="url(#gradient2)" opacity="0.3">
                <animate attributeName="r" values="80;90;80" dur="2s" repeatCount="indefinite" />
              </circle>
              
              {/* Central Icon Card - Marketing Dashboard */}
              <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                <rect x="80" y="100" width="240" height="180" rx="20" fill="white" stroke="#d948ef" strokeWidth="2" className="drop-shadow-xl"/>
                <rect x="80" y="100" width="240" height="40" rx="20" fill="#d948ef"/>
                <circle cx="110" cy="120" r="6" fill="white"/>
                <circle cx="130" cy="120" r="6" fill="white" opacity="0.6"/>
                <circle cx="150" cy="120" r="6" fill="white" opacity="0.3"/>
                <rect x="100" y="160" width="80" height="60" rx="8" fill="#f3e8ff"/>
                <rect x="200" y="160" width="80" height="60" rx="8" fill="#f3e8ff"/>
                <rect x="220" y="170" width="40" height="8" rx="4" fill="#d948ef" className="animate-pulse"/>
                <rect x="120" y="170" width="40" height="8" rx="4" fill="#a855f7"/>
              </g>
              
              {/* Floating Icons */}
              <g className="animate-pulse" style={{ animationDuration: '2s' }}>
                <circle cx="60" cy="80" r="30" fill="white" stroke="#f97316" strokeWidth="2" className="drop-shadow-lg"/>
                <Zap x="45" y="65" size={30} className="text-[#f97316]" />
              </g>
              
              <g className="animate-pulse" style={{ animationDuration: '2.5s' }}>
                <circle cx="340" cy="100" r="30" fill="white" stroke="#d948ef" strokeWidth="2" className="drop-shadow-lg"/>
                <Target x="325" y="85" size={30} className="text-[#d948ef]" />
              </g>
              
              <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                <circle cx="320" cy="300" r="30" fill="white" stroke="#a855f7" strokeWidth="2" className="drop-shadow-lg"/>
                <LineChart x="305" y="285" size={30} className="text-[#a855f7]" />
              </g>
              
              <g className="animate-pulse" style={{ animationDuration: '2.2s' }}>
                <circle cx="70" cy="320" r="30" fill="white" stroke="#d948ef" strokeWidth="2" className="drop-shadow-lg"/>
                <Rocket x="55" y="305" size={30} className="text-[#d948ef]" />
              </g>
              
              {/* Sparkle effects */}
              <g className="animate-spin" style={{ animationDuration: '8s' }}>
                <path d="M200 50 L205 65 L220 70 L205 75 L200 90 L195 75 L180 70 L195 65 Z" fill="#d948ef" opacity="0.6"/>
              </g>
              <g className="animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                <path d="M350 200 L355 215 L370 220 L355 225 L350 240 L345 225 L330 220 L345 215 Z" fill="#a855f7" opacity="0.6"/>
              </g>
              
              {/* Gradients */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d948ef" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#d948ef" />
                </linearGradient>
              </defs>
            </svg>

            {/* Abstract 3D Shape Mocks */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-xl rotate-12 -z-10 shadow-xl opacity-80 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-tr from-secondary to-primary rounded-full -z-10 shadow-xl opacity-60 blur-sm animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* SECCIÓN 2: Cards de Servicios */}
      <section className="px-6 md:px-10 lg:px-20 py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nuestros <span className="gradient-text">Servicios</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-[600px] mx-auto">
              Elige el camino perfecto para tu negocio
            </p>
          </div>

          {/* Cards de Enfoque Dual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {/* Card: Desde Cero */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-transparent hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white">
                  <Rocket className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Desde Cero</h3>
                  <p className="text-sm text-slate-500">Para emprendedores con ideas</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6">
                Transformamos tu idea en un negocio sólido. Te guiamos desde el 
                concepto hasta el lanzamiento con estrategias integrales.
              </p>
              <ul className="space-y-2 mb-8">
                {["Estudio de mercado", "Identidad de marca", "Estrategia digital", "Lanzamiento"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="gradient" className="w-full">
                Ver Proceso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Card: Revitalización */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-transparent hover:border-accent/50 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-yellow-500 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl flex items-center justify-center text-white">
                  <RefreshCw className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Revitalización</h3>
                  <p className="text-sm text-slate-500">Para marcas que necesitan renacer</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6">
                Renovamos tu marca y recuperamos el camino hacia el éxito. 
                Rebranding y estrategias para repositionar tu negocio.
              </p>
              <ul className="space-y-2 mb-8">
                {["Auditoría completa", "Rebranding", "Reposicionamiento", "Crecimiento"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                Ver Proceso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Proceso de 6 Pasos - Revitalización */}
      <section id="ruta-revitalizacion" className="px-6 md:px-10 lg:px-20 py-24 relative bg-white">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-secondary opacity-40"></div>
        
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit mx-auto mb-4">
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                Proceso de 6 Pasos
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              El renacimiento de tu <span className="gradient-text">marca</span> comienza aquí.
            </h2>
            <p className="text-lg text-slate-600 max-w-[600px] mx-auto">
              Transformamos negocios que han perdido su rumbo en referentes del mercado
            </p>
          </div>

          {/* Timeline Vertical */}
          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-40"></div>

            <div className="space-y-0">
              {pasosRevitalizacion.map((paso, index) => (
                <div 
                  key={paso.numero}
                  className={`relative flex items-center gap-8 py-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                    <div 
                      className="group relative bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-l-[3px] hover:shadow-xl transition-all duration-300"
                      style={{ borderLeftColor: 'transparent' }}
                    >
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity rounded-l-2xl"
                      ></div>
                      
                      <div className="flex items-center gap-4 mb-3" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                        <h3 className="text-lg font-bold text-slate-900">
                          {index === 1 ? (
                            <>
                              <span className="text-primary">Rebranding</span> Estratégico
                            </>
                          ) : (
                            paso.titulo
                          )}
                        </h3>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent/10">
                          {index === 0 && <Search className="w-5 h-5 text-accent" />}
                          {index === 1 && <RefreshCw className="w-5 h-5 text-accent" />}
                          {index === 2 && <Globe className="w-5 h-5 text-accent" />}
                          {index === 3 && <Megaphone className="w-5 h-5 text-accent" />}
                          {index === 4 && <Users className="w-5 h-5 text-accent" />}
                          {index === 5 && <TrendingUp className="w-5 h-5 text-accent" />}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600">
                        {paso.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* Número grande en el centro */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="relative w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center z-10 shadow-lg" 
                      style={{ borderColor: index % 2 === 0 ? '#d948ef' : '#a855f7' }}>
                      <span className="text-3xl font-extrabold gradient-text">
                        {paso.numero}
                      </span>
                    </div>
                  </div>

                  {/* Espacio vacío */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
