import React from 'react';
import { Clock, Home, ShieldCheck, CreditCard, Award, Zap } from 'lucide-react';

export const DifferentialsBar: React.FC = () => {
  const differentials = [
    {
      icon: Clock,
      title: "Atendimento 24h",
      description: "Plantão emergencial todos os dias, incluindo domingos e feriados",
      color: "text-amber-700 bg-amber-50 border-amber-200"
    },
    {
      icon: Home,
      title: "100% Domiciliar",
      description: "Técnicos vão até sua residência, comércio ou pousada com toda estrutura",
      color: "text-cyan-700 bg-cyan-50 border-cyan-200"
    },
    {
      icon: Zap,
      title: "Orçamento Grátis",
      description: "Sem taxa de visita para avaliação com aprovação do orçamento",
      color: "text-emerald-700 bg-emerald-50 border-emerald-200"
    },
    {
      icon: ShieldCheck,
      title: "Garantia de 90 Dias",
      description: "Garantia formal por escrito em todas as peças e mão de obra executada",
      color: "text-blue-700 bg-blue-50 border-blue-200"
    },
    {
      icon: Award,
      title: "Técnicos Certificados",
      description: "Treinamento especializado em Inverter, sensores e refrigeração comercial",
      color: "text-indigo-700 bg-indigo-50 border-indigo-200"
    },
    {
      icon: CreditCard,
      title: "Várias Formas de Pagamento",
      description: "Facilidade de pagamento no cartão de crédito, débito, PIX e dinheiro",
      color: "text-purple-700 bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section className="bg-slate-50 py-10 border-b border-slate-200" id="diferenciais">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-cyan-700 font-bold text-xs uppercase tracking-widest">Por Que Escolher Nossos Serviços</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Diferenciais que Garantem Sua Tranquilidade</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-300 shadow-sm transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl border ${item.color} shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
