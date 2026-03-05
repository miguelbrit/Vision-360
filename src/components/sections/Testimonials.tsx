import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    position: "Directora - Pallá Restaurante",
    company: "Pallá",
    quote: "VISIÓN 360 transformó completamente nuestro negocio. Pasamos de 6 a 90 empleados en poco tiempo. Su enfoque integral hizo toda la diferencia.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    position: "Gerente General - Cero 30",
    company: "Cero 30",
    quote: "El equipo de VISIÓN 360 entendió perfectamente nuestra visión y la tradujo en una estrategia de branding que incrementó nuestras ventas en un 50%.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    position: "Director - Hotel Naciones Unidas",
    company: "Hotel Naciones Unidas",
    quote: "Gracias a su estrategia de rebranding, nuestra ocupación hotelera aumentó un 35% en el primer trimestre. Recomendamos totalmente sus servicios.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    position: "CEO - Exclusive Restaurant",
    company: "Exclusive Restaurant",
    quote: "Desde que trabajamos con VISIÓN 360, nuestro restaurante se posicionó como uno de los favoritos de la zona. El marketing de alto impacto funcionó perfectamente.",
    rating: 5,
  },
  {
    name: "Luis Rodríguez",
    position: "Propietario - Exclusive Club",
    company: "Exclusive Club",
    quote: "Crearon nuestra marca desde cero y ahora somos un referente en entretenimiento nocturno. Su estrategia digital atrajo exactamente la clientela que buscábamos.",
    rating: 5,
  },
  {
    name: "Patricia López",
    position: "Fundadora - Belleza Natural",
    company: "Belleza Natural",
    quote: "Nuestro negocio pasó de ser un local pequeño a tener presencia nacional. El equipo de VISIÓN 360 entendió nuestra visión y la hizo crecer exponencialmente.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = testimonials.length;
  const visibleSlides = 3;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isTransitioning]);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(transitionTimer);
  }, [currentIndex]);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleSlides; i++) {
      const index = (currentIndex + i) % totalSlides;
      result.push({ ...testimonials[index], index });
    }
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="relative w-full py-24 px-6 md:px-10 lg:px-20 bg-white dark:bg-background-dark overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 text-center">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            Testimonios
          </span>
          <h2 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor orgullo.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.index}
                className={`group relative bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote className="w-10 h-10" />
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-500 text-xs">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-slate-300 dark:bg-slate-600 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
