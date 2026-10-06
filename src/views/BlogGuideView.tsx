import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { MessageCircle, Phone } from 'lucide-react';
import { PageHero, SectionHeader, TechCard, TechButton } from '../components/TechUI';

interface BlogGuideViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const BlogGuideView: React.FC<BlogGuideViewProps> = ({ onOpenBookingModal }) => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Lava e Seca em Penha: Guia Completo — Uso Residencial, Lavanderias e Onde Consertar",
    "description": "Guia informativo completo sobre o impacto da umidade litorânea na secagem de roupas, comparativo lavanderia vs lava e seca própria, cuidados com sabão e quando acionar o conserto em Penha e região.",
    "image": COMPANY_INFO.assets.socialPreview,
    "author": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.subdomainUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": COMPANY_INFO.assets.logo
      }
    },
    "datePublished": "2026-07-30",
    "dateModified": "2026-07-30",
    "mainEntityOfPage": `${COMPANY_INFO.subdomainUrl}/blog/lava-e-seca-penha-guia-completo`
  };

  const breadcrumbs = [
    { name: "Início", item: COMPANY_INFO.subdomainUrl },
    { name: "Blog", item: `${COMPANY_INFO.subdomainUrl}/blog/lava-e-seca-penha-guia-completo` },
    { name: "Guia Completo Lava e Seca", item: `${COMPANY_INFO.subdomainUrl}/blog/lava-e-seca-penha-guia-completo` }
  ];

  return (
    <>
      <EnhancedSEO
        title="Lava e Seca em Penha: Guia Completo de Uso, Economia e Conserto"
        description="Guia completo sobre Lava e Seca em Penha e região. Saiba como a umidade litorânea afeta suas roupas, comparativo com lavanderias self-service, dicas de sabão e onde consertar."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/blog/lava-e-seca-penha-guia-completo`}
        schemas={[blogPostingSchema]}
        breadcrumbs={breadcrumbs}
      />

      <main className="bg-[#F4F1EA] text-[#12324A] min-h-screen pb-16 text-left">
        
        {/* Page Hero */}
        <PageHero
          badge="01 / GUIA LOCAL PENHA SC"
          title="Lava e Seca em Penha: Guia Completo de Uso e Conservação"
          subtitle="Entenda o impacto da maresia e umidade da praia na secagem de roupas e saiba como prevenir falhas mecânicas."
          breadcrumbs={[
            { label: "Blog", path: "/blog" },
            { label: "Guia Lava e Seca Penha", path: "/blog/lava-e-seca-penha-guia-completo" }
          ]}
          equipmentType="lava-e-seca"
        />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
          
          {/* Section 1 */}
          <div className="space-y-4">
            <SectionHeader
              step="02 / CONDIÇÕES CLIMÁTICAS"
              title="1. O Impacto da Umidade Litorânea nas Roupas"
            />
            <p className="font-sans text-sm sm:text-base text-[#12324A]/90 leading-relaxed">
              Quem mora ou possui imóvel de temporada em cidades litorâneas como Penha, Balneário Piçarras, Barra Velha e Navegantes conhece os desafios da umidade do ar. Em períodos de chuvas ou brisa marítima, a umidade na costa catarinense supera frequentemente os 85%.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#12324A]/90 leading-relaxed">
              Nesse cenário, estender roupas no varal tradicional pode levar dias. A umidade constante favorece mofo e odores desagradáveis no tecido, tornando a Lava e Seca uma aliada essencial no litoral.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <SectionHeader
              step="03 / ANÁLISE COMPARATIVA"
              title="2. Lavanderia Self-Service vs. Equipamento em Casa"
            />
            <TechCard stamped={true} className="space-y-3 bg-white border-2 border-[#12324A]">
              <span className="font-mono text-xs font-bold text-[#D9682B] uppercase block">
                CUSTO-BENEFÍCIO NO LITORAL DE SANTA CATARINA:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#12324A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D9682B] font-mono font-bold">•</span>
                  <span><strong>Lavanderias Comerciais:</strong> O custo por ciclo varia entre R$ 30 e R$ 45. Para uma família que lava 4 vezes por semana, o gasto mensal supera R$ 500.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16a34a] font-mono font-bold">•</span>
                  <span><strong>Lava e Seca Própria:</strong> Conforto total em casa com custo estimado de R$ 2,50 a R$ 4,00 por ciclo em energia e água com motores Inverter.</span>
                </li>
              </ul>
            </TechCard>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <SectionHeader
              step="04 / MANUTENÇÃO PREVENTIVA"
              title="3. Hábitos para Aumentar a Durabilidade"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <TechCard stamped={false} className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#D9682B]">DICA 01</span>
                <h3 className="font-bold text-sm text-[#12324A] font-display">Sabão Líquido</h3>
                <p className="text-xs text-[#12324A]/80 font-sans">
                  Evite sabão em pó, que empedra com a umidade da praia e entope os dutos do dispenser.
                </p>
              </TechCard>

              <TechCard stamped={false} className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#D9682B]">DICA 02</span>
                <h3 className="font-bold text-sm text-[#12324A] font-display">Filtro de Drenagem</h3>
                <p className="text-xs text-[#12324A]/80 font-sans">
                  Limpe o filtro inferior a cada 30 dias para evitar erros de esgotamento OE / 5E.
                </p>
              </TechCard>

              <TechCard stamped={false} className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#D9682B]">DICA 03</span>
                <h3 className="font-bold text-sm text-[#12324A] font-display">Higienização</h3>
                <p className="text-xs text-[#12324A]/80 font-sans">
                  Execute o ciclo de limpeza de tambor mensalmente para eliminar crostas de amaciante.
                </p>
              </TechCard>
            </div>
          </div>

          {/* Section 4 & Final Call */}
          <div className="bg-[#12324A] text-white p-8 border-2 border-[#12324A] rounded-[4px] shadow-stamped text-center space-y-4">
            <h2 className="text-2xl font-bold font-display text-white">Sua Lava e Seca Apresentou Defeito?</h2>
            <p className="text-[#BFE3F2] text-sm max-w-xl mx-auto font-sans">
              Atendemos Penha, Navegantes, Piçarras e todo o Litoral Norte com diagnóstico no local e garantia de 90 dias por escrito.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <TechButton
                variant="whatsapp"
                href={`${COMPANY_INFO.whatsappUrl}%20ap%C3%B3s%20ler%20o%20Blog`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAMAR TÉCNICO NO WHATSAPP</span>
              </TechButton>

              <TechButton
                variant="phone"
                href={`tel:${COMPANY_INFO.phoneClean}`}
              >
                <Phone className="w-4 h-4" />
                <span>LIGAR: {COMPANY_INFO.phone}</span>
              </TechButton>
            </div>
          </div>

        </article>
      </main>
    </>
  );
};
