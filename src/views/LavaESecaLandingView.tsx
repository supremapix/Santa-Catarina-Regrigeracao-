import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { CheckCircle2, ShieldCheck, Calendar, MessageCircle, Phone, Cpu, Wrench, HelpCircle, ArrowRight } from 'lucide-react';

interface LavaESecaLandingViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const LavaESecaLandingView: React.FC<LavaESecaLandingViewProps> = ({ onOpenBookingModal }) => {
  const lavaFaqs = [
    {
      q: "Quanto custa uma visita técnica de máquina de lavar / lava e seca?",
      a: "A visita técnica para avaliação e diagnóstico no seu imóvel é 100% gratuita quando o orçamento é aprovado! Nossos técnicos analisam a máquina e apresentam o valor total com transparência."
    },
    {
      q: "Qual a vida útil de uma lava e seca LG?",
      a: "Com manutenções preventivas (limpeza de filtro e higienização do duto), uma lava e seca LG Direct Drive tem vida útil estimada entre 10 e 15 anos de excelente desempenho."
    },
    {
      q: "Qual a vida útil de uma lava e seca Samsung?",
      a: "Modelos Samsung EcoBubble / Digital Inverter duram facilmente de 8 a 12 anos. A substituição de bombas de drenagem ou trava da porta estende a durabilidade por um valor muito menor do que comprar um aparelho novo."
    },
    {
      q: "Quando vale a pena consertar a máquina de lavar / lava e seca?",
      a: "Vale a pena na imensa maioria das vezes, pois peças de reposição como eletrobombas, sensores de nível, placas eletrônicas e trava da porta custam uma fração do preço de uma máquina nova (que custa entre R$ 3.500 e R$ 6.000)."
    },
    {
      q: "Qual é o tempo médio de vida útil de uma máquina de lavar tradicional?",
      a: "Lavadoras top load (abertura superior) duram em média de 7 a 12 anos. A troca da placa ou do retentor/mecanismo renova o equipamento para muitos anos de uso."
    },
    {
      q: "Lava e seca gasta muita água e luz?",
      a: "Não. As lava e seca com motores Inverter gastam até 40% menos água do que lavadoras convencionais porque utilizam o nível de água otimizado para o peso da carga. Na secagem, o consumo de energia é equivalente ao de um ferro elétrico."
    },
    {
      q: "Quanto sabão devo usar na lava e seca?",
      a: "Recomenda-se o uso estrito de sabão líquido para lava e seca (de baixa espumação) na dosagem máxima indicada na tampa do fabricante (cerca de 30ml a 50ml). Excesso de sabão em pó cria resíduos no tambor e causa erro de transbordamento."
    },
    {
      q: "Vocês atendem em domicílio em Penha, Piçarras, Itajaí e região?",
      a: "Sim! Atendemos residências, edifícios e lavanderias em Penha, Balneário Piçarras, Barra Velha, Navegantes, Itajaí, Balneário Camboriú, Itapema e cidades num raio de até 200 km."
    }
  ];

  const breadcrumbs = [
    { name: "Início", item: COMPANY_INFO.subdomainUrl },
    { name: "Conserto Lava e Seca Penha", item: `${COMPANY_INFO.subdomainUrl}/conserto-lava-e-seca-penha` }
  ];

  return (
    <>
      <EnhancedSEO
        title="Conserto de Lava e Seca em Penha | Assistência LG, Samsung e mais"
        description="Conserto e assistência técnica especializada de Lava e Seca LG, Samsung, Electrolux e Brastemp em Penha e região. Erros OE, UE, 5E, 4E, Inverter e garantia de 90 dias."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/conserto-lava-e-seca-penha`}
        breadcrumbs={breadcrumbs}
        faqList={lavaFaqs.map(f => ({ question: f.q, answer: f.a }))}
      />

      <main className="bg-slate-950 text-white min-h-screen py-10 space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header Banner with High-Visibility Video Background */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Video Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 sm:opacity-85 scale-105"
              >
                <source src="https://img.supremasite.com.br/refrigeracao.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50" />
            </div>

            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold uppercase">
                Atendimento Domiciliar Especializado
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Conserto e Assistência Técnica de Lava e Seca em Penha e Região
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Diagnóstico técnico e conserto de placas eletrônicas, motores Inverter Direct Drive, sensores de nível, bombas de drenagem e rolamentos no próprio imóvel em Penha, Balneário Piçarras, Itajaí, Balneário Camboriú e região.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}%20para%20Conserto%20de%20Lava%20e%20Seca`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chamar no WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenBookingModal('Lava e Seca')}
                  className="px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>Agendar Visita Técnica</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section 1: Diagnóstico e Tecnologia */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
              <Cpu className="w-7 h-7 text-cyan-400" />
              <span>Diagnóstico Avançado em Placas e Motores Inverter</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              As máquinas Lava e Seca modernas possuem alta tecnologia embarcada, incluindo motores sem escova Inverter Direct Drive, inversores de frequência e painéis microprocessados touch. Nossos técnicos certificados dispõem de osciloscópios portáteis e testadores digitais de bancada móvel, permitindo identificar com exatidão defeitos em triacs de placa, sensores hall de rotação e bobinas de estator sem necessidade de retirar a máquina da sua casa.
            </p>
          </div>

