import { BarChart3, Gem, PlayCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

const services = [
  {
    number: "01",
    icon: BarChart3,
    title: "GROWTH MARKETING",
    description: "Estrategias de crecimiento digital enfocadas en aumentar tus ventas y clientes. Optimizamos cada canal para maximizar tu ROI.",
    videoId: "uXlWYZ022zU",
  },
  {
    number: "02",
    icon: Gem,
    title: "BRANDING & IDENTITY",
    description: "Creamos y fortalecemos la identidad de tu marca para diferenciarte de la competencia y conectar emocionalmente con tu audiencia.",
    videoId: "uXlWYZ022zU",
  },
  {
    number: "03",
    icon: PlayCircle,
    title: "CONTENT MARKETING",
    description: "Producimos contenido de valor que posiciona tu marca como autoridad en tu industria y genera engagement orgánico.",
    videoId: "uXlWYZ022zU",
  },
];

export function ServicesModern() {
  return (
    <section className="relative w-full py-24 px-6 md:px-10 lg:px-20 bg-white bg-background-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
              Servicios
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-white mb-6">
              Soluciones para hacer crecer <span className="gradient-text">tu negocio</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Ofrecemos estrategias integrales de marketing digital adaptadas a las necesidades de tu empresa. Nuestro enfoque 360° garantiza resultados medibles y sostenibles.
            </p>
            <div>
              <Button variant="gradient" size="lg">
                Ver todos los servicios
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Side - Cards with Videos */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 min-h-[320px] flex flex-col justify-end overflow-hidden"
              >
                {/* Background Video */}
                <div className="absolute inset-0">
                  <iframe
                    src={`https://www.youtube.com/embed/${service.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${service.videoId}`}
                    className="w-full h-full object-cover"
                    allow="autoplay; encrypted-media; loop"
                    allowFullScreen
                    title={service.title}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative z-10 pointer-events-none">
                  {/* Number */}
                  <span className="text-white/60 text-4xl font-extrabold">{service.number}</span>

                  {/* Title */}
                  <h3 className="text-white text-xl font-bold mt-2 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-xs leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* Button */}
                  <button className="inline-flex items-center gap-1 text-white font-semibold text-sm group/btn pointer-events-auto">
                    <span>Ver más</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
