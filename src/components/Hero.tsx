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
            
            {/* Main Headline with Premium Impactful Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 35, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
            >
              Assistência Técnica <br />
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-[length:200%_auto] drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] inline-block"
              >
                Especializada em Refrigeração
              </motion.span>
            </motion.h1>

            {/* Subtitle with Premium Blur-Slide Animation */}
            <motion.p
              initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Visita rápida no mesmo dia para <strong className="text-white font-bold">Geladeiras, Side by Side, Freezers, Câmaras Frias, Balcões Refrigerados, Frigobares e Lava e Seca</strong> em toda a região com garantia formal de 90 dias e peças originais.
            </motion.p>

            {/* Quick Benefits Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
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

            {/* Trust Footer line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
              
              {/* Video Showcase Container */}
              <div className="relative aspect-video bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                >
                  <source src="https://img.supremasite.com.br/santa-catarina.mp4" type="video/mp4" />
                </video>

                {/* Live Status Badge Overlay */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/85 border border-slate-700 text-[11px] font-bold text-cyan-400 backdrop-blur-md flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Atendimento em SC
                </div>

                {/* Warranty Badge Floating Seal */}
                <div className="absolute -top-3 -right-3 w-20 h-20 sm:w-24 sm:h-24 drop-shadow-xl pointer-events-none z-10">
                  <img
                    src={COMPANY_INFO.assets.warrantyBadge}
                    alt="Selo de Garantia 90 Dias"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Technical Ratings Bar */}
              <div className="bg-slate-950/90 border border-slate-800 p-4 rounded-2xl flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-cyan-950 text-cyan-400 rounded-xl border border-cyan-800/80 shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-extrabold text-white">Técnicos Certificados</p>
                    <p className="text-slate-400 text-xs">Visita rápida no seu imóvel</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-amber-400 font-black text-base">4.9 ★</span>
                  <p className="text-[10px] text-slate-400 font-medium">180+ avaliações</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
