import React from 'react';
import { MessageSquare, Wrench, ShieldCheck, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HowItWorksProps {
  onOpenBookingModal?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Você chama no WhatsApp e conta o problema',
      description: 'Mande uma mensagem, foto ou áudio explicando o que está acontecendo com o aparelho e o seu bairro.'
    },
    {
      num: '02',
      icon: Wrench,
      title: 'O técnico vai até você e passa o orçamento antes de mexer',
      description: 'Análise presencial no seu imóvel ou comércio. Você fica sabendo o valor exato antes de autorizar qualquer serviço.'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Conserto com peça de qualidade, nota e 90 dias de garantia',
      description: 'O reparo é feito no próprio local na maioria dos casos, com peças de boa procedência e nota de garantia por escrito.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F4F1EA] border-b-2 border-[#12324A] bg-paper-grid relative overflow-hidden" id="como-funciona">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Section Header */}
        <div className="space-y-1 border-b-2 border-[#12324A] pb-4">
          <span className="font-mono text-xs text-[#D9682B] font-bold tracking-wider uppercase">
            03 / Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12324A] font-display">
            Como funciona o atendimento
          </h2>
          <p className="text-[#12324A]/80 text-sm sm:text-base font-sans max-w-xl">
            Sem enrolação: do primeiro contato até o teste final da sua geladeira no seu imóvel.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Copper Tube Line (Desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-[4px] bg-[#D9682B] z-0">
            {/* Animated Flow Particle traveling along tube */}
            <div className="w-3 h-3 rounded-full bg-[#BFE3F2] border border-[#12324A] shadow-md absolute -top-[4px] animate-pulse" style={{ animation: 'tubeFlow 3s linear infinite' }} />
          </div>

          <style>{`
            @keyframes tubeFlow {
              0% { left: 0%; }
              100% { left: 100%; }
            }
          `}</style>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border-2 border-[#12324A] rounded-[4px] p-6 shadow-stamped flex flex-col justify-between space-y-4 hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#12324A]/20 pb-3">
                      <span className="font-mono font-extrabold text-2xl text-[#D9682B]">
                        {item.num}
                      </span>
                      <div className="p-2 bg-[#F4F1EA] border border-[#12324A]">
                        <Icon className="w-5 h-5 text-[#12324A]" />
                      </div>
                    </div>

                    <h3 className="text-base font-extrabold text-[#12324A] font-display leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-[#12324A]/80 text-xs sm:text-sm font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#12324A]/10 font-mono text-[10px] text-[#12324A]/60 font-bold uppercase">
                    PASSO {item.num} DE 03
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 text-left">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-[4px] bg-[#16a34a] hover:bg-[#15803d] text-white font-mono font-bold text-sm border-2 border-[#12324A] shadow-stamped hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#12324A] transition-all inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>CHAMAR TÉCNICO NO WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};
