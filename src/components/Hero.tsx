import React from 'react';
import { ShieldCheck, Clock, MapPin, Calendar, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-12 lg:py-20 border-b border-slate-800">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Animated Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Atendimento em Domicílio em Penha & Região (Raio 200 km)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Assistência Técnica <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Especializada em Refrigeração
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Conserto no mesmo dia de <strong className="text-white font-semibold">Geladeiras, Side by Side, Freezers, Frigobares, Câmaras Frias, Cervejeiras e Lava e Seca</strong>. Técnicos treinados com peças originais e garantia de 90 dias.
            </p>

            {/* Quick Benefits Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Orçamento Sem Compromisso
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Plantão 24 Horas
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Todas as Marcas e Modelos
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-95 group"
              >
                <span>Solicitar Orçamento Grátis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenBookingModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40 font-bold text-base transition-all shadow-md"
              >
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>Agendar Horário Online</span>
              </button>
            </div>

            {/* Trust Footer line */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Garantia escrita de 90 dias
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                Atendimento Rápido
              </span>
            </div>

          </div>

          {/* Right Column: Hero Equipment Image & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glow Circle Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl transform rotate-3 scale-95" />

            <div className="relative bg-slate-800/80 border border-slate-700/80 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-sm max-w-md w-full">
              {/* Main Image */}
              <img
                src={COMPANY_INFO.assets.heroEquipments}
                alt="Equipamentos de Refrigeração - Santa Catarina Refrigeração"
                className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
              />

              {/* Warranty Badge Floating Seal */}
              <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl hover:rotate-6 transition-transform">
                <img
                  src={COMPANY_INFO.assets.warrantyBadge}
                  alt="Selo de Garantia 90 Dias"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating Bottom Info Card */}
              <div className="mt-4 bg-slate-900/90 border border-slate-700 p-3.5 rounded-2xl flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-cyan-950 text-cyan-400 rounded-xl border border-cyan-800">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Técnicos Certificados</p>
                    <p className="text-slate-400 text-xs">Atendimento no local com peças originais</p>
                  </div>
                </div>
                <div className="text-right">
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
