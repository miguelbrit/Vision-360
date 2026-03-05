import { Sparkles } from "lucide-react";

const projects = [
  {
    title: "Pallá Restaurante & Pastelería",
    category: "Gastronomía",
    year: "2024",
    description: "Transformamos un pequeño negocio con 6 empleados en una cadena con 90 trabajadores.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBN1nuJo0LQF9ix8O2JxnnIL_pQBKSn1lLJAj-v4rf2E6LAJoejH7SO880L62zBZmajw8fUhHcnwOQm_zE8NgoRhnKYHuV62Mllyb5hhJmhCtyX3Tbcl4PenaKTCdGGzfUdqURaRc4h7JmQH71w__wUbYDQVRjEwGqR5xiSYAYxLrC4sOFo_BxC1E4EY58FRB644jz1X-UGAO-QuYhFB8KqEMq5zAX8LzvwLRvqyyA_HsSfQiPTEsZ2ciSOGTSz1sWe4VaPV3qICJyt",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Cero 30 Marca Automotriz",
    category: "Automóvil",
    year: "2023",
    description: "Renovamos la imagen de una empresa de accesorios vehiculares, logrando 50% más ventas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMNcj9flTWERTqn78OUtKAOzafjtEMOvXIaFpY2CG44UJ24d3rac0D5EvFBBHhPd-qBYo659ARTO8zgGoA5XGUvz9jzNEYrkwXPBxuSSm63tfgCzXQ-84goUD_EQez3LIBOxhmCnoUNIYpfYLIAgYNeTHpIAEWalDXFw2WiZHWevqIuvxVTIEGv-eI5X-Lx8H17bCp8qDwJssZDI8Tz38AbKdhHKKWhAY0K1qYeswOa5C576VMn2fgvSqhbXAbfiG6mFEDyqNONxGX",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Hotel Naciones Unidas",
    category: "Hotelería",
    year: "2023",
    description: "Estrategias de rebranding que incrementaron la ocupación un 35% en el primer trimestre.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoG8AwqWYbTXT6iKB5PLXa4Lzhmo5ZUDemsTH8NJf4WbzJCjBgoYGIWBSp9uQEuavISFmb3uZJuuq3M2mw-SrA2HC2m7VN6anICK2ZUMM5GgHTzgFw1_3TnEDf6Pn9IkLOsBFM1vsB6EYTJw9QN3vVCIvdv601HErPGU08XXK3eCDEJ091plxmRXpNM4MklRsEHzhAWgAlPCGRXFcaeQp3T8wFHGvPTh7qIZx-MX-eNhO-1v-eHItH5arG7P7VxqeLZFET1NGU6Hsp",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Exclusive Restaurant",
    category: "Gastronomía",
    year: "2024",
    description: "Lanzamos un restaurante de sushi y carne que se posicionó como favorito de la zona.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeIapg3O9hL5I_kavyFJLGfX4Tiv6vxIos49f0s3cvyUg8Y5uJ2bFCJColX8q2htKZj51xTrpmAm4BiyDC44O9xiLjP2dCjO6AUThgNYEefwqL9AYNb-m5dR2NQg25VrUsOpuw2yGUbv17t-b_idGNqlgDSeF1s1vl4CkAiQQnTmetqOH4WFDQE7ntbwwDE1GKdnWkOtLU2t8P032CV6bkV_NjMrj9ptudwVFwuHY4-8byBhbiLOVSchWmV8r3aer_TrCeXrAejWfr",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Exclusive Club",
    category: "Entretenimiento",
    year: "2024",
    description: "Creamos desde cero una discoteca que ahora es referente en entretenimiento nocturno.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeIapg3O9hL5I_kavyFJLGfX4Tiv6vxIos49f0s3cvyUg8Y5uJ2bFCJColX8q2htKZj51xTrpmAm4BiyDC44O9xiLjP2dCjO6AUThgNYEefwqL9AYNb-m5dR2NQg25VrUsOpuw2yGUbv17t-b_idGNqlgDSeF1s1vl4CkAiQQnTmetqOH4WFDQE7ntbwwDE1GKdnWkOtLU2t8P032CV6bkV_NjMrj9ptudwVFwuHY4-8byBhbiLOVSchWmV8r3aer_TrCeXrAejWfr",
    aspect: "aspect-[4/3]",
  },
];

export function Portfolio() {
  return (
    <section id="casos" className="relative w-full py-24 px-6 md:px-20 lg:px-40 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Casos de Éxito
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-2xl leading-[1.1]">
            Resultados que <span className="text-primary">hablan por sí mismos</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl font-medium">
            Transformamos negocios con estrategias personalizadas que generan resultados medibles y crecimiento sostenible.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group flex flex-col gap-6 ${
                index % 2 !== 0 ? "md:mt-16" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div
                  className={`relative z-10 w-full ${project.aspect} rounded-xl overflow-hidden border-[6px] border-slate-900 shadow-2xl`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary to-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {project.category}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-500 font-medium">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