          {/* Section 2: Marcas Atendidas */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white text-center">
              Marcas Especializadas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/assistencia-lava-e-seca-lg-penha" className="bg-slate-900 border border-slate-800 hover:border-cyan-500 rounded-2xl p-6 space-y-3 transition-all block">
                <span className="text-xs font-bold text-cyan-400 uppercase">Tecnologia Direct Drive</span>
                <h3 className="text-xl font-bold text-white">LG Lava e Seca</h3>
                <p className="text-slate-400 text-xs">Assistência para LG Vivace, Smart ThinQ e modelos 8.5kg a 13kg. Resolução de Erros OE, UE, dE, IE.</p>
                <span className="text-xs text-cyan-400 font-bold flex items-center gap-1">Ver página LG <ArrowRight className="w-3 h-3" /></span>
              </Link>

              <Link to="/assistencia-lava-e-seca-samsung-penha" className="bg-slate-900 border border-slate-800 hover:border-cyan-500 rounded-2xl p-6 space-y-3 transition-all block">
                <span className="text-xs font-bold text-cyan-400 uppercase">Tecnologia EcoBubble</span>
                <h3 className="text-xl font-bold text-white">Samsung Lava e Seca</h3>
                <p className="text-slate-400 text-xs">Conserto de Samsung Digital Inverter, AddWash e WD11. Resolução de Erros 5E, 4E, UE, DC.</p>
                <span className="text-xs text-cyan-400 font-bold flex items-center gap-1">Ver página Samsung <ArrowRight className="w-3 h-3" /></span>
              </Link>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
                <span className="text-xs font-bold text-cyan-400 uppercase">Linha Front Load</span>
                <h3 className="text-xl font-bold text-white">Electrolux Lava e Seca</h3>
                <p className="text-slate-400 text-xs">Reparo de modelos LSI11, LSF11, PerfectCare. Troca de bombas, travas e placas eletrônicas.</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
                <span className="text-xs font-bold text-cyan-400 uppercase">Linha Brastemp / Midea</span>
                <h3 className="text-xl font-bold text-white">Brastemp & Midea</h3>
                <p className="text-slate-400 text-xs">Atendimento para Brastemp Ative, Midea HealthGuard e Panasonic Inverter em domicílio.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Principais Defeitos */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Wrench className="w-6 h-6 text-cyan-400" />
              <span>Principais Defeitos Reparados no Local</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Não liga ou apaga o painel no meio do ciclo",
                "Não drenagem da água (Erros OE / 5E / 5C)",
                "Não enche de água (Erros IE / 4E / 4C)",
                "Ruído forte de turbina na centrifugação (rolamentos)",
                "Porta travada sem abrir (Erros dE / dC)",
                "Roupas saindo úmidas ou sem aquecimento de secagem",
                "Vazamento de água pela borracha de vedação (fole)",
                "Vibração excessiva ou batidas na estrutura"
              ].map((defect, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{defect}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: FAQ Seção de 8 Perguntas */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-cyan-400" />
              <span>Perguntas Frequentes Sobre Conserto de Lava e Seca</span>
            </h2>

            <div className="space-y-4">
              {lavaFaqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h3 className="font-bold text-sm text-cyan-300">{faq.q}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Call */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-950 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">Sua Lava e Seca Parou? Atendemos Hoje Mesmo!</h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Chame nossa equipe no WhatsApp para orçamento sem taxa na aprovação em Penha, Piçarras, Itajaí e região.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`${COMPANY_INFO.whatsappUrl}%20para%20Conserto%20de%20Lava%20e%20Seca`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg"
              >
                Chamar no WhatsApp
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-6 py-4 rounded-2xl bg-slate-800 text-slate-200 font-bold text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                Ligar {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
