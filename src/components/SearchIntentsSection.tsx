import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Flame, Wrench, Droplets, Zap, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface SearchIntentsSectionProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const SearchIntentsSection: React.FC<SearchIntentsSectionProps> = ({ onOpenBookingModal }) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'geladeiras' | 'lava-e-seca' | 'comercial'>('todos');

  const searchIntents = [
    {
      category: 'geladeiras',
      badge: 'Buscado em Penha, Piçarras & Região',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      title: 'Geladeira gela no freezer mas NÃO gela na parte de baixo',
      intentQuery: '"geladeira nao gela parte de baixo frost free"',
      pain: 'Alimentos estragando na parte inferior, poça de gelo no fundo e dúvida se compensa consertar.',
      rootCause: 'Falha no sistema de degelo automático (sensor NTC descalibrado, resistência queimada, fusível térmico aberto ou dreno entupido).',
      effectiveSolution: 'Testamos a resistência e sensores com multímetro digital. Realizamos a troca do kit de degelo original e desobstrução do dreno no mesmo dia.',
      timeToSolve: 'Conserto em 45 a 90 minutos no local',
      prefillMsg: 'Olá! Minha geladeira gela no freezer mas não gela embaixo. Gostaria de um orçamento gratuito.',
      tagService: 'Geladeiras'
    },
    {
      category: 'lava-e-seca',
      badge: 'Solução Especializada Lava e Seca',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      title: 'Lava e Seca travada com água, código de erro OE / 5E ou barulho de batedeira',
      intentQuery: '"conserto lava e seca erro OE 5E barulho centrifugação"',
      pain: 'Roupas molhadas presas dentro da máquina, água sem escoar ou barulho insuportável de ferro batendo na centrifugação.',
      rootCause: 'Bomba de drenagem queimada/obstruída ou rolamentos blindados desgastados com quebra do suporte da cruzeta do tambor.',
      effectiveSolution: 'Substituição imediata da bomba de esgotamento ou troca do kit completo de rolamentos blindados e suporte do tambor com alinhamento a laser.',
      timeToSolve: 'Atendimento e reparo rápido no mesmo dia',
      prefillMsg: 'Olá! Minha Lava e Seca está com erro ou barulho forte. Preciso de assistência técnica em domicílio.',
      tagService: 'Lava e Seca',
      featuredImage: 'https://img.supremasite.com.br/lava-e-seca-sc.webp'
    },
    {
      category: 'geladeiras',
      badge: 'Problema em Placas e Motores',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      title: 'Geladeira apitando, piscando luzes ou motor estalando e não parte',
      intentQuery: '"geladeira apitando piscando motor dando estalo"',
      pain: 'Alarme sonoro constante irritante, geladeira desligando sozinha ou estalos repetitivos no motor sem gelar.',
      rootCause: 'Defeito no capacitor/relé de partida do compressor ou desconfiguração da placa eletrônica de potência Inverter.',
      effectiveSolution: 'Reparo ou reprogramação da placa eletrônica original, substituição de relés e protetor térmico com peças de fábrica.',
      timeToSolve: 'Diagnóstico e reparo imediato',
      prefillMsg: 'Olá! Minha geladeira está apitando / piscando ou o motor fica dando estalos sem gelar.',
      tagService: 'Geladeiras'
    },
    {
      category: 'geladeiras',
      badge: 'Manutenção de Vedação',
      badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
      title: 'Vazamento de água sob a geladeira ou borracha rasgada/solta',
      intentQuery: '"vazamento de agua em baixo da geladeira troca de borracha"',
      pain: 'Piso da cozinha molhado estragando móveis de madeira e alto consumo de energia elétrica pelo escape de ar frio.',
      rootCause: 'Calha de evaporação obstruída e borrachas (gaxetas) magnéticas ressecadas que perderam o magnetismo.',
      effectiveSolution: 'Higienização e desobstrução técnica do dreno + instalação de gaxeta magnética sob medida com vedação 100% hermética.',
      timeToSolve: 'Atendimento express em domicílio',
      prefillMsg: 'Olá! Minha geladeira está vazando água ou precisa de troca da borracha da porta.',
      tagService: 'Geladeiras'
    },
    {
      category: 'comercial',
      badge: 'Plantão Comercial 24h',
      badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
      title: 'Câmara Fria, Balcão Expositor ou Cervejeira perdendo temperatura',
      intentQuery: '"conserto câmara fria cervejeira comercial urgente"',
      pain: 'Risco urgente de perda de estoque de bebidas, carnes, peixes e laticínios em peixarias, restaurantes, mercados e pousadas.',
      rootCause: 'Vazamento de fluido refrigerante, obstrução no tubo capilar ou queima do micromotor do evaporador/condensador.',
      effectiveSolution: 'Atendimento emergencial prioritário com teste de pressão por nitrogênio, solda técnica de cobre/prata e carga de gás.',
      timeToSolve: 'Chegada rápida emergencial com prioridade',
      prefillMsg: 'Olá! Preciso de atendimento URGENTE para refrigeração comercial (Câmara Fria / Cervejeira / Balcão).',
      tagService: 'Câmara Fria'
    }
  ];

  const filteredIntents = activeTab === 'todos' 
    ? searchIntents 
    : searchIntents.filter(item => item.category === activeTab);

  return (
    <section className="bg-slate-900 py-12 sm:py-16 text-white border-b border-slate-800" id="solucoes-buscas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-black uppercase tracking-wider">
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span>Principais Dores & Intenções de Busca na Região</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Qual é o Problema do seu <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
              Equipamento de Refrigeração ou Lavanderia?
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Atendemos os defeitos mais buscados em Balneário Piçarras, Penha, Navegantes, Itajaí, Balneário Camboriú e toda a região num raio de até 200 km com solução eficaz e imediata.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'todos', label: 'Todos os Defeitos' },
              { id: 'geladeiras', label: 'Geladeiras & Refrigeradores' },
              { id: 'lava-e-seca', label: 'Lava e Seca' },
              { id: 'comercial', label: 'Comercial & Câmaras Frias' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all border ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lava e Seca Spotlight Card Banner */}
        { (activeTab === 'todos' || activeTab === 'lava-e-seca') && (
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/80 rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/60 shadow-2xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image Container */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                <div className="relative bg-slate-950/90 rounded-2xl p-4 border border-emerald-500/30 w-full max-w-sm flex items-center justify-center shadow-xl group">
                  <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 font-black text-[10px] uppercase px-3 py-1 rounded-full shadow-md z-10">
                    Sede & Atendimento Técnico
                  </span>
                  <img
                    src="https://img.supremasite.com.br/lava-e-seca-sc.webp"
                    alt="Conserto de Máquinas Lava e Seca em Balneário Piçarras, Penha e Região - Santa Catarina Refrigeração"
                    className="max-h-64 sm:max-h-72 w-auto object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_10px_25px_rgba(16,185,129,0.3)]"
                  />
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
                  <Wrench className="w-4 h-4 text-emerald-400" />
                  <span>Especialistas Multimarcas: LG, Samsung, Electrolux, Brastemp, Midea</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Conserto de Lava e Seca e Máquinas de Lavar em Domicílio
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  Sua lava e seca não escoa a água, travou a porta, não seca as roupas ou está com barulho forte na centrifugação? Realizamos o reparo no seu imóvel em Balneário Piçarras, Penha, Navegantes, Itajaí, Balneário Camboriú e cidades próximas.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 pt-1">
                  <div className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Erros OE, 5E, UE, dE, 4E e 1E</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Troca de Rolamentos & Cruzeta</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Placas Inverter e Motores Direct Drive</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Desobstrução do Duto de Secagem</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}%20para%20Conserto%20de%20Lava%20e%20Seca`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenBookingModal('Lava e Seca')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 font-bold text-sm transition-all"
                  >
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>Agendar</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Intention Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredIntents.map((intent, idx) => (
            <div
              key={idx}
              className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-5 shadow-lg"
            >
              <div className="space-y-3">
                {/* Header Badge & Search Intent string */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-black border uppercase tracking-wider ${intent.badgeColor}`}>
                    {intent.badge}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono italic">
                    {intent.intentQuery}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                  {intent.title}
                </h3>

                {/* Problem vs Cause vs Solution */}
                <div className="space-y-2.5 text-xs sm:text-sm pt-2">
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-900/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-red-400 font-bold">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Sintoma & Dor do Cliente:</span>
                    </div>
                    <p className="text-slate-300 font-normal pl-5">{intent.pain}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                      <Zap className="w-4 h-4 shrink-0" />
                      <span>Causa Técnica Comum:</span>
                    </div>
                    <p className="text-slate-300 font-normal pl-5">{intent.rootCause}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Solução Eficaz Santa Catarina Refrigeração:</span>
                    </div>
                    <p className="text-slate-200 font-medium pl-5">{intent.effectiveSolution}</p>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-bold">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{intent.timeToSolve}</span>
                </div>

                <a
                  href={`${COMPANY_INFO.whatsappUrl}%20-%20${encodeURIComponent(intent.prefillMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Coverage Radius Note */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-300 flex flex-wrap items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Sede física em <strong>Balneário Piçarras (Rua Ilhota, 1307)</strong> com atendimento móvel urgente em Penha, Navegantes, Itajaí, Balneário Camboriú, Camboriú, Itapema, Porto Belo, Bombinhas, Barra Velha, Brusque e região.
          </span>
        </div>

      </div>
    </section>
  );
};
