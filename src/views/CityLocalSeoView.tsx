import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CITIES_DATA, CityLocalSEO } from '../data/cities';
import { SeoHead } from '../components/SeoHead';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Clock, CheckCircle2, MessageCircle, Calendar, Phone, ChevronRight, Navigation } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';

interface CityLocalSeoViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const CityLocalSeoView: React.FC<CityLocalSeoViewProps> = ({ onOpenBookingModal }) => {
  const params = useParams<{ citySlug?: string; cidade?: string; bairro?: string; bairroSlug?: string; regionSlug?: string; '*'?: string }>();
  const location = useLocation();

  // Extract raw parameter from params or directly from location.pathname
  const currentPath = decodeURIComponent(location.pathname);
  const splatParam = params['*'] || '';
  const paramVal = params.citySlug || params.cidade || params.bairro || params.bairroSlug || params.regionSlug || splatParam || '';

  const rawParam = paramVal || currentPath;

  // Clean slug removing typical prefixes/suffixes
  const cleanSlug = rawParam
    .toLowerCase()
    .replace(/^\//, '')
    .replace(/^conserto-de-geladeira-em-/, '')
    .replace(/^cidades\//, '')
    .replace(/^cidade\//, '')
    .replace(/^bairros\//, '')
    .replace(/^bairro\//, '')
    .replace(/^regioes\//, '')
    .replace(/^regiao\//, '')
    .replace(/\/$/, '')
    .trim();

  // Helper function to normalize strings for accent-insensitive comparison
  const normalize = (str: string) =>
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "-");

  const normalizedQuery = normalize(cleanSlug);

  // 1. Try exact or normalized slug match for city
  let matchedCity: CityLocalSEO | undefined = CITIES_DATA.find(
    (c) => c.slug === cleanSlug || normalize(c.slug) === normalizedQuery || normalize(c.name) === normalizedQuery
  );

  // 2. If no city matched, check if parameter matches a neighborhood name in any city
  let matchedNeighborhood = '';
  if (!matchedCity && cleanSlug) {
    for (const cityItem of CITIES_DATA) {
      const foundBairro = cityItem.neighborhoods.find((n) => normalize(n) === normalizedQuery || normalize(n).includes(normalizedQuery));
      if (foundBairro) {
        matchedCity = cityItem;
        matchedNeighborhood = foundBairro;
        break;
      }
    }
  }

  // Fallback to Penha if no city found
  const city: CityLocalSEO = matchedCity || CITIES_DATA[0];

  const canonicalUrl = `${COMPANY_INFO.subdomainUrl}/conserto-de-geladeira-em-${city.slug}`;

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${COMPANY_INFO.name} - Atendimento ${city.name}/${city.state}`,
    "image": COMPANY_INFO.assets.heroEquipments,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "sameAs": `https://pt.wikipedia.org/wiki/${encodeURIComponent(city.name)}`
    },
    "description": `Assistência técnica e conserto de geladeiras, freezers, câmaras frias e lava e seca em ${city.name}/${city.state}. Atendimento móvel residencial nos bairros ${city.neighborhoods.slice(0, 5).join(', ')} e região.`
  };

  const breadcrumbs = [
    { name: "Início", item: COMPANY_INFO.subdomainUrl },
    { name: "Cidades Atendidas", item: `${COMPANY_INFO.subdomainUrl}/#cobertura` },
    { name: `Conserto de Geladeira em ${city.name}`, item: canonicalUrl }
  ];

  return (
    <>
      <SeoHead
        title={`Conserto de Geladeira em ${city.name}/SC | Assistência Técnica 24h`}
        description={`Assistência técnica especializada em conserto de geladeira, freezer, câmara fria e lava e seca em ${city.name}/${city.state}. Atendimento domiciliar nos bairros ${city.neighborhoods.slice(0, 4).join(', ')}. Garantia 90 dias.`}
        canonicalUrl={canonicalUrl}
        schemas={[citySchema]}
        breadcrumbs={breadcrumbs}
      />

      <main className="bg-white text-slate-900 min-h-screen py-10 space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-slate-500">
            <a href="/" className="hover:text-cyan-800">Início</a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <a href="/#cobertura" className="hover:text-cyan-800">Cidades</a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-cyan-800 font-bold">{city.name}</span>
          </nav>

          {/* City Hero Banner */}
          <div className="bg-gradient-to-br from-slate-50 via-cyan-50/40 to-blue-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-200 text-xs font-bold uppercase flex items-center gap-1">
                <MapPin className="w-3 h-3.5 text-cyan-700" /> {city.name} / {city.state}
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-1">
                <Navigation className="w-3 h-3 text-cyan-700" /> {city.distanceKm} km da sede Penha
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-700" /> Chegada em ~{city.estimatedMinutes} min
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Conserto de Geladeira em {city.name} — Assistência Técnica em Domicílio
            </h1>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {city.customSnippet} Dispomos de equipe móvel equipada para atender chamados de urgência residencial e comercial em <strong>{city.name}</strong> com peças originais e garantia formal de 90 dias por escrito.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`${COMPANY_INFO.whatsappUrl}%20para%20atendimento%20em%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base shadow-md flex items-center justify-center gap-2 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Solicitar Técnico em {city.name} no WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenBookingModal(`Atendimento em ${city.name}`)}
                className="px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-cyan-900 border border-cyan-300 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
              >
                <Calendar className="w-5 h-5 text-cyan-700" />
                <span>Agendar Horário em {city.name}</span>
              </button>
            </div>
          </div>

          {/* Neighborhoods Coverage Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-cyan-700" />
              <span>Bairros Atendidos em {city.name}/{city.state}</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Sua casa ou empresa fica em {city.name}? Nossos técnicos realizam visitas diárias sem complicação nos seguintes bairros:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
              {city.neighborhoods.map((bairro, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 flex items-center gap-2 font-bold shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{bairro}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Available in this city */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center">
              Serviços Prestados em {city.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
                <span className="text-xs font-bold text-cyan-800 uppercase">Linha Branca Domiciliar</span>
                <h3 className="text-xl font-extrabold text-slate-900">Conserto de Geladeiras</h3>
                <p className="text-slate-600 text-xs leading-relaxed">Troca de motor compressor, recarga de gás R134a/R600a, placas e degelo Frost Free no local em {city.name}.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
                <span className="text-xs font-bold text-cyan-800 uppercase">Lavanderia Residencial</span>
                <h3 className="text-xl font-extrabold text-slate-900">Conserto de Lava e Seca</h3>
                <p className="text-slate-600 text-xs leading-relaxed">Assistência para LG Direct Drive, Samsung EcoBubble e Electrolux com substituição de bombas, rolamentos e travas.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
                <span className="text-xs font-bold text-cyan-800 uppercase">Comercial & Industrial</span>
                <h3 className="text-xl font-extrabold text-slate-900">Câmaras Frias & Balcões</h3>
                <p className="text-slate-600 text-xs leading-relaxed">Manutenção preventiva e corretiva de refrigeração comercial para restaurantes e comércios em {city.name}.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <FaqAccordion />

          {/* Bottom Action */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-slate-200 rounded-3xl p-8 text-center space-y-4 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Precisa de Técnico em {city.name} Hoje?</h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto font-medium">
              Chame nossa equipe no WhatsApp. Orçamento transparente no local e garantia formal de 90 dias.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`${COMPANY_INFO.whatsappUrl}%20para%20atendimento%20em%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-md min-h-[48px] flex items-center justify-center"
              >
                Chamar no WhatsApp
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-6 py-4 rounded-2xl bg-white border border-slate-300 text-slate-900 font-bold text-sm sm:text-base flex items-center gap-2 shadow-xs min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                Ligar {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
