import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { CITIES_DATA, CityLocalSEO, getNeighborhoodBySlug, normalizeSlug } from '../data/cities';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Clock, CheckCircle2, MessageCircle, Calendar, Phone, ChevronRight, Navigation, ShieldCheck, DollarSign, ArrowRight } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';

interface CityLocalSeoViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const CityLocalSeoView: React.FC<CityLocalSeoViewProps> = ({ onOpenBookingModal }) => {
  const location = useLocation();

  // Normalize raw pathname
  const rawPath = decodeURIComponent(location.pathname).toLowerCase().replace(/\/$/, '');

  // Strip prefixes to find target slug
  const targetSlug = rawPath
    .replace(/^\/conserto-de-geladeira-em-/, '')
    .replace(/^\/conserto-de-geladeira-/, '')
    .replace(/^\/cidades\//, '')
    .replace(/^\/cidade\//, '')
    .replace(/^\/bairros\//, '')
    .replace(/^\/bairro\//, '')
    .replace(/^\/regioes\//, '')
    .replace(/^\/regiao\//, '')
    .replace(/^\/cidades/, '')
    .replace(/^\/cidade/, '')
    .replace(/^\/bairros/, '')
    .replace(/^\/bairro/, '')
    .replace(/^\/regioes/, '')
    .replace(/^\/regiao/, '')
    .replace(/^\//, '')
    .trim();

  const normalizedQuery = normalizeSlug(targetSlug);

  // 1. Check if slug matches a City directly
  let matchedCity: CityLocalSEO | undefined = CITIES_DATA.find(
    (c) => c.slug === targetSlug || normalizeSlug(c.slug) === normalizedQuery || normalizeSlug(c.name) === normalizedQuery
  );

  let matchedNeighborhood = '';
  let matchedNeighborhoodObj = null;

  // 2. If NO city matched, check if slug matches a Neighborhood
  if (!matchedCity && targetSlug) {
    const targetNbObj = getNeighborhoodBySlug(targetSlug);
    if (targetNbObj) {
      matchedCity = CITIES_DATA.find((c) => c.slug === targetNbObj.citySlug);
      matchedNeighborhood = targetNbObj.name;
      matchedNeighborhoodObj = targetNbObj;
    } else {
      for (const cityItem of CITIES_DATA) {
        const foundBairro = cityItem.neighborhoods.find(
          (n) => normalizeSlug(n) === normalizedQuery || normalizeSlug(n).includes(normalizedQuery)
        );
        if (foundBairro) {
          matchedCity = cityItem;
          matchedNeighborhood = foundBairro;
          break;
        }
      }
    }
  }

  // Fallback to Penha if no city found
  const city: CityLocalSEO = matchedCity || CITIES_DATA[0];

  const canonicalUrl = matchedNeighborhoodObj
    ? `/conserto-de-geladeira-${matchedNeighborhoodObj.slug}`
    : `/conserto-de-geladeira-${city.slug}`;

  const pageTitle = matchedNeighborhood
    ? `Conserto de Geladeira no Bairro ${matchedNeighborhood} (${city.name}/SC) | Assistência 24h`
    : `Conserto de Geladeira em ${city.name}/SC | Assistência Técnica em Domicílio`;

  const pageDescription = matchedNeighborhood
    ? `Atendimento domiciliar rápido no bairro ${matchedNeighborhood} em ${city.name}/SC. Conserto de geladeiras, lava e seca, freezers e câmaras frias com peças originais e garantia de 90 dias.`
    : (city.customSnippet || `Assistência técnica de geladeiras em ${city.name}/SC. Atendimento domiciliar nos bairros ${city.neighborhoods.slice(0, 4).join(', ')}. Orçamento no local com garantia formal.`);

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${COMPANY_INFO.name} - ${matchedNeighborhood ? `Bairro ${matchedNeighborhood}` : city.name}/${city.state}`,
    "image": COMPANY_INFO.assets.socialPreview,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates?.latitude || -26.7712,
      "longitude": city.coordinates?.longitude || -48.6475
    },
    "areaServed": {
      "@type": matchedNeighborhood ? "AdministrativeArea" : "City",
      "name": matchedNeighborhood ? `${matchedNeighborhood}, ${city.name}` : city.name
    },
    "description": pageDescription
  };

  const breadcrumbs = [
    { name: "Início", item: "/" },
    { name: "Regiões Atendidas", item: "/regioes-atendidas" },
    { name: city.name, item: `/conserto-de-geladeira-${city.slug}` }
  ];

  if (matchedNeighborhood) {
    breadcrumbs.push({
      name: `Bairro ${matchedNeighborhood}`,
      item: canonicalUrl
    });
  }

  return (
    <>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        schemas={[citySchema]}
        breadcrumbs={breadcrumbs}
        city={city.name}
        neighborhood={matchedNeighborhood}
      />

      <main className="bg-white text-slate-900 min-h-screen py-10 space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center space-x-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-cyan-800">Início</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <Link to="/regioes-atendidas" className="hover:text-cyan-800">Regiões Atendidas</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <Link to={`/conserto-de-geladeira-${city.slug}`} className="hover:text-cyan-800">{city.name}</Link>
            {matchedNeighborhood && (
              <>
                <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-cyan-800 font-bold">Bairro {matchedNeighborhood}</span>
              </>
            )}
          </nav>

          {/* City Hero Banner with Video Background */}
          <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 relative overflow-hidden">
            {/* Background Video Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 sm:opacity-85 scale-105"
              >
                <source src="https://img.supremasite.com.br/santa-catarina.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/80 text-xs font-bold uppercase flex items-center gap-1 backdrop-blur-md">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {matchedNeighborhood ? `Bairro ${matchedNeighborhood}` : city.name} / {city.state}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/80 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1 backdrop-blur-md">
                  <Navigation className="w-3 h-3 text-cyan-400" /> {city.distanceKm === 0 ? 'Sede Operacional' : `${city.distanceKm} km da sede`}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-700 text-xs font-bold flex items-center gap-1 backdrop-blur-md">
                  <Clock className="w-3 h-3 text-emerald-400" /> Chegada em ~{city.estimatedMinutes} min
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {matchedNeighborhood
                  ? `Conserto de Geladeira no Bairro ${matchedNeighborhood} (${city.name})`
                  : `Conserto de Geladeira em ${city.name} — Assistência Técnica em Domicílio`}
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-4xl">
                {city.longDescription || city.customSnippet}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}%20para%20atendimento%20em%20${encodeURIComponent(matchedNeighborhood ? `${matchedNeighborhood} - ${city.name}` : city.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base shadow-lg flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Solicitar Técnico em {matchedNeighborhood || city.name}</span>
                </a>

                <button
                  onClick={() => onOpenBookingModal(`Atendimento em ${matchedNeighborhood || city.name}`)}
                  className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
                >
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>Agendar Visita</span>
                </button>

                <Link
                  to="/precos"
                  className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
                >
                  <DollarSign className="w-5 h-5 text-cyan-400" />
                  <span>Ver Preços</span>
                </Link>
              </div>
            </div>
          </div>

          {/* City Highlights & Local Infrastructure */}
          {city.highlights && city.highlights.length > 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-700" />
                <span>Destaques da Nossa Cobertura em {city.name}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {city.highlights.map((hl, idx) => (
                  <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 flex items-center gap-2.5 font-medium shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Neighborhoods Coverage Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-cyan-700" />
              <span>Bairros Atendidos em {city.name}/{city.state}</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Sua casa ou comércio fica em {city.name}? Nossos técnicos realizam visitas diárias sem complicação nos seguintes bairros:
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
                <p className="text-slate-600 text-xs leading-relaxed">Troca de motor compressor Embraco, recarga de gás ecológico R134a/R600a, sensores e degelo Frost Free no local em {city.name}.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
                <span className="text-xs font-bold text-cyan-800 uppercase">Lavanderia Residencial</span>
                <h3 className="text-xl font-extrabold text-slate-900">Conserto de Lava e Seca</h3>
                <p className="text-slate-600 text-xs leading-relaxed">Assistência para LG Direct Drive, Samsung EcoBubble e Electrolux com substituição de bombas, amortecedores e placas.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
                <span className="text-xs font-bold text-cyan-800 uppercase">Comercial & Industrial</span>
                <h3 className="text-xl font-extrabold text-slate-900">Câmaras Frias & Balcões</h3>
                <p className="text-slate-600 text-xs leading-relaxed">Manutenção preventiva e corretiva de refrigeração comercial para restaurantes, peixarias e hotéis em {city.name}.</p>
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
