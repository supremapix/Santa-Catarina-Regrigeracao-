import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { MessageCircle, Phone, Cpu, CheckCircle2 } from 'lucide-react';
import { PageHero, SectionHeader, TechCard, TechButton } from '../components/TechUI';

interface SamsungAssistenciaViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const SamsungAssistenciaView: React.FC<SamsungAssistenciaViewProps> = ({ onOpenBookingModal }) => {
  const breadcrumbs = [
    { name: "Início", item: COMPANY_INFO.subdomainUrl },
    { name: "Conserto Lava e Seca", item: `${COMPANY_INFO.subdomainUrl}/conserto-lava-e-seca-penha` },
    { name: "Assistência Samsung Penha", item: `${COMPANY_INFO.subdomainUrl}/assistencia-lava-e-seca-samsung-penha` }
  ];

  return (
    <>
      <EnhancedSEO
        title="Assistência Técnica Lava e Seca Samsung em Penha | Peças Genuínas"
        description="Assistência técnica especializada em Lava e Seca Samsung EcoBubble e Digital Inverter em Penha e região. Reparo de Erros 5E, 5C, 4E, 4C, UE, DC e garantia formal de 90 dias."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/assistencia-lava-e-seca-samsung-penha`}
        breadcrumbs={breadcrumbs}
      />

      <main className="bg-[#F4F1EA] text-[#12324A] min-h-screen pb-16">
        
        {/* Page Hero */}
        <PageHero
          badge="01 / MARCA SAMSUNG DIGITAL INVERTER"
          title="Assistência Técnica de Lava e Seca Samsung em Penha e Região"
          subtitle="Conserto especializado em motores Digital Inverter, sistema EcoBubble, AddWash e placas inversoras de Lava e Seca Samsung. Atendimento em domicílio com garantia de 90 dias com nota."
          breadcrumbs={[
            { label: "Conserto Lava e Seca", path: "/conserto-lava-e-seca-penha" },
            { label: "Assistência Samsung", path: "/assistencia-lava-e-seca-samsung-penha" }
          ]}
          equipmentType="lava-e-seca"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
          
          {/* Solutions for Samsung Error Codes */}
          <div className="space-y-6">
            <SectionHeader
              step="02 / DIAGNÓSTICO DIGITAL SAMSUNG"
              title="Solução para Códigos de Erro de Lava e Seca Samsung"
              subtitle="Veja a explicação técnica para os códigos de falha mais comuns dos painéis EcoBubble."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  ERRO 5E / 5C
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Falha de Drenagem</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed mb-3">
                  A máquina não drenou a água. Ocorre por acúmulo de sujeira no filtro do motor de drenagem ou queima do estator da bomba.
                </p>
                <p className="text-xs text-[#16a34a] font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Desobstrução e troca da bomba de esgotamento original Samsung.
                </p>
              </TechCard>

              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  ERRO 4E / 4C
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Entrada de Água Insuficiente</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed mb-3">
                  Indica falta de entrada d'água no dispenser ou válvulas solenóides travadas.
                </p>
                <p className="text-xs text-[#16a34a] font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Substituição da válvula de admissão de água original.
                </p>
              </TechCard>

              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  ERRO DC / dC
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Porta Desconectada ou Aberta</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed mb-3">
                  Porta não travada ou sensor da escotilha com mau contato.
                </p>
                <p className="text-xs text-[#16a34a] font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Conserto e troca do kit da trava da porta Samsung.
                </p>
              </TechCard>

              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  ERRO HC / HE
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Falha de Aquecimento</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed mb-3">
                  Superaquecimento ou falta de aquecimento na secagem por falha na resistência de níquel-cromo ou termostato de segurança.
                </p>
                <p className="text-xs text-[#16a34a] font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Troca do conjunto do duto de secagem e resistência.
                </p>
              </TechCard>
            </div>
          </div>

          {/* Bottom CTA Card */}
          <div className="bg-[#12324A] text-white p-8 border-2 border-[#12324A] rounded-[4px] shadow-stamped text-center space-y-4">
            <h2 className="text-2xl font-bold font-display text-white">Sua Samsung Precisa de Assistência Técnica?</h2>
            <p className="text-[#BFE3F2] text-sm max-w-xl mx-auto font-sans">
              Atendemos Penha, Piçarras, Navegantes, Itajaí, Balneário Camboriú e região com peças genuínas e garantia de 90 dias.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <TechButton
                variant="whatsapp"
                href={`${COMPANY_INFO.whatsappUrl}%20para%20Lava%20e%20Seca%20Samsung`}
                target="_blank"
                rel="noopener noreferrer"
                location="samsung_cta_whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAMAR TÉCNICO SAMSUNG NO WHATSAPP</span>
              </TechButton>

              <TechButton
                variant="phone"
                href={`tel:${COMPANY_INFO.phoneClean}`}
                location="samsung_cta_phone"
              >
                <Phone className="w-4 h-4" />
                <span>LIGAR: {COMPANY_INFO.phone}</span>
              </TechButton>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

