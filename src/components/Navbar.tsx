import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface NavbarProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      {/* Top Banner Info */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-950 text-xs py-1.5 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-slate-300">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Sede em Penha / Piçarras • Raio 200 km
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> Plantão 24h & Domingos até 12h
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Garantia 90 Dias
            </span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hover:text-cyan-400 transition-colors hidden md:inline"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <img 
              src={COMPANY_INFO.assets.logo} 
              alt="Santa Catarina Refrigeração Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden min-[380px]:block">
              <span className="block text-lg font-black tracking-tight text-white leading-tight uppercase">
                SANTA CATARINA
              </span>
              <span className="block text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                REFRIGERAÇÃO
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <a href="/#servicos" className="text-slate-300 hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="/conserto-de-geladeira/" className="text-slate-300 hover:text-cyan-400 transition-colors">Geladeiras</a>
            <a href="/conserto-lava-e-seca-penha" className="text-slate-300 hover:text-cyan-400 transition-colors">Lava e Seca</a>
            <a href="/conserto-de-camara-fria/" className="text-slate-300 hover:text-cyan-400 transition-colors">Câmaras Frias</a>
            <a href="/#cobertura" className="text-slate-300 hover:text-cyan-400 transition-colors">Cidades</a>
            <a href="/#depoimentos" className="text-slate-300 hover:text-cyan-400 transition-colors">Depoimentos</a>
            <a href="/#faq" className="text-slate-300 hover:text-cyan-400 transition-colors">FAQ</a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              Agendar Online
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              {COMPANY_INFO.phone}
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-900/30 transition-all hover:scale-105"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              Orçamento no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 sm:hidden">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500 text-white text-xs font-bold"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Abrir Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <a
            href="/#servicos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Nossos Serviços
          </a>
          <a
            href="/conserto-de-geladeira/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Conserto de Geladeira
          </a>
          <a
            href="/conserto-lava-e-seca-penha"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Conserto Lava e Seca
          </a>
          <a
            href="/conserto-de-camara-fria/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Câmaras Frias & Comercial
          </a>
          <a
            href="/#cobertura"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Cidades Atendidas (Raio 200km)
          </a>
          <a
            href="/#depoimentos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Depoimentos de Clientes
          </a>
          <a
            href="/#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Perguntas Frequentes (FAQ)
          </a>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 text-cyan-300 font-bold text-sm border border-cyan-500/30"
            >
              <Calendar className="w-4 h-4" />
              Agendar Visita Técnica
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 text-slate-200 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              Ligar para {COMPANY_INFO.phone}
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-sm shadow-md"
            >
              Chamar no WhatsApp Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
