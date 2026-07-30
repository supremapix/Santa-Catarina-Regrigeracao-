import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Quanto custa uma visita técnica de geladeira ou máquina de lavar?",
      answer: "A visita técnica para avaliação e orçamento é 100% gratuita quando o serviço de conserto é aprovado no local! Nossos técnicos realizam o teste de componentes digitais e apresentam o valor total transparente sem taxas escondidas."
    },
    {
      question: "Vocês cobram taxa de deslocamento para cidades vizinhas a Penha?",
      answer: "Não cobramos taxa de deslocamento na aprovação do serviço para cidades do Anel 1 (Penha, Balneário Piçarras, Barra Velha, Navegantes, Itajaí, Balneário Camboriú, Camboriú, Itapema, Porto Belo, Bombinhas). Para demais cidades da região (Joinville, Blumenau, Florianópolis), o valor do deslocamento é descontado do conserto aprovado."
    },
    {
      question: "Quanto tempo leva para o técnico chegar ao meu endereço?",
      answer: "Em Penha e Balneário Piçarras, o tempo médio de chegada é de 30 a 60 minutos em chamados de emergência. Para Itajaí, Navegantes, Balneário Camboriú e Itapema, enviamos o técnico móvel em média de 1 a 2 horas."
    },
    {
      question: "Qual a garantia oferecida nos serviços de assistência técnica?",
      answer: "Oferecemos garantia formal por escrito de 90 dias (3 meses) em todos os serviços executados e peças substituídas, com emissão de nota técnica e suporte contínuo direto no WhatsApp."
    },
    {
      question: "Quando vale a pena consertar a geladeira em vez de comprar uma nova?",
      answer: "Sempre vale a pena quando o custo do conserto for significativamente inferior ao preço de um aparelho novo equivalente. Componentes como sensores, relés, fusíveis, placas eletrônicas e recarga de gás custam uma fração do valor de uma geladeira nova. Nosso técnico faz a avaliação honesta no local."
    },
    {
      question: "Qual a vida útil de uma lava e seca LG ou Samsung após o reparo?",
      answer: "Substituindo peças desgastadas por componentes originais e realizando a higienização do duto e do tambor, uma lava e seca ganha vida útil de mais 5 a 10 anos de operação sem barulhos ou falhas de drenagem."
    },
    {
      question: "Vocês atendem emergências de câmaras frias comerciais nos finais de semana?",
      answer: "Sim! Dispomos de plantão emergencial 24 horas todos os dias da semana para atender peixarias, restaurantes, supermercados e pátios logísticos com câmaras frigoríficas ou balcões com perda de temperatura."
    },
    {
      question: "Quais as formas de pagamento aceitas?",
      answer: "Aceitamos cartões de crédito (com opção de parcelamento), cartões de débito, PIX com chave instantânea, dinheiro e transferência bancária."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24 text-slate-900 border-b border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-cyan-700" /> Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            Perguntas Frequentes Sobre Nossos Serviços
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Respostas claras sobre prazos, custos, garantia e formas de atendimento.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-100 transition-colors min-h-[48px]"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 pr-2">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg border shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-cyan-700 text-white border-cyan-700' : 'bg-white text-slate-700 border-slate-300'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3 font-medium">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ CTA Box */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3 shadow-sm">
          <p className="text-sm text-slate-700 font-bold">Tem alguma outra dúvida sobre o conserto do seu aparelho?</p>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Técnico no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
