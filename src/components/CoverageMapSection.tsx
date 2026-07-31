import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CITIES_DATA, CityLocalSEO } from '../data/cities';
import { MapPin, Navigation, Clock, Search, ExternalLink, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const CoverageMapSection: React.FC = () => {
  const [activeRing, setActiveRing] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = CITIES_DATA.filter((city) => {
    const matchesRing = activeRing === 'all' || city.ring === activeRing;
    const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          city.neighborhoods.some(n => n.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRing && matchesSearch;
  });

  return (
    <section className="bg-white py-16 lg:py-24 text-slate-900 border-b border-slate-200" id="cobertura">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 font-bold text-xs uppercase tracking-wider">
            Atendimento em Domicílio em Toda a Região
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-3">
            Sede em Penha e Raio de Cobertura de até 200 km
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 font-normal">
            Páginas e equipes móveis dedicadas para atender chamados residenciais e comerciais em mais de 40 municípios de Santa Catarina.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          {/* Ring Filter Buttons */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveRing('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeRing === 'all'
                  ? 'bg-cyan-700 text-white'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
              }`}
            >
              Todas ({CITIES_DATA.length} Cidades)
            </button>
            <button
              onClick={() => setActiveRing(1)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeRing === 1
                  ? 'bg-cyan-700 text-white'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
              }`}
            >
              Anel 1: Núcleo (até 50km)
            </button>
            <button
              onClick={() => setActiveRing(2)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeRing === 2
                  ? 'bg-cyan-700 text-white'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
              }`}
            >
              Anel 2: Regional (50-120km)
            </button>
            <button
              onClick={() => setActiveRing(3)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeRing === 3
                  ? 'bg-cyan-700 text-white'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
              }`}
            >
              Anel 3: Extensão (120-200km)
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar cidade ou bairro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-600"
            />
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCities.map((city: CityLocalSEO) => (
            <div
              key={city.slug}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:border-cyan-300 shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-cyan-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                    {city.name} - {city.state}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                    city.ring === 1 ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                    city.ring === 2 ? 'bg-cyan-50 text-cyan-800 border-cyan-200' :
                    'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    Anel {city.ring}
                  </span>
                </div>

                <p className="text-slate-600 text-xs line-clamp-2 mb-3">
                  {city.customSnippet}
                </p>

                <div className="space-y-1 text-[11px] text-slate-500 mb-3 border-t border-slate-200 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Navigation className="w-3 h-3 text-cyan-600" /> Distância Penha:
                    </span>
                    <span className="font-semibold text-slate-800">{city.distanceKm} km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" /> Tempo Estimado:
                    </span>
                    <span className="font-semibold text-slate-800">~{city.estimatedMinutes} min</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-2">
                <Link
                  to={`/conserto-de-geladeira-em-${city.slug}`}
                  className="text-xs font-bold text-cyan-800 hover:text-cyan-900 flex items-center gap-1 group-hover:underline"
                >
                  <span>Página {city.name}</span>
                  <ExternalLink className="w-3 h-3 text-cyan-600" />
                </Link>

                <a
                  href={`${COMPANY_INFO.whatsappUrl}%20para%20atendimento%20em%20${encodeURIComponent(city.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px]"
                >
                  Chamar
                </a>
              </div>

            </div>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="text-center py-12 text-slate-600">
            <ShieldAlert className="w-10 h-10 text-amber-500 mx-auto mb-2" />
            <p>Nenhuma cidade encontrada para a busca "{searchQuery}".</p>
            <p className="text-xs text-slate-500 mt-1">Mas atendemos toda a região! Chame no WhatsApp para confirmar seu endereço.</p>
          </div>
        )}

      </div>
    </section>
  );
};
