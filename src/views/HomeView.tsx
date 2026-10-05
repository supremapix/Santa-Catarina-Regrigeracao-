import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Hero } from '../components/Hero';
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

      <main>
        {/* a) Hero */}
        <Hero onOpenBookingModal={onOpenBookingModal} />

        {/* b) O que a gente conserta */}
        <ServicesGrid onOpenBookingModal={onOpenBookingModal} />

        {/* c) Como funciona */}
        <HowItWorks onOpenBookingModal={onOpenBookingModal} />

        {/* d) Sua geladeira está assim? */}
        <SearchIntentsSection onOpenBookingModal={onOpenBookingModal} />

        {/* e) Cidades atendidas */}
        <CoverageMapSection />

        {/* f) CTA final */}
        <section className="bg-[#0B3C5D] py-12 sm:py-16 text-center text-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Fale com um técnico agora
            </h2>
            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto font-normal">
              Mande uma foto do aparelho e o modelo pelo WhatsApp. A gente já te diz o que pode ser.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick({ channel: 'whatsapp', location: 'home_footer_cta', target: COMPANY_INFO.whatsappUrl })}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Chamar no WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                onClick={() => trackContactClick({ channel: 'phone', location: 'home_footer_phone', target: `tel:${COMPANY_INFO.phoneClean}` })}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#F28C28] hover:bg-[#e07b1a] text-white font-extrabold text-base shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Ligar {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
