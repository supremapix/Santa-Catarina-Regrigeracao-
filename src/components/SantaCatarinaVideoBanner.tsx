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
    <section className="relative bg-slate-950 text-white py-14 lg:py-20 border-t border-b border-slate-800 overflow-hidden">
      {/* Background Video Layer - Highly Visible */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 sm:opacity-85 scale-105"
        >
          <source src="https://img.supremasite.com.br/santa-catarina.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Main Content Area - Clean Centered Layout Without Buttons */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/60 text-cyan-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md shadow-xl">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0 animate-bounce" />
            <span>Presença Regional em Santa Catarina</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug drop-shadow-lg [text-wrap:balance] max-w-3xl mx-auto">
            <span className="inline-block">Atendimento Técnico Móvel</span>{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
              em Mais de 40 Municípios de SC
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
            Frota de apoio técnico e laboratórios móveis prontos para atender residências, pousadas, hotéis, restaurantes e comércios no Litoral Norte e Vale do Itajaí com agilidade e peças originais.
          </p>

          {/* Value Props Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-3xl mx-auto text-xs font-semibold text-slate-100">
            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-950/80 border border-slate-700/80 backdrop-blur-md shadow-md">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Chegada em ~30 a 60 Minutos</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-950/80 border border-slate-700/80 backdrop-blur-md shadow-md">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Garantia de 90 Dias Formal</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-950/80 border border-slate-700/80 backdrop-blur-md shadow-md">
              <Truck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Laboratório Móvel no Local</span>
            </div>
          </div>

        </div>

        {/* TASK BAR ANIMADA - Cidades Atendidas em Marquee Passando e Clicável */}
        <div className="relative bg-slate-950/90 border-2 border-slate-800/90 rounded-2xl p-3.5 shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="flex items-center gap-3">
            
            {/* Fixed Badge Label */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-black uppercase tracking-wider shrink-0 z-10 shadow-md">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Cidades SC:</span>
            </div>

            {/* Continuous Marquee Container */}
            <div className="overflow-hidden w-full relative">
              {/* Fade Gradient Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee flex items-center gap-3">
                {/* Double loop of items for infinite seamless animation */}
                {[...citiesList, ...citiesList].map((city, idx) => (
                  <Link
                    key={idx}
                    to={`/conserto-de-geladeira-em-${city.slug}`}
                    className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-xs font-bold text-slate-100 hover:text-cyan-300 transition-all shrink-0 shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover:rotate-45 transition-transform" />
                    <span>{city.name}</span>
                    <span className="text-[10px] text-slate-400 font-normal px-1.5 py-0.5 rounded-md bg-slate-950 border border-slate-800">
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

