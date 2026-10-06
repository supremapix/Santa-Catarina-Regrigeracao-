import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { CITIES_DATA, HIGH_VOLUME_NEIGHBORHOODS } from '../data/cities';
import { PageHero, SectionHeader, TechCard } from '../components/TechUI';

interface RegionsHubViewProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const RegionsHubView: React.FC<RegionsHubViewProps> = ({ onOpenBookingModal }) => {
  const ring1Cities = CITIES_DATA.filter(c => c.ring === 1);
  const ring2Cities = CITIES_DATA.filter(c => c.ring === 2 || c.ring === 3);

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12324A] pb-16 text-left">
      <EnhancedSEO
        title="Regiões Atendidas em Santa Catarina: Litoral Norte e Vale do Itajaí | SC Refrigeração"
        description="Confira todas as cidades e bairros atendidos com assistência técnica em domicílio: Penha, Navegantes, Itajaí, Balneário Camboriú, Piçarras, Itapema e Vale."
        canonicalUrl="/regioes-atendidas"
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Regiões Atendidas", item: "/regioes-atendidas" }
        ]}
      />

      {/* Page Hero */}
      <PageHero
        badge="01 / COBERTURA REGIONAL SC"
        title="Cidades e Bairros Atendidos em Santa Catarina"
        subtitle="Atendimento técnico no local com deslocamento direto no Litoral Norte e Vale do Itajaí. Orçamento presencial e garantia de 90 dias por escrito."
        breadcrumbs={[{ label: "Regiões Atendidas", path: "/regioes-atendidas" }]}
        equipmentType="geladeira"
      />

      {/* High Volume Neighborhoods Callout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-4">
        <TechCard stamped={true} className="bg-white border-2 border-[#12324A] p-6 space-y-4">
          <div>
            <span className="font-mono text-xs font-bold text-[#D9682B] uppercase tracking-wider block mb-1">
              ROTA DIÁRIA PRIORITÁRIA
            </span>
            <h2 className="text-xl font-bold font-display text-[#12324A]">
              Bairros com Maior Volume de Atendimento
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {HIGH_VOLUME_NEIGHBORHOODS.map((nh, i) => (
              <Link
                key={i}
                to={`/conserto-de-geladeira-${nh.slug}`}
                className="p-3.5 bg-[#F4F1EA] hover:bg-[#BFE3F2]/30 border border-[#12324A] rounded-[4px] transition-all group block"
              >
                <span className="font-mono text-[10px] font-bold uppercase text-[#D9682B] block mb-0.5">
                  {nh.cityName}
                </span>
                <div className="flex items-center justify-between font-bold text-sm text-[#12324A] group-hover:text-[#D9682B]">
                  <span>{nh.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#12324A] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </TechCard>
      </section>

      {/* Ring 1 - Base Operacional */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-6">
        <SectionHeader
          step="02 / ANEL 1 — BASE OPERACIONAL"
          title="Atendimento Imediato (Litoral Norte)"
          subtitle="Cidades com tempo de deslocamento rápido e técnicos em rota diária."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ring1Cities.map((city, idx) => (
            <TechCard
              key={idx}
              stamped={true}
              hoverable={true}
              className="bg-white border-2 border-[#12324A] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#12324A]/20 pb-2">
                  <span className="font-mono text-xs font-bold text-[#D9682B] uppercase">
                    {city.distanceKm === 0 ? 'BASE SEDE' : `~${city.distanceKm} KM`}
                  </span>
                  <span className="font-mono text-xs text-[#12324A]/70 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#12324A]/50" /> ~{city.estimatedMinutes} MIN
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#12324A] font-display">
                  {city.name} - SC
                </h3>

                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed">
                  {city.customSnippet}
                </p>

                <div>
                  <span className="font-mono text-[10px] font-bold text-[#12324A] block mb-1 uppercase">
                    Bairros Atendidos:
                  </span>
                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {city.neighborhoods.slice(0, 5).map((nb, nIdx) => (
                      <span key={nIdx} className="px-1.5 py-0.5 bg-[#F4F1EA] border border-[#12324A]/20 text-[#12324A]">
                        {nb}
                      </span>
                    ))}
                    {city.neighborhoods.length > 5 && (
                      <span className="px-1.5 py-0.5 bg-[#F4F1EA] border border-[#12324A]/20 text-[#12324A]/60">
                        +{city.neighborhoods.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#12324A]/20">
                <Link
                  to={`/conserto-de-geladeira-${city.slug}`}
                  className="font-mono text-xs font-bold text-[#12324A] hover:text-[#D9682B] flex items-center justify-between group"
                >
                  <span>Ver página de {city.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9682B] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </TechCard>
          ))}
        </div>
      </section>

      {/* Ring 2 - Vale do Itajaí e Região */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        <SectionHeader
          step="03 / ANEL 2 — VALE E EXTENSÕES"
          title="Atendimento Diário no Vale do Itajaí"
          subtitle="Rotas programadas de atendimento técnico residencial e comercial."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ring2Cities.map((city, idx) => (
            <TechCard
              key={idx}
              stamped={true}
              hoverable={true}
              className="bg-white border-2 border-[#12324A] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#12324A]/20 pb-2">
                  <span className="font-mono text-xs font-bold text-[#D9682B] uppercase">
                    ~{city.distanceKm} KM
                  </span>
                  <span className="font-mono text-xs text-[#12324A]/70 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#12324A]/50" /> ~{city.estimatedMinutes} MIN
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#12324A] font-display">
                  {city.name} - SC
                </h3>

                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed">
                  {city.customSnippet}
                </p>

                <div>
                  <span className="font-mono text-[10px] font-bold text-[#12324A] block mb-1 uppercase">
                    Bairros Atendidos:
                  </span>
                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {city.neighborhoods.slice(0, 5).map((nb, nIdx) => (
                      <span key={nIdx} className="px-1.5 py-0.5 bg-[#F4F1EA] border border-[#12324A]/20 text-[#12324A]">
                        {nb}
                      </span>
                    ))}
                    {city.neighborhoods.length > 5 && (
                      <span className="px-1.5 py-0.5 bg-[#F4F1EA] border border-[#12324A]/20 text-[#12324A]/60">
                        +{city.neighborhoods.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#12324A]/20">
                <Link
                  to={`/conserto-de-geladeira-${city.slug}`}
                  className="font-mono text-xs font-bold text-[#12324A] hover:text-[#D9682B] flex items-center justify-between group"
                >
                  <span>Ver página de {city.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9682B] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </TechCard>
          ))}
        </div>
      </section>
    </main>
  );
};
