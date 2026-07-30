import React from 'react';
import { ArrowRight, Check, Calendar, MessageCircle } from 'lucide-react';
import { PILLAR_SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/company';

interface ServicesGridProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="bg-slate-50 py-16 lg:py-24 text-slate-900 border-b border-slate-200" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 font-bold text-xs uppercase tracking-wider">
            Nossos Serviços Especializados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-3 tracking-tight">
            Assistência Técnica Completa em Refrigeração
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
            Atendemos residências, apartamentos de temporada, pousadas, hotéis, restaurantes, peixarias e comércios de Penha e toda a região.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLAR_SERVICES.map((service) => {
            const isLavaESeca = service.id === 'lava-e-seca';
            const pillarRoute = isLavaESeca ? `/${service.slug}` : `/${service.slug}/`;

            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-cyan-300 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group"
              >
                {/* Image Header Container */}
                <div>
                  <div className="relative h-56 bg-slate-100 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200">
                    {/* Category Pill */}
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 border border-slate-300 text-cyan-800 text-xs font-bold shadow-sm">
                      {service.category}
                    </span>

                    {/* Image */}
                    <img
                      src={service.image}
                      alt={`${service.title} - Santa Catarina Refrigeração`}
                      className="max-h-44 w-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {service.summary}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-1.5 pt-2">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Principais Reparos:</p>
                      {service.repairsExecuted.slice(0, 3).map((repair, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{repair}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={pillarRoute}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-200 font-bold text-xs transition-colors"
                    >
                      <span>Ver Detalhes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => onOpenBookingModal(service.shortTitle)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors border border-slate-300"
                    >
                      <Calendar className="w-3.5 h-3.5 text-cyan-700" />
                      <span>Agendar</span>
                    </button>
                  </div>

                  <a
                    href={`${COMPANY_INFO.whatsappUrl}%20para%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Orçamento {service.shortTitle} via WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
