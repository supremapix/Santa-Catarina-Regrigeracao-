import React from 'react';
import { MessageCircle, Phone, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { trackContactClick } from '../utils/analytics';

interface HeroProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-[#F4F1EA] border-b-2 border-[#12324A] py-10 lg:py-16 bg-paper-grid relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Section Index Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[#12324A] text-[11px] font-mono font-bold text-[#12324A]">
              <span>01 — ATENDIMENTO EM DOMICÍLIO</span>
              <span className="text-[#D9682B]">• NAVEGANTES E REGIÃO</span>
            </div>

            {/* Main Bricolage Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#12324A] tracking-tight leading-[1.05] font-display">
              Geladeira parou? <br className="hidden sm:inline" />
              A gente vai até você.
            </h1>

            {/* Subtitle */}
            <p className="text-[#12324A]/80 text-base sm:text-lg font-sans max-w-xl leading-relaxed">
              Conserto de geladeira, freezer, lava e seca e refrigeração comercial em Navegantes, Penha, Itajaí e região. Orçamento no local antes de qualquer serviço e 90 dias de garantia por escrito.
            </p>

            {/* Action Buttons (Rectangular, 4px radius, stamped shadow) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick({
                  channel: 'whatsapp',
                  location: 'hero_whatsapp_btn',
                  label: 'Chamar no WhatsApp'
                })}
                className="px-6 py-3.5 rounded-[4px] bg-[#16a34a] hover:bg-[#15803d] text-white font-mono font-bold text-sm border-2 border-[#12324A] shadow-stamped hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#12324A] transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>CHAMAR NO WHATSAPP</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                onClick={() => trackContactClick({
                  channel: 'phone',
                  location: 'hero_phone_btn',
                  label: `Ligar ${COMPANY_INFO.phone}`
                })}
                className="px-6 py-3.5 rounded-[4px] bg-[#D9682B] hover:bg-[#c45a24] text-white font-mono font-bold text-sm border-2 border-[#12324A] shadow-stamped hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#12324A] transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>LIGAR: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Technical Proofs Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-[#12324A]">
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 border border-[#12324A]/30">
                <Check className="w-3.5 h-3.5 text-[#D9682B]" />
                <span>VAMOS ATÉ VOCÊ</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 border border-[#12324A]/30">
                <Check className="w-3.5 h-3.5 text-[#D9682B]" />
                <span>ORÇAMENTO ANTES DO CONSERTO</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 border border-[#12324A]/30">
                <Check className="w-3.5 h-3.5 text-[#D9682B]" />
                <span>90 DIAS DE GARANTIA</span>
              </div>
            </div>

            {/* Brands Single-Line Mono Text */}
            <div className="pt-2 border-t border-[#12324A]/20">
              <span className="text-[11px] font-mono text-[#12324A]/70 font-semibold uppercase tracking-wider block mb-1">
                Atendemos as principais marcas em domicílio:
              </span>
              <p className="font-mono text-xs font-bold text-[#12324A] tracking-wider">
                BRASTEMP · ELECTROLUX · CONSUL · SAMSUNG · LG · PANASONIC · MIDEA
              </p>
            </div>

          </div>

          {/* Technical Blueprint SVG (Right 5 Columns) */}
          <div className="lg:col-span-5 relative">
            
            {/* Technical Refrigerator Diagram Frame */}
            <div className="bg-white border-2 border-[#12324A] p-5 shadow-stamped relative">
              
              {/* Circular Rubber Stamp Badge (Moved to bottom-left sticking out, ~120px) */}
              <div className="absolute -bottom-6 -left-6 z-20 transform -rotate-8 pointer-events-none select-none">
                <svg width="120" height="120" viewBox="0 0 120 120" className="w-28 sm:w-32 h-28 sm:h-32">
                  <circle cx="60" cy="60" r="56" fill="#F4F1EA" stroke="#D9682B" strokeWidth="2" strokeDasharray="5 3" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#D9682B" strokeWidth="1.5" />
                  
                  <path id="stampPath" d="M 18,60 A 42,42 0 1,1 102,60 A 42,42 0 1,1 18,60" fill="none" />
                  <text fontSize="7.5" fontFamily="IBM Plex Mono" fontWeight="900" fill="#D9682B" letterSpacing="1.5">
                    <textPath href="#stampPath">
                      GARANTIA · 90 DIAS · COM NOTA ·
                    </textPath>
                  </text>

                  <text x="60" y="58" textAnchor="middle" fontSize="28" fontWeight="900" fontFamily="Bricolage Grotesque" fill="#D9682B">
                    90
                  </text>
                  <text x="60" y="73" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="IBM Plex Mono" fill="#12324A">
                    DIAS GARANTIA
                  </text>
                </svg>
              </div>

              <div className="flex items-center justify-between border-b border-[#12324A]/20 pb-2 mb-3 font-mono text-[10px] text-[#12324A]">
                <span className="font-bold">DESENHO TÉCNICO // FIG. 01</span>
                <span>VISTA DE CORTE ESQUEMÁTICO</span>
              </div>

              {/* Technical Drawing SVG */}
              <svg viewBox="0 0 220 280" className="w-full h-auto max-h-[300px] mx-auto" role="img" aria-label="Desenho técnico de geladeira mostrando evaporador, termostato, gaxeta e compressor">
                {/* Refrigerator Outer Frame */}
                <rect x="40" y="20" width="140" height="230" fill="#F4F1EA" stroke="#12324A" strokeWidth="2.5" rx="2" />
                <line x1="40" y1="100" x2="180" y2="100" stroke="#12324A" strokeWidth="1.5" strokeDasharray="4 2" />

                {/* Freezer / Evaporator Area */}
                <rect x="52" y="32" width="116" height="56" fill="#BFE3F2" stroke="#12324A" strokeWidth="1.5" />
                <path d="M 60 45 L 160 45 M 60 58 L 160 58 M 60 71 L 160 71" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 2" />

                {/* Lower Cabinet / Shelves */}
                <line x1="52" y1="140" x2="168" y2="140" stroke="#12324A" strokeWidth="1.5" />
                <line x1="52" y1="180" x2="168" y2="180" stroke="#12324A" strokeWidth="1.5" />

                {/* Compressor Compartment Bottom */}
                <rect x="52" y="206" width="116" height="38" fill="none" stroke="#12324A" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="110" cy="225" r="14" fill="#white" stroke="#D9682B" strokeWidth="2" />
                <text x="110" y="228" textAnchor="middle" fontSize="7" fontFamily="IBM Plex Mono" fontWeight="bold" fill="#D9682B">
                  MOTOR
                </text>

                {/* Dimension Lines & Callouts */}
                {/* Evaporador Arrow Callout */}
                <line x1="20" y1="50" x2="52" y2="50" stroke="#D9682B" strokeWidth="1.5" />
                <circle cx="20" cy="50" r="2" fill="#D9682B" />
                <text x="5" y="48" fontSize="8" fontFamily="IBM Plex Mono" fontWeight="bold" fill="#D9682B">
                  EVAPORADOR
                </text>

                {/* Gaxeta / Borracha Callout */}
                <line x1="180" y1="120" x2="205" y2="120" stroke="#12324A" strokeWidth="1.5" />
                <circle cx="205" cy="120" r="2" fill="#12324A" />
                <text x="165" y="115" fontSize="7" fontFamily="IBM Plex Mono" fontWeight="bold" fill="#12324A">
                  GAXETA DE VEDAÇÃO
                </text>

                {/* Compressor Callout */}
                <line x1="124" y1="225" x2="200" y2="225" stroke="#D9682B" strokeWidth="1.5" />
                <circle cx="200" cy="225" r="2" fill="#D9682B" />
                <text x="155" y="238" fontSize="7" fontFamily="IBM Plex Mono" fontWeight="bold" fill="#D9682B">
                  COMPRESSOR (HERMÉTICO)
                </text>

                {/* Height Dimension Line */}
                <line x1="28" y1="20" x2="28" y2="250" stroke="#12324A" strokeWidth="1" />
                <line x1="24" y1="20" x2="32" y2="20" stroke="#12324A" strokeWidth="1" />
                <line x1="24" y1="250" x2="32" y2="250" stroke="#12324A" strokeWidth="1" />
                <text x="24" y="135" fontSize="7" fontFamily="IBM Plex Mono" fill="#12324A" transform="rotate(-90 24,135)">
                  PADRÃO RESIDENCIAL
                </text>
              </svg>

              <div className="mt-2 pt-2 border-t border-[#12324A]/20 flex items-center justify-between text-[10px] font-mono text-[#12324A]">
                <span>SANTA CATARINA REFRIGERAÇÃO</span>
                <span className="font-bold text-[#D9682B]">CONSERTO NO LOCAL</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

