import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, MessageCircle, Phone, Cpu, Wrench, CheckCircle2 } from 'lucide-react';

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
      <SeoHead
        title="Assistência Técnica Lava e Seca LG em Penha | Peças Originais"
        description="Assistência técnica especializada em Lava e Seca LG Direct Drive e Smart ThinQ em Penha e região. Resolução de Erros OE, UE, dE, IE e troca de peças originais com 90 dias de garantia."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/assistencia-lava-e-seca-lg-penha`}
        breadcrumbs={breadcrumbs}
      />

      <main className="bg-slate-950 text-white min-h-screen py-10 space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold uppercase">
              Especialista em Tecnologia LG Direct Drive
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Assistência Técnica de Lava e Seca LG em Penha e Região
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Manutenção especializada em motores Direct Drive, TurboWash, tecnologia Inverter e placas eletrônicas de Lava e Seca LG. Atendimento em domicílio com peças originais e garantia formal de 90 dias por escrito.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`${COMPANY_INFO.whatsappUrl}%20para%20Lava%20e%20Seca%20LG`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chamar Técnico LG no WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenBookingModal('LG Lava e Seca')}
                className="px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 font-bold text-sm"
              >
                Agendar Horário para LG
              </button>
            </div>
          </div>

          {/* Solutions for LG Error Codes */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span>Solução para Códigos de Erro de Lava e Seca LG</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                <span className="font-extrabold text-cyan-400 text-base">Erro OE (Falha de Drenagem)</span>
                <p className="text-xs text-slate-300">
                  Indica que a máquina não conseguiu escoar a água em até 10 minutos. Causa comum: obstrução no filtro de resíduos frontal por objetos ou queima da bomba de esgotamento.
                </p>
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Limpeza e substituição da bomba de drenagem original LG.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                <span className="font-extrabold text-cyan-400 text-base">Erro UE (Desbalanceamento)</span>
                <p className="text-xs text-slate-300">
                  Indica desbalanceamento do tambor de centrifugação ou falha nos amortecedores e molas de suspensão da tina.
                </p>
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Ajuste de nivelamento ou substituição dos amortecedores hidráulicos.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                <span className="font-extrabold text-cyan-400 text-base">Erro dE / dE1 (Trava da Porta)</span>
                <p className="text-xs text-slate-300">
                  Falha no travamento elétrico de segurança do vidro da escotilha.
                </p>
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Troca do mecanismo micro-switch da trava da porta LG.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                <span className="font-extrabold text-cyan-400 text-base">Erro IE (Entrada de Água)</span>
                <p className="text-xs text-slate-300">
                  Falha no enchimento do tambor por queimadura da válvula solenóide dupla/tripla de admissão.
                </p>
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Troca da válvula de entrada d'água original.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-slate-950 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">Precisa de Reparo em Sua LG Direct Drive?</h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Técnicos especializados com peças genuínas LG e garantia de 90 dias em Penha, Piçarras, Itajaí e região.
            </p>
            <a
              href={`${COMPANY_INFO.whatsappUrl}%20para%20Lava%20e%20Seca%20LG`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg"
            >
              Falar no WhatsApp
            </a>
          </div>

        </div>
      </main>
    </>
  );
};
