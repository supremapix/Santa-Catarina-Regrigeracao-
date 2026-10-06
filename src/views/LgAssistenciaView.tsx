import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { MessageCircle, Phone, Cpu, CheckCircle2 } from 'lucide-react';
import { PageHero, SectionHeader, TechCard, TechButton } from '../components/TechUI';

interface LgAssistenciaViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const LgAssistenciaView: React.FC<LgAssistenciaViewProps> = ({ onOpenBookingModal }) => {
  const breadcrumbs = [
    { name: "Início", item: COMPANY_INFO.subdomainUrl },
    { name: "Conserto Lava e Seca", item: `${COMPANY_INFO.subdomainUrl}/conserto-lava-e-seca-penha` },
    { name: "Assistência LG Penha", item: `${COMPANY_INFO.subdomainUrl}/assistencia-lava-e-seca-lg-penha` }
  ];

  return (
    <>
      <EnhancedSEO
        title="Assistência Técnica Lava e Seca LG em Penha | Peças Originais"
        description="Assistência técnica especializada em Lava e Seca LG Direct Drive e Smart ThinQ em Penha e região. Resolução de Erros OE, UE, dE, IE e troca de peças originais com 90 dias de garantia."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/assistencia-lava-e-seca-lg-penha`}
        breadcrumbs={breadcrumbs}
      />

      <main className="bg-[#F4F1EA] text-[#12324A] min-h-screen pb-16">
        
        {/* Page Hero */}
        <PageHero
          badge="01 / MARCA LG DIRECT DRIVE"
          title="Assistência Técnica Lava e Seca LG em Penha e Região"
          subtitle="Manutenção especializada em motores Direct Drive, TurboWash, tecnologia Inverter e placas eletrônicas LG. Atendimento em domicílio com garantia formal de 90 dias por escrito."
          breadcrumbs={[
            { label: "Conserto Lava e Seca", path: "/conserto-lava-e-seca-penha" },
            { label: "Assistência LG", path: "/assistencia-lava-e-seca-lg-penha" }
          ]}
          equipmentType="lava-e-seca"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
          
          {/* Error Codes Section */}
          <div className="space-y-6">
            <SectionHeader
              step="02 / DIAGNÓSTICO DIGITAL LG"
              title="Solução para Códigos de Erro de Lava e Seca LG"
              subtitle="Confira o diagnóstico para os erros mais frequentes nos painéis Smart ThinQ e Direct Drive."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  ERRO OE
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Falha de Drenagem</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed mb-3">
                  Indica que a máquina não conseguiu escoar a água em até 10 minutos. Causa comum: obstrução no filtro de resíduos frontal por objetos ou queima da bomba de esgotamento.
                </p>
                <p className="text-xs text-[#16a34a] font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Limpeza e substituição da bomba de drenagem original LG.
                </p>
              </TechCard>

              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  ERRO UE
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Desbalanceamento do Tambor</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed mb-3">
                  Indica desbalanceamento do tambor de centrifugação ou falha nos amortecedores e molas de suspensão da tina.
                </p>
                <p className="text-xs text-[#16a34a] font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Ajuste de nivelamento ou substituição dos amortecedores hidráulicos.
                </p>
              </TechCard>

              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  ERRO dE / dE1
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Trava de Segurança da Porta</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed mb-3">
                  Falha no travamento elétrico de segurança do vidro da escotilha.
                </p>
                <p className="text-xs text-[#16a34a] font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Troca do mecanismo micro-switch da trava da porta LG.
                </p>
              </TechCard>

              <TechCard stamped={true}>
                <span className="font-mono text-xs font-bold text-[#D9682B] px-2 py-0.5 bg-[#F4F1EA] border border-[#12324A]/30">
                  ERRO IE
                </span>
                <h3 className="font-bold text-base text-[#12324A] font-display mt-2 mb-1">Entrada de Água Insuficiente</h3>
                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed mb-3">
                  Falha no enchimento do tambor por queimadura da válvula solenóide dupla/tripla de admissão.
                </p>
                <p className="text-xs text-[#16a34a] font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Troca da válvula de entrada d'água original.
                </p>
              </TechCard>
            </div>
          </div>

          {/* Bottom CTA Card */}
          <div className="bg-[#12324A] text-white p-8 border-2 border-[#12324A] rounded-[4px] shadow-stamped text-center space-y-4">
            <h2 className="text-2xl font-bold font-display text-white">Precisa de Reparo em Sua LG Direct Drive?</h2>
            <p className="text-[#BFE3F2] text-sm max-w-xl mx-auto font-sans">
              Técnicos especializados com peças genuínas LG e garantia de 90 dias em Penha, Piçarras, Navegantes, Itajaí e região.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <TechButton
                variant="whatsapp"
                href={`${COMPANY_INFO.whatsappUrl}%20para%20Lava%20e%20Seca%20LG`}
                target="_blank"
                rel="noopener noreferrer"
                location="lg_cta_whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAMAR TÉCNICO LG NO WHATSAPP</span>
              </TechButton>

              <TechButton
                variant="phone"
                href={`tel:${COMPANY_INFO.phoneClean}`}
                location="lg_cta_phone"
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

