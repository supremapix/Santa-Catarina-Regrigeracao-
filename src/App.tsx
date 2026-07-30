import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
        <Navbar onOpenBookingModal={handleOpenBookingModal} />

        <div className="flex-grow">
          <Routes>
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
              path="/assistencia-lava-e-seca-lg-penha"
              element={<LgAssistenciaView onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route
              path="/assistencia-lava-e-seca-samsung-penha"
              element={<SamsungAssistenciaView onOpenBookingModal={handleOpenBookingModal} />}
            />

            {/* Blog Guide Route */}
            <Route
              path="/blog/lava-e-seca-penha-guia-completo"
              element={<BlogGuideView onOpenBookingModal={handleOpenBookingModal} />}
            />

            {/* Programmatic City Routes */}
            <Route
              path="/conserto-de-geladeira-em-:citySlug"
              element={<CityLocalSeoView onOpenBookingModal={handleOpenBookingModal} />}
            />

            {/* Fallback 404 Route */}
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </div>

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
