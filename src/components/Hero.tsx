import React from 'react';
import { MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { trackContactClick } from '../utils/analytics';

interface HeroProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const brands = ['Brastemp', 'Electrolux', 'Consul', 'Samsung', 'LG', 'Panasonic', 'Midea'];

  return (
    <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-8 space-y-6 text-center sm:text-left">
            {/* Título curto (máx. 2 linhas no desktop) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3C5D] tracking-tight leading-tight">
              Geladeira parou? A gente vai até você.
            </h1>

            {/* Subtítulo claro e direto */}
            <p className="text-slate-700 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Conserto de geladeira, freezer, lava e seca e refrigeração comercial em Navegantes, Penha, Itajaí e região. Orçamento na hora, antes de qualquer serviço, e 90 dias de garantia.
            </p>

            {/* 2 Botões Principais */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick({
                  channel: 'whatsapp',
                  location: 'hero_whatsapp_btn',
                  label: 'Chamar no WhatsApp'
                })}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                onClick={() => trackContactClick({
                  channel: 'phone',
                  location: 'hero_phone_btn',
                  label: `Ligar ${COMPANY_INFO.phone}`
                })}
                className="px-6 py-3.5 rounded-xl bg-[#F28C28] hover:bg-[#e07b1a] text-white font-extrabold text-base shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Ligar {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* 3 Provas Rápidas em Linha */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B3C5D] shrink-0" />
                <span>Vamos até você</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B3C5D] shrink-0" />
                <span>Orçamento antes do conserto</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B3C5D] shrink-0" />
                <span>Garantia de 90 dias</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Brand Card */}
          <div className="lg:col-span-4 mt-4 lg:mt-0">
            <div className="bg-[#F7F8FA] border border-slate-200 rounded-xl p-5 shadow-xs">
              <h3 className="text-xs font-bold text-[#0B3C5D] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0B3C5D]"></span>
                Atendemos as principais marcas
              </h3>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-3 pt-3 border-t border-slate-200/80">
                Peças de reposição e diagnóstico para modelos Frost Free e Inverter.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
