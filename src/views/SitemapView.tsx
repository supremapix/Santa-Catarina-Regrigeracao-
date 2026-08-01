import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { PILLAR_SERVICES } from '../data/services';
import { SEARCH_INTENTS } from '../data/searchIntents';
import { CITIES_DATA, getAllNeighborhoods } from '../data/cities';
import { MapPin, Search, Wrench, ShieldCheck, FileText, ChevronRight, CheckCircle2, Flame, AlertTriangle, Building2 } from 'lucide-react';

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

      <main className="bg-slate-950 text-white min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-black uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Navegação & SEO Local</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Mapa do Site Completo
            </h1>
            <p className="text-slate-300 text-sm sm:text-base font-normal">
              Explore todos os nossos serviços de assistência técnica, marcas atendidas, soluções para defeitos frequentes e cobertura em cidades de Santa Catarina.
            </p>

            {/* Quick Search Box */}
            <div className="relative max-w-md mx-auto pt-2">
              <Search className="w-5 h-5 absolute left-4 top-5 text-slate-400" />
              <input
                type="text"
                placeholder="Filtrar por serviço, defeito ou cidade..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border-2 border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-all placeholder:text-slate-500 font-medium shadow-inner"
              />
            </div>
          </div>

          {/* Section 1: Principais Serviços */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Wrench className="w-6 h-6 text-cyan-400 shrink-0" />
              <h2 className="text-2xl font-black text-white">Principais Serviços & Equipamentos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredServices.map((service) => (
                <Link
                  key={service.id}
                  to={`/${service.slug}`}
                  className="group bg-slate-900 hover:bg-slate-850 p-5 rounded-2xl border-2 border-slate-800 hover:border-cyan-400 transition-all flex flex-col justify-between space-y-3 shadow-lg"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 inline-block">
                      {service.category}
                    </span>
                    <h3 className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-cyan-400 pt-2 border-t border-slate-800/80">
                    <span>Acessar Página</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 2: Assistência por Marcas */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Building2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <h2 className="text-2xl font-black text-white">Assistência Técnica por Marca</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {brandServices.map((brand, idx) => (
                <Link
                  key={idx}
                  to={brand.path}
                  className="group bg-slate-900 hover:bg-slate-850 p-4 rounded-2xl border border-slate-800 hover:border-emerald-400 transition-all flex items-center justify-between"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-emerald-300">
                    {brand.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Section 3: Intenções de Busca e Soluções por Defeito */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
              <h2 className="text-2xl font-black text-white">Soluções por Intenção de Busca & Defeitos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredIntents.map((intent) => (
                <Link
                  key={intent.slug}
                  to={`/problemas/${intent.slug}`}
                  className="group bg-slate-900 hover:bg-slate-850 p-5 rounded-2xl border-2 border-slate-800 hover:border-amber-400 transition-all space-y-3 shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono italic text-slate-400 block">
                      {intent.intentQuery}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {intent.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                      {intent.pain}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400 pt-2 border-t border-slate-800">
                    <span>Ver Solução Técnica</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 4: Cidades Atendidas em Santa Catarina */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <MapPin className="w-6 h-6 text-sky-400 shrink-0" />
              <h2 className="text-2xl font-black text-white">Cidades Atendidas em Santa Catarina ({filteredCities.length})</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/conserto-de-geladeira-em-${city.slug}`}
                  className="group bg-slate-900 hover:bg-slate-800 p-3 rounded-xl border border-slate-800 hover:border-sky-400 transition-all text-xs font-bold text-slate-200 flex items-center justify-between"
                >
                  <span className="truncate group-hover:text-sky-300">{city.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-sky-400 opacity-60 group-hover:opacity-100 shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Section 5: Bairros em Destaque */}
          {filteredNeighborhoods.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <Building2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <h2 className="text-2xl font-black text-white">Bairros Atendidos em Destaque</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                {filteredNeighborhoods.slice(0, 48).map((nb) => (
                  <Link
                    key={nb.slug}
                    to={`/bairros/${nb.slug}`}
                    className="group bg-slate-900 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800/80 hover:border-emerald-400 transition-all text-[11px] font-semibold text-slate-300 flex items-center justify-between"
                  >
                    <span className="truncate group-hover:text-emerald-300">{nb.name} ({nb.cityName})</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Section 6: Blog & Informações Institucionais */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <FileText className="w-6 h-6 text-purple-400 shrink-0" />
              <h2 className="text-2xl font-black text-white">Blog & Guias Técnicos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/blog/lava-e-seca-penha-guia-completo"
                className="group bg-slate-900 hover:bg-slate-850 p-5 rounded-2xl border border-slate-800 hover:border-purple-400 transition-all space-y-2"
              >
                <h3 className="text-base font-extrabold text-white group-hover:text-purple-300">
                  Guia Completo: Manutenção e Conserto de Lava e Seca em Penha e Litoral Norte
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Artigo educativo com dicas de prevenção contra ferrugem em regiões praianas, erros comuns OE e 5E, e como aumentar a vida útil da sua máquina.
                </p>
              </Link>

              <Link
                to="/"
                className="group bg-slate-900 hover:bg-slate-850 p-5 rounded-2xl border border-slate-800 hover:border-purple-400 transition-all space-y-2"
              >
                <h3 className="text-base font-extrabold text-white group-hover:text-purple-300">
                  Página Inicial - Santa Catarina Refrigeração
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Visão geral da empresa, formas de pagamento, garantia formal de 90 dias, depoimentos e formulário de agendamento online.
                </p>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
