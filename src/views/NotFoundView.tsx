import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { COMPANY_INFO } from '../data/company';
import { Home, MessageCircle, ShieldAlert } from 'lucide-react';

export const NotFoundView: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Página Não Encontrada (404) | Santa Catarina Refrigeração"
        description="A página solicitada não foi encontrada. Navegue pelos nossos serviços de conserto de geladeira e refrigeração em Penha e região."
        canonicalUrl={COMPANY_INFO.subdomainUrl}
      />

      <main className="bg-white text-slate-900 min-h-[70vh] flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-16 h-16 bg-slate-100 border border-slate-200 text-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <h1 className="text-4xl font-black text-slate-900">Página Não Encontrada (404)</h1>

          <p className="text-slate-600 text-base leading-relaxed">
            A página que você tentou acessar não existe ou foi movida. Mas nós podemos te ajudar a encontrar o conserto certo para seu aparelho!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
            >
              <Home className="w-5 h-5" />
              <span>Ir para a Página Inicial</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
