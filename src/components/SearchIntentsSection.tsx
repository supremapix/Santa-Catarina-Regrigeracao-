import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface SearchIntentsSectionProps {
  onOpenBookingModal?: (preselectedService?: string) => void;
}

export const SearchIntentsSection: React.FC<SearchIntentsSectionProps> = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const problems = [
    {
      question: 'Geladeira gela no freezer, mas não gela na parte de baixo?',
      answer: 'Geralmente é falha no sistema de degelo (sensor, resistência, bimetal ou duto entupido por gelo). O técnico testa os componentes com multímetro no local e faz o conserto no mesmo dia.'
    },
    {
      question: 'Geladeira apitando, piscando luzes ou dando estalos no motor?',
      answer: 'O estalo no motor costuma ser o protetor térmico desarmando por falha no relé de partida ou capacitor. Luzes piscando podem indicar placa eletrônica. A gente avalia e troca a peça necessária.'
    },
    {
      question: 'Vazamento de água embaixo da geladeira ou borracha da porta solta?',
      answer: 'Água no chão normalmente é calha do dreno entupida. Borracha ressecada faz o ar frio escapar e gasta mais luz. Desobstruímos o dreno e instalamos gaxeta magnética nova.'
    },
    {
      question: 'Lava e seca travada com água, barulho forte ou código de erro (OE/5E)?',
      answer: 'Erro OE/5E indica bomba de drenagem queimada ou entupida. Barulho alto de ferro batendo na centrifugação indica rolamentos desgastados. O conserto é feito no seu imóvel.'
    },
    {
      question: 'Cervejeira, balcão expositor ou câmara fria esquentando?',
      answer: 'Falta de gás por micro-vazamento, condensador sujo ou micro-motor do ventilador queimado. Atendemos comércios prontamente para evitar perda de estoque e bebidas quentes.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F7F8FA] border-b border-slate-200" id="problemas-comuns">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center sm:text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3C5D]">
            Sua geladeira está assim?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Veja os problemas mais frequentes que a gente resolve no dia a dia.
          </p>
        </div>

        {/* Accordion / FAQ List */}
        <div className="space-y-3">
          {problems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#0B3C5D]"
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0B3C5D] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    <p>{item.answer}</p>
                    <div className="pt-3">
                      <a
                        href={`${COMPANY_INFO.whatsappUrl}%20-%20Estou%20com%20o%20problema:%20${encodeURIComponent(item.question)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 hover:underline"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Falar com o técnico no WhatsApp sobre este defeito →</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
