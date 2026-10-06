import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { PageHero, SectionHeader, SpecList, TechFAQ, TechButton } from '../components/TechUI';
import { HowItWorks } from '../components/HowItWorks';
import { CoverageMapSection } from '../components/CoverageMapSection';
import { MessageCircle, Phone } from 'lucide-react';

interface LavaESecaLandingViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const LavaESecaLandingView: React.FC<LavaESecaLandingViewProps> = ({ onOpenBookingModal }) => {
  const lavaFaqs = [
    {
      question: "Quanto custa o diagnóstico de máquina de lavar / lava e seca?",
      answer: "O orçamento é avaliado e informado diretamente no local após verificação técnica do aparelho. Caso aprovado, o valor da avaliação é totalmente abatido do serviço."
    },
    {
      question: "Qual a vida útil de uma lava e seca LG?",
      answer: "Com manutenções preventivas (limpeza de filtro e higienização do duto), uma lava e seca LG Direct Drive tem vida útil estimada entre 10 e 15 anos de excelente desempenho."
    },
    {
      question: "Qual a vida útil de uma lava e seca Samsung?",
      answer: "Modelos Samsung EcoBubble / Digital Inverter duram facilmente de 8 a 12 anos. A substituição de bombas de drenagem ou trava da porta estende a durabilidade por um valor muito menor do que comprar um aparelho novo."
    },
    {
      question: "Quando vale a pena consertar a máquina de lavar / lava e seca?",
      answer: "Vale a pena na imensa maioria das vezes, pois peças de reposição como eletrobombas, sensores de nível, placas eletrônicas e trava da porta custam uma fração do preço de uma máquina nova."
    }
  ];

  const defectsList = [
    {
      title: "Erro OE / 5E (Não Drena a Água)",
      desc: "Substituição de bomba de drenagem queimada ou desobstrução de moedas e objetos no filtro de retenção."
    },
    {
      title: "Barulho Forte na Centrifugação (Rolamentos Batendo)",
      desc: "Troca do conjunto mecânico, retentor de água e rolamentos do tambor Inverter no local."
    },
    {
      title: "Não Seca a Roupa ou Sai Úmida e Quente",
      desc: "Limpeza da calha de secagem, substituição de duto obstruído por fiapos e teste dos sensores térmicos NTC."
    },
    {
      title: "Porta Travada ou Erro dE / dE1",
      desc: "Troca da trava da porta eletrônica e alinhamento das dobradiças reforçadas."
    }
  ];

  const breadcrumbs = [
    { name: "Início", item: COMPANY_INFO.subdomainUrl },
    { name: "Conserto Lava e Seca Penha", item: `${COMPANY_INFO.subdomainUrl}/conserto-lava-e-seca-penha` }
  ];

  return (
    <>
      <EnhancedSEO
        title="Conserto de Lava e Seca em Penha | Assistência LG, Samsung e mais"
        description="Conserto e assistência técnica especializada de Lava e Seca LG, Samsung, Electrolux e Brastemp em Penha e região. Erros OE, UE, 5E, 4E, Inverter e garantia de 90 dias."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/conserto-lava-e-seca-penha`}
        breadcrumbs={breadcrumbs}
        faqList={lavaFaqs}
      />

      <main className="bg-[#F4F1EA] text-[#12324A] min-h-screen pb-16 text-left">
        {/* Page Hero */}
        <PageHero
          badge="01 / ASSISTÊNCIA TÉCNICA LAVA E SECA"
          title="Conserto de Lava e Seca em Penha, Navegantes e Região"
          subtitle="Atendimento em domicílio para LG Direct Drive, Samsung EcoBubble, Electrolux e Brastemp. Diagnóstico presencial, peças originais e garantia de 90 dias por escrito."
          breadcrumbs={[{ label: "Lava e Seca Penha", path: "/conserto-lava-e-seca-penha" }]}
          equipmentType="lava-e-seca"
        />

        {/* Section 02 / Defeitos Frequentes */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
          <SectionHeader
            step="02 / DEFEITOS RESOLVIDOS"
            title="Problemas frequentes em Lava e Seca"
            subtitle="Diagnóstico no local com ferramentas técnicas e peças de reposição imediatas."
          />

          <SpecList items={defectsList} />
        </section>

        {/* Section 03 / Como funciona */}
        <HowItWorks />

        {/* Section 04 / FAQ */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
          <SectionHeader
            step="04 / DÚVIDAS FREQUENTES"
            title="Dúvidas sobre o conserto de Lava e Seca"
          />

          <TechFAQ items={lavaFaqs} />
        </section>

        {/* Section 05 / Cidades Atendidas */}
        <CoverageMapSection />

        {/* Final CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="bg-[#12324A] text-white p-8 sm:p-10 border-2 border-[#12324A] shadow-stamped rounded-[4px] text-center space-y-4">
            <span className="font-mono text-xs text-[#BFE3F2] font-bold uppercase tracking-wider block">
              06 / ATENDIMENTO EM DOMICÍLIO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white">
              Sua Lava e Seca parou ou está com erro?
            </h2>
            <p className="text-[#BFE3F2] text-sm sm:text-base max-w-xl mx-auto font-sans">
              Atendemos Penha, Navegantes, Piçarras, Itajaí, Balneário Camboriú e região com visita rápida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <TechButton
                variant="whatsapp"
                href={`${COMPANY_INFO.whatsappUrl}%20-%20Conserto%20de%20Lava%20e%20Seca`}
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
