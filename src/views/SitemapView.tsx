import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { PILLAR_SERVICES } from '../data/services';
import { SEARCH_INTENTS } from '../data/searchIntents';
import { CITIES_DATA, getAllNeighborhoods } from '../data/cities';
import { Search, ArrowRight } from 'lucide-react';
import { PageHero, SectionHeader, TechCard } from '../components/TechUI';

export const SitemapView: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const neighborhoods = getAllNeighborhoods();

  const brandServices = [
    { title: 'Assistência Técnica Lava e Seca LG Penha', path: '/assistencia-lava-e-seca-lg-penha' },
    { title: 'Assistência Técnica Lava e Seca Samsung Penha', path: '/assistencia-lava-e-seca-samsung-penha' },
    { title: 'Assistência Técnica Geladeira Brastemp Penha', path: '/assistencia-geladeira-brastemp-penha' },
    { title: 'Assistência Técnica Geladeira Electrolux Penha', path: '/assistencia-geladeira-electrolux-penha' },
  ];

  const filteredServices = PILLAR_SERVICES.filter(s =>
    s.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    s.summary.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const filteredIntents = SEARCH_INTENTS.filter(i =>
    i.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    i.h1.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const filteredCities = CITIES_DATA.filter(c =>
    c.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const filteredNeighborhoods = neighborhoods.filter(n =>
    n.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    n.cityName.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const sitemapSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mapa do Site | Santa Catarina Refrigeração",
    "description": "Índice completo de todas as páginas, serviços, intenções de busca e cidades atendidas pela Santa Catarina Refrigeração.",
    "url": `${COMPANY_INFO.subdomainUrl}/mapa-do-site`
  };

  return (
    <>
      <EnhancedSEO
        title="Mapa do Site | Índice Completo de Serviços e Cidades | SC Refrigeração"
        description="Navegue pelo mapa do site da Santa Catarina Refrigeração. Encontre conserto de geladeiras, câmara fria, lava e seca, adegas, cidades e bairros atendidos."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/mapa-do-site`}
        schemas={[sitemapSchema]}
      />

      <main className="bg-[#F4F1EA] text-[#12324A] min-h-screen pb-16 text-left">
        
        {/* Page Hero */}
        <PageHero
          badge="01 / ÍNDICE GERAL DO PORTAL"
          title="Mapa do Site Completo"
          subtitle="Explore todas as páginas de serviços, marcas, diagnósticos e cidades atendidas pela Santa Catarina Refrigeração."
          breadcrumbs={[{ label: "Mapa do Site", path: "/mapa-do-site" }]}
          equipmentType="geladeira"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          
          {/* Quick Filter Box */}
          <div className="bg-white border-2 border-[#12324A] p-4 rounded-[4px] shadow-stamped">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#12324A]/50" />
              <input
                type="text"
                placeholder="Filtrar por serviço, defeito ou cidade..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[#F4F1EA] border border-[#12324A] text-xs font-mono text-[#12324A] focus:outline-none placeholder-[#12324A]/50"
              />
            </div>
          </div>

          {/* Section 1: Principais Serviços */}
          <div className="space-y-6">
            <SectionHeader
              step="02 / SERVIÇOS & EQUIPAMENTOS"
              title="Equipamentos Atendidos"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredServices.map((service) => (
                <TechCard
                  key={service.id}
                  stamped={true}
                  hoverable={true}
                  className="bg-white border-2 border-[#12324A] flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] font-bold text-[#D9682B] uppercase">
                      [{service.category}]
                    </span>
                    <h3 className="font-bold text-sm text-[#12324A] font-display">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#12324A]/80 font-sans line-clamp-2">
                      {service.summary}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#12324A]/20">
                    <Link
                      to={`/${service.slug}`}
                      className="font-mono text-xs font-bold text-[#12324A] hover:text-[#D9682B] flex items-center justify-between"
                    >
                      <span>Ver serviço</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D9682B]" />
                    </Link>
                  </div>
                </TechCard>
              ))}
            </div>
          </div>

          {/* Section 2: Assistência por Marcas */}
          <div className="space-y-6">
            <SectionHeader
              step="03 / FABRICANTES"
              title="Assistência Técnica por Marca"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {brandServices.map((brand, idx) => (
                <TechCard key={idx} stamped={false} hoverable={true}>
                  <Link
                    to={brand.path}
                    className="font-mono text-xs font-bold text-[#12324A] hover:text-[#D9682B] flex items-center justify-between"
                  >
                    <span>{brand.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9682B]" />
                  </Link>
                </TechCard>
              ))}
            </div>
          </div>

          {/* Section 3: Intenções de Busca */}
          <div className="space-y-6">
            <SectionHeader
              step="04 / DIAGNÓSTICOS FREQUENTES"
              title="Soluções por Sintoma e Falha"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredIntents.map((intent) => (
                <TechCard
                  key={intent.slug}
                  stamped={true}
                  hoverable={true}
                  className="bg-white border-2 border-[#12324A] flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[#D9682B] font-bold uppercase">
                      {intent.intentQuery}
                    </span>
                    <h3 className="font-bold text-sm text-[#12324A] font-display">
                      {intent.title}
                    </h3>
                    <p className="text-xs text-[#12324A]/80 font-sans line-clamp-2">
                      {intent.pain}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#12324A]/20">
                    <Link
                      to={`/problemas/${intent.slug}`}
                      className="font-mono text-xs font-bold text-[#12324A] hover:text-[#D9682B] flex items-center justify-between"
                    >
                      <span>Ver solução</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D9682B]" />
                    </Link>
                  </div>
                </TechCard>
              ))}
            </div>
          </div>

          {/* Section 4: Cidades Atendidas */}
          <div className="space-y-6">
            <SectionHeader
              step="05 / COBERTURA LOCAL"
              title={`Cidades Atendidas (${filteredCities.length})`}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
              {filteredCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/conserto-de-geladeira-em-${city.slug}`}
                  className="p-2.5 bg-white border border-[#12324A]/30 rounded-[4px] font-mono text-xs font-bold text-[#12324A] hover:bg-[#BFE3F2]/30 hover:border-[#12324A] transition-all flex items-center justify-between group"
                >
                  <span className="truncate">{city.name}</span>
                  <ArrowRight className="w-3 h-3 text-[#D9682B] shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Section 5: Bairros */}
          {filteredNeighborhoods.length > 0 && (
            <div className="space-y-6">
              <SectionHeader
                step="06 / BAIRROS"
                title="Bairros em Destaque"
              />

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {filteredNeighborhoods.slice(0, 48).map((nb) => (
                  <Link
                    key={nb.slug}
                    to={`/bairros/${nb.slug}`}
                    className="p-2 bg-white border border-[#12324A]/20 rounded-[4px] font-mono text-[11px] text-[#12324A] hover:bg-[#BFE3F2]/30 truncate block"
                  >
                    {nb.name} ({nb.cityName})
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </>
  );
};
