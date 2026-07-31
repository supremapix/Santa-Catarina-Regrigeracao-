import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Hero } from '../components/Hero';
import { DifferentialsBar } from '../components/DifferentialsBar';
import { ServicesGrid } from '../components/ServicesGrid';
import { RepairsSection } from '../components/RepairsSection';
import { BrandsSection } from '../components/BrandsSection';
import { HowItWorks } from '../components/HowItWorks';
import { QuickDiagnosisTool } from '../components/QuickDiagnosisTool';
import { CoverageMapSection } from '../components/CoverageMapSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqAccordion } from '../components/FaqAccordion';
import { COMPANY_INFO } from '../data/company';

interface HomeViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onOpenBookingModal }) => {
  return (
    <>
      <EnhancedSEO
        title="Santa Catarina Refrigeração | Conserto de Geladeira, Freezer, Câmara Fria e Lava e Seca"
        description="Assistência técnica especializada em refrigeração em Penha, Piçarras, Itajaí, Balneário Camboriú e região. Conserto no mesmo dia com garantia de 90 dias e peças originais."
        canonicalUrl={COMPANY_INFO.subdomainUrl}
      />

      <main>
        <Hero onOpenBookingModal={onOpenBookingModal} />
        <DifferentialsBar />
        <ServicesGrid onOpenBookingModal={onOpenBookingModal} />
        <RepairsSection />
        <BrandsSection />
        <QuickDiagnosisTool />
        <HowItWorks onOpenBookingModal={onOpenBookingModal} />
        <CoverageMapSection />
        <TestimonialsSection />
        <FaqAccordion />

        {/* Final CTA Banner */}
        <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-950 py-16 text-center text-white border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Precisa de um Técnico em Refrigeração Agora?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Solicite seu orçamento gratuito e sem compromisso pelo WhatsApp. Atendemos no mesmo dia em Penha, Piçarras, Itajaí, Balneário Camboriú e em toda a região num raio de até 200 km.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base shadow-xl transition-all"
              >
                Solicitar Orçamento Grátis no WhatsApp
              </a>
              <button
                onClick={() => onOpenBookingModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 font-bold text-base transition-all"
              >
                Agendar Horário Online
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
