import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Phone, MessageCircle, AlertTriangle, Cpu, Wrench } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { BRAND_DETAILS, getBrandDetailBySlug } from '../data/brands';
import { COMPANY_INFO } from '../data/company';
import { PageHero, SectionHeader, TechCard, TechButton, TechFAQ, TechTable } from '../components/TechUI';

interface BrandDetailViewProps {
  onOpenBookingModal: (serviceName?: string) => void;
  brandSlugParam?: string;
}

export const BrandDetailView: React.FC<BrandDetailViewProps> = ({ onOpenBookingModal, brandSlugParam }) => {
  const location = useLocation();
  const slugFromPath = location.pathname.replace(/^\/+|\/+$/g, '');
  const slug = brandSlugParam || slugFromPath || 'assistencia-tecnica-geladeira-brastemp';
  const brand = getBrandDetailBySlug(slug) || BRAND_DETAILS[0];

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12324A] pb-16">
      <EnhancedSEO
        title={brand.metaTitle}
        description={brand.metaDescription}
        canonicalUrl={`/${brand.slug}`}
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Marcas Atendidas", item: "/#marcas" },
          { name: brand.brandName, item: `/${brand.slug}` }
        ]}
      />

      {/* Page Hero */}
      <PageHero
        badge={`01 / MARCA ${brand.brandName.toUpperCase()}`}
        title={brand.h1}
        subtitle="Conserto rápido em domicílio com peças de procedência, diagnóstico de precisão e garantia de 90 dias com nota."
        breadcrumbs={[
          { label: "Marcas", path: "/#marcas" },
          { label: brand.brandName, path: `/${brand.slug}` }
        ]}
        equipmentType="geladeira"
      />

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <TechCard stamped={true}>
              <SectionHeader
                step="02 / ESPECIFICAÇÃO"
                title={`Especialistas em Refrigeração ${brand.brandName}`}
                subtitle={brand.description}
              />

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-bold text-[#D9682B] uppercase tracking-wider mb-3">
                    MODELOS {brand.brandName.toUpperCase()} ATENDIDOS:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#BFE3F2]/20 p-4 border border-[#12324A]/20 rounded-[4px]">
                    {brand.commonModels.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-sans text-[#12324A]">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold text-[#12324A] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#D9682B]" /> TECNOLOGIAS DOMINADAS:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {brand.technologies.map((t, i) => (
                      <span key={i} className="text-xs font-mono font-bold px-2.5 py-1 bg-white text-[#12324A] border border-[#12324A]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TechCard>

            {/* Common Failures and Solutions */}
            <div className="space-y-4">
              <SectionHeader
                step="03 / DEFEITOS RECORRENTES"
                title={`Problemas Frequentes em ${brand.brandName}`}
              />

              <div className="space-y-3">
                {brand.commonFailures.map((cf, i) => (
                  <TechCard key={i} stamped={false}>
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                        0{i + 1}
                      </span>
                      <div className="space-y-1">
                        <h3 className="font-bold text-sm text-[#12324A] font-display">{cf.problem}</h3>
                        <p className="text-xs text-[#12324A]/80 font-sans">
                          <strong className="font-mono text-[#D9682B]">CAUSA TÉCNICA:</strong> {cf.cause}
                        </p>
                        <p className="text-xs text-[#16a34a] font-mono font-bold flex items-center gap-1 pt-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> SOLUÇÃO: {cf.solution}
                        </p>
                      </div>
                    </div>
                  </TechCard>
                ))}
              </div>
            </div>

            {/* Error Codes Table */}
            {brand.errorCodes && brand.errorCodes.length > 0 && (
              <div className="space-y-4">
                <SectionHeader
                  step="04 / DIAGNÓSTICO DIGITAL"
                  title={`Tabela de Códigos de Erro ${brand.brandName}`}
                  subtitle="Verifique o código exibido no painel do seu aparelho antes de acionar o técnico."
                />

                <TechTable
                  headers={['CÓDIGO', 'SIGNIFICADO / DIAGNÓSTICO', 'AÇÃO RECOMENDADA']}
                  rows={brand.errorCodes.map((ec) => [
                    <span className="font-mono font-bold text-[#D9682B]">{ec.code}</span>,
                    ec.meaning,
                    ec.solution
                  ])}
                />
              </div>
            )}

            {/* FAQs */}
            <div className="space-y-4">
              <SectionHeader
                step="05 / DÚVIDAS TÉCNICAS"
                title={`Perguntas Frequentes — ${brand.brandName}`}
              />
              <TechFAQ items={brand.faqs} />
            </div>

          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <TechCard stamped={true} className="sticky top-24 bg-white border-2 border-[#12324A]">
              <div className="border-b border-[#12324A]/20 pb-3 mb-4">
                <span className="font-mono text-[10px] text-[#D9682B] font-bold uppercase tracking-wider block">
                  ATENDIMENTO DIRETO
                </span>
                <h3 className="font-bold text-lg text-[#12324A] font-display">
                  Técnico {brand.brandName}
                </h3>
              </div>

              <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed mb-5">
                Mande o modelo ou uma foto do seu aparelho pelo WhatsApp. Passamos o diagnóstico prévio sem compromisso.
              </p>

              <div className="space-y-3">
                <TechButton
                  variant="whatsapp"
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center"
                  location="brand_sidebar_whatsapp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CHAMAR NO WHATSAPP</span>
                </TechButton>

                <TechButton
                  variant="phone"
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="w-full justify-center"
                  location="brand_sidebar_phone"
                >
                  <Phone className="w-4 h-4" />
                  <span>LIGAR AGORA</span>
                </TechButton>
              </div>

              <div className="mt-5 pt-4 border-t border-[#12324A]/20 font-mono text-[11px] text-[#12324A]/70 space-y-1.5">
                <p>✓ Garantia de 90 dias por escrito</p>
                <p>✓ Atendimento em Navegantes e Região</p>
                <p>✓ Peças de reposição qualificadas</p>
              </div>
            </TechCard>
          </div>

        </div>
      </section>
    </main>
  );
};
