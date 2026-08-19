export interface CityLocalSEO {
  slug: string;
  name: string;
  state: string;
  ring: 1 | 2 | 3;
  distanceKm: number;
  estimatedMinutes: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  neighborhoods: string[];
  popularLandmarks: string[];
  customSnippet: string;
  longDescription: string;
  highlights: string[];
}

export interface NeighborhoodHighVolume {
  slug: string;
  name: string;
  cityName: string;
  citySlug: string;
  state: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  snippet: string;
  longDescription: string;
  popularPlaces: string[];
}

export const CITIES_DATA: CityLocalSEO[] = [
  // ANEL 1 - Base & Imediato (até 60 km da sede Penha/Navegantes)
  {
    slug: "penha",
    name: "Penha",
    state: "SC",
    ring: 1,
    distanceKm: 0,
    estimatedMinutes: 20,
    coordinates: {
      latitude: -26.7712,
      longitude: -48.6475
    },
    neighborhoods: [
      "Centro", "Armação do Itapocoróy", "Praia Grande", "Gravatá de Penha",
      "Santa Lídia", "São Cristóvão", "Nossa Senhora de Fátima", "Mariscal",
      "Vila Nova", "São Nicolau", "Monjolo"
    ],
    popularLandmarks: ["Beto Carrero World", "Praia da Armação", "Praia Grande", "Capela de São João Batista", "Ponta da Vigia"],
    customSnippet: "Base de operações da Santa Catarina Refrigeração em Penha-SC. Atendimento prioritário e de emergência em até 30 minutos em todos os bairros com peças originais e garantia formal.",
    longDescription: "Sede operacional e base dos técnicos da Santa Catarina Refrigeração. Em Penha/SC, oferecemos o atendimento mais rápido de toda a região, cobrindo residências, condomínios fechados, pousadas e o forte comércio gastronômico do entorno do Parque Beto Carrero World e das praias. Nossas vans de oficina móvel circulam diariamente por Armação, Praia Grande, Santa Lídia e Centro com estoque de kits de degelo, placas eletrônicas, sensores e compressores para solucionar defeitos no mesmo dia sem necessidade de retirar o eletrodoméstico da sua residência.",
    highlights: [
      "Base de atendimento em Penha com chegada média em 20 a 30 minutos",
      "Especialistas em conserto de geladeiras de pousadas e casas de temporada",
      "Peças originais de fábrica para Brastemp, Electrolux, Consul, Samsung e LG",
      "Garantia formal de 90 dias com emissão de recibo e nota técnica"
    ]
  },
  {
    slug: "navegantes",
    name: "Navegantes",
    state: "SC",
    ring: 1,
    distanceKm: 12,
    estimatedMinutes: 20,
    coordinates: {
      latitude: -26.8986,
      longitude: -48.6534
    },
    neighborhoods: [
      "Centro", "Gravatá", "São Pedro", "Meia Praia", "São Domingos",
      "Machados", "Volta Grande", "Pedreiras", "Escalvados", "Porto Escalvado"
    ],
    popularLandmarks: ["Aeroporto Internacional de Navegantes", "Praia de Gravatá", "Portonave", "Ferry Boat", "Molhe Norte"],
    customSnippet: "Atendimento técnico ágil em Gravatá, Centro, Meia Praia e Machados em Navegantes. Conserto em domicílio com garantia de 90 dias e peças originais.",
    longDescription: "Navegantes é um dos polos de maior volume de atendimento de nossa empresa. Com presença constante nas avenidas de Gravatá e Meia Praia, atendemos tanto moradores locais quanto proprietários de imóveis na orla e empresas do complexo portuário Portonave. Nossos técnicos realizam consertos de geladeiras Frost Free, refrigeradores Inverse, máquinas Lava e Seca e câmaras frias comerciais com rapidez e diagnóstico transparente na hora.",
    highlights: [
      "Atendimento prioritário na orla de Gravatá e Meia Praia",
      "Equipe técnica equipada para reparos no mesmo dia em Navegantes",
      "Especialistas em refrigeração marítima, comercial e residencial",
      "Facilidade de pagamento em até 12x no cartão e PIX à vista"
    ]
  },
  {
    slug: "balneario-picarras",
    name: "Balneário Piçarras",
    state: "SC",
    ring: 1,
    distanceKm: 8,
    estimatedMinutes: 15,
    coordinates: {
      latitude: -26.7645,
      longitude: -48.6738
    },
    neighborhoods: [
      "Centro", "Itacolomi", "Nossa Senhora da Paz", "Bela Vista",
      "Santo Antônio", "Morretes", "Nossa Senhora do Rosário"
    ],
    popularLandmarks: ["Praia Central (Bandeira Azul)", "Praia de Itacolomi", "Museu Oceanográfico Univali", "Molhe Norte de Piçarras"],
    customSnippet: "Assistência técnica de refrigeração em Piçarras e Itacolomi. Chegada rápida, orçamento sem compromisso e conserto com garantia por escrito.",
    longDescription: "Vizinha de Penha, Balneário Piçarras conta com suporte diário de nossa equipe de assistência técnica. Cobrimos toda a extensão da orla da Bandeira Azul, desde o Centro até o bairro Itacolomi e a divisa com Barra Velha. Realizamos manutenção preventiva e corretiva em geladeiras Side by Side, French Door, cervejeiras de quiosques e bares da orla e refrigeradores de condomínios residenciais.",
    highlights: [
      "Deslocamento rápido em até 20 minutos para qualquer bairro de Piçarras",
      "Atendimento a condomínios à beira-mar com proteção contra maresia",
      "Técnicos certificados com mais de 10 anos de experiência prática",
      "Orçamento transparente no local antes de iniciar o conserto"
    ]
  },
  {
    slug: "barra-velha",
    name: "Barra Velha",
    state: "SC",
    ring: 1,
    distanceKm: 18,
    estimatedMinutes: 20,
    coordinates: {
      latitude: -26.6325,
      longitude: -48.6836
    },
    neighborhoods: [
      "Centro", "Itajuba", "Praia do Grant", "Tabuleiro", "São Cristóvão",
      "Vila Nova", "Quinta dos Açorianos", "Pedras Brancas"
    ],
    popularLandmarks: ["Praia do Cerro", "Praia de Itajuba", "Ponte Pênsil", "Lagoa de Barra Velha", "Estátua da Liberdade Havan"],
    customSnippet: "Conserto de geladeiras, freezers e lava e seca em Itajuba, Centro e Praia do Grant em Barra Velha. Atendimento a domicílio com peças originais.",
    longDescription: "Barra Velha possui forte demanda por consertos de refrigeração, especialmente no extenso bairro Itajuba e nas regiões de praias e lagoas. Atendemos com agilidade tanto residências fixas quanto casas e apartamentos de veraneio. Nossos profissionais resolvem problemas de geladeira que não gela a parte de baixo, motores estalando, vazamentos de gás e borrachas frouxas no mesmo dia.",
    highlights: [
      "Cobertura completa da BR-101 e bairros litorâneos de Barra Velha",
      "Manutenção especializada para pousadas e restaurantes de pescados",
      "Garantia de 90 dias em todas as peças e serviços executados",
      "Atendimento de emergência para freezers e câmaras de peixarias"
    ]
  },
  {
    slug: "itajai",
    name: "Itajaí",
    state: "SC",
    ring: 1,
    distanceKm: 22,
    estimatedMinutes: 25,
    coordinates: {
      latitude: -26.9078,
      longitude: -48.6619
    },
    neighborhoods: [
      "Praia Brava", "Fazenda", "Centro", "Cordeiros", "São Vicente",
      "Ressacada", "Dom Bosco", "Vila Operária", "São João", "Cabeçudas",
      "Espinheiros", "Itaipava", "Murta", "Santa Regina", "Carvalho"
    ],
    popularLandmarks: ["Praia Brava", "Porto de Itajaí", "Mercado Público de Itajaí", "Igreja Matriz do Santíssimo Sacramento", "Beira-Rio", "Bico do Papagaio"],
    customSnippet: "Técnicos especializados em Itajaí para conserto de geladeiras, Side by Side e lava e seca na Praia Brava, Fazenda, Cordeiros, São Vicente e Centro.",
    longDescription: "Principal polo econômico da foz do Rio Itajaí, a cidade conta com rota diária de nossa frota técnica. Atendemos com máxima pontualidade os sofisticados apartamentos da Praia Brava e Cabeçudas, assim como os populosos bairros de São Vicente, Cordeiros, Vila Operária e Fazenda. Temos ampla expertise em equipamentos inverter de alta tecnologia das marcas Samsung, LG, Electrolux e Brastemp, além de suporte robusto a estabelecimentos comerciais da Beira-Rio.",
    highlights: [
      "Equipe dedicada para a região nobre da Praia Brava e Fazenda",
      "Atendimento comercial 24h para supermercados e peixarias do Porto",
      "Reparo especializado em placas eletrônicas e compressores Inverter",
      "Diagnóstico preciso e orçamento sem compromisso no local"
    ]
  },
  {
    slug: "balneario-camboriu",
    name: "Balneário Camboriú",
    state: "SC",
    ring: 1,
    distanceKm: 32,
    estimatedMinutes: 30,
    coordinates: {
      latitude: -26.9926,
      longitude: -48.6346
    },
    neighborhoods: [
      "Centro", "Pioneiros", "Nações", "Ariribá", "Praia dos Amores",
      "Barra Sul", "Municípios", "Vila Real", "Estados", "Barra", "Estaleiro", "Taquaras"
    ],
    popularLandmarks: ["Avenida Atlântica", "Roda Gigante FG Big Wheel", "Molhe da Barra Sul", "Passarela da Barra", "Parque Unipraias", "Interpraias"],
    customSnippet: "Assistência técnica de alto padrão em Balneário Camboriú. Conserto de refrigeradores French Door, Side by Side e adegas climatizadas no mesmo dia.",
    longDescription: "Balneário Camboriú concentra o maior número de refrigeradores premium importados e nacionais de alto padrão de Santa Catarina. Nossa equipe possui treinamento específico para manuseio e conserto de modelos French Door, Side by Side, adegas climatizadas e máquinas Lava e Seca de embutir. Atendemos com discrição e rapidez os edifícios das Avenidas Atlântica, Brasil, Estados e bairros Nações e Pioneiros.",
    highlights: [
      "Especialistas em refrigeradores de luxo (Side by Side, French Door e Adegas)",
      "Atendimento exclusivo a condomínios residenciais e coberturas",
      "Proteção de piso e ferramentas limpas para ambientes nobres",
      "Peças originais a pronta-entrega para modelos Samsung e LG Inverter"
    ]
  },
  {
    slug: "camboriu",
    name: "Camboriú",
    state: "SC",
    ring: 1,
    distanceKm: 38,
    estimatedMinutes: 35,
    coordinates: {
      latitude: -27.0245,
      longitude: -48.6554
    },
    neighborhoods: [
      "Centro", "Taboleiro", "Monte Alegre", "Santa Regina", "Cedro",
      "Areias", "São Francisco de Assis", "Rio Pequeno", "Santa Lídia"
    ],
    popularLandmarks: ["Paróquia Divino Espírito Santo", "Morro do Pico de Pedra", "Parque Ecológico"],
    customSnippet: "Conserto de geladeiras e linha branca em Camboriú (Centro, Monte Alegre, Taboleiro e Santa Regina). Atendimento domiciliar com garantia 90 dias.",
    longDescription: "Com crescimento acelerado, Camboriú é atendida diariamente por nossos técnicos. Seja no Centro histórico ou nos dinâmicos bairros Monte Alegre, Taboleiro e Areias, levamos soluções rápidas e econômicas para conserto de geladeiras Frost Free, freezers horizontais de minimercados e máquinas de lavar e secar.",
    highlights: [
      "Deslocamento ágil pela rodovia SC-102 e vias municipais",
      "Preços justos e acessíveis com parcelamento facilitado",
      "Garantia formal de 90 dias em todas as ordens de serviço",
      "Técnicos uniformizados e identificados para total segurança"
    ]
  },
  {
    slug: "itapema",
    name: "Itapema",
    state: "SC",
    ring: 1,
    distanceKm: 48,
    estimatedMinutes: 40,
    coordinates: {
      latitude: -27.0908,
      longitude: -48.6111
    },
    neighborhoods: [
      "Meia Praia", "Centro", "Morretes", "Canto da Praia",
      "Jardim Praia Mar", "Casa Branca", "Alto São Bento", "Ilhota (Itapema)"
    ],
    popularLandmarks: ["Praia de Meia Praia", "Mirante do Encanto", "Ponte dos Suspiros", "Canto da Praia dos Pescadores"],
    customSnippet: "Assistência técnica especializada em Meia Praia e Itapema. Conserto de geladeiras, cervejeiras e freezers em domicílio com garantia de 90 dias.",
    longDescription: "Itapema, e com destaque o bairro Meia Praia, representa um polo vibrante de condomínios e alta gastronomia. Nossa assistência técnica oferece atendimento de alto padrão para moradores e proprietários de imóveis de temporada, resolvendo emergências de refrigeração no mesmo dia para que seu lazer e conforto não sejam interrompidos.",
    highlights: [
      "Presença técnica diária na Avenida Nereu Ramos e orla de Meia Praia",
      "Conserto imediato para geladeiras de veraneio e imóveis de locação",
      "Equipamentos de diagnóstico digital de última geração",
      "Garantia de 90 dias com suporte pós-venda direto por WhatsApp"
    ]
  },
  {
    slug: "porto-belo",
    name: "Porto Belo",
    state: "SC",
    ring: 1,
    distanceKm: 55,
    estimatedMinutes: 45,
    coordinates: {
      latitude: -27.1578,
      longitude: -48.5539
    },
    neighborhoods: ["Perequê", "Centro", "Alto Perequê", "Vila Nova", "Balneário Perequê"],
    popularLandmarks: ["Praia de Perequê", "Ilha de Porto Belo", "Marina Porto Belo", "Píer Turístico"],
    customSnippet: "Técnicos qualificados em Perequê e Porto Belo para manutenção de geladeiras, cervejeiras e refrigeradores em domicílio.",
    longDescription: "Atendimento completo para a Costa Esmeralda em Porto Belo e no pujante Balneário Perequê. Prestamos assistência para marinas, pousadas, residências e restaurantes de frutos do mar com técnicos qualificados para conserto de geladeiras, freezers e máquinas de gelo.",
    highlights: [
      "Atendimento prioritário em Perequê e Centro de Porto Belo",
      "Suporte especializado para refrigeração náutica e comercial",
      "Peças genuínas com nota fiscal e garantia de 90 dias"
    ]
  },
  {
    slug: "bombinhas",
    name: "Bombinhas",
    state: "SC",
    ring: 1,
    distanceKm: 62,
    estimatedMinutes: 50,
    coordinates: {
      latitude: -27.1389,
      longitude: -48.5167
    },
    neighborhoods: ["Bombas", "Centro / Bombinhas", "Zimbros", "Canto Grande", "Mariscal", "Quatro Ilhas"],
    popularLandmarks: ["Praia de Bombas", "Praia de Mariscal", "Morro do Macaco", "Praia de Quatro Ilhas", "Praia de Sepultura"],
    customSnippet: "Atendimento para a península de Bombinhas, Bombas e Mariscal. Manutenção rápida para pousadas, restaurantes e moradores locais.",
    longDescription: "Atendemos toda a península de Bombinhas, com agendamentos pontuais para Bombas, Mariscal, Canto Grande e Zimbros. Resolvemos defeitos em refrigeradores duplex, freezers verticais e câmaras frias comerciais de pousadas e buffets com rapidez comprovada.",
    highlights: [
      "Cobertura em toda a península com equipe experiente",
      "Socorro rápido para pousadas e comércio gastronômico",
      "Garantia de 90 dias em todas as manutenções"
    ]
  },
  {
    slug: "ilhota",
    name: "Ilhota",
    state: "SC",
    ring: 1,
    distanceKm: 32,
    estimatedMinutes: 30,
    coordinates: {
      latitude: -26.8997,
      longitude: -48.8272
    },
    neighborhoods: ["Centro", "Baú", "Irmãos", "Ilhotinha", "Minas"],
    popularLandmarks: ["Ponte de Ilhota", "Polo da Moda Íntima e Praia"],
    customSnippet: "Manutenção de refrigeração comercial e residencial em Ilhota com agilidade e peças originais de fábrica.",
    longDescription: "Atendimento ágil para Ilhota no Vale do Itajaí. Cobrimos indústrias têxteis, comércios locais e residências urbanas e rurais com manutenção de geladeiras, freezers e bebedouros industriais.",
    highlights: [
      "Atendimento direto via rodovia Jorge Lacerda",
      "Peças de reposição originais a pronta entrega",
      "Garantia formal de 90 dias por escrito"
    ]
  },
  {
    slug: "luiz-alves",
    name: "Luiz Alves",
    state: "SC",
    ring: 1,
    distanceKm: 38,
    estimatedMinutes: 35,
    coordinates: {
      latitude: -26.7214,
      longitude: -48.9328
    },
    neighborhoods: ["Vila Nova", "Centro", "Ribeirão do Diabo", "Braço do Norte"],
    popularLandmarks: ["Rota das Cachaças de Luiz Alves", "Igreja Matriz São Vicente de Paulo"],
    customSnippet: "Conserto de geladeiras, freezers de resfriamento e câmaras para produtores e moradores de Luiz Alves.",
    longDescription: "Suporte especializado para a Capital da Cachaça em Luiz Alves. Realizamos conserto de freezers de resfriamento, geladeiras familiares e câmaras frias de produtores rurais e alambiques.",
    highlights: [
      "Visita técnica programada no mesmo dia",
      "Orçamento sem compromisso e preço justo",
      "Garantia de 90 dias com peças de fábrica"
    ]
  },
  {
    slug: "gaspar",
    name: "Gaspar",
    state: "SC",
    ring: 1,
    distanceKm: 45,
    estimatedMinutes: 40,
    coordinates: {
      latitude: -26.9317,
      longitude: -48.9592
    },
    neighborhoods: ["Centro", "Sete de Setembro", "Santa Terezinha", "Bela Vista", "Margem Esquerda", "Gasparinho"],
    popularLandmarks: ["Parque Aquático Cascaneia", "Igreja Matriz São Pedro Apóstolo", "Rota das Águas"],
    customSnippet: "Atendimento especializado em Gaspar para refrigeração de padarias, supermercados, pousadas e residências.",
    longDescription: "Atendemos o município de Gaspar com soluções completas de conserto em geladeiras Frost Free, refrigeradores comerciais de parques aquáticos e supermercados, além de máquinas de lavar.",
    highlights: [
      "Equipe técnica com fácil acesso pela BR-470",
      "Atendimento a estabelecimentos turísticos e residenciais",
      "Garantia de 90 dias e facilidade de pagamento"
    ]
  },
  {
    slug: "brusque",
    name: "Brusque",
    state: "SC",
    ring: 1,
    distanceKm: 58,
    estimatedMinutes: 50,
    coordinates: {
      latitude: -27.0978,
      longitude: -48.9106
    },
    neighborhoods: ["Centro", "São Luiz", "Santa Rita", "Guabiruba", "Águas Claras", "Primeiro de Maio", "Maluche", "Dom Joaquim"],
    popularLandmarks: ["FIP - Feira da Moda", "Santuário de Azambuja", "Praça das Esculturas", "Parque Zoobotânico"],
    customSnippet: "Assistência técnica de refrigeração com atendimento agendado e emergencial para residências e empresas de Brusque.",
    longDescription: "Polo industrial e de compras do Vale do Itajaí, Brusque conta com atendimento especializado da Santa Catarina Refrigeração. Nossos técnicos atendem prontamente os bairros Centro, São Luiz, Santa Rita e Maluche para conserto de geladeiras e equipamentos de refrigeração.",
    highlights: [
      "Atendimento estruturado para empresas e famílias de Brusque",
      "Especialistas em compressores Embraco e sistemas Inverter",
      "Garantia de 90 dias em todas as ordens de serviço"
    ]
  },

  // ANEL 2 - Regional (60 a 100 km)
  {
    slug: "sao-joao-batista",
    name: "São João Batista",
    state: "SC",
    ring: 2,
    distanceKm: 72,
    estimatedMinutes: 60,
    coordinates: {
      latitude: -27.2758,
      longitude: -48.8503
    },
    neighborhoods: ["Centro", "Ribanceira", "Krequer", "Timidio", "Cardoso"],
    popularLandmarks: ["Capital Catarinense dos Calçados", "Praça do Sapateiro"],
    customSnippet: "Serviço de manutenção em refrigeração comercial e residencial em São João Batista.",
    longDescription: "Atendemos indústrias calçadistas, comércios e residências de São João Batista no Vale do Rio Tijucas. Realizamos conserto de geladeiras duplex, bebedouros industriais e freezers.",
    highlights: [
      "Atendimento agendado no mesmo dia ou com horário marcado",
      "Peças originais com garantia de 90 dias",
      "Pagamento em até 12x no cartão"
    ]
  },
  {
    slug: "tijucas",
    name: "Tijucas",
    state: "SC",
    ring: 2,
    distanceKm: 65,
    estimatedMinutes: 50,
    coordinates: {
      latitude: -27.2417,
      longitude: -48.6339
    },
    neighborhoods: ["Centro", "Praça", "Universitário", "Areias", "Joáia", "Sul do Rio"],
    popularLandmarks: ["Casarão Gallotti", "Ponte Bulcão Viana", "Igreja Matriz de São Sebastião"],
    customSnippet: "Atendimento para Tijucas com técnicos treinados e facilidade de pagamento no cartão e PIX.",
    longDescription: "Cidade estratégica na foz do Rio Tijucas e margens da BR-101. Atendemos comércios locais, condomínios e residências para consertos rápidos de geladeiras, freezers e lava e seca.",
    highlights: [
      "Fácil acesso pela BR-101 para atendimento rápido",
      "Orçamento transparente no local",
      "Garantia de 90 dias por escrito"
    ]
  },
  {
    slug: "nova-trento",
    name: "Nova Trento",
    state: "SC",
    ring: 2,
    distanceKm: 85,
    estimatedMinutes: 70,
    coordinates: {
      latitude: -27.2839,
      longitude: -48.9297
    },
    neighborhoods: ["Centro", "Vigolo", "Claraíba", "Trinta Réis"],
    popularLandmarks: ["Santuário Santa Paulina", "Santuário Nossa Senhora do Bom Socorro", "Morro da Cruz"],
    customSnippet: "Conserto de geladeiras, freezers e adegas para moradores e hotéis/pousadas do turismo religioso em Nova Trento.",
    longDescription: "Polo do turismo religioso de Santa Catarina, Nova Trento recebe nosso suporte para hotéis, pousadas, restaurantes típicos italianos e residências particulares.",
    highlights: [
      "Atendimento a estabelecimentos turísticos e gastronômicos",
      "Conserto de adegas climatizadas e refrigeradores",
      "Garantia formal de 90 dias"
    ]
  },
  {
    slug: "guabiruba",
    name: "Guabiruba",
    state: "SC",
    ring: 2,
    distanceKm: 68,
    estimatedMinutes: 55,
    coordinates: {
      latitude: -27.0833,
      longitude: -48.9833
    },
    neighborhoods: ["Guabiruba do Sul", "Centro", "Imigrantes", "São Pedro", "Aymoré"],
    popularLandmarks: ["Pelznickelplatz", "Parque das Esculturas", "Trilha da Minas de Botuverá"],
    customSnippet: "Atendimento de assistência técnica em Guabiruba para linha branca e refrigeração comercial.",
    longDescription: "Oferecemos manutenção preventiva e corretiva para os moradores e confecções de Guabiruba, com equipe móvel e peças de reposição originais.",
    highlights: [
      "Técnicos experientes em todas as marcas",
      "Atendimento transparente em domicílio",
      "Garantia de 90 dias"
    ]
  },
  {
    slug: "indaial",
    name: "Indaial",
    state: "SC",
    ring: 2,
    distanceKm: 78,
    estimatedMinutes: 65,
    coordinates: {
      latitude: -26.8983,
      longitude: -49.2319
    },
    neighborhoods: ["Centro", "Tapajós", "Nações", "Estrada das Areias", "Carijós", "Warnow"],
    popularLandmarks: ["Ponte dos Arcos", "Fundação Indaialense de Cultura", "Parque Jorge Hardt"],
    customSnippet: "Técnicos em Indaial para conserto de refrigeradores, geladeiras side by side e máquinas de lavar.",
    longDescription: "Atendimento completo para a cidade de Indaial no Médio Vale do Itajaí. Cobrimos residências e empresas com suporte técnico ágil e eficiente.",
    highlights: [
      "Atendimento via BR-470 com horário agendado",
      "Peças de fábrica para Samsung, LG, Brastemp e Electrolux",
      "Garantia formal de 90 dias"
    ]
  },
  {
    slug: "timbo",
    name: "Timbó",
    state: "SC",
    ring: 2,
    distanceKm: 88,
    estimatedMinutes: 75,
    coordinates: {
      latitude: -26.8242,
      longitude: -49.2717
    },
    neighborhoods: ["Centro", "Quintino", "Pomeranos", "Nações", "Capitais"],
    popularLandmarks: ["Parque Central de Timbó", "Jardim Botânico de Timbó", "Complexo Turístico Pavilhão de Eventos Henry Paul"],
    customSnippet: "Serviço de refrigeração com peças originais e 90 dias de garantia em Timbó e redondezas.",
    longDescription: "A Pérola do Vale conta com atendimento especializado da Santa Catarina Refrigeração. Consertamos refrigeradores modernos, adegas e freezers com agilidade.",
    highlights: [
      "Agendamento pontual em domicílio",
      "Garantia formal por escrito",
      "Técnicos certificados"
    ]
  },
  {
    slug: "pomerode",
    name: "Pomerode",
    state: "SC",
    ring: 2,
    distanceKm: 82,
    estimatedMinutes: 70,
    coordinates: {
      latitude: -26.7408,
      longitude: -49.1764
    },
    neighborhoods: ["Centro", "Testo Central", "Ribeirão Areia", "Testo Alto", "Wunderwald"],
    popularLandmarks: ["Zoo Pomerode", "Rota do Enxaimel", "Osterfest", "Vila Encantada"],
    customSnippet: "Atendimento em Pomerode para pousadas, confeitarias, restaurantes e residências com suporte ágil.",
    longDescription: "Na cidade mais alemã do Brasil, prestamos atendimento técnico de alta precisão para confeitarias típicas, restaurantes coloniais, pousadas charmosas e famílias pomerodenses.",
    highlights: [
      "Manutenção de equipamentos comerciais e residenciais",
      "Técnicos altamente capacitados",
      "Garantia de 90 dias com nota"
    ]
  },
  {
    slug: "jaragua-do-sul",
    name: "Jaraguá do Sul",
    state: "SC",
    ring: 2,
    distanceKm: 85,
    estimatedMinutes: 70,
    coordinates: {
      latitude: -26.4853,
      longitude: -49.0836
    },
    neighborhoods: ["Centro", "Barra do Rio Cerro", "Vila Nova", "Jaraguá Esquerdo", "Ilha da Figueira", "Água Verde"],
    popularLandmarks: ["Chiesetta Alpina", "Parque Malwee", "Arena Jaraguá", "Pico do Jaraguá"],
    customSnippet: "Conserto de geladeiras, freezers e câmaras frias comerciais em Jaraguá do Sul.",
    longDescription: "Grande polo industrial de tecnologia e motores, Jaraguá do Sul conta com nosso atendimento programado para consertos de refrigeradores Inverter, balcões refrigerados e câmaras frias.",
    highlights: [
      "Atendimento técnico com peças originais",
      "Especialistas em sistemas inverter e comerciais",
      "Garantia de 90 dias"
    ]
  },
  {
    slug: "guaramirim",
    name: "Guaramirim",
    state: "SC",
    ring: 2,
    distanceKm: 75,
    estimatedMinutes: 60,
    coordinates: {
      latitude: -26.4736,
      longitude: -49.0033
    },
    neighborhoods: ["Centro", "Avaí", "Bananal do Sul", "Amizade", "Corticeira"],
    popularLandmarks: ["Rodovia BR-280", "Igreja Matriz Santos Anjos"],
    customSnippet: "Equipe técnica disponível para atendimento em domicílio em Guaramirim.",
    longDescription: "Atendimento rápido para Guaramirim e conexões da BR-280 com diagnóstico preciso no local e reparo no mesmo dia.",
    highlights: [
      "Orçamento sem compromisso",
      "Peças genuínas com garantia",
      "Facilidade no pagamento"
    ]
  },
  {
    slug: "schroeder",
    name: "Schroeder",
    state: "SC",
    ring: 2,
    distanceKm: 92,
    estimatedMinutes: 75,
    coordinates: {
      latitude: -26.4114,
      longitude: -49.0736
    },
    neighborhoods: ["Centro", "Schroeder I", "Schroeder II", "Braço do Sul"],
    popularLandmarks: ["Morro do Pelado", "Ponte Pênsil de Schroeder"],
    customSnippet: "Manutenção de eletrodomésticos e equipamentos de refrigeração em Schroeder.",
    longDescription: "Atendimento domiciliar para Schroeder com técnicos capacitados para resolver falhas em refrigeradores, freezers e máquinas lava e seca.",
    highlights: [
      "Visitas técnicas pontuais",
      "Garantia de 90 dias",
      "Peças de reposição de fábrica"
    ]
  },
  {
    slug: "massaranduba",
    name: "Massaranduba",
    state: "SC",
    ring: 2,
    distanceKm: 65,
    estimatedMinutes: 55,
    coordinates: {
      latitude: -26.6117,
      longitude: -49.0083
    },
    neighborhoods: ["Centro", "Campestre", "Guarani-Açu", "Primeiro Braço"],
    popularLandmarks: ["Capital Catarinense do Arroz", "Igreja Sagrado Coração de Jesus"],
    customSnippet: "Conserto de geladeiras e freezers agrícolas/comerciais em Massaranduba.",
    longDescription: "Suporte para a Capital do Arroz, atendendo produtores rurais, residências e comércios com manutenção de refrigeração confiável.",
    highlights: [
      "Atendimento em domicílio e propriedades rurais",
      "Garantia de 90 dias",
      "Preço justo e transparente"
    ]
  },
  {
    slug: "sao-francisco-do-sul",
    name: "São Francisco do Sul",
    state: "SC",
    ring: 2,
    distanceKm: 95,
    estimatedMinutes: 80,
    coordinates: {
      latitude: -26.2428,
      longitude: -48.6381
    },
    neighborhoods: ["Centro Histórico", "Enseada", "Ubatuba", "Paulas", "Rocio Pequeno", "Itaguaçu", "Capri"],
    popularLandmarks: ["Praia da Enseada", "Centro Histórico de São Francisco", "Porto de São Francisco do Sul", "Museu Nacional do Mar", "Forte Marechal Luz"],
    customSnippet: "Atendimento no litoral de São Francisco do Sul (Enseada, Ubatuba e Centro) para refrigeração náutica, residencial e comercial.",
    longDescription: "A cidade mais antiga de Santa Catarina recebe atendimento técnico especializado para residências de veraneio em Enseada e Ubatuba, comércio portuário e centro histórico.",
    highlights: [
      "Atendimento na orla de Enseada, Ubatuba e Itaguaçu",
      "Manutenção em geladeiras, freezers e equipamentos náuticos",
      "Garantia de 90 dias por escrito"
    ]
  },
  {
    slug: "araquari",
    name: "Araquari",
    state: "SC",
    ring: 2,
    distanceKm: 55,
    estimatedMinutes: 45,
    coordinates: {
      latitude: -26.3711,
      longitude: -48.7189
    },
    neighborhoods: ["Itinga", "Centro", "Rainha", "Volta Redonda", "Porto Grande"],
    popularLandmarks: ["Santuário do Senhor Bom Jesus de Araquari", "Polo Industrial Automotivo"],
    customSnippet: "Assistência técnica de refrigeração para Araquari e bairro Itinga com deslocamento ágil.",
    longDescription: "Atendimento em expansão para Araquari e o populoso bairro Itinga, cobrindo indústrias, comércios e residências familiares com serviços de alto padrão.",
    highlights: [
      "Deslocamento rápido via BR-280 e BR-101",
      "Reparo no local com peças originais",
      "Garantia de 90 dias"
    ]
  },
  {
    slug: "biguacu",
    name: "Biguaçu",
    state: "SC",
    ring: 2,
    distanceKm: 92,
    estimatedMinutes: 70,
    coordinates: {
      latitude: -27.4939,
      longitude: -48.6558
    },
    neighborhoods: ["Centro", "Bom Viver", "Praia João Rosa", "Fundos", "Universitário"],
    popularLandmarks: ["Aqueduto de São Miguel", "Praça Nereu Ramos", "Igreja Matriz de São Miguel"],
    customSnippet: "Conserto de refrigeradores, geladeiras comerciais e freezers em Biguaçu com atendimento agendado.",
    longDescription: "Atendimento agendado para o município de Biguaçu na Grande Florianópolis, cobrindo residências e estabelecimentos comerciais com garantia e peças de reposição de fábrica.",
    highlights: [
      "Atendimento agendado com hora marcada",
      "Peças originais de reposição",
      "Garantia de 90 dias"
    ]
  },
  {
    slug: "sao-jose",
    name: "São José",
    state: "SC",
    ring: 2,
    distanceKm: 105,
    estimatedMinutes: 80,
    coordinates: {
      latitude: -27.6136,
      longitude: -48.6364
    },
    neighborhoods: ["Kobrasol", "Campinas", "Barreiros", "Centro Histórico", "Nossa Senhora do Rosário", "Praia Comprida", "Bela Vista"],
    popularLandmarks: ["Beira-Mar de São José", "Shopping Itaguaçu", "Centro Histórico de São José", "Centro Multiuso"],
    customSnippet: "Assistência de refrigeração residencial e comercial em Kobrasol, Campinas e Barreiros em São José.",
    longDescription: "Atendimento programado para a dinâmica cidade de São José, com suporte especializado para condomínios verticais em Kobrasol, Campinas e Barreiros.",
    highlights: [
      "Especialistas em refrigeradores Side by Side e lava e seca",
      "Atendimento com hora marcada",
      "Garantia formal de 90 dias"
    ]
  },
  {
    slug: "palhoca",
    name: "Palhoça",
    state: "SC",
    ring: 2,
    distanceKm: 115,
    estimatedMinutes: 85,
    coordinates: {
      latitude: -27.6453,
      longitude: -48.6678
    },
    neighborhoods: ["Pedra Branca", "Centro", "Ponte do Imaruim", "Passa Vinte", "Pagani", "Enseada do Brito"],
    popularLandmarks: ["Passeio Pedra Branca", "Morro da Cambirela", "Praça das Bandeiras"],
    customSnippet: "Atendimento na Cidade Universitária Pedra Branca, Pagani e Centro de Palhoça com dia agendado.",
    longDescription: "Suporte técnico com agendamento para a moderna Cidade Universitária Pedra Branca, Pagani e bairros centrais de Palhoça.",
    highlights: [
      "Atendimento pontual e transparente",
      "Peças originais de fábrica",
      "Garantia de 90 dias"
    ]
  },
  {
    slug: "rio-do-sul",
    name: "Rio do Sul",
    state: "SC",
    ring: 2,
    distanceKm: 118,
    estimatedMinutes: 95,
    coordinates: {
      latitude: -27.2142,
      longitude: -49.6431
    },
    neighborhoods: ["Centro", "Canta Galo", "Fundo Canoas", "Jardim América", "Santana", "Taboão"],
    popularLandmarks: ["Catedral São João Batista", "Ponte dos Arcos de Rio do Sul", "Parque Universitário"],
    customSnippet: "Agendamento de assistência técnica especializada em refrigeração em Rio do Sul e Alto Vale do Itajaí.",
    longDescription: "Polo do Alto Vale do Itajaí, Rio do Sul conta com nossas visitas técnicas programadas para conserto de equipamentos comerciais, câmaras frias e linha branca residencial.",
    highlights: [
      "Atendimento programado para residências e empresas",
      "Garantia de 90 dias por escrito",
      "Equipe qualificada"
    ]
  }
];

