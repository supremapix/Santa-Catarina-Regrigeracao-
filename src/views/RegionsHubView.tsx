import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Clock, PhoneCall, ArrowRight } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { CITIES_DATA, HIGH_VOLUME_NEIGHBORHOODS } from '../data/cities';
import { COMPANY_INFO } from '../data/company';

interface RegionsHubViewProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const RegionsHubView: React.FC<RegionsHubViewProps> = ({ onOpenBookingModal }) => {
  const ring1Cities = CITIES_DATA.filter(c => c.ring === 1);
  const ring2Cities = CITIES_DATA.filter(c => c.ring === 2 || c.ring === 3);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <EnhancedSEO
        title="Regiões Atendidas em Santa Catarina: Litoral Norte e Vale do Itajaí | SC Refrigeração"
        description="Confira todas as cidades e bairros atendidos com assistência técnica em domicílio: Penha, Navegantes, Itajaí, Balneário Camboriú, Piçarras, Itapema e Vale."
        canonicalUrl="/regioes-atendidas"
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Regiões Atendidas", item: "/regioes-atendidas" }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 px-4 border-b border-cyan-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-semibold uppercase tracking-wider mb-4">
            <Navigation className="w-3.5 h-3.5" /> Cobertura Técnica Especializada
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Cidades e Bairros Atendidos em Santa Catarina
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Assistência técnica móvel com veículos equipados com peças originais e ferramentas de precisão para atendimento imediato no Litoral Norte e Vale do Itajaí.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal('Visita Técnica Regional')}
              className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Solicitar Atendimento na Minha Região
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              WhatsApp: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* High Volume Neighborhoods Callout */}
      <section className="max-w-5xl mx-auto px-4 py-8 -mt-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-600" /> Bairros de Maior Volume de Atendimento Rápido:
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Páginas dedicadas com rotas diárias de nossos técnicos para atendimento em até 40 minutos:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGH_VOLUME_NEIGHBORHOODS.map((nh, i) => (
              <Link
                key={i}
                to={`/conserto-de-geladeira-${nh.slug}`}
                className="p-4 rounded-xl bg-cyan-50/50 hover:bg-cyan-100/70 border border-cyan-200/70 transition-all group"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 block mb-1">
                  {nh.cityName}
                </span>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-cyan-800 flex items-center justify-between">
                  <span>{nh.name}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-slate-500 mt-2">
                  Atendimento em domicílio
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ring 1 - Base Operacional */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-8 bg-cyan-500 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-slate-950">Anel 1: Base Operacional (Atendimento Imediato)</h2>
            <p className="text-xs sm:text-sm text-slate-600">Tempo de chegada médio: 20 a 45 minutos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ring1Cities.map((city, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200">
                    {city.distanceKm === 0 ? 'Sede' : `~${city.distanceKm} km`}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> ~{city.estimatedMinutes} min
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {city.name} - SC
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {city.customSnippet}
                </p>

                <div className="mb-4">
                  <span className="text-xs font-semibold text-slate-700 block mb-1.5">Bairros Atendidos:</span>
                  <div className="flex flex-wrap gap-1">
                    {city.neighborhoods.slice(0, 6).map((nb, nIdx) => (
                      <span key={nIdx} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                        {nb}
                      </span>
                    ))}
                    {city.neighborhoods.length > 6 && (
                      <span className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-400 rounded">
                        +{city.neighborhoods.length - 6} bairros
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to={`/conserto-de-geladeira-${city.slug}`}
                  className="w-full py-2.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  Ver Detalhes em {city.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ring 2 - Atendimento Diário */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-8 bg-indigo-500 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-slate-950">Anel 2: Atendimento Diário no Vale e Região</h2>
            <p className="text-xs sm:text-sm text-slate-600">Tempo de chegada: 45 a 90 minutos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ring2Cities.map((city, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-200">
                    ~${city.distanceKm} km
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> ~{city.estimatedMinutes} min
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {city.name} - SC
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {city.customSnippet}
                </p>

                <div className="mb-4">
                  <span className="text-xs font-semibold text-slate-700 block mb-1.5">Bairros Atendidos:</span>
                  <div className="flex flex-wrap gap-1">
                    {city.neighborhoods.slice(0, 6).map((nb, nIdx) => (
                      <span key={nIdx} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                        {nb}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to={`/conserto-de-geladeira-${city.slug}`}
                  className="w-full py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  Ver Detalhes em {city.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
