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
    description: "A Santa Catarina Refrigeração oferece soluções de manutenção para sistemas frigoríficos comerciais. Atendemos estabelecimentos que dependem de temperatura controlada, como peixarias, cozinhas industriais, restaurantes e hotéis em Balneário Camboriú, Penha, Piçarras, Navegantes e Itajaí. Nossos técnicos realizam diagnósticos rápidos de compressores, unidades condensadoras remotas, válvulas de expansão e controladores digitais.",
    benefits: [
      "Atendimento prioritário para estabelecimentos gastronômicos e comerciais",
      "Emissão de laudos técnicos e ordens de serviço formais",
      "Garantia formal de 90 dias com faturamento facilitado para empresas",
      "Equipe técnica qualificada para sistemas comerciais de refrigeração"
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
        question: "Qual o prazo de atendimento para chamados emergenciais comerciais?",
        answer: "Para clientes comerciais com produtos perecíveis, nossa equipe prioriza o atendimento com rotas diárias estruturadas em Penha, Piçarras, Navegantes, Itajaí e Balneário Camboriú."
      },
      {
        question: "Vocês atendem faturado para empresas com CNPJ?",
        answer: "Sim! Trabalhamos com faturamento para empresas cadastradas, além de cartão de crédito em até 12x e PIX."
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
  },
  {
    slug: "manutencao-container-reefer",
    title: "Manutenção de Contêiner Reefer e Unidades Frigoríficas",
    metaTitle: "Manutenção de Contêiner Reefer em SC | Santa Catarina Refrigeração",
    metaDescription: "Assistência técnica especializada em contêineres reefer, unidades de refrigeração para armazenagem estática e logística da cadeia do frio em SC.",
    h1: "Manutenção de Contêiner Reefer em Santa Catarina",
    category: "Logística & Frio B2B",
    badge: "Armazenamento Estático",
    summary: "Suporte especializado para contêineres refrigerados utilizados como câmara fria estática ou entreposto em Santa Catarina.",
    description: "Atendimento técnico para verificação de circuitos elétricos, recarga de gás, reparos em compressores, ventiladores e controladores de contêineres reefer estáticos em pátios industriais, cooperativas e distribuidores.",
    benefits: [
      "Diagnóstico preciso de códigos de erro de controladores microprocessados",
      "Teste de estanqueidade e recarga com gás refrigerante adequado",
      "Peças de reposição para compressores e ventiladores de condensador",
      "Garantia formal de 90 dias em peças e mão de obra executada"
    ],
    equipmentServiced: [
      "Contêineres reefer de 20 e 40 pés operando como câmara estática",
      "Unidades de refrigeração Carrier, Thermo King, Daikin e Star Cool",
      "Quadros elétricos de comando e transformadores de alimentação",
      "Sistemas de degelo e ventilação forçada"
    ],
    preventivePlanIncluded: [
      "Inspeção visual e teste elétrico de isolamento do compressor",
      "Limpeza e desobstrução das serpentinas de condensação",
      "Verificação do balanceamento de pressões do ciclo frigorífico",
      "Checagem da calibração de sensores de temperatura interna"
    ],
    faqs: [
      {
        question: "Vocês atendem contêiner reefer em pátios e empresas?",
        answer: "Sim, atendemos unidades reefer instaladas de forma estática para armazenagem em empresas, peixarias, galpões e cooperativas no Litoral de Santa Catarina."
      }
    ]
  }
];

export function getCommercialServiceBySlug(slug: string): CommercialService | undefined {
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  return COMMERCIAL_SERVICES.find(s => s.slug === clean);
}
