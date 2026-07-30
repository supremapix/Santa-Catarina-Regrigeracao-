export interface CityLocalSEO {
  slug: string;
  name: string;
  state: string;
  ring: 1 | 2 | 3;
  distanceKm: number;
  estimatedMinutes: number;
  neighborhoods: string[];
  popularLandmarks: string[];
  customSnippet: string;
}

export const CITIES_DATA: CityLocalSEO[] = [
  // ANEL 1 - Núcleo (até ~50 km)
  {
    slug: "penha",
    name: "Penha",
    state: "SC",
    ring: 1,
    distanceKm: 0,
    estimatedMinutes: 15,
    neighborhoods: ["Armação", "Praia Grande", "Gravatá", "Centro", "Santa Lídia", "Nossa Senhora de Fátima", "São Nicolau"],
    popularLandmarks: ["Beto Carrero World", "Praia da Armação", "Praia do Quilombo", "Praia de São Miguel"],
    customSnippet: "Base de atendimento principal da Santa Catarina Refrigeração em Penha! Atendimento emergencial 24h em domicílio em todos os bairros e praias de Penha com visita grátis."
  },
  {
    slug: "balneario-picarras",
    name: "Balneário Piçarras",
    state: "SC",
    ring: 1,
    distanceKm: 5,
    estimatedMinutes: 10,
    neighborhoods: ["Centro", "Itapocoróia", "Santo Antônio", "Nossa Senhora da Conceição", "Bela Vista"],
    popularLandmarks: ["Orla da Praia de Piçarras", "Molhe Norte", "Museu Oceanográfico Univali"],
    customSnippet: "Deslocamento ultra rápido até Balneário Piçarras em menos de 15 minutos. Atendimento imediato em residências, edifícios da orla e comércios."
  },
  {
    slug: "barra-velha",
    name: "Barra Velha",
    state: "SC",
    ring: 1,
    distanceKm: 18,
    estimatedMinutes: 20,
    neighborhoods: ["Itajuba", "Centro", "Praia do Grant", "São Cristóvão", "Tabuleiro", "Los Angeles"],
    popularLandmarks: ["Estátua da Liberdade Havan", "Lagoa de Barra Velha", "Ponte Pênsil"],
    customSnippet: "Atendimento diário de assistência em refrigeração em Barra Velha e no bairro de Itajuba. Atendemos casas de praia, pousadas e restaurantes."
  },
  {
    slug: "navegantes",
    name: "Navegantes",
    state: "SC",
    ring: 1,
    distanceKm: 22,
    estimatedMinutes: 25,
    neighborhoods: ["Gravatá", "Centro", "São Pedro", "Machados", "Volta Grande", "Meia Praia", "São Domingos"],
    popularLandmarks: ["Aeroporto Internacional de Navegantes", "Ferry Boat", "Praia do Gravatá"],
    customSnippet: "Cobertura completa no Gravatá de Navegantes, centro e bairros residenciais próximos ao aeroporto. Conserto de geladeiras e câmaras frias no mesmo dia."
  },
  {
    slug: "itajai",
    name: "Itajaí",
    state: "SC",
    ring: 1,
    distanceKm: 32,
    estimatedMinutes: 30,
    neighborhoods: ["Praia Brava", "Fazenda", "Centro", "Cabeçudas", "Cordeiros", "São Vicente", "Ressacada", "Dom Bosco"],
    popularLandmarks: ["Porto de Itajaí", "Praia Brava", "Igreja Matriz do Santíssimo Sacramento", "Via Gastronômica"],
    customSnippet: "Atendimento prioritário na Praia Brava, Fazenda e Centro de Itajaí. Técnicos especializados em geladeiras Side by Side, lava e seca e refrigeração comercial de restaurantes e peixarias."
  },
  {
    slug: "balneario-camboriu",
    name: "Balneário Camboriú",
    state: "SC",
    ring: 1,
    distanceKm: 42,
    estimatedMinutes: 38,
    neighborhoods: ["Centro", "Barra Sul", "Pioneiros", "Nações", "Ariribá", "Estados", "Praia dos Amores", "Estaleiro"],
    popularLandmarks: ["Avenida Atlântica", "FG Big Wheel", "Parque Unipraias", "Passarela da Barra"],
    customSnippet: "Especialistas em apartamentos, coberturas e estabelecimentos comerciais em Balneário Camboriú. Atendimento ágil e silencioso para geladeiras de luxo, lava e seca e adegas."
  },
  {
    slug: "camboriu",
    name: "Camboriú",
    state: "SC",
    ring: 1,
    distanceKm: 45,
    estimatedMinutes: 42,
    neighborhoods: ["Centro", "Areias", "Tabuleiro", "Santa Regina", "Monte Alegre", "São Francisco de Assis"],
    popularLandmarks: ["Prefeitura de Camboriú", "Parque Linear", "Cachoeira dos Secos"],
    customSnippet: "Prestação de serviços de refrigeração residencial em Camboriú. Orçamento sem compromisso e garantia de 90 dias em todas as trocas de peças."
  },
  {
    slug: "itapema",
    name: "Itapema",
    state: "SC",
    ring: 1,
    distanceKm: 55,
    estimatedMinutes: 48,
    neighborhoods: ["Meia Praia", "Centro", "Andorrinha", "Morretes", "Tabuleiro dos Olivai", "Canto da Praia"],
    popularLandmarks: ["Orla de Meia Praia", "Mirante do Encanto", "Ponte dos Suspiros"],
    customSnippet: "Atendimento técnico frequente em Meia Praia e Centro de Itapema. Conserto de geladeiras, freezers e equipamentos comerciais para hotéis e imóveis de temporada."
  },
  {
    slug: "porto-belo",
    name: "Porto Belo",
    state: "SC",
    ring: 1,
    distanceKm: 62,
    estimatedMinutes: 55,
    neighborhoods: ["Perequê", "Centro", "Alto Perequê", "Vila Nova", "Balneário Perequê"],
    popularLandmarks: ["Praia de Perequê", "Ilha de Porto Belo", "Marina Porto Belo"],
    customSnippet: "Técnicos qualificados em Perequê e Porto Belo para manutenção de geladeiras, cervejeiras, máquinas de gelo e refrigeradores em domicílio."
  },
  {
    slug: "bombinhas",
    name: "Bombinhas",
    state: "SC",
    ring: 1,
    distanceKm: 70,
    estimatedMinutes: 65,
    neighborhoods: ["Bombas", "Centro / Bombinhas", "Zimbros", "Canto Grande", "Mariscal", "Quatro Ilhas"],
    popularLandmarks: ["Praia de Bombas", "Praia de Mariscal", "Morro do Macaco"],
    customSnippet: "Atendimento para a península de Bombinhas, Bombas e Mariscal. Manutenção rápida para pousadas, restaurantes e moradores locais."
  },
  {
    slug: "ilhota",
    name: "Ilhota",
    state: "SC",
    ring: 1,
    distanceKm: 35,
    estimatedMinutes: 35,
    neighborhoods: ["Centro", "Baú", "Irmãos", "Ilhotinha", "Minas"],
    popularLandmarks: ["Ponte de Ilhota", "Rota da Moda íntima e praia"],
    customSnippet: "Manutenção de refrigeração industrial e residencial em Ilhota com agilidade e peças originais de fábrica."
  },
  {
    slug: "luiz-alves",
    name: "Luiz Alves",
    state: "SC",
    ring: 1,
    distanceKm: 40,
    estimatedMinutes: 40,
    neighborhoods: ["Vila Nova", "Centro", "Ribeirão do Diabo", "Braço do Norte"],
    popularLandmarks: ["Rota das Cachaças de Luiz Alves"],
    customSnippet: "Conserto de geladeiras, freezers de resfriamento e câmaras para produtores e moradores de Luiz Alves."
  },
  {
    slug: "gaspar",
    name: "Gaspar",
    state: "SC",
    ring: 1,
    distanceKm: 48,
    estimatedMinutes: 45,
    neighborhoods: ["Centro", "Sete de Setembro", "Santa Terezinha", "Bela Vista", "Margem Esquerda"],
    popularLandmarks: ["Parque Aquático Cascaneia", "Igreja Matriz São Pedro Apóstolo"],
    customSnippet: "Atendimento especializado em Gaspar para refrigeração de padarias, supermercados e residências."
  },
  {
    slug: "blumenau",
    name: "Blumenau",
    state: "SC",
    ring: 1,
    distanceKm: 58,
    estimatedMinutes: 55,
    neighborhoods: ["Centro", "Vila Nova", "Victor Konder", "Itoupava Norte", "Garcia", "Escola Agrícola", "Fortaleza", "Velha"],
    popularLandmarks: ["Vila Germânica", "Rua XV de Novembro", "FURB", "Parque Ramiro Ruediger"],
    customSnippet: "Atendimento completo em Blumenau para conserto de geladeiras Frost Free, cervejeiras, câmaras frias e lava e seca com garantia escrita."
  },
  {
    slug: "brusque",
    name: "Brusque",
    state: "SC",
    ring: 1,
    distanceKm: 60,
    estimatedMinutes: 55,
    neighborhoods: ["Centro", "São Luiz", "Santa Rita", "Guabiruba", "Águas Claras", "Primeiro de Maio"],
    popularLandmarks: ["Fenafeita", "Santuário de Azambuja", "Praça das Esculturas"],
    customSnippet: "Assistência técnica de refrigeração com atendimento agendado e emergencial para Brusque e região."
  },

  // ANEL 2 - Regional (50 a 120 km)
  {
    slug: "sao-joao-batista",
    name: "São João Batista",
    state: "SC",
    ring: 2,
    distanceKm: 75,
    estimatedMinutes: 65,
    neighborhoods: ["Centro", "Ribanceira", "Krequer", "Timidio"],
    popularLandmarks: ["Capital Catarinense dos Calçados"],
    customSnippet: "Serviço de manutenção em refrigeração comercial e residencial em São João Batista."
  },
  {
    slug: "tijucas",
    name: "Tijucas",
    state: "SC",
    ring: 2,
    distanceKm: 65,
    estimatedMinutes: 55,
    neighborhoods: ["Centro", "Praça", "Universitário", "Areias"],
    popularLandmarks: ["Casarão Gallotti", "Ponte Bulcão Viana"],
    customSnippet: "Atendimento para Tijucas com técnicos treinados e facilidade de pagamento no cartão e PIX."
  },
  {
    slug: "nova-trento",
    name: "Nova Trento",
    state: "SC",
    ring: 2,
    distanceKm: 85,
    estimatedMinutes: 75,
    neighborhoods: ["Centro", "Vigolo", "Claraíba"],
    popularLandmarks: ["Santuário Santa Paulina", "Morro da Cruz"],
    customSnippet: "Conserto de geladeiras, freezers e adegas para moradores e hotéis/pousadas do turismo religioso em Nova Trento."
  },
  {
    slug: "guabiruba",
    name: "Guabiruba",
    state: "SC",
    ring: 2,
    distanceKm: 68,
    estimatedMinutes: 60,
    neighborhoods: ["Guabiruba do Sul", "Centro", "Imigrantes"],
    popularLandmarks: ["Pelznickel", "Parque das Esculturas"],
    customSnippet: "Atendimento de assistência técnica em Guabiruba para linha branca e refrigeração comercial."
  },
  {
    slug: "indaial",
    name: "Indaial",
    state: "SC",
    ring: 2,
    distanceKm: 78,
    estimatedMinutes: 70,
    neighborhoods: ["Centro", "Tapajós", "Nações", "Estrada das Areias"],
    popularLandmarks: ["Ponte dos Arcos", "FIBra"],
    customSnippet: "Técnicos em Indaial para conserto de refrigeradores, geladeiras side by side e máquinas de lavar."
  },
  {
    slug: "timbo",
    name: "Timbó",
    state: "SC",
    ring: 2,
    distanceKm: 88,
    estimatedMinutes: 78,
    neighborhoods: ["Centro", "Quintino", "Pomeranos"],
    popularLandmarks: ["Parque Central de Timbó", "Jardim Botânico"],
    customSnippet: "Serviço de refrigeração com peças originais e 90 dias de garantia em Timbó e redondezas."
  },
  {
    slug: "pomerode",
    name: "Pomerode",
    state: "SC",
    ring: 2,
    distanceKm: 82,
    estimatedMinutes: 75,
    neighborhoods: ["Centro", "Testo Central", "Ribeirão Areia"],
    popularLandmarks: ["Zoo Pomerode", "Rota do Enxaimel", "Osterfest"],
    customSnippet: "Atendimento em Pomerode para pousadas, confeitarias, restaurantes e residências com suporte 24h."
  },
  {
    slug: "jaragua-do-sul",
    name: "Jaraguá do Sul",
    state: "SC",
    ring: 2,
    distanceKm: 85,
    estimatedMinutes: 75,
    neighborhoods: ["Centro", "Barra do Rio Cerro", "Vila Nova", "Jaraguá Esquerdo"],
    popularLandmarks: ["Chiesetta Alpina", "Parque Malwee", "WEG"],
    customSnippet: "Conserto de geladeiras, freezers e câmaras frias comerciais em Jaraguá do Sul."
  },
  {
    slug: "guaramirim",
    name: "Guaramirim",
    state: "SC",
    ring: 2,
    distanceKm: 75,
    estimatedMinutes: 68,
    neighborhoods: ["Centro", "Avaí", "Bananal do Sul"],
    popularLandmarks: ["Rodovia BR-280"],
    customSnippet: "Equipe técnica disponível para atendimento em domicílio em Guaramirim."
  },
  {
    slug: "schroeder",
    name: "Schroeder",
    state: "SC",
    ring: 2,
    distanceKm: 92,
    estimatedMinutes: 80,
    neighborhoods: ["Centro", "Schroeder I", "Schroeder II"],
    popularLandmarks: ["Morro do Pelado"],
    customSnippet: "Manutenção de eletrodomésticos e equipamentos de refrigeração em Schroeder."
  },
  {
    slug: "massaranduba",
    name: "Massaranduba",
    state: "SC",
    ring: 2,
    distanceKm: 65,
    estimatedMinutes: 60,
    neighborhoods: ["Centro", "Camp形状", "Guarani-Açu"],
    popularLandmarks: ["Capital Catarinense do Arroz"],
    customSnippet: "Conserto de geladeiras e freezers agrícolas/comerciais em Massaranduba."
  },
  {
    slug: "joinville",
    name: "Joinville",
    state: "SC",
    ring: 2,
    distanceKm: 72,
    estimatedMinutes: 60,
    neighborhoods: ["Centro", "Atiradores", "America", "Costa e Silva", "Pirabeiraba", "Saguaçu", "Aventureiro", "Glória"],
    popularLandmarks: ["Mirante do Boa Vista", "Escola do Teatro Bolshoi", "Rua das Palmeiras", "Expoville"],
    customSnippet: "Atendimento frequente em Joinville. Equipe especializada em geladeiras Frost Free, side by side, lava e seca e câmaras frias frigoríficas com orçamento sem taxa de deslocamento na aprovação do serviço."
  },
  {
    slug: "sao-francisco-do-sul",
    name: "São Francisco do Sul",
    state: "SC",
    ring: 2,
    distanceKm: 95,
    estimatedMinutes: 85,
    neighborhoods: ["Centro Histórico", "Enseada", "Ubatuba", "Paulas", "Rocio Pequeno"],
    popularLandmarks: ["Praia da Enseada", "Centro Histórico", "Porto de São Francisco do Sul"],
    customSnippet: "Atendimento no litoral de São Francisco do Sul (Enseada, Ubatuba e Centro) para refrigeração náutica, residencial e comercial."
  },
  {
    slug: "araquari",
    name: "Araquari",
    state: "SC",
    ring: 2,
    distanceKm: 55,
    estimatedMinutes: 50,
    neighborhoods: ["Itinga", "Centro", "Rainha", "Volta Redonda"],
    popularLandmarks: ["Santuário do Senhor Bom Jesus", "Polo Industrial"],
    customSnippet: "Assistência técnica de refrigeração para Araquari e bairro Itinga com deslocamento ágil."
  },
  {
    slug: "rio-do-sul",
    name: "Rio do Sul",
    state: "SC",
    ring: 2,
    distanceKm: 118,
    estimatedMinutes: 105,
    neighborhoods: ["Centro", "Canta Galo", "Fundo Canoas", "Jardim América"],
    popularLandmarks: ["Catedral São João Batista", "Ponte dos Arcos"],
    customSnippet: "Agendamento de assistência técnica especializada em refrigeração em Rio do Sul e Alto Vale do Itajaí."
  },
  {
    slug: "florianopolis",
    name: "Florianópolis",
    state: "SC",
    ring: 2,
    distanceKm: 110,
    estimatedMinutes: 90,
    neighborhoods: ["Centro", "Trindade", "Agronômica", "Canasvieiras", "Jurerê Internacional", "Ingleses", "Coqueiros", "Lagoa da Conceição"],
    popularLandmarks: ["Ponte Hercílio Luz", "Jurerê Internacional", "Lagoa da Conceição", "Mercado Público"],
    customSnippet: "Atendimento no Norte da Ilha, Centro e Continente em Florianópolis. Conserto de geladeiras importadas, Side by Side, adegas e câmaras frias."
  },
  {
    slug: "sao-jose",
    name: "São José",
    state: "SC",
    ring: 2,
    distanceKm: 105,
    estimatedMinutes: 85,
    neighborhoods: ["Kobrasol", "Campinas", "Barreiros", "Centro Histórico", "Nossa Senhora do Rosário"],
    popularLandmarks: ["Beira-Mar de São José", "Shopping Itaguaçu"],
    customSnippet: "Assistência de refrigeração residencial e comercial em Kobrasol, Campinas e Barreiros em São José."
  },
  {
    slug: "palhoca",
    name: "Palhoça",
    state: "SC",
    ring: 2,
    distanceKm: 120,
    estimatedMinutes: 100,
    neighborhoods: ["Pedra Branca", "Centro", "Ponte do Imaruim", "Passa Vinte"],
    popularLandmarks: ["Passeio Pedra Branca", "Morro da Cambirela"],
    customSnippet: "Atendimento na Cidade Universitária Pedra Branca e Palhoça com dia agendado."
  },
  {
    slug: "biguacu",
    name: "Biguaçu",
    state: "SC",
    ring: 2,
    distanceKm: 92,
    estimatedMinutes: 75,
    neighborhoods: ["Centro", "Bom Viver", "Praia João Rosa", "Fundos"],
    popularLandmarks: ["Aqueduto de São Miguel", "Praça Nereu Ramos"],
    customSnippet: "Conserto de refrigeradores, geladeiras comerciais e freezers em Biguaçu."
  },

  // ANEL 3 - Extensão (120 a 200 km)
  {
    slug: "rio-negrinho",
    name: "Rio Negrinho",
    state: "SC",
    ring: 3,
    distanceKm: 145,
    estimatedMinutes: 130,
    neighborhoods: ["Centro", "Cruzeiro", "São Rafael"],
    popularLandmarks: ["Maria Fumaça", "Represa de Volta Grande"],
    customSnippet: "Atendimento agendado para Rio Negrinho no Planalto Norte Catarinense."
  },
  {
    slug: "sao-bento-do-sul",
    name: "São Bento do Sul",
    state: "SC",
    ring: 3,
    distanceKm: 138,
    estimatedMinutes: 120,
    neighborhoods: ["Centro", "Oxford", "Serra Alta"],
    popularLandmarks: ["Praça Getúlio Vargas", "Estrada Bonita"],
    customSnippet: "Conserto de refrigeração industrial e linha branca em São Bento do Sul."
  },
  {
    slug: "mafra",
    name: "Mafra",
    state: "SC",
    ring: 3,
    distanceKm: 185,
    estimatedMinutes: 160,
    neighborhoods: ["Centro", "Vila Nova", "Jardim América"],
    popularLandmarks: ["Ponte Metálica Dr. Diniz Assis"],
    customSnippet: "Assistência técnica programada para residências e empresas de Mafra."
  },
  {
    slug: "canoinhas",
    name: "Canoinhas",
    state: "SC",
    ring: 3,
    distanceKm: 198,
    estimatedMinutes: 175,
    neighborhoods: ["Centro", "Campo da Água Verde", "Marcílio Dias"],
    popularLandmarks: ["Igreja Matriz Cristo Rei"],
    customSnippet: "Atendimento sob agendamento prévio para Canoinhas e região."
  },
  {
    slug: "curitibanos",
    name: "Curitibanos",
    state: "SC",
    ring: 3,
    distanceKm: 195,
    estimatedMinutes: 170,
    neighborhoods: ["Centro", "Aparecida", "São Luiz"],
    popularLandmarks: ["UFSC Campus Curitibanos"],
    customSnippet: "Manutenção de câmaras frias e geladeiras comerciais em Curitibanos."
  },
  {
    slug: "lages",
    name: "Lages",
    state: "SC",
    ring: 3,
    distanceKm: 200,
    estimatedMinutes: 180,
    neighborhoods: ["Centro", "Coral", "Sagrado Coração de Jesus", "Guarujá"],
    popularLandmarks: ["Catedral Diocesana", "Morro do Cechinel", "Festa do Pinhão"],
    customSnippet: "Conserto de câmaras frigoríficas e equipamentos de refrigeração no limite de atendimento em Lages na Serra Catarinense."
  },
  {
    slug: "garuva",
    name: "Garuva",
    state: "SC",
    ring: 3,
    distanceKm: 105,
    estimatedMinutes: 90,
    neighborhoods: ["Centro", "Georgia Paula", "Monte Cristo"],
    popularLandmarks: ["Monte Crateús", "Rio São João"],
    customSnippet: "Conserto de geladeiras e refrigeração comercial na divisa de Garuva."
  },
  {
    slug: "itapoa",
    name: "Itapoá",
    state: "SC",
    ring: 3,
    distanceKm: 125,
    estimatedMinutes: 110,
    neighborhoods: ["Itapema do Norte", "Itapoá Centro", "Barra do Saí", "Pontal"],
    popularLandmarks: ["Porto de Itapoá", "Praia de Itapema do Norte"],
    customSnippet: "Atendimento no litoral de Itapoá para imóveis de praia, supermercados e pousadas."
  }
];
