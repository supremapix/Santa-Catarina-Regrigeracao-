export interface BrandInfo {
  name: string;
  category: string;
  badge: string;
  description: string;
  commonModels: string[];
  errorCodes: { code: string; meaning: string; solution: string }[];
}

export const SUPPORTED_BRANDS: BrandInfo[] = [
  {
    name: "Brastemp",
    category: "Refrigeração & Lavanderia",
    badge: "Técnicos Certificados",
    description: "Linha completa de Geladeiras Frost Free, Duplex, Inverse, Side by Side, Freezers e Lava e Seca Brastemp Ative / Gourmand.",
    commonModels: ["Geladeira Brastemp Inverse Maxi", "Brastemp Frost Free Duplex 462L", "Brastemp Side Inverse 540L", "Lava e Seca Brastemp Ative"],
    errorCodes: [
      { code: "LED Piscando no Painel", meaning: "Falha de comunicação entre placa e sensores", solution: "Substituição do módulo eletrônico de potência ou reprogramação de fábrica" },
      { code: "Barulho no Motor", meaning: "Desgaste mecânico do compressor ou amortecedores", solution: "Troca do compressor com nova carga de gás R134a" }
    ]
  },
  {
    name: "Electrolux",
    category: "Refrigeração & Lavanderia",
    badge: "Linha Completa",
    description: "Especialistas em refrigeradores Electrolux Frost Free, modelos DF, DW, TF, IB53, DB84, Adegas e Lavadoras.",
    commonModels: ["Geladeira Electrolux Frost Free DFW52", "Electrolux Inverse IB53", "Electrolux Side by Side SS72X", "Adega Electrolux 12/24 Garrafas"],
    errorCodes: [
      { code: "Erro Er (Erro na Placa)", meaning: "Falha na placa do painel de controle", solution: "Revisão e substituição da placa de interface original Electrolux" },
      { code: "Gelo no Fundo", meaning: "Dreno do degelo entupido", solution: "Higienização e desobstrução técnica do dreno da calha de degelo" }
    ]
  },
  {
    name: "Consul",
    category: "Refrigeração Residencial",
    badge: "Conserto Rápido",
    description: "Atendimento imediato para geladeiras Consul Facilite, Bem Estar, Freezers verticais/horizontais e Cervejeiras Consul Titanium.",
    commonModels: ["Geladeira Consul Frost Free 342L", "Cervejeira Consul Titanium CZD12", "Freezer Consul Slim 142L"],
    errorCodes: [
      { code: "Cervejeira não gela (-4°C)", meaning: "Sensor de temperatura descalibrado ou vazamento", solution: "Ajuste do controlador digital e verificação de fluido R600a" }
    ]
  },
  {
    name: "LG",
    category: "Lava e Seca & Inverter",
    badge: "Peças Genuínas",
    description: "Assistência especializada em tecnologia Inverter Direct Drive, Smart ThinQ, TurboWash e refrigeradores LG Side by Side.",
    commonModels: ["Lava e Seca LG Direct Drive 11kg / 13kg", "Lava e Seca LG Vivace Smart", "Geladeira LG InstaView Door-in-Door"],
    errorCodes: [
      { code: "Erro OE", meaning: "Falha na drenagem de água da lava e seca", solution: "Limpeza de filtro de resíduos ou troca da bomba de drenagem" },
      { code: "Erro UE", meaning: "Carga desbalanceada no tambor de centrifugação", solution: "Redistribuição de roupas ou revisão de amortecedores da suspensão" },
      { code: "Erro dE / dE1", meaning: "Porta não travada ou falha na trava elétrica", solution: "Substituição da trava de segurança da escotilha de vidro" }
    ]
  },
  {
    name: "Samsung",
    category: "Lava e Seca & Refrigeração",
    badge: "Tecnologia Inverter",
    description: "Assistência para Lava e Seca Samsung EcoBubble, Digital Inverter, AddWash e Refrigeradores French Door / Twin Cooling.",
    commonModels: ["Lava e Seca Samsung EcoBubble 10.2kg", "Lava e Seca Samsung Digital Inverter WD11", "Geladeira Samsung French Door RF28"],
    errorCodes: [
      { code: "Erro 5E / 5C", meaning: "Dificuldade para escoar água da lavagem", solution: "Desobstrução da tubulação ou substituição da bomba de esgotamento" },
      { code: "Erro 4E / 4C", meaning: "Sem entrada de água no reservatório", solution: "Substituição das válvulas solenóides de entrada d'água" },
      { code: "Erro DC / dC", meaning: "Falha de fechamento de porta", solution: "Conserto do mecanismo de trava e sensor da escotilha" }
    ]
  },
  {
    name: "Metalfrio & Gelopar & Fricon",
    category: "Refrigeração Comercial",
    badge: "Linha Comercial",
    description: "Manutenção técnica em expositores de bebidas, ilhas de supermercado, cervejeiras industriais e visicoolers.",
    commonModels: ["Expositor Metalfrio VB28", "Gelopar Cervejeira GRBA-400", "Ilha de Congelados Fricon"],
    errorCodes: [
      { code: "Temperatura Alta", meaning: "Sujeira no condensador ou micro-vazamento", solution: "Limpeza com ar comprimido e recarga de gás refrigerante" }
    ]
  }
];
