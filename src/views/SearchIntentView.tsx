import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEARCH_INTENTS } from '../data/searchIntents';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { Check, ShieldCheck, Calendar, MessageCircle, ChevronRight, Phone, AlertTriangle, Zap, Clock, Wrench, ExternalLink } from 'lucide-react';
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

  // Match intent item by param or URL slug
  const intent = SEARCH_INTENTS.find(
    (item) => item.slug === intentSlugParam || item.slug === slug
  ) || SEARCH_INTENTS[0];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": intent.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "address": COMPANY_INFO.address.full
    },
    "areaServed": "Penha, Balneário Piçarras, Itajaí, Balneário Camboriú e região (raio de 200 km)",
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
    { name: intent.title, item: `${COMPANY_INFO.subdomainUrl}/problemas/${intent.slug}` }
  ];

  return (
    <>
      <EnhancedSEO
        title={intent.metaTitle}
        description={intent.metaDescription}
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/problemas/${intent.slug}`}
        ogImage={COMPANY_INFO.assets.socialPreview}
        schemas={[serviceSchema]}
        breadcrumbs={breadcrumbItems}
      />

      <main className="bg-slate-950 text-white min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Início</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <a href="/#solucoes-buscas" className="hover:text-cyan-400 transition-colors">Dores Frequentes</a>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-300 font-bold truncate max-w-xs">{intent.title}</span>
          </nav>

          {/* Hero Header with Dark Glass Gradient */}
          <div className="relative bg-slate-900 border-2 border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
            {intent.videoUrl && (
              <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={intent.videoUrl} type="video/mp4" />
                </video>
              </div>
            )}
            <div className="relative z-10 space-y-6 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border ${intent.badgeColor}`}>
                  {intent.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono italic">
                  Query: {intent.intentQuery}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {intent.h1}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border-2 border-red-500/50 space-y-1">
                  <div className="flex items-center gap-1.5 text-red-400 font-black text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Sintoma & Dor do Cliente:</span>
                  </div>
                  <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">{intent.pain}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border-2 border-cyan-500/50 space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-300 font-black text-xs uppercase tracking-wider">
                    <Zap className="w-4 h-4 shrink-0" />
                    <span>Causa Técnica Comum:</span>
                  </div>
                  <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">{intent.rootCause}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border-2 border-emerald-500/50 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-black text-xs uppercase tracking-wider">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Solução SC Refrigeração:</span>
                  </div>
                  <p className="text-emerald-200 text-xs sm:text-sm font-bold leading-relaxed">{intent.effectiveSolution}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(intent.prefillMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base transition-all shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pedir Orçamento no WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenBookingModal(intent.tagService)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/50 font-extrabold text-sm transition-all"
                >
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Agendar Visita Técnica</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-extrabold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Ligar: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Details Section: Symptoms & Steps to Solve */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Symptoms & Repair Process */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2.5">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                  Sintomas Principais
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {intent.symptoms.map((symptom, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2.5">
                  <Wrench className="w-6 h-6 text-emerald-400" />
                  Como Nosso Técnico Resolve no Local
                </h2>
                <div className="space-y-4">
                  {intent.stepsToSolve.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <span className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 font-black text-sm flex items-center justify-center shrink-0 border border-emerald-500/40">
                        {idx + 1}
                      </span>
                      <p className="text-slate-200 text-sm font-medium leading-relaxed pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              {intent.faqs && intent.faqs.length > 0 && (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                    Dúvidas Frequentes sobre este Defeito
                  </h2>
                  <FaqAccordion faqs={intent.faqs} />
                </div>
              )}
            </div>

            {/* Right Column: Trust Badge Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/50 rounded-3xl p-6 space-y-6 sticky top-24 shadow-2xl">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-black text-white">Garantia Formal de 90 Dias</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Todos os serviços executados pela Santa Catarina Refrigeração acompanham ordem de serviço detalhada com garantia de 90 dias por escrito.
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800 text-xs text-slate-200 font-semibold">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tempo de Chegada: ~30 a 60 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Peças 100% Originais de Fábrica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Atendimento no Local em SC</span>
                  </div>
                </div>

                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(intent.prefillMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar com Técnico Agora</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
