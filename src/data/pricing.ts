export interface PriceItem {
  service: string;
  category: string;
  startingPrice: string;
  averageTime: string;
  warranty: string;
  description: string;
  whatsIncluded: string[];
}

export const PRICING_DATA: PriceItem[] = [
  {
    service: "Visita Técnica e Diagnóstico Especializado",
    category: "Diagnóstico",
    startingPrice: "R$ 60 - R$ 90",
    averageTime: "30 a 50 min",
    warranty: "Abatida no conserto",
    description: "Avaliação técnica completa em domicílio com multímetro digital, aferição de sensores, termostato, compressor e vazamentos de fluido refrigerante. Se o conserto for aprovado no local, o valor da visita é 100% abonado/abatido.",
    whatsIncluded: [
      "Deslocamento até a residência ou comércio",
      "Diagnóstico minucioso com equipamentos de precisão",
      "Orçamento formal sem compromisso",
      "Laudo explicativo sobre a causa do defeito"
    ]
  },
  {
    service: "Troca de Kit de Degelo Frost Free (Sensor NTC, Resistência e Fusível)",
    category: "Refrigeração Residencial",
    startingPrice: "R$ 180 - R$ 380",
    averageTime: "45 a 90 min",
    warranty: "90 dias por escrito",
    description: "Solução definitiva para geladeiras que gelam o freezer mas deixam a parte inferior quente. Substituição dos componentes térmicos do evaporador por peças originais de fábrica.",
    whatsIncluded: [
      "Substituição do sensor de temperatura e degelo",
      "Troca do termo-fusível de proteção e/ou resistência",
      "Desobstrução e higienização química do dreno",
      "Teste de fluxo de ar e calibração do damper"
    ]
  },
  {
    service: "Troca de Termostato e Termostato Eletrônico",
    category: "Refrigeração Residencial",
    startingPrice: "R$ 160 - R$ 290",
    averageTime: "40 a 60 min",
    warranty: "90 dias por escrito",
    description: "Para refrigeradores convencionais ou duplex que não desligam o motor, gelam excessivamente os alimentos ou não ligam.",
    whatsIncluded: [
      "Instalação de termostato novo original com bulbo calibrado",
      "Aferição do ciclo de corte e partida do compressor",
      "Verificação de vedação das gaxetas da porta"
    ]
  },
  {
    service: "Carga de Gás Refrigerante (R134a / R600a ecológico)",
    category: "Refrigeração",
    startingPrice: "R$ 220 - R$ 450",
    averageTime: "60 a 90 min",
    warranty: "90 dias por escrito",
    description: "Recarga completa com balança de precisão digital após teste de estanqueidade e vácuo profundo na tubulação com bomba de duplo estágio.",
    whatsIncluded: [
      "Teste de pressurização com nitrogênio para caçar micro-vazamentos",
      "Solda fosfoper e troca do filtro secador molecular",
      "Vácuo profundo abaixo de 500 micra",
      "Carga de gás exata por peso conforme placa do fabricante"
    ]
  },
  {
    service: "Troca do Compressor / Motor (Convencional ou Inverter)",
    category: "Refrigeração",
    startingPrice: "R$ 550 - R$ 1.150",
    averageTime: "90 a 150 min",
    warranty: "90 dias por escrito",
    description: "Substituição do compressor queimado, travado ou sem compressão. Instalação de compressores Embraco, Tecumseh ou Inverter originais.",
    whatsIncluded: [
      "Instalação de compressor novo selado de fábrica",
      "Troca de relé de partida, protetor térmico e capacitor",
      "Novo filtro secador e válvula de serviço Schrader",
      "Carga completa de fluido refrigerante e teste elétrico"
    ]
  },
  {
    service: "Reparo e Troca de Placa Eletrônica / Módulo de Potência",
    category: "Eletrônica & Inverter",
    startingPrice: "R$ 240 - R$ 580",
    averageTime: "45 a 90 min",
    warranty: "90 dias por escrito",
    description: "Conserto de placas de comando e interface de geladeiras e lavadoras modernas (Inverter, Smart ThinQ, EcoBubble).",
    whatsIncluded: [
      "Análise de circuitos, relés e microcontroladores",
      "Substituição de placa original ou recuperação técnica de trilhas",
      "Reprogramação e calibração de fábrica",
      "Proteção contra surtos de tensão da rede elétrica"
    ]
  },
  {
    service: "Troca de Borracha de Vedação (Gaxeta Magnética)",
    category: "Vedação",
    startingPrice: "R$ 140 - R$ 260",
    averageTime: "30 a 50 min",
    warranty: "90 dias por escrito",
    description: "Substituição da gaxeta ressecada, rasgada ou descolada que permite a entrada de calor e umidade, sobrecarregando o motor e aumentando a conta de luz.",
    whatsIncluded: [
      "Borracha original sob medida com ímã de alta aderência",
      "Ajuste e nivelamento das portas",
      "Teste do papel para garantir 100% de vedação térmica"
    ]
  },
  {
    service: "Conserto de Bomba de Drenagem e Centrifugação de Lava e Seca",
    category: "Lava e Seca",
    startingPrice: "R$ 190 - R$ 380",
    averageTime: "45 a 75 min",
    warranty: "90 dias por escrito",
    description: "Eliminação do erro OE / 5E, retenção de água no tambor, barulho estridente ou falha na centrifugação das marcas LG, Samsung, Electrolux e Brastemp.",
    whatsIncluded: [
      "Desobstrução do filtro e mangueira de drenagem",
      "Instalação de eletrobomba nova original blindada",
      "Higienização da câmara de retenção",
      "Ciclo completo de teste de centrifugação"
    ]
  },
  {
    service: "Manutenção de Câmara Fria e Balcão Refrigerado Comercial",
    category: "Comercial / B2B",
    startingPrice: "R$ 280 - R$ 850",
    averageTime: "1 a 3 horas",
    warranty: "90 dias por escrito",
    description: "Atendimento emergencial 24h para supermercados, padarias, peixarias, restaurantes e hotéis. Troca de ventiladores, degelo forçado, limpeza de condensador e regulagem de válvula de expansão.",
    whatsIncluded: [
      "Revisão completa da unidade condensadora e evaporadora",
      "Limpeza química do condensador a ar comprimido",
      "Verificação de pressões de sucção/descarga e superaquecimento",
      "Relatório técnico para vigilância e controle sanitário"
    ]
  }
];

export const PAYMENT_METHODS = [
  { name: "PIX à Vista", discount: "Desconto especial à vista" },
  { name: "Cartão de Crédito", discount: "Em até 12x sem burocracia" },
  { name: "Cartão de Débito", discount: "Todas as bandeiras" },
  { name: "Boleto Faturado", discount: "Exclusivo para empresas e condomínios cadastrados" }
];
