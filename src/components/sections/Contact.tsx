import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/Button";

const services = [
  "Creación de Negocios desde Cero",
  "Revitalización de Marcas",
  "Branding y Rebranding",
  "Marketing Digital",
  "Otro",
];

export function Contact() {
  return (
    <section id="contacto" className="relative w-full py-24 px-6 md:px-10 lg:px-20 bg-slate-50 dark:bg-slate-900/20">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            Contacto
          </span>
          <h2 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Hablemos de tu <span className="gradient-text">próximo proyecto</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Estamos listos para ayudarte a transformar tu negocio. Contáctanos hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Pongámonos en contacto
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Ya sea que estés comenzando desde cero o busques revitalizar tu marca, 
                estamos aquí para hacer tu visión realidad. Escríbenos y te responderemos 
                en menos de 24 horas.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col gap-6">
              <a href="mailto:contacto@vision360.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold">Email</p>
                  <p className="text-slate-500 text-sm">contacto@vision360.com</p>
                </div>
              </a>

              <a href="tel:+58" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold">Teléfono</p>
                  <p className="text-slate-500 text-sm">+58</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold">Ubicación</p>
                  <p className="text-slate-500 text-sm">Venezuela</p>
                </div>
              </div>
            </div>

            {/* Social Networks */}
            <div>
              <p className="text-slate-900 dark:text-white font-semibold mb-4">
                Síguenos en redes sociales
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-primary/5">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 dark:text-white text-sm font-semibold">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 dark:text-white text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 dark:text-white text-sm font-semibold">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+58 412 123 4567"
                    className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 dark:text-white text-sm font-semibold">
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-white text-sm font-semibold">
                  Servicio de interés
                </label>
                <select className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors">
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-white text-sm font-semibold">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button variant="gradient" size="lg" className="w-full group">
                Enviar Mensaje
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
