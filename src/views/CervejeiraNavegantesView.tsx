import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Wrench, ShieldCheck, CheckCircle2, AlertTriangle, MapPin, Clock, HelpCircle, MessageSquare } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { trackContactClick } from '../utils/analytics';

interface CervejeiraNavegantesViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const CervejeiraNavegantesView: React.FC<CervejeiraNavegantesViewProps> = ({ onOpenBookingModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const prefillMsg = encodeURIComponent(
    "Olá, encontrei a Santa Catarina Refrigeração pesquisando por conserto de cervejeira em Navegantes. Minha cervejeira está apresentando o seguinte problema:"
  );
  const whatsappUrlWithMsg = `${COMPANY_INFO.whatsappUrl}&text=${prefillMsg}`;

  const problemsList = [
    {
      title: "Cervejeira não gela",
      desc: "O equipamento permanece em temperatura ambiente ou aquecido. As causas em potencial variam de vazamento de gás no circuito frigorífico, falha no compressor até defeitos no micro-motor ventilador.",
    },
    {
      title: "Cervejeira não liga",
      desc: "O painel fica apagado ou o sistema não dá partida. Pode ser um problema na placa eletrônica de potência, fusível térmico, cabo de alimentação ou módulo Inverter.",
    },
    {
      title: "Cervejeira não mantém a temperatura",
      desc: "A temperatura oscila frequentemente subindo e descendo. Frequentemente associado a falhas no sensor NTC de temperatura, gaxeta de vedação da porta ressecada ou desregulagem do controlador.",
    },
    {
      title: "Cervejeira gelando pouco",
      desc: "A bebida não atinge os graus negativos ideais. Pode decorrer de obstrução no condensador por poeira, evaporação deficiente, filtro secador entupido ou perda parcial da carga de gás.",
    },
    {
      title: "Cervejeira fazendo barulho",
      desc: "Ruídos fortes, vibrações ou estalos. Podem indicar folga nos coxins do compressor, hélice do ventilador raspando na carenagem ou desgaste no relé de partida.",
    },
    {
      title: "Cervejeira apresentando formação excessiva de gelo",
      desc: "Bloqueio de gelo na serpentina evaporadora. Ocorre quando há falha no ciclo de degelo automático, travamento de dreno ou entrada contínua de ar externo pela borracha da porta.",
    },
    {
      title: "Cervejeira com funcionamento intermitente",
      desc: "O compressor arma e desarma em curtos intervalos sem congelar. Pode sinalizar sobreaquecimento do motor, atuação do protetor térmico ou oscilação na rede elétrica.",
    },
    {
      title: "Problemas no sistema de refrigeração",
      desc: "Anomalias no ciclo frigorífico fechado (compressor, condensador, filtro secador, tubo capilar e evaporador) identificadas precisamente com manômetros e instrumentos digitais.",
    },
  ];

  const faqs = [
    {
      question: "Onde consertar cervejeira em Navegantes SC?",
      answer: "A Santa Catarina Refrigeração realiza atendimento de refrigeração em Navegantes e região. Para verificar disponibilidade para sua cervejeira, entre em contato informando marca, modelo e problema apresentado.",
    },
    {
      question: "Minha cervejeira não está gelando. O que pode ser?",
      answer: "Existem diferentes causas possíveis, como sujeira no condensador, falha no ventilador, vazamento de fluido refrigerante ou problema no sensor NTC. O diagnóstico técnico deve verificar o funcionamento do sistema antes de definir o reparo necessário.",
    },
    {
      question: "Vocês consertam cervejeira que não liga?",
      answer: "Sim, esse tipo de falha pode ser avaliado pela nossa assistência técnica, verificando placa eletrônica, relé de partida, cabo de força e fonte antes de propor a solução.",
    },
    {
      question: "Vocês atendem cervejeiras comerciais?",
      answer: "Sim, atendemos cervejeiras comerciais e expositores de bebidas para bares, restaurantes, lanchonetes, mercados e conveniências em Navegantes e região, além de modelos residenciais gourmet.",
    },
    {
      question: "Quanto custa o conserto de uma cervejeira em Navegantes?",
      answer: "O valor depende do defeito, modelo, peças necessárias e serviço a ser realizado. A avaliação técnica no local define o orçamento exato de forma transparente.",
    },
  ];

  // Custom schemas for this specialized service page
  const customSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${COMPANY_INFO.subdomainUrl}/conserto-cervejeira-navegantes-sc#service`,
      "name": "Conserto de Cervejeira em Navegantes SC",
      "serviceType": "Conserto e Manutenção de Cervejeiras",
      "provider": {
        "@type": "LocalBusiness",
        "@id": `${COMPANY_INFO.subdomainUrl}/#organization`,
        "name": COMPANY_INFO.name,
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Navegantes, Santa Catarina, Brasil",
        },
        {
          "@type": "City",
          "name": "Navegantes",
        },
      ],
      "description": "Assistência técnica e conserto especializado de cervejeiras residenciais e comerciais em Navegantes SC.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  ];

  const breadcrumbItems = [
    { name: "Início", item: "/" },
    { name: "Refrigeração Comercial", item: "/refrigeracao-comercial" },
    { name: "Conserto de Cervejeira em Navegantes SC", item: "/conserto-cervejeira-navegantes-sc" },
  ];

  return (
    <>
      <EnhancedSEO
        title="Conserto de Cervejeira em Navegantes SC | Santa Catarina Refrigeração"
        description="Conserto e manutenção de cervejeiras em Navegantes SC. Assistência técnica para cervejeira que não gela, não liga, apresenta ruídos ou problemas de refrigeração. Solicite atendimento."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/conserto-cervejeira-navegantes-sc`}
        schemas={customSchemas}
        breadcrumbs={breadcrumbItems}
        city="Navegantes"
        faqList={faqs}
      />

      <main className="bg-slate-900 text-slate-100 min-h-screen">
        
        {/* Header Breadcrumb & Hero Banner */}
        <section className="bg-slate-950 border-b border-slate-800 py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Início</Link>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <Link to="/refrigeracao-comercial" className="hover:text-cyan-400 transition-colors">Refrigeração Comercial</Link>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-cyan-300 font-bold">Conserto de Cervejeira em Navegantes SC</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-xs font-bold text-cyan-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Sede Comercial em Navegantes / SC</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Conserto de Cervejeira em Navegantes SC
                </h1>

                {/* AIO / GEO Direct Answer Block */}
                <div className="p-4 bg-slate-900/90 border-l-4 border-cyan-500 rounded-r-2xl border-t border-b border-r border-slate-800 text-slate-200 text-sm sm:text-base leading-relaxed">
                  Procura conserto de cervejeira em Navegantes SC? A <strong className="text-white">Santa Catarina Refrigeração</strong> oferece assistência em refrigeração para diagnóstico e manutenção de cervejeiras e outros equipamentos atendidos pela empresa. Entre em contato informando o equipamento e o problema apresentado para verificar o atendimento.
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={whatsappUrlWithMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackContactClick({ channel: 'whatsapp', location: 'cervejeira_navegantes_hero_whatsapp', target: whatsappUrlWithMsg })}
                    className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Solicitar Orçamento via WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    onClick={() => trackContactClick({ channel: 'phone', location: 'cervejeira_navegantes_hero_phone', target: `tel:${COMPANY_INFO.phoneClean}` })}
                    className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm rounded-xl transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Ligar: {COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Service Hero Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group max-w-md w-full">
                  <img
                    src="https://img.supremasite.com.br/technician_repairing_cervejeira.jpg"
                    alt="Conserto de cervejeira em Navegantes SC - Santa Catarina Refrigeração"
                    className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl text-xs text-slate-300">
                    <p className="font-bold text-white">Assistência Técnica Especializada em Refrigeração</p>
                    <p className="text-slate-400">Atendimento em Navegantes, Gravatá, Centro e Região</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Assistência Técnica para Cervejeiras em Navegantes */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-slate-900">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
              <Wrench className="w-6 h-6 text-cyan-400 shrink-0" />
              <span>Assistência Técnica para Cervejeiras em Navegantes</span>
            </h2>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                O funcionamento adequado de uma cervejeira exige estabilidade térmica constante, controle preciso de sensores e perfeita circulação de ar frio. Quando o equipamento apresenta oscilações de temperatura ou paralisação total, o serviço prestado envolve primeiramente o <strong className="text-white">diagnóstico técnico minucioso do sistema de refrigeração</strong> e a identificação precisa da causa raiz do problema antes de qualquer procedimento de manutenção.
              </p>
              <p>
                A <strong className="text-white">Santa Catarina Refrigeração</strong> realiza a análise técnica da alimentação elétrica, placas eletrônicas de comando, controladores digitais de temperatura, micro-motores ventiladores, circuito frigorífico selado, gaxeta de vedação da porta e sistema de degelo automático, assegurando um parecer transparente para proprietários residenciais e comerciais em Navegantes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Problemas em cervejeiras que podem exigir assistência técnica */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-slate-950">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Problemas em cervejeiras que podem exigir assistência técnica
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
                Abaixo estão listados os principais sintomas observados em cervejeiras. Cada defeito possui causas específicas que requerem aferição prévia com instrumentos adequados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {problemsList.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2.5 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <h3 className="font-bold text-white text-base">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-400 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-white">Importante:</strong> Não afirmamos que determinado componente precisa ser substituído sem a realização prévia de diagnóstico técnico no local. Nossa equipe analisa os componentes antes de propor a manutenção necessária.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Manutenção de cervejeiras residenciais e comerciais */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-slate-900">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Manutenção de cervejeiras residenciais e comerciais
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              As cervejeiras desempenham papel essencial tanto no segmento gastronômico quanto no conforto residencial no litoral catarinense. A Santa Catarina Refrigeração oferece suporte técnico especializado adaptado às particularidades de cada ambiente de uso:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold text-cyan-300">Estabelecimentos Comerciais</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Prestamos assistência técnica para cervejeiras em <strong className="text-white">bares, restaurantes, lanchonetes, comércios e estabelecimentos gastronômicos</strong>. A manutenção adequada evita a parada imprevista de equipamentos durante horários de pico e garante que as bebidas sejam servidas na temperatura correta exigida pelos clientes.
                </p>
              </div>

              <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold text-emerald-300">Uso Residencial & Gourmet</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Atendemos cervejeiras em <strong className="text-white">residências, varandas gourmet, áreas de lazer e casas de praia</strong>. Oferecemos diagnóstico e manutenção para equipamentos de todas as marcas e capacidades, garantindo o devido resfriamento de bebidas sem comprometer o conforto da sua casa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Conserto de cervejeira em Navegantes e região */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-slate-950">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Conserto de cervejeira em Navegantes e região
            </h2>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Sediada no município de <strong className="text-white">Navegantes, Santa Catarina</strong>, a Santa Catarina Refrigeração possui localização estratégica com rápido deslocamento para atendimento nos principais bairros da cidade, como o <strong className="text-white">Centro de Navegantes, Gravatá, Meia Praia, São Pedro, Machados e Volta Grande</strong>.
              </p>
              <p>
                Além da cidade de <strong className="text-white">Navegantes</strong> e de toda a <strong className="text-white">região de Navegantes</strong> no <strong className="text-white">litoral norte de Santa Catarina</strong>, prestamos atendimento móvel para cidades vizinhas efetivamente atendidas pela empresa, incluindo <strong className="text-white">Penha, Balneário Piçarras, Barra Velha, Itajaí e Balneário Camboriú</strong>.
              </p>
            </div>

            {/* Interlinking Block */}
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Outros Serviços de Refrigeração Atendidos na Região</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <Link to="/conserto-de-geladeira-em-navegantes" className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg transition-colors">
                  Conserto de Geladeira em Navegantes
                </Link>
                <Link to="/refrigeracao-comercial" className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg transition-colors">
                  Refrigeração Comercial & PMOC
                </Link>
                <Link to="/assistencia-tecnica-refrigeracao" className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg transition-colors">
                  Assistência Técnica em Refrigeração
                </Link>
                <Link to="/conserto-de-freezer" className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg transition-colors">
                  Conserto de Freezer
                </Link>
                <Link to="/conserto-de-camara-fria" className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg transition-colors">
                  Manutenção de Câmara Fria
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Por que procurar assistência técnica quando a cervejeira não está gelando? */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-slate-900">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Por que procurar assistência técnica quando a cervejeira não está gelando?
            </h2>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Falhas de refrigeração em cervejeiras podem possuir diversas origens distintas. Um sintoma comum como "não gelar" pode ser provocado por desde um simples acúmulo de sujeira no condensador que impede a troca de calor, até vazamentos de gás refrigerante, desregulagem de sensores NTC ou defeitos no sistema elétrico do compressor.
              </p>
              <p>
                A busca por <strong className="text-white">assistência técnica especializada em refrigeração</strong> é fundamental pois um diagnóstico adequado evita a troca desnecessária de componentes em bom estado e garante que o problema seja resolvido na sua verdadeira causa raiz, assegurando maior durabilidade e eficiência energética ao equipamento.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ SEMÂNTICO */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-slate-950">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
                <HelpCircle className="w-6 h-6 text-cyan-400" />
                <span>Perguntas Frequentes sobre Conserto de Cervejeiras em Navegantes</span>
              </h2>
              <p className="text-slate-400 text-sm">
                Tire suas dúvidas sobre o atendimento técnico para cervejeiras e equipamentos de refrigeração.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-slate-800 rounded-2xl bg-slate-900 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-cyan-400 font-extrabold text-xl shrink-0">
                      {openFaqIndex === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Solicite atendimento para sua cervejeira */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Solicite atendimento para sua cervejeira
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A Santa Catarina Refrigeração atende em domicílio e estabelecimentos comerciais em Navegantes e região. Entre em contato via WhatsApp ou telefone para verificar o agendamento de diagnóstico para sua cervejeira.
            </p>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-cyan-300 max-w-lg mx-auto">
              <p className="font-bold">Mensagem rápida no WhatsApp:</p>
              <p className="text-slate-300 italic pt-1">
                "Olá, encontrei a Santa Catarina Refrigeração pesquisando por conserto de cervejeira em Navegantes. Minha cervejeira está apresentando o seguinte problema:"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={whatsappUrlWithMsg}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick({ channel: 'whatsapp', location: 'cervejeira_navegantes_footer_whatsapp', target: whatsappUrlWithMsg })}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enviar Mensagem no WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                onClick={() => trackContactClick({ channel: 'phone', location: 'cervejeira_navegantes_footer_phone', target: `tel:${COMPANY_INFO.phoneClean}` })}
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-base rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Ligar para {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
