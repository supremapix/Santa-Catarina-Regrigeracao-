import React from 'react';
import { MessageSquare, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HowItWorksProps {
  onOpenBookingModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBookingModal }) => {
  const steps = [
    {
      step: "Passo 1",
      icon: MessageSquare,
      title: "Contato ou Agendamento",
      description: "Chame no WhatsApp ou agende seu horário pelo site informando seu endereço e o problema."
    },
    {
      step: "Passo 2",
      icon: Wrench,
      title: "Visita & Diagnóstico",
      description: "Nosso técnico vai até seu imóvel em Navegantes, Penha ou região com ferramentas e peças originais."
    },
    {
      step: "Passo 3",
      icon: CheckCircle2,
      title: "Reparo & Garantia 90D",
      description: "Após sua aprovação, executamos o conserto na hora com recibo e garantia por escrito de 90 dias."
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-200 font-bold text-xs uppercase tracking-wider">
            Atendimento Passo a Passo
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Como Funciona Nosso Atendimento
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Processo transparente, rápido e sem complicações do primeiro contato até a conclusão.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500 shadow-sm transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full bg-cyan-800 text-white font-extrabold text-xs uppercase tracking-wider">
                      {item.step}
                    </span>
                    <div className="p-3 rounded-2xl bg-cyan-100 text-cyan-900 border border-cyan-200">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-700 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center text-xs text-cyan-800 font-bold group-hover:translate-x-1 transition-transform">
                  <span>Atendimento Rápido e Seguro</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-cyan-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons (Aligned & Shortened) */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base shadow-md transition-all min-h-[48px] flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Falar no WhatsApp</span>
          </a>

          <button
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base transition-all min-h-[48px] flex items-center justify-center gap-2"
          >
            <span>Agendar Visita</span>
          </button>
        </div>

      </div>
    </section>
  );
};
