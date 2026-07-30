import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About & Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={COMPANY_INFO.assets.logo}
                alt="Santa Catarina Refrigeração Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="block font-black text-white text-base tracking-tight uppercase">
                  SANTA CATARINA
                </span>
                <span className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                  REFRIGERAÇÃO
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Assistência técnica especializada no conserto e manutenção de geladeiras, freezers, frigobares, adegas, câmaras frias, balcões e máquinas lava e seca em Penha e toda a região num raio de até 200 km.
            </p>

            <div className="pt-2 space-y-1.5 text-xs">
              <p className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantia de 90 dias em todos os serviços</span>
              </p>
              <p className="flex items-center gap-1.5 text-slate-300">
                <CreditCard className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Cartão de Crédito, Débito, PIX e Dinheiro</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links / Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Principais Serviços</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/conserto-de-geladeira/" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Conserto de Geladeira Frost Free
                </a>
              </li>
              <li>
                <a href="/conserto-de-side-by-side/" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Geladeiras Side by Side & French Door
                </a>
              </li>
              <li>
                <a href="/conserto-lava-e-seca-penha" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Conserto Lava e Seca em Penha
                </a>
              </li>
              <li>
                <a href="/conserto-de-camara-fria/" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Câmaras Frias & Frigoríficas
                </a>
              </li>
              <li>
                <a href="/conserto-de-freezer/" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Freezers Verticais e Horizontais
                </a>
              </li>
              <li>
                <a href="/conserto-de-balcao-refrigerado/" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Balcões Expositores & Cervejeiras
                </a>
              </li>
              <li>
                <a href="/conserto-de-adega/" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Adegas Climatizadas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Brand & Blog Landings */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Marcas & Conteúdo</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/assistencia-lava-e-seca-lg-penha" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Assistência Lava e Seca LG
                </a>
              </li>
              <li>
                <a href="/assistencia-lava-e-seca-samsung-penha" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Assistência Lava e Seca Samsung
                </a>
              </li>
              <li>
                <a href="/blog/lava-e-seca-penha-guia-completo" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Blog: Guia Completo Lava e Seca
                </a>
              </li>
              <li>
                <a href="/#cobertura" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Cidades do Raio de 200 km
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Sitemap XML
                </a>
              </li>
              <li>
                <a href="/llms.txt" target="_blank" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-cyan-500" /> Referência para IAs (llms.txt)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours (NAP) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contato & Sede</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <div className="pt-2 border-t border-slate-900 space-y-1">
                <p className="flex items-center gap-1.5 text-slate-400 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> Horário de Funcionamento:
                </p>
                <p className="text-[11px] text-slate-400">{COMPANY_INFO.businessHours.weekdays}</p>
                <p className="text-[11px] text-slate-400">{COMPANY_INFO.businessHours.sunday}</p>
                <p className="text-[11px] text-emerald-400 font-bold">{COMPANY_INFO.businessHours.emergency}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 border-t border-slate-900 text-center md:flex md:justify-between md:items-center text-xs text-slate-500 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados. CNPJ / Sede Penha, SC.</p>
          <div className="flex justify-center space-x-4">
            <a href="/robots.txt" target="_blank" className="hover:text-slate-400">robots.txt</a>
            <a href="/sitemap.xml" target="_blank" className="hover:text-slate-400">sitemap.xml</a>
            <a href="/llms.txt" target="_blank" className="hover:text-slate-400">llms.txt</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
