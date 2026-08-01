import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertTriangle, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Flame, Wrench, Droplets, Zap, Clock, Phone } from 'lucide-react';
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

        {/* Lava e Seca Spotlight Card Banner & Animated Task Bar */}
        { (activeTab === 'todos' || activeTab === 'lava-e-seca') && (
          <div className="space-y-4">
            {/* Spotlight Container (Clean & Innovative design without video) */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/60 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="space-y-4 text-left max-w-4xl mx-auto">
                
                {/* Badge Header */}
                <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
                  <Wrench className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Especialistas Multimarcas: LG, Samsung, Electrolux, Brastemp, Midea</span>
                </div>

                {/* Main Headline (Clean 2-3 lines alignment) */}
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                  Conserto de Lava e Seca e Máquinas de Lavar em Domicílio
                </h3>

                {/* Concise 2-3 line Description */}
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                  Sua lava e seca não escoa a água, travou a porta, não seca as roupas ou está com barulho forte na centrifugação? Realizamos o diagnóstico rápido e conserto no seu imóvel em Penha, Piçarras, Navegantes, Itajaí e região com peças originais e garantia formal.
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-200 pt-1">
                  <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-white">Erros OE, 5E, UE, dE</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-white">Rolamentos & Cruzeta</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-white">Placas Inverter & Motores</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-white">Limpeza de Dutos</span>
                  </div>
                </div>

                {/* Action Buttons directly inside section */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}%20para%20Conserto%20de%20Lava%20e%20Seca`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
                    <span>WhatsApp Técnico Direto</span>
                  </a>

                  <button
                    onClick={() => onOpenBookingModal('Lava e Seca')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/50 font-extrabold text-sm transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Agendar Visita Online</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-extrabold text-sm transition-all hover:scale-[1.02]"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Ligar: {COMPANY_INFO.phone}</span>
                  </a>
                </div>

              </div>
            </div>

            {/* TASK BAR ANIMADA (Letreiro Passando Clicável) */}
            <div className="relative bg-slate-900 border-2 border-slate-800 rounded-2xl p-3 shadow-xl overflow-hidden group">
              <div className="flex items-center gap-3">
                {/* Fixed Label Badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-black uppercase tracking-wider shrink-0 z-10 shadow-md">
                  <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Central Rápida:</span>
                </div>

                {/* Animated Marquee Container */}
                <div className="overflow-hidden w-full relative">
                  {/* Left & Right Fade Shadows */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

                  <div className="animate-marquee flex items-center gap-3">
                    {[
                      { type: 'link', label: 'Assistência Lava e Seca LG Penha', url: '/assistencia-lava-e-seca-lg-penha', icon: '🌀' },
                      { type: 'whatsapp', label: 'Consertar Erro OE / 5E / 4E', msg: 'Olá! Minha Lava e Seca está dando erro OE/5E.', icon: '⚡' },
                      { type: 'link', label: 'Assistência Samsung Lava e Seca', url: '/assistencia-lava-e-seca-samsung-penha', icon: '🌀' },
                      { type: 'booking', label: 'Agendar Visita Técnica no Imóvel', icon: '📅' },
                      { type: 'whatsapp', label: 'Barulho Forte na Centrifugação', msg: 'Olá! Minha lava e seca está com barulho forte na centrifugação.', icon: '🛠️' },
                      { type: 'link', label: 'Guia Completo Manutenção Lava e Seca', url: '/blog/lava-e-seca-penha-guia-completo', icon: '📖' },
                      { type: 'whatsapp', label: 'Troca de Placa Inverter / Motor', msg: 'Olá! Preciso de orçamento para troca de placa/motor.', icon: '🔌' },
                      { type: 'whatsapp', label: 'Atendimento Rápido no WhatsApp', msg: 'Olá! Preciso de atendimento para Lava e Seca.', icon: '💬' },

                      // Duplicate set for infinite smooth looping
                      { type: 'link', label: 'Assistência Lava e Seca LG Penha', url: '/assistencia-lava-e-seca-lg-penha', icon: '🌀' },
                      { type: 'whatsapp', label: 'Consertar Erro OE / 5E / 4E', msg: 'Olá! Minha Lava e Seca está dando erro OE/5E.', icon: '⚡' },
                      { type: 'link', label: 'Assistência Samsung Lava e Seca', url: '/assistencia-lava-e-seca-samsung-penha', icon: '🌀' },
                      { type: 'booking', label: 'Agendar Visita Técnica no Imóvel', icon: '📅' },
                      { type: 'whatsapp', label: 'Barulho Forte na Centrifugação', msg: 'Olá! Minha lava e seca está com barulho forte na centrifugação.', icon: '🛠️' },
                      { type: 'link', label: 'Guia Completo Manutenção Lava e Seca', url: '/blog/lava-e-seca-penha-guia-completo', icon: '📖' },
                      { type: 'whatsapp', label: 'Troca de Placa Inverter / Motor', msg: 'Olá! Preciso de orçamento para troca de placa/motor.', icon: '🔌' },
                      { type: 'whatsapp', label: 'Atendimento Rápido no WhatsApp', msg: 'Olá! Preciso de atendimento para Lava e Seca.', icon: '💬' },
                    ].map((item, idx) => (
                      item.type === 'link' ? (
                        <Link
                          key={idx}
                          to={item.url}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-xs font-bold text-slate-200 hover:text-cyan-300 transition-all shrink-0 shadow-sm"
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </Link>
                      ) : item.type === 'whatsapp' ? (
                        <a
                          key={idx}
                          href={`${COMPANY_INFO.whatsappUrl}%20-%20${encodeURIComponent(item.msg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-xs font-black text-emerald-300 transition-all shrink-0 shadow-sm hover:scale-105"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 fill-current" />
                          <span>{item.label}</span>
                        </a>
                      ) : (
                        <button
                          key={idx}
                          onClick={() => onOpenBookingModal('Lava e Seca')}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-xs font-black text-cyan-300 transition-all shrink-0 shadow-sm hover:scale-105"
                        >
                          <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{item.label}</span>
                        </button>
                      )
                    ))}
                  </div>
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
              className="bg-slate-800/95 rounded-2xl p-6 border-2 border-slate-700/80 hover:border-cyan-400 transition-all flex flex-col justify-between space-y-5 shadow-2xl"
            >
              <div className="space-y-3">
                {/* Header Badge & Search Intent string */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-black border uppercase tracking-wider ${intent.badgeColor}`}>
                    {intent.badge}
                  </span>
                  <span className="text-xs text-slate-300 font-mono italic">
                    {intent.intentQuery}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                  {intent.title}
                </h3>

                {/* Problem vs Cause vs Solution */}
                <div className="space-y-3 text-xs sm:text-sm pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border-2 border-red-500/60 space-y-1">
                    <div className="flex items-center gap-1.5 text-red-400 font-black text-sm">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Sintoma & Dor do Cliente:</span>
                    </div>
                    <p className="text-white font-medium pl-5 leading-relaxed">{intent.pain}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border-2 border-cyan-500/60 space-y-1">
                    <div className="flex items-center gap-1.5 text-cyan-300 font-black text-sm">
                      <Zap className="w-4 h-4 shrink-0" />
                      <span>Causa Técnica Comum:</span>
                    </div>
                    <p className="text-white font-medium pl-5 leading-relaxed">{intent.rootCause}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border-2 border-emerald-500/60 space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-black text-sm">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Solução Eficaz Santa Catarina Refrigeração:</span>
                    </div>
                    <p className="text-emerald-200 font-bold pl-5 leading-relaxed">{intent.effectiveSolution}</p>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-3 border-t border-slate-700 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-200 font-extrabold">
                  <Clock className="w-4 h-4 text-cyan-400" />
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
