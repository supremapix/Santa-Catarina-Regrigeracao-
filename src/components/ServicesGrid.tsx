import React from 'react';
import { ArrowRight, Check, Calendar, MessageCircle, ShieldCheck } from 'lucide-react';
import { PILLAR_SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/company';

interface ServicesGridProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBookingModal }) => {
  // Color themes per service type to differentiate cards clearly
  const getCardTheme = (id: string) => {
    switch (id) {
      case 'geladeiras':
        return {
          cardBg: 'bg-slate-900 border-2 border-cyan-500/80 shadow-cyan-900/20',
          badgeBg: 'bg-cyan-500 text-slate-950 font-black',
          glowBorder: 'hover:border-cyan-400 hover:shadow-cyan-500/30',
          accentText: 'text-cyan-400'
        };
      case 'lava-e-seca':
        return {
          cardBg: 'bg-slate-900 border-2 border-emerald-500/80 shadow-emerald-900/20',
          badgeBg: 'bg-emerald-500 text-slate-950 font-black',
          glowBorder: 'hover:border-emerald-400 hover:shadow-emerald-500/30',
          accentText: 'text-emerald-400'
        };
      case 'camaras-frias':
        return {
          cardBg: 'bg-slate-900 border-2 border-blue-500/80 shadow-blue-900/20',
          badgeBg: 'bg-blue-500 text-white font-black',
          glowBorder: 'hover:border-blue-400 hover:shadow-blue-500/30',
          accentText: 'text-blue-400'
        };
      case 'freezers':
        return {
          cardBg: 'bg-slate-900 border-2 border-sky-500/80 shadow-sky-900/20',
          badgeBg: 'bg-sky-400 text-slate-950 font-black',
          glowBorder: 'hover:border-sky-300 hover:shadow-sky-500/30',
          accentText: 'text-sky-300'
        };
      default:
        return {
          cardBg: 'bg-slate-900 border-2 border-cyan-600/80 shadow-slate-900/40',
          badgeBg: 'bg-cyan-600 text-white font-black',
          glowBorder: 'hover:border-cyan-400 hover:shadow-cyan-500/30',
          accentText: 'text-cyan-300'
        };
    }
  };

  return (
    <section className="bg-slate-950 py-12 sm:py-16 text-white border-b border-slate-800" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/80 font-black text-xs uppercase tracking-wider">
            Assistência Técnica Domiciliar 24h
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Conserto Especializado com <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
              Garantia e Peças Originais
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Escolha o equipamento abaixo. Visita técnica no mesmo dia com orçamento transparente no local em Navegantes, Penha, Itajaí e região.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PILLAR_SERVICES.map((service) => {
            const isLavaESeca = service.id === 'lava-e-seca';
            const pillarRoute = isLavaESeca ? `/${service.slug}` : `/${service.slug}/`;
            const theme = getCardTheme(service.id);

            return (
              <div
                key={service.id}
                className={`rounded-3xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between group ${theme.cardBg} ${theme.glowBorder}`}
              >
                {/* Image/Video Header Container with Black Background */}
                <div>
                  <div className={`relative h-60 bg-black flex items-center justify-center overflow-hidden border-b border-slate-800 ${service.video ? 'p-0' : 'p-6'}`}>
                    {/* Category Pill */}
                    <span className={`absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full text-xs shadow-md uppercase tracking-wider ${theme.badgeBg}`}>
                      {service.category}
                    </span>

                    <span className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-emerald-400 text-[11px] font-bold backdrop-blur-md">
                      <ShieldCheck className="w-3.5 h-3.5" /> 90 Dias
                    </span>

                    {/* Video or Image with High Contrast Drop Shadow on Black */}
                    {service.video ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      >
                        <source src={service.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={service.image}
                        alt={`${service.title} - Santa Catarina Refrigeração`}
                        className="max-h-48 w-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
                      />
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <h3 className={`text-xl sm:text-2xl font-black ${theme.accentText} leading-snug`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal">
                      {service.summary}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 pt-1 border-t border-slate-800/80">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Serviços e Reparos Frequentes:</p>
                      {service.repairsExecuted.slice(0, 3).map((repair, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{repair}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons (Clean 2-Button Grid) */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={pillarRoute}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-colors border border-slate-700 min-h-[48px]"
                    >
                      <span>Detalhes</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </a>

                    <a
                      href={`${COMPANY_INFO.whatsappUrl}%20para%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all min-h-[48px]"
                    >
                      <MessageCircle className="w-4.5 h-4.5 shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
