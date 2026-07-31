import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, MapPin, Calendar, Wrench, CheckCircle2, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
      
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text & Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Location & Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Sede Navegantes & Penha • Atendimento Domiciliar 24h em SC</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
            >
              Assistência Técnica <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
                Especializada em Refrigeração
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Visita rápida no mesmo dia para <strong className="text-white font-bold">Geladeiras, Side by Side, Freezers, Câmaras Frias, Balcões Refrigerados, Frigobares e Lava e Seca</strong> em toda a região com garantia formal de 90 dias e peças originais.
            </motion.p>

            {/* Quick Benefits Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1 text-xs sm:text-sm text-slate-200 font-medium"
            >
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Orçamento Transparente no Local
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Plantão 24h & Emergencial
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Peças Originais com Nota
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3"
            >
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0 min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Atendimento WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenBookingModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm sm:text-base transition-all min-h-[52px] shadow-lg backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Agendar Visita</span>
              </button>
            </motion.div>

            {/* Trust Footer line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-300 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-cyan-400" />
                Garantia de 90 dias por escrito
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4.5 h-4.5 text-emerald-400" />
                Chegada em ~30 min
              </span>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Interactive Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-md max-w-md w-full space-y-4">
              
              {/* Equipment Showcase Image Container */}
              <div className="relative bg-slate-950/80 border border-slate-800 rounded-2xl p-3 overflow-hidden">
                <img
                  src={COMPANY_INFO.assets.heroEquipments}
                  alt="Equipamentos de Refrigeração Atendidos em Santa Catarina"
                  className="w-full h-auto object-contain rounded-xl max-h-64 mx-auto drop-shadow-2xl"
                />

                {/* Warranty Badge Floating Seal */}
                <div className="absolute -top-3 -right-3 w-20 h-20 sm:w-24 sm:h-24 drop-shadow-xl pointer-events-none">
                  <img
                    src={COMPANY_INFO.assets.warrantyBadge}
                    alt="Selo de Garantia 90 Dias"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Technical Ratings & Call Bar */}
              <div className="bg-slate-950/90 border border-slate-800 p-4 rounded-2xl flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-cyan-950 text-cyan-400 rounded-xl border border-cyan-800/80 shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-extrabold text-white">Técnicos Certificados</p>
                    <p className="text-slate-400 text-xs">Visitas diárias em Penha, Piçarras, Itajaí e região</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-amber-400 font-black text-base">4.9 ★</span>
                  <p className="text-[10px] text-slate-400 font-medium">180+ avaliações</p>
                </div>
              </div>

              {/* Quick Direct Call Button inside Card */}
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full py-3 rounded-xl bg-blue-600/90 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-blue-500/40 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar Diretamente: {COMPANY_INFO.phone}</span>
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
