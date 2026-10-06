import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CreditCard, ChevronRight, MessageCircle, Heart, DollarSign, BookOpen } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { AnimatedFrostLogo } from './AnimatedFrostLogo';
import { trackContactClick } from '../utils/analytics';

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
      className="bg-[#12324A] text-white border-t-2 border-[#12324A] text-sm pt-12 pb-8 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Serviços & Especialidades */}
          <div className="space-y-3">
            <h4 className="font-mono text-[#BFE3F2] font-bold text-xs uppercase tracking-wider border-b border-[#BFE3F2]/20 pb-2">
              Serviços & Especialidades
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link to="/conserto-de-geladeira" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Conserto de Geladeira Frost Free</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-side-by-side" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Side by Side & French Door</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-lava-e-seca-penha" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Conserto de Lava e Seca</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-freezer" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Freezers Verticais e Horizontais</span>
                </Link>
              </li>
              <li>
                <Link to="/refrigeracao-comercial" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Refrigeração Comercial & PMOC</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-camara-fria" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Câmaras Frias & Balcões</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-cervejeira-navegantes-sc" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Cervejeira em Navegantes</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-cervejeira" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Conserto de Cervejeiras (Geral)</span>
                </Link>
              </li>
              <li>
                <Link to="/precos" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 font-bold text-[#BFE3F2] pt-1">
                  <DollarSign className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Tabela de Preços & Prazos</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Cidades & Bairros Populares */}
          <div className="space-y-3">
            <h4 className="font-mono text-[#BFE3F2] font-bold text-xs uppercase tracking-wider border-b border-[#BFE3F2]/20 pb-2">
              Cidades & Bairros
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link to="/conserto-de-geladeira-em-navegantes" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Navegantes - SC</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-gravata" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Bairro Gravatá (Navegantes)</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-penha" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Penha & Beto Carrero</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-itajai" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Itajaí - SC</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-praia-brava" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Praia Brava (Itajaí)</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-balneario-camboriu" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Balneário Camboriú</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-centro-balneario-camboriu" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Centro de Balneário Camboriú</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-geladeira-balneario-picarras" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Balneário Piçarras</span>
                </Link>
              </li>
              <li>
                <Link to="/regioes-atendidas" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 font-bold text-[#BFE3F2] pt-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Central de Regiões Atendidas →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Marcas & Blog */}
          <div className="space-y-3">
            <h4 className="font-mono text-[#BFE3F2] font-bold text-xs uppercase tracking-wider border-b border-[#BFE3F2]/20 pb-2">
              Marcas & Conhecimento
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link to="/assistencia-tecnica-geladeira-brastemp" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Assistência Brastemp</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-electrolux" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Assistência Electrolux</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-consul" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Assistência Consul</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-samsung" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Assistência Samsung</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-lg" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Assistência LG Inverter</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-panasonic" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Assistência Panasonic</span>
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-geladeira-midea" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Assistência Midea</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#D9682B] transition-colors flex items-center gap-1.5 font-bold text-[#BFE3F2] pt-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#D9682B] shrink-0" />
                  <span>Blog Técnico & Dicas →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Empresa, Garantia & Contato */}
          <div className="space-y-3">
            <h4 className="font-mono text-[#BFE3F2] font-bold text-xs uppercase tracking-wider border-b border-[#BFE3F2]/20 pb-2">
              Empresa & Contato
            </h4>
            <div className="space-y-3 text-xs text-white/90">
              <AnimatedFrostLogo size="sm" variant="dark" />
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9682B] shrink-0 mt-0.5" />
                <span className="font-sans">
                  <strong className="block text-[#BFE3F2] font-mono text-[10px] uppercase tracking-wider mb-0.5">LOJA FÍSICA:</strong>
                  {COMPANY_INFO.address.full}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  onClick={() => trackContactClick({ channel: 'phone', location: 'footer_address_phone', target: `tel:${COMPANY_INFO.phoneClean}` })}
                  className="hover:underline font-mono font-bold text-sm text-emerald-400"
                >
                  {COMPANY_INFO.phone}
                </a>
              </p>
              
              <div className="p-3 rounded-[4px] bg-white/10 border border-[#BFE3F2]/20 space-y-1 text-[11px] font-mono">
                <p className="font-bold text-[#BFE3F2] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Garantia 90 Dias com Nota
                </p>
                <p className="text-white/80">Segunda a Sábado: 08h às 18h</p>
                <p className="text-emerald-400 font-bold">Conserto no local</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Technical Links */}
        <div className="pt-8 border-t border-[#BFE3F2]/20 text-center md:flex md:justify-between md:items-center text-xs font-mono text-white/70 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados. Navegantes – SC.</p>
          <div className="flex justify-center space-x-6">
            <Link to="/mapa-do-site" className="hover:text-[#D9682B] text-white/90">Mapa do Site</Link>
            <a href="/sitemap.xml" target="_blank" className="hover:text-[#D9682B]">Sitemap XML</a>
            <a href="/robots.txt" target="_blank" className="hover:text-[#D9682B]">robots.txt</a>
            <a href="/llms.txt" target="_blank" className="hover:text-[#D9682B]">llms.txt</a>
          </div>
        </div>

        {/* Developer Credit Footer Badge */}
        <SupremaCredit />

      </div>
    </motion.footer>
  );
};
