import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CreditCard, ChevronRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const Footer: React.FC = () => {
  // Key regional hubs for quick links in footer
  const mainRegions = [
    { name: 'Navegantes (Sede Central)', slug: 'navegantes' },
    { name: 'Penha & Beto Carrero', slug: 'penha' },
    { name: 'Balneário Piçarras', slug: 'balneario-picarras' },
    { name: 'Barra Velha & Itajuba', slug: 'barra-velha' },
    { name: 'Itajaí & Praia Brava', slug: 'itajai' },
    { name: 'Balneário Camboriú & Barra Sul', slug: 'balneario-camboriu' },
    { name: 'Itapema & Meia Praia', slug: 'itapema' },
    { name: 'Porto Belo & Perequê', slug: 'porto-belo' },
    { name: 'Bombinhas & Mariscal', slug: 'bombinhas' },
    { name: 'Blumenau & Vale do Itajaí', slug: 'blumenau' },
    { name: 'Joinville & Região Norte', slug: 'joinville' },
    { name: 'Florianópolis & Grande Floripa', slug: 'florianopolis' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm pt-12 pb-8 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Prominent High-Contrast Contact Card for Senior Accessibility */}
        <div className="bg-slate-900 border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Direct Contact Info */}
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Atendimento Preferencial & Plantão 24h</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Precisa de Conserto Urgente de Geladeira?
              </h3>
              <p className="text-slate-300 text-base max-w-2xl font-medium">
                Atendemos idosos e famílias com prioridade e carinho. Ligue ou mande mensagem no WhatsApp para agendar no mesmo dia com garantia de 90 dias!
              </p>
            </div>

            {/* High Impact Big Touch Buttons for Seniors */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base shadow-lg shadow-emerald-950/60 transition-transform active:scale-95 min-h-[52px]"
              >
                <MessageCircle className="w-6 h-6 shrink-0" />
                <span>Falar no WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-lg shadow-blue-950/60 transition-transform active:scale-95 min-h-[52px]"
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
            <div className="flex items-center space-x-3">
              <img
                src={COMPANY_INFO.assets.logo}
                alt="Santa Catarina Refrigeração Logo"
                className="h-11 w-auto object-contain"
              />
              <div>
                <span className="block font-black text-white text-base tracking-tight uppercase">
                  SANTA CATARINA
                </span>
                <span className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  REFRIGERAÇÃO
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Assistência técnica autorizada multimarcas com atendimento domiciliar em Navegantes, Penha e região num raio de até 200 km.
            </p>

            <div className="space-y-2 text-sm pt-1">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Garantia de 90 dias por escrito</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <CreditCard className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Aceitamos Cartões, PIX e Dinheiro</span>
              </div>
            </div>
          </div>

          {/* Col 2: Serviços Especializados */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-base uppercase tracking-wider border-b border-slate-800 pb-2">
              Principais Serviços
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/conserto-de-geladeira/" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Conserto de Geladeira Frost Free</span>
                </a>
              </li>
              <li>
                <a href="/conserto-de-side-by-side/" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Geladeiras Side by Side & French Door</span>
                </a>
              </li>
              <li>
                <a href="/conserto-lava-e-seca-penha" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Conserto de Máquinas Lava e Seca</span>
                </a>
              </li>
              <li>
                <a href="/conserto-de-freezer/" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Freezers Verticais e Horizontais</span>
                </a>
              </li>
              <li>
                <a href="/conserto-de-camara-fria/" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Câmaras Frias & Balcões Comerciais</span>
                </a>
              </li>
              <li>
                <a href="/conserto-de-frigobar/" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Conserto de Frigobares e Adegas</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Cidades & Regiões Atendidas */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-base uppercase tracking-wider border-b border-slate-800 pb-2">
              Páginas de Regiões
            </h4>
            <ul className="space-y-2 text-sm">
              {mainRegions.map((region, idx) => (
                <li key={idx}>
                  <a
                    href={`/conserto-de-geladeira-em-${region.slug}`}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium text-slate-300"
                  >
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{region.name}</span>
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a href="/#cobertura" className="text-cyan-400 hover:underline font-bold text-sm inline-flex items-center gap-1">
                  <span>Ver todas as 40+ Cidades →</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Informações de Contato e Endereço */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-base uppercase tracking-wider border-b border-slate-800 pb-2">
              Endereço e Horários
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="font-medium">{COMPANY_INFO.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white font-bold text-base text-emerald-300">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white font-medium">
                  {COMPANY_INFO.email}
                </a>
              </p>
              
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
                <p className="font-bold text-cyan-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Horário de Funcionamento:
                </p>
                <p className="text-slate-300">{COMPANY_INFO.businessHours.weekdays}</p>
                <p className="text-slate-300">{COMPANY_INFO.businessHours.sunday}</p>
                <p className="text-emerald-400 font-bold">{COMPANY_INFO.businessHours.emergency}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Technical Links */}
        <div className="pt-8 border-t border-slate-900 text-center md:flex md:justify-between md:items-center text-xs text-slate-500 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados. Sede Navegantes & Penha, SC.</p>
          <div className="flex justify-center space-x-6">
            <a href="/sitemap.xml" target="_blank" className="hover:text-slate-300">Mapa do Site (XML)</a>
            <a href="/robots.txt" target="_blank" className="hover:text-slate-300">robots.txt</a>
            <a href="/llms.txt" target="_blank" className="hover:text-slate-300">llms.txt</a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
};
