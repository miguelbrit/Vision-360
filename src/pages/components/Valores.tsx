import { useState, useEffect, useCallback } from "react";
import { Target, TrendingUp, Lightbulb, Heart, Shield, Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const esencia = [
  {
    icon: Target,
    title: "Personalización",
    description: "Cada cliente es único. Diseñamos estrategias a medida, nunca plantillas genéricas.",
    color: "from-primary to-accent",
    borderColor: "border-l-primary",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    icon: TrendingUp,
    title: "Resultados",
    description: "+50% en ventas, +35% en ocupación hotelera. Hablamos el idioma de los números.",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-l-emerald-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "IA, análisis de datos y tendencias. Siempre un paso adelante.",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-l-pink-500",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Tu éxito es nuestro éxito. Te acompañamos en cada paso.",
    color: "from-purple-500 to-violet-500",
    borderColor: "border-l-purple-500",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Transparencia total y comunicación abierta en cada etapa.",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-l-cyan-500",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajamos juntos para lograr más.",
    color: "from-orange-500 to-amber-500",
    borderColor: "border-l-orange-500",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
];

export function Valores() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(esencia.length / cardsPerView);

  const getCardsForSlide = (slideIndex: number) => {
    const start = slideIndex * cardsPerView;
    return esencia.slice(start, start + cardsPerView);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerView]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section 
      className="relative w-full py-16 md:py-20 px-4 md:px-10 bg-[#F8F9FA] overflow-hidden"
      aria-label="Nuestra Esencia - Carrusel de valores"
      role="region"
      aria-roledescription="carrusel"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            Nuestra Esencia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A2E] mb-4">
            Lo que nos <span className="gradient-text">define</span>
          </h2>
          <p className="text-[#636E72] text-lg leading-relaxed">
            No somos una fábrica de campañas. Somos arquitectos de negocios.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Container */}
          <div className="overflow-hidden mx-8 md:mx-12">
            <div 
              className="flex transition-transform duration-600 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${totalSlides * 100}%`
              }}
              role="group"
              aria-label={`Slide ${currentIndex + 1} de ${totalSlides}`}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const cardsForSlide = getCardsForSlide(slideIndex);
                return (
                  <div 
                    key={slideIndex}
                    className="flex"
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    {cardsForSlide.map((item, cardIndex) => {
                      const originalIndex = slideIndex * cardsPerView + cardIndex;
                      return (
                        <div 
                          key={originalIndex}
                          className="px-3"
                          style={{ width: `${100 / cardsPerView}%` }}
                        >
                          <div className="group relative rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 h-[300px] flex flex-col justify-end">
                            {/* Background Image */}
                            <div 
                              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                              style={{ backgroundImage: `url('${item.image}')` }}
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 p-6 md:p-7">
                              {/* Icon Circle */}
                              <div className={`mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFD700] group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-5 h-5 text-[#1A1A2E]" />
                              </div>
                              
                              <h3 className="text-xl font-bold mb-2 text-white">
                                {item.title}
                              </h3>
                              
                              <p className="text-white/80 leading-relaxed text-sm line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:bg-[#1A1A2E] hover:text-white transition-all duration-300 flex items-center justify-center z-10 group"
            aria-label="Ver slide anterior"
          >
            <ChevronLeft className="w-5 h-5 text-[#1A1A2E] group-hover:text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:bg-[#1A1A2E] hover:text-white transition-all duration-300 flex items-center justify-center z-10 group"
            aria-label="Ver siguiente slide"
          >
            <ChevronRight className="w-5 h-5 text-[#1A1A2E] group-hover:text-white" />
          </button>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Navegación del carrusel">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-[#E94560] w-8" 
                  : "bg-[#ccc] hover:bg-[#999]"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
              aria-selected={currentIndex === index}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
