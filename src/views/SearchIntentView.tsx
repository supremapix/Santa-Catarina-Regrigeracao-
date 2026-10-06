import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { SEARCH_INTENTS } from '../data/searchIntents';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { MessageCircle, Phone, AlertTriangle, Zap, Wrench, Check } from 'lucide-react';
import { PageHero, SectionHeader, TechCard, TechButton } from '../components/TechUI';

interface SearchIntentViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
  intentSlugParam?: string;
}

export const SearchIntentView: React.FC<SearchIntentViewProps> = ({
  onOpenBookingModal,
  intentSlugParam,
}) => {
  const { slug } = useParams<{ slug?: string }>();
  const location = useLocation();
  const pathSlug = location.pathname.replace(/^\/+|\/+$/g, '').replace(/^problemas\//, '');

  const intent = SEARCH_INTENTS.find(
    (item) => item.slug === intentSlugParam || item.slug === slug || item.slug === pathSlug
  ) || SEARCH_INTENTS[0];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": intent.title,
    "serviceType": intent.title,
    "image": COMPANY_INFO.ogImage,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "address": COMPANY_INFO.address.full
    },
    "areaServed": "Navegantes, Penha, Balneário Piçarras, Itajaí, Balneário Camboriú e Litoral de SC",
    "description": intent.metaDescription,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Solução de Problemas de Refrigeração",
      "itemListElement": intent.stepsToSolve.map((step) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": step
        }
      }))
    }
  };

  const breadcrumbItems = [
    { name: "Início", item: COMPANY_INFO.subdomainUrl },
    { name: "Problemas Comuns", item: `${COMPANY_INFO.subdomainUrl}/#problemas-comuns` },
    { name: intent.title, item: `${COMPANY_INFO.subdomainUrl}/${intent.slug}` }
  ];

  return (
    <>
      <EnhancedSEO
        title={intent.metaTitle}
        description={intent.metaDescription}
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/${intent.slug}`}
        ogImage={COMPANY_INFO.assets.socialPreview}
        schemas={[serviceSchema]}
        breadcrumbs={breadcrumbItems}
      />

      <main className="bg-[#F4F1EA] text-[#12324A] min-h-screen pb-16 text-left">
        
        {/* Page Hero */}
        <PageHero
          badge={`01 / DIAGNÓSTICO: ${intent.badge.toUpperCase()}`}
          title={intent.h1}
          subtitle={intent.pain}
          breadcrumbs={[
            { label: "Problemas Comuns", path: "/#problemas-comuns" },
            { label: intent.title, path: `/${intent.slug}` }
          ]}
          equipmentType="geladeira"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          
          {/* Diagnostic Triad Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TechCard stamped={true} className="bg-white border-2 border-[#12324A] space-y-2">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#D9682B] uppercase">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Sintoma Observado:</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-[#12324A]/90 leading-relaxed">
                {intent.pain}
              </p>
            </TechCard>

            <TechCard stamped={true} className="bg-white border-2 border-[#12324A] space-y-2">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#12324A] uppercase">
                <Zap className="w-4 h-4 text-[#D9682B] shrink-0" />
                <span>Causa Frequente:</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-[#12324A]/90 leading-relaxed">
                {intent.rootCause}
              </p>
            </TechCard>

            <TechCard stamped={true} className="bg-white border-2 border-[#12324A] space-y-2">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#16a34a] uppercase">
                <Check className="w-4 h-4 shrink-0" />
                <span>Como Resolver:</span>
              </div>
              <p className="text-xs sm:text-sm font-sans font-bold text-[#12324A] leading-relaxed">
                {intent.effectiveSolution}
              </p>
            </TechCard>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Urgency Warning Banner */}
              {intent.urgencyWarning && (
                <div className="bg-amber-50 border-2 border-[#12324A] p-4 rounded-[4px] shadow-stamped flex items-start gap-3 text-xs sm:text-sm">
                  <AlertTriangle className="w-5 h-5 text-[#D9682B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-mono text-xs text-[#D9682B] uppercase block mb-1">
                      ORIENTAÇÃO TÉCNICA IMPORTANTE:
                    </strong>
                    <span className="font-sans text-[#12324A] leading-relaxed">{intent.urgencyWarning}</span>
                  </div>
                </div>
              )}

              {/* Causes Hierarchy */}
              {intent.causesList && intent.causesList.length > 0 && (
                <div className="space-y-4">
                  <SectionHeader
                    step="02 / ANÁLISE DE CAUSAS"
                    title="Causas Prováveis no Sistema Frigorífico"
                  />
                  <div className="space-y-3">
                    {intent.causesList.map((c, idx) => (
                      <TechCard key={idx} stamped={false}>
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-sm text-[#12324A] font-display">
                            {idx + 1}. {c.title}
                          </h3>
                          <span className="font-mono text-[10px] font-bold text-[#D9682B] bg-[#F4F1EA] px-2 py-0.5 border border-[#12324A]/20">
                            {c.level}
                          </span>
                        </div>
                        <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed">{c.desc}</p>
                      </TechCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Before Calling Checklist */}
              {intent.beforeCallingChecklist && intent.beforeCallingChecklist.length > 0 && (
                <div className="space-y-4">
                  <SectionHeader
                    step="03 / CHECKLIST PRÉVIO"
                    title="O Que Verificar Antes de Acionar o Técnico"
                  />
                  <TechCard stamped={true}>
                    <ul className="space-y-2">
                      {intent.beforeCallingChecklist.map((chk, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#12324A]">
                          <span className="text-[#16a34a] font-mono font-bold">✓</span>
                          <span>{chk}</span>
                        </li>
                      ))}
                    </ul>
                  </TechCard>
                </div>
              )}

              {/* Steps to Solve */}
              <div className="space-y-4">
                <SectionHeader
                  step="04 / PROTOCOLO DE CONSERTO"
                  title="Como o Técnico Resolve no Local"
                />
                <div className="space-y-3">
                  {intent.stepsToSolve.map((step, idx) => (
                    <TechCard key={idx} stamped={false}>
                      <div className="flex items-start gap-3">
                        <span className="font-mono font-bold text-xs bg-[#12324A] text-white px-2 py-0.5 shrink-0">
                          0{idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm font-sans text-[#12324A] leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </div>
                    </TechCard>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Trust Card (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <TechCard stamped={true} className="bg-white border-2 border-[#12324A] sticky top-24 space-y-4">
                <div className="border-b border-[#12324A]/20 pb-3">
                  <span className="font-mono text-[10px] text-[#D9682B] font-bold uppercase block mb-1">
                    SUPORTE EM DOMICÍLIO
                  </span>
                  <h3 className="font-bold text-lg text-[#12324A] font-display">
                    Garantia de 90 Dias com Nota
                  </h3>
                </div>

                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed">
                  Conserto no local com peças qualificadas e garantia formal por escrito.
                </p>

                <div className="space-y-2 font-mono text-xs text-[#12324A]">
                  <p>✓ Orçamento no local antes do conserto</p>
                  <p>✓ Atendimento em Navegantes e Região</p>
                  <p>✓ Segunda a Sábado das 08h às 18h</p>
                </div>

                <div className="space-y-2 pt-2">
                  <TechButton
                    variant="whatsapp"
                    href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(intent.prefillMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center"
                    location="intent_sidebar_whatsapp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>CHAMAR NO WHATSAPP</span>
                  </TechButton>

                  <TechButton
                    variant="phone"
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="w-full justify-center"
                    location="intent_sidebar_phone"
                  >
                    <Phone className="w-4 h-4" />
                    <span>LIGAR: {COMPANY_INFO.phone}</span>
                  </TechButton>
                </div>
              </TechCard>
            </div>

          </div>

        </div>
      </main>
    </>
  );
};
