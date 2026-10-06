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
    <section className="py-12 sm:py-16 bg-[#F4F1EA] border-b-2 border-[#12324A] bg-paper-grid" id="problemas-comuns">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        
        {/* Header */}
        <div className="space-y-1 border-b-2 border-[#12324A] pb-4">
          <span className="font-mono text-xs text-[#D9682B] font-bold tracking-wider uppercase">
            04 / Defeitos comuns
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12324A] font-display">
            Sua geladeira está assim?
          </h2>
          <p className="text-[#12324A]/80 text-sm sm:text-base font-sans">
            Veja os sintomas mais frequentes que a gente resolve no dia a dia.
          </p>
        </div>

        {/* Editorial Accordion List */}
        <div className="divide-y border-t border-b border-[#12324A]/30 divide-[#12324A]/20">
          {problems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4 text-left flex items-center justify-between gap-4 font-bold text-[#12324A] text-sm sm:text-base hover:text-[#D9682B] transition-colors"
                >
                  <span className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#D9682B] shrink-0 mt-0.5">[{idx + 1}]</span>
                    <span>{item.question}</span>
                  </span>
                  <span className="font-mono text-lg font-bold text-[#12324A] px-2 py-0.5 bg-white border border-[#12324A] shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 pl-7 pr-4 text-[#12324A]/80 text-xs sm:text-sm leading-relaxed space-y-3 font-sans">
                    <p className="bg-white p-3 border border-[#12324A]/20">{item.answer}</p>
                    <div>
                      <a
                        href={`${COMPANY_INFO.whatsappUrl}%20-%20Estou%20com%20o%20problema:%20${encodeURIComponent(item.question)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#16a34a] hover:underline"
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
