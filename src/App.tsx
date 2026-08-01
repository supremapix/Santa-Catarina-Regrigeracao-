import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';

import { HomeView } from './views/HomeView';
import { ServicePillarView } from './views/ServicePillarView';
import { LavaESecaLandingView } from './views/LavaESecaLandingView';
import { LgAssistenciaView } from './views/LgAssistenciaView';
import { SamsungAssistenciaView } from './views/SamsungAssistenciaView';
import { BlogGuideView } from './views/BlogGuideView';
import { CityLocalSeoView } from './views/CityLocalSeoView';
import { NotFoundView } from './views/NotFoundView';
import { SantaCatarinaVideoBanner } from './components/SantaCatarinaVideoBanner';

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

          {/* Blog Guide Route */}
          <Route
            path="/blog/lava-e-seca-penha-guia-completo"
            element={<BlogGuideView onOpenBookingModal={handleOpenBookingModal} />}
          />
          <Route
            path="/blog/lava-e-seca-penha-guia-completo/"
            element={<BlogGuideView onOpenBookingModal={handleOpenBookingModal} />}
          />

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

          {/* Fallback 404 Route */}
          {/* ATENÇÃO: NÃO recrie uma rota "/algo-*" colada sem barra (ex: "/conserto-de-geladeira-em-*"). No React Router v6 isso NUNCA casa com URLs reais e sempre cai neste fallback como 404. Mantenha a verificação manual de location.pathname abaixo para prefixos concatenados a slugs. */}
          <Route path="*" element={location.pathname.toLowerCase().startsWith('/conserto-de-geladeira-em-') ? <CityLocalSeoView onOpenBookingModal={handleOpenBookingModal} /> : <NotFoundView />} />
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

        <FloatingWhatsApp onOpenBookingModal={() => handleOpenBookingModal()} />

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
