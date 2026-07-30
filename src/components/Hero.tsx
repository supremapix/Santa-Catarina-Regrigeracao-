import React from 'react';
import { ShieldCheck, Clock, MapPin, Calendar, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-12 lg:py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Base em Navegantes & Penha • Atendimento em Domicílio (Raio 200 km)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Assistência Técnica <br />
              <span className="text-cyan-400">Especializada em Refrigeração</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Atendimento rápido no mesmo dia para <strong className="text-white font-semibold">Geladeiras, Side by Side, Freezers, Frigobares, Câmaras Frias, Balcões Refrigerados e Lava e Seca</strong>. Técnicos qualificados com peças originais e garantia formal de 90 dias por escrito.
            </p>

            {/* Quick Benefits Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Orçamento Sem Compromisso
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Plantão 24h & Emergencial
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Peças Originais de Fábrica
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-950/40 transition-all hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Chamar no WhatsApp Agora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenBookingModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 font-bold text-sm sm:text-base transition-all hover:border-slate-700"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Agendar Horário em Domicílio</span>
              </button>
            </div>

            {/* Trust Footer line */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Garantia 90 dias por escrito
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                Atendimento no mesmo dia
              </span>
            </div>

          </div>

          {/* Right Column: Hero Equipment Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl max-w-md w-full">
              {/* Main Image */}
              <img
                src={COMPANY_INFO.assets.heroEquipments}
                alt="Equipamentos de Refrigeração - Santa Catarina Refrigeração"
                className="w-full h-auto object-contain rounded-2xl"
              />

              {/* Warranty Badge Floating Seal */}
              <div className="absolute -top-5 -right-5 w-20 h-20 sm:w-24 sm:h-24 drop-shadow-md">
                <img
                  src={COMPANY_INFO.assets.warrantyBadge}
                  alt="Selo de Garantia 90 Dias"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating Bottom Info Card */}
              <div className="mt-4 bg-slate-950 border border-slate-800 p-3.5 rounded-2xl flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-900 text-cyan-400 rounded-xl border border-slate-800">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Técnicos Certificados</p>
                    <p className="text-slate-400 text-xs">Visita domiciliar em Navegantes, Penha e região</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-emerald-400 font-black text-base">4.9 ★</span>
                  <p className="text-[10px] text-slate-400">180+ avaliações</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