export const HIGH_VOLUME_NEIGHBORHOODS: NeighborhoodHighVolume[] = [
  {
    slug: "gravata",
    name: "Gravatá",
    cityName: "Navegantes",
    citySlug: "navegantes",
    state: "SC",
    coordinates: {
      latitude: -26.8654,
      longitude: -48.6289
    },
    snippet: "Assistência técnica de geladeiras, refrigeradores e lava e seca no bairro Gravatá em Navegantes. Atendimento domiciliar em até 30 minutos com garantia de 90 dias.",
    longDescription: "O bairro Gravatá é o principal polo litorâneo e residencial de Navegantes, com alta concentração de edifícios residenciais, casas de praia, pousadas e comércio gastronômico na Avenida Prefeito Cirino Adolfo Cabral. Nossa equipe técnica possui rota contínua no bairro, realizando consertos de geladeiras Frost Free que não gelam a parte de baixo, substituição de kits de degelo, recarga de gás ecológico R600a, troca de borrachas com vedação reforçada contra a maresia e reparo em máquinas Lava e Seca Samsung e LG com erro de drenagem ou centrifugação.",
    popularPlaces: ["Avenida Prefeito Cirino Adolfo Cabral", "Pedra da Miraguaia", "Praça do Gravatá", "Corredor Gastronômico da Praia"]
  },
  {
    slug: "praia-brava",
    name: "Praia Brava",
    cityName: "Itajaí",
    citySlug: "itajai",
    state: "SC",
    coordinates: {
      latitude: -26.9389,
      longitude: -48.6312
    },
    snippet: "Conserto de refrigeradores premium Side by Side, French Door e Adegas na Praia Brava em Itajaí. Técnicos especializados com atendimento no mesmo dia e garantia 90 dias.",
    longDescription: "A Praia Brava em Itajaí destaca-se por seus empreendimentos imobiliários de alto padrão, beach clubs e residências nobres na Brava Norte e Brava Sul. Nossos profissionais são especialistas certificados no diagnóstico e conserto de refrigeradores importados e nacionais topo de linha, como Samsung Family Hub, LG InstaView, Brastemp Gourmand e adegas termoelétricas ou com compressor. Trabalhamos com protetores de piso, ferramentas limpas e peças 100% genuínas com garantia de 90 dias.",
    popularPlaces: ["Avenida José Medeiros Vieira", "Brava Beach Internacional", "Mirante da Praia Brava", "Shopping Brava Mall"]
  },
  {
    slug: "meia-praia",
    name: "Meia Praia",
    cityName: "Itapema",
    citySlug: "itapema",
    state: "SC",
    coordinates: {
      latitude: -27.1234,
      longitude: -48.6012
    },
    snippet: "Assistência técnica rápida em Meia Praia, Itapema. Conserto de geladeiras, freezers e cervejeiras para condomínios, imóveis de temporada e restaurantes com garantia de 90 dias.",
    longDescription: "Meia Praia é o coração pulsante de Itapema, com milhares de apartamentos na orla e nas avenidas Nereu Ramos e Segunda Avenida. Oferecemos atendimento expresso para resolver problemas de geladeiras que pararam de gelar, motores desarmando disjuntor, vazamentos de água no chão e refrigeradores de imóveis alugados na temporada de verão. Nosso plantão atende no mesmo dia com orçamentos transparentes.",
    popularPlaces: ["Avenida Nereu Ramos", "Segunda Avenida", "Parque das Capivaras", "Calçadão Beira-Mar de Meia Praia"]
  },
  {
    slug: "centro-balneario-camboriu",
    name: "Centro",
    cityName: "Balneário Camboriú",
    citySlug: "balneario-camboriu",
    state: "SC",
    coordinates: {
      latitude: -26.9926,
      longitude: -48.6346
    },
    snippet: "Conserto de geladeiras, lava e seca e adegas no Centro de Balneário Camboriú. Atendimento rápido na Av. Atlântica, Av. Brasil e 3ª Avenida com garantia 90 dias.",
    longDescription: "No Centro de Balneário Camboriú, onde a densidade de edifícios e o ritmo cosmopolita exigem agilidade, nossa equipe atende pontualmente condomínios residenciais na Avenida Atlântica, Avenida Brasil, Avenida Central e Quarta Avenida. Realizamos consertos em domicílio sem necessidade de remover a geladeira ou lavadora do apartamento, economizando tempo e evitando riscos de avarias no transporte.",
    popularPlaces: ["Avenida Atlântica", "Avenida Brasil", "Praça Almirante Tamandaré", "Avenida Central", "Atlântico Shopping"]
  }
];

export function normalizeSlug(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCityBySlug(slug: string): CityLocalSEO | undefined {
  const clean = normalizeSlug(slug).replace(/^conserto-de-geladeira-em-/, "").replace(/^cidades\//, "").replace(/^cidade\//, "");
  return CITIES_DATA.find(c => c.slug === clean || normalizeSlug(c.name) === clean);
}

export function getHighVolumeNeighborhoodBySlug(slug: string): NeighborhoodHighVolume | undefined {
  const clean = normalizeSlug(slug).replace(/^bairros\//, "").replace(/^bairro\//, "");
  return HIGH_VOLUME_NEIGHBORHOODS.find(n => n.slug === clean);
}

export function getAllNeighborhoods(): Array<{ name: string; slug: string; cityName: string; citySlug: string }> {
  const result: Array<{ name: string; slug: string; cityName: string; citySlug: string }> = [];
  CITIES_DATA.forEach(city => {
    city.neighborhoods.forEach(bairro => {
      result.push({
        name: bairro,
        slug: normalizeSlug(bairro),
        cityName: city.name,
        citySlug: city.slug
      });
    });
  });
  return result;
}

export const getNeighborhoodBySlug = getHighVolumeNeighborhoodBySlug;


