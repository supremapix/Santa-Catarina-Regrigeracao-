import React from 'react';
import { Wrench, CheckCircle2, ShieldCheck, Flame, Cpu, Gauge, Droplets, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const RepairsSection: React.FC = () => {
  const repairsList = [
    {
      title: "Recarga de Gás Refrigerante",
      description: "Solda com Phoscopper/Prata, teste de estanqueidade com nitrogênio e carga de fluido ecologicamente correto (R134a, R600a, R404A).",
      icon: Flame,
      tag: "Vácuo & Carga Técnica"
    },
    {
      title: "Troca de Compressores (Motores)",
      description: "Substituição de compressores Inverter e convencionais de alta contrapressão para geladeiras, freezers e câmaras frias.",
      icon: Gauge,
      tag: "Inverter & On/Off"
    },
    {
      title: "Troca de Placas Eletrônicas",
      description: "Conserto, reprogramação de EEPROM e troca de módulos de potência e interface microprocessadas de todas as marcas.",
      icon: Cpu,
      tag: "Placas Inversoras"
    },
    {
      title: "Troca de Sensores & Degelo",
      description: "Substituição de sensores NTC de temperatura, sensores de degelo, resistências blindadas, bimetal e fusíveis térmicos.",
      icon: RefreshCw,
      tag: "Sistema Frost Free"
    },
    {
      title: "Limpeza de Dreno & Higienização",
      description: "Desobstrução do canal da calha de escoamento de água, eliminando poças d'água dentro e atrás da geladeira e odores desagradáveis.",
      icon: Droplets,
      tag: "Higienização Interna"
    },
    {
      title: "Troca de Borrachas (Gaxetas)",
      description: "Substituição de borrachas magnéticas ressecadas ou rasgadas que causam perda de ar frio e alto consumo de energia elétrica.",
      icon: Wrench,
      tag: "Vedação Hermética"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24 text-slate-900 border-b border-slate-200" id="reparos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 font-bold text-xs uppercase tracking-wider">
              Diagnóstico de Precisão
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Reparos e Manutenção Técnica Executados em Domicílio
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Trabalhamos com dedicação e qualidade, oferecendo assistência técnica completa em geladeiras, freezers, frigobar, cervejeiras, adegas e lava e seca multimarcas.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Garantia de Fábrica e Peças Originais</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Utilizamos exclusivamente componentes novos e certificados com nota e termo formal de garantia de 90 dias por escrito.
              </p>
            </div>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Chamar Técnico no WhatsApp</span>
            </a>
          </div>

          {/* Right Column Repairs Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repairsList.map((repair, idx) => {
              const Icon = repair.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-300 shadow-sm transition-colors space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-800 border border-cyan-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 border border-slate-300">
                      {repair.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base pt-1">{repair.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{repair.description}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
