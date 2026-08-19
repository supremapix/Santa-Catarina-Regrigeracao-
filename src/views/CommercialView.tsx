import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Building2, ShieldCheck, Clock, CheckCircle2, PhoneCall, ArrowRight, FileText, Wrench } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMMERCIAL_SERVICES, getCommercialServiceBySlug } from '../data/commercial';
import { COMPANY_INFO } from '../data/company';

interface CommercialViewProps {
  onOpenBookingModal: (serviceName?: string) => void;
  serviceSlugParam?: string;
}

export const CommercialView: React.FC<CommercialViewProps> = ({ onOpenBookingModal, serviceSlugParam }) => {
  const location = useLocation();
  const slugFromPath = location.pathname.replace(/^\/+|\/+$/g, '');
  const slug = serviceSlugParam || slugFromPath || 'refrigeracao-comercial';
  const service = getCommercialServiceBySlug(slug) || COMMERCIAL_SERVICES[0];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <EnhancedSEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={`/${service.slug}`}
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Comercial & B2B", item: "/refrigeracao-comercial" },
          { name: service.title, item: `/${service.slug}` }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4 border-b border-indigo-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" /> {service.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            {service.h1}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {service.summary}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal(service.title)}
              className="px-6 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Solicitar Atendimento Comercial 24h
            </button>
            <Link
              to="/precos"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-600 transition-all flex items-center gap-2"
            >
              Ver Tabela de Preços <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Atendimento Especializado para o Setor Produtivo</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                {service.description}
              </p>

              <h3 className="text-lg font-bold text-slate-900 mb-3">Vantagens para sua Empresa:</h3>
              <div className="space-y-3 mb-6">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">Equipamentos Atendidos:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-4 rounded-xl">
                {service.equipmentServiced.map((eq, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Wrench className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PMOC Plan Details */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" /> Itens Inclusos na Manutenção Preventiva
              </h2>
              <div className="space-y-3">
                {service.preventivePlanIncluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs with details / summary */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <details key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 group">
                    <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between list-none text-sm">
                      <span>{faq.question}</span>
                      <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
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
            <div className="bg-indigo-950 text-white p-6 rounded-2xl border border-indigo-800">
              <h3 className="font-bold text-lg mb-2">Plantão Técnico 24h</h3>
              <p className="text-xs text-indigo-200 leading-relaxed mb-4">
                Problema com câmara fria ou balcão de carnes no fim de semana? Nossa equipe de emergência atende no local.
              </p>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
              >
                Chamar Plantão: {COMPANY_INFO.phone}
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-3">Outros Serviços Comerciais</h3>
              <div className="space-y-2">
                {COMMERCIAL_SERVICES.map((cs, i) => (
                  <Link
                    key={i}
                    to={`/${cs.slug}`}
                    className={`block p-3 rounded-lg text-xs font-semibold transition-colors ${
                      cs.slug === service.slug
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cs.title}
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
