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

      <main className="bg-slate-950 text-white min-h-[70vh] flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-16 h-16 bg-slate-900 border border-slate-800 text-amber-400 rounded-2xl flex items-center justify-center mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <h1 className="text-4xl font-black text-white">Página Não Encontrada (404)</h1>

          <p className="text-slate-300 text-sm leading-relaxed">
            A página que você tentou acessar não existe ou foi movida. Mas nós podemos te ajudar a encontrar o conserto certo para seu aparelho!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Ir para a Página Inicial</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
