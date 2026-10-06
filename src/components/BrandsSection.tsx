import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_DETAILS, BrandDetail } from '../data/brands';
import { AlertTriangle, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SectionHeader, TechCard, TechButton } from './TechUI';

export const BrandsSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<BrandDetail>(BRAND_DETAILS[0]);

  return (
    <section className="bg-[#F4F1EA] py-12 sm:py-16 text-[#12324A] border-b-2 border-[#12324A] bg-paper-grid text-left" id="marcas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <SectionHeader
          step="04 / MULTIMARCAS"
          title="Atendemos as Principais Marcas do Mercado"
          subtitle="Peças originais de reposição, instrumentos digitais e garantia formal de 90 dias com nota."
        />

        {/* Brand Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {BRAND_DETAILS.map((brand) => (
            <button
              key={brand.brandName}
              onClick={() => setSelectedBrand(brand)}
              className={`px-3.5 py-2 font-mono text-xs font-bold border-2 border-[#12324A] rounded-[2px] transition-all ${
                selectedBrand.brandName === brand.brandName
                  ? 'bg-[#12324A] text-white shadow-stamped'
                  : 'bg-white text-[#12324A] hover:bg-[#BFE3F2]/30'
              }`}
            >
              {brand.brandName}
            </button>
          ))}
        </div>

        {/* Active Brand Detailed Card */}
        <TechCard stamped={true} className="bg-white border-2 border-[#12324A] space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#12324A]/20 pb-5 gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#D9682B] font-bold uppercase">
                [{selectedBrand.badge}]
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#12324A]">
                Assistência Técnica {selectedBrand.brandName}
              </h3>
              <p className="text-xs sm:text-sm text-[#12324A]/80 font-sans max-w-xl">
                {selectedBrand.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
              <TechButton
                variant="whatsapp"
                href={`${COMPANY_INFO.whatsappUrl}%20para%20equipamento%20da%20marca%20${encodeURIComponent(selectedBrand.brandName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAMAR NO WHATSAPP</span>
              </TechButton>

              <Link
                to={`/${selectedBrand.slug}`}
                className="font-mono text-xs font-bold text-[#12324A] hover:text-[#D9682B] flex items-center justify-center gap-1 pt-1"
              >
                <span>Ver página técnica {selectedBrand.brandName}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D9682B]" />
              </Link>
            </div>
          </div>

          {/* Error Codes Table */}
          {selectedBrand.errorCodes && selectedBrand.errorCodes.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#12324A] uppercase flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#D9682B]" />
                Códigos de Erro Comuns — {selectedBrand.brandName}:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedBrand.errorCodes.map((err, idx) => (
                  <div key={idx} className="bg-[#F4F1EA] border border-[#12324A]/30 p-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-[#D9682B]">{err.code}</span>
                      <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 bg-white border border-[#12324A]/20">
                        DIAGNÓSTICO
                      </span>
                    </div>
                    <p className="font-bold text-xs text-[#12324A]">{err.meaning}</p>
                    <p className="text-xs text-[#16a34a] font-mono font-bold pt-0.5">
                      ✓ {err.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TechCard>

      </div>
    </section>
  );
};
