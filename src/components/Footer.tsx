import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CreditCard, ChevronRight, MessageCircle, Heart } from 'lucide-react';
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
  // Key regional hubs for quick links in footer
  const mainRegions = [
    { name: 'Balneário Piçarras (Sede Loja)', slug: 'balneario-picarras' },
    { name: 'Penha & Beto Carrero', slug: 'penha' },
    { name: 'Navegantes & Região', slug: 'navegantes' },
    { name: 'Barra Velha & Itajuba', slug: 'barra-velha' },
    { name: 'Itajaí & Praia Brava', slug: 'itajai' },
    { name: 'Balneário Camboriú & Barra Sul', slug: 'balneario-camboriu' },
    { name: 'Itapema & Meia Praia', slug: 'itapema' },
    { name: 'Porto Belo & Perequê', slug: 'porto-belo' },
    { name: 'Bombinhas & Mariscal', slug: 'bombinhas' },
    { name: 'Brusque & Região', slug: 'brusque' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-slate-100 text-slate-700 border-t border-slate-200 text-sm pt-12 pb-8 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Prominent High-Contrast Contact Card for Senior Accessibility */}
        <div className="bg-white border-2 border-cyan-600 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Direct Contact Info */}
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atendimento Preferencial & Plantão 24h</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Precisa de Conserto Urgente de Geladeira?
              </h3>
              <p className="text-slate-600 text-base max-w-2xl font-medium">
                Atendemos idosos e famílias com prioridade e carinho. Ligue ou mande mensagem no WhatsApp para agendar no mesmo dia com garantia de 90 dias!
              </p>
            </div>

            {/* High Impact Big Touch Buttons for Seniors */}
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

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          
          {/* Col 1: Empresa & Sede */}
          <div className="space-y-4">
            <AnimatedFrostLogo size="lg" />

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Assistência técnica autorizada multimarcas com atendimento domiciliar em Navegantes, Penha e região num raio de até 200 km.
            </p>

            <div className="space-y-2 text-sm pt-1">
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Garantia de 90 dias por escrito</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <CreditCard className="w-5 h-5 text-cyan-600 shrink-0" />
                <span>Aceitamos Cartões, PIX e Dinheiro</span>
              </div>
            </div>
          </div>

          {/* Col 2: Serviços Especializados */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-black text-base uppercase tracking-wider border-b border-slate-300 pb-2">
              Principais Serviços
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/conserto-de-geladeira/" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Conserto de Geladeira Frost Free</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-side-by-side/" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Geladeiras Side by Side & French Door</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-lava-e-seca-penha" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Conserto de Máquinas Lava e Seca</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-freezer/" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Freezers Verticais e Horizontais</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-camara-fria/" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Câmaras Frias & Balcões Comerciais</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-frigobar/" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Conserto de Frigobares</span>
                </Link>
              </li>
              <li>
                <Link to="/conserto-de-adega" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Conserto de Adega Climatizada</span>
                </Link>
              </li>
              <li>
                <Link to="/mapa-do-site" className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-bold text-cyan-800">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Ver Todos os Serviços & Mapa do Site</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Cidades & Regiões Atendidas */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-black text-base uppercase tracking-wider border-b border-slate-300 pb-2">
              Páginas de Regiões
            </h4>
            <ul className="space-y-2 text-sm">
              {mainRegions.map((region, idx) => (
                <li key={idx}>
                  <Link
                    to={`/conserto-de-geladeira-em-${region.slug}`}
                    className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 font-medium text-slate-700"
                  >
                    <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span>{region.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <a href="/#cobertura" className="text-cyan-700 hover:underline font-bold text-sm inline-flex items-center gap-1">
                  <span>Ver todas as 40+ Cidades →</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Informações de Contato e Endereço */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-black text-base uppercase tracking-wider border-b border-slate-300 pb-2">
              Endereço e Horários
            </h4>
            <div className="space-y-3 text-sm text-slate-700">
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
              
              <div className="p-3.5 rounded-2xl bg-white border border-slate-300 shadow-sm space-y-1 text-xs">
                <p className="font-bold text-cyan-800 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-600" /> Horário de Funcionamento:
                </p>
                <p className="text-slate-700 font-medium">{COMPANY_INFO.businessHours.weekdays}</p>
                <p className="text-slate-700 font-medium">{COMPANY_INFO.businessHours.sunday}</p>
                <p className="text-emerald-700 font-extrabold">{COMPANY_INFO.businessHours.emergency}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Technical Links */}
        <div className="pt-8 border-t border-slate-300 text-center md:flex md:justify-between md:items-center text-xs text-slate-500 space-y-3 md:space-y-0 font-medium">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados. Sede Navegantes & Penha, SC.</p>
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
