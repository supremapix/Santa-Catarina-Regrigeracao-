import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FloatingWhatsAppProps {
  onOpenBookingModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBookingModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="p-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 shadow-lg backdrop-blur-md pointer-events-auto transition-all hover:scale-110"
        >
          <ArrowUp className="w-5 h-5 text-cyan-400" />
        </button>
      )}

      {/* Online Schedule Button (Desktop/Tablet) */}
      <button
        onClick={onOpenBookingModal}
        className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 text-xs font-bold shadow-xl backdrop-blur-md pointer-events-auto transition-all hover:scale-105"
      >
        <Calendar className="w-4 h-4 text-cyan-400" />
        <span>Agendar Visita 24h</span>
      </button>

      {/* Floating WhatsApp CTA */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="group relative flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-2xl shadow-emerald-950/60 pointer-events-auto transition-all hover:scale-110 active:scale-95"
      >
        {/* Pulsing Green Halo */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-6 h-6 shrink-0 relative z-10" />
        <span className="hidden md:inline relative z-10">WhatsApp Orçamento Grátis</span>

        {/* Small Online Badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-emerald-700"></span>
        </span>
      </a>

    </div>
  );
};
