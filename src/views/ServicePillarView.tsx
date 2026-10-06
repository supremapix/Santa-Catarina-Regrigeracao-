import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PILLAR_SERVICES } from '../data/services';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { PageHero, SectionHeader, TechCard, SpecList, TechFAQ, TechButton } from '../components/TechUI';
import { HowItWorks } from '../components/HowItWorks';
import { CoverageMapSection } from '../components/CoverageMapSection';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

interface ServicePillarViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
  serviceIdParam?: string;
}

export const ServicePillarView: React.FC<ServicePillarViewProps> = ({
  onOpenBookingModal,
  serviceIdParam,
}) => {
  const { slug } = useParams<{ slug?: string }>();

  // Find matching service
  const service = PILLAR_SERVICES.find(
    (s) => s.id === serviceIdParam || s.slug === slug || s.slug === `conserto-de-${slug}`
  ) || PILLAR_SERVICES[0];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.title,
    "image": COMPANY_INFO.ogImage,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "address": COMPANY_INFO.address.full
    },
    "areaServed": "Penha, Balneário Piçarras, Itajaí, Balneário Camboriú, Navegantes e Litoral de SC",
    "description": service.fullDescription,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Refrigeração",
      "itemListElement": service.repairsExecuted.map((rep) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": rep
        }
      }))
    }
  };

  const breadcrumbItems = [
    { name: "Início", item: "/" },
    { name: "Serviços", item: "/#servicos" },
    { name: service.shortTitle, item: `/${service.slug}` }
  ];

  const defectSpecList = service.commonDefects.map((defect, i) => ({
    title: defect,
    desc: service.repairsExecuted[i] || 'Avaliação técnica com multímetro e teste de pressão no local com garantia de 90 dias.'
  }));

  const serviceFaqs = service.faqs || [
    {
      question: `Como funciona o conserto de ${service.shortTitle} no local?`,
      answer: `O técnico vai até seu imóvel, testa os componentes elétricos e mecânicos e apresenta o orçamento antes de iniciar o reparo. A maioria dos consertos é concluída na primeira visita.`
    },
    {
      question: 'Qual o prazo de garantia?',
      answer: 'Oferecemos 90 dias de garantia por escrito em todas as peças e serviços prestados.'
    }
  ];

  const getEquipmentType = () => {
    if (service.slug.includes('lava') || service.slug.includes('seca')) return 'lava-e-seca';
    if (service.slug.includes('cervejeira') || service.slug.includes('balcao')) return 'cervejeira';
    if (service.slug.includes('camara') || service.slug.includes('reefer')) return 'camara-fria';
    return 'geladeira';
  };

  return (
    <>
      <EnhancedSEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={`/${service.slug}`}
        ogImage={COMPANY_INFO.ogImage}
        schemas={[serviceSchema]}
        breadcrumbs={breadcrumbItems}
      />

      <main className="bg-[#F4F1EA] text-[#12324A] min-h-screen pb-16">
        {/* Page Hero */}
        <PageHero
          badge={`01 / ${service.category.toUpperCase()}`}
          title={service.h1}
          subtitle={service.fullDescription}
          breadcrumbs={[{ label: service.shortTitle, path: `/${service.slug}` }]}
          equipmentType={getEquipmentType()}
        />

        {/* Section 02 / Defeitos que a gente resolve */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
          <SectionHeader
            step="02 / Defeitos que a gente resolve"
            title={`Sintomas frequentes em ${service.shortTitle}`}
            subtitle="Análise com multímetro digital e ferramentas técnicas no próprio imóvel."
          />

          <SpecList items={defectSpecList} />
        </section>

        {/* Section 03 / Como funciona o atendimento */}
        <HowItWorks />

        {/* Section 04 / Perguntas frequentes */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
          <SectionHeader
            step="04 / Perguntas frequentes"
            title={`Dúvidas sobre o conserto de ${service.shortTitle}`}
          />

          <TechFAQ items={serviceFaqs} />
        </section>

        {/* Section 05 / Assistência Especializada por Fabricante */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
          <SectionHeader
            step="05 / Marcas e modelos"
            title="Marcas atendidas em domicílio"
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: "Brastemp", link: "/assistencia-tecnica-geladeira-brastemp" },
              { name: "Electrolux", link: "/assistencia-tecnica-geladeira-electrolux" },
              { name: "Consul", link: "/assistencia-tecnica-geladeira-consul" },
              { name: "Samsung Inverter", link: "/assistencia-tecnica-geladeira-samsung" },
              { name: "LG Inverter", link: "/assistencia-tecnica-geladeira-lg" },
              { name: "Panasonic Econavi", link: "/assistencia-tecnica-geladeira-panasonic" },
              { name: "Midea Quattro", link: "/assistencia-tecnica-geladeira-midea" },
              { name: "Tabela de Preços", link: "/precos" }
            ].map((b, i) => (
              <TechCard key={i} stamped={true} hoverable={true} className="text-center p-3">
                <Link to={b.link} className="font-mono font-bold text-xs text-[#12324A] hover:text-[#D9682B] block">
                  {b.name} →
                </Link>
              </TechCard>
            ))}
          </div>
        </section>

        {/* Section 06 / Onde Atendemos */}
        <CoverageMapSection />

        {/* Final CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="bg-[#12324A] text-white p-8 sm:p-10 border-2 border-[#12324A] shadow-stamped rounded-[4px] text-center space-y-4">
            <span className="font-mono text-xs text-[#BFE3F2] font-bold uppercase tracking-wider block">
              07 / ATENDIMENTO EM DOMICÍLIO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display">
              Precisa de conserto para seu {service.shortTitle}?
            </h2>
            <p className="text-[#BFE3F2] text-sm sm:text-base max-w-xl mx-auto font-sans">
              Atendemos Navegantes, Penha, Balneário Piçarras, Itajaí, Balneário Camboriú e região.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <TechButton
                variant="whatsapp"
                href={`${COMPANY_INFO.whatsappUrl}%20-%20Conserto%20de%20${encodeURIComponent(service.shortTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>CHAMAR TÉCNICO NO WHATSAPP</span>
              </TechButton>
              <TechButton variant="phone" href={`tel:${COMPANY_INFO.phoneClean}`}>
                <Phone className="w-4 h-4 shrink-0" />
                <span>LIGAR: {COMPANY_INFO.phone}</span>
              </TechButton>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
