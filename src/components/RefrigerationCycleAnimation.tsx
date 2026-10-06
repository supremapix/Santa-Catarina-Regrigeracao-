import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Snowflake, RefreshCw, Thermometer, ShieldCheck } from 'lucide-react';

interface ComponentInfo {
  id: 'compressor' | 'condensador' | 'valvula' | 'evaporador';
  name: string;
  code: string;
  pressure: string;
  temp: string;
  defect: string;
  service: string;
}

const COMPONENTS: Record<string, ComponentInfo> = {
  compressor: {
    id: 'compressor',
    name: '01 / Compressor Hermético',
    code: 'COMP-110V/220V',
    pressure: 'Alta Pressão / Descarga',
    temp: '+65 °C a +85 °C',
    defect: 'Motor não parte, estala o relé ou desarma o disjuntor.',
    service: 'Troca de relé de partida, protetor térmico ou motor compressor novo.'
  },
  condensador: {
    id: 'condensador',
    name: '02 / Condensador Aletado',
    code: 'COND-HEX-A',
    pressure: 'Alta Pressão / Liquefeito',
    temp: '+45 °C a +55 °C',
    defect: 'Sujeira espessa, superaquecimento e perda de rendimento.',
    service: 'Higienização pressurizada do condensador e troca do micromotor.'
  },
  valvula: {
    id: 'valvula',
    name: '03 / Válvula de Expansão / Capilar',
    code: 'EXP-CAP-R600a',
    pressure: 'Queda de Pressão Instantânea',
    temp: '+40 °C → −25 °C',
    defect: 'Tubo entupido por umidade ou óleo, gela pouco.',
    service: 'Desobstrução do sistema, troca do filtro secador e carga de gás.'
  },
  evaporador: {
    id: 'evaporador',
    name: '04 / Evaporador & Duto de Ar',
    code: 'EVAP-FROST-FREE',
    pressure: 'Baixa Pressão / Sucção',
    temp: '−18 °C a −24 °C',
    defect: 'Bloqueio total de gelo no duto; gela em cima e esquenta embaixo.',
    service: 'Reparo do degelo automático (sensor, resistência, bimetal e dreno).'
  }
};

