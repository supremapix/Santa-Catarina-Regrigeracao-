import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Clock, MessageCircle, ChevronRight, Navigation, Phone, Zap, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const SantaCatarinaVideoBanner: React.FC = () => {
  const citiesList = [
    { name: 'Penha', slug: 'penha', badge: 'Base Sede' },
    { name: 'Balneário Piçarras', slug: 'balneario-picarras', badge: 'Loja Física' },
    { name: 'Navegantes', slug: 'navegantes', badge: 'Plantão Aeroporto' },
    { name: 'Barra Velha', slug: 'barra-velha', badge: 'Atendimento Rápido' },
    { name: 'Itajaí', slug: 'itajai', badge: 'Porto & Centro' },
    { name: 'Balneário Camboriú', slug: 'balneario-camboriu', badge: 'Edifícios Orla' },
    { name: 'Camboriú', slug: 'camboriu', badge: 'Residencial' },
    { name: 'Itapema', slug: 'itapema', badge: 'Meia Praia' },
    { name: 'Porto Belo', slug: 'porto-belo', badge: 'Pousadas & Marinas' },
    { name: 'Bombinhas', slug: 'bombinhas', badge: 'Litoral' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 lg:py-20 border-t border-b border-slate-800 overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-24 right-10 w-[400px] h-[200px] bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Main Content Area - Clean, Innovative Centered Layout */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md shadow-lg">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0 animate-bounce" />
            <span>Presença Regional em Santa Catarina</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Atendimento Técnico Móvel em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
              Mais de 40 Municípios de SC
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Frota de apoio técnico e laboratórios móveis prontos para atender residências, pousadas, hotéis, restaurantes e comércios no Litoral Norte e Vale do Itajaí com agilidade e peças originais.
          </p>

          {/* Value Props Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-3xl mx-auto text-xs font-semibold text-slate-200">
            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Chegada em ~30 a 60 Minutos</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Garantia de 90 Dias Formal</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm">
              <Truck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Laboratório Móvel no Local</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${COMPANY_INFO.whatsappUrl}%20-%20Solicita%C3%A7%C3%A3o%20de%20Visita%20T%C3%A9cnica%20em%20SC`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
              <span>Solicitar Visita Técnica em SC</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-700 font-extrabold text-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Ligar: {COMPANY_INFO.phone}</span>
            </a>

            <Link
              to="/mapa-do-site"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/50 font-bold text-sm transition-all hover:scale-105"
            >
              <span>Ver Cidades & Mapa Completo</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

        </div>

        {/* TASK BAR ANIMADA - Cidades Atendidas em Marquee Passando e Clicável */}
        <div className="relative bg-slate-900/90 border-2 border-slate-800 rounded-2xl p-3.5 shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="flex items-center gap-3">
            
            {/* Fixed Badge Label */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-black uppercase tracking-wider shrink-0 z-10 shadow-md">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Cidades SC:</span>
            </div>

            {/* Continuous Marquee Container */}
            <div className="overflow-hidden w-full relative">
              {/* Fade Gradient Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee flex items-center gap-3">
                {/* Double loop of items for infinite seamless animation */}
                {[...citiesList, ...citiesList].map((city, idx) => (
                  <Link
                    key={idx}
                    to={`/conserto-de-geladeira-em-${city.slug}`}
                    className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-xs font-bold text-slate-200 hover:text-cyan-300 transition-all shrink-0 shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover:rotate-45 transition-transform" />
                    <span>{city.name}</span>
                    <span className="text-[10px] text-slate-400 font-normal px-1.5 py-0.5 rounded-md bg-slate-900 border border-slate-800">
                      {city.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

