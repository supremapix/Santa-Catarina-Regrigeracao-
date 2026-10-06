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
    { id: 'casa', label: '01 / RESIDENCIAL' },
    { id: 'comercio', label: '02 / COMERCIAL & BARES' },
    { id: 'industria', label: '03 / INDÚSTRIA & REEFER' },
  ] as const;

  const servicesData = {
    casa: [
      {
        num: '01',
        title: 'Geladeira & Frost Free',
        slug: 'conserto-de-geladeira',
        desc: 'Parou de gelar embaixo, vazou gás ou não liga mais.',
      },
      {
        num: '02',
        title: 'Side by Side & French Door',
        slug: 'conserto-de-side-by-side',
        desc: 'Troca de motor compressor Inverter, placa principal, duto e vazamento de água.',
      },
      {
        num: '03',
        title: 'Freezer Vertical & Horizontal',
        slug: 'conserto-de-freezer',
        desc: 'Freezer desarmando disjuntor, acumulando gelo em excesso ou sem congelar.',
      },
      {
        num: '04',
        title: 'Frigobar',
        slug: 'conserto-de-frigobar',
        desc: 'Não gela, faz ruído ou desarma. Atendemos casas, pousadas e escritórios.',
      },
      {
        num: '05',
        title: 'Adega Climatizada',
        slug: 'conserto-de-adega',
        desc: 'Adega esquentando, com vibração ou falha no sensor NTC de precisão.',
      },
      {
        num: '06',
        title: 'Lava e Seca',
        slug: 'conserto-lava-e-seca-penha',
        desc: 'Barulho no centrifugado, erros no painel (OE/5E) ou máquina que não seca.',
      },
    ],
    comercio: [
      {
        num: '01',
        title: 'Cervejeira Comercial',
        slug: 'conserto-de-cervejeira',
        desc: 'Cerveja não atinge -4°C? Ajuste de termostato, micromotor ventilador e carga de gás.',
      },
      {
        num: '02',
        title: 'Expositor & Balcão Refrigerado',
        slug: 'conserto-de-balcao-refrigerado',
        desc: 'Balcão de açougue ou padaria embaçado, com vazamento ou sem manter temperatura.',
      },
      {
        num: '03',
        title: 'Máquina de Gelo',
        slug: 'maquina-de-gelo',
        desc: 'Produção lenta de cubos/escama ou máquina travada que não solta o gelo.',
      },
      {
        num: '04',
        title: 'Máquina de Sorvete & Açaí',
        slug: 'maquina-de-sorvete',
        desc: 'Higienização, carga de gás R-404a e manutenção em batedores e cilindros.',
      },
      {
        num: '05',
        title: 'Chopeira Comercial',
        slug: 'chopeiras',
        desc: 'Chope saindo com espuma, banco de gelo derretido ou vazamento na torre Naja.',
      },
    ],
    industria: [
      {
        num: '01',
        title: 'Câmara Fria Resfriados & Congelados',
        slug: 'conserto-de-camara-fria',
        desc: 'Manutenção em compressores e evaporadores para frigoríficos e pescados.',
      },
      {
        num: '02',
        title: 'Contrato de Manutenção PMOC',
        slug: 'refrigeracao-comercial',
        desc: 'Plano mensal preventivo para comércios e estabelecimentos em conformidade com Anvisa.',
      },
      {
        num: '03',
        title: 'Contêiner Reefer Estático',
        slug: 'manutencao-container-reefer',
        desc: 'Assistência técnica em unidades frigoríficas de armazenagem estática e logística.',
      },
    ]
  };

  return (
    <section className="py-12 lg:py-16 bg-[#F4F1EA] border-b-2 border-[#12324A]" id="servicos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-1">
          <span className="font-mono text-xs text-[#D9682B] font-bold tracking-wider uppercase">
            03 / ÍNDICE DE SERVIÇOS & EQUIPAMENTOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12324A]">
            O que a gente conserta
          </h2>
          <p className="font-sans text-[#12324A]/80 text-sm sm:text-base max-w-2xl">
            Atendimento residencial, comercial e industrial em Navegantes, Penha e região.
          </p>
        </div>

        {/* Category Underlined Links (No Pill Badges) */}
        <div className="flex flex-wrap items-center gap-6 border-b-2 border-[#12324A] pb-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-xs sm:text-sm font-bold transition-all py-1 border-b-2 ${
                  isActive
                    ? 'border-[#D9682B] text-[#D9682B]'
                    : 'border-transparent text-[#12324A]/70 hover:text-[#12324A]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Index List */}
        <div className="border-t-2 border-[#12324A] divide-y-2 divide-[#12324A]/20 bg-white shadow-stamped">
          {servicesData[activeCategory].map((service) => (
            <a
              key={service.slug}
              href={`/${service.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-[#BFE3F2] transition-colors gap-3"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                <span className="font-mono font-bold text-sm text-[#D9682B] shrink-0 pt-0.5 sm:pt-0">
                  {service.num} —
                </span>
                <div className="space-y-0.5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#12324A] group-hover:text-[#12324A] font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#12324A]/70 max-w-2xl">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#12324A] shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#12324A]/10">
                <span>VER FICHA TÉCNICA</span>
                <ArrowRight className="w-4 h-4 text-[#D9682B] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Note Box */}
        <div className="p-4 bg-white border-2 border-[#12324A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#12324A]">
          <span>Não encontrou seu equipamento na lista? Consulte nosso técnico direto pelo WhatsApp.</span>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#16a34a] hover:underline shrink-0"
          >
            PERGUNTAR NO WHATSAPP →
          </a>
        </div>

      </div>
    </section>
  );
};
