import React from 'react';
import { Wrench, Flame, Cpu, Gauge, Droplets, RefreshCw } from 'lucide-react';
import { SectionHeader, TechCard } from './TechUI';

export const RepairsSection: React.FC = () => {
  const repairsList = [
    {
      code: "01",
      title: "Recarga de Gás Refrigerante",
      description: "Solda com Phoscopper/Prata, teste de estanqueidade com nitrogênio e carga de fluido ecologicamente correto (R-134a, R-600a, R-404A).",
      icon: Flame,
      tag: "VÁCUO & CARGA"
    },
    {
      code: "02",
      title: "Troca de Compressores",
      description: "Substituição de compressores Inverter e convencionais de alta contrapressão para refrigeradores, freezers e balcões.",
      icon: Gauge,
      tag: "INVERTER & ON/OFF"
    },
    {
      code: "03",
      title: "Placas Eletrônicas & Inversoras",
      description: "Diagnóstico, reparo e substituição de módulos de potência e interfaces microprocessadas de todas as marcas.",
      icon: Cpu,
      tag: "ELETRÔNICA"
    },
    {
      code: "04",
      title: "Sensores & Degelo Frost Free",
      description: "Substituição de sensores NTC de temperatura, sensores de degelo, resistências blindadas, bimetal e fusíveis térmicos.",
      icon: RefreshCw,
      tag: "SISTEMA DEGELO"
    },
    {
      code: "05",
      title: "Desobstrução de Dreno",
      description: "Eliminação de calhas e canais de drenagem entupidos, prevenindo acúmulo de água no fundo do refrigerador e odores.",
      icon: Droplets,
      tag: "DRENO & CALHA"
    },
    {
      code: "06",
      title: "Borrachas e Vedação Hermética",
      description: "Substituição de gaxetas magnéticas ressecadas ou rasgadas que causam fuga de ar frio e condensação excessiva.",
      icon: Wrench,
      tag: "VEDAÇÃO"
    }
  ];

  return (
    <section className="bg-[#F4F1EA] py-14 sm:py-20 text-[#12324A] border-b-2 border-[#12324A] bg-paper-grid text-left" id="reparos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader 
          step="03 / REPAROS"
          title="Procedimentos técnicos e componentes substituídos"
          description="Todos os reparos são executados no local, com ferramental de bancada móvel e garantia documentada."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repairsList.map((rep) => {
            const Icon = rep.icon;
            return (
              <TechCard key={rep.code} className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#12324A]/15 pb-3">
                  <span className="font-mono text-xs font-bold text-[#D9682B] tracking-wider">{rep.code} — {rep.tag}</span>
                  <Icon className="w-5 h-5 text-[#12324A]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#12324A]">{rep.title}</h3>
                <p className="text-sm font-sans text-[#12324A]/80 leading-relaxed">{rep.description}</p>
              </TechCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
