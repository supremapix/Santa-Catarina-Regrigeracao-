export interface BrandDetail {
  slug: string;
  brandName: string;
  type: 'geladeiras' | 'lava-e-seca' | 'ambos';
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  description: string;
  commonModels: string[];
  technologies: string[];
  commonFailures: { problem: string; cause: string; solution: string }[];
  errorCodes: { code: string; meaning: string; solution: string }[];
  faqs: { question: string; answer: string }[];
}

export const BRAND_DETAILS: BrandDetail[] = [
  {
    slug: "assistencia-tecnica-geladeira-brastemp",
    brandName: "Brastemp",
    type: "geladeiras",
    title: "Assistência Técnica Especializada em Geladeiras Brastemp em SC",
    metaTitle: "Assistência Técnica Geladeira Brastemp | Conserto em Domicílio SC",
    metaDescription: "Conserto de geladeira Brastemp Frost Free, Inverse, Side Inverse e Duplex em Penha, Navegantes, Itajaí, BC e região. Peças originais e garantia 90 dias.",
    h1: "Assistência Técnica Especializada em Geladeiras Brastemp",
    badge: "Peças Originais Whirlpool",
    description: "A Brastemp é líder absoluta em refrigeradores Frost Free e Inverse no Brasil. Nossos técnicos dominam a arquitetura dos módulos eletrônicos de potência, dampers termostáticos e compressores Embraco das linhas Brastemp Ative, Gourmand, Maxi, Clean e Inverse Viva. Solucionamos problemas de geladeira que não gela na parte inferior, luzes piscando no painel frontal e motor dando estalos no mesmo dia.",
    commonModels: [
      "Brastemp Frost Free Duplex 375L / 400L / 462L (BRM44, BRM45, BRM48, BRM54, BRM56)",
      "Brastemp Inverse 422L / 443L / 573L (BRE50, BRE57, BRE59, BRE80, BRE85)",
      "Brastemp Side Inverse 540L / BRS62 / BRO80 / BRO85",
      "Brastemp Retrô e Club (BRA08, BRG44, BRK50)"
    ],
    technologies: ["Sistema Frost Free Wind Flow", "Controle Eletrônico 6th Sense", "Compressor Embraco Fullmotion Inverter", "Função Turbo Freezer e Smart Ice"],
    commonFailures: [
      { problem: "Freezer gela mas embaixo fica quente", cause: "Queima da resistência de degelo ou sensor NTC descalibrado", solution: "Substituição do kit de degelo original com garantia de 90 dias" },
      { problem: "LEDs do painel piscando de forma desordenada", cause: "Falha de comunicação entre placa de interface e placa principal", solution: "Revisão e substituição da placa de potência original" },
      { problem: "Água escorrendo por baixo da gaveta de legumes", cause: "Canal do dreno de degelo obstruído", solution: "Desobstrução pressurizada e higienização térmica da calha" }
    ],
    errorCodes: [
      { code: "LED Nível 1 e 5 piscando", meaning: "Sensor de degelo em curto ou aberto", solution: "Substituição do sensor NTC 2.7k ohms" },
      { code: "LED Porta Aberta apitando", meaning: "Interruptor magnético com mau contato", solution: "Troca do reed switch e alinhamento da porta" }
    ],
    faqs: [
      { question: "Vocês usam peças originais Brastemp?", answer: "Sim! Utilizamos componentes 100% genuínos Whirlpool (Brastemp/Consul) com garantia formal por escrito de 90 dias." },
      { question: "O conserto da geladeira Brastemp é feito na minha casa?", answer: "Sim! Nossas oficinas móveis contam com todo o estoque de sensores, placas, termostatos e relés para realizar o reparo em domicílio sem retirar seu aparelho." }
    ]
  },
  {
    slug: "assistencia-tecnica-geladeira-electrolux",
    brandName: "Electrolux",
    type: "geladeiras",
    title: "Assistência Técnica Especializada em Geladeiras Electrolux em SC",
    metaTitle: "Assistência Técnica Geladeira Electrolux | Conserto em SC",
    metaDescription: "Conserto de geladeiras Electrolux Frost Free, Inverse, French Door e Side by Side (DF, DW, TF, IB53, DB84, DM84X). Atendimento domiciliar com garantia 90 dias.",
    h1: "Assistência Técnica Especializada em Geladeiras Electrolux",
    badge: "Linha Completa DF / TF / IB / DM",
    description: "Refrigeradores Electrolux destacam-se pelo design moderno e recursos avançados como Blue Touch, AutoSense e Inverter. Nossos técnicos são altamente treinados para consertar os circuitos de degelo inteligente, dampers eletrônicos e placas inverter das séries DF36 a DF56, TF55/TF56, Inverse IB53 e French Door DM84X.",
    commonModels: [
      "Electrolux Frost Free DFN41, DFX41, DF52, DF53, DF54, DFW52",
      "Electrolux Top Freezer TF55, TF56, TF55S, TF56S com AutoSense",
      "Electrolux Bottom Freezer Inverse IB53, IB53X, DB84, DB84X, IB54",
      "Electrolux French Door DM84X, DM85X, DM86X, DM90X e Side by Side SS72X"
    ],
    technologies: ["Tecnologia AutoSense com Inteligência Artificial", "Compressor Inverter com tecnologia VDP", "Painel Blue Touch capacitivo", "Gaveta HortiNatura com controle de umidade"],
    commonFailures: [
      { problem: "Painel Blue Touch travado ou apitando", cause: "Oxidação no flat cable da porta ou falha na placa de interface", solution: "Substituição do cabo chicote ou painel de comando touch" },
      { problem: "Alimentos congelando na prateleira superior", cause: "Damper eletrônico travado 100% aberto", solution: "Troca do motor de passo do damper e calibração de fluxo de ar" },
      { problem: "Ventilador do freezer roncando alto", cause: "Gelo acumulado raspando na hélice", solution: "Descongelamento técnico e substituição do kit sensor/fusível térmico" }
    ],
    errorCodes: [
      { code: "Erro Er (Error)", meaning: "Falha de comunicação entre placas ou sensor aberto", solution: "Diagnóstico elétrico com scanner e troca do componente defeituoso" },
      { code: "Erro OP no visor", meaning: "Sensor de temperatura do ambiente aberto", solution: "Substituição do sensor de temperatura ambiente original" }
    ],
    faqs: [
      { question: "Vocês consertam geladeiras Electrolux Inverter?", answer: "Sim! Somos especialistas no diagnóstico de compressores VDP Inverter e placas controladoras de frequência da Electrolux." }
    ]
  },
  {
    slug: "assistencia-tecnica-geladeira-consul",
    brandName: "Consul",
    type: "geladeiras",
    title: "Assistência Técnica Especializada em Geladeiras e Cervejeiras Consul",
    metaTitle: "Assistência Técnica Geladeira Consul | Conserto em Domicílio SC",
    metaDescription: "Conserto de geladeiras Consul Facilite, Bem Estar, Freezers e Cervejeiras Titanium em Penha, Navegantes, Piçarras e região. Garantia de 90 dias.",
    h1: "Assistência Técnica em Geladeiras e Cervejeiras Consul",
    badge: "Especialistas Facilite & Cervejeiras",
    description: "Geladeiras e cervejeiras Consul são sinônimo de praticidade e eficiência. Atendemos com agilidade toda a linha de refrigeradores Consul Facilite, Bem Estar, Duplex Frost Free, Freezers verticais e horizontais, além das consagradas Cervejeiras Consul Titanium e Smart.",
    commonModels: [
      "Geladeira Consul Frost Free 342L / 386L / 405L / 440L (CRB36, CRB39, CRM39, CRM43, CRM44, CRM54)",
      "Geladeira Consul Bem Estar com horta em casa e filtro antiodor",
      "Cervejeira Consul Titanium CZD12 / CZE12 / Smart",
      "Freezer Consul Slim CVU18 / CVU20 / Horizontal CHA22 / CHB53"
    ],
    technologies: ["Sistema Frost Free Extra Frio", "Controle de temperatura externo", "Cervejeira com display digital -4°C", "Compressor de alto rendimento"],
    commonFailures: [
      { problem: "Cervejeira Consul não gela a -4°C", cause: "Sensor de temperatura descalibrado ou sujeira no condensador", solution: "Calibração eletrônica e limpeza do circuito térmico" },
      { problem: "Geladeira Consul de 1 porta (CRB36/39) sem gelar embaixo", cause: "Bloqueio de gelo na placa fria traseira", solution: "Troca do sensor de degelo e termo-fusível original" }
    ],
    errorCodes: [
      { code: "3 bips curtos ao ligar", meaning: "Autoteste inicial aprovado", solution: "Operação normal do equipamento" },
      { code: "Display piscando -4°C sem gelar", meaning: "Falta de compressão de gás ou sensor NTC com leitura errada", solution: "Aferição de pressão manométrica e troca de sensor" }
    ],
    faqs: [
      { question: "Minha cervejeira Consul pode ficar na sacada gourmet?", answer: "Sim, desde que protegida da chuva direta e com pelo menos 10cm de afastamento da parede para ventilação." }
    ]
  },
  {
    slug: "assistencia-tecnica-geladeira-samsung",
    brandName: "Samsung",
    type: "ambos",
    title: "Assistência Técnica Especializada em Geladeiras e Lava e Seca Samsung",
    metaTitle: "Assistência Samsung: Geladeiras e Lava e Seca | Conserto em SC",
    metaDescription: "Conserto de geladeiras Samsung Digital Inverter, French Door, Twin Cooling e Lava e Seca EcoBubble. Peças originais e garantia formal de 90 dias.",
    h1: "Assistência Técnica Especializada Samsung em Santa Catarina",
    badge: "Digital Inverter & Twin Cooling",
    description: "Refrigeradores Samsung Twin Cooling Plus, French Door e máquinas Lava e Seca EcoBubble e Digital Inverter utilizam tecnologia sul-coreana de alta precisão. Nossos técnicos contam com instrumentação de ponta para diagnosticar placas de potência IPM, compressores Digital Inverter e sistemas de Ice Maker.",
    commonModels: [
      "Geladeira Samsung Twin Cooling Plus RT38, RT43, RT46, RT53",
      "Geladeira Samsung French Door RF28, RF263, RF220, Family Hub",
      "Geladeira Samsung Side by Side RS50, RS52, RS65",
      "Lava e Seca Samsung EcoBubble WD10, WD11, WD13, WD15, AddWash, Q-Drive"
    ],
    technologies: ["Digital Inverter Technology com 10 anos de garantia de motor", "Twin Cooling Plus com evaporadores independentes", "Tecnologia EcoBubble de lavagem com bolhas", "Motor sem correia com ímãs permanentes"],
    commonFailures: [
      { problem: "Ice Maker da geladeira Samsung travado ou sem soltar gelo", cause: "Micromotor com engrenagem quebrada ou sensor de fim de curso descalibrado", solution: "Substituição do módulo Ice Maker original Samsung" },
      { problem: "Lava e Seca com erro 5E ou 5C", cause: "Bomba de drenagem entupida ou queimada", solution: "Desobstrução do filtro e instalação de eletrobomba nova blindada" },
      { problem: "Lava e Seca não centrifuga com erro Ub / UE", cause: "Carga desbalanceada ou amortecedores gastos", solution: "Troca do par de amortecedores e calibração de nível" }
    ],
    errorCodes: [
      { code: "Erro 5E / 5C", meaning: "Falha no escoamento de água da lavagem", solution: "Troca da bomba de drenagem e limpeza de mangueira" },
      { code: "Erro 4E / 4C", meaning: "Falta de entrada de água na máquina", solution: "Troca da válvula solenóide dupla de entrada" },
      { code: "Erro 3E", meaning: "Falha de acionamento do motor Inverter", solution: "Reparo no módulo IPM da placa principal de potência" }
    ],
    faqs: [
      { question: "Vocês reparam placas inverter de geladeira Samsung?", answer: "Sim! Realizamos manutenção em placas de potência e interface originais Samsung com garantia de 90 dias." }
    ]
  },
  {
    slug: "assistencia-tecnica-geladeira-lg",
    brandName: "LG",
    type: "ambos",
    title: "Assistência Técnica Especializada em Geladeiras e Lava e Seca LG",
    metaTitle: "Assistência LG: Geladeiras e Lava e Seca | Conserto em SC",
    metaDescription: "Conserto de Geladeiras LG Linear Inverter, InstaView Door-in-Door e Lava e Seca LG Direct Drive / Vivace / Smart ThinQ. Atendimento domiciliar com garantia 90 dias.",
    h1: "Assistência Técnica Especializada LG em Santa Catarina",
    badge: "Direct Drive & Linear Inverter",
    description: "A LG é referência global em motores Direct Drive e compressores Lineares Inverter. Prestamos assistência técnica completa em refrigeradores LG Side by Side, InstaView e lavadoras Lava e Seca LG Vivace, Prime e ThinQ em todas as cidades do Litoral Norte de SC.",
    commonModels: [
      "Geladeira LG InstaView Door-in-Door GC-X247, GC-L247, Side by Side GS65",
      "Geladeira LG French Door Monarch e Linear Inverter GN-B392",
      "Lava e Seca LG Direct Drive 8.5kg / 10.2kg / 11kg / 13kg / 14kg / 17kg (WD14, CV5011, CV7011, CV9011, Vivace)",
      "Lava e Seca LG Smart ThinQ com Wi-Fi e inteligência artificial AI DD"
    ],
    technologies: ["Motor Direct Drive acoplado diretamente ao tambor", "Compressor Linear Inverter com pistão magnético", "Sistema 6 Motion DD com 6 movimentos de lavagem", "Inteligência Artificial AI DD"],
    commonFailures: [
      { problem: "Lava e Seca LG com erro OE", cause: "Bomba de drenagem travada ou queimada", solution: "Substituição imediata da eletrobomba original com garantia 90 dias" },
      { problem: "Lava e Seca LG com erro dE / dE1", cause: "Trava elétrica da porta danificada", solution: "Troca do mecanismo de trava e sensor da escotilha" },
      { problem: "Geladeira LG Inverter parando de gelar gradualmente", cause: "Micro-vazamento na serpentina ou falha na válvula linear", solution: "Pressurização com nitrogênio e recarga de gás R600a" }
    ],
    errorCodes: [
      { code: "Erro OE", meaning: "Tempo de escoamento de água excedido", solution: "Troca da bomba de drenagem original LG" },
      { code: "Erro LE", meaning: "Motor Direct Drive travado ou sensor Hall danificado", solution: "Substituição do sensor Hall RPS" },
      { code: "Erro tE", meaning: "Falha no sensor térmico da água ou secagem", solution: "Substituição do termistor NTC" }
    ],
    faqs: [
      { question: "Vocês realizam troca do sensor Hall da Lava e Seca LG?", answer: "Sim! Mantemos sensores Hall originais LG em estoque para troca imediata no mesmo dia em domicílio." }
    ]
  },
  {
    slug: "assistencia-tecnica-geladeira-panasonic",
    brandName: "Panasonic",
    type: "geladeiras",
    title: "Assistência Técnica Especializada em Geladeiras Panasonic em SC",
    metaTitle: "Assistência Técnica Geladeira Panasonic | Conserto em SC",
    metaDescription: "Conserto de geladeiras Panasonic Econavi, Inverter e Black Glass (NR-BT40, NR-BT42, NR-BB53, NR-CB74). Peças originais e garantia de 90 dias.",
    h1: "Assistência Técnica Especializada em Geladeiras Panasonic",
    badge: "Econavi & Inverter",
    description: "Refrigeradores Panasonic são reconhecidos por sua altíssima eficiência energética com tecnologia Econavi e design refinado em vidro espelhado (Black Glass). Consertamos placas de controle, sensores de luminosidade Econavi e compressores Inverter de todos os modelos Panasonic.",
    commonModels: [
      "Panasonic Frost Free Duplex BT40, BT42, BT49, BT50, BT55",
      "Panasonic Bottom Freezer Inverse BB52, BB53, BB71 com Black Glass",
      "Panasonic French Door CB74 e Multi-Door"
    ],
    technologies: ["Tecnologia Econavi com sensores inteligentes de uso e luz", "Compressor Inverter com rotação variável", "Gaveta Fresh Zone com vitamina Power", "Sistema antibacteriano Ag Clean"],
    commonFailures: [
      { problem: "Geladeira Panasonic congelando alimentos no refrigerador", cause: "Sensor de temperatura Econavi descalibrado", solution: "Troca de sensor e reprogramação dos parâmetros de fábrica" },
      { problem: "Luzes Econavi piscando sem parar", cause: "Erro de autoteste da placa de comando", solution: "Diagnóstico elétrico e conserto da placa de potência" }
    ],
    errorCodes: [
      { code: "LEDs Econavi e Inverter piscando alternados", meaning: "Falha de sinal no sensor do evaporador", solution: "Substituição do sensor térmico original Panasonic" }
    ],
    faqs: [
      { question: "Como funciona a garantia de 90 dias para Panasonic?", answer: "Emitimos ordem de serviço formal com recibo e garantia por escrito de 90 dias cobrindo peças e mão de obra." }
    ]
  },
  {
    slug: "assistencia-tecnica-geladeira-midea",
    brandName: "Midea",
    type: "ambos",
    title: "Assistência Técnica Especializada em Geladeiras e Lava e Seca Midea",
    metaTitle: "Assistência Técnica Midea: Geladeiras e Lava e Seca em SC",
    metaDescription: "Conserto de Geladeiras Midea Side by Side, French Door, Frigobares e Lava e Seca Midea Storm Wash / HealthGuard com garantia formal de 90 dias.",
    h1: "Assistência Técnica Especializada Midea em Santa Catarina",
    badge: "Storm Wash & Inverter Quattro",
    description: "A Midea tornou-se uma das maiores fabricantes mundiais de linha branca. Nossos técnicos atendem com excelência refrigeradores Side by Side, French Door de 4 portas, frigobares e lavadoras Lava e Seca Midea Storm Wash e HealthGuard.",
    commonModels: [
      "Geladeira Midea Side by Side 430L / 527L / 528L",
      "Geladeira Midea French Door 482L / 501L Quattro Inverter",
      "Lava e Seca Midea Storm Wash 10.2kg / 11kg / 12.5kg (LSE10X, LSE11X, MFS11)",
      "Frigobar Midea 45L / 93L / 124L e Cervejeira Midea Flex"
    ],
    technologies: ["Compressor Inverter Quattro com 4 estágios de aceleração", "Tecnologia Storm Wash com tambor 3D", "Motor Inverter BLDC silencioso", "Painel Lunar com display integrado ao botão rotativo"],
    commonFailures: [
      { problem: "Lava e Seca Midea com erro E30", cause: "Falha no travamento da escotilha", solution: "Substituição da trava elétrica original Midea" },
      { problem: "Geladeira Midea Side by Side sem gelar um dos lados", cause: "Motor do damper ou sensor de degelo aberto", solution: "Troca do conjunto de ventilação e sensor original" }
    ],
    errorCodes: [
      { code: "Erro E21", meaning: "Falha no tempo de drenagem de água", solution: "Limpeza ou troca da bomba de esgotamento" },
      { code: "Erro E30", meaning: "Porta destravada ou trinco quebrado", solution: "Troca da trava da escotilha original" }
    ],
    faqs: [
      { question: "Vocês atendem frigobares Midea furados?", answer: "Sim! Realizamos solda especial no congelador de alumínio e recarga de gás R600a." }
    ]
  }
];

export function getBrandDetailBySlug(slug: string): BrandDetail | undefined {
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  return BRAND_DETAILS.find(b => b.slug === clean);
}

export const SUPPORTED_BRANDS = BRAND_DETAILS.map(b => ({
  name: b.brandName,
  slug: b.slug,
  badge: b.badge,
  description: b.description,
  commonProblems: b.commonFailures.map(f => `${f.problem}: ${f.solution}`)
}));

