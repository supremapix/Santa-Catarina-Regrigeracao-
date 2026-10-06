import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMMERCIAL_SERVICES, getCommercialServiceBySlug } from '../data/commercial';
import { COMPANY_INFO } from '../data/company';
import { PageHero, SectionHeader, TechCard, SpecList, TechFAQ, TechButton } from '../components/TechUI';
import { HowItWorks } from '../components/HowItWorks';
import { CoverageMapSection } from '../components/CoverageMapSection';
import { MessageCircle, Phone } from 'lucide-react';

interface CommercialViewProps {
  onOpenBookingModal: (serviceName?: string) => void;
  serviceSlugParam?: string;
}

export const CommercialView: React.FC<CommercialViewProps> = ({ onOpenBookingModal, serviceSlugParam }) => {
  const location = useLocation();
  const slugFromPath = location.pathname.replace(/^\/+|\/+$/g, '');
  const slug = serviceSlugParam || slugFromPath || 'refrigeracao-comercial';
  const service = getCommercialServiceBySlug(slug) || COMMERCIAL_SERVICES[0];

  const commercialSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": "Refrigeração Comercial e Industrial",
    "image": COMPANY_INFO.ogImage,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.number}`,
        "addressLocality": COMPANY_INFO.address.city,
        "addressRegion": COMPANY_INFO.address.state,
        "postalCode": COMPANY_INFO.address.zipCode,
        "addressCountry": "BR"
      }
    },
    "areaServed": "Litoral Norte e Vale do Itajaí - SC",
    "description": service.description
  };

  const benefitList = service.benefits.map((b, i) => ({
    title: b,
    desc: 'Assistência técnica preventiva e corretiva com garantia por escrito de 90 dias.'
  }));

  const commercialFaqs = [
    {
      question: 'Vocês atendem comércios em caso de perda de temperatura?',
      answer: 'Sim, realizamos atendimento prioritário para supermercados, restaurantes, peixarias e padarias com perda de temperatura no estoque.'
    },
    {
      question: 'Fornecem nota técnica e contrato PMOC?',
      answer: 'Emitimos laudo técnico, nota fiscal e formulamos o plano de manutenção PMOC conforme exigência da Anvisa.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12324A] pb-16">
      <EnhancedSEO
        title="Refrigeração Comercial em SC | SC Refrigeração"
        description="Assistência técnica especializada em refrigeração comercial para restaurantes, supermercados, hotéis e peixarias no Litoral de SC. Garantia de 90 dias e nota."
        canonicalUrl={`/${service.slug}`}
        schemas={[commercialSchema]}
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Comercial & B2B", item: "/refrigeracao-comercial" },
          { name: service.title, item: `/${service.slug}` }
        ]}
      />

      {/* Page Hero */}
      <PageHero
        badge={`01 / ${service.badge.toUpperCase()}`}
        title={service.h1}
        subtitle={service.summary}
        breadcrumbs={[{ label: "Refrigeração Comercial", path: "/refrigeracao-comercial" }]}
        equipmentType="camara-fria"
      />

      {/* Section 02 / Benefícios e Soluções B2B */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        <SectionHeader
          step="02 / Especialidades comerciais"
          title={service.title}
          subtitle="Manutenção especializada para equipamentos de refrigeração que não podem parar."
        />

        <SpecList items={benefitList} />
      </section>

      {/* Section 03 / Outros Serviços Comerciais */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        <SectionHeader
          step="03 / Outras modalidades"
          title="Equipamentos comerciais atendidos"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMMERCIAL_SERVICES.map((cp, idx) => (
            <TechCard key={idx} stamped={true} hoverable={true} className="flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="font-mono text-[10px] font-bold text-[#D9682B] uppercase">{cp.badge}</span>
                <h3 className="text-lg font-extrabold text-[#12324A] font-display">{cp.title}</h3>
                <p className="text-xs text-[#12324A]/80 font-sans">{cp.description}</p>
              </div>

              <div className="pt-3 border-t border-[#12324A]/20">
                <Link to={`/${cp.slug}`} className="font-mono text-xs font-bold text-[#12324A] hover:text-[#D9682B]">
                  Ver detalhes de {cp.title} →
                </Link>
              </div>
            </TechCard>
          ))}
        </div>
      </section>

      {/* Section 04 / Como Funciona */}
      <HowItWorks />

      {/* Section 05 / Perguntas Frequentes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        <SectionHeader
          step="05 / Perguntas frequentes"
          title="Dúvidas sobre manutenção B2B e PMOC"
        />

        <TechFAQ items={commercialFaqs} />
      </section>

      {/* Section 06 / Onde Atendemos */}
      <CoverageMapSection />

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#12324A] text-white p-8 sm:p-10 border-2 border-[#12324A] shadow-stamped rounded-[4px] text-center space-y-4">
          <span className="font-mono text-xs text-[#BFE3F2] font-bold uppercase tracking-wider block">
            07 / ATENDIMENTO B2B
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display">
            Precisa de suporte comercial urgente?
          </h2>
          <p className="text-[#BFE3F2] text-sm sm:text-base max-w-xl mx-auto font-sans">
            Atendimento para supermercados, peixarias, restaurantes e hotéis em Navegantes, Penha, Itajaí e região.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <TechButton variant="whatsapp" href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
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
  );
};

