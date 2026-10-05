import React from 'react';
import { MessageSquare, Wrench, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HowItWorksProps {
  onOpenBookingModal?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  const steps = [
    {
      num: '1',
      icon: MessageSquare,
      title: 'Você chama no WhatsApp e conta o problema',
      description: 'Mande uma mensagem, foto ou áudio explicando o que está acontecendo com o aparelho e onde você mora.'
    },
    {
      num: '2',
      icon: Wrench,
      title: 'O técnico vai até você e passa o orçamento antes de mexer',
      description: 'Análise presencial no seu imóvel ou comércio. Você fica sabendo o valor exato antes de autorizar o serviço.'
    },
    {
      num: '3',
      icon: ShieldCheck,
      title: 'Conserto com peça de qualidade, nota e 90 dias de garantia',
      description: 'O reparo é feito no próprio local na maioria dos casos, com peças de boa procedência e garantia por escrito.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center sm:text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3C5D]">
            Como funciona
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl font-normal">
            Sem enrolação, do primeiro contato até o teste final da sua geladeira.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#F7F8FA] border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-[#0B3C5D] text-white font-extrabold text-sm flex items-center justify-center">
                      {item.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#0B3C5D]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA */}
        <div className="pt-2 text-center sm:text-left">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chamar técnico no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
