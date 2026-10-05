import React, { useState } from 'react';
import { 
  ArrowRight, 
  Home, 
  Store, 
  Factory, 
  Refrigerator, 
  Flame, 
  Snowflake, 
  Wine, 
  Layers, 
  ShoppingBag, 
  Coffee, 
  Zap, 
  Container, 
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ServicesGridProps {
  onOpenBookingModal?: (preselectedService?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = () => {
  const [activeCategory, setActiveCategory] = useState<'casa' | 'comercio' | 'industria'>('casa');

  const categories = [
    { id: 'casa', label: 'Para sua Casa', icon: Home },
    { id: 'comercio', label: 'Para seu Comércio', icon: Store },
    { id: 'industria', label: 'Indústria & Logística', icon: Factory },
  ] as const;

  const servicesData = {
    casa: [
      {
        title: 'Geladeira & Frost Free',
        slug: 'conserto-de-geladeira',
        desc: 'Geladeira queimada, que vazou gás ou parou de gelar na parte de baixo.',
        icon: Refrigerator
      },
      {
        title: 'Side by Side & French Door',
        slug: 'conserto-de-side-by-side',
        desc: 'Troca de motor, placa inverter, duto obstruído e vazamento de água.',
        icon: Layers
      },
      {
        title: 'Freezer Vertical & Horizontal',
        slug: 'conserto-de-freezer',
        desc: 'Freezer desarmando disjuntor, acumulando gelo em excesso ou sem congelar.',
        icon: Snowflake
      },
      {
        title: 'Frigobar',
        slug: 'conserto-de-frigobar',
        desc: 'Não gela, faz barulho ou desarma. Atendemos casas, pousadas e escritórios.',
        icon: Flame
      },
      {
        title: 'Adega Climatizada',
        slug: 'conserto-de-adega',
        desc: 'Adega esquentando, com vibração excessiva ou falha no sensor de temperatura.',
        icon: Wine
      },
      {
        title: 'Lava e Seca',
        slug: 'conserto-lava-e-seca-penha',
        desc: 'Barulho no centrifugado, erro no painel ou máquina que não solta água.',
        icon: Zap
      },
    ],
    comercio: [
      {
        title: 'Cervejeira',
        slug: 'conserto-de-cervejeira',
        desc: 'Cerveja que não gela ou congela demais? Ajuste de termostato, ventilador e gás.',
        icon: Coffee
      },
      {
        title: 'Expositor & Balcão Refrigerado',
        slug: 'conserto-de-balcao-refrigerado',
        desc: 'Balcão de açougue ou padaria embaçado ou sem manter a temperatura.',
        icon: ShoppingBag
      },
      {
        title: 'Máquina de Gelo',
        slug: 'maquina-de-gelo',
        desc: 'Produção lenta ou máquina que travou e não solta os cubos de gelo.',
        icon: Snowflake
      },
      {
        title: 'Máquina de Sorvete & Açaí',
        slug: 'maquina-de-sorvete',
        desc: 'Higienização, carga de gás e manutenção em batedores e cilindros.',
        icon: Flame
      },
      {
        title: 'Chopeira Comercial',
        slug: 'chopeiras',
        desc: 'Chope saindo só com espuma, sem gelar ou com vazamento na torneira Naja.',
        icon: Coffee
      },
    ],
    industria: [
      {
        title: 'Câmara Fria',
        slug: 'conserto-de-camara-fria',
        desc: 'Manutenção e reparo para frigoríficos, pescados e centrais de distribuição.',
        icon: Factory
      },
      {
        title: 'PMOC & Manutenção Preventiva',
        slug: 'refrigeracao-comercial',
        desc: 'Contrato mensal de manutenção preventiva para comércios e estabelecimentos.',
        icon: FileText
      },
      {
        title: 'Contêiner Reefer',
        slug: 'manutencao-container-reefer',
        desc: 'Assistência técnica em unidades de refrigeração estática e logística.',
        icon: Container
      },
    ]
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F7F8FA] border-b border-slate-200" id="servicos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center sm:text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3C5D]">
            O que a gente conserta
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
            Atendimento residencial, comercial e industrial no mesmo dia em Navegantes, Penha e região.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/80 rounded-xl w-full sm:w-auto overflow-x-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#0B3C5D] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-300/60'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesData[activeCategory].map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0B3C5D]/10 text-[#0B3C5D] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <a
                    href={`/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B3C5D] hover:text-[#e07b1a] transition-colors"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Callout Note */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-700">
          <span>Não encontrou seu equipamento na lista? A gente atende quase todo tipo de sistema de frio.</span>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-emerald-700 hover:underline shrink-0"
          >
            Perguntar no WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
};
