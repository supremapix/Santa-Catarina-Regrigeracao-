import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { PRICING_DATA, PAYMENT_METHODS } from '../data/pricing';
import { COMPANY_INFO } from '../data/company';
import { PageHero, SectionHeader, TechCard, TechTable, TechFAQ, TechButton } from '../components/TechUI';

interface PricingViewProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onOpenBookingModal }) => {
  const tableHeaders = ["SERVIÇO / REPARO", "CATEGORIA", "TEMPO MÉDIO", "GARANTIA", "VALOR DE REFERÊNCIA"];
  
  const tableRows = PRICING_DATA.map((item) => [
    <div key={item.service} className="space-y-1">
      <strong className="font-extrabold text-[#12324A] font-display text-sm block">{item.service}</strong>
      <p className="text-xs text-[#12324A]/80 font-sans">{item.description}</p>
    </div>,
    <span key="cat" className="font-mono text-xs font-bold text-[#D9682B] uppercase">{item.category}</span>,
    <span key="time" className="font-mono text-xs text-[#12324A]">{item.averageTime}</span>,
    <span key="war" className="font-mono text-xs text-emerald-700 font-bold">{item.warranty}</span>,
    <div key="price" className="text-right">
      <span className="font-mono font-extrabold text-sm text-[#12324A] block">{item.startingPrice}</span>
      <span className="font-mono text-[9px] text-[#12324A]/60 block uppercase">a partir de</span>
    </div>
  ]);

  const pricingFaqs = [
    {
      question: 'Como funciona a cobrança da visita técnica?',
      answer: 'O técnico avalia o equipamento no local com multímetro e instrumentos de medição. Aprovando o orçamento no mesmo momento, o valor da taxa de visita é 100% abatido do total do serviço.'
    },
    {
      question: 'O valor do orçamento pode mudar durante o conserto?',
      answer: 'Não. O orçamento é fechado antes do início da manutenção. Se houver necessidade de troca de alguma peça adicional não prevista inicialmente, o cliente é consultado e informado previamente.'
    },
    {
      question: 'Qual a garantia dos serviços e peças?',
      answer: 'Todos os consertos têm garantia formal por escrito de 90 dias, cobrindo tanto as peças novas instaladas quanto a mão de obra realizada.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12324A] pb-16">
      <EnhancedSEO
        title="Tabela de Preços de Conserto de Geladeira | SC Refrigeração"
        description="Confira a tabela de preços de referência para conserto de geladeiras, kit degelo, compressores e recarga de gás em SC. Orçamento no local e garantia de 90 dias."
        canonicalUrl="/precos"
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Tabela de Preços", item: "/precos" }
        ]}
      />

      {/* Page Hero */}
      <PageHero
        badge="01 / TABELA DE PREÇOS"
        title="Preços de referência e transparência no orçamento"
        subtitle="Sem surpresas nem letras miúdas. Avaliação técnica no local com multímetro, orçamento prévio antes da execução, peças originais e nota com garantia de 90 dias."
        breadcrumbs={[{ label: "Tabela de Preços", path: "/precos" }]}
        equipmentType="geladeira"
      />

      {/* Notice Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-4 bg-amber-50 border-2 border-[#12324A] rounded-[4px] shadow-stamped flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-xs bg-[#D9682B] text-white px-2 py-0.5">NOTA TÉCNICA</span>
            <p className="font-mono text-xs font-bold text-[#12324A]">
              Valor final só é emitido após o diagnóstico presencial do técnico no equipamento.
            </p>
          </div>
          <span className="font-mono text-[11px] text-[#12324A]/70">Garantia 90 dias por escrito</span>
        </div>
      </div>

      {/* Main Pricing Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        <SectionHeader
          step="02 / Valores estimados"
          title="Tabela de referência para serviços frequentes"
          subtitle="Abaixo constam os valores médios praticados na região de Navegantes e Litoral SC."
        />

        <TechTable headers={tableHeaders} rows={tableRows} />
      </section>

      {/* Detailed Cards for Each Service Item */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        <SectionHeader
          step="03 / O que está incluso"
          title="Detalhamento dos pacotes de manutenção"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRICING_DATA.map((item, idx) => (
            <TechCard key={idx} stamped={true} className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between border-b border-[#12324A]/20 pb-2">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#D9682B] uppercase">{item.category}</span>
                    <h3 className="text-lg font-extrabold text-[#12324A] font-display">{item.service}</h3>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-black text-[#12324A] block">{item.startingPrice}</span>
                    <span className="text-[9px] text-[#12324A]/60 block uppercase">a partir de</span>
                  </div>
                </div>

                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed">
                  {item.description}
                </p>

                <div className="p-3 bg-[#F4F1EA] border border-[#12324A]/20 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-[#12324A] uppercase block mb-1">Incluso neste serviço:</span>
                  {item.whatsIncluded.map((inc, i) => (
                    <div key={i} className="flex items-center gap-1.5 font-sans text-xs text-[#12324A]">
                      <span className="text-[#16a34a] font-mono font-bold">✓</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#12324A]/20 flex items-center justify-between font-mono text-xs">
                <span className="text-[#12324A]/70">Tempo: <strong>{item.averageTime}</strong></span>
                <TechButton
                  variant="whatsapp"
                  href={`${COMPANY_INFO.whatsappUrl}%20-%20Or%C3%A7amento%20para%20${encodeURIComponent(item.service)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs"
                >
                  Agendar este reparo
                </TechButton>
              </div>
            </TechCard>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        <SectionHeader
          step="04 / Formas de pagamento"
          title="Facilidade e transparência no pagamento"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PAYMENT_METHODS.map((pm, i) => (
            <TechCard key={i} stamped={true} className="text-center space-y-1">
              <h3 className="font-mono font-bold text-sm text-[#12324A] uppercase">{pm.name}</h3>
              <p className="font-mono text-xs font-bold text-[#D9682B]">{pm.discount}</p>
            </TechCard>
          ))}
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        <SectionHeader
          step="05 / Dúvidas sobre valores"
          title="Perguntas frequentes sobre o orçamento"
        />

        <TechFAQ items={pricingFaqs} />
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#12324A] text-white p-8 sm:p-10 border-2 border-[#12324A] shadow-stamped rounded-[4px] text-center space-y-4">
          <span className="font-mono text-xs text-[#BFE3F2] font-bold uppercase tracking-wider block">
            06 / ORÇAMENTO NO LOCAL
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display">
            Precisa de um diagnóstico presencial hoje?
          </h2>
          <p className="text-[#BFE3F2] text-sm sm:text-base max-w-xl mx-auto font-sans">
            Atendimento domiciliar em Navegantes, Penha, Balneário Piçarras, Itajaí, Balneário Camboriú e região.
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

