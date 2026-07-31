import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/company';
import { MessageCircle, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BlogGuideViewProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const BlogGuideView: React.FC<BlogGuideViewProps> = ({ onOpenBookingModal }) => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Lava e Seca em Penha: Guia Completo — Uso Residencial, Lavanderias e Onde Consertar",
    "description": "Guia informativo completo sobre o impacto da umidade litorânea na secagem de roupas, comparativo lavanderia vs lava e seca própria, cuidados com sabão e quando acionar o conserto em Penha e região.",
    "author": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.subdomainUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": COMPANY_INFO.assets.logo
      }
    },
    "datePublished": "2026-07-30",
    "dateModified": "2026-07-30",
    "mainEntityOfPage": `${COMPANY_INFO.subdomainUrl}/blog/lava-e-seca-penha-guia-completo`
  };

  const breadcrumbs = [
    { name: "Início", item: COMPANY_INFO.subdomainUrl },
    { name: "Blog", item: `${COMPANY_INFO.subdomainUrl}/blog/lava-e-seca-penha-guia-completo` },
    { name: "Guia Completo Lava e Seca", item: `${COMPANY_INFO.subdomainUrl}/blog/lava-e-seca-penha-guia-completo` }
  ];

  return (
    <>
      <EnhancedSEO
        title="Lava e Seca em Penha: Guia Completo de Uso, Economia e Conserto"
        description="Guia completo sobre Lava e Seca em Penha e região. Saiba como a umidade litorânea afeta suas roupas, comparativo com lavanderias self-service, dicas de sabão e onde consertar."
        canonicalUrl={`${COMPANY_INFO.subdomainUrl}/blog/lava-e-seca-penha-guia-completo`}
        schemas={[blogPostingSchema]}
        breadcrumbs={breadcrumbs}
      />

      <main className="bg-slate-950 text-white min-h-screen py-10">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="space-y-4 border-b border-slate-800 pb-8">
            <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold uppercase">
              Guia Local de Lavanderia & Manutenção
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Lava e Seca em Penha: Guia Completo — Uso Residencial, Lavanderias e Onde Consertar
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span>Publicado por <strong>Santa Catarina Refrigeração</strong></span>
              <span>•</span>
              <span>Atualizado em Julho de 2026</span>
              <span>•</span>
              <span>Leitura de 8 min</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                1. O Impacto da Umidade Litorânea na Secagem de Roupas
              </h2>
              <p>
                Quem mora ou possui imóvel de temporada em cidades litorâneas como Penha, Balneário Piçarras, Barra Velha, Navegantes, Itajaí, Balneário Camboriú e Itapema conhece de perto os desafios da umidade relativa do ar. Em períodos de chuvas frequentes ou brisa marítima constante, a umidade do ar na costa catarinense supera frequentemente os 85%.
              </p>
              <p>
                Nesse cenário, estender roupas no varal tradicional pode levar até 2 ou 3 dias para que as peças fiquem secas. Essa demora prolongada não é apenas um incômodo logístico: o ambiente úmido e escuro cria a condição perfeita para a proliferação acelerada de mofo, fungos e bactérias causadoras do incômodo "cheiro de guardado" ou azedo no tecido. Ter uma máquina Lava e Seca em casa deixou de ser um artigo de luxo e tornou-se uma necessidade de higiene e praticidade.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                2. Comparativo Neutro: Lavanderias Self-Service vs. Ter Equipamento em Casa
              </h2>
              <p>
                Muitos moradores e veranistas se perguntam se vale mais a pena utilizar as populares lavanderias expressas de autoatendimento (self-service) ou investir no próprio equipamento residencial.
              </p>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-cyan-400 text-base">Custo-Benefício no Litoral Catarinense:</h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Lavanderia Self-Service:</strong> Excelente para urgências pontuais de turistas. No entanto, o custo por ciclo de lavagem + secagem varia entre R$ 30 e R$ 45. Para uma família de 3 a 4 pessoas que faz 4 lavagens por semana, o gasto mensal em lavanderias comerciais ultrapassa facilmente R$ 550 por mês, além do tempo de deslocamento e espera no local.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Ter Sua Própria Lava e Seca em Casa:</strong> Oferece conforto total, flexibilidade de horários (pode lavar de madrugada ou enquanto trabalha) e o custo por ciclo de energia e água com motores Inverter fica estimado em apenas R$ 2,50 a R$ 4,00 por ciclo completo. O investimento inicial no equipamento se paga em cerca de 12 meses de uso familiar.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                3. Cuidados Práticos e Manutenção Preventiva para Durar 15 Anos
              </h2>
              <p>
                Para evitar travamentos e códigos de erro no painel da sua lava e seca LG, Samsung, Electrolux ou Brastemp, siga estes três hábitos fundamentais de uso:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-cyan-400 font-bold text-xs uppercase">Dica 1: Sabão Líquido</span>
                  <p className="text-xs text-slate-300">
                    Sempre prefira sabão líquido para máquina de lavar de abertura frontal (HE / Low Suds). O sabão em pó empedra com a umidade da praia e entope os dutos da gaveta dispenser.
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-cyan-400 font-bold text-xs uppercase">Dica 2: Filtro de Drenagem</span>
                  <p className="text-xs text-slate-300">
                    Abra a pequena portinhola na parte inferior frontal a cada 30 dias e retire a água com sujeira do filtro de drenagem. Isso evita o temido Erro OE na LG e Erro 5E na Samsung.
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-cyan-400 font-bold text-xs uppercase">Dica 3: Higienização Tambor</span>
                  <p className="text-xs text-slate-300">
                    Execute o ciclo "Limpeza de Tambor" uma vez por mês com 500ml de vinagre branco de álcool ou água sanitária para eliminar crostas de amaciante acumuladas na tina.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                4. Quando Chamar a Assistência Técnica Especializada em Penha e Região?
              </h2>
              <p>
                Apesar de todos os cuidados, componentes elétricos e mecânicos sofrem desgaste natural com o passar dos anos. Fique atento aos seguintes sinais de alerta:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Barulho de turbina na centrifugação:</strong> Indica desgaste nos rolamentos e entrada de água no retentor. Deve ser consertado rapidamente para não quebrar a cruzeta do tambor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>A máquina para com água dentro:</strong> Queima do enrolamento da bomba de esgotamento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Códigos de erro piscando no painel (OE, UE, 5E, 4E, dE, DC):</strong> Necessário teste técnico dos sensores e da placa mãe.</span>
                </li>
              </ul>
            </section>

          </div>

          {/* Author CTA Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Sua Lava e Seca Apresentou Defeito?</h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                A Santa Catarina Refrigeração é referência em conserto em domicílio em Penha e todo o litoral catarinense.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`${COMPANY_INFO.whatsappUrl}%20ap%C3%B3s%20ler%20o%20Blog`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenBookingModal('Lava e Seca')}
                className="px-5 py-3.5 rounded-xl bg-slate-800 text-cyan-300 font-bold text-xs border border-cyan-500/30"
              >
                Agendar
              </button>
            </div>
          </div>

        </article>
      </main>
    </>
  );
};
