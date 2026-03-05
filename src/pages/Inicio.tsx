import { Hero } from "../components/sections/Hero";
import { Philosophy } from "../components/sections/Philosophy";
import { ServicesModern } from "../components/sections/ServicesModern";
import { Portfolio } from "../components/sections/Portfolio";
import { Testimonials } from "../components/sections/Testimonials";
import { Cta } from "../components/sections/Cta";

export default function Inicio() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      <Hero />
      <Philosophy />
      <ServicesModern />
      <Portfolio />
      <Testimonials />
      <Cta />
    </div>
  );
}
