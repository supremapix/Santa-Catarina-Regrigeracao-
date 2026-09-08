export interface ServicePillar {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  image: string;
  video?: string;
  category: 'Residencial' | 'Comercial' | 'Lava e Seca';
  commonDefects: string[];
  repairsExecuted: string[];
  fullDescription: string;
  faqs: { question: string; answer: string }[];
}

import { COMPANY_INFO } from './company';

export const PILLAR_SERVICES: ServicePillar[] = [
  {
    id: "geladeira",
    slug: "conserto-de-geladeira",
    title: "Conserto de Geladeira e Refrigeradores",
    shortTitle: "Geladeiras",
    metaTitle: "Conserto de Geladeira em Penha e Região | Santa Catarina Refrigeração",
    metaDescription: "Assistência técnica especializada no conserto de geladeiras Frost Free, Duplex, Inverse e Side by Side. Atendimento 24h em domicílio com garantia de 90 dias.",
    h1: "Conserto e Assistência Técnica de Geladeiras em Penha e Região",
    summary: "Conserto rápido e especializado de geladeiras de todas as marcas (Brastemp, Electrolux, Consul, Samsung, LG). Atendimento domiciliar no mesmo dia com peças originais.",
    image: COMPANY_INFO.assets.serviceGeladeira,
    video: "https://img.supremasite.com.br/geladeiras-refrigeradores.mp4",
    category: "Residencial",
    commonDefects: [
      "Geladeira liga mas não gelando na parte de baixo",
      "Compressor/motor fazendo barulho, estalos ou sem partir",
      "Vazamento de água dentro ou atrás do refrigerador",
      "Acúmulo de gelo excessivo na placa evaporadora (falha no degelo)",
      "Bipando continuamente ou com código de erro no painel",
      "Borracha da porta ressecada sem vedar corretamente",
      "Gás refrigerante vazado ou sistema obstruído"
    ],
    repairsExecuted: [
      "Recarga de gás R134a / R600a ecologicamente correto",
      "Troca de compressor e filtro secador",
      "Substituição de placa eletrônica principal e interface",
      "Troca de sensor de degelo, termostato e fusível térmico",
      "Desobstrução do dreno e higienização do sistema",
      "Troca de borracha de vedação gaxeta original"
    ],
    fullDescription: "A Santa Catarina Refrigeração oferece serviço especializado de manutenção preventiva e corretiva para geladeiras e refrigeradores residenciais e comerciais em Penha e toda a região num raio de até 200 km. Nossos técnicos certificados realizam o diagnóstico em domicílio com equipamentos digitais avançados, garantindo a rápida identificação de defeitos em placas Inverter, sensores de temperatura, resistência de degelo e vazamentos de fluido refrigerante. Trabalhamos exclusivamente com componentes originais e concedemos garantia formal de 90 dias por escrito.",
    faqs: [
      {
        question: "Quanto tempo demora o conserto de uma geladeira em domicílio?",
        answer: "Na maioria dos casos, o diagnóstico e o conserto são concluídos na mesma visita, levando entre 1 e 2 horas. Se houver necessidade de troca de compressor ou recarga de gás, nossos técnicos possuem todo o ferramental móvel e insumos no veículo para executar o serviço no local."
      },
      {
        question: "Vale a pena consertar geladeira com mais de 5 ou 10 anos?",
        answer: "Sim! Na grande maioria dos casos, a substituição de um componente pontual como sensor de degelo, relé, protetor térmico ou carga de gás custa uma fração pequena do preço de um equipamento novo. Nosso técnico avalia o estado geral da geladeira antes de qualquer execução."
      },
      {
        question: "Por que a geladeira gela em cima e não gela na parte inferior?",
        answer: "Em geladeiras Frost Free, este é o sintoma clássico de falha no sistema de degelo automático (resistência queimada, sensor de degelo descalibrado, fusível térmico aberto ou dreno entupido). O gelo bloqueia os dutos de ar e impede que a ventoinha envie ar frio para a parte de baixo."
      },
      {
        question: "Vocês atendem nos finais de semana e feriados?",
        answer: "Sim. Oferecemos atendimento aos sábados das 07h às 20h, domingos das 07h às 12h e plantão emergencial 24 horas para casos onde a perda de alimentos ou insumos comerciais é iminente."
      }
    ]
  },
  {
    id: "side-by-side",
    slug: "conserto-de-side-by-side",
    title: "Conserto de Geladeira Side by Side e French Door",
    shortTitle: "Side by Side",
    metaTitle: "Conserto de Geladeira Side by Side | Santa Catarina Refrigeração",
    metaDescription: "Assistência especializada em refrigeradores Side by Side e French Door em Penha e região. Reparo de fábrica de geladeira de luxo Samsung, LG, Electrolux e Brastemp.",
    h1: "Assistência Técnica Especializada em Refrigeradores Side by Side",
    summary: "Atendimento especializado para geladeiras de grande porte Side by Side e French Door com dispensador de água e gelo, motor Inverter e duplo evaporador.",
    image: COMPANY_INFO.assets.serviceSideBySide,
    video: "https://img.supremasite.com.br/french-door.mp4",
    category: "Residencial",
    commonDefects: [
      "Dispensador de água e gelo na porta não funciona ou vazando",
      "Compressor Inverter Linear sem funcionamento ou piscando led de erro",
      "Fabricador de gelo (Ice Maker) travado ou sem produzir cubos",
      "Diferença acentuada de temperatura entre freezer e refrigerador",
      "Filtro de água saturado bloqueando fluxo de água purificada"
    ],
    repairsExecuted: [
      "Conserto de fabricadores de gelo (Ice Maker) e motor da rosca",
      "Troca de válvulas solenóide de água e tubulações atóxicas",
      "Substituição de compressores Inverter de última geração",
      "Reparo e reprogramação de placas de potência principais",
      "Troca de filtros de água e alinhamento de portas duplas"
    ],
    fullDescription: "Refrigeradores do tipo Side by Side e French Door exigem conhecimento técnico aprofundado devido aos seus sistemas microprocessados complexos, compressores Inverter inteligentes e linhas de purificação e fabricação de gelo integradas. Nossos especialistas possuem treinamento direto para operar com equipamentos de alta tecnologia Samsung, LG, Electrolux, Brastemp e marcas importadas, devolvendo o desempenho de fábrica da sua geladeira.",
    faqs: [
      {
        question: "Com que frequência devo trocar o filtro de água da geladeira Side by Side?",
        answer: "Recomenda-se a substituição do refil do filtro a cada 6 meses ou a cada 2.000 litros de água filtrada. A falta de troca pode entupir as válvulas e causar mau cheiro no gelo e na água."
      },
      {
        question: "Como funciona a garantia para refrigeração Side by Side?",
        answer: "Fornecemos 90 dias de garantia em peças e mão de obra com laudo impresso ou digital, além do suporte técnico contínuo direto pelo WhatsApp."
      }
    ]
  },
  {
    id: "frigobar",
    slug: "conserto-de-frigobar",
    title: "Conserto e Manutenção de Frigobar",
    shortTitle: "Frigobares",
    metaTitle: "Conserto de Frigobar em Penha e Região | Santa Catarina Refrigeração",
    metaDescription: "Manutenção de frigobares de hotéis, pousadas, escritórios e residências em Penha, Piçarras, Itajaí e região. Conserto rápido com garantia de 90 dias.",
    h1: "Assistência Técnica e Conserto de Frigobar em Domicílio",
    summary: "Atendimento para frigobares de pousadas, hotéis, escritórios e residências. Troca de gás, conserto de termostato, borracha e motor com agilidade.",
    image: COMPANY_INFO.assets.serviceFrigobar,
    video: "https://img.supremasite.com.br/frigobares.mp4",
    category: "Residencial",
    commonDefects: [
      "Frigobar não gela nada ou apenas esquenta a lateral",
      "Vazamento de fluido refrigerante por perfuração de faca no congelador",
      "Termostato travado não desligando o motor",
      "Ruído alto no compressor durante a noite em quartos de hotel/pousada"
    ],
    repairsExecuted: [
      "Solda técnica em evaporadores de alumínio e recarga de gás R600a/R134a",
      "Substituição de termostato mecânico e eletrônico",
      "Troca de relé de partida e protetor térmico",
      "Troca de borracha de vedação magnética"
    ],
    fullDescription: "Frigobares são indispensáveis em pousadas, hotéis, escritórios e quartos em cidades litorâneas como Penha, Piçarras e Balneário Camboriú. Quando um frigobar para de gelar por vazamento de gás ou falha no termostato, nossos técnicos realizam a manutenção imediata no próprio local, evitando insatisfação de hóspedes e prejuízos comerciais.",
    faqs: [
      {
        question: "Furei o congelador do frigobar com a faca ao tirar gelo. Tem conserto?",
        answer: "Sim! É um caso bastante comum. Desligue imediatamente o frigobar da tomada para evitar que água entre no motor. Nosso técnico faz a solda do furo no evaporador, vácuo no sistema e nova recarga de gás."
      }
    ]
  },
  {
    id: "freezer",
    slug: "conserto-de-freezer",
    title: "Conserto de Freezer Vertical e Horizontal",
    shortTitle: "Freezers",
    metaTitle: "Conserto de Freezer Vertical e Horizontal | Santa Catarina Refrigeração",
    metaDescription: "Assistência técnica de freezer vertical e horizontal em Penha e região. Reparo de motor, carga de gás e vazamento de congeladores de todas as marcas.",
    h1: "Conserto de Freezer Vertical e Horizontal em Penha e Região",
    summary: "Especialistas no reparo de congeladores e freezers residenciais e comerciais. Diagnóstico rápido para evitar derretimento e perda de congelados.",
    image: COMPANY_INFO.assets.serviceFreezer,
    video: "https://img.supremasite.com.br/congeladores.mp4",
    category: "Residencial",
    commonDefects: [
      "Freezer descongelando e alimentos estragando",
      "Acúmulo de gelo bloqueando as gavetas",
      "Compressor esquentando muito mas sem congelar",
      "Luz de alarme ou temperatura alta acesa no painel"
    ],
    repairsExecuted: [
      "Troca de compressor para congelamento rápido (alta contrapressão)",
      "Detecção e eliminação de microvazamentos de gás no gabinete",
      "Substituição de placas controladoras de temperatura digital",
      "Troca de dobradiças, fechaduras e vedações de tampa"
    ],
    fullDescription: "Seja para armazenar alimentos da família ou insumos de um restaurante, um freezer com defeito requer socorro imediato. A Santa Catarina Refrigeração dispõe de técnicos prontos para atender Penha, Piçarras, Navegantes, Itajaí, Balneário Camboriú e municípios vizinhos no mesmo dia.",
    faqs: [
      {
        question: "Quanto tempo o freezer mantém os alimentos congelados se desligar?",
        answer: "Um freezer bem vedado e fechado mantém a temperatura por até 24 horas. Por isso, ao notar o defeito, chame imediatamente nossa equipe no WhatsApp para o reparo no mesmo dia."
      }
    ]
  },
  {
    id: "camara-fria",
    slug: "conserto-de-camara-fria",
    title: "Conserto e Manutenção de Câmara Fria e Frigorífica",
    shortTitle: "Câmaras Frias",
    metaTitle: "Conserto de Câmara Fria em Penha e Região SC | Santa Catarina Refrigeração",
    metaDescription: "Assistência técnica de câmaras frias de resfriados e congelados em Penha, Itajaí, Piçarras e raio de 200km. Atendimento de emergência 24h para comércios.",
    h1: "Assistência Técnica de Câmaras Frias Resfriadas e Congeladas",
    summary: "Manutenção preventiva e emergencial 24h em câmaras frigoríficas para restaurantes, peixarias, supermercados, açougues e distribuidoras da região.",
    image: COMPANY_INFO.assets.serviceCamaraFria,
    video: "https://img.supremasite.com.br/frigor%C3%ADfica.mp4",
    category: "Comercial",
    commonDefects: [
      "Unidade condensadora travada ou desarmando no pressostato",
      "Evaporador congelando completamente e bloqueando o fluxo de ar",
      "Diferença de temperatura no controlador digital (Full Gauge / Carel)",
      "Vazamento de fluido em linhas de sucção ou expansão"
    ],
    repairsExecuted: [
      "Substituição de compressores semi-herméticos e herméticos Scroll/Maneurop",
      "Troca e parametrização de controladores digitais de temperatura",
      "Substituição de válvulas de expansão termostática e solenóides",
      "Limpeza química de condensadores e evaporadores",
      "Recarga de fluido refrigerante (R404A, R22, R134a, R410A)"
    ],
    fullDescription: "Câmaras frias são o coração financeiro de peixarias, marisqueiras, supermercados e cozinhas industriais na região costeira e no interior de Santa Catarina. Uma falha na refrigeração comercial pode significar prejuízos astronômicos. Oferecemos atendimento prioritário emergencial 24 horas para restabelecer a temperatura ideal do seu estoque.",
    faqs: [
      {
        question: "Vocês fazem contrato de manutenção preventiva para câmaras frias?",
        answer: "Sim! Desenvolvemos planos de PMOC e contratos de manutenção preventiva periódica para comércios, peixarias e restaurantes garantindo máxima durabilidade e economia de energia."
      }
    ]
  },
  {
    id: "balcao-refrigerado",
    slug: "conserto-de-balcao-refrigerado",
    title: "Conserto de Balcão Refrigerado e Expositor de Bebidas",
    shortTitle: "Balcões Refrigerados",
    metaTitle: "Conserto de Balcão Refrigerado | Santa Catarina Refrigeração",
    metaDescription: "Manutenção de balcão expositor, cervejeiras, ilhas de supermercado e vitrines refrigeradas em Penha e todo o litoral e vale catarinense.",
    h1: "Manutenção de Balcões Expositores e Cervejeiras Comerciais",
    summary: "Reparo de balcões refrigerados de padarias, conveniências, lanchonetes e cervejeiras comerciais Metalfrio, Gelopar, Fricon e Hussmann.",
    image: COMPANY_INFO.assets.serviceBalcao,
    video: "https://img.supremasite.com.br/expositor-de-bebidas.mp4",
    category: "Comercial",
    commonDefects: [
      "Bebidas e laticínios ficando quentes no expositor",
      "Compressor funcionando direto com consumo elevado na conta de luz",
      "Vidro do balcão embaçado por falha no micro-motor ou resistência",
      "Vazamento de água na base do balcão refrigerado"
    ],
    repairsExecuted: [
      "Troca de motores ventiladores do condensador e evaporador",
      "Substituição de termostatos digitais de cervejeira (-6°C a 2°C)",
      "Carga de gás com limpeza de sistema e troca de filtro secador",
      "Conserto da fiação elétrica e iluminação LED interna"
    ],
    fullDescription: "Seu estabelecimento comercial depende de bebidas trincando de geladas e alimentos conservados na temperatura padrão da ANVISA. Atendemos conveniências, bares, lanchonetes, padarias e restaurantes com peças originais para expositores e balcões de todas as marcas do mercado.",
    faqs: [
      {
        question: "Minha cervejeira não está atingindo a temperatura negativa. O que pode ser?",
        answer: "Pode ser desde acúmulo de sujeira no condensador, ventilador travado, micro-vazamento de gás ou desregulagem do controlador eletrônico. Nosso técnico resolve no próprio local."
      }
    ]
  },
  {
    id: "adega",
    slug: "conserto-de-adega",
    title: "Conserto de Adega Climatizada",
    shortTitle: "Adegas",
    metaTitle: "Conserto de Adega Climatizada em Penha e Região | Santa Catarina Refrigeração",
    metaDescription: "Assistência técnica especializada no conserto de adegas climatizadas com compressor ou pastilha Peltier. Reparo de placas e controle fino de temperatura.",
    h1: "Conserto e Manutenção de Adegas Climatizadas de Vinhos",
    summary: "Assistência técnica para adegas de vinhos residenciais e restaurante. Controle preciso de temperatura e umidade para preservação dos rótulos.",
    image: COMPANY_INFO.assets.serviceAdega,
    video: "https://img.supremasite.com.br/adega-climatizada.mp4",
    category: "Residencial",
    commonDefects: [
      "Adega esquentando e alterando a temperatura dos vinhos",
      "Painel digital piscando ou sem ajuste de graus",
      "Vibração excessiva ou ruído no ventilador interno",
      "Condensação interna excessiva escorrendo na porta de vidro"
    ],
    repairsExecuted: [
      "Substituição de placas thermoelétricas e pastilhas Peltier",
      "Troca de compressor de baixo ruído/baixa vibração específico para adegas",
      "Conserto do painel touch e placas de fonte alimentadora",
      "Troca de sensores NTC de precisão de temperatura"
    ],
    fullDescription: "Vinhos finos exigem controle rigoroso de temperatura e ausência total de vibrações que possam alterar suas propriedades organolépticas. Atendemos adegas das marcas Spicy, Electrolux, Brastemp, Tocave, Philco, Dynacool, Gourmet e modelos importados.",
    faqs: [
      {
        question: "Qual a diferença entre adega termoelétrica e adega com compressor?",
        answer: "Adegas termoelétricas usam pastilha Peltier para refrigeração silenciosa e são ideais para ambientes até 25°C. Adegas com compressor oferecem alto desempenho de refrigeração mesmo em regiões quentes no verão praiano."
      }
    ]
  },
  {
    id: "lava-e-seca",
    slug: "conserto-lava-e-seca-penha",
    title: "Conserto de Lava e Seca e Máquinas de Lavar",
    shortTitle: "Lava e Seca",
    metaTitle: "Conserto de Lava e Seca em Penha e Região | LG, Samsung e Electrolux",
    metaDescription: "Assistência técnica de Lava e Seca e máquina de lavar em Penha, Piçarras, Itajaí. Peças originais, erros OE, UE, 5E, 4E, Inverter e garantia de 90 dias.",
    h1: "Conserto e Assistência Técnica de Lava e Seca em Penha e Região",
    summary: "Especialistas em placas eletrônicas, motores Inverter, sensores, bombas e rolamentos de Lava e Seca LG, Samsung, Electrolux, Brastemp e Midea.",
    image: COMPANY_INFO.assets.serviceLavaESeca,
    video: "https://img.supremasite.com.br/maquina-lavar.mp4",
    category: "Lava e Seca",
    commonDefects: [
      "Máquina não liga ou desliga sozinha no meio do ciclo",
      "Não escoa a água (erros OE, 5E, 5C, E21) ou bomba travada",
      "Não enche de água (erros IE, 4E, 4C) ou válvula queimada",
      "Barulho alto ou pancadas fortes durante a centrifugação (rolamento / cruzeta)",
      "Não seca as roupas ou solta ar frio durante a secagem",
      "Porta travada não abre após o término (erros dE, dC, dE1)"
    ],
    repairsExecuted: [
      "Reparo e troca de placa eletrônica principal e inversora de frequência",
      "Substituição de conjunto mecânico, rolamentos de alta rotação e retentor",
      "Troca de trava da porta e sensor de porta fechada",
      "Limpeza do duto de secagem e substituição da resistência e termostato",
      "Substituição de bomba de drenagem e eletroválvula de entrada de água",
      "Higienização completa do tambor e remoção de resíduos de sabão/amaciante"
    ],
    fullDescription: "A lava e seca é um eletrodoméstico indispensável no litoral catarinense devido à alta umidade relativa do ar. Diagnosticar falhas em motores Direct Drive e placas Inverter exige conhecimento especializado em eletrônica embarcada. Nossa equipe realiza o conserto no seu imóvel com agilidade e peças originais de fábrica.",
    faqs: [
      {
        question: "Quanto custa uma visita técnica para avaliar minha lava e seca?",
        answer: "A visita técnica com orçamento é 100% gratuita quando o serviço é aprovado! Nossos técnicos analisam a máquina no local e apresentam o diagnóstico transparente sem enrolação."
      },
      {
        question: "Qual é a vida útil de uma máquina Lava e Seca?",
        answer: "Com manutenções preventivas periódicas (limpeza do filtro de drenagem e higienização do tambor), uma lava e seca de boa marca dura facilmente de 8 a 15 anos. Substituir componentes desgastados renova a vida do equipamento por um valor muito menor do que comprar uma nova."
      },
      {
        question: "O que significa o erro OE na LG ou 5E na Samsung?",
        answer: "Estes códigos indicam falha na drenagem da água. Pode ser um objeto travando o filtro (moedas, grampos, fiapos), dobra na mangueira ou queima da bomba de esgotamento. Nosso técnico desobstrui ou substitui a bomba rapidamente no local."
      },
      {
        question: "Vocês trocam rolamento e cruzeta de Lava e Seca?",
        answer: "Sim! Somos especialistas na troca do kit completo de rolamentos blindados, retentor de silicone e triângulo cruzeta de suporte do tambor com alinhamento perfeito sem ruído."
      }
    ]
  },
  {
    id: "assistencia-tecnica-refrigeracao",
    slug: "assistencia-tecnica-refrigeracao",
    title: "Assistência Técnica em Refrigeração Residencial, Comercial e Industrial",
    shortTitle: "Assistência Refrigeração",
    metaTitle: "Assistência Técnica em Refrigeração em SC | Santa Catarina Refrigeração",
    metaDescription: "Assistência técnica especializada em refrigeração comercial, industrial e residencial em Navegantes, Penha, Itajaí, Balneário Camboriú e região. Atendimento 24h.",
    h1: "Assistência Técnica em Refrigeração Comercial, Industrial e Residencial em SC",
    summary: "Serviço completo de manutenção corretiva, preventiva e instalação de equipamentos de refrigeração para residências e empresas de Santa Catarina.",
    image: COMPANY_INFO.assets.serviceGeladeira,
    category: "Comercial",
    commonDefects: [
      "Perda de rendimento e temperatura elevada nos equipamentos",
      "Compressores apresentando estalos, alta corrente ou aquecimento",
      "Vazamentos de fluido refrigerante e congelamento de serpentinas",
      "Falhas em controladores digitais, termostatos e quadros de comando"
    ],
    repairsExecuted: [
      "Diagnóstico completo de ciclo frigorífico com manômetros digitais",
      "Recarga de gás refrigerante ecologicamente correto com teste de estanqueidade",
      "Substituição e retrofit de compressores e unidades condensadoras",
      "Elaboração de planos PMOC para estabelecimentos comerciais e industriais"
    ],
    fullDescription: "A Santa Catarina Refrigeração é referência técnica em assistência de sistemas de refrigeração no Litoral e Vale do Itajaí. Atendemos desde pequenos comércios até indústrias alimentícias, oferecendo soluções ágeis para garantir que seus equipamentos operem em máxima eficiência energética e conformidade com as normas da Anvisa.",
    faqs: [
      {
        question: "Qual o prazo de atendimento para chamados de assistência técnica?",
        answer: "Atendemos no mesmo dia para chamados residenciais e oferecemos atendimento emergencial prioritário em até 2 horas para clientes comerciais B2B."
      }
    ]
  },
  {
    id: "refrigeracao-comercial",
    slug: "refrigeracao-comercial",
    title: "Refrigeração Comercial e Manutenção Preventiva PMOC",
    shortTitle: "Refrigeração Comercial",
    metaTitle: "Refrigeração Comercial em SC | Assistência e Manutenção PMOC",
    metaDescription: "Assistência técnica de refrigeração comercial para restaurantes, peixarias, supermercados, açougues e hotéis. Manutenção preventiva e contratos PMOC.",
    h1: "Refrigeração Comercial e Contratos de Manutenção Preventiva PMOC",
    summary: "Atendimento especializado para balcões expositores, cervejeiras, ilhas de congelados, visicoolers e escritórios comerciais.",
    image: COMPANY_INFO.assets.serviceBalcao,
    category: "Comercial",
    commonDefects: [
      "Expositores de bebidas e alimentos aquecendo na alta temporada",
      "Bloqueio de gelo no evaporador e falha nos ciclos de degelo",
      "Ruído excessivo e falhas de ventilação nos condensadores"
    ],
    repairsExecuted: [
      "Limpeza e higienização química de aletas de condensadores",
      "Troca de micromotores e hélices de ventilação",
      "Substituição de gaxetas magnéticas de vedação",
      "Instalação e parametrização de controladores Full Gauge/Carel"
    ],
    fullDescription: "Sua empresa não pode parar por falha no sistema de frio. Atendemos supermercados, padarias, peixarias e restaurantes em todo o Litoral Norte Catarinense com contratos flexíveis e suporte 24h.",
    faqs: [
      {
        question: "Vocês emitem laudo e ART para fiscalização sanitária?",
        answer: "Sim, emitimos laudo técnico, livro de registro PMOC e garantia formal para fiscalizações da Vigilância Sanitária e Órgãos Reguladores."
      }
    ]
  },
  {
    id: "refrigeracao-industrial",
    slug: "refrigeracao-industrial",
    title: "Refrigeração Industrial, Chillers e Centrais Frigoríficas",
    shortTitle: "Refrigeração Industrial",
    metaTitle: "Refrigeração Industrial em SC | Chillers e Centrais Frigoríficas",
    metaDescription: "Manutenção e suporte para refrigeração industrial, túneis de congelamento, chillers e centrais frigoríficas em Santa Catarina.",
    h1: "Refrigeração Industrial e Manutenção de Centrais Frigoríficas",
    summary: "Engenharia e assistência técnica para indústrias frigoríficas, processadoras de pescado e centrais de distribuição.",
    image: COMPANY_INFO.assets.serviceCamaraFria,
    category: "Comercial",
    commonDefects: [
      "Desarme de segurança por alta pressão no rack de compressores",
      "Desgaste mecânico em compressores semi-herméticos e Scroll",
      "Vazamentos em tubulações industriais de refrigeração"
    ],
    repairsExecuted: [
      "Manutenção e substituição de compressores de grande porte",
      "Inspecção e teste de estanqueidade com nitrogênio seco",
      "Revisão de válvulas solenóide e de segurança em centrais"
    ],
    fullDescription: "Prestamos assistência de engenharia para sistemas industriais de alta e baixa temperatura, focando na redução do consumo elétrico e na prevenção de paradas em linhas de produção.",
    faqs: [
      {
        question: "Atendem emergências em indústrias de pescados em Navegantes e Itajaí?",
        answer: "Sim! Nossa localização estratégica permite atendimento ultra-rápido para indústrias no polo pesqueiro e industrial do litoral catarinense."
      }
    ]
  },
  {
    id: "manutencao-refrigeracao",
    slug: "manutencao-refrigeracao",
    title: "Manutenção Preventiva e Corretiva em Refrigeração",
    shortTitle: "Manutenção Refrigeração",
    metaTitle: "Manutenção Preventiva e Corretiva em Refrigeração | SC Refrigeração",
    metaDescription: "Evite prejuízos e paradas imprevistas com nossos planos de manutenção preventiva e corretiva para equipamentos frigoríficos.",
    h1: "Manutenção Preventiva e Corretiva de Equipamentos de Refrigeração",
    summary: "Planos periódicos de revisão e reparos ágeis para maximizar a vida útil e eficiência dos seus equipamentos frigoríficos.",
    image: COMPANY_INFO.assets.serviceGeladeira,
    category: "Comercial",
    commonDefects: [
      "Aumento injustificado na conta de energia elétrica",
      "Ciclos de funcionamento contínuos do compressor",
      "Acúmulo de gelo e vazamentos de água no piso"
    ],
    repairsExecuted: [
      "Higienização completa e desinfecção de serpentinas",
      "Medição de corrente elétrica e tensão de trabalho do motor",
      "Troca preventiva de relés, capacitores e protetores térmicos"
    ],
    fullDescription: "A manutenção preventiva periódica reduz em até 40% o consumo de energia dos equipamentos e previne 80% das quebras emergenciais durante períodos de alta demanda.",
    faqs: [
      {
        question: "Qual a diferença entre manutenção preventiva e corretiva?",
        answer: "A preventiva ajusta e limpa o sistema periodicamente antes que ele quebre. A corretiva repara a peça avariada após a paralisação do equipamento."
      }
    ]
  },
  {
    id: "maquina-de-gelo",
    slug: "maquina-de-gelo",
    title: "Conserto e Manutenção de Máquinas de Gelo Comercial e Industrial",
    shortTitle: "Máquinas de Gelo",
    metaTitle: "Conserto de Máquina de Gelo em SC | Everest, Scotsman, Macom",
    metaDescription: "Assistência técnica especializada em máquinas de gelo comerciais em cubos ou escamas para hotéis, bares, peixarias e restaurantes em SC.",
    h1: "Conserto e Manutenção de Máquinas de Gelo em Cubo e Escama",
    summary: "Reparo rápido e higienização de máquinas de gelo Everest, Macom, Scotsman, Manitowoc e marcas nacionais e importadas.",
    image: COMPANY_INFO.assets.serviceFreezer,
    category: "Comercial",
    commonDefects: [
      "Máquina liga mas não solta os cubos de gelo",
      "Gelo saindo fino, oco ou deformado",
      "Vazamento de água e mofo no reservatório"
    ],
    repairsExecuted: [
      "Desincrustação química e sanitização de placas evaporações",
      "Troca de bombas de água, válvulas de gás quente e sonda de colheita",
      "Substituição de filtros de água de carvão ativado"
    ],
    fullDescription: "Garantimos produção contínua de gelo cristalino e higienizado para estabelecimentos gastronômicos, hoteleiros e pesqueiros em toda a região.",
    faqs: [
      {
        question: "De quanto em quanto tempo devo fazer a higienização da máquina de gelo?",
        answer: "A limpeza e desinfecção do reservatório deve ocorrer a cada 3 a 6 meses para atender às exibições da Anvisa."
      }
    ]
  },
  {
    id: "maquina-de-sorvete",
    slug: "maquina-de-sorvete",
    title: "Conserto e Manutenção de Máquinas de Sorvete e Açaí",
    shortTitle: "Máquinas de Sorvete",
    metaTitle: "Conserto de Máquina de Sorvete Express e Açaí | SC Refrigeração",
    metaDescription: "Assistência técnica de máquinas de sorvete expresso, soft e açaí para sorveterias, lanchonetes e quiosques em SC.",
    h1: "Assistência Técnica de Máquinas de Sorvete Expresso e Açaí",
    summary: "Manutenção mecânica e de refrigeração para cilindros e batedores de máquinas de sorvete soft e açaí.",
    image: COMPANY_INFO.assets.serviceFrigobar,
    category: "Comercial",
    commonDefects: [
      "Massa do sorvete saindo mole ou congelando demais no cilindro",
      "Barulho forte nos batedores internos ou raspadores",
      "Vazamento de calda pelas raspadeiras"
    ],
    repairsExecuted: [
      "Ajuste da expansão de gás no cilindro de congelamento",
      "Troca de raspadores de teflon e vedações de gaxeta",
      "Revisão do sistema elétrico e motores de raspagem"
    ],
    fullDescription: "Sua sorveteria ou quiosque no litoral catarinense precisa de equipamentos perfeitamente regulados na alta temporada. Atendemos com agilidade e peças de reposição.",
    faqs: [
      {
        question: "Vocês atendem sorveterias na praia no verão?",
        answer: "Sim, temos plantão técnico rápido para quiosques e sorveterias em Penha, Piçarras, BC, Itajaí e região."
      }
    ]
  },
  {
    id: "chopeiras",
    slug: "chopeiras",
    title: "Conserto e Manutenção de Chopeiras Comerciais e Najas",
    shortTitle: "Chopeiras",
    metaTitle: "Conserto e Manutenção de Chopeiras e Najas em SC | SC Refrigeração",
    metaDescription: "Assistência técnica de chopeiras elétricas, a gelo, torres Naja e pré-resfriadores para bares, pubs e eventos em SC.",
    h1: "Conserto e Manutenção de Chopeiras Elétricas e Torres Naja",
    summary: "Manutenção preventiva, sanitização de linhas e reparo em compressores e bancos de gelo de chopeiras comerciais.",
    image: COMPANY_INFO.assets.serviceBalcao,
    category: "Comercial",
    commonDefects: [
      "Chopp saindo quente ou apenas com espuma (espumando demais)",
      "Banco de gelo do pré-resfriador derretido",
      "Vazamento de glicol ou água na torre Naja"
    ],
    repairsExecuted: [
      "Sanitização química de serpentinas e linhas de Chopp",
      "Troca de agitadores, bombas de glicol e termostatos",
      "Recarga de gás e substituição de compressores de chopeira"
    ],
    fullDescription: "Chopp trincando de gelado exige chopeira com banco de gelo perfeito e linhas limpas. Atendemos pubs, cervejarias e restaurantes em toda a região com suporte ágil.",
    faqs: [
      {
        question: "Por que a chopeira está soltando só espuma?",
        answer: "Isso acontece quando o banco de gelo derrete por falha no compressor ou quando a pressão de CO2 está desregulada para a temperatura da serpentina."
      }
    ]
  },
  {
    id: "cervejeira",
    slug: "conserto-de-cervejeira",
    title: "Conserto de Cervejeira em Navegantes, Penha e Região",
    shortTitle: "Conserto de Cervejeira",
    metaTitle: "Conserto de Cervejeira em Navegantes, Penha e Região | Santa Catarina Refrigeração",
    metaDescription: "Assistência técnica, diagnóstico e conserto de cervejeiras residenciais e comerciais em Navegantes, Penha e região. Solicite atendimento pelo WhatsApp.",
    h1: "Conserto e Assistência Técnica para Cervejeiras",
    summary: "Assistência técnica e conserto especializado de cervejeiras residenciais e comerciais em Navegantes, Penha, Itajaí, Balneário Camboriú e região.",
    image: COMPANY_INFO.assets.serviceCervejeira,
    category: "Comercial",
    commonDefects: [
      "Cervejeira não gela ou gelando pouco",
      "Cervejeira congelando as bebidas",
      "Cervejeira não liga ou não desliga",
      "Cervejeira fazendo barulho excessivo ou estalos no compressor",
      "Cervejeira vazando água na base ou com dreno entupido",
      "Cervejeira com código de erro no painel ou temperatura oscilando",
      "Problema no compressor, termostato, sensor ou placa eletrônica",
      "Falha no sistema de degelo, ventilação ou vedação da borracha"
    ],
    repairsExecuted: [
      "Diagnóstico técnico completo do sistema elétrico, eletrônico e frigorífico",
      "Substituição de sensores NTC, controladores digitais (Full Gauge / Carel / Coel) e placas eletrônicas",
      "Troca de micromotores ventiladores, hélices e placas de degelo",
      "Conserto de vedação de gaxeta, alinhamento de porta e desobstrução de dreno",
      "Eliminação de microvazamentos de gás e recarga de fluido refrigerante ecológico",
      "Substituição de relés de partida, protetores térmicos e compressores de refrigeração"
    ],
    fullDescription: "A Santa Catarina Refrigeração realiza diagnóstico transparente e conserto de cervejeiras residenciais (varandas gourmet, casas de praia) e comerciais em Navegantes, Penha, Balneário Piçarras, Itajaí, Balneário Camboriú e toda a região. Atendemos bares, restaurantes, lanchonetes, conveniências, mercados, padarias, hotéis, pousadas, clubes e salões de festas. Importante: a falta de refrigeração não significa obrigatoriamente falta de gás. Nosso técnico avalia a alimentação elétrica, sensores, controladores digitais, placa eletrônica, ventilador, condensador, evaporador, sistema de degelo, vedação da porta, dreno, relés e compressor antes de qualquer reparo no próprio local.",
    faqs: [
      {
        question: "Quem conserta cervejeira em Navegantes e Penha?",
        answer: "A Santa Catarina Refrigeração atende em domicílio e estabelecimentos comerciais em Navegantes, Penha e toda a região com equipe técnica especializada."
      },
      {
        question: "Quais tipos de cervejeira são atendidos?",
        answer: "Atendemos cervejeiras residenciais gourmet e comerciais de todas as marcas e capacidades (Metalfrio, Gelopar, Fricon, Venax, Consumax, Hussmann, Imbera, Consul, Midea, etc.)."
      },
      {
        question: "Cervejeira que não gela tem conserto?",
        answer: "Sim! O problema pode ser falha no sensor, micro-motor ventilador, placa eletrônica, bloqueio de gelo no evaporador ou vazamento no circuito frigorífico. Fazemos o diagnóstico no local."
      },
      {
        question: "Por que a cervejeira está congelando as bebidas?",
        answer: "Pode ser desregulagem do controlador digital, sensor de temperatura descalibrado ou relé travado mantendo o compressor ligado continuamente."
      },
      {
        question: "O que causa oscilação de temperatura na cervejeira?",
        answer: "Pode ocorrer devido a borracha de vedação gasta, sensor NTC defeituoso ou sujeira obstruindo o trocador de calor condensador."
      },
      {
        question: "Cervejeira que não liga pode ser problema na placa eletrônica?",
        answer: "Sim, falhas na placa de comando, fusíveis ou capacitores impedem o funcionamento do painel e do motor."
      },
      {
        question: "Quando o compressor precisa ser avaliado?",
        answer: "Quando a cervejeira apresenta ruídos fortes, estalos ao tentar partir, aquecimento elevado ou perda de compressão no ciclo frigorífico."
      },
      {
        question: "Vocês fazem manutenção preventiva em cervejeiras?",
        answer: "Sim! Fazemos higienização de serpentinas, desobstrução de dreno e regulagem de controladores para evitar quebras na alta temporada."
      },
      {
        question: "Fazem recarga de fluido refrigerante em cervejeira?",
        answer: "Sim, com identificação e correção prévia da causa do vazamento para garantir durabilidade."
      },
      {
        question: "O reparo da cervejeira pode ser feito no local?",
        answer: "Sim, nossos técnicos levam ferramental completo e peças de reposição para executar o conserto no local com garantia de 90 dias."
      },
      {
        question: "Como solicitar atendimento pelo WhatsApp e quais informações enviar?",
        answer: "Basta enviar uma mensagem no WhatsApp (47) 99224-5172 informando a marca da cervejeira, modelo, cidade/bairro e o defeito observado para agendamento imediato."
      }
    ]
  }
];
