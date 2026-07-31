import React from 'react';
import { MapPin, ShieldCheck, Clock, MessageCircle, ChevronRight, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const SantaCatarinaVideoBanner: React.FC = () => {
  return (
    <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-t border-b border-slate-800">
      {/* Background Video Layer - High Visibility on Mobile & PC */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 sm:opacity-85 scale-105"
        >
          <source src="https://img.supremasite.com.br/santa-catarina.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & Stats */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Presença Regional em Santa Catarina</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Atendimento Técnico Móvel em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Mais de 40 Municípios de SC
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Frota de apoio técnico e laboratórios móveis prontos para atender residências, pousadas, hotéis, restaurantes e comércios no Litoral Norte, Vale do Itajaí e Grande Florianópolis.
            </p>

            {/* Region Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2 text-xs font-semibold">
              {['Navegantes', 'Penha', 'Balneário Piçarras', 'Barra Velha', 'Itajaí', 'Balneário Camboriú', 'Itapema', 'Porto Belo', 'Bombinhas', 'Blumenau', 'Joinville', 'Florianópolis'].map((cityName, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-200 flex items-center gap-1.5 backdrop-blur-sm"
                >
                  <Navigation className="w-3 h-3 text-cyan-400 shrink-0" />
                  {cityName}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/20 transition-transform active:scale-95 min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Solicitar Visita Técnica em SC</span>
              </a>

              <a
                href="/#cobertura"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-sm min-h-[52px] backdrop-blur-sm"
              >
                <span>Ver Mapa Completo de Cobertura</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Video Preview Glass Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-md space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://img.supremasite.com.br/santa-catarina.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-[11px] font-bold text-cyan-400 backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Atendimento em SC
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-1">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="flex items-center gap-1.5 font-medium text-slate-400">
                    <Clock className="w-4 h-4 text-emerald-400" /> Tempo de Resposta:
                  </span>
                  <span className="font-bold text-white">Chegada em ~30 min</span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="flex items-center gap-1.5 font-medium text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> Garantia nos Serviços:
                  </span>
                  <span className="font-bold text-white">90 dias por escrito</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="flex items-center gap-1.5 font-medium text-slate-400">
                    <MapPin className="w-4 h-4 text-cyan-400" /> Raio de Atendimento:
                  </span>
                  <span className="font-bold text-emerald-400">Até 200 km da sede</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
