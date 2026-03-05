import { NosotrosHero } from "./components/NosotrosHero";
import { HistoriaFundadora } from "./components/HistoriaFundadora";
import { Valores } from "./components/Valores";
import { Cierre } from "./components/Cierre";

export default function Nosotros() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      <NosotrosHero />
      <HistoriaFundadora />
      <Valores />
      <Cierre />
    </div>
  );
}
