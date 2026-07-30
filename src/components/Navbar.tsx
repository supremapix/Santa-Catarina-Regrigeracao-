import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ShieldCheck, MapPin, Clock, ChevronDown, ChevronRight, MessageCircle, Navigation, Search } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { CITIES_DATA } from '../data/cities';

interface NavbarProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesAccordionOpen, setIsServicesAccordionOpen] = useState(true);
  const [isCitiesAccordionOpen, setIsCitiesAccordionOpen] = useState(false);
  const [isNeighborhoodsAccordionOpen, setIsNeighborhoodsAccordionOpen] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  
  const location = useLocation();

  // Close menu and restore scroll on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close drawer on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Top featured cities for quick menu display
  const featuredCities = CITIES_DATA.slice(0, 10);
  const filteredCities = citySearch
    ? CITIES_DATA.filter(c => c.name.toLowerCase().includes(citySearch.toLowerCase()) || c.neighborhoods.some(n => n.toLowerCase().includes(citySearch.toLowerCase()))).slice(0, 12)
    : featuredCities;

  // Key neighborhoods
  const featuredNeighborhoods = [
    { name: 'Gravatá (Navegantes)', slug: 'gravata' },
    { name: 'Armação (Penha)', slug: 'armacao' },
    { name: 'Praia Brava (Itajaí)', slug: 'praia-brava' },
    { name: 'Meia Praia (Itapema)', slug: 'meia-praia' },
    { name: 'Itajuba (Barra Velha)', slug: 'itajuba' },
    { name: 'Centro (Navegantes)', slug: 'centro' },
    { name: 'Barra Sul (Baln. Camboriú)', slug: 'balneario-camboriu' },
    { name: 'Praia Grande (Penha)', slug: 'penha' }
  ];

  const isCurrentRoute = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 text-white shadow-xl transition-all">
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 text-xs py-2 px-4 border-b border-slate-800/80 hidden sm:block">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-slate-300">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Base em Navegantes / Penha • Atendimento Raio 200 km</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Plantão 24h & Domingos até 12h</span>
              </span>
            </div>
            <div className="flex items-center space-x-5">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> Garantia 90 Dias
              </span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-cyan-400 transition-colors hidden md:inline text-slate-400"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group py-1" aria-label="Ir para a página inicial">
              <img
                src={COMPANY_INFO.assets.logo}
                alt="Santa Catarina Refrigeração Logo"
                className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="hidden min-[380px]:block">
                <span className="block text-base font-black tracking-tight text-white leading-tight uppercase">
                  SANTA CATARINA
                </span>
                <span className="block text-[11px] font-bold tracking-widest text-cyan-400 uppercase">
                  REFRIGERAÇÃO
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
              <a
                href="/"
                className={`transition-colors py-2 border-b-2 ${
                  isCurrentRoute('/') && !location.hash
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-300 hover:text-cyan-400'
                }`}
              >
                Início
              </a>
              
              <a
                href="/conserto-de-geladeira/"
                className={`transition-colors py-2 border-b-2 ${
                  isCurrentRoute('/conserto-de-geladeira')
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-300 hover:text-cyan-400'
                }`}
              >
                Geladeiras
              </a>

              <a
                href="/conserto-lava-e-seca-penha"
                className={`transition-colors py-2 border-b-2 ${
                  isCurrentRoute('/conserto-lava-e-seca')
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-300 hover:text-cyan-400'
                }`}
              >
                Lava e Seca
              </a>

              <a
                href="/conserto-de-camara-fria/"
                className={`transition-colors py-2 border-b-2 ${
                  isCurrentRoute('/conserto-de-camara-fria')
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-300 hover:text-cyan-400'
                }`}
              >
                Câmaras Frias
              </a>

              <a
                href="/#cobertura"
                className="border-b-2 border-transparent text-slate-300 hover:text-cyan-400 transition-colors py-2"
              >
                Cidades
              </a>

              <a
                href="/#depoimentos"
                className="border-b-2 border-transparent text-slate-300 hover:text-cyan-400 transition-colors py-2"
              >
                Depoimentos
              </a>

              <a
                href="/#faq"
                className="border-b-2 border-transparent text-slate-300 hover:text-cyan-400 transition-colors py-2"
              >
                FAQ
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => onOpenBookingModal()}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all hover:border-cyan-400 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                Agendar Horário
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="hidden md:flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-bold transition-all hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                {COMPANY_INFO.phone}
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Orçamento</span>
              </a>
            </div>

            {/* Mobile Actions & Hamburger Toggle */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Animated Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-5 relative flex flex-col justify-between items-center">
                  <span
                    className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 transform origin-left ${
                      isMobileMenuOpen ? 'rotate-45 translate-x-1 -translate-y-0.5' : ''
                    }`}
                  />
                  <span
                    className={`w-6 h-0.5 bg-current rounded-full transition-all duration-200 ${
                      isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 transform origin-left ${
                      isMobileMenuOpen ? '-rotate-45 translate-x-1 translate-y-0.5' : ''
                    }`}
                  />
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Off-Canvas Mobile Drawer Overlay & Content */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          
          {/* Dark Backdrop Overlay */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
            aria-hidden="true"
          />

          {/* Sliding Drawer Container */}
          <div className="relative w-full max-w-sm bg-slate-950 border-l border-slate-800 h-full flex flex-col justify-between shadow-2xl z-50 overflow-y-auto animate-slideLeft">
            
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-800/80 flex items-center justify-between sticky top-0 bg-slate-950/95 backdrop-blur-md z-10">
              <div className="flex items-center space-x-2">
                <img
                  src={COMPANY_INFO.assets.logo}
                  alt="Santa Catarina Refrigeração"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-bold text-sm text-white uppercase tracking-tight">
                  Santa Catarina Refrigeração
                </span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body Nav Links */}
            <div className="p-4 space-y-4 text-sm flex-1">
              
              {/* Quick Navigation */}
              <div className="space-y-1">
                <a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl font-medium transition-colors ${
                    isCurrentRoute('/') && !location.hash
                      ? 'bg-cyan-950/80 text-cyan-400 font-bold border border-cyan-800/60'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-cyan-400'
                  }`}
                >
                  <span>Início</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              </div>

              {/* Accordion 1: Nossos Serviços */}
              <div className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/50">
                <button
                  onClick={() => setIsServicesAccordionOpen(!isServicesAccordionOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-left text-white font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800/80 transition-colors"
                >
                  <span className="flex items-center gap-2 text-cyan-400">
                    <Navigation className="w-4 h-4" />
                    <span>Nossos Serviços</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesAccordionOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesAccordionOpen && (
                  <div className="p-2 space-y-1 bg-slate-950/80 border-t border-slate-800 text-xs">
                    <a
                      href="/conserto-de-geladeira/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-cyan-400 font-medium"
                    >
                      Conserto de Geladeiras & Frost Free
                    </a>
                    <a
                      href="/conserto-de-side-by-side/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-cyan-400 font-medium"
                    >
                      Geladeiras Side by Side & French Door
                    </a>
                    <a
                      href="/conserto-lava-e-seca-penha"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-cyan-400 font-medium"
                    >
                      Conserto de Lava e Seca
                    </a>
                    <a
                      href="/conserto-de-freezer/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-cyan-400 font-medium"
                    >
                      Freezers Verticais e Horizontais
                    </a>
                    <a
                      href="/conserto-de-frigobar/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-cyan-400 font-medium"
                    >
                      Conserto de Frigobares
                    </a>
                    <a
                      href="/conserto-de-camara-fria/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-cyan-400 font-medium"
                    >
                      Câmaras Frias & Commercial
                    </a>
                    <a
                      href="/conserto-de-balcao-refrigerado/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-cyan-400 font-medium"
                    >
                      Balcões Refrigerados & Cervejeiras
                    </a>
                    <a
                      href="/conserto-de-adega/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2.5 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-cyan-400 font-medium"
                    >
                      Adegas Climatizadas
                    </a>
                  </div>
                )}
              </div>

              {/* Accordion 2: Cidades Atendidas */}
              <div className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/50">
                <button
                  onClick={() => setIsCitiesAccordionOpen(!isCitiesAccordionOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-left text-white font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800/80 transition-colors"
                >
                  <span className="flex items-center gap-2 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                    <span>Cidades Atendidas</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCitiesAccordionOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCitiesAccordionOpen && (
                  <div className="p-3 space-y-2 bg-slate-950/80 border-t border-slate-800 text-xs">
                    {/* Search city input */}
                    <div className="relative mb-2">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Filtrar cidade..."
                        value={citySearch}
                        onChange={(e) => setCitySearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
                      {filteredCities.map((c) => (
                        <a
                          key={c.slug}
                          href={`/conserto-de-geladeira-em-${c.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="p-2 rounded-lg bg-slate-900/90 text-slate-300 hover:bg-cyan-950 hover:text-cyan-300 font-medium truncate flex items-center gap-1 text-[11px]"
                        >
                          <ChevronRight className="w-3 h-3 text-cyan-500 shrink-0" />
                          <span className="truncate">{c.name}</span>
                        </a>
                      ))}
                    </div>

                    <a
                      href="/#cobertura"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-center py-2 font-bold text-cyan-400 hover:underline text-xs pt-2 border-t border-slate-800"
                    >
                      Ver todas as 40+ Cidades Atendidas →
                    </a>
                  </div>
                )}
              </div>

              {/* Accordion 3: Bairros em Destaque */}
              <div className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/50">
                <button
                  onClick={() => setIsNeighborhoodsAccordionOpen(!isNeighborhoodsAccordionOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-left text-white font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800/80 transition-colors"
                >
                  <span className="flex items-center gap-2 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                    <span>Bairros em Destaque</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isNeighborhoodsAccordionOpen ? 'rotate-180' : ''}`} />
                </button>

                {isNeighborhoodsAccordionOpen && (
                  <div className="p-3 space-y-1.5 bg-slate-950/80 border-t border-slate-800 text-xs">
                    <div className="grid grid-cols-1 gap-1">
                      {featuredNeighborhoods.map((b, idx) => (
                        <a
                          key={idx}
                          href={`/bairros/${b.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="p-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-cyan-400 font-medium flex items-center gap-1.5"
                        >
                          <ChevronRight className="w-3 h-3 text-cyan-500" />
                          <span>{b.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other Section Links */}
              <div className="space-y-1 pt-2">
                <a
                  href="/#depoimentos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-3 rounded-xl text-slate-200 font-medium hover:bg-slate-900 hover:text-cyan-400"
                >
                  Depoimentos de Clientes
                </a>
                <a
                  href="/#faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-3 rounded-xl text-slate-200 font-medium hover:bg-slate-900 hover:text-cyan-400"
                >
                  Perguntas Frequentes (FAQ)
                </a>
              </div>

            </div>

            {/* Drawer Footer Actions (CTAs) */}
            <div className="p-4 border-t border-slate-800/80 bg-slate-950 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 font-bold text-xs border border-cyan-500/30 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Agendar Visita Técnica Online</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Ligar {COMPANY_INFO.phone}</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-950/50"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>

              <p className="text-[11px] text-slate-500 text-center pt-1">
                Atendimento domiciliar em Navegantes, Penha e toda a região.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