export const RefrigerationCycleAnimation: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<ComponentInfo>(COMPONENTS.evaporador);
  const [currentTemp, setCurrentTemp] = useState<number>(-18);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const animFrameRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // IntersectionObserver to run animation only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // requestAnimationFrame loop for smooth cycle particles & thermometer
  useEffect(() => {
    if (!isVisible || isReducedMotion) return;

    let lastTime = performance.now();

    const updateAnimation = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      setProgress((prev) => (prev + dt * 0.0003) % 1);

      // Thermometer oscillation simulation (-12 to -22 °C)
      const cycleTemp = -18 + Math.sin(time * 0.0015) * 4;
      setCurrentTemp(Math.round(cycleTemp));

      animFrameRef.current = requestAnimationFrame(updateAnimation);
    };

    animFrameRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isVisible, isReducedMotion]);

  // Generate particle coordinates along loop
  const getParticlePos = (offset: number) => {
    const p = (progress + offset) % 1;
    // Circuit points: Compressor(60, 200) -> Condensador(60, 40) -> Válvula(340, 40) -> Evaporador(340, 200) -> Compressor
    if (p < 0.25) {
      // Up: Compressor to Condensador (Hot gas)
      const sub = p / 0.25;
      return { x: 60, y: 200 - sub * 160, color: '#D9682B', state: 'gás quente' };
    } else if (p < 0.5) {
      // Right: Condensador to Válvula (Condensing)
      const sub = (p - 0.25) / 0.25;
      return { x: 60 + sub * 280, y: 40, color: '#D9682B', state: 'líquido morno' };
    } else if (p < 0.75) {
      // Down: Válvula to Evaporador (Expansion - Cold)
      const sub = (p - 0.5) / 0.25;
      return { x: 340, y: 40 + sub * 160, color: '#BFE3F2', state: 'frio intenso' };
    } else {
      // Left: Evaporador to Compressor (Return gas)
      const sub = (p - 0.75) / 0.25;
      return { x: 340 - sub * 280, y: 200, color: '#0284c7', state: 'gás de sucção' };
    }
  };

  const particleOffsets = [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875];

  return (
    <section
      ref={sectionRef}
      className="py-12 lg:py-16 bg-[#F4F1EA] border-b-2 border-[#12324A] bg-paper-grid relative"
      id="como-o-frio-funciona"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#12324A] pb-4">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#D9682B] font-bold tracking-wider uppercase">
              02 / Esquema Frigorífico em Tempo Real
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12324A]">
              Como o frio funciona — e onde a gente entra
            </h2>
          </div>
          <p className="font-mono text-xs text-[#12324A]/80 max-w-md">
            Passe o mouse ou toque nos componentes para ver a análise técnica de defeitos e o conserto correspondente.
          </p>
        </div>

        {/* Diagram & Diagnostic Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive SVG Circuit Diagram (7 cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-[#12324A] p-4 sm:p-6 shadow-stamped relative">
            <div className="flex items-center justify-between border-b border-[#12324A]/20 pb-2 mb-4 font-mono text-xs text-[#12324A]">
              <span className="font-bold flex items-center gap-1.5">
                <RefreshCw className={`w-3.5 h-3.5 text-[#D9682B] ${isVisible && !isReducedMotion ? 'animate-spin' : ''}`} />
                CICLO DE REFRIGERAÇÃO POR COMPRESSÃO
              </span>
              <span className="text-[#D9682B] font-bold">R-600a / R-134a</span>
            </div>

            {/* SVG Diagram Canvas */}
            <div className="w-full overflow-x-auto">
              <svg
                viewBox="0 0 400 250"
                className="w-full h-auto min-w-[320px] max-w-[500px] mx-auto select-none"
                role="img"
                aria-label="Diagrama técnico interativo do ciclo de refrigeração mostrando compressor, condensador, válvula de expansão e evaporador"
              >
                {/* Circuit Pipe Track Line */}
                <rect
                  x="60"
                  y="40"
                  width="280"
                  height="160"
                  fill="none"
                  stroke="#12324A"
                  strokeWidth="4"
                  strokeDasharray="6 3"
                  className="opacity-40"
                />

                {/* Hot Side Line (Red/Copper) */}
                <path d="M 60 200 L 60 40 L 200 40" fill="none" stroke="#D9682B" strokeWidth="3" />
                {/* Cold Side Line (Blue) */}
                <path d="M 200 40 L 340 40 L 340 200 L 60 200" fill="none" stroke="#0284c7" strokeWidth="3" />

                {/* Flow Particles */}
                {!isReducedMotion &&
                  particleOffsets.map((offset, idx) => {
                    const pos = getParticlePos(offset);
                    return (
                      <circle
                        key={idx}
                        cx={pos.x}
                        cy={pos.y}
                        r="4.5"
                        fill={pos.color}
                        stroke="#12324A"
                        strokeWidth="1"
                      />
                    );
                  })}

                {/* 01 COMPRESSOR */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveComponent(COMPONENTS.compressor)}
                >
                  <circle
                    cx="60"
                    cy="200"
                    r="26"
                    fill="#12324A"
                    stroke="#12324A"
                    strokeWidth="2.5"
                  />
                  <text x="60" y="203" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="IBM Plex Mono" fill="#FFFFFF">
                    COMPRESSOR
                  </text>
                </g>

                {/* 02 CONDENSADOR */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveComponent(COMPONENTS.condensador)}
                >
                  <rect
                    x="150"
                    y="22"
                    width="100"
                    height="36"
                    fill="#F6D3BE"
                    stroke="#D9682B"
                    strokeWidth="2.5"
                    rx="3"
                  />
                  {/* Coils */}
                  <line x1="170" y1="22" x2="170" y2="58" stroke="#D9682B" strokeWidth="1.5" />
                  <line x1="190" y1="22" x2="190" y2="58" stroke="#D9682B" strokeWidth="1.5" />
                  <line x1="210" y1="22" x2="210" y2="58" stroke="#D9682B" strokeWidth="1.5" />
                  <line x1="230" y1="22" x2="230" y2="58" stroke="#D9682B" strokeWidth="1.5" />
                  <text x="200" y="44" textAnchor="middle" fontSize="9" fontWeight="extrabold" fontFamily="IBM Plex Mono" fill="#12324A">
                    CONDENSADOR
                  </text>
                </g>

                {/* 03 VÁLVULA DE EXPANSÃO */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveComponent(COMPONENTS.valvula)}
                >
                  <polygon
                    points="328,28 352,40 328,52 352,28 328,40 352,52"
                    fill={activeComponent.id === 'valvula' ? '#BFE3F2' : '#D9682B'}
                    stroke="#12324A"
                    strokeWidth="2"
                  />
                  <text x="340" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="IBM Plex Mono" fill="#12324A">
                    EXPANSÃO
                  </text>
                </g>

                {/* 04 EVAPORADOR */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveComponent(COMPONENTS.evaporador)}
                >
                  <rect
                    x="150"
                    y="182"
                    width="100"
                    height="36"
                    fill={activeComponent.id === 'evaporador' ? '#BFE3F2' : '#FFFFFF'}
                    stroke="#12324A"
                    strokeWidth="2.5"
                    rx="3"
                  />
                  {/* Cold Coils */}
                  <line x1="170" y1="182" x2="170" y2="218" stroke="#0284c7" strokeWidth="1.5" />
                  <line x1="190" y1="182" x2="190" y2="218" stroke="#0284c7" strokeWidth="1.5" />
                  <line x1="210" y1="182" x2="210" y2="218" stroke="#0284c7" strokeWidth="1.5" />
                  <line x1="230" y1="182" x2="230" y2="218" stroke="#0284c7" strokeWidth="1.5" />
                  <text x="200" y="204" textAnchor="middle" fontSize="9" fontWeight="extrabold" fontFamily="IBM Plex Mono" fill="#12324A">
                    EVAPORADOR
                  </text>
                </g>

                {/* Annotations */}
                <text x="60" y="238" textAnchor="middle" fontSize="8" fontFamily="IBM Plex Mono" fill="#12324A" fontWeight="600">
                  LADO QUENTE
                </text>
                <text x="340" y="238" textAnchor="middle" fontSize="8" fontFamily="IBM Plex Mono" fill="#0284c7" fontWeight="600">
                  LADO FRIO
                </text>
              </svg>
            </div>

            {/* Thermometer Side Badge */}
            <div className="mt-4 pt-3 border-t border-[#12324A]/20 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-[#12324A]">
                <Thermometer className="w-4 h-4 text-[#0284c7]" />
                <span>TEMP INTERNA MONITORADA:</span>
                <span className="font-bold text-sm text-[#0284c7] bg-[#BFE3F2]/50 px-2 py-0.5 border border-[#12324A]/30">
                  {currentTemp} °C
                </span>
              </div>
              <span className="text-[10px] text-[#12324A]/60 hidden sm:inline">
                [Clique nos componentes para diagnosticar]
              </span>
            </div>
          </div>

          {/* Diagnostic Inspection Box (5 cols) */}
          <div className="lg:col-span-5 bg-white border-2 border-[#12324A] p-6 shadow-stamped space-y-5">
            <div className="flex items-center justify-between border-b-2 border-[#12324A] pb-3">
              <span className="font-mono text-xs font-bold text-[#D9682B] uppercase">
                Ficha Técnica do Componente
              </span>
              <span className="font-mono text-xs px-2 py-0.5 bg-[#BFE3F2] text-[#12324A] border border-[#12324A] font-bold">
                {activeComponent.code}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-[#12324A] font-display">
                {activeComponent.name}
              </h3>

              <div className="grid grid-cols-2 gap-2 font-mono text-xs text-[#12324A]/80 bg-[#F4F1EA] p-3 border border-[#12324A]/20">
                <div>
                  <span className="block text-[10px] uppercase text-[#12324A]/60">Pressão / Estado:</span>
                  <span className="font-bold">{activeComponent.pressure}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#12324A]/60">Faixa Térmica:</span>
                  <span className="font-bold text-[#D9682B]">{activeComponent.temp}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="p-3 bg-amber-50 border border-amber-300 text-xs text-amber-950">
                  <strong className="block font-mono font-bold text-amber-900 mb-0.5 uppercase">Defeito Típico neste ponto:</strong>
                  <span>{activeComponent.defect}</span>
                </div>

                <div className="p-3 bg-[#BFE3F2]/40 border border-[#12324A]/30 text-xs text-[#12324A]">
                  <strong className="block font-mono font-bold text-[#12324A] mb-0.5 uppercase">O que a gente faz:</strong>
                  <span>{activeComponent.service}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#12324A]/20">
              <a
                href="https://wa.me/5547992245172?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20técnico."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#12324A] hover:bg-[#1a4768] text-white font-mono font-bold text-xs border border-[#12324A] shadow-stamped hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#12324A] transition-all"
              >
                <span>CHAMAR TÉCNICO SOBRE ESTE COMPONENTE</span>
                <ArrowRight className="w-4 h-4 text-[#BFE3F2]" />
              </a>
            </div>
          </div>

        </div>

        {/* B) 4 Mini Technical Animations Grid */}
        <div className="pt-8 border-t-2 border-[#12324A] space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#12324A] uppercase tracking-wider">
              Diagnósticos & Especialidades por Categoria de Equipamento
            </span>
            <span className="font-mono text-xs text-[#12324A]/60 hidden sm:inline">
              [Simulações Gráficas de Funcionamento]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Geladeira */}
            <Link
              to="/conserto-de-geladeira"
              className="bg-white border-2 border-[#12324A] p-4 shadow-stamped hover:bg-[#BFE3F2]/20 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-36 sm:h-40 bg-[#F4F1EA] border border-[#12324A]/30 p-2 flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-28 h-28 sm:w-32 sm:h-32" role="img" aria-label="Animação técnica de geladeira com porta abrindo e neve caindo">
                    {/* Refrigerator Body */}
                    <rect x="20" y="10" width="60" height="80" fill="none" stroke="#12324A" strokeWidth="2.5" rx="3" />
                    <line x1="20" y1="40" x2="80" y2="40" stroke="#12324A" strokeWidth="2" />
                    {/* Open Door Swinging */}
                    <path d="M 80 10 L 96 4 L 96 86 L 80 90" fill="none" stroke="#D9682B" strokeWidth="2" />
                    {/* Falling Snowflakes Animation */}
                    {!isReducedMotion && (
                      <g className="animate-pulse">
                        <text x="32" y="30" fontSize="12" fill="#0284c7">❄</text>
                        <text x="52" y="60" fontSize="14" fill="#0284c7">❄</text>
                        <text x="38" y="75" fontSize="10" fill="#0284c7">❄</text>
                        {/* Cold vapor waves */}
                        <path d="M 75 25 Q 85 30 78 38 Q 85 45 76 52" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="2 1" />
                      </g>
                    )}
                  </svg>
                  <span className="absolute top-1.5 right-1.5 font-mono text-[10px] bg-[#BFE3F2] text-[#12324A] px-1.5 py-0.5 border border-[#12324A] font-bold">
                    −18 °C
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#D9682B] font-bold block uppercase">Residencial</span>
                  <h4 className="font-bold text-base text-[#12324A] group-hover:text-[#D9682B]">
                    Conserto de Geladeira
                  </h4>
                  <p className="text-xs text-[#12324A]/70 mt-1 leading-relaxed">
                    Geladeira Frost Free que parou de gelar embaixo, apitando ou vazando água.
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#12324A]/20 flex items-center justify-between font-mono text-xs font-bold text-[#12324A]">
                <span>Ver detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D9682B]" />
              </div>
            </Link>

            {/* 2. Lava e Seca */}
            <Link
              to="/conserto-lava-e-seca-penha"
              className="bg-white border-2 border-[#12324A] p-4 shadow-stamped hover:bg-[#BFE3F2]/20 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-36 sm:h-40 bg-[#F4F1EA] border border-[#12324A]/30 p-2 flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-28 h-28 sm:w-32 sm:h-32" role="img" aria-label="Animação técnica de lavadora com tambor girando e bolhas subindo">
                    <rect x="15" y="10" width="70" height="80" fill="none" stroke="#12324A" strokeWidth="2.5" rx="4" />
                    <circle cx="50" cy="52" r="26" fill="none" stroke="#12324A" strokeWidth="2.5" />
                    {/* Rotating Inner Drum */}
                    <g className={!isReducedMotion ? "animate-spin origin-center" : ""} style={{ transformOrigin: '50px 52px' }}>
                      <line x1="50" y1="28" x2="50" y2="76" stroke="#D9682B" strokeWidth="2" />
                      <line x1="26" y1="52" x2="74" y2="52" stroke="#D9682B" strokeWidth="2" />
                      <circle cx="36" cy="38" r="2" fill="#D9682B" />
                      <circle cx="64" cy="66" r="2" fill="#D9682B" />
                    </g>
                    {/* Rising Bubbles */}
                    {!isReducedMotion && (
                      <g className="animate-pulse">
                        <circle cx="30" cy="78" r="3" fill="none" stroke="#0284c7" strokeWidth="1" />
                        <circle cx="70" cy="72" r="2.5" fill="none" stroke="#0284c7" strokeWidth="1" />
                        <circle cx="45" cy="84" r="3.5" fill="none" stroke="#0284c7" strokeWidth="1" />
                      </g>
                    )}
                  </svg>
                  <span className="absolute top-1.5 right-1.5 font-mono text-[10px] bg-[#12324A] text-white px-1.5 py-0.5 font-bold">
                    INVERTER
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#D9682B] font-bold block uppercase">Especialidade</span>
                  <h4 className="font-bold text-base text-[#12324A] group-hover:text-[#D9682B]">
                    Lava e Seca
                  </h4>
                  <p className="text-xs text-[#12324A]/70 mt-1 leading-relaxed">
                    Erro OE/5E, barulho no centrifugado, máquina travada com água ou sem secar.
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#12324A]/20 flex items-center justify-between font-mono text-xs font-bold text-[#12324A]">
                <span>Ver detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D9682B]" />
              </div>
            </Link>

            {/* 3. Cervejeira & Expositor */}
            <Link
              to="/refrigeracao-comercial"
              className="bg-white border-2 border-[#12324A] p-4 shadow-stamped hover:bg-[#BFE3F2]/20 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-36 sm:h-40 bg-[#F4F1EA] border border-[#12324A]/30 p-2 flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-28 h-28 sm:w-32 sm:h-32" role="img" aria-label="Animação técnica de cervejeira com gotas escorrendo nas garrafas">
                    <rect x="20" y="10" width="60" height="80" fill="none" stroke="#12324A" strokeWidth="2.5" />
                    {/* Bottle 1 */}
                    <rect x="30" y="24" width="16" height="50" fill="none" stroke="#12324A" strokeWidth="1.5" rx="2" />
                    <line x1="38" y1="24" x2="38" y2="18" stroke="#12324A" strokeWidth="2" />
                    {/* Bottle 2 */}
                    <rect x="54" y="24" width="16" height="50" fill="none" stroke="#12324A" strokeWidth="1.5" rx="2" />
                    <line x1="62" y1="24" x2="62" y2="18" stroke="#12324A" strokeWidth="2" />
                    {/* Condensation Drips Dripping Down */}
                    {!isReducedMotion && (
                      <g>
                        <circle cx="38" cy="35" r="1.5" fill="#0284c7" className="animate-ping" />
                        <circle cx="38" cy="55" r="2" fill="#0284c7" />
                        <circle cx="62" cy="42" r="1.5" fill="#0284c7" className="animate-ping" />
                        <circle cx="62" cy="62" r="2" fill="#0284c7" />
                      </g>
                    )}
                  </svg>
                  <span className="absolute top-1.5 right-1.5 font-mono text-[10px] bg-[#D9682B] text-white px-1.5 py-0.5 font-bold">
                    −4.0 °C
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#D9682B] font-bold block uppercase">Comercial & Bares</span>
                  <h4 className="font-bold text-base text-[#12324A] group-hover:text-[#D9682B]">
                    Cervejeira & Balcão
                  </h4>
                  <p className="text-xs text-[#12324A]/70 mt-1 leading-relaxed">
                    Bebida quente, balcão embaçado ou cervejeira que não baixa para -4°C.
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#12324A]/20 flex items-center justify-between font-mono text-xs font-bold text-[#12324A]">
                <span>Ver detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D9682B]" />
              </div>
            </Link>

            {/* 4. Câmara Fria */}
            <Link
              to="/conserto-de-camara-fria"
              className="bg-white border-2 border-[#12324A] p-4 shadow-stamped hover:bg-[#BFE3F2]/20 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-36 sm:h-40 bg-[#F4F1EA] border border-[#12324A]/30 p-2 flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-28 h-28 sm:w-32 sm:h-32" role="img" aria-label="Animação técnica de câmara fria com cortina de PVC balançando">
                    <rect x="15" y="10" width="70" height="80" fill="none" stroke="#12324A" strokeWidth="2.5" />
                    {/* Swinging PVC Strips */}
                    <g className={!isReducedMotion ? "animate-pulse" : ""}>
                      <line x1="30" y1="10" x2="28" y2="90" stroke="#0284c7" strokeWidth="3" opacity="0.7" />
                      <line x1="42" y1="10" x2="44" y2="90" stroke="#0284c7" strokeWidth="3" opacity="0.8" />
                      <line x1="54" y1="10" x2="52" y2="90" stroke="#0284c7" strokeWidth="3" opacity="0.7" />
                      <line x1="66" y1="10" x2="68" y2="90" stroke="#0284c7" strokeWidth="3" opacity="0.8" />
                    </g>
                    {/* Cold breeze arrows */}
                    {!isReducedMotion && (
                      <path d="M 20 50 Q 50 40 80 50" fill="none" stroke="#D9682B" strokeWidth="1.5" strokeDasharray="3 2" />
                    )}
                  </svg>
                  <span className="absolute top-1.5 right-1.5 font-mono text-[10px] bg-[#0284c7] text-white px-1.5 py-0.5 font-bold">
                    PMOC / B2B
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#D9682B] font-bold block uppercase">Indústria & Frigorífico</span>
                  <h4 className="font-bold text-base text-[#12324A] group-hover:text-[#D9682B]">
                    Câmara Fria
                  </h4>
                  <p className="text-xs text-[#12324A]/70 mt-1 leading-relaxed">
                    Atendimento técnico para congelados e resfriados em peixarias e restaurantes.
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#12324A]/20 flex items-center justify-between font-mono text-xs font-bold text-[#12324A]">
                <span>Ver detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D9682B]" />
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};
