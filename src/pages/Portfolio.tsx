import { Sparkles, ArrowLeft, ArrowRight, PlayCircle, Users, Award, TrendingUp, Star, Zap, Target } from "lucide-react";
import { Button } from "../components/ui/Button";

const projects = [
  {
    title: "Pallá Restaurante & Pastelería",
    category: "Gastronomía",
    year: "2024",
    description: "Transformamos un pequeño negocio con 6 empleados en una cadena con 90 trabajadores, expandiéndolo a nuevos mercados.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN1nuJo0LQF9ix8O2JxnnIL_pQBKSn1lLJAj-v4rf2E6LAJoejH7SO880L62zBZmajw8fUhHcnwOQm_zE8NgoRhnKYHuV62Mllyb5hhJmhCtyX3Tbcl4PenaKTCdGGzfUdqURaRc4h7JmQH71w__wUbYDQVRjEwGqR5xiSYAYxLrC4sOFo_BxC1E4EY58FRB644jz1X-UGAO-QuYhFB8KqEMq5zAX8LzvwLRvqyyA_HsSfQiPTEsZ2ciSOGTSz1sWe4VaPV3qICJyt",
    aspect: "aspect-[4/3]",
    metrics: ["+84 empleados", "Expansión nacional", "Cadena de restaurantes"],
  },
  {
    title: "Cero 30 Marca Automotriz",
    category: "Automóvil",
    year: "2023",
    description: "Renovamos la imagen de una empresa de accesorios vehiculares, logrando un aumento del 50% en ventas en menos de 6 meses.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMNcj9flTWERTqn78OUtKAOzafjtEMOvXIaFpY2CG44UJ24d3rac0D5EvFBBHhPd-qBYo659ARTO8zgGoA5XGUvz9jzNEYrkwXPBxuSSm63tfgCzXQ-84goUD_EQez3LIBOxhmCnoUNIYpfYLIAgYNeTHpIAEWalDXFw2WiZHWevqIuvxVTIEGv-eI5X-Lx8H17bCp8qDwJssZDI8Tz38AbKdhHKKWhAY0K1qYeswOa5C576VMn2fgvSqhbXAbfiG6mFEDyqNONxGX",
    aspect: "aspect-[3/4]",
    metrics: ["+50% ventas", "6 meses", "Renovación de imagen"],
  },
  {
    title: "Hotel Naciones Unidas",
    category: "Hotelería",
    year: "2023",
    description: "Implementamos estrategias de rebranding que incrementaron la ocupación un 35% en el primer trimestre.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoG8AwqWYbTXT6iKB5PLXa4Lzhmo5ZUDemsTH8NJf4WbzJCjBgoYGIWBSp9uQEuavISFmb3uZJuuq3M2mw-SrA2HC2m7VN6anICK2ZUMM5GgHTzgFw1_3TnEDf6Pn9IkLOsBFM1vsB6EYTJw9QN3vVCIvdv601HErPGU08XXK3eCDEJ091plxmRXpNM4MklRsEHzhAWgAlPCGRXFcaeQp3T8wFHGvPTh7qIZx-MX-eNhO-1v-eHItH5arG7P7VxqeLZFET1NGU6Hsp",
    aspect: "aspect-[4/3]",
    metrics: ["+35% ocupación", "1er trimestre", "Rebranding completo"],
  },
  {
    title: "Exclusive Restaurant",
    category: "Gastronomía",
    year: "2024",
    description: "Lanzamos un restaurante de sushi y carne que se posicionó rápidamente como uno de los favoritos de la zona, combinando identidad visual de lujo con estrategias de marketing de alto impacto, logrando rentabilidad inmediata.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeIapg3O9hL5I_kavyFJLGfX4Tiv6vxIos49f0s3cvyUg8Y5uJ2bFCJColX8q2htKZj51xTrpmAm4BiyDC44O9xiLjP2dCjO6AUThgNYEefwqL9AYNb-m5dR2NQg25VrUsOpuw2yGUbv17t-b_idGNqlgDSeF1s1vl4CkAiQQnTmetqOH4WFDQE7ntbwwDE1GKdnWkOtLU2t8P032CV6bkV_NjMrj9ptudwVFwuHY4-8byBhbiLOVSchWmV8r3aer_TrCeXrAejWfr",
    aspect: "aspect-[4/3]",
    metrics: ["Rentabilidad inmediata", "Posicionamiento top", "Marca de lujo"],
  },
  {
    title: "Exclusive Club",
    category: "Entretenimiento",
    year: "2024",
    description: "Creamos desde cero una discoteca que ahora es un referente en entretenimiento nocturno, destacando con su branding innovador y estrategias de publicidad digital que atrajeron una clientela amplia y exclusiva.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeIapg3O9hL5I_kavyFJLGfX4Tiv6vxIos49f0s3cvyUg8Y5uJ2bFCJColX8q2htKZj51xTrpmAm4BiyDC44O9xiLjP2dCjO6AUThgNYEefwqL9AYNb-m5dR2NQg25VrUsOpuw2yGUbv17t-b_idGNqlgDSeF1s1vl4CkAiQQnTmetqOH4WFDQE7ntbwwDE1GKdnWkOtLU2t8P032CV6bkV_NjMrj9ptudwVFwuHY4-8byBhbiLOVSchWmV8r3aer_TrCeXrAejWfr",
    aspect: "aspect-[4/3]",
    metrics: ["Referente nocturno", "Clientela exclusiva", "Branding innovador"],
  },
  {
    title: "Boom Catering",
    category: "Gastronomía",
    year: "2025",
    description: "Proyecto próximo - Estamos trabajando en la transformación de esta marca de catering.",
    image: "",
    aspect: "aspect-[4/3]",
    metrics: ["Próximamente", "En desarrollo", " stay tuned"],
    upcoming: true,
  },
  {
    title: "Galletas by Pallá",
    category: "Gastronomía",
    year: "2025",
    description: "Proyecto próximo - Nueva línea de negocio de la marca Pallá.",
    image: "",
    aspect: "aspect-[4/3]",
    metrics: ["Próximamente", "En desarrollo", "Stay tuned"],
    upcoming: true,
  },
];

