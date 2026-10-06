import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const CoverageMapSection: React.FC = () => {
  const mainCities = [
    {
      name: 'Navegantes',
      slug: 'navegantes',
      link: '/conserto-de-geladeira-em-navegantes',
      note: 'Sede e atendimento rápido em todos os bairros (Centro, Gravatá, Meia Praia, Machados, São Pedro).'
    },
    {
      name: 'Penha',
      slug: 'penha',
      link: '/conserto-de-geladeira-penha',
      note: 'Atendimento no Centro, Armação, Praia Grande, Gravatá de Penha e região do Beto Carrero.'
    },
    {
      name: 'Balneário Piçarras',
      slug: 'balneario-picarras',
      link: '/conserto-de-geladeira-balneario-picarras',
      note: 'Atendimento no Centro, Itacolomi, Santo Antônio e toda a orla marítima.'
    },
    {
      name: 'Itajaí',
      slug: 'itajai',
      link: '/conserto-de-geladeira-itajai',
      note: 'Atendimento na Praia Brava, Fazenda, São Vicente, Cordeiros, Dom Bosco e Centro.'
    },
    {
      name: 'Barra Velha',
      slug: 'barra-velha',
      link: '/conserto-de-geladeira-barra-velha',
      note: 'Atendimento em Itajuba, Tabuleiro, Quinta dos Açorianos e Centro.'
    },
    {
      name: 'Balneário Camboriú',
      slug: 'balneario-camboriu',
      link: '/conserto-de-geladeira-balneario-camboriu',
      note: 'Atendimento no Centro, Nações, Ariribá, Estados, Pioneiros e Barra.'
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F4F1EA] border-b-2 border-[#12324A] bg-paper-grid" id="cobertura">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        
        {/* Header */}
        <div className="space-y-1 border-b-2 border-[#12324A] pb-4">
          <span className="font-mono text-xs text-[#D9682B] font-bold tracking-wider uppercase">
            06 / Onde atendemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12324A] font-display">
            Onde atendemos
          </h2>
          <p className="text-[#12324A]/80 text-sm sm:text-base font-sans">
            A gente vai até o seu imóvel ou empresa nestas cidades e regiões vizinhas:
          </p>
        </div>

        {/* Cities Grid with Technical Stamped Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mainCities.map((city, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#12324A] rounded-[4px] p-5 flex flex-col justify-between shadow-stamped hover:bg-[#BFE3F2]/20 transition-all group"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#12324A] font-bold text-base">
                  <MapPin className="w-4 h-4 text-[#D9682B] shrink-0" />
                  <span>{city.name}</span>
                </div>
                <p className="text-[#12324A]/80 text-xs sm:text-sm leading-relaxed font-sans">
                  {city.note}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#12324A]/20">
                <a
                  href={city.link}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#12324A] group-hover:text-[#D9682B] transition-colors"
                >
                  <span>Ver atendimento em {city.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9682B]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Base Address Stamped Box */}
        <div className="bg-[#12324A] text-white border-2 border-[#12324A] rounded-[4px] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-stamped">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-mono font-bold text-sm sm:text-base text-white flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="w-4 h-4 text-[#D9682B]" />
              <span>BASE TÉCNICA E ENDEREÇO DA LOJA</span>
            </p>
            <p className="text-[#BFE3F2] text-xs sm:text-sm font-sans">
              {COMPANY_INFO.address.full}
            </p>
            <p className="text-white/80 font-mono text-xs">
              Atendimento de Segunda a Sábado das 08h às 18h
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-[4px] bg-[#16a34a] hover:bg-[#15803d] text-white font-mono font-bold text-xs border border-white shadow-stamped shrink-0 transition-all hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            CHAMAR NO WHATSAPP
          </a>
        </div>

      </div>
    </section>
  );
};
