import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';

import { HomeView } from './views/HomeView';
import { ServicePillarView } from './views/ServicePillarView';
import { LavaESecaLandingView } from './views/LavaESecaLandingView';
import { LgAssistenciaView } from './views/LgAssistenciaView';
import { SamsungAssistenciaView } from './views/SamsungAssistenciaView';
import { BrandDetailView } from './views/BrandDetailView';
import { RegionsHubView } from './views/RegionsHubView';
import { PricingView } from './views/PricingView';
import { CommercialView } from './views/CommercialView';
import { BlogIndexView } from './views/BlogIndexView';
import { BlogArticleView } from './views/BlogArticleView';
import { BlogGuideView } from './views/BlogGuideView';
import { CityLocalSeoView } from './views/CityLocalSeoView';
import { SearchIntentView } from './views/SearchIntentView';
import { CervejeiraNavegantesView } from './views/CervejeiraNavegantesView';
import { SitemapView } from './views/SitemapView';
import { NotFoundView } from './views/NotFoundView';
import { SantaCatarinaVideoBanner } from './components/SantaCatarinaVideoBanner';
import { SEARCH_INTENTS } from './data/searchIntents';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AppRoutes({ handleOpenBookingModal }: { handleOpenBookingModal: (serviceName?: string) => void }) {
  const location = useLocation();

  // Helper for dynamic fallback routing
  const renderFallbackRoute = () => {
    const rawPath = location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    const cleanSlug = rawPath.replace(/^\//, '');

    // 1. Check if matches city / neighborhood pattern
    if (
      rawPath.startsWith('/conserto-de-geladeira-') ||
      rawPath.startsWith('/conserto-de-geladeira-em-') ||
      rawPath.startsWith('/cidades') ||
      rawPath.startsWith('/cidade') ||
      rawPath.startsWith('/bairros') ||
      rawPath.startsWith('/bairro') ||
      rawPath.startsWith('/regioes') ||
      rawPath.startsWith('/regiao')
    ) {
      return <CityLocalSeoView onOpenBookingModal={handleOpenBookingModal} />;
    }

    // 2. Check if matches Brand slug
    if (rawPath.startsWith('/assistencia-tecnica-geladeira-') || rawPath.startsWith('/assistencia-geladeira-')) {
      return <BrandDetailView onOpenBookingModal={handleOpenBookingModal} />;
    }

    // 3. Check if matches Blog article
    if (rawPath.startsWith('/blog/')) {
      return <BlogArticleView onOpenBookingModal={handleOpenBookingModal} />;
    }

    // 4. Check if matches any Search Intent
    if (SEARCH_INTENTS.some((item) => item.slug === cleanSlug)) {
      return <SearchIntentView onOpenBookingModal={handleOpenBookingModal} />;
    }

    // 5. Default 404
    return <NotFoundView />;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Routes location={location}>
          {/* Home Route */}
          <Route path="/" element={<HomeView onOpenBookingModal={handleOpenBookingModal} />} />

          {/* Pricing Route */}
          <Route path="/precos" element={<PricingView onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/precos/" element={<PricingView onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/tabela-de-precos" element={<PricingView onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/tabela-de-precos/" element={<PricingView onOpenBookingModal={handleOpenBookingModal} />} />

          {/* Regions Hub Route */}
          <Route path="/regioes-atendidas" element={<RegionsHubView onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/regioes-atendidas/" element={<RegionsHubView onOpenBookingModal={handleOpenBookingModal} />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<BlogIndexView />} />
          <Route path="/blog/" element={<BlogIndexView />} />
          <Route
            path="/blog/lava-e-seca-penha-guia-completo"
            element={<BlogGuideView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/blog/lava-e-seca-penha-guia-completo/"
            element={<BlogGuideView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/blog/:slug"
            element={<BlogArticleView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/blog/:slug/"
            element={<BlogArticleView onOpenBookingModal={handleOpenBookingModal} />}
          />

          {/* Brand Pages */}
          <Route
            path="/assistencia-tecnica-geladeira-brastemp"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-brastemp" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-brastemp/"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-brastemp" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-electrolux"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-electrolux" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-electrolux/"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-electrolux" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-consul"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-consul" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-consul/"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-consul" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-samsung"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-samsung" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-samsung/"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-samsung" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-lg"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-lg" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-lg/"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-lg" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-panasonic"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-panasonic" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-panasonic/"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-panasonic" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-midea"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-midea" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-geladeira-midea/"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-midea" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-geladeira-brastemp-penha"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-brastemp" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-geladeira-electrolux-penha"
            element={<BrandDetailView brandSlugParam="assistencia-tecnica-geladeira-electrolux" onOpenBookingModal={handleOpenBookingModal} />}
          />

          {/* Service Pillars Routes */}
          <Route
            path="/conserto-de-geladeira"
            element={<ServicePillarView serviceIdParam="geladeira" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-de-geladeira/"
            element={<ServicePillarView serviceIdParam="geladeira" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/conserto-de-side-by-side"
            element={<ServicePillarView serviceIdParam="side-by-side" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-de-side-by-side/"
            element={<ServicePillarView serviceIdParam="side-by-side" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/conserto-de-frigobar"
            element={<ServicePillarView serviceIdParam="frigobar" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-de-frigobar/"
            element={<ServicePillarView serviceIdParam="frigobar" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/conserto-de-freezer"
            element={<ServicePillarView serviceIdParam="freezer" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-de-freezer/"
            element={<ServicePillarView serviceIdParam="freezer" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/conserto-de-camara-fria"
            element={<ServicePillarView serviceIdParam="camara-fria" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-de-camara-fria/"
            element={<ServicePillarView serviceIdParam="camara-fria" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/conserto-de-balcao-refrigerado"
            element={<ServicePillarView serviceIdParam="balcao-refrigerado" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-de-balcao-refrigerado/"
            element={<ServicePillarView serviceIdParam="balcao-refrigerado" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/conserto-de-adega"
            element={<ServicePillarView serviceIdParam="adega" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-de-adega/"
            element={<ServicePillarView serviceIdParam="adega" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/conserto-de-cervejeira"
            element={<ServicePillarView serviceIdParam="cervejeira" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-de-cervejeira/"
            element={<ServicePillarView serviceIdParam="cervejeira" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-de-cervejeira-e-expositor"
            element={<ServicePillarView serviceIdParam="cervejeira" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-de-cervejeira-e-expositor/"
            element={<ServicePillarView serviceIdParam="cervejeira" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-cervejeira-navegantes-sc"
            element={<CervejeiraNavegantesView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-cervejeira-navegantes-sc/"
            element={<CervejeiraNavegantesView onOpenBookingModal={handleOpenBookingModal} />}
          />

          {/* New Commercial & Industrial Service Routes */}
          <Route
            path="/assistencia-tecnica-refrigeracao"
            element={<ServicePillarView serviceIdParam="assistencia-tecnica-refrigeracao" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-tecnica-refrigeracao/"
            element={<ServicePillarView serviceIdParam="assistencia-tecnica-refrigeracao" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/refrigeracao-comercial"
            element={<CommercialView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/refrigeracao-comercial/"
            element={<CommercialView onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/refrigeracao-industrial"
            element={<ServicePillarView serviceIdParam="refrigeracao-industrial" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/refrigeracao-industrial/"
            element={<ServicePillarView serviceIdParam="refrigeracao-industrial" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/manutencao-refrigeracao"
            element={<ServicePillarView serviceIdParam="manutencao-refrigeracao" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/manutencao-refrigeracao/"
            element={<ServicePillarView serviceIdParam="manutencao-refrigeracao" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/camara-fria"
            element={<ServicePillarView serviceIdParam="camara-fria" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/camara-fria/"
            element={<ServicePillarView serviceIdParam="camara-fria" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/maquina-de-gelo"
            element={<ServicePillarView serviceIdParam="maquina-de-gelo" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/maquina-de-gelo/"
            element={<ServicePillarView serviceIdParam="maquina-de-gelo" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/maquina-de-sorvete"
            element={<ServicePillarView serviceIdParam="maquina-de-sorvete" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/maquina-de-sorvete/"
            element={<ServicePillarView serviceIdParam="maquina-de-sorvete" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/chopeiras"
            element={<ServicePillarView serviceIdParam="chopeiras" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/chopeiras/"
            element={<ServicePillarView serviceIdParam="chopeiras" onOpenBookingModal={handleOpenBookingModal} />}
          />

          <Route
            path="/manutencao-container-reefer"
            element={<ServicePillarView serviceIdParam="container-reefer" onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/manutencao-container-reefer/"
            element={<ServicePillarView serviceIdParam="container-reefer" onOpenBookingModal={handleOpenBookingModal} />}
          />

          {/* Lava e Seca Landing Pages */}
          <Route
            path="/conserto-lava-e-seca-penha"
            element={<LavaESecaLandingView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/conserto-lava-e-seca-penha/"
            element={<LavaESecaLandingView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-lava-e-seca-lg-penha"
            element={<LgAssistenciaView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-lava-e-seca-lg-penha/"
            element={<LgAssistenciaView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-lava-e-seca-samsung-penha"
            element={<SamsungAssistenciaView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/assistencia-lava-e-seca-samsung-penha/"
            element={<SamsungAssistenciaView onOpenBookingModal={handleOpenBookingModal} />}
          />

          {/* Search Intents & Problem Pages */}
          <Route
            path="/problemas/*"
            element={<SearchIntentView onOpenBookingModal={handleOpenBookingModal} />}
          />

          {/* Sitemap Route */}
          <Route path="/mapa-do-site" element={<SitemapView />} />
          <Route path="/mapa-do-site/" element={<SitemapView />} />

          {/* Programmatic City, Region, and Neighborhood Routes */}
          <Route
            path="/cidades/*"
            element={<CityLocalSeoView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/cidade/*"
            element={<CityLocalSeoView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/bairros/*"
            element={<CityLocalSeoView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/bairro/*"
            element={<CityLocalSeoView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/regioes/*"
            element={<CityLocalSeoView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/regiao/*"
            element={<CityLocalSeoView onOpenBookingModal={handleOpenBookingModal} />}
          />

          {/* Dynamic Fallback Catch-all Route */}
          <Route path="*" element={renderFallbackRoute()} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('Geladeira / Refrigerador');

  const handleOpenBookingModal = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
        <Navbar onOpenBookingModal={handleOpenBookingModal} />

        <div className="flex-grow">
          <AppRoutes handleOpenBookingModal={handleOpenBookingModal} />
        </div>

        <SantaCatarinaVideoBanner />

        <Footer />

        <FloatingActions onOpenBookingModal={() => handleOpenBookingModal()} />

        <WhatsAppBookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          preselectedService={preselectedService}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
