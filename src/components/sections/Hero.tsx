import { PlayCircle, Bot, MoreHorizontal, Paperclip, Send } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <main id="inicio" className="flex-1 flex items-center justify-center px-6 md:px-10 lg:px-20 py-12 lg:py-20 z-10 relative">
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

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.05em] text-slate-900 text-white neon-glow">
            Le damos vida <br />
            <span className="gradient-text">a nuevas ideas</span> y <br />
            renovamos lo perdido
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 text-slate-400 max-w-[600px] leading-relaxed">
            Transformamos ideas en negocios sólidos y revitalizamos marcas que buscan reencontrarse con su éxito.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="gradient" size="lg">
              Contáctanos
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <PlayCircle className="w-5 h-5" />
              Ver Casos de Éxito
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
                  className="w-12 h-12 rounded-full border-4 border-white border-background-dark bg-slate-200 bg-cover bg-center"
                  style={{ backgroundImage: `url('${url}')` }}
                />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white border-background-dark bg-primary flex items-center justify-center text-white text-xs font-bold">
                +2k
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500">
              Casos de éxito comprobados
            </p>
          </div>
        </div>

        {/* Right Content: Floating AI Chat Interface */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="w-full max-w-[420px] glass-panel rounded-2xl shadow-2xl p-6 flex flex-col gap-6 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-slate-200/50 border-slate-700/50 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 text-white">Asistente AI</h3>
                  <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>{" "}
                    EN LÍNEA
                  </p>
                </div>
              </div>
              <MoreHorizontal className="text-slate-400 w-5 h-5" />
            </div>

            {/* Chat Body */}
            <div className="flex flex-col gap-4 py-2">
              <div className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0ryg3KW6OFBMKLqz1mj_lVz32HpxEDvc5qgEXKLpTvLtP_ymchnuDGaEY0iNjXkencM_8KXQOYZxw7Oc__jxZLZ2Rc3sqdwrD42p1Bq6XrxuuPSqd07yLz0Xkju7lkA-lW8BMqIAHl75U1FBB1C3NT92_CqAEW7_EPh9rUvefYg92FKEYSkl42VHBkSHPQbV_5vyDVotWj9s4MzIZYrl_IoZfYEsDE61csI34SWNmkg-GoORlBzg0ZyiIgX3igQ65XXRhuROuwdKy')" }}
                />
                <div className="bg-slate-100 bg-slate-800 rounded-2xl p-4 text-sm text-slate-800 text-slate-200 leading-relaxed rounded-tl-none">
                  ¡Hola! He analizado tus métricas actuales. Podemos incrementar
                  tu ROI en un 45% optimizando la segmentación del público
                  objetivo. ¿Te gustaría ver el reporte?
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className="bg-primary text-white rounded-2xl p-4 text-sm font-medium leading-relaxed rounded-tr-none max-w-[80%]">
                  Sí, muéstrame el reporte de optimización para la campaña de
                  invierno.
                </div>
              </div>

              <div className="flex gap-3 mt-2">
                <div
                  className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDk8e1cOEJWqXQOl0r8iqiGMJe3j6IQKasLZJWuAevJrBA0WyosEMaoXg8nDcNVF0ZTpUYznJ2-FQv6odYB1sA9le4Qk09r7Csu7BE-dq71Y6tb9Aet7ZdA6wfpMN6fOXPIFl4PW08CfLnimrhaaL3mVYKw4ecw2J1r-Ly8x2OKyU92aAkgBPkP-OD_29h0OUxwV3EcIK8iSOWdTyd6vdjsFg29-eTnhv6KmZ2GG3NX-CGqZUhVMwwjmENq-KhbF8iu6rsAr2sP9bUP')" }}
                />
                <div className="flex flex-col gap-3 w-full">
                  <div className="bg-slate-100 bg-slate-800 rounded-2xl p-4 text-sm text-slate-800 text-slate-200 rounded-tl-none">
                    Excelente elección. Aquí tienes las opciones estratégicas:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Análisis de Mercado", "Estrategia SEO", "Ads High-Ticket"].map((chip) => (
                      <div
                        key={chip}
                        className="px-4 py-2 bg-white bg-slate-900 border border-primary/30 text-primary text-xs font-bold rounded-full hover:bg-primary/5 cursor-pointer transition-colors shadow-sm"
                      >
                        {chip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input Mockup */}
            <div className="mt-4 flex items-center gap-3 bg-slate-50 bg-slate-800/50 border border-slate-200 border-slate-700 rounded-full px-4 py-3">
              <Paperclip className="text-slate-400 w-4 h-4" />
              <span className="text-sm text-slate-400 flex-1">
                Escribe tu mensaje...
              </span>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-primary/90 transition-colors">
                <Send className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Abstract 3D Shape Mocks */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-xl rotate-12 -z-10 shadow-xl opacity-80"></div>
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-tr from-secondary to-primary rounded-full -z-10 shadow-xl opacity-60 blur-sm"></div>
        </div>
      </div>
    </main>
  );
}
