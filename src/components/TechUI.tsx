import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, ArrowRight, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { trackContactClick } from '../utils/analytics';

// 1. TechButton
interface TechButtonProps {
  variant?: 'whatsapp' | 'phone' | 'neutral' | 'outline';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  location?: string;
}

export const TechButton: React.FC<TechButtonProps> = ({
  variant = 'whatsapp',
  href,
  onClick,
  children,
  className = '',
  target,
  rel,
  location = 'page_button'
}) => {
  const baseStyles = "px-5 py-3 rounded-[4px] font-mono font-bold text-xs sm:text-sm border-2 border-[#12324A] shadow-stamped hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#12324A] transition-all inline-flex items-center justify-center gap-2 select-none shrink-0";
  
  let variantStyles = "";
  if (variant === 'whatsapp') {
    variantStyles = "bg-[#16a34a] hover:bg-[#15803d] text-white";
  } else if (variant === 'phone') {
    variantStyles = "bg-[#D9682B] hover:bg-[#c45a24] text-white";
  } else if (variant === 'neutral') {
    variantStyles = "bg-[#12324A] hover:bg-[#1a4768] text-white";
  } else if (variant === 'outline') {
    variantStyles = "bg-white hover:bg-[#BFE3F2]/30 text-[#12324A]";
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (variant === 'whatsapp' && href) {
      trackContactClick({ channel: 'whatsapp', location, target: href });
    } else if (variant === 'phone' && href) {
      trackContactClick({ channel: 'phone', location, target: href });
    }
    if (onClick) onClick();
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={handleClick}
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

// 2. SectionHeader
interface SectionHeaderProps {
  step: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  step,
  title,
  subtitle,
  className = ''
}) => {
  return (
    <div className={`space-y-1 border-b-2 border-[#12324A] pb-4 text-left ${className}`}>
      <span className="font-mono text-xs text-[#D9682B] font-bold tracking-wider uppercase block">
        {step}
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12324A] font-display tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-[#12324A]/80 text-sm sm:text-base max-w-xl mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// 3. TechCard
interface TechCardProps {
  children: React.ReactNode;
  className?: string;
  stamped?: boolean;
  hoverable?: boolean;
}

export const TechCard: React.FC<TechCardProps> = ({
  children,
  className = '',
  stamped = true,
  hoverable = false
}) => {
  return (
    <div
      className={`bg-white border-2 border-[#12324A] rounded-[4px] p-5 text-left ${
        stamped ? 'shadow-stamped' : ''
      } ${
        hoverable ? 'hover:bg-[#BFE3F2]/20 hover:translate-x-[1px] hover:translate-y-[1px] transition-all' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

// 4. Equipment SVG Technical Illustration for PageHero
const EquipmentIllustration: React.FC<{ type?: string }> = ({ type = 'geladeira' }) => {
  if (type === 'lava-e-seca') {
    return (
      <svg viewBox="0 0 200 240" className="w-full h-auto max-h-[220px] mx-auto select-none">
        <rect x="25" y="15" width="150" height="210" fill="#F4F1EA" stroke="#12324A" strokeWidth="2.5" rx="4" />
        <rect x="40" y="30" width="120" height="25" fill="none" stroke="#12324A" strokeWidth="1.5" />
        <circle cx="100" cy="140" r="55" fill="#white" stroke="#12324A" strokeWidth="2.5" />
        <circle cx="100" cy="140" r="42" fill="none" stroke="#D9682B" strokeWidth="2" strokeDasharray="6 3" />
        <text x="100" y="144" textAnchor="middle" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="bold" fill="#12324A">
          INVERTER DRUM
        </text>
        <line x1="20" y1="42" x2="40" y2="42" stroke="#D9682B" strokeWidth="1.5" />
        <text x="5" y="40" fontSize="7" fontFamily="IBM Plex Mono" fill="#D9682B" fontWeight="bold">PAINEL DIGITAL</text>
      </svg>
    );
  }

  if (type === 'cervejeira') {
    return (
      <svg viewBox="0 0 200 240" className="w-full h-auto max-h-[220px] mx-auto select-none">
        <rect x="30" y="15" width="140" height="210" fill="#F4F1EA" stroke="#12324A" strokeWidth="2.5" rx="3" />
        <rect x="42" y="28" width="116" height="150" fill="#BFE3F2" stroke="#12324A" strokeWidth="1.5" />
        <rect x="55" y="50" width="22" height="70" fill="none" stroke="#12324A" strokeWidth="1.5" rx="2" />
        <rect x="89" y="50" width="22" height="70" fill="none" stroke="#12324A" strokeWidth="1.5" rx="2" />
        <rect x="123" y="50" width="22" height="70" fill="none" stroke="#12324A" strokeWidth="1.5" rx="2" />
        <rect x="42" y="188" width="116" height="30" fill="#D9682B" stroke="#12324A" strokeWidth="1.5" />
        <text x="100" y="207" textAnchor="middle" fontSize="11" fontFamily="IBM Plex Mono" fontWeight="extrabold" fill="#white">
          −4.0 °C CONTROL
        </text>
      </svg>
    );
  }

  if (type === 'camara-fria') {
    return (
      <svg viewBox="0 0 200 240" className="w-full h-auto max-h-[220px] mx-auto select-none">
        <rect x="20" y="15" width="160" height="210" fill="#F4F1EA" stroke="#12324A" strokeWidth="2.5" rx="2" />
        <line x1="60" y1="15" x2="58" y2="225" stroke="#0284c7" strokeWidth="3.5" opacity="0.8" />
        <line x1="85" y1="15" x2="88" y2="225" stroke="#0284c7" strokeWidth="3.5" opacity="0.8" />
        <line x1="110" y1="15" x2="108" y2="225" stroke="#0284c7" strokeWidth="3.5" opacity="0.8" />
        <line x1="135" y1="15" x2="138" y2="225" stroke="#0284c7" strokeWidth="3.5" opacity="0.8" />
        <rect x="145" y="100" x2="155" y2="140" fill="#12324A" />
        <text x="100" y="130" textAnchor="middle" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="bold" fill="#D9682B">
          CORTINA PVC
        </text>
      </svg>
    );
  }

  // Default Refrigerator / Side-by-Side
  return (
    <svg viewBox="0 0 200 240" className="w-full h-auto max-h-[220px] mx-auto select-none">
      <rect x="35" y="15" width="130" height="210" fill="#F4F1EA" stroke="#12324A" strokeWidth="2.5" rx="3" />
      <line x1="35" y1="85" x2="165" y2="85" stroke="#12324A" strokeWidth="2" strokeDasharray="4 2" />
      <rect x="45" y="25" width="110" height="50" fill="#BFE3F2" stroke="#12324A" strokeWidth="1.5" />
      <line x1="45" y1="125" x2="155" y2="125" stroke="#12324A" strokeWidth="1.5" />
      <line x1="45" y1="165" x2="155" y2="165" stroke="#12324A" strokeWidth="1.5" />
      <circle cx="100" cy="198" r="12" fill="none" stroke="#D9682B" strokeWidth="2" />
      <text x="100" y="201" textAnchor="middle" fontSize="6" fontFamily="IBM Plex Mono" fontWeight="bold" fill="#D9682B">
        MOTOR
      </text>
      <text x="100" y="54" textAnchor="middle" fontSize="10" fontFamily="IBM Plex Mono" fontWeight="bold" fill="#12324A">
        EVAPORADOR
      </text>
    </svg>
  );
};

// 5. PageHero
interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; path: string }[];
  equipmentType?: 'geladeira' | 'lava-e-seca' | 'cervejeira' | 'camara-fria' | 'generic';
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge = "01 / ATENDIMENTO TÉCNICO",
  title,
  subtitle,
  breadcrumbs = [],
  equipmentType = 'geladeira'
}) => {
  return (
    <section className="bg-[#F4F1EA] border-b-2 border-[#12324A] py-8 sm:py-12 bg-paper-grid text-left relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="font-mono text-[11px] text-[#12324A]/70 flex items-center flex-wrap gap-1.5 mb-3">
            <Link to="/" className="hover:text-[#D9682B]">Início</Link>
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-[#12324A]/40 shrink-0" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="font-bold text-[#12324A]">{bc.label}</span>
                ) : (
                  <Link to={bc.path} className="hover:text-[#D9682B]">{bc.label}</Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Copy (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[#12324A] text-[11px] font-mono font-bold text-[#12324A]">
              <span>{badge}</span>
              <span className="text-[#D9682B]">• NAVEGANTES E SC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12324A] tracking-tight leading-[1.1] font-display">
              {title}
            </h1>

            <p className="text-[#12324A]/80 text-sm sm:text-base font-sans max-w-xl leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <TechButton
                variant="whatsapp"
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                location="page_hero_whatsapp"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>CHAMAR NO WHATSAPP</span>
              </TechButton>

              <TechButton
                variant="phone"
                href={`tel:${COMPANY_INFO.phoneClean}`}
                location="page_hero_phone"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>LIGAR: {COMPANY_INFO.phone}</span>
              </TechButton>
            </div>
          </div>

          {/* Technical Drawing SVG (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-[#12324A] p-4 shadow-stamped rounded-[4px] relative">
              <div className="flex items-center justify-between border-b border-[#12324A]/20 pb-2 mb-3 font-mono text-[10px] text-[#12324A]">
                <span className="font-bold">DESENHO TÉCNICO // SC REFRIGERAÇÃO</span>
                <span className="text-[#D9682B] font-bold">GARANTIA 90 DIAS</span>
              </div>

              <EquipmentIllustration type={equipmentType} />

              <div className="mt-2 pt-2 border-t border-[#12324A]/20 flex items-center justify-between text-[10px] font-mono text-[#12324A]">
                <span>ORÇAMENTO NO LOCAL</span>
                <span className="font-bold text-[#D9682B]">NATIVE SC</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// 6. SpecList
interface SpecListItem {
  num?: string;
  title: string;
  desc: string;
  link?: string;
}

export const SpecList: React.FC<{ items: SpecListItem[] }> = ({ items }) => {
  return (
    <div className="divide-y border-t border-b border-[#12324A]/30 divide-[#12324A]/20 text-left">
      {items.map((item, idx) => {
        const itemNum = item.num || (idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`);
        return (
          <div
            key={idx}
            className="py-4 hover:bg-[#BFE3F2]/20 px-3 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#D9682B]">[{itemNum}]</span>
                <h3 className="font-bold text-base text-[#12324A] font-display group-hover:text-[#D9682B] transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#12324A]/80 text-xs sm:text-sm font-sans pl-7 max-w-2xl">
                {item.desc}
              </p>
            </div>

            {item.link ? (
              <Link
                to={item.link}
                className="font-mono text-xs font-bold text-[#12324A] group-hover:text-[#D9682B] inline-flex items-center gap-1 shrink-0 pl-7 sm:pl-0"
              >
                <span>Ver detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D9682B]" />
              </Link>
            ) : (
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-bold text-[#16a34a] hover:underline inline-flex items-center gap-1 shrink-0 pl-7 sm:pl-0"
              >
                <span>Chamar no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#16a34a]" />
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

// 7. TechFAQ
interface TechFAQItem {
  question: string;
  answer: string;
}

export const TechFAQ: React.FC<{ items: TechFAQItem[] }> = ({ items }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y border-t border-b border-[#12324A]/30 divide-[#12324A]/20 text-left">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} className="transition-colors">
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full py-4 text-left flex items-center justify-between gap-4 font-bold text-[#12324A] text-sm sm:text-base hover:text-[#D9682B] transition-colors"
            >
              <span className="flex items-start gap-3">
                <span className="font-mono text-xs text-[#D9682B] shrink-0 mt-0.5">[{idx + 1}]</span>
                <span>{item.question}</span>
              </span>
              <span className="font-mono text-lg font-bold text-[#12324A] px-2 py-0.5 bg-white border border-[#12324A] shrink-0">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div className="pb-5 pl-7 pr-4 text-[#12324A]/80 text-xs sm:text-sm leading-relaxed font-sans">
                <p className="bg-white p-3 border border-[#12324A]/20">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// 8. TechTable
interface TechTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

export const TechTable: React.FC<TechTableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto border-2 border-[#12324A] rounded-[4px] shadow-stamped">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="bg-[#12324A] text-white font-mono text-xs uppercase tracking-wider">
            {headers.map((h, idx) => (
              <th key={idx} className="p-3 border-r border-white/20 last:border-r-0">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#12324A]/20 font-sans text-xs sm:text-sm text-[#12324A]">
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-[#BFE3F2]/20 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3 border-r border-[#12324A]/20 last:border-r-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
