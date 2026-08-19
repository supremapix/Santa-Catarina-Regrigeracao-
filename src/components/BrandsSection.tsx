import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_DETAILS, BrandDetail } from '../data/brands';
import { AlertTriangle, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const BrandsSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<BrandDetail>(BRAND_DETAILS[0]);

  return (
    <section className="bg-slate-50 py-16 lg:py-24 text-slate-900 border-b border-slate-200" id="marcas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 font-bold text-xs uppercase tracking-wider">
            Especialidade Multimarcas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            Atendemos Todas as Marcas e Modelos do Mercado
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Peças originais, instrumentação digital e garantia formal de 90 dias em todas as intervenções.
          </p>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {BRAND_DETAILS.map((brand) => (
            <button
              key={brand.brandName}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                selectedBrand.brandName === brand.brandName
                  ? 'bg-cyan-700 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
              }`}
            >
              {brand.brandName}
            </button>
          ))}
        </div>

        {/* Active Brand Detailed Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-md space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-200 pb-6 gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold">
                {selectedBrand.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                Assistência Técnica {selectedBrand.brandName}
              </h3>
              <p className="text-slate-600 text-sm mt-1 max-w-2xl">
                {selectedBrand.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
              <a
                href={`${COMPANY_INFO.whatsappUrl}%20para%20equipamento%20da%20marca%20${encodeURIComponent(selectedBrand.brandName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm min-h-[44px]"
              >
                <Wrench className="w-4 h-4" />
                Conserto {selectedBrand.brandName} no WhatsApp
              </a>

              <Link
                to={`/${selectedBrand.slug}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-cyan-50 text-cyan-800 font-bold text-xs border border-slate-200 transition-colors"
              >
                <span>Ver página técnica da {selectedBrand.brandName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Error Codes & Symptoms Table */}
          {selectedBrand.errorCodes && selectedBrand.errorCodes.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Sintomas e Códigos de Erro Comuns da {selectedBrand.brandName}:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedBrand.errorCodes.map((err, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-cyan-800 text-sm">{err.code}</span>
                      <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full border border-slate-300 font-bold">
                        Diagnóstico
                      </span>
                    </div>
                    <p className="text-slate-900 font-bold text-xs">{err.meaning}</p>
                    <p className="text-slate-600 text-xs flex items-start gap-1.5 pt-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{err.solution}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
