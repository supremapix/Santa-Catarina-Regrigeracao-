import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, Menu, X, ShieldCheck, MapPin, Clock, ChevronDown, ChevronRight, MessageCircle, Navigation, Search, Globe, Wrench, DollarSign, BookOpen, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { CITIES_DATA } from '../data/cities';
import { AnimatedFrostLogo } from './AnimatedFrostLogo';

interface NavbarProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesAccordionOpen, setIsServicesAccordionOpen] = useState(true);
  const [isCitiesAccordionOpen, setIsCitiesAccordionOpen] = useState(false);
  const [isBrandsAccordionOpen, setIsBrandsAccordionOpen] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [isDesktopCitiesOpen, setIsDesktopCitiesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isDesktopBrandsOpen, setIsDesktopBrandsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();

  // Scroll listener for compact sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopCitiesOpen(false);
    setIsDesktopServicesOpen(false);
    setIsDesktopBrandsOpen(false);
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
        setIsDesktopServicesOpen(false);
        setIsDesktopBrandsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const featuredCities = CITIES_DATA.slice(0, 16);
  const filteredCities = citySearch
    ? CITIES_DATA.filter(c => c.name.toLowerCase().includes(citySearch.toLowerCase()) || c.neighborhoods.some(n => n.toLowerCase().includes(citySearch.toLowerCase()))).slice(0, 16)
    : featuredCities;

  const brandsList = [
    { name: 'Brastemp', slug: 'brastemp' },
    { name: 'Electrolux', slug: 'electrolux' },
    { name: 'Consul', slug: 'consul' },
    { name: 'Samsung', slug: 'samsung' },
    { name: 'LG Inverter', slug: 'lg' },
    { name: 'Panasonic', slug: 'panasonic' },
    { name: 'Midea', slug: 'midea' },
    { name: 'Bosch / GE', slug: 'bosch' },
  ];

  const isCurrentRoute = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm transition-all duration-300 ${
          isScrolled ? 'py-1 shadow-slate-200/50' : 'py-2'
        }`}
      >
        {/* Top Info Bar */}
        <div className="bg-slate-900 text-sm py-2 px-4 border-b border-slate-800 hidden sm:block">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-slate-200">
            <div className="flex items-center space-x-6 font-semibold">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Navegantes, Penha, Itajaí, Baln. Camboriú & Região</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atendimento Domiciliar de Segunda a Sábado</span>
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
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Animated Frost Logo */}
            <AnimatedFrostLogo />

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm xl:text-base font-bold">
              <Link
                to="/"
                className={`transition-colors py-2 border-b-2 ${
                  isCurrentRoute('/') && location.pathname === '/'
                    ? 'border-cyan-600 text-cyan-700 font-black'
                    : 'border-transparent text-slate-800 hover:text-cyan-600'
                }`}
              >
                Início
              </Link>

              {/* Services Group Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                  onMouseEnter={() => setIsDesktopServicesOpen(true)}
                  className={`flex items-center gap-1 border-b-2 py-2 transition-colors ${
                    isCurrentRoute('/conserto-') || isCurrentRoute('/refrigeracao-comercial')
                      ? 'border-cyan-600 text-cyan-700 font-black'
                      : 'border-transparent text-slate-800 hover:text-cyan-600'
                  }`}
                >
                  <Wrench className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Serviços</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDesktopServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDesktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setIsDesktopServicesOpen(false)}
                      className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 mt-1 space-y-1 z-50"
                    >
                      <Link
                        to="/conserto-de-geladeira"
                        onClick={() => setIsDesktopServicesOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-cyan-50 text-slate-800 hover:text-cyan-800 font-bold text-xs sm:text-sm transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-500" />
                        <span>Geladeiras Frost Free</span>
                      </Link>
                      <Link
                        to="/conserto-de-side-by-side"
                        onClick={() => setIsDesktopServicesOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-cyan-50 text-slate-800 hover:text-cyan-800 font-bold text-xs sm:text-sm transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-indigo-500" />
                        <span>Side by Side & French Door</span>
                      </Link>
                      <Link
                        to="/conserto-lava-e-seca-penha"
                        onClick={() => setIsDesktopServicesOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-cyan-50 text-slate-800 hover:text-cyan-800 font-bold text-xs sm:text-sm transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Lava e Seca</span>
                      </Link>
                      <Link
                        to="/refrigeracao-comercial"
                        onClick={() => setIsDesktopServicesOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-cyan-50 text-slate-800 hover:text-cyan-800 font-bold text-xs sm:text-sm transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span>Refrigeração Comercial & B2B</span>
                      </Link>
                      <Link
                        to="/conserto-de-camara-fria"
                        onClick={() => setIsDesktopServicesOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-cyan-50 text-slate-800 hover:text-cyan-800 font-bold text-xs sm:text-sm transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>Câmaras Frias & Balcões</span>
                      </Link>
                      <Link
                        to="/conserto-de-freezer"
                        onClick={() => setIsDesktopServicesOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-cyan-50 text-slate-800 hover:text-cyan-800 font-bold text-xs sm:text-sm transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                        <span>Freezers Verticais & Horizontais</span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Preços Link */}
              <Link
                to="/precos"
                className={`flex items-center gap-1 border-b-2 py-2 transition-colors ${
                  isCurrentRoute('/precos')
                    ? 'border-cyan-600 text-cyan-700 font-black'
                    : 'border-transparent text-slate-800 hover:text-cyan-600'
                }`}
              >
                <DollarSign className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Preços</span>
              </Link>

              {/* Marcas Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDesktopBrandsOpen(!isDesktopBrandsOpen)}
                  onMouseEnter={() => setIsDesktopBrandsOpen(true)}
                  className={`flex items-center gap-1 border-b-2 py-2 transition-colors ${
                    isCurrentRoute('/assistencia-tecnica-geladeira-')
                      ? 'border-cyan-600 text-cyan-700 font-black'
                      : 'border-transparent text-slate-800 hover:text-cyan-600'
                  }`}
                >
                  <span>Marcas</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDesktopBrandsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDesktopBrandsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setIsDesktopBrandsOpen(false)}
                      className="absolute top-full left-0 w-60 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 mt-1 space-y-1 z-50"
                    >
                      {brandsList.map((brand) => (
                        <Link
                          key={brand.slug}
                          to={`/assistencia-tecnica-geladeira-${brand.slug}`}
                          onClick={() => setIsDesktopBrandsOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-xl hover:bg-cyan-50 text-slate-800 hover:text-cyan-800 font-bold text-xs sm:text-sm transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                          <span>Assistência {brand.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Regiões Hub Link */}
              <Link
                to="/regioes-atendidas"
                className={`flex items-center gap-1 border-b-2 py-2 transition-colors ${
                  isCurrentRoute('/regioes-atendidas')
                    ? 'border-cyan-600 text-cyan-700 font-black'
                    : 'border-transparent text-slate-800 hover:text-cyan-600'
                }`}
              >
                <MapPin className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Regiões</span>
              </Link>

              {/* Blog Link */}
              <Link
                to="/blog"
                className={`flex items-center gap-1 border-b-2 py-2 transition-colors ${
                  isCurrentRoute('/blog')
                    ? 'border-cyan-600 text-cyan-700 font-black'
                    : 'border-transparent text-slate-800 hover:text-cyan-600'
                }`}
              >
                <BookOpen className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Blog</span>
              </Link>
            </nav>

            {/* Desktop Quick Contact Actions */}
            <div className="hidden sm:flex items-center space-x-2.5">
              <button
                onClick={() => onOpenBookingModal()}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 font-bold text-xs sm:text-sm border border-slate-700 shadow-sm transition-transform active:scale-95 min-h-[44px]"
              >
                <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Agendar Visita</span>
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-transform active:scale-95 min-h-[44px]"
                aria-label="Conversar pelo WhatsApp"
              >
                <MessageCircle className="w-4.5 h-4.5 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Navigation Trigger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 hover:bg-slate-200 transition-all focus:outline-none flex items-center gap-1.5 font-bold text-xs min-h-[44px]"
                aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-cyan-600" />
                ) : (
                  <>
                    <Menu className="w-6 h-6 text-cyan-600" />
                    <span className="hidden min-[360px]:inline">MENU</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Off-Canvas Mobile Drawer Overlay & Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Sliding Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative w-full max-w-md bg-white border-l border-slate-200 h-full flex flex-col justify-between shadow-2xl z-50 overflow-y-auto"
            >
              
              {/* Drawer Header */}
              <div className="p-4 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white/98 backdrop-blur-md z-10 shadow-sm">
                <AnimatedFrostLogo size="sm" />

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-2xl bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors flex items-center gap-1 font-bold text-xs min-h-[44px]"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6 text-cyan-600" />
                  <span>FECHAR</span>
                </button>
              </div>

              {/* Quick Action Buttons inside Menu Top */}
              <div className="p-4 bg-slate-50 border-b border-slate-200 grid grid-cols-2 gap-2.5">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md min-h-[50px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md min-h-[50px]"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ligar Agora</span>
                </a>
              </div>

              {/* Drawer Body Nav Links */}
              <div className="p-4 space-y-3 text-base flex-1">
                
                {/* Main Links */}
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 rounded-xl font-bold bg-slate-100 hover:bg-cyan-50 text-slate-900 text-sm text-center"
                  >
                    Início
                  </Link>

                  <Link
                    to="/precos"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 rounded-xl font-bold bg-slate-100 hover:bg-cyan-50 text-slate-900 text-sm text-center flex items-center justify-center gap-1"
                  >
                    <DollarSign className="w-4 h-4 text-cyan-600" />
                    <span>Preços</span>
                  </Link>

                  <Link
                    to="/regioes-atendidas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 rounded-xl font-bold bg-slate-100 hover:bg-cyan-50 text-slate-900 text-sm text-center flex items-center justify-center gap-1"
                  >
                    <MapPin className="w-4 h-4 text-cyan-600" />
                    <span>Regiões</span>
                  </Link>

                  <Link
                    to="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 rounded-xl font-bold bg-slate-100 hover:bg-cyan-50 text-slate-900 text-sm text-center flex items-center justify-center gap-1"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-600" />
                    <span>Blog Técnico</span>
                  </Link>
                </div>

                {/* Accordion 1: Nossos Serviços */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 shadow-sm">
                  <button
                    onClick={() => setIsServicesAccordionOpen(!isServicesAccordionOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-left text-slate-900 font-bold text-sm uppercase tracking-wider bg-slate-100 hover:bg-slate-200 transition-colors min-h-[48px]"
                  >
                    <span className="flex items-center gap-2 text-cyan-700">
                      <Wrench className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span>Serviços Especializados</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-cyan-600 ${isServicesAccordionOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isServicesAccordionOpen && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-200 text-sm">
                      <Link
                        to="/conserto-de-geladeira"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block p-2.5 rounded-xl text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 font-semibold text-xs sm:text-sm"
                      >
                        Conserto de Geladeiras & Frost Free
                      </Link>
                      <Link
                        to="/conserto-de-side-by-side"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block p-2.5 rounded-xl text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 font-semibold text-xs sm:text-sm"
                      >
                        Side by Side & French Door
                      </Link>
                      <Link
                        to="/conserto-lava-e-seca-penha"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block p-2.5 rounded-xl text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 font-semibold text-xs sm:text-sm"
                      >
                        Conserto de Lava e Seca
                      </Link>
                      <Link
                        to="/refrigeracao-comercial"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block p-2.5 rounded-xl text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 font-semibold text-xs sm:text-sm"
                      >
                        Refrigeração Comercial & B2B
                      </Link>
                      <Link
                        to="/conserto-de-camara-fria"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block p-2.5 rounded-xl text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 font-semibold text-xs sm:text-sm"
                      >
                        Câmaras Frias & Balcões
                      </Link>
                      <Link
                        to="/conserto-de-freezer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block p-2.5 rounded-xl text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 font-semibold text-xs sm:text-sm"
                      >
                        Freezers Verticais e Horizontais
                      </Link>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Marcas */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 shadow-sm">
                  <button
                    onClick={() => setIsBrandsAccordionOpen(!isBrandsAccordionOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-left text-slate-900 font-bold text-sm uppercase tracking-wider bg-slate-100 hover:bg-slate-200 transition-colors min-h-[48px]"
                  >
                    <span className="flex items-center gap-2 text-cyan-700">
                      <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span>Marcas Atendidas</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-cyan-600 ${isBrandsAccordionOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isBrandsAccordionOpen && (
                    <div className="p-2 grid grid-cols-2 gap-1.5 bg-white border-t border-slate-200 text-xs">
                      {brandsList.map((brand) => (
                        <Link
                          key={brand.slug}
                          to={`/assistencia-tecnica-geladeira-${brand.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="p-2 rounded-lg bg-slate-50 text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 font-bold"
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Accordion 3: Cidades */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 shadow-sm">
                  <button
                    onClick={() => setIsCitiesAccordionOpen(!isCitiesAccordionOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-left text-slate-900 font-bold text-sm uppercase tracking-wider bg-slate-100 hover:bg-slate-200 transition-colors min-h-[48px]"
                  >
                    <span className="flex items-center gap-2 text-cyan-700">
                      <MapPin className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span>Cidades Principais</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-cyan-600 ${isCitiesAccordionOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isCitiesAccordionOpen && (
                    <div className="p-2 space-y-2 bg-white border-t border-slate-200 text-sm">
                      <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
                        {featuredCities.slice(0, 10).map((c) => (
                          <Link
                            key={c.slug}
                            to={`/conserto-de-geladeira-${c.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-lg bg-slate-50 text-slate-800 hover:bg-cyan-50 hover:text-cyan-800 font-bold truncate text-xs"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>

                      <Link
                        to="/regioes-atendidas"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-center py-2 font-bold text-cyan-700 hover:underline text-xs"
                      >
                        Ver todas as regiões atendidas →
                      </Link>
                    </div>
                  )}
                </div>

              </div>

              {/* Drawer Footer Actions */}
              <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm border border-slate-800 shadow-md min-h-[50px]"
                >
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>Agendar Visita Técnica</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
