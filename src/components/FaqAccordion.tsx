import React from 'react';
import { SectionHeader, TechFAQ, TechButton } from './TechUI';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FaqAccordion: React.FC = () => {
  const faqItems = [
    {
      question: "Quanto custa o orçamento de geladeira ou máquina de lavar?",
      answer: "A visita técnica para avaliação e orçamento é avaliada no próprio local após vistoria dos componentes. Caso o serviço seja aprovado, o valor é 100% abatido do conserto."
    },
    {
      question: "Vocês atendem em municípios vizinhos a Navegantes?",
      answer: "Sim, atendemos Navegantes, Penha, Balneário Piçarras, Barra Velha, Itajaí, Balneário Camboriú e região com deslocamento de técnicos no mesmo dia."
    },
    {
      question: "Quanto tempo leva para o técnico comparecer ao endereço?",
      answer: "Em Navegantes, Penha e Piçarras, realizamos agendamento no mesmo dia com rotas matutinas e vespertinas, de segunda a sábado das 08h às 18h."
    },
    {
      question: "Qual a garantia oferecida nos serviços?",
      answer: "Oferecemos garantia legal e formal por escrito de 90 dias (3 meses) em todos os consertos e peças substituídas, com comprovante e nota."
    },
    {
      question: "Quando vale a pena consertar em vez de comprar um aparelho novo?",
      answer: "Sempre que o conserto representar uma fração do valor de um aparelho novo. Componentes como relés, sensores, placas, termostatos e recarga de gás recuperam o funcionamento original do equipamento."
    },
    {
      question: "Quais as formas de pagamento aceitas?",
      answer: "Aceitamos cartões de crédito (com opção de parcelamento), débito, PIX e dinheiro."
    }
  ];

  return (
    <section className="bg-[#F4F1EA] py-12 sm:py-16 text-[#12324A] border-b-2 border-[#12324A] bg-paper-grid text-left" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <SectionHeader
          step="05 / DÚVIDAS FREQUENTES"
          title="Perguntas Frequentes Sobre o Atendimento"
          subtitle="Respostas diretas sobre prazos, custos, garantia e metodologia de trabalho."
        />

        <TechFAQ items={faqItems} />

        {/* FAQ CTA Box */}
        <div className="p-6 bg-white border-2 border-[#12324A] rounded-[4px] shadow-stamped flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-[#D9682B] font-bold uppercase block mb-1">DÚVIDA ESPECÍFICA?</span>
            <p className="font-bold text-[#12324A] text-sm">Fale diretamente com nossa equipe técnica.</p>
          </div>
          <TechButton
            variant="whatsapp"
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CHAMAR NO WHATSAPP</span>
          </TechButton>
        </div>

      </div>
    </section>
  );
};
