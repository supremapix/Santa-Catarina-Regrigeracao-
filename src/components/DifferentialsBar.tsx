import React from 'react';
import { Clock, Home, ShieldCheck, CreditCard, Award, Zap } from 'lucide-react';
import { SectionHeader, TechCard } from './TechUI';

export const DifferentialsBar: React.FC = () => {
  const differentials = [
    {
      icon: Clock,
      num: "01",
      title: "Atendimento em Domicílio",
      description: "De segunda a sábado das 08h às 18h com agendamento direto e sem enrolação."
    },
    {
      icon: Home,
      num: "02",
      title: "Conserto no Local",
      description: "Técnicos realizam o conserto no seu endereço, sem retirar seu aparelho."
    },
    {
      icon: Zap,
      num: "03",
      title: "Orçamento no Local",
      description: "Avaliação técnica presencial com laudo prévio e preço fechado antes da execução."
    },
    {
      icon: ShieldCheck,
      num: "04",
      title: "Garantia de 90 Dias",
      description: "Garantia legal formal por escrito com comprovante em todas as peças e serviços."
    },
    {
      icon: Award,
      num: "05",
      title: "Técnicos Qualificados",
      description: "Especialistas em sistemas Frost Free, Inverter, sensores e refrigeração comercial."
    },
    {
      icon: CreditCard,
      num: "06",
      title: "Pagamento Facilitado",
      description: "Facilidade de pagamento no cartão de crédito parcelado, débito, PIX ou dinheiro."
    }
  ];

  return (
    <section className="bg-[#F4F1EA] py-12 border-b-2 border-[#12324A] bg-paper-grid text-left" id="diferenciais">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <SectionHeader
          step="03 / PADRÃO OPERACIONAL"
          title="Por Que Escolher Nossos Serviços"
          subtitle="Atendimento local, transparente e com garantia documentada em Santa Catarina."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <TechCard 
                key={index} 
                stamped={true}
                hoverable={true}
                className="bg-white border-2 border-[#12324A] p-5 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-[#12324A]/20 pb-2">
                  <span className="font-mono text-xs font-bold text-[#D9682B]">[{item.num}]</span>
                  <Icon className="w-4 h-4 text-[#12324A]" />
                </div>
                <h3 className="font-bold text-base text-[#12324A] font-display">{item.title}</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed">{item.description}</p>
              </TechCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