export default function Portfolio() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Hero Section - Portafolio */}
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
                Portfolio
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900 neon-glow">
              Casos de <br />
              <span className="gradient-text">Éxito</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 max-w-[600px] leading-relaxed">
              Conoce los proyectos que hemos transformado y los resultados reales que hemos logrado juntos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="gradient" size="lg">
                Ver Proyectos
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <PlayCircle className="w-5 h-5" />
                Ver Video
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
                Proyectos transformados
              </p>
            </div>
          </div>

          {/* Right Content: SVG Animation - Portfolio */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl -z-10"></div>
            
            {/* SVG Animated Illustration - Portfolio Grid */}
            <svg className="w-full max-w-[450px] h-auto" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Floating shapes with animation */}
              <circle cx="200" cy="200" r="120" fill="url(#portfolioGradient1)" opacity="0.2" className="animate-pulse">
                <animate attributeName="r" values="120;130;120" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="80" fill="url(#portfolioGradient2)" opacity="0.3">
                <animate attributeName="r" values="80;90;80" dur="2s" repeatCount="indefinite" />
              </circle>
              
              {/* Project Cards Grid */}
              <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                {/* Card 1 */}
                <rect x="60" y="60" width="120" height="90" rx="12" fill="white" stroke="#d948ef" strokeWidth="2" className="drop-shadow-xl"/>
                <rect x="60" y="60" width="120" height="30" rx="12" fill="#d948ef"/>
                <rect x="75" y="105" width="60" height="8" rx="4" fill="#e9d5ff"/>
                <rect x="75" y="120" width="40" height="6" rx="3" fill="#e9d5ff" opacity="0.6"/>
                
                {/* Card 2 */}
                <rect x="200" y="60" width="120" height="90" rx="12" fill="white" stroke="#a855f7" strokeWidth="2" className="drop-shadow-xl"/>
                <rect x="200" y="60" width="120" height="30" rx="12" fill="#a855f7"/>
                <rect x="215" y="105" width="60" height="8" rx="4" fill="#f3e8ff"/>
                <rect x="215" y="120" width="40" height="6" rx="3" fill="#f3e8ff" opacity="0.6"/>
                
                {/* Card 3 */}
                <rect x="60" y="180" width="120" height="90" rx="12" fill="white" stroke="#f97316" strokeWidth="2" className="drop-shadow-xl"/>
                <rect x="60" y="180" width="120" height="30" rx="12" fill="#f97316"/>
                <rect x="75" y="225" width="60" height="8" rx="4" fill="#ffedd5"/>
                <rect x="75" y="240" width="40" height="6" rx="3" fill="#ffedd5" opacity="0.6"/>
                
                {/* Card 4 - Featured */}
                <rect x="200" y="180" width="120" height="90" rx="12" fill="white" stroke="#d948ef" strokeWidth="3" className="drop-shadow-xl"/>
                <rect x="200" y="180" width="120" height="30" rx="12" fill="#d948ef"/>
                <circle cx="260" cy="225" r="15" fill="#d948ef" opacity="0.3"/>
                <Star x="252" y="217" size={16} className="text-white" fill="white" />
                <rect x="215" y="225" width="60" height="8" rx="4" fill="#e9d5ff"/>
                <rect x="215" y="240" width="40" height="6" rx="3" fill="#e9d5ff" opacity="0.6"/>
              </g>
              
              {/* Floating Icons */}
              <g className="animate-pulse" style={{ animationDuration: '2s' }}>
                <circle cx="40" cy="300" r="25" fill="white" stroke="#d948ef" strokeWidth="2" className="drop-shadow-lg"/>
                <Award x="28" y="288" size={24} className="text-[#d948ef]" />
              </g>
              
              <g className="animate-pulse" style={{ animationDuration: '2.5s' }}>
                <circle cx="360" cy="80" r="25" fill="white" stroke="#a855f7" strokeWidth="2" className="drop-shadow-lg"/>
                <TrendingUp x="348" y="68" size={24} className="text-[#a855f7]" />
              </g>
              
              <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                <circle cx="350" cy="350" r="25" fill="white" stroke="#f97316" strokeWidth="2" className="drop-shadow-lg"/>
                <Zap x="338" y="338" size={24} className="text-[#f97316]" />
              </g>
              
              <g className="animate-pulse" style={{ animationDuration: '2.2s' }}>
                <circle cx="50" cy="50" r="25" fill="white" stroke="#d948ef" strokeWidth="2" className="drop-shadow-lg"/>
                <Target x="38" y="38" size={24} className="text-[#d948ef]" />
              </g>
              
              {/* Sparkle effects */}
              <g className="animate-spin" style={{ animationDuration: '8s' }}>
                <path d="M30 180 L35 195 L50 200 L35 205 L30 220 L25 205 L10 200 L25 195 Z" fill="#d948ef" opacity="0.6"/>
              </g>
              <g className="animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                <path d="M380 250 L385 265 L400 270 L385 275 L380 290 L375 275 L360 270 L375 265 Z" fill="#a855f7" opacity="0.6"/>
              </g>
              
              {/* Gradients */}
              <defs>
                <linearGradient id="portfolioGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d948ef" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="portfolioGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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

      {/* Projects Section */}
      <section className="flex-1 pt-10 pb-20 px-6 md:px-10 lg:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group flex flex-col gap-6 ${
                  index % 2 !== 0 ? "md:mt-16" : ""
                }`}
              >
                <div className={`relative overflow-hidden rounded-2xl bg-white p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-primary/5 ${project.upcoming ? 'opacity-80' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div
                    className={`relative z-10 w-full ${project.aspect} rounded-xl overflow-hidden border-[6px] border-slate-900 shadow-2xl bg-slate-200`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400">
                        <div className="text-center">
                          <Sparkles className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">{project.title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-primary to-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                      {project.category}
                    </span>
                    <span className="text-slate-400 text-xs font-semibold">
                      {project.year}
                    </span>
                    {project.upcoming && (
                      <span className="bg-yellow-500/20 text-yellow-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                        Próximamente
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a href="/contacto" className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all">
              ¿Listo para ser el siguiente caso de éxito?
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
