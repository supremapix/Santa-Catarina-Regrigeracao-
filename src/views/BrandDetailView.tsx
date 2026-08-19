import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, Clock, CheckCircle2, PhoneCall, ArrowRight, AlertTriangle, Cpu, Wrench } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { BRAND_DETAILS, getBrandDetailBySlug } from '../data/brands';
import { COMPANY_INFO } from '../data/company';

interface BrandDetailViewProps {
  onOpenBookingModal: (serviceName?: string) => void;
  brandSlugParam?: string;
}

export const BrandDetailView: React.FC<BrandDetailViewProps> = ({ onOpenBookingModal, brandSlugParam }) => {
  const location = useLocation();
  const slugFromPath = location.pathname.replace(/^\/+|\/+$/g, '');
  const slug = brandSlugParam || slugFromPath || 'assistencia-tecnica-geladeira-brastemp';
  const brand = getBrandDetailBySlug(slug) || BRAND_DETAILS[0];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <EnhancedSEO
        title={brand.metaTitle}
        description={brand.metaDescription}
        canonicalUrl={`/${brand.slug}`}
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Marcas Atendidas", item: "/#marcas" },
          { name: brand.brandName, item: `/${brand.slug}` }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 px-4 border-b border-cyan-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> {brand.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            {brand.h1}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Conserto rápido em domicílio com peças 100% originais, diagnóstico com equipamentos de precisão e garantia formal de 90 dias por escrito.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal(`Assistência Técnica ${brand.brandName}`)}
              className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Solicitar Técnico para {brand.brandName}
            </button>
            <Link
              to="/precos"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-600 transition-all flex items-center gap-2"
            >
              Consultar Preços <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Especialistas em Refrigeração e Lavanderia {brand.brandName}
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                {brand.description}
              </p>

              <h3 className="text-lg font-bold text-slate-900 mb-3">Modelos {brand.brandName} Mais Atendidos:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-4 rounded-xl mb-6">
                {brand.commonModels.map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-600" /> Tecnologias Dominadas:
              </h3>
              <div className="flex flex-wrap gap-2">
                {brand.technologies.map((t, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-cyan-50 text-cyan-800 rounded-lg border border-cyan-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Common Failures and Solutions */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-cyan-600" /> Problemas Frequentes e Como Resolvemos
              </h2>
              <div className="space-y-4">
                {brand.commonFailures.map((cf, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-sm mb-1 text-red-700">{cf.problem}</h3>
                    <p className="text-xs text-slate-600 mb-2"><strong>Causa Técnica:</strong> {cf.cause}</p>
                    <p className="text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> <strong>Solução:</strong> {cf.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Error Codes */}
            {brand.errorCodes && brand.errorCodes.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" /> Tabela de Códigos de Erro {brand.brandName}
                </h2>
                <div className="space-y-3">
                  {brand.errorCodes.map((ec, i) => (
                    <div key={i} className="p-3 bg-amber-50/50 rounded-xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold px-2 py-0.5 bg-amber-200 text-amber-900 rounded">
                          {ec.code}
                        </span>
                        <span className="text-xs text-slate-700 font-medium ml-2">{ec.meaning}</span>
                      </div>
                      <span className="text-xs text-slate-600 italic sm:text-right">{ec.solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs with details / summary */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Perguntas Frequentes sobre {brand.brandName}</h2>
              <div className="space-y-4">
                {brand.faqs.map((faq, i) => (
                  <details key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 group">
                    <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between list-none text-sm">
                      <span>{faq.question}</span>
                      <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-cyan-950 text-white p-6 rounded-2xl border border-cyan-800/40">
              <h3 className="font-bold text-lg mb-2">Garantia Formal 90 Dias</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Seu eletrodoméstico {brand.brandName} consertado com peças novas e garantia por escrito.
              </p>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
              >
                Chamar no WhatsApp
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-3">Outras Marcas Atendidas</h3>
              <div className="space-y-2">
                {BRAND_DETAILS.map((b, i) => (
                  <Link
                    key={i}
                    to={`/${b.slug}`}
                    className={`block p-3 rounded-lg text-xs font-semibold transition-colors ${
                      b.slug === brand.slug
                        ? 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Assistência {b.brandName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
