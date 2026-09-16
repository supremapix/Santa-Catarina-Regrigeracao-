import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, MapPin, Wrench, CheckCircle2, Phone, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const marqueeItems = [
    {
      type: 'badge',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
      content: <span>Orçamento Transparente no Local</span>,
    },
    {
      type: 'badge',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
      content: <span>Plantão 24h & Emergencial</span>,
    },
    {
      type: 'badge',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
      content: <span>Peças Originais com Nota</span>,
    },
    {
      type: 'badge',
      icon: <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />,
      content: <span>Garantia de 90 dias por escrito</span>,
    },
    {
      type: 'badge',
      icon: <Clock className="w-4 h-4 text-emerald-400 shrink-0" />,
      content: <span>Agendamento no Mesmo Dia</span>,
    },
    {
      type: 'phone',
      icon: <Phone className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />,
      content: (
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 hover:text-white hover:bg-emerald-500/40 transition-all font-bold group"
          title="Ligar para Assistência Técnica"
        >
          <span>Ligar: {COMPANY_INFO.phone}</span>
          <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
        </a>
      ),
    },
    {
      type: 'address',
      icon: <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />,
      content: (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address.full)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-cyan-500/40 transition-all font-bold group"
          title="Ver localização no Google Maps"
        >
          <span>Loja: {COMPANY_INFO.address.full}</span>
          <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
        </a>
      ),
    },
  ];

  // Triplicate the items array to ensure a seamless continuous infinite loop
  const duplicatedMarquee = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-16 lg:pt-24 border-b border-slate-800">
      
      {/* Background Video Layer - High Visibility on Mobile & PC */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 sm:opacity-85 scale-105"
        >
          <source src="https://img.supremasite.com.br/refrigeracao.mp4" type="video/mp4" />
        </video>
        {/* Soft Contrast Gradient Overlays for High Video Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text & Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Main Headline with Premium Impactful Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 35, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
            >
              Assistência Técnica em Refrigeração Residencial, Comercial e Industrial em SC
            </motion.h1>

            {/* Subtitle explaining company, services, location and contact */}
            <motion.p
              initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              A <strong className="text-white font-bold">Santa Catarina Refrigeração</strong> é especializada em manutenção preventiva e corretiva de equipamentos de frio com sede comercial em Navegantes/SC. Atendemos residências, restaurantes, comércios e indústrias em Navegantes, Penha, Balneário Piçarras, Itajaí, Barra Velha, Balneário Camboriú e região.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-300 text-sm space-y-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-left"
            >
              <p>
                <strong className="text-cyan-400 font-bold">Equipamentos Atendidos:</strong> Geladeiras Frost Free, Side by Side, French Door, Cervejeiras, Freezers, Frigobares, Adegas Climatizadas, Câmaras Frias, Balcões Refrigerados, Expositores de Bebidas, Máquinas de Gelo, Máquinas de Sorvete, Chopeiras, Contêiner Reefer e Lava e Seca.
              </p>
              <p>
                <strong className="text-emerald-400 font-bold">Diferença de Manutenção:</strong> A <strong className="text-white font-semibold">preventiva</strong> ajusta e higieniza os componentes periodicamente para evitar paradas e economizar energia. A <strong className="text-white font-semibold">corretiva</strong> atua no diagnóstico e reparo imediato quando o equipamento apresenta falhas de temperatura ou paralisação.
              </p>
              <p className="text-xs text-slate-400 pt-1">
                📍 <strong className="text-slate-300">Base Comercial:</strong> {COMPANY_INFO.address.full} | Solicite atendimento com triagem pelo WhatsApp (47) 99224-5172.
              </p>
            </motion.div>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2"
            >
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 text-sm transition-all"
              >
                <span>Solicitar Técnico no WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => onOpenBookingModal()}
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-xl border border-slate-700 flex items-center justify-center gap-2 text-sm transition-all"
              >
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>Agendar Diagnóstico Online</span>
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Commercial/Industrial Photography Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-md max-w-lg w-full space-y-4">
              
              {/* Commercial & Industrial Main Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 aspect-video shadow-md">
                <img
                  src={COMPANY_INFO.assets.heroCommercial}
                  alt="Refrigeração Comercial e Industrial em Santa Catarina - Santa Catarina Refrigeração"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/60 text-[11px] font-bold text-cyan-300 backdrop-blur-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Comercial, Industrial & Residencial</span>
                </div>
              </div>

              {/* Header Info Box with Status & Warranty Seal */}
              <div className="bg-slate-950/90 border border-slate-800 p-4 rounded-2xl flex items-center justify-between gap-3 relative overflow-hidden">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-800 text-[11px] font-bold text-cyan-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Equipe Especializada em SC</span>
                  </div>
                  <p className="text-white font-extrabold text-sm sm:text-base leading-snug">
                    Laboratório Móvel & Peças de Qualidade
                  </p>
                  <p className="text-slate-400 text-xs">
                    Atendimento ágil em Penha, Navegantes, Piçarras, Itajaí, BC e região
                  </p>
                </div>

                <div className="w-16 h-16 shrink-0 drop-shadow-xl">
                  <img
                    src={COMPANY_INFO.assets.warrantyBadge}
                    alt="Selo de Garantia 90 Dias"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
                  />
                </div>
              </div>

              {/* Quick Feature Highlights */}
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garantia 90 Dias</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Atendimento Ágil</span>
                </div>
              </div>

              {/* Technical Standards Bar (Sanitized Factual Data) */}
              <div className="bg-slate-950/90 border border-slate-800 p-3.5 rounded-2xl flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-cyan-950 text-cyan-400 rounded-xl border border-cyan-800/80 shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-extrabold text-white">Equipe Especializada</p>
                    <p className="text-slate-400 text-xs">Diagnóstico transparente no local</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-emerald-400 font-bold text-xs">Nota & Recibo</span>
                  <p className="text-[10px] text-slate-400 font-medium">Garantia formal</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Animated Ticker / Letreiro Animado Bar (Below Hero) */}
      <div className="relative z-20 bg-slate-950/95 border-t border-slate-800/80 py-3 overflow-hidden shadow-2xl backdrop-blur-md">
        <div className="flex overflow-hidden select-none group">
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap shrink-0 group-hover:[animation-play-state:paused]"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedMarquee.map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                {item.icon}
                {item.content}
                <span className="text-slate-700 mx-2">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

