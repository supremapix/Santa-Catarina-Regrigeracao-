import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { COMPANY_INFO } from '../data/company';
import { Home, MessageCircle, AlertTriangle } from 'lucide-react';
import { TechButton, TechCard } from '../components/TechUI';

export const NotFoundView: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Página Não Encontrada (404) | Santa Catarina Refrigeração"
        description="A página solicitada não foi encontrada. Navegue pelos nossos serviços de conserto de geladeira e refrigeração em Penha e região."
        canonicalUrl={COMPANY_INFO.subdomainUrl}
      />

      <main className="bg-[#F4F1EA] text-[#12324A] min-h-[75vh] flex items-center justify-center p-6 text-center bg-paper-grid">
        <TechCard stamped={true} className="max-w-md w-full space-y-6 bg-white border-2 border-[#12324A] p-8">
          <div className="w-14 h-14 bg-[#BFE3F2] border-2 border-[#12324A] text-[#12324A] flex items-center justify-center mx-auto shadow-stamped">
            <AlertTriangle className="w-7 h-7 text-[#D9682B]" />
          </div>

          <div>
            <span className="font-mono text-xs font-bold text-[#D9682B] uppercase tracking-wider block mb-1">
              ERRO 404 // CIRCUITO INTERROMPIDO
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-[#12324A]">
              Página Não Encontrada
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-[#12324A]/80 font-sans leading-relaxed">
            A URL solicitada não está disponível ou foi movida. Nossa equipe técnica está pronta para atendê-lo pelo WhatsApp ou na página principal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <TechButton
              variant="outline"
              href="/"
              className="w-full sm:w-auto"
            >
              <Home className="w-4 h-4" />
              <span>PÁGINA INICIAL</span>
            </TechButton>

            <TechButton
              variant="whatsapp"
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAMAR NO WHATSAPP</span>
            </TechButton>
          </div>
        </TechCard>
      </main>
    </>
  );
};
