import React from 'react';
import { MessageSquare, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HowItWorksProps {
  onOpenBookingModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBookingModal }) => {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "1. Contato ou Agendamento",
      description: "Chame no WhatsApp ou agende seu horário pelo site informando o tipo de equipamento e sintoma."
    },
    {
      step: "02",
      icon: Wrench,
      title: "2. Visita & Diagnóstico",
      description: "Nosso técnico especializado vai até seu imóvel em Penha ou região com ferramentas e peças originais."
    },
    {
      step: "03",
      icon: CheckCircle2,
      title: "3. Reparo & Garantia 90D",
      description: "Após sua aprovação, executamos o conserto no local e entregamos o termo de garantia formal de 90 dias."
    }
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 font-bold text-xs uppercase tracking-wider">
            Processo Simples e Transparente
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            Como Funciona o Nosso Atendimento
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Agilidade do primeiro contato ao conserto final no seu imóvel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col justify-between hover:border-cyan-300 shadow-sm transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-slate-200 group-hover:text-cyan-200 transition-colors">
                      {item.step}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-cyan-50 text-cyan-800 border border-cyan-200">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center text-xs text-cyan-800 font-bold group-hover:translate-x-1 transition-transform">
                  <span>Atendimento sem enrolação</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-cyan-600" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all min-h-[48px] flex items-center justify-center"
          >
            Chamar Técnico no WhatsApp
          </a>

          <button
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all min-h-[48px] flex items-center justify-center"
          >
            Agendar Visita Técnica Online
          </button>
        </div>

      </div>
    </section>
  );
};
