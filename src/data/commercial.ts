export interface CommercialService {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category: string;
  badge: string;
  summary: string;
  description: string;
  benefits: string[];
  equipmentServiced: string[];
  preventivePlanIncluded: string[];
  faqs: { question: string; answer: string }[];
}

export const COMMERCIAL_SERVICES: CommercialService[] = [
  {
    slug: "refrigeracao-comercial",
    title: "Refrigeração Comercial: Manutenção e Instalação Especializada",
    metaTitle: "Refrigeração Comercial em SC: Manutenção e Assistência Técnica 24h",
    metaDescription: "Assistência técnica especializada em refrigeração comercial para supermercados, restaurantes, padarias, peixarias e hotéis no Litoral de SC. Plantão 24h.",
    h1: "Refrigeração Comercial em Santa Catarina: Assistência Técnica Especializada",
    category: "Comercial / B2B",
    badge: "Plantão Emergencial 24h",
    summary: "Atendimento prioritário para o setor de alimentação fora do lar, redes hoteleiras e varejo alimentar em todo o Litoral Norte e Vale do Itajaí.",
    description: "A Santa Catarina Refrigeração oferece soluções completas de engenharia e manutenção para sistemas frigoríficos comerciais. Atendemos estabelecimentos que não podem parar, como peixarias no Porto de Itajaí e Navegantes, cozinhas industriais, restaurantes e hotéis em Balneário Camboriú, Penha e Itapema. Nossos técnicos realizam diagnósticos rápidos de compressores semi-herméticos, unidades condensadoras remotas, válvulas de expansão e controladores digitais com peças a pronta-entrega.",
    benefits: [
      "Plantão de atendimento emergencial 24h com prioridade para estabelecimentos gastronômicos",
      "Emissão de laudos técnicos para vigilância sanitária e órgãos reguladores",
      "Garantia formal de 90 dias com faturamento facilitado para empresas",
      "Técnicos certificados pelo Senai e fabricantes líderes do mercado"
    ],
    equipmentServiced: [
      "Câmaras frigoríficas de congelados e resfriados",
      "Balcões refrigerados e expositores de auto-serviço para açougues e padarias",
      "Cervejeiras comerciais e chopeiras industriais",
      "Máquinas de fabricação de gelo em cubo e escama",
      "Ilhas de congelados e geladeiras comerciais de inox"
    ],
    preventivePlanIncluded: [
      "Revisão mensal de pressões de sucção e descarga com manifold digital",
      "Limpeza e higienização química semestral de condensadores e evaporadores",
      "Aferição e reaperto de conexões elétricas e contatores de potência",
      "Calibração de controladores digitais Full Gauge e Carel"
    ],
    faqs: [
      {
        question: "Qual o tempo médio de resposta para chamados emergenciais comerciais?",
        answer: "Para clientes comerciais com produtos perecíveis em risco, nossa equipe chega ao local em 30 a 60 minutos nas cidades do Anel 1 (Penha, Piçarras, Navegantes, Itajaí e BC)."
      },
      {
        question: "Vocês atendem faturado para empresas com CNPJ?",
        answer: "Sim! Trabalhamos com faturamento em boleto bancário para empresas e condomínios cadastrados, além de cartão de crédito em até 12x e PIX."
      }
    ]
  },
  {
    slug: "manutencao-preventiva-refrigeracao",
    title: "Manutenção Preventiva em Refrigeração (Plano PMOC)",
    metaTitle: "Manutenção Preventiva em Refrigeração Comercial e PMOC em SC",
    metaDescription: "Evite paradas não programadas e multas sanitárias com contratos de manutenção preventiva e PMOC em sistemas de refrigeração comercial.",
    h1: "Manutenção Preventiva em Refrigeração e Plano PMOC",
    category: "Contratos & PMOC",
    badge: "Redução de até 40% em Custos",
    summary: "Contratos sob medida para empresas com visitas mensais programadas, relatórios técnicos e prioridade total em chamados emergenciais.",
    description: "Equipamentos de refrigeração comercial que operam sem manutenção preventiva consomem até 35% mais energia elétrica e sofrem quebras súbitas de compressores devido à sujeira acumulada nas serpentinas condensadoras. Nossos planos preventivos garantem a máxima eficiência térmica, prolongam a vida útil das máquinas e atendem a todas as exigências sanitárias da Anvisa.",
    benefits: [
      "Redução comprovada no consumo de eletricidade da fatura comercial",
      "Zero perda de estoques valiosos de carnes, pescados, queijos e bebidas",
      "Descontos exclusivos em peças e mão de obra de reparo",
      "Relatórios de conformidade técnica assinados por profissionais qualificados"
    ],
    equipmentServiced: [
      "Supermercados, atacarejos e mercearias",
      "Restaurantes, churrascarias, pizzarias e hamburguerias",
      "Hotéis, pousadas e resorts litorâneos",
      "Indústrias de pescados e frutos do mar"
    ],
    preventivePlanIncluded: [
      "Checklist minucioso com mais de 30 itens de verificação técnica",
      "Teste de estanqueidade contra vazamentos de gás refrigerante",
      "Higienização com bactericida hospitalar em bandejas e drenos",
      "Monitoramento térmico contínuo com termografia"
    ],
    faqs: [
      {
        question: "Como funciona a contratação do plano de manutenção preventiva?",
        answer: "Realizamos uma visita técnica inicial sem custo para mapear seu parque de equipamentos e apresentamos uma proposta sob medida com visitas programadas."
      }
    ]
  },
  {
    slug: "conserto-de-cervejeira-e-expositor",
    title: "Conserto de Cervejeira e Expositor de Bebidas",
    metaTitle: "Conserto de Cervejeira e Expositor Comercial em SC | SC Refrigeração",
    metaDescription: "Cervejeira não gela a -4°C ou expositor com vidro embaçado? Atendimento rápido em bares, quiosques, empórios e conveniências com garantia 90 dias.",
    h1: "Conserto de Cervejeira e Balcão Expositor de Bebidas",
    category: "Bebidas & Bares",
    badge: "Temperatura Perfeita -4°C",
    summary: "Serviço expresso para cervejeiras das marcas Metalfrio, Gelopar, Fricon, Imbera e Venax em bares, conveniências e quiosques da orla.",
    description: "A cerveja trincando a -4°C é o cartão de visitas de qualquer bar ou restaurante de sucesso. Quando o expositor ou cervejeira começa a perder rendimento, acumula gelo na serpentina ou aquece as garrafas, nossa assistência técnica resolve o defeito em domicílio no mesmo dia.",
    benefits: [
      "Peças de reposição originais a pronta entrega nas viaturas técnicas",
      "Calibração especializada para modo de conservação (-4°C a -6°C) sem congelar garrafas",
      "Troca de ventiladores eletrônicos de alta rotação e baixo ruído",
      "Garantia de 90 dias por escrito em todas as ordens de serviço"
    ],
    equipmentServiced: [
      "Cervejeiras comerciais verticais com porta de vidro ou cega",
      "Expositores verticais de refrigerantes, energéticos e sucos",
      "Chopeiras residenciais e comerciais a gelo e elétricas",
      "Vitrines refrigeradas para doces e sobremesas"
    ],
    preventivePlanIncluded: [
      "Regulagem de controladores Coel, Carel e Full Gauge",
      "Troca de gaxetas magnéticas de porta com isolamento reforçado",
      "Desobstrução do sistema capilar e filtro secador",
      "Carga de fluido refrigerante ecológico R290 / R134a"
    ],
    faqs: [
      {
        question: "Por que a cervejeira não consegue atingir -4°C?",
        answer: "As causas mais comuns são sujeira espessa na colmeia do condensador traseiro, micro-vazamento de gás ou ventilador do evaporador com rotação lenta."
      }
    ]
  }
];

export function getCommercialServiceBySlug(slug: string): CommercialService | undefined {
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  return COMMERCIAL_SERVICES.find(s => s.slug === clean);
}
