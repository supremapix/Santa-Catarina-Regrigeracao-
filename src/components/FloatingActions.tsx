import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Share2, 
  X, 
  MessageCircle, 
  Phone, 
  ArrowUp, 
  Copy, 
  Check, 
  Share,
  Facebook,
  Linkedin
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { trackContactClick, trackShareEvent } from '../utils/analytics';

interface FloatingActionsProps {
  onOpenBookingModal?: (serviceName?: string) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = () => {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const popoverRef = useRef<HTMLDivElement>(null);
  const shareBtnRef = useRef<HTMLButtonElement>(null);

  // Business hours calculation (Monday to Saturday, 08:00 - 18:00 America/Sao_Paulo)
  const checkBusinessHours = () => {
    try {
      const now = new Date();
      const spDateStr = now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
      const spDate = new Date(spDateStr);
      const day = spDate.getDay(); // 0: Sunday, 1-6: Mon-Sat
      const hour = spDate.getHours();
      return day >= 1 && day <= 6 && hour >= 8 && hour < 18;
    } catch {
      const day = new Date().getDay();
      const hour = new Date().getHours();
      return day >= 1 && day <= 6 && hour >= 8 && hour < 18;
    }
  };

  useEffect(() => {
    setIsOnline(checkBusinessHours());
    const timer = setInterval(() => {
      setIsOnline(checkBusinessHours());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Update current URL and Title on route change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      setCurrentTitle(document.title || COMPANY_INFO.name);
    }
  }, [location.pathname]);

  // Scroll listener for back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close share popover
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isShareOpen &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        shareBtnRef.current &&
        !shareBtnRef.current.contains(e.target as Node)
      ) {
        setIsShareOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isShareOpen) {
        setIsShareOpen(false);
        shareBtnRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isShareOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shareText = `Estou indicando a Santa Catarina Refrigeração, conserto de geladeira e refrigeração em Navegantes e região: ${currentTitle}`;
  const copyFullText = `Estou indicando a Santa Catarina Refrigeração, conserto de geladeira e refrigeração em Navegantes e região: ${currentTitle} (${currentUrl})`;

  const handleCopyLink = async () => {
    trackShareEvent('copy');
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(copyFullText);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = copyFullText;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      trackShareEvent('native');
      try {
        await navigator.share({
          title: currentTitle,
          text: shareText,
          url: currentUrl
        });
        setIsShareOpen(false);
      } catch {
        // User cancelled or share failed
      }
    }
  };

  const shareChannels = [
    {
      name: 'WhatsApp',
      method: 'whatsapp',
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.771.814 2.791.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.802 0-3.486-.481-4.945-1.319l-7.055 1.849 1.884-6.883c-.938-1.523-1.484-3.313-1.484-5.247 0-5.514 4.486-10 10-10 5.514 0 10 4.486 10 10z"/>
        </svg>
      ),
      bg: 'hover:bg-[#25D366]/15 hover:text-[#128C7E]'
    },
    {
      name: 'Facebook',
      method: 'facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      icon: <Facebook className="w-4 h-4" />,
      bg: 'hover:bg-[#1877F2]/15 hover:text-[#1877F2]'
    },
    {
      name: 'X (Twitter)',
      method: 'x',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(currentTitle)}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      bg: 'hover:bg-black/10 hover:text-black'
    },
    {
      name: 'Pinterest',
      method: 'pinterest',
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(COMPANY_INFO.ogImage)}&description=${encodeURIComponent(currentTitle)}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.94-.13-2.39.03-3.42l1.09-4.63s-.28-.56-.28-1.39c0-1.3.75-2.27 1.69-2.27.8 0 1.18.6 1.18 1.32 0 .8-.51 2-1 3.11-.22.94.47 1.71 1.4 1.71 1.68 0 2.97-1.77 2.97-4.32 0-2.26-1.62-3.84-3.94-3.84-2.69 0-4.26 2.02-4.26 4.1 0 .81.31 1.68.7 2.15.08.09.09.18.06.32-.08.31-.25 1.01-.28 1.15-.04.18-.15.22-.34.13-1.28-.59-2.08-2.45-2.08-3.94 0-3.21 2.33-6.16 6.73-6.16 3.53 0 6.28 2.52 6.28 5.88 0 3.51-2.21 6.34-5.28 6.34-1.03 0-2-.54-2.33-1.18l-.64 2.43c-.23.89-.86 2.01-1.28 2.69A12 12 0 1 0 12 0z"/>
        </svg>
      ),
      bg: 'hover:bg-[#E60023]/15 hover:text-[#E60023]'
    },
    {
      name: 'LinkedIn',
      method: 'linkedin',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      icon: <Linkedin className="w-4 h-4" />,
      bg: 'hover:bg-[#0A66C2]/15 hover:text-[#0A66C2]'
    },
    {
      name: 'Threads',
      method: 'threads',
      url: `https://www.threads.net/intent/post?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.828 14.869c-.279.799-.714 1.493-1.289 2.057-.866.849-1.996 1.316-3.272 1.353-1.464.043-2.678-.405-3.606-1.332-1.077-1.077-1.637-2.585-1.621-4.363.017-1.859.613-3.398 1.724-4.453 1.053-.999 2.454-1.523 4.053-1.517 1.547.006 2.89.516 3.886 1.474.923.889 1.442 2.062 1.5 3.393h-1.921c-.08-.853-.414-1.579-.993-2.102-.67-.604-1.549-.914-2.535-.918-1.127-.005-2.072.368-2.732 1.078-.772.83-1.161 2.002-1.157 3.391.004 1.35.399 2.478 1.144 3.266.671.71 1.572 1.077 2.607 1.063.896-.012 1.635-.308 2.197-.881.337-.344.577-.768.718-1.261h-2.915v-1.62h4.72c.074.452.106.914.095 1.371z"/>
        </svg>
      ),
      bg: 'hover:bg-black/10 hover:text-black'
    }
  ];

  return (
    <>
      {/* CANTO INFERIOR ESQUERDO: Botão Compartilhar e Popover */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          ref={shareBtnRef}
          type="button"
          onClick={() => setIsShareOpen(!isShareOpen)}
          aria-expanded={isShareOpen}
          aria-label="Compartilhar esta página"
          className="relative inline-flex items-center justify-center p-3 rounded-[4px] bg-[#F4F1EA] text-[#12324A] border-2 border-[#12324A] shadow-[3px_3px_0_#12324A] hover:bg-[#BFE3F2]/40 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all ring-2 ring-[#D9682B]/60 ring-offset-2 ring-offset-[#F4F1EA] motion-safe:animate-pulse"
        >
          <Share2 className="w-5 h-5 text-[#12324A]" />
          <span className="sr-only">Compartilhar</span>
        </button>

        {/* Popover de Compartilhamento */}
        {isShareOpen && (
          <div
            ref={popoverRef}
            role="dialog"
            aria-modal="true"
            aria-label="Opções de compartilhamento"
            className="absolute bottom-14 left-0 w-72 sm:w-80 bg-[#F4F1EA]/95 backdrop-blur-sm border-2 border-[#12324A] shadow-[6px_6px_0_#12324A] rounded-[4px] p-4 z-50 text-[#12324A]"
          >
            {/* Popover Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#12324A]/20">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D9682B] flex items-center gap-1.5">
                <Share className="w-3.5 h-3.5" />
                Compartilhar Página
              </span>
              <button
                type="button"
                onClick={() => setIsShareOpen(false)}
                aria-label="Fechar janela de compartilhamento"
                className="p-1 hover:bg-[#12324A]/10 rounded-[2px] text-[#12324A] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Social Share Grid */}
            <div className="grid grid-cols-2 gap-2 pt-3 pb-3 border-b border-[#12324A]/15 font-mono text-xs">
              {shareChannels.map((channel) => (
                <a
                  key={channel.method}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackShareEvent(channel.method);
                    setIsShareOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2 border border-[#12324A]/30 rounded-[3px] bg-white font-bold transition-all active:scale-95 ${channel.bg}`}
                >
                  <span className="shrink-0">{channel.icon}</span>
                  <span className="truncate">{channel.name}</span>
                </a>
              ))}
            </div>

            {/* Copy Link Action */}
            <div className="pt-3 space-y-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-white hover:bg-[#BFE3F2]/30 border-2 border-[#12324A] shadow-[2px_2px_0_#12324A] rounded-[3px] font-mono text-xs font-bold active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#16a34a]" />
                    <span className="text-[#16a34a]">Link copiado com sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#12324A]" />
                    <span>Copiar link da página</span>
                  </>
                )}
              </button>

              {/* Native share for supported devices */}
              {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-mono font-semibold text-[#12324A]/70 hover:text-[#12324A] hover:underline"
                >
                  <Share2 className="w-3 h-3" />
                  <span>Mais opções do aparelho</span>
                </button>
              )}

              {/* Accessible Live Region */}
              <div aria-live="polite" className="sr-only">
                {copied ? 'Link copiado com sucesso!' : ''}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CANTO INFERIOR DIREITO: Pilha Vertical (Topo, Ligar, WhatsApp) */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
        
        {/* Voltar ao Topo (após scroll > 300px) */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="p-2.5 rounded-[4px] bg-[#F4F1EA] hover:bg-white text-[#12324A] border-2 border-[#12324A] shadow-[2px_2px_0_#12324A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none pointer-events-auto transition-all"
          >
            <ArrowUp className="w-4 h-4 text-[#12324A]" />
          </button>
        )}

        {/* Ligar Agora (Cobre #D9682B com bounce suave a cada ~4s) */}
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          onClick={() => trackContactClick({
            channel: 'phone',
            location: 'floating_phone_button',
            label: 'Floating Phone Action',
            target: `tel:${COMPANY_INFO.phoneClean}`
          })}
          aria-label={`Ligar para ${COMPANY_INFO.phone}`}
          className="group flex items-center gap-2 p-3 sm:px-3.5 sm:py-2.5 rounded-[4px] bg-[#D9682B] hover:bg-[#c35b22] text-white border-2 border-[#12324A] shadow-[3px_3px_0_#12324A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none pointer-events-auto transition-all"
        >
          <span className="relative flex items-center justify-center motion-safe:animate-[bounce_1s_infinite_4s]">
            <Phone className="w-4 h-4 fill-current shrink-0" />
          </span>
          <span className="hidden sm:inline font-mono font-bold text-xs uppercase tracking-wider">
            Ligar
          </span>
        </a>

        {/* WhatsApp Verde (#25D366) com Indicador de Horário */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactClick({
            channel: 'whatsapp',
            location: 'floating_whatsapp_button',
            label: 'Floating WhatsApp Action',
            target: COMPANY_INFO.whatsappUrl
          })}
          aria-label={`Conversar no WhatsApp — ${isOnline ? 'Online agora' : 'Deixe sua mensagem'}`}
          className="group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-[4px] bg-[#25D366] hover:bg-[#20ba59] text-white border-2 border-[#12324A] shadow-[4px_4px_0_#12324A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none pointer-events-auto transition-all"
        >
          <span className="relative flex items-center justify-center">
            <MessageCircle className="w-5 h-5 fill-current shrink-0 motion-safe:group-hover:scale-110 transition-transform" />
            {isOnline && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-ping" />
              </span>
            )}
          </span>

          <div className="hidden sm:flex flex-col text-left font-mono">
            <span className="font-bold text-xs uppercase tracking-wider leading-none">
              WhatsApp
            </span>
            <span className="text-[10px] text-emerald-950 font-semibold flex items-center gap-1 mt-0.5">
              <span className={`w-1.5 h-1.5 rounded-full inline-block ${isOnline ? 'bg-emerald-950 animate-pulse' : 'bg-slate-700'}`} />
              {isOnline ? 'Online agora' : 'Deixe sua mensagem'}
            </span>
          </div>
        </a>

      </div>
    </>
  );
};
