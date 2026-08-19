import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, CheckCircle2, AlertCircle, PhoneCall, HelpCircle, ArrowRight, DollarSign, CreditCard } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { PRICING_DATA, PAYMENT_METHODS } from '../data/pricing';
import { COMPANY_INFO } from '../data/company';

interface PricingViewProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onOpenBookingModal }) => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <EnhancedSEO
        title="Tabela de Preços de Conserto de Geladeira e Refrigeração | SC Refrigeração"
        description="Confira nossa tabela de preços transparente para conserto de geladeira, kit degelo, termostato, carga de gás e lava e seca. Orçamento sem surpresas e garantia 90 dias."
        canonicalUrl="/precos"
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Tabela de Preços", item: "/precos" }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 px-4 border-b border-cyan-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-semibold uppercase tracking-wider mb-4">
            <DollarSign className="w-3.5 h-3.5" /> Política de Preço Justo e Transparência
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Tabela de Preços & Prazos Estimados
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Sem pegadinhas ou valores ocultos. Avaliação técnica no local com multímetro digital, orçamento prévio antes da execução, peças originais e <strong className="text-cyan-400">garantia formal de 90 dias</strong> por escrito.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white">Garantia de 90 Dias</h2>
                <p className="text-xs text-slate-300">Cobertura total em peças e mão de obra</p>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white">Visita Abatida</h2>
                <p className="text-xs text-slate-300">Aprovando o conserto, a taxa de visita é 100% isenta</p>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white">Até 12x no Cartão</h2>
                <p className="text-xs text-slate-300">Facilidade de pagamento no crédito ou PIX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Table */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
            Valores Médios dos Principais Serviços
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Valores de referência para modelos residenciais e comerciais. O valor exato é informado pelo técnico no laudo presencial.
          </p>
        </div>

        <div className="space-y-6">
          {PRICING_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 mt-2">{item.service}</h3>
                </div>
                <div className="md:text-right bg-cyan-50/60 p-3 rounded-xl border border-cyan-100 md:bg-transparent md:border-0 md:p-0">
                  <span className="text-xs text-slate-700 uppercase tracking-wider font-semibold block">Preço Estimado</span>
                  <span className="text-2xl font-black text-cyan-700">{item.startingPrice}</span>
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed my-4">
                {item.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4 bg-slate-50 p-4 rounded-xl">
                {item.whatsIncluded.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-600" /> Tempo médio: <strong>{item.averageTime}</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" /> Garantia: <strong>{item.warranty}</strong>
                  </span>
                </div>
                <button
                  onClick={() => onOpenBookingModal(item.service)}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
                >
                  Solicitar Orçamento <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Factors that Influence Cost */}
      <section className="bg-slate-100 py-12 px-4 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Quais Fatores Influenciam o Valor do Conserto?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">1. Tecnologia do Eletrodoméstico</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Geladeiras Inverter, Side by Side e French Door possuem placas eletrônicas microprocessadas e múltiplos sensores térmicos, exigindo componentes de precisão específicos de cada fabricante.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">2. Peças Originais de Fábrica</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Priorizamos 100% de peças genuínas (Brastemp, Electrolux, Consul, Samsung, LG). Peças genéricas baratas queimam em poucos meses e não oferecem segurança.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">3. Complexidade da Mão de Obra</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Serviços de brasagem com maçarico de oxigênio, vácuo profundo com bomba de duplo estágio e substituição de compressores exigem maior tempo e ferramental especializado.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">4. Deslocamento & Região</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Atendemos o Anel 1 (Penha, Navegantes, Piçarras, Itajaí, BC, Itapema) com valor de visita reduzido devido à proximidade contínua de nossas viaturas técnicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Formas de Pagamento Aceitas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PAYMENT_METHODS.map((pm, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm">{pm.name}</h3>
              <p className="text-xs text-cyan-600 mt-1">{pm.discount}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing FAQs with details / summary */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
          Dúvidas Frequentes sobre Orçamentos e Preços
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-5 rounded-xl border border-slate-200 group">
            <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between list-none">
              <span>Como funciona a cobrança da visita técnica?</span>
              <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              O técnico se desloca até sua residência ou comércio, avalia o equipamento com instrumentos profissionais e apresenta o orçamento formal. Se você aprovar o conserto no mesmo momento, o valor da visita técnica é 100% abatido do valor final do serviço.
            </p>
          </details>

          <details className="bg-white p-5 rounded-xl border border-slate-200 group">
            <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between list-none">
              <span>O valor do orçamento pode mudar durante o conserto?</span>
              <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Não. Trabalhamos com preço fechado informado antes de iniciar qualquer serviço. Havendo necessidade de troca de peça adicional não prevista, você é consultado com total transparência antes da execução.
            </p>
          </details>

          <details className="bg-white p-5 rounded-xl border border-slate-200 group">
            <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between list-none">
              <span>Qual a garantia dos consertos e peças?</span>
              <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Todos os nossos serviços contam com garantia legal formal de 90 dias por escrito, cobrindo tanto as peças novas instaladas quanto a mão de obra técnica.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white p-8 sm:p-10 rounded-2xl text-center border border-cyan-800/40">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Precisa de um Diagnóstico Hoje Mesmo?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-6">
            Nossos técnicos de plantão estão prontos para atender você em Penha, Navegantes, Itajaí, Balneário Camboriú e região.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal('Visita Técnica e Orçamento')}
              className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Agendar Visita Técnica
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              Falar no WhatsApp: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
