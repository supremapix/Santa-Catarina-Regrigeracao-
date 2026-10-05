import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { trackContactClick } from '../utils/analytics';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 pointer-events-none">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo da página"
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 shadow-md backdrop-blur-md pointer-events-auto transition-all hover:scale-105 active:scale-95"
        >
          <ArrowUp className="w-4 h-4 text-cyan-400" />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        onClick={() => trackContactClick({
          channel: 'whatsapp',
          location: 'floating_whatsapp_button',
          label: 'WhatsApp Floating Action'
        })}
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg border border-emerald-500/30 backdrop-blur-md pointer-events-auto transition-all hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span>WhatsApp</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
        </span>
      </a>
    </div>
  );
};
