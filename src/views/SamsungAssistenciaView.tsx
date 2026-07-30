import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { COMPANY_INFO } from '../data/company';
import { MessageCircle, Phone, Cpu, CheckCircle2 } from 'lucide-react';

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
      <SeoHead
        title="Assistência Técnica Lava e Seca Samsung em Penha | Peças Genuínas"
        description="Assistência técnica especializada em Lava e Seca Samsung EcoBubble e Digital Inverter em Penha e região. Reparo de Erros 5E, 5C, 4E, 4C, UE, DC e garantia formal de 90 dias."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/assistencia-lava-e-seca-samsung-penha`}
        breadcrumbs={breadcrumbs}
      />

      <main className="bg-slate-950 text-white min-h-screen py-10 space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold uppercase">
              Especialista em Tecnologia Samsung EcoBubble
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Assistência Técnica de Lava e Seca Samsung em Penha e Região
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Conserto especializado em motores Digital Inverter, sistema EcoBubble, AddWash e placas inversoras de Lava e Seca Samsung WD10, WD11, WD13. Atendimento em domicílio com garantia formal de 90 dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`${COMPANY_INFO.whatsappUrl}%20para%20Lava%20e%20Seca%20Samsung`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chamar Técnico Samsung no WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenBookingModal('Samsung Lava e Seca')}
                className="px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 font-bold text-sm"
              >
                Agendar Horário para Samsung
              </button>
            </div>
          </div>

          {/* Solutions for Samsung Error Codes */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span>Solução para Códigos de Erro de Lava e Seca Samsung</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                <span className="font-extrabold text-cyan-400 text-base">Erro 5E / 5C (Falha de Drenagem)</span>
                <p className="text-xs text-slate-300">
                  A máquina não drenou a água. Ocorre por acúmulo de sujeira no filtro do motor de drenagem ou queima do estator da bomba.
                </p>
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Desobstrução e troca da bomba de esgotamento original Samsung.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                <span className="font-extrabold text-cyan-400 text-base">Erro 4E / 4C (Entrada de Água)</span>
                <p className="text-xs text-slate-300">
                  Indica falta de entrada d'água no dispenser ou válvulas solenóides travadas.
                </p>
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Substituição da válvula de admissão de água.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                <span className="font-extrabold text-cyan-400 text-base">Erro DC / dC (Porta Aberta)</span>
                <p className="text-xs text-slate-300">
                  Porta não travada ou sensor da escotilha com mau contato.
                </p>
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Conserto e troca do kit da trava da porta Samsung.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                <span className="font-extrabold text-cyan-400 text-base">Erro HC / HE (Aquecimento de Água/Ar)</span>
                <p className="text-xs text-slate-300">
                  Superaquecimento ou falta de aquecimento na secagem por falha na resistência de níquel-cromo ou termostato de segurança.
                </p>
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solução: Troca do conjunto do duto de secagem e resistência.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-slate-950 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">Sua Samsung Precisa de Assistência Técnica?</h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Atendemos Penha, Piçarras, Itajaí, Balneário Camboriú e região no mesmo dia com peças genuínas.
            </p>
            <a
              href={`${COMPANY_INFO.whatsappUrl}%20para%20Lava%20e%20Seca%20Samsung`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg"
            >
              Chamar no WhatsApp
            </a>
          </div>

        </div>
      </main>
    </>
  );
};
