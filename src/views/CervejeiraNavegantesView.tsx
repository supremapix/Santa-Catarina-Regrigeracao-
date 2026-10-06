import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { PageHero, SectionHeader, SpecList, TechFAQ, TechButton } from '../components/TechUI';
import { HowItWorks } from '../components/HowItWorks';
import { CoverageMapSection } from '../components/CoverageMapSection';
import { MessageCircle, Phone } from 'lucide-react';

interface CervejeiraNavegantesViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const CervejeiraNavegantesView: React.FC<CervejeiraNavegantesViewProps> = ({ onOpenBookingModal }) => {
  const prefillMsg = encodeURIComponent(
    "Olá, encontrei a Santa Catarina Refrigeração pesquisando por conserto de cervejeira em Navegantes. Minha cervejeira está apresentando o seguinte problema:"
  );
  const whatsappUrlWithMsg = `${COMPANY_INFO.whatsappUrl}&text=${prefillMsg}`;

  const problemsList = [
    {
      title: "Cervejeira não gela",
      desc: "O equipamento permanece em temperatura ambiente. Causas: vazamento de gás no circuito, falha no compressor ou micro-motor ventilador inoperante."
    },
    {
      title: "Cervejeira não liga",
      desc: "Painel apagado ou sem partida. Pode ser falha na placa eletrônica de potência, fusível térmico ou módulo Inverter."
    },
    {
      title: "Cervejeira não mantém a temperatura",
      desc: "Oscilação constante de temperatura. Associado a falhas no sensor NTC, borracha de vedação ressecada ou desregulagem do controlador."
    },
    {
      title: "Cervejeira gelando pouco",
      desc: "A bebida não atinge os graus negativos ideais. Decorre de condensador obstruído por sujeira, filtro secador entupido ou perda parcial de fluido."
    },
    {
      title: "Formação excessiva de gelo / Bloqueio",
      desc: "Bloqueio de gelo no evaporador. Ocorre por falha no ciclo de degelo automático, travamento de dreno ou entrada de ar externo."
    }
  ];

  const faqs = [
    {
      question: "Onde consertar cervejeira em Navegantes SC?",
      answer: "A Santa Catarina Refrigeração realiza atendimento técnico especializado em Navegantes e região, diretamente no comércio ou residência."
    },
    {
      question: "Minha cervejeira não está gelando. O que pode ser?",
      answer: "Existem diferentes causas possíveis, como sujeira no condensador, falha no ventilador, vazamento de fluido refrigerante ou problema no sensor NTC."
    },
    {
      question: "Vocês atendem cervejeiras comerciais de bares e restaurantes?",
      answer: "Sim, atendemos cervejeiras comerciais, expositores de bebidas e modelos residenciais gourmet em Navegantes e todo o Litoral Norte."
    },
    {
      question: "Quanto custa o conserto de uma cervejeira em Navegantes?",
      answer: "O valor depende do modelo e peças necessárias. A avaliação técnica no local define o orçamento exato de forma transparente."
    }
  ];

  const breadcrumbItems = [
    { name: "Início", item: "/" },
    { name: "Refrigeração Comercial", item: "/refrigeracao-comercial" },
    { name: "Conserto de Cervejeira em Navegantes SC", item: "/conserto-cervejeira-navegantes-sc" },
  ];

  return (
    <>
      <EnhancedSEO
        title="Conserto de Cervejeira em Navegantes SC | Santa Catarina Refrigeração"
        description="Conserto e manutenção de cervejeiras em Navegantes SC. Assistência técnica para cervejeira que não gela, não liga, apresenta ruídos ou problemas de refrigeração. Solicite atendimento."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/conserto-cervejeira-navegantes-sc`}
        breadcrumbs={breadcrumbItems}
        city="Navegantes"
        faqList={faqs}
      />

      <main className="bg-[#F4F1EA] text-[#12324A] min-h-screen pb-16 text-left">
        
        {/* Page Hero */}
        <PageHero
          badge="01 / CONSERTO DE CERVEJEIRA NAVEGANTES"
          title="Conserto de Cervejeira em Navegantes SC"
          subtitle="Assistência técnica especializada para cervejeiras comerciais e residenciais gourmet. Diagnóstico de precisão no local com garantia de 90 dias por escrito."
          breadcrumbs={[
            { label: "Refrigeração Comercial", path: "/refrigeracao-comercial" },
            { label: "Cervejeiras Navegantes", path: "/conserto-cervejeira-navegantes-sc" }
          ]}
          equipmentType="cervejeira"
        />

        {/* Section 02 / Defeitos em Cervejeiras */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
          <SectionHeader
            step="02 / DIAGNÓSTICO EM CERVEJEIRAS"
            title="Principais Defeitos Atendidos em Navegantes"
            subtitle="Reparo de placas controladoras, compressores, sensores NTC e carga de fluido frigorífico."
          />

          <SpecList items={problemsList} />
        </section>

        {/* Section 03 / Como Funciona */}
        <HowItWorks />

        {/* Section 04 / Perguntas Frequentes */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
          <SectionHeader
            step="04 / DÚVIDAS TÉCNICAS"
            title="Perguntas Frequentes sobre Cervejeiras"
          />

          <TechFAQ items={faqs} />
        </section>

        {/* Section 05 / Cidades Atendidas */}
        <CoverageMapSection />

        {/* Final CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="bg-[#12324A] text-white p-8 sm:p-10 border-2 border-[#12324A] shadow-stamped rounded-[4px] text-center space-y-4">
            <span className="font-mono text-xs text-[#BFE3F2] font-bold uppercase tracking-wider block">
              06 / ATENDIMENTO TÉCNICO NAVEGANTES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white">
              Sua cervejeira parou de gelar no seu comércio ou casa?
            </h2>
            <p className="text-[#BFE3F2] text-sm sm:text-base max-w-xl mx-auto font-sans">
              Visita técnica rápida em Navegantes, Gravatá, Centro e regiões vizinhas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <TechButton
                variant="whatsapp"
                href={whatsappUrlWithMsg}
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
