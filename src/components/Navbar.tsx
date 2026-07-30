import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ShieldCheck, MapPin, Clock, ChevronDown, ChevronRight, MessageCircle, Navigation, Search, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { CITIES_DATA } from '../data/cities';

interface NavbarProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesAccordionOpen, setIsServicesAccordionOpen] = useState(true);
  const [isCitiesAccordionOpen, setIsCitiesAccordionOpen] = useState(true);
  const [isNeighborhoodsAccordionOpen, setIsNeighborhoodsAccordionOpen] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [isDesktopCitiesOpen, setIsDesktopCitiesOpen] = useState(false);
  
  const location = useLocation();

  // Close menu and restore scroll on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopCitiesOpen(false);
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
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsDesktopCitiesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Featured cities and regions for quick access
  const featuredCities = CITIES_DATA.slice(0, 16);
  const filteredCities = citySearch
    ? CITIES_DATA.filter(c => c.name.toLowerCase().includes(citySearch.toLowerCase()) || c.neighborhoods.some(n => n.toLowerCase().includes(citySearch.toLowerCase()))).slice(0, 16)
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
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b-2 border-slate-800 text-white shadow-2xl transition-all">
        
        {/* Senior-Friendly Announcement Bar with High Contrast */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 text-sm py-2 px-4 border-b border-slate-800 hidden sm:block">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-slate-200">
            <div className="flex items-center space-x-6 font-semibold">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Navegantes & Penha • Atendimento Raio 200 km</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Plantão 24 Horas em Domicílio</span>
              </span>
            </div>
            <div className="flex items-center space-x-5">
              <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
                <ShieldCheck className="w-4 h-4" /> Garantia 90 Dias
              </span>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="text-cyan-300 hover:underline font-bold text-sm"
              >
                Ligar: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group py-1" aria-label="Ir para a página inicial">
              <img
                src={COMPANY_INFO.assets.logo}
                alt="Santa Catarina Refrigeração Logo"
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="hidden min-[380px]:block">
                <span className="block text-base sm:text-lg font-black tracking-tight text-white leading-tight uppercase">
                  SANTA CATARINA
                </span>
                <span className="block text-xs font-bold tracking-widest text-cyan-400 uppercase">
                  REFRIGERAÇÃO
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-base font-bold">
              <a
                href="/"
                className={`transition-colors py-2 border-b-2 ${
                  isCurrentRoute('/') && !location.hash
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-200 hover:text-cyan-300'
                }`}
              >
                Início
              </a>
              
              <a
                href="/conserto-de-geladeira/"
                className={`transition-colors py-2 border-b-2 ${
                  isCurrentRoute('/conserto-de-geladeira')
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-200 hover:text-cyan-300'
                }`}
              >
                Geladeiras
              </a>

              <a
                href="/conserto-lava-e-seca-penha"
                className={`transition-colors py-2 border-b-2 ${
                  isCurrentRoute('/conserto-lava-e-seca')
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-200 hover:text-cyan-300'
                }`}
              >
                Lava e Seca
              </a>

              <a
                href="/conserto-de-camara-fria/"
                className={`transition-colors py-2 border-b-2 ${
                  isCurrentRoute('/conserto-de-camara-fria')
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-200 hover:text-cyan-300'
                }`}
              >
                Câmaras Frias
              </a>

              {/* Desktop Dropdown for Cities & Regions */}
              <div className="relative">
                <button
                  onClick={() => setIsDesktopCitiesOpen(!isDesktopCitiesOpen)}
                  onMouseEnter={() => setIsDesktopCitiesOpen(true)}
                  className="flex items-center gap-1 border-b-2 border-transparent text-slate-200 hover:text-cyan-300 transition-colors py-2"
                >
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Cidades e Regiões</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDesktopCitiesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDesktopCitiesOpen && (
                  <div
                    onMouseLeave={() => setIsDesktopCitiesOpen(false)}
                    className="absolute top-full left-0 w-80 bg-slate-900 border-2 border-slate-700 rounded-2xl shadow-2xl p-4 mt-2 space-y-3 z-50 animate-fadeIn"
                  >
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-2">
                      <Globe className="w-4 h-4" />
                      <span>Escolha sua Região ou Cidade</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {featuredCities.slice(0, 10).map((c) => (
                        <a
                          key={c.slug}
                          href={`/conserto-de-geladeira-em-${c.slug}`}
                          className="p-2 rounded-xl bg-slate-950/80 hover:bg-cyan-950 hover:text-cyan-300 text-slate-200 font-semibold truncate flex items-center gap-1 transition-colors"
                        >
                          <ChevronRight className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span className="truncate">{c.name}</span>
                        </a>
                      ))}
                    </div>

                    <a
                      href="/#cobertura"
                      onClick={() => setIsDesktopCitiesOpen(false)}
                      className="block text-center py-2 bg-slate-950 rounded-xl font-bold text-cyan-400 hover:bg-cyan-950 text-xs transition-colors border border-cyan-800/40"
                    >
                      Ver todas as 40+ Cidades →
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/#faq"
                className="border-b-2 border-transparent text-slate-200 hover:text-cyan-300 transition-colors py-2"
              >
                Dúvidas
              </a>
            </nav>

            {/* Desktop Quick Contact Actions (Senior Accessible) */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-transform active:scale-95 min-h-[48px]"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Ligar Agora</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-950/40 transition-transform active:scale-95 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Navigation Trigger Button (Senior Friendly Large Target) */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-emerald-500 text-white text-xs font-black flex items-center gap-1.5 shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="px-3 py-2.5 rounded-xl bg-slate-900 border-2 border-slate-700 text-white hover:bg-slate-800 transition-all focus:outline-none flex items-center gap-1.5 font-bold text-xs min-h-[44px]"
                aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-cyan-400" />
                ) : (
                  <>
                    <Menu className="w-6 h-6 text-cyan-400" />
                    <span className="hidden min-[360px]:inline">MENU</span>
                  </>
                )}
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
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
            aria-hidden="true"
          />

          {/* Sliding Drawer Container */}
          <div className="relative w-full max-w-md bg-slate-950 border-l-2 border-slate-800 h-full flex flex-col justify-between shadow-2xl z-50 overflow-y-auto animate-slideLeft">
            
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-950/98 backdrop-blur-md z-10 shadow-md">
              <div className="flex items-center space-x-3">
                <img
                  src={COMPANY_INFO.assets.logo}
                  alt="Santa Catarina Refrigeração"
                  className="h-10 w-auto object-contain"
                />
                <div>
                  <span className="font-black text-sm text-white uppercase tracking-tight block">
                    SANTA CATARINA
                  </span>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">
                    REFRIGERAÇÃO
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-2xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1 font-bold text-xs"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6 text-cyan-400" />
                <span>FECHAR</span>
              </button>
            </div>

            {/* Senior-Friendly Quick Action Buttons inside Menu Top */}
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 grid grid-cols-2 gap-2.5">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-md min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md min-h-[48px]"
              >
                <Phone className="w-5 h-5" />
                <span>Ligar Agora</span>
              </a>
            </div>

            {/* Drawer Body Nav Links */}
            <div className="p-4 space-y-4 text-base flex-1">
              
              {/* Quick Main Links */}
              <div className="space-y-1.5">
                <a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl font-bold transition-colors ${
                    isCurrentRoute('/') && !location.hash
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800'
                      : 'text-white hover:bg-slate-900 hover:text-cyan-300'
                  }`}
                >
                  <span>Início (Página Principal)</span>
                  <ChevronRight className="w-5 h-5 text-cyan-400" />
                </a>
              </div>

              {/* Accordion 1: Cidades e Regiões Atendidas (PÁGINAS DE REGIÕES) */}
              <div className="border-2 border-cyan-500/40 rounded-2xl overflow-hidden bg-slate-900/80 shadow-md">
                <button
                  onClick={() => setIsCitiesAccordionOpen(!isCitiesAccordionOpen)}
                  className="w-full flex items-center justify-between p-4 text-left text-white font-black text-sm uppercase tracking-wider bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  <span className="flex items-center gap-2 text-cyan-300">
                    <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Páginas de Cidades & Regiões</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 text-cyan-400 ${isCitiesAccordionOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCitiesAccordionOpen && (
                  <div className="p-3 space-y-2 bg-slate-950/90 border-t border-slate-800 text-sm">
                    <p className="text-xs text-slate-300 font-medium px-1">
                      Clique em qualquer cidade abaixo para ver detalhes de atendimento e orçamento rápido:
                    </p>

                    {/* Filter City */}
                    <div className="relative my-2">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Buscar cidade (ex: Penha, Itajaí)..."
                        value={citySearch}
                        onChange={(e) => setCitySearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                      {filteredCities.map((c) => (
                        <a
                          key={c.slug}
                          href={`/conserto-de-geladeira-em-${c.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="p-2.5 rounded-xl bg-slate-900 text-slate-200 hover:bg-cyan-950 hover:text-cyan-300 font-bold truncate flex items-center gap-1.5 text-xs transition-colors border border-slate-800"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{c.name}</span>
                        </a>
                      ))}
                    </div>

                    <a
                      href="/#cobertura"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-center py-2.5 font-extrabold text-cyan-300 hover:underline text-xs pt-2 border-t border-slate-800"
                    >
                      Ver todas as 40+ Cidades Atendidas →
                    </a>
                  </div>
                )}
              </div>

              {/* Accordion 2: Nossos Serviços */}
              <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/50">
                <button
                  onClick={() => setIsServicesAccordionOpen(!isServicesAccordionOpen)}
                  className="w-full flex items-center justify-between p-4 text-left text-white font-bold text-sm uppercase tracking-wider bg-slate-900 hover:bg-slate-800/80 transition-colors"
                >
                  <span className="flex items-center gap-2 text-cyan-300">
                    <Navigation className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Nossos Serviços</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 text-cyan-400 ${isServicesAccordionOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesAccordionOpen && (
                  <div className="p-2 space-y-1.5 bg-slate-950/80 border-t border-slate-800 text-sm">
                    <a
                      href="/conserto-de-geladeira/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 rounded-xl text-slate-200 hover:bg-slate-900 hover:text-cyan-300 font-semibold"
                    >
                      Conserto de Geladeiras & Frost Free
                    </a>
                    <a
                      href="/conserto-de-side-by-side/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 rounded-xl text-slate-200 hover:bg-slate-900 hover:text-cyan-300 font-semibold"
                    >
                      Geladeiras Side by Side & French Door
                    </a>
                    <a
                      href="/conserto-lava-e-seca-penha"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 rounded-xl text-slate-200 hover:bg-slate-900 hover:text-cyan-300 font-semibold"
                    >
                      Conserto de Lava e Seca
                    </a>
                    <a
                      href="/conserto-de-freezer/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 rounded-xl text-slate-200 hover:bg-slate-900 hover:text-cyan-300 font-semibold"
                    >
                      Freezers Verticais e Horizontais
                    </a>
                    <a
                      href="/conserto-de-camara-fria/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 rounded-xl text-slate-200 hover:bg-slate-900 hover:text-cyan-300 font-semibold"
                    >
                      Câmaras Frias & Balcões Comerciais
                    </a>
                    <a
                      href="/conserto-de-frigobar/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 rounded-xl text-slate-200 hover:bg-slate-900 hover:text-cyan-300 font-semibold"
                    >
                      Conserto de Frigobares & Adegas
                    </a>
                  </div>
                )}
              </div>

              {/* Accordion 3: Bairros em Destaque */}
              <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/50">
                <button
                  onClick={() => setIsNeighborhoodsAccordionOpen(!isNeighborhoodsAccordionOpen)}
                  className="w-full flex items-center justify-between p-4 text-left text-white font-bold text-sm uppercase tracking-wider bg-slate-900 hover:bg-slate-800/80 transition-colors"
                >
                  <span className="flex items-center gap-2 text-cyan-300">
                    <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Bairros em Destaque</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 text-cyan-400 ${isNeighborhoodsAccordionOpen ? 'rotate-180' : ''}`} />
                </button>

                {isNeighborhoodsAccordionOpen && (
                  <div className="p-3 space-y-1.5 bg-slate-950/80 border-t border-slate-800 text-sm">
                    <div className="grid grid-cols-1 gap-1">
                      {featuredNeighborhoods.map((b, idx) => (
                        <a
                          key={idx}
                          href={`/bairros/${b.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="p-2.5 rounded-xl text-slate-200 hover:bg-slate-900 hover:text-cyan-300 font-semibold flex items-center gap-2"
                        >
                          <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0" />
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
                  className="block p-3.5 rounded-2xl text-slate-200 font-bold hover:bg-slate-900 hover:text-cyan-300"
                >
                  Depoimentos de Clientes
                </a>
                <a
                  href="/#faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-3.5 rounded-2xl text-slate-200 font-bold hover:bg-slate-900 hover:text-cyan-300"
                >
                  Perguntas Frequentes (FAQ)
                </a>
              </div>

            </div>

            {/* Drawer Footer Actions (Senior CTAs) */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-cyan-300 font-extrabold text-sm border-2 border-cyan-500/30 shadow-md min-h-[50px]"
              >
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>Agendar Visita Técnica Online</span>
              </button>

              <p className="text-xs text-slate-400 text-center font-medium pt-1">
                Atendimento domiciliar rápido com garantia de 90 dias por escrito.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
