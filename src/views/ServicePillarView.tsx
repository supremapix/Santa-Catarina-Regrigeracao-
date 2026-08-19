import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PILLAR_SERVICES } from '../data/services';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { Check, ShieldCheck, Calendar, MessageCircle, ChevronRight, Phone, Wrench, AlertTriangle, Cpu, DollarSign, HelpCircle, List, ArrowRight } from 'lucide-react';
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
    "name": service.title,
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "address": COMPANY_INFO.address.full
    },
    "areaServed": "Penha, Balneário Piçarras, Itajaí, Balneário Camboriú, Navegantes e Litoral de SC",
    "description": service.fullDescription,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Refrigeração",
      "itemListElement": service.repairsExecuted.map((rep) => ({
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
      <EnhancedSEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/${service.slug}/`}
        ogImage={service.image}
        schemas={[serviceSchema]}
        breadcrumbs={breadcrumbItems}
      />

      <main className="bg-white text-slate-900 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-cyan-800">Início</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <a href="/#servicos" className="hover:text-cyan-800">Serviços</a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-cyan-800 font-bold">{service.shortTitle}</span>
          </nav>

          {/* Hero Section with Video Background */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            {/* Background Video Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 sm:opacity-85 scale-105"
              >
                <source src="https://img.supremasite.com.br/refrigeracao.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50" />
            </div>

            <div className="lg:col-span-7 space-y-6 relative z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-700/80 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                {service.category} • Atendimento Domiciliar
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
                {service.h1}
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium drop-shadow-sm">
                {service.fullDescription}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}%20para%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base shadow-md flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Orçamento no WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenBookingModal(service.shortTitle)}
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-cyan-900 border border-cyan-300 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
                >
                  <Calendar className="w-5 h-5 text-cyan-700" />
                  <span>Agendar Horário</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 max-w-sm w-full shadow-xs">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-contain max-h-64 mx-auto drop-shadow-md"
                />
                <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs font-bold text-center text-slate-800 flex items-center justify-center gap-1.5 border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garantia escrita de 90 dias com Nota</span>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents / Sumário Rápido */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
              <List className="w-4 h-4 text-cyan-600" /> Sumário do Guia Técnico:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-700">
              <a href="#como-funciona" className="hover:text-cyan-700 hover:underline">1. Como Funciona a Refrigeração</a>
              <a href="#defeitos-frequentes" className="hover:text-cyan-700 hover:underline">2. Principais Defeitos e Causas</a>
              <a href="#reparos-local" className="hover:text-cyan-700 hover:underline">3. Reparos Executados no Local</a>
              <a href="#marcas-atendidas" className="hover:text-cyan-700 hover:underline">4. Marcas e Tecnologias Atendidas</a>
              <a href="#precos-e-prazos" className="hover:text-cyan-700 hover:underline">5. Preços e Prazos Médios</a>
              <a href="#dicas-manutencao" className="hover:text-cyan-700 hover:underline">6. Dicas de Prevenção e Uso</a>
            </div>
          </div>

          {/* Section 1: Princípio e Diagnóstico */}
          <section id="como-funciona" className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <h2 className="text-2xl font-black text-slate-950">1. Como Funciona o Sistema de Refrigeração em Geladeiras Frost Free e Inverter</h2>
            <p>
              O ciclo de refrigeração termodinâmico baseia-se na compressão e expansão de fluidos refrigerantes ecológicos (como R134a e R600a). O compressor bombeia o gás sob alta pressão para o condensador traseiro, onde o calor é rejeitado para o ambiente. Em seguida, o fluido passa pelo tubo capilar e filtro secador, expandindo bruscamente no evaporador em baixa temperatura, absorvendo o calor dos alimentos.
            </p>
            <p>
              Nos sistemas modernos <strong>Frost Free</strong>, um ventilador forçado insufla ar gelado através de dutos controlados por dampers termostáticos ou eletrônicos. Um ciclo de degelo automático ocorre a cada 6 a 8 horas, ativando uma resistência blindada controlada por sensores NTC e bimetálicos para que o evaporador nunca acumule camadas grossas de gelo.
            </p>
          </section>

          {/* Common Defects & Repairs */}
          <div id="defeitos-frequentes" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>⚠️ Defeitos Mais Comuns em {service.shortTitle}</span>
              </h2>
              <ul className="space-y-2.5">
                {service.commonDefects.map((defect, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="text-amber-600 shrink-0 font-bold">•</span>
                    <span>{defect}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  to="/geladeira-nao-gela-o-que-pode-ser"
                  className="text-xs font-bold text-cyan-700 hover:text-cyan-800 inline-flex items-center gap-1"
                >
                  Ver diagnóstico completo de geladeira que não gela <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div id="reparos-local" className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>🛠️ Reparos e Peças Trocadas no Local</span>
              </h2>
              <ul className="space-y-2.5">
                {service.repairsExecuted.map((repair, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{repair}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  to="/precos"
                  className="text-xs font-bold text-cyan-700 hover:text-cyan-800 inline-flex items-center gap-1"
                >
                  Consultar tabela de preços e garantias <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Marcas Atendidas Linkage Section */}
          <section id="marcas-atendidas" className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">4. Assistência Especializada por Fabricante</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Contamos com técnicos especializados nas arquiteturas eletrônicas e mecânicas das principais marcas do mercado:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
              <Link to="/assistencia-tecnica-geladeira-brastemp" className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:border-cyan-500 hover:text-cyan-700 transition-colors text-center">
                Geladeira Brastemp
              </Link>
              <Link to="/assistencia-tecnica-geladeira-electrolux" className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:border-cyan-500 hover:text-cyan-700 transition-colors text-center">
                Geladeira Electrolux
              </Link>
              <Link to="/assistencia-tecnica-geladeira-consul" className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:border-cyan-500 hover:text-cyan-700 transition-colors text-center">
                Geladeira Consul
              </Link>
              <Link to="/assistencia-tecnica-geladeira-samsung" className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:border-cyan-500 hover:text-cyan-700 transition-colors text-center">
                Samsung Digital Inverter
              </Link>
              <Link to="/assistencia-tecnica-geladeira-lg" className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:border-cyan-500 hover:text-cyan-700 transition-colors text-center">
                LG Linear Inverter
              </Link>
              <Link to="/assistencia-tecnica-geladeira-panasonic" className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:border-cyan-500 hover:text-cyan-700 transition-colors text-center">
                Panasonic Econavi
              </Link>
              <Link to="/assistencia-tecnica-geladeira-midea" className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:border-cyan-500 hover:text-cyan-700 transition-colors text-center">
                Midea Quattro
              </Link>
              <Link to="/assistencia-lava-e-seca-lg" className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:border-cyan-500 hover:text-cyan-700 transition-colors text-center">
                Lava e Seca LG / Samsung
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <FaqAccordion />

          {/* Bottom Action */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-slate-200 rounded-3xl p-8 text-center space-y-4 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Precisa de conserto para seu {service.shortTitle}?</h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto font-medium">
              Atendemos Penha, Piçarras, Itajaí, Balneário Camboriú e região com visita no mesmo dia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`${COMPANY_INFO.whatsappUrl}%20para%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-md min-h-[48px] flex items-center justify-center"
              >
                Chamar no WhatsApp Agora
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-6 py-4 rounded-xl bg-white border border-slate-300 text-slate-900 font-bold text-sm sm:text-base flex items-center gap-2 shadow-xs min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                Ligar para {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
