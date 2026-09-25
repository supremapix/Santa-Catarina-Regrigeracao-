import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CITIES_DATA, CityLocalSEO, getNeighborhoodBySlug, normalizeSlug } from '../data/cities';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Clock, CheckCircle2, MessageCircle, Calendar, Phone, ChevronRight, Navigation, ShieldCheck, DollarSign, Wrench, AlertCircle, Sparkles } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';
import { trackContactClick } from '../utils/analytics';

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

  // Fallback to Navegantes if navegantes in URL, or matched city
  const isNavegantesUrl = rawPath.includes('navegantes');
  const city: CityLocalSEO = matchedCity || (isNavegantesUrl ? CITIES_DATA.find(c => c.slug === 'navegantes')! : CITIES_DATA[0]);

  const canonicalUrl = matchedNeighborhoodObj
    ? `/conserto-de-geladeira-${matchedNeighborhoodObj.slug}`
    : city.slug === 'navegantes'
    ? `/conserto-de-geladeira-em-navegantes`
    : `/conserto-de-geladeira-${city.slug}`;

  const pageTitle = matchedNeighborhood
    ? `Conserto de Geladeira no Bairro ${matchedNeighborhood} (${city.name}) | SC Refrigeração`
    : city.slug === 'navegantes'
    ? `Conserto de Geladeira em Navegantes SC | SC Refrigeração`
    : `Conserto de Geladeira em ${city.name} SC | SC Refrigeração`;

  const pageDescription = matchedNeighborhood
    ? `Assistência técnica de geladeiras no bairro ${matchedNeighborhood} em ${city.name}/SC. Atendimento em domicílio com peças originais e garantia 90 dias.`
    : city.slug === 'navegantes'
    ? `Assistência técnica de geladeiras e refrigeradores em Navegantes/SC. Atendimento no local no Centro, Gravatá e Meia Praia com peças originais e garantia 90 dias.`
    : (city.customSnippet || `Assistência técnica de geladeiras, freezers e refrigeração em ${city.name} e região. Atendimento residencial e comercial com garantia de 90 dias.`);

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
      "streetAddress": `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.number}`,
      "addressLocality": city.name,
      "addressRegion": city.state,
      "postalCode": COMPANY_INFO.address.zipCode,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates?.latitude || COMPANY_INFO.geo.latitude,
      "longitude": city.coordinates?.longitude || COMPANY_INFO.geo.longitude
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
    { name: city.name, item: city.slug === 'navegantes' ? '/conserto-de-geladeira-em-navegantes' : `/conserto-de-geladeira-${city.slug}` }
  ];

  if (matchedNeighborhood) {
    breadcrumbs.push({
      name: `Bairro ${matchedNeighborhood}`,
      item: canonicalUrl
    });
  }

  const isNavegantesPage = city.slug === 'navegantes';

  const commonFaults = [
    {
      title: "Geladeira Não Gela a Parte de Baixo",
      desc: "Falha clássica em sistemas Frost Free provocada por queima da resistência de degelo, sensor de temperatura com valor ôhmico alterado, bimetal inoperante ou duto de circulação obstruído por gelo."
    },
    {
      title: "Motor / Compressor Não Liga ou Fica Estalando",
      desc: "Problema no conjunto de partida (relé PTC e protetor térmico) ou queima interna do compressor. Realizamos troca no local por compressores novos Embraco com vácuo e carga de gás por peso."
    },
    {
      title: "Vazamento de Gás Refrigerante (R134a / R600a)",
      desc: "Perda gradual de rendimento térmico. Nossos técnicos localizam a microfissura na tubulação, executam brasagem profissional, pressurização com nitrogênio e recarga precisa de fluido ecológico."
    },
    {
      title: "Placa Eletrônica ou Inverter Inoperante",
      desc: "Oscilações na rede elétrica local podem queimar placas de potência ou inversores de frequência. Efetuamos diagnóstico com multímetro e substituição por placas originais configuradas de fábrica."
    },
    {
      title: "Borracha de Vedação Desgastada pela Maresia",
      desc: "Entrada contínua de ar quente provoca suor interno e formação excessiva de gelo. Efetuamos ajuste magnético e troca de gaxetas sob medida com excelente isolamento térmico."
    }
  ];

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
            <Link to={city.slug === 'navegantes' ? '/conserto-de-geladeira-em-navegantes' : `/conserto-de-geladeira-${city.slug}`} className="hover:text-cyan-800">{city.name}</Link>
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
                {isNavegantesPage && (
                  <span className="px-3.5 py-1.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-700 text-xs font-bold flex items-center gap-1 backdrop-blur-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Loja Física: Rua Ver. Nereu Liberato Nunes, 191
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-700 text-xs font-bold flex items-center gap-1 backdrop-blur-md">
                  <Clock className="w-3 h-3 text-emerald-400" /> Atendimento Domiciliar e Comercial
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {matchedNeighborhood
                  ? `Conserto de Geladeira no Bairro ${matchedNeighborhood} (${city.name})`
                  : `Conserto de Geladeira em ${city.name} — Assistência Técnica no Local`}
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-4xl">
                {city.longDescription || city.customSnippet}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}%20para%20atendimento%20em%20${encodeURIComponent(matchedNeighborhood ? `${matchedNeighborhood} - ${city.name}` : city.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContactClick({
                    channel: 'whatsapp',
                    location: `city_hero_${city.slug}`,
                    label: `WhatsApp ${city.name}`
                  })}
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
                  <span>Tabela de Preços</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Store Address Verification Banner for Navegantes */}
          {isNavegantesPage && (
            <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-slate-900 border border-cyan-800/60 rounded-3xl p-6 sm:p-8 text-white space-y-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-600/30 border border-cyan-500/40 rounded-2xl text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white">Endereço Físico em Navegantes</h2>
                  <p className="text-xs sm:text-sm text-cyan-200">Localização e suporte técnico oficial da Santa Catarina Refrigeração</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm">
                <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl">
                  <span className="text-slate-400 block text-xs font-semibold mb-1">Endereço Completo</span>
                  <strong className="text-white font-bold">{COMPANY_INFO.address.full}</strong>
                </div>
                <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl">
                  <span className="text-slate-400 block text-xs font-semibold mb-1">Horário de Atendimento</span>
                  <strong className="text-white font-bold">{COMPANY_INFO.businessHours.weekdays}</strong>
                </div>
                <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl">
                  <span className="text-slate-400 block text-xs font-semibold mb-1">Telefone & WhatsApp Direto</span>
                  <strong className="text-emerald-400 font-bold">{COMPANY_INFO.phone}</strong>
                </div>
              </div>
            </div>
          )}

          {/* Diagnostic Methodology & Technical Protocol */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-100 text-cyan-800 rounded-xl">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Como Funciona Nosso Diagnóstico em {city.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Procedimento técnico padronizado com transparência antes de qualquer conserto
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="px-2.5 py-1 bg-cyan-50 text-cyan-800 rounded font-black text-xs">Etapa 1</span>
                <h3 className="font-bold text-slate-900 text-sm">Inspeção Técnica no Local</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  O técnico comparece à sua residência ou comércio com ferramental de medição digital (multímetro, termômetro infravermelho e manifold) para identificar a causa raiz do problema.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="px-2.5 py-1 bg-cyan-50 text-cyan-800 rounded font-black text-xs">Etapa 2</span>
                <h3 className="font-bold text-slate-900 text-sm">Orçamento Prévio e Transparente</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Apresentamos o laudo com detalhamento exato das peças necessárias e valor total antes de iniciar qualquer serviço. Nenhum conserto é feito sem a sua aprovação formal.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="px-2.5 py-1 bg-cyan-50 text-cyan-800 rounded font-black text-xs">Etapa 3</span>
                <h3 className="font-bold text-slate-900 text-sm">Reparo com Peças e Garantia de 90 Dias</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Instalação de peças originais com nota e certificado de garantia por escrito de 90 dias, assegurando durabilidade e suporte técnico pós-atendimento.
                </p>
              </div>
            </div>
          </div>

          {/* Common Failures Repaired in this Region */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-cyan-700" />
              <span>Principais Tipos de Defeito Atendidos em {city.name}</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Trabalhamos com refrigeradores Frost Free, Inverse, Side by Side, French Door e cervejeiras multimarcas (Brastemp, Electrolux, Consul, Samsung, LG, Panasonic e Midea):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonFaults.map((fault, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm">{fault.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {fault.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* City Highlights */}
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
              Sua casa ou comércio fica em {city.name}? Nossos técnicos realizam visitas no mesmo dia ou agendadas nos seguintes bairros:
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

          {/* FAQ */}
          <FaqAccordion />

          {/* Bottom Action */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-slate-200 rounded-3xl p-8 text-center space-y-4 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Precisa de Técnico em {city.name}?</h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto font-medium">
              Fale com nossa equipe técnica pelo WhatsApp ou telefone. Avaliação no local com preço transparente e garantia de 90 dias.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`${COMPANY_INFO.whatsappUrl}%20para%20atendimento%20em%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick({
                  channel: 'whatsapp',
                  location: `city_bottom_whatsapp_${city.slug}`,
                  label: `WhatsApp ${city.name}`
                })}
                className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-md min-h-[48px] flex items-center justify-center"
              >
                Chamar no WhatsApp
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                onClick={() => trackContactClick({
                  channel: 'phone',
                  location: `city_bottom_call_${city.slug}`,
                  label: `Telefone ${city.name}`
                })}
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

