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
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200" id="cobertura">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center sm:text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3C5D]">
            Onde atendemos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
            A gente vai até o seu imóvel ou empresa nestas cidades e regiões vizinhas:
          </p>
        </div>

        {/* Cities Simple Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mainCities.map((city, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-[#0B3C5D] transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#0B3C5D] font-bold text-base">
                  <MapPin className="w-4 h-4 text-[#0B3C5D] shrink-0" />
                  <span>{city.name}</span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {city.note}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/80">
                <a
                  href={city.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3C5D] hover:text-[#e07b1a] transition-colors"
                >
                  <span>Ver atendimento em {city.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Base Address Footer Box */}
        <div className="bg-[#0B3C5D] text-white rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-bold text-base text-white flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="w-4 h-4 text-[#F28C28]" />
              <span>Base e Endereço Comercial</span>
            </p>
            <p className="text-slate-200 text-xs sm:text-sm">
              {COMPANY_INFO.address.full}
            </p>
            <p className="text-cyan-200 text-xs font-semibold">
              Atendimento de Segunda a Sábado das 08h às 18h
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-xs"
          >
            Chamar no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
