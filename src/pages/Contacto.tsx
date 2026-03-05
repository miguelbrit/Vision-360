import { Sparkles, ArrowRight, PlayCircle, Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Contact } from "../components/sections/Contact";

export default function Contacto() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Hero Section - Contacto */}
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
                Contacto
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900 neon-glow">
              Hablemos de tu <br />
              <span className="gradient-text">próximo proyecto</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 max-w-[600px] leading-relaxed">
              Estamos listos para ayudarte a transformar tu negocio. 
              Contáctanos y te responderemos en menos de 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="gradient" size="lg">
                Enviar Mensaje
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </Button>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Email</p>
                  <p className="text-sm font-semibold text-slate-900">contacto@vision360.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Horario</p>
                  <p className="text-sm font-semibold text-slate-900">Lun - Vie: 9am - 6pm</p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-slate-600">Primera consulta sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-slate-600">Respuesta en 24h</span>
              </div>
            </div>
          </div>

          {/* Right Content: SVG Animation - Contact */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl -z-10"></div>
            
            {/* SVG Animated Illustration - Contact Form */}
            <svg className="w-full max-w-[450px] h-auto" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Floating shapes with animation */}
              <circle cx="200" cy="200" r="120" fill="url(#contactGradient1)" opacity="0.2" className="animate-pulse">
                <animate attributeName="r" values="120;130;120" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="80" fill="url(#contactGradient2)" opacity="0.3">
                <animate attributeName="r" values="80;90;80" dur="2s" repeatCount="indefinite" />
              </circle>
              
              {/* Contact Form Card */}
              <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                <rect x="60" y="80" width="280" height="260" rx="20" fill="white" stroke="#d948ef" strokeWidth="2" className="drop-shadow-xl"/>
                <rect x="60" y="80" width="280" height="50" rx="20" fill="url(#contactGradient1)"/>
                <text x="200" y="112" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Escríbenos</text>
                
                {/* Form Fields */}
                <rect x="90" y="150" width="220" height="40" rx="8" fill="#f1f5f9" stroke="#e2e8f0"/>
                <text x="105" y="173" fill="#94a3b8" fontSize="12">Tu nombre</text>
                
                <rect x="90" y="205" width="220" height="40" rx="8" fill="#f1f5f9" stroke="#e2e8f0"/>
                <text x="105" y="228" fill="#94a3b8" fontSize="12">Tu email</text>
                
                <rect x="90" y="260" width="220" height="60" rx="8" fill="#f1f5f9" stroke="#e2e8f0"/>
                <text x="105" y="283" fill="#94a3b8" fontSize="12">Tu mensaje...</text>
                
                {/* Submit Button */}
                <rect x="90" y="300" width="220" height="30" rx="15" fill="url(#contactGradient1)"/>
                <text x="200" y="320" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ENVIAR MENSAJE</text>
              </g>
              
              {/* Floating Icons */}
              <g className="animate-pulse" style={{ animationDuration: '2s' }}>
                <circle cx="50" cy="80" r="25" fill="white" stroke="#f97316" strokeWidth="2" className="drop-shadow-lg"/>
                <Mail x="38" y="68" size={24} className="text-[#f97316]" />
              </g>
              
              <g className="animate-pulse" style={{ animationDuration: '2.5s' }}>
                <circle cx="350" cy="60" r="25" fill="white" stroke="#d948ef" strokeWidth="2" className="drop-shadow-lg"/>
                <Phone x="338" y="48" size={24} className="text-[#d948ef]" />
              </g>
              
              <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                <circle cx="360" cy="360" r="25" fill="white" stroke="#a855f7" strokeWidth="2" className="drop-shadow-lg"/>
                <MapPin x="348" y="348" size={24} className="text-[#a855f7]" />
              </g>
              
              <g className="animate-pulse" style={{ animationDuration: '2.2s' }}>
                <circle cx="40" cy="360" r="25" fill="white" stroke="#d948ef" strokeWidth="2" className="drop-shadow-lg"/>
                <Send x="28" y="348" size={24} className="text-[#d948ef]" />
              </g>
              
              {/* Speech Bubbles */}
              <g className="animate-pulse" style={{ animationDuration: '2.5s' }}>
                <rect x="300" y="140" width="70" height="40" rx="10" fill="white" stroke="#d948ef" strokeWidth="2"/>
                <text x="335" y="165" textAnchor="middle" fill="#d948ef" fontSize="20" fontWeight="bold">¡Hi!</text>
              </g>
              
              <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                <rect x="30" y="180" width="60" height="35" rx="10" fill="#d948ef"/>
                <text x="60" y="202" textAnchor="middle" fill="white" fontSize="16">:) </text>
              </g>
              
              {/* Sparkle effects */}
              <g className="animate-spin" style={{ animationDuration: '8s' }}>
                <path d="M380 200 L385 215 L400 220 L385 225 L380 240 L375 225 L360 220 L375 215 Z" fill="#d948ef" opacity="0.6"/>
              </g>
              <g className="animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                <path d="M20 280 L25 295 L40 300 L25 305 L20 320 L15 305 L0 300 L15 295 Z" fill="#a855f7" opacity="0.6"/>
              </g>
              
              {/* Gradients */}
              <defs>
                <linearGradient id="contactGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d948ef" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="contactGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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

      {/* Contact Form Section */}
      <section className="flex-1 pt-10 pb-20">
        <Contact />
      </section>
    </div>
  );
}
