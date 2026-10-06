import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CITIES_DATA, CityLocalSEO, getNeighborhoodBySlug, normalizeSlug } from '../data/cities';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Clock, CheckCircle2, MessageCircle, Phone, ShieldCheck, Wrench, AlertCircle } from 'lucide-react';
import { trackContactClick } from '../utils/analytics';
import { PageHero, SectionHeader, TechCard, TechButton, TechFAQ } from '../components/TechUI';

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
    "image": COMPANY_INFO.ogImage,
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

  const cityFaqs = [
    {
      question: `Qual o valor da visita técnica em ${city.name}?`,
      answer: `O orçamento é avaliado e informado diretamente no local após verificação do aparelho. Caso aprovado, o valor da avaliação é abatido do conserto.`
    },
    {
      question: `Atendem no mesmo dia em ${matchedNeighborhood ? `Bairro ${matchedNeighborhood}` : city.name}?`,
      answer: `Sim, possuímos técnicos itinerantes que realizam atendimentos domiciliares em ${city.name} e municípios vizinhos de segunda a sábado.`
    },
    {
      question: `Qual a garantia do conserto de geladeira?`,
      answer: `Todos os serviços e peças substituídas contam com garantia legal por escrito de 90 dias e emissão de comprovante.`
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

      <main className="bg-[#F4F1EA] text-[#12324A] min-h-screen pb-16">
        
        {/* Page Hero */}
        <PageHero
          badge={`01 / COBERTURA ${city.name.toUpperCase()}`}
          title={matchedNeighborhood
            ? `Conserto de Geladeira no Bairro ${matchedNeighborhood} (${city.name})`
            : `Conserto de Geladeira em ${city.name} — Atendimento no Local`}
          subtitle={city.longDescription || city.customSnippet}
          breadcrumbs={[
            { label: "Regiões Atendidas", path: "/regioes-atendidas" },
            { label: city.name, path: canonicalUrl }
          ]}
          equipmentType="geladeira"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
          
          {/* Store Address Verification Banner for Navegantes */}
          {isNavegantesPage && (
            <TechCard stamped={true} className="bg-white border-2 border-[#12324A]">
              <div className="flex items-center gap-3 border-b border-[#12324A]/20 pb-4 mb-4">
                <div className="p-2.5 bg-[#BFE3F2] border border-[#12324A] text-[#12324A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#D9682B] font-bold block">BASE TÉCNICA PRINCIPAL</span>
                  <h2 className="text-xl font-bold font-display text-[#12324A]">Endereço Físico em Navegantes</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-[#12324A]">
                <div className="p-3 bg-[#F4F1EA] border border-[#12324A]/20">
                  <span className="text-[#12324A]/60 block text-[10px] uppercase">Endereço</span>
                  <strong className="font-bold">{COMPANY_INFO.address.full}</strong>
                </div>
                <div className="p-3 bg-[#F4F1EA] border border-[#12324A]/20">
                  <span className="text-[#12324A]/60 block text-[10px] uppercase">Horário</span>
                  <strong className="font-bold">{COMPANY_INFO.businessHours.weekdays}</strong>
                </div>
                <div className="p-3 bg-[#F4F1EA] border border-[#12324A]/20">
                  <span className="text-[#12324A]/60 block text-[10px] uppercase">Telefone / WhatsApp</span>
                  <strong className="text-[#16a34a] font-bold">{COMPANY_INFO.phone}</strong>
                </div>
              </div>
            </TechCard>
          )}

          {/* Diagnostic Methodology */}
          <div className="space-y-6">
            <SectionHeader
              step="02 / PROTOCOLO TÉCNICO"
              title={`Como Funciona Nosso Atendimento em ${city.name}`}
              subtitle="Procedimento técnico padronizado com laudo prévio antes de qualquer serviço."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  PASSO 01
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Inspeção In Loco</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed">
                  O técnico comparece à sua residência ou comércio com ferramental de medição digital (multímetro, termômetro e manifold) para identificar a falha.
                </p>
              </TechCard>

              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  PASSO 02
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Orçamento Transparente</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed">
                  Apresentamos o laudo com detalhamento exato das peças necessárias e valor total antes de iniciar qualquer serviço.
                </p>
              </TechCard>

              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  PASSO 03
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Garantia de 90 Dias</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed">
                  Instalação de peças qualificadas com comprovante por escrito de 90 dias, assegurando durabilidade e suporte técnico.
                </p>
              </TechCard>
            </div>
          </div>

          {/* Common Failures */}
          <div className="space-y-6">
            <SectionHeader
              step="03 / DEFEITOS RECORRENTES"
              title={`Defeitos Frequentes em ${city.name}`}
              subtitle="Trabalhamos com geladeiras Frost Free, Inverse, Side by Side, French Door e cervejeiras multimarcas."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonFaults.map((fault, i) => (
                <TechCard key={i} stamped={false}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-[#D9682B] font-bold">[{i + 1}]</span>
                    <h3 className="font-bold text-sm text-[#12324A] font-display">{fault.title}</h3>
                  </div>
                  <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed">
                    {fault.desc}
                  </p>
                </TechCard>
              ))}
            </div>
          </div>

          {/* Neighborhoods Coverage Card */}
          <div className="space-y-6">
            <SectionHeader
              step="04 / COBERTURA GEOGRÁFICA"
              title={`Bairros Atendidos em ${city.name}/${city.state}`}
              subtitle="Nossos técnicos realizam visitas no mesmo dia ou agendadas nos seguintes locais:"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {city.neighborhoods.map((bairro, idx) => (
                <div key={idx} className="p-3 bg-white border border-[#12324A]/30 rounded-[4px] font-mono text-xs font-bold text-[#12324A] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                  <span>{bairro}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <SectionHeader
              step="05 / DÚVIDAS LOCAIS"
              title="Perguntas Frequentes"
            />
            <TechFAQ items={cityFaqs} />
          </div>

          {/* Bottom Action */}
          <div className="bg-[#12324A] text-white p-8 border-2 border-[#12324A] rounded-[4px] shadow-stamped text-center space-y-4">
            <h2 className="text-2xl font-bold font-display text-white">Precisa de Técnico em {city.name}?</h2>
            <p className="text-[#BFE3F2] text-sm max-w-xl mx-auto font-sans">
              Fale com nossa equipe técnica pelo WhatsApp ou telefone. Avaliação no local com preço justo e garantia de 90 dias.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <TechButton
                variant="whatsapp"
                href={`${COMPANY_INFO.whatsappUrl}%20para%20atendimento%20em%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                location={`city_bottom_whatsapp_${city.slug}`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAMAR NO WHATSAPP</span>
              </TechButton>

              <TechButton
                variant="phone"
                href={`tel:${COMPANY_INFO.phoneClean}`}
                location={`city_bottom_phone_${city.slug}`}
              >
                <Phone className="w-4 h-4" />
                <span>LIGAR: {COMPANY_INFO.phone}</span>
              </TechButton>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};


