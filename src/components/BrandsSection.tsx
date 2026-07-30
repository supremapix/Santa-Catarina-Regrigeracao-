import React, { useState } from 'react';
import { SUPPORTED_BRANDS } from '../data/brands';
import { AlertTriangle, Wrench, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const BrandsSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState(SUPPORTED_BRANDS[0]);

  return (
    <section className="bg-slate-900 py-16 lg:py-24 text-white border-b border-slate-800" id="marcas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-950 text-cyan-400 border border-blue-800 font-bold text-xs uppercase tracking-wider">
            Especialidade Multimarcas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            Atendemos Todas as Marcas e Modelos do Mercado
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Peças originais, instrumentação digital e garantia formal de 90 dias em todas as intervenções.
          </p>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {SUPPORTED_BRANDS.map((brand) => (
            <button
              key={brand.name}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                selectedBrand.name === brand.name
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>

        {/* Active Brand Detailed Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-800 pb-6 mb-6 gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold">
                {selectedBrand.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                Assistência Técnica {selectedBrand.name}
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                {selectedBrand.description}
              </p>
            </div>

            <a
              href={`${COMPANY_INFO.whatsappUrl}%20para%20equipamento%20da%20marca%20${encodeURIComponent(selectedBrand.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shrink-0 transition-all"
            >
              <Wrench className="w-4 h-4" />
              Conserto {selectedBrand.name} no WhatsApp
            </a>
          </div>

          {/* Error Codes & Symptoms Table */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Sintomas e Códigos de Erro Comuns da {selectedBrand.name}:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedBrand.errorCodes.map((err, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-cyan-400 text-sm">{err.code}</span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                      Diagnóstico
                    </span>
                  </div>
                  <p className="text-white font-bold text-xs">{err.meaning}</p>
                  <p className="text-slate-400 text-xs flex items-start gap-1.5 pt-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{err.solution}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
