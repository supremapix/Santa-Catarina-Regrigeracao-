import React, { useState, useEffect } from 'react';
import { 
  Share2, 
  X, 
  Copy, 
  Check, 
  Phone, 
  MessageCircle, 
  ArrowUp, 
  Sparkles, 
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const SEMANTIC_SHARE_TEXTS = [
  "Estou indicando a Santa Catarina Refrigeração em Navegantes SC! Assistência técnica de geladeira, freezer e cervejeiras com garantia.",
  "Precisando de conserto de geladeira em Navegantes ou Gravatá? Recomendo a Santa Catarina Refrigeração! Diagnóstico transparente e agilidade.",
  "Excelente assistência técnica de refrigeração em Navegantes, Penha e Itajaí. Fale com a Santa Catarina Refrigeração!",
  "Recomendo os serviços da Santa Catarina Refrigeração para conserto de cervejeiras, balcões e geladeiras no Litoral Norte de SC!",
  "Precisa consertar sua geladeira Frost Free ou Side by Side em Navegantes? Recomendo a equipe da Santa Catarina Refrigeração!",
  "Santa Catarina Refrigeração: conserto de cervejeiras e refrigeradores em Navegantes, Centro, Gravatá e região com atendimento rápido.",
  "Comprovação de excelência em conserto de cervejeiras e geladeiras em Navegantes SC. Indico a Santa Catarina Refrigeração!",
  "Conserto de geladeira que não gela na parte de baixo em Navegantes e Penha. A Santa Catarina Refrigeração resolve no mesmo dia!",
  "Super recomendo: assistência técnica de refrigeração residencial e comercial em Navegantes SC — Santa Catarina Refrigeração.",
  "Assistência técnica de cervejeiras para bares e restaurantes em Navegantes e Gravatá. Indico a Santa Catarina Refrigeração!",
  "Precisando consertar freezer, geladeira ou câmara fria em Navegantes SC? Fale com a Santa Catarina Refrigeração!",
  "Atendimento rápido e profissional de refrigeração em Navegantes, Balneário Piçarras e Itajaí — Santa Catarina Refrigeração.",
  "Geladeira não gela nada ou fazendo barulho? A Santa Catarina Refrigeração atende em domicílio em Navegantes SC!",
  "Indico a Santa Catarina Refrigeração em Navegantes: conserto de cervejeira, lava e seca, geladeira e expositores de bebidas.",
  "Melhor opção de assistência técnica em refrigeração em Navegantes e litoral catarinense: Santa Catarina Refrigeração!",
  "Sua cervejeira esquentou ou parou de gelar em Navegantes? Recomendo chamar a Santa Catarina Refrigeração!",
  "Serviço garantido de manutenção preventiva e corretiva de geladeiras em Navegantes SC com a Santa Catarina Refrigeração.",
  "Conserto de lava e seca e geladeiras em Navegantes e Penha com a Santa Catarina Refrigeração. Equipe nota 10!",
  "Santa Catarina Refrigeração: atendimento emergencial e agendado para refrigeração em Navegantes e região.",
  "Precisa de um técnico em refrigeração de confiança em Navegantes SC? Indico de olhos fechados a Santa Catarina Refrigeração!",
  "Cervejeira comercial ou residencial precisando de manutenção em Navegantes? Fale com a Santa Catarina Refrigeração!",
  "Troca de gás, sensor de degelo e placa eletrônica de geladeiras em Navegantes SC com a Santa Catarina Refrigeração.",
  "Conserto de expositor de bebidas e balcão refrigerado em Navegantes e Itajaí pela Santa Catarina Refrigeração.",
  "Conserto de geladeira Brastemp, Electrolux, Consul, Samsung e LG em Navegantes SC com a Santa Catarina Refrigeração.",
  "Assistência técnica qualificada para câmaras frias e refrigeração comercial em Navegantes SC — Santa Catarina Refrigeração.",
  "Procurando conserto de cervejeira no Bairro Gravatá ou Centro de Navegantes? Recomendo a Santa Catarina Refrigeração!",
  "Conserto rápido de geladeiras e refrigeradores no Litoral Norte de Santa Catarina com a Santa Catarina Refrigeração.",
  "Santa Catarina Refrigeração em Navegantes SC: transparência, peças originais e garantia formal de 90 dias.",
  "Sua geladeira congelou o duto ou vazou água? A Santa Catarina Refrigeração resolve em Navegantes e região!",
  "Manutenção especializada de cervejeiras gourmet e comerciais em Navegantes SC com a Santa Catarina Refrigeração.",
  "Indicação de ouro em Navegantes: Santa Catarina Refrigeração para conserto de geladeira, freezer e lava e seca.",
  "Assistência técnica de refrigeração com laboratório móvel em Navegantes, Penha e Balneário Piçarras — Santa Catarina Refrigeração.",
  "Seu comércio em Navegantes não pode parar! Chame a Santa Catarina Refrigeração para conserto de cervejeiras e balcões.",
  "Atendimento em domicílio para conserto de geladeiras em todos os bairros de Navegantes SC — Santa Catarina Refrigeração.",
  "Conserto de frigobar, adega e cervejeira em Navegantes SC com atendimento rápido da Santa Catarina Refrigeração.",
  "Agende seu orçamento de refrigeração em Navegantes com a Santa Catarina Refrigeração. Recomendo muito!",
  "Santa Catarina Refrigeração: especialistas em geladeiras Inverter, Frost Free e Side by Side em Navegantes SC.",
  "Técnico de refrigeração em Navegantes e Região do Vale do Itajaí: confie na Santa Catarina Refrigeração!",
  "Conserto de geladeira com problema no compressor ou vazamento de gás em Navegantes SC — Santa Catarina Refrigeração.",
  "Manutenção preventiva PMOC e corretiva de refrigeração comercial em Navegantes com a Santa Catarina Refrigeração.",
  "Sua bebida trincando de gelada com a manutenção de cervejeiras da Santa Catarina Refrigeração em Navegantes SC!",
  "Qualidade e garantia no conserto de eletrodomésticos de refrigeração em Navegantes e região — Santa Catarina Refrigeração.",
  "Atendimento de excelência em refrigeração residencial e comercial em Navegantes SC pela Santa Catarina Refrigeração.",
  "Precisa de conserto urgente de geladeira no Gravatá em Navegantes? A Santa Catarina Refrigeração atende rápido!",
  "Santa Catarina Refrigeração: solução definitiva para geladeira que não gela no Centro de Navegantes SC.",
  "Atendimento ágil para bares, lanchonetes e restaurantes em Navegantes SC com a Santa Catarina Refrigeração.",
  "Conserto de cervejeiras e geladeiras com atendimento sem complicações em Navegantes — Santa Catarina Refrigeração.",
  "Refrigeração comercial e residencial em Navegantes, Penha, Piçarras e Itajaí: chame a Santa Catarina Refrigeração!",
  "Técnicos especializados e peças de qualidade para conserto de refrigeração e geladeiras em SC com a Santa Catarina Refrigeração.",
  "Indico a Santa Catarina Refrigeração em Navegantes e região pela agilidade e excelência no atendimento!"
];

const DEFAULT_SHARE_IMAGE = COMPANY_INFO.assets.socialPreview;

interface FloatingActionsProps {
  onOpenBookingModal?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBookingModal }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [copiedToast, setCopiedToast] = useState(false);

  // Cycle share texts every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % SEMANTIC_SHARE_TEXTS.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Show Back To Top when scrolling down > 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageDetails = () => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : COMPANY_INFO.subdomainUrl;
    const pageTitle = typeof document !== 'undefined' ? document.title : "Santa Catarina Refrigeração";
    return { pageUrl, pageTitle };
  };

  const currentShareText = SEMANTIC_SHARE_TEXTS[currentTextIndex];

  const handleShareClick = (platform: string) => {
    const { pageUrl, pageTitle } = getPageDetails();
    let url = '';

    switch (platform) {
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${currentShareText}\n\n${pageUrl}`)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(currentShareText)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(currentShareText)}`;
        break;
      case 'pinterest':
        url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(DEFAULT_SHARE_IMAGE)}&description=${encodeURIComponent(`${currentShareText} - ${pageTitle}`)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
        break;
      case 'threads':
        url = `https://www.threads.net/intent/post?text=${encodeURIComponent(`${currentShareText}\n\n${pageUrl}`)}`;
        break;
      default:
        break;
    }

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer,width=600,height=500');
    }
  };

  const handleCopyLink = () => {
    const { pageUrl, pageTitle } = getPageDetails();
    const copyMessage = `Estou indicando a Santa Catarina Refrigeração: ${pageTitle}\n(${pageUrl})\n\n"${currentShareText}"`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(copyMessage).then(() => {
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 3500);
      }).catch(() => {
        fallbackCopy(copyMessage);
      });
    } else {
      fallbackCopy(copyMessage);
    }
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3500);
    } catch (err) {
      console.error('Copy fallback failed', err);
    }
    document.body.removeChild(textArea);
  };

  const sharePlatforms = [
    { id: 'whatsapp', name: 'WhatsApp', color: 'bg-emerald-600 hover:bg-emerald-500 text-white', icon: MessageCircle },
    { id: 'facebook', name: 'Facebook', color: 'bg-blue-600 hover:bg-blue-500 text-white', icon: ExternalLink },
    { id: 'twitter', name: 'Twitter (X)', color: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700', icon: ExternalLink },
    { id: 'pinterest', name: 'Pinterest', color: 'bg-red-600 hover:bg-red-500 text-white', icon: ExternalLink },
    { id: 'linkedin', name: 'LinkedIn', color: 'bg-sky-700 hover:bg-sky-600 text-white', icon: ExternalLink },
    { id: 'threads', name: 'Threads', color: 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700', icon: ExternalLink },
  ];

  return (
    <>
      {/* 1. BOTTOM-LEFT FLOATING SHARE ACTION */}
      <div className="fixed bottom-3 left-3 sm:bottom-4 sm:left-4 z-50 flex flex-col items-start pointer-events-none opacity-85 hover:opacity-100 transition-opacity duration-200">
        
        {/* Share Menu Popup */}
        {isShareOpen && (
          <div className="mb-2 w-72 sm:w-80 max-w-[calc(100vw-2rem)] bg-slate-900/95 border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md text-slate-100 pointer-events-auto animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* Popup Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-bold text-xs text-white">Compartilhar Página</span>
              </div>
              <button
                onClick={() => setIsShareOpen(false)}
                aria-label="Fechar menu de compartilhamento"
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Current Dynamic Share Text Box */}
            <div className="my-2.5 p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1 relative overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                <span className="flex items-center gap-1 text-cyan-400">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Texto Semântico #{currentTextIndex + 1}/50</span>
                </span>
                <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 flex items-center gap-1">
                  <RefreshCw className="w-2 h-2 animate-spin" /> 15s
                </span>
              </div>
              <p className="text-[11px] text-slate-300 italic line-clamp-2 leading-tight">
                "{currentShareText}"
              </p>
            </div>

            {/* Share Image Preview Pill */}
            <div className="mb-2.5 flex items-center gap-2 p-1.5 bg-slate-950/40 border border-slate-800/80 rounded-lg">
              <img 
                src={DEFAULT_SHARE_IMAGE} 
                alt="Foto de compartilhamento" 
                className="w-8 h-8 rounded object-cover border border-slate-700 shrink-0"
              />
              <div className="text-[10px] leading-tight text-slate-300">
                <p className="font-semibold text-white">Anexo de Imagem HD</p>
                <p className="text-slate-400 text-[9px]">Incluso para Pinterest, WhatsApp & Redes</p>
              </div>
            </div>

            {/* Social Share Grid */}
            <div className="grid grid-cols-2 gap-1.5 pb-2.5">
              {sharePlatforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <button
                    key={platform.id}
                    onClick={() => handleShareClick(platform.id)}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg font-semibold text-[11px] shadow-sm transition-all active:scale-95 ${platform.color}`}
                  >
                    <IconComponent className="w-3 h-3 shrink-0" />
                    <span>{platform.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white font-bold text-xs border border-slate-700/80 transition-all active:scale-95"
            >
              {copiedToast ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copiedToast ? "Link Copiado com Sucesso!" : "Copiar Link da Página"}</span>
            </button>

            {/* Success Toast Banner */}
            {copiedToast && (
              <div className="mt-2 p-1.5 bg-emerald-950/90 border border-emerald-500/40 rounded-lg text-center text-[11px] font-bold text-emerald-300 flex items-center justify-center gap-1.5 animate-in fade-in duration-200">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Link Copiado com Sucesso!</span>
              </div>
            )}
          </div>
        )}

        {/* Main Share Toggle Button - Discrete & Compact */}
        <button
          onClick={() => setIsShareOpen(!isShareOpen)}
          aria-label="Compartilhar esta página"
          className="group flex items-center gap-1.5 p-2.5 sm:px-3 sm:py-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-xs shadow-md border border-slate-700/60 backdrop-blur-md pointer-events-auto transition-all hover:scale-105 active:scale-95"
        >
          <Share2 className="w-3.5 h-3.5 text-cyan-400 transition-transform group-hover:rotate-12" />
          <span className="hidden sm:inline text-[11px]">Compartilhar</span>
        </button>
      </div>

      {/* 2. BOTTOM-RIGHT QUICK CONTACT & BACK TO TOP ACTIONS */}
      <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 flex items-center gap-2 pointer-events-none opacity-90 hover:opacity-100 transition-opacity duration-200">
        
        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 shadow-md backdrop-blur-md pointer-events-auto transition-all hover:scale-105 active:scale-95 animate-in fade-in duration-200"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        )}

        {/* Ligar Agora Button - Sleek & Compact */}
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          aria-label="Ligar Agora para Assistência Técnica"
          className="group flex items-center gap-1.5 p-2.5 sm:px-3 sm:py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 shadow-md backdrop-blur-md pointer-events-auto transition-all hover:scale-105 active:scale-95 text-xs font-medium"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="hidden md:inline text-[11px]">{COMPANY_INFO.phone}</span>
        </a>

        {/* WhatsApp 24h Button - Discrete & Compact */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Atendimento WhatsApp"
          className="group flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs shadow-md border border-emerald-500/50 backdrop-blur-md pointer-events-auto transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[11px]">WhatsApp</span>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300"></span>
          </span>
        </a>

      </div>
    </>
  );
};
