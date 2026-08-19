import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CreditCard, ChevronRight, MessageCircle, Heart, DollarSign, BookOpen } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { AnimatedFrostLogo } from './AnimatedFrostLogo';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-300 flex justify-center items-center">
      <div className="bg-slate-950/90 border border-slate-800 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        <p className="text-slate-200 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span> 
          
          {/* Coração pulsante com efeito de sombra */}
          <Heart 
            size={14} 
            className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]" 
          /> 
          
          <span className="opacity-90">por</span>
          
          {/* Link para o site da Suprema */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300"
          >
            Suprema Sites Express
            
            {/* Logotipo oficial com efeito de iluminação */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-slate-100 text-slate-700 border-t border-slate-200 text-sm pt-12 pb-8 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Prominent High-Contrast Contact Card */}
        <div className="bg-white border-2 border-cyan-600 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Direct Contact Info */}
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atendimento Domiciliar com Plantão 24h</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Precisa de Conserto Urgente de Geladeira?
              </h3>
              <p className="text-slate-600 text-base max-w-2xl font-medium">
                Atendimento rápido em Penha, Navegantes, Itajaí, Balneário Camboriú e região. Orçamento transparente no local com garantia de 90 dias por escrito.
              </p>
            </div>

            {/* High Impact Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-lg shadow-emerald-600/20 transition-transform active:scale-95 min-h-[52px]"
              >
                <MessageCircle className="w-6 h-6 shrink-0" />
                <span>Falar no WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-lg shadow-blue-600/20 transition-transform active:scale-95 min-h-[52px]"
              >
                <Phone className="w-6 h-6 shrink-0" />
                <span>Ligar: {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>
        </div>

        {/* 4 Main Footer Columns (Block C Specification) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          
          {/* Col 1: Serviços & Especialidades */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-black text-base uppercase tracking-wider border-b border-slate-300 pb-2">
              Serviços & Especialidades
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/conserto-de-geladeira" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Conserto de Geladeira Frost Free</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-side-by-side" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Side by Side & French Door</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-lava-e-seca-penha" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Conserto de Lava e Seca</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-freezer" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Freezers Verticais e Horizontais</span>
                </Link>
              </li>
              <li>
                <Link to="/refrigeracao-comercial" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Refrigeração Comercial & PMOC</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-camara-fria" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Câmaras Frias & Balcões</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-cervejeira-e-expositor" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Cervejeiras & Expositores</span>
                </Link>
              </li>
              <li>
                <Link to="/precos" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-bold text-cyan-800">
                  <DollarSign className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Tabela de Preços & Prazos</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Cidades & Bairros Populares */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-black text-base uppercase tracking-wider border-b border-slate-300 pb-2">
              Cidades & Bairros
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/conserto-de-geladeira-navegantes" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Navegantes - SC</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-gravata" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Bairro Gravatá (Navegantes)</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-penha" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Penha & Beto Carrero</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-itajai" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Itajaí - SC</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-praia-brava" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Praia Brava (Itajaí)</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-balneario-camboriu" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Balneário Camboriú</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-centro-balneario-camboriu" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Centro de Balneário Camboriú</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-balneario-picarras" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Balneário Piçarras</span>
                </Link>
              </li>
              <li>
                <Link to="/regioes-atendidas" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-bold text-cyan-800 pt-1">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Central de Regiões Atendidas →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Marcas & Blog */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-black text-base uppercase tracking-wider border-b border-slate-300 pb-2">
              Marcas & Conhecimento
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/assistencia-tecnica-geladeira-brastemp" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Assistência Brastemp</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-electrolux" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Assistência Electrolux</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-consul" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Assistência Consul</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-samsung" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Assistência Samsung</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-lg" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Assistência LG Inverter</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-panasonic" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Assistência Panasonic</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-midea" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Assistência Midea</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-bold text-cyan-800 pt-1">
                  <BookOpen className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Blog Técnico & Dicas →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Empresa, Garantia & Contato */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-black text-base uppercase tracking-wider border-b border-slate-300 pb-2">
              Empresa & Contato
            </h4>
            <div className="space-y-3 text-sm text-slate-700">
              <AnimatedFrostLogo size="sm" />
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <span className="font-medium text-slate-800">{COMPANY_INFO.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-slate-900 font-extrabold text-base text-emerald-700">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-slate-900 font-medium">
                  {COMPANY_INFO.email}
                </a>
              </p>
              
              <div className="p-3 rounded-xl bg-white border border-slate-300 shadow-xs space-y-1 text-xs">
                <p className="font-bold text-cyan-800 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Garantia de 90 Dias com Nota
                </p>
                <p className="text-slate-600 font-medium">Atendimento de Segunda a Sábado das 08h às 18h</p>
                <p className="text-emerald-700 font-extrabold">Plantão Emergencial 24h para Restaurantes e B2B</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Technical Links */}
        <div className="pt-8 border-t border-slate-300 text-center md:flex md:justify-between md:items-center text-xs text-slate-500 space-y-3 md:space-y-0 font-medium">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados. Penha & Navegantes, SC.</p>
          <div className="flex justify-center space-x-6">
            <Link to="/mapa-do-site" className="hover:text-cyan-800 font-bold text-slate-700">Mapa do Site</Link>
            <a href="/sitemap.xml" target="_blank" className="hover:text-slate-800">Sitemap XML</a>
            <a href="/robots.txt" target="_blank" className="hover:text-slate-800">robots.txt</a>
            <a href="/llms.txt" target="_blank" className="hover:text-slate-800">llms.txt</a>
          </div>
        </div>

        {/* Developer Credit Footer Badge */}
        <SupremaCredit />

      </div>
    </motion.footer>
  );
};
