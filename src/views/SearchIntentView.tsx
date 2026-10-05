import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { SEARCH_INTENTS } from '../data/searchIntents';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { Check, ShieldCheck, Calendar, MessageCircle, ChevronRight, Phone, AlertTriangle, Zap, Clock, Wrench, ListChecks, DollarSign, ArrowRight } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';

interface SearchIntentViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
  intentSlugParam?: string;
}

export const SearchIntentView: React.FC<SearchIntentViewProps> = ({
  onOpenBookingModal,
  intentSlugParam,
}) => {
  const { slug } = useParams<{ slug?: string }>();
  const location = useLocation();
  const pathSlug = location.pathname.replace(/^\/+|\/+$/g, '').replace(/^problemas\//, '');

  // Match intent item by param, URL param, or path slug
  const intent = SEARCH_INTENTS.find(
    (item) => item.slug === intentSlugParam || item.slug === slug || item.slug === pathSlug
  ) || SEARCH_INTENTS[0];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": intent.title,
    "serviceType": intent.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "address": COMPANY_INFO.address.full
    },
    "areaServed": "Penha, Balneário Piçarras, Itajaí, Balneário Camboriú, Navegantes e Litoral de SC",
    "description": intent.metaDescription,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Solução de Problemas de Refrigeração",
      "itemListElement": intent.stepsToSolve.map((step) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": step
        }
      }))
    }
  };

  const breadcrumbItems = [
    { name: "Início", item: COMPANY_INFO.subdomainUrl },
    { name: "Dores Frequentes", item: `${COMPANY_INFO.subdomainUrl}/#solucoes-buscas` },
    { name: intent.title, item: `${COMPANY_INFO.subdomainUrl}/${intent.slug}` }
  ];

  return (
    <>
      <EnhancedSEO
        title={intent.metaTitle}
        description={intent.metaDescription}
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/${intent.slug}`}
        ogImage={COMPANY_INFO.assets.socialPreview}
        schemas={[serviceSchema]}
        breadcrumbs={breadcrumbItems}
      />

      <main className="bg-slate-50 text-slate-900 min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-[#0B3C5D] transition-colors">Início</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <a href="/#problemas-comuns" className="hover:text-[#0B3C5D] transition-colors">Problemas Comuns</a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-bold truncate max-w-xs">{intent.title}</span>
          </nav>

          {/* Hero Header */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0B3C5D]/10 text-[#0B3C5D] border border-[#0B3C5D]/20">
                  {intent.badge}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3C5D] leading-tight">
                {intent.h1}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-700 font-bold text-xs uppercase">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Sintoma Observado:</span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed">{intent.pain}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#0B3C5D] font-bold text-xs uppercase">
                    <Zap className="w-4 h-4 shrink-0" />
                    <span>Causa Frequente:</span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed">{intent.rootCause}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs uppercase">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Como Resolver:</span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">{intent.effectiveSolution}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(intent.prefillMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm transition-colors shadow-xs"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Pedir Orçamento no WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F28C28] hover:bg-[#e07b1a] text-white font-extrabold text-sm transition-colors shadow-xs"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>Ligar: {COMPANY_INFO.phone}</span>
                </a>

                <Link
                  to="/precos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-sm transition-colors"
                >
                  <DollarSign className="w-4 h-4 text-[#0B3C5D]" />
                  <span>Ver Tabela de Preços</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Urgency Warning Banner */}
              {intent.urgencyWarning && (
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3 text-amber-900 text-xs sm:text-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-900 block mb-0.5 font-bold">Orientação Importante:</strong>
                    <span>{intent.urgencyWarning}</span>
                  </div>
                </div>
              )}

              {/* Causes Hierarchy */}
              {intent.causesList && intent.causesList.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#0B3C5D] flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#0B3C5D]" />
                    Causas Prováveis
                  </h2>
                  <div className="space-y-3">
                    {intent.causesList.map((c, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold text-slate-900">{idx + 1}. {c.title}</h3>
                          <span className="text-[11px] font-semibold text-[#0B3C5D] bg-[#0B3C5D]/10 px-2 py-0.5 rounded">
                            {c.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Before Calling Checklist */}
              {intent.beforeCallingChecklist && intent.beforeCallingChecklist.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#0B3C5D] flex items-center gap-2">
                    <ListChecks className="w-5 h-5 text-emerald-600" />
                    O Que Você Pode Verificar Antes de Chamar
                  </h2>
                  <ul className="space-y-2">
                    {intent.beforeCallingChecklist.map((chk, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{chk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Symptoms List */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
                <h2 className="text-lg sm:text-xl font-extrabold text-[#0B3C5D] flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Sinais do Problema
                </h2>
                <div className="grid grid-cols-1 gap-2.5">
                  {intent.symptoms.map((symptom, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps to Solve */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
                <h2 className="text-lg sm:text-xl font-extrabold text-[#0B3C5D] flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[#0B3C5D]" />
                  Como o Técnico Resolve no Local
                </h2>
                <div className="space-y-3">
                  {intent.stepsToSolve.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="w-6 h-6 rounded-md bg-[#0B3C5D] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Trust Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-5 sticky top-24 shadow-xs">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-[#0B3C5D]/10 text-[#0B3C5D] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#0B3C5D]" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900">Garantia de 90 Dias com Nota</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Serviço realizado no local com peças de qualidade e garantia por escrito.
                  </p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-200 text-xs text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Orçamento antes do conserto</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Atendimento em domicílio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Segunda a Sábado das 08h às 18h</span>
                  </div>
                </div>

                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(intent.prefillMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
