import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Hero } from '../components/Hero';
import { RefrigerationCycleAnimation } from '../components/RefrigerationCycleAnimation';
import { ServicesGrid } from '../components/ServicesGrid';
import { HowItWorks } from '../components/HowItWorks';
import { SearchIntentsSection } from '../components/SearchIntentsSection';
import { CoverageMapSection } from '../components/CoverageMapSection';
import { COMPANY_INFO } from '../data/company';
import { trackContactClick } from '../utils/analytics';

interface HomeViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onOpenBookingModal }) => {
  return (
    <>
      <EnhancedSEO
        title="Santa Catarina Refrigeração | Conserto de Geladeira em SC"
        description="Assistência técnica e conserto de geladeira, freezer, câmara fria e lava e seca em SC. Atendimento domiciliar com garantia de 90 dias e peças originais."
        canonicalUrl={COMPANY_INFO.subdomainUrl}
      />

      <main className="bg-[#F4F1EA]">
        {/* a) Hero */}
        <Hero onOpenBookingModal={onOpenBookingModal} />

        {/* b) 02 / Como o frio funciona — Seção de Animações em JS */}
        <RefrigerationCycleAnimation />

        {/* c) 03 / O que a gente conserta */}
        <ServicesGrid onOpenBookingModal={onOpenBookingModal} />

        {/* d) 04 / Como funciona */}
        <HowItWorks onOpenBookingModal={onOpenBookingModal} />

        {/* e) 05 / Sua geladeira está assim? */}
        <SearchIntentsSection onOpenBookingModal={onOpenBookingModal} />

        {/* f) 06 / Onde atendemos */}
        <CoverageMapSection />

        {/* g) CTA final */}
        <section className="bg-[#12324A] py-12 sm:py-16 text-center text-white border-t-2 border-[#12324A]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="font-mono text-xs text-[#BFE3F2] font-bold tracking-widest uppercase">
              07 — CONTATO DIRETO COM TÉCNICO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              Fale com um técnico agora
            </h2>
            <p className="text-[#BFE3F2] text-sm sm:text-base max-w-xl mx-auto font-sans">
              Mande uma foto do aparelho e o modelo pelo WhatsApp. A gente já te diz o que pode ser.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick({ channel: 'whatsapp', location: 'home_footer_cta', target: COMPANY_INFO.whatsappUrl })}
                className="w-full sm:w-auto px-6 py-3.5 rounded-[4px] bg-[#16a34a] hover:bg-[#15803d] text-white font-mono font-bold text-sm border-2 border-white shadow-stamped hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#ffffff] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>CHAMAR NO WHATSAPP</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                onClick={() => trackContactClick({ channel: 'phone', location: 'home_footer_phone', target: `tel:${COMPANY_INFO.phoneClean}` })}
                className="w-full sm:w-auto px-6 py-3.5 rounded-[4px] bg-[#D9682B] hover:bg-[#c45a24] text-white font-mono font-bold text-sm border-2 border-white shadow-stamped hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#ffffff] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>LIGAR: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
