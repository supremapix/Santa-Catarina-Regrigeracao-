import React from 'react';
import { useParams } from 'react';
import { PILLAR_SERVICES } from '../data/services';
import { SeoHead } from '../components/SeoHead';
import { COMPANY_INFO } from '../data/company';
import { Check, ShieldCheck, Calendar, MessageCircle, ChevronRight, Phone } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';

interface ServicePillarViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
  serviceIdParam?: string;
}

export const ServicePillarView: React.FC<ServicePillarViewProps> = ({
  onOpenBookingModal,
  serviceIdParam,
}) => {
  const { slug } = useParams<{ slug?: string }>();

  // Find matching service
  const service = PILLAR_SERVICES.find(
    (s) => s.id === serviceIdParam || s.slug === slug || s.slug === `conserto-de-${slug}`
  ) || PILLAR_SERVICES[0];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "address": COMPANY_INFO.address.full
    },
    "areaServed": "Penha, Balneário Piçarras, Itajaí, Balneário Camboriú e região (raio de 200 km)",
    "description": service.fullDescription,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Refrigeração",
      "itemListElement": service.repairsExecuted.map((rep, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": rep
        }
      }))
    }
  };

  const breadcrumbItems = [
    { name: "Início", item: COMPANY_INFO.subdomainUrl },
    { name: "Serviços", item: `${COMPANY_INFO.subdomainUrl}/#servicos` },
    { name: service.title, item: `${COMPANY_INFO.subdomainUrl}/${service.slug}/` }
  ];

  return (
    <>
      <SeoHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/${service.slug}/`}
        ogImage={service.image}
        schemas={[serviceSchema]}
        breadcrumbs={breadcrumbItems}
      />

      <main className="bg-slate-950 text-white min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400">
            <a href="/" className="hover:text-cyan-400">Início</a>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <a href="/#servicos" className="hover:text-cyan-400">Serviços</a>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400 font-semibold">{service.shortTitle}</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold uppercase">
                {service.category} • Atendimento Domiciliar
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {service.h1}
              </h1>

              <p className="text-slate-300 text-base leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}%20para%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Orçamento no WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenBookingModal(service.shortTitle)}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Agendar Horário</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 max-w-sm w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-contain max-h-64 mx-auto drop-shadow-xl"
                />
                <div className="mt-4 p-3 bg-slate-900 rounded-xl text-xs text-center text-slate-300 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garantia escrita de 90 dias com Nota</span>
                </div>
              </div>
            </div>
          </div>

          {/* Common Defects & Repairs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>⚠️ Defeitos Mais Comuns em {service.shortTitle}</span>
              </h2>
              <ul className="space-y-2.5">
                {service.commonDefects.map((defect, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="text-amber-400 shrink-0 font-bold">•</span>
                    <span>{defect}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🛠️ Reparos e Peças Trocadas no Local</span>
              </h2>
              <ul className="space-y-2.5">
                {service.repairsExecuted.map((repair, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{repair}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <FaqAccordion />

          {/* Bottom Action */}
          <div className="bg-gradient-to-r from-blue-950 to-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Precisa de conserto para seu {service.shortTitle}?</h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Atendemos Penha, Piçarras, Itajaí, Balneário Camboriú e região com visita no mesmo dia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`${COMPANY_INFO.whatsappUrl}%20para%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg"
              >
                Chamar no WhatsApp Agora
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                Ligar para {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
