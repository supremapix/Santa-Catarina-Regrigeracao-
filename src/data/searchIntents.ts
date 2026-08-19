export interface SearchIntentItem {
  slug: string;
  category: 'geladeiras' | 'lava-e-seca' | 'comercial' | 'adegas-e-frigobares';
  badge: string;
  badgeColor: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intentQuery: string;
  pain: string;
  rootCause: string;
  causesList: { level: string; title: string; desc: string; priceRange: string }[];
  beforeCallingChecklist: string[];
  urgencyWarning: string;
  effectiveSolution: string;
  timeToSolve: string;
  prefillMsg: string;
  tagService: string;
  videoUrl?: string;
  imageUrl?: string;
  symptoms: string[];
  stepsToSolve: string[];
  faqs: { question: string; answer: string }[];
}

export const SEARCH_INTENTS: SearchIntentItem[] = [
  {
    slug: 'geladeira-nao-gela-parte-de-baixo',
    category: 'geladeiras',
    badge: 'Problema #1 em Frost Free',
    badgeColor: 'bg-cyan-500/20 text-cyan-700 border-cyan-500/40',
    title: 'Geladeira gela no freezer mas NÃO gela na parte de baixo',
    metaTitle: 'Geladeira Não Gela Embaixo: causas e conserto em Navegantes e região | Santa Catarina Refrigeração',
    metaDescription: 'Geladeira congelando em cima e quente embaixo? Saiba as causas reais (sensor NTC, kit degelo, dreno) e conserte hoje em domicílio com garantia de 90 dias.',
    h1: 'Geladeira Gela no Freezer mas Não Gela Embaixo: Causas e Conserto',
    intentQuery: 'geladeira nao gela parte de baixo frost free',
    pain: 'Alimentos estragando na parte inferior, poça de água sob as gavetas e incerteza de como recuperar o refrigerador.',
    rootCause: 'Falha no sistema de degelo automático Frost Free que bloqueia os dutos de ar frio com gelo acumulado.',
    causesList: [
      { level: 'Mais barata / simples', title: 'Dreno de degelo entupido', desc: 'A água do ciclo de degelo não escoa para a bandeja externa, transborda para dentro e congela o duto de ar.', priceRange: 'R$ 140 - R$ 220' },
      { level: 'Causa frequente', title: 'Sensor de temperatura / degelo NTC descalibrado', desc: 'O sensor envia leitura incorreta para a placa, impedindo o acionamento da resistência térmica.', priceRange: 'R$ 180 - R$ 280' },
      { level: 'Intermediária', title: 'Resistência de degelo queimada ou termo-fusível aberto', desc: 'Sem a resistência funcionando, a cada 8 horas uma nova camada de gelo se acumula na serpentina até tapar o ventilador.', priceRange: 'R$ 220 - R$ 380' },
      { level: 'Mais complexa', title: 'Damper termostático ou placa eletrônica travada', desc: 'A portinhola que dosa o ar frio não abre ou a placa não envia sinal de degelo.', priceRange: 'R$ 280 - R$ 490' }
    ],
    beforeCallingChecklist: [
      'Verifique se a saída de ar no fundo das prateleiras não está tampada por panelas ou potes grandes.',
      'Confira se a borracha da porta está vedando perfeitamente (faça o teste da folha de papel).',
      'Observe se o ventilador do congelador gira normalmente quando o interruptor da porta é pressionado.'
    ],
    urgencyWarning: 'Se a geladeira já está sem gelar há mais de 24h, retire laticínios e carnes imediatamente para não estragar. Não tente raspar o gelo com faca no evaporador pois furar a tubulação causará perda total do gás!',
    effectiveSolution: 'Testamos a resistência e sensores com multímetro digital. Realizamos a troca do kit de degelo original e desobstrução do dreno no mesmo dia no local.',
    timeToSolve: 'Conserto em 45 a 90 minutos no local',
    prefillMsg: 'Olá! Minha geladeira gela no freezer mas não gela embaixo. Gostaria de um orçamento sem compromisso.',
    tagService: 'Geladeiras',
    symptoms: [
      'Congelador funcionando perfeitamente mas o refrigerador fica morno',
      'Acúmulo grosso de gelo na parede do fundo do freezer',
      'Vazamento de água dentro da geladeira em baixo das gavetas de legumes',
      'Motor/compressor trabalhando continuamente sem desligar'
    ],
    stepsToSolve: [
      'Diagnóstico com multímetro digital para aferição dos sensores NTC e fusível térmico',
      'Teste de continuidade e ohmagem da resistência de degelo',
      'Substituição do kit de degelo defeituoso por peças 100% originais de fábrica',
      'Desobstrução do canal do dreno com higienização química para evitar retorno do problema',
      'Aferição do damper termostático e fluxo de ar frio (airflow)'
    ],
    faqs: [
      {
        question: 'Posso desligar a geladeira da tomada para descongelar e ver se volta a funcionar?',
        answer: 'Desligar por 24h irá derreter o gelo nos dutos e fazer a geladeira gelar por 2 a 5 dias temporariamente. No entanto, sem consertar a peça defeituosa do degelo, o bloco de gelo retornará e o problema reaparecerá. O ideal é solicitar o diagnóstico do técnico.'
      },
      {
        question: 'Quanto custa a troca do kit de degelo da geladeira?',
        answer: 'O valor varia entre R$ 180 e R$ 380 conforme o modelo e marca (Brastemp, Electrolux, Consul, Samsung, LG). Apresentamos orçamento transparente no local antes de qualquer execução.'
      }
    ]
  },
  {
    slug: 'geladeira-nao-gela-nada',
    category: 'geladeiras',
    badge: 'Urgência Crítica',
    badgeColor: 'bg-red-500/20 text-red-700 border-red-500/40',
    title: 'Geladeira não gela nem o freezer nem o refrigerador',
    metaTitle: 'Geladeira Não Gela Nada: causas e conserto em Navegantes e região | Santa Catarina Refrigeração',
    metaDescription: 'Geladeira totalmente quente no freezer e embaixo? Compressor parado ou vazamento de gás? Atendimento de emergência no mesmo dia com garantia formal de 90 dias.',
    h1: 'Geladeira Não Gela Nada: Causas, Diagnóstico e Conserto Rápido',
    intentQuery: 'geladeira nao gela nada nem freezer nem embaixo',
    pain: 'Perda iminente de todos os mantimentos congelados e refrigerados, sensação de desespero e necessidade de socorro técnico no mesmo dia.',
    rootCause: 'Falta de circulação de fluido refrigerante por vazamento, queima/travamento do compressor ou defeito grave na placa de potência.',
    causesList: [
      { level: 'Mais barata / simples', title: 'Relé de partida ou protetor térmico queimado', desc: 'O compressor tenta ligar, estala e desliga em segundos sem gelar.', priceRange: 'R$ 160 - R$ 260' },
      { level: 'Causa frequente', title: 'Placa eletrônica de comando queimada por surto de tensão', desc: 'Oscilações na rede elétrica queimam o circuito inversor ou transformador da placa.', priceRange: 'R$ 240 - R$ 480' },
      { level: 'Intermediária', title: 'Micro-vazamento de gás refrigerante (R134a / R600a)', desc: 'O motor funciona quente mas as serpentinas permanecem em temperatura ambiente.', priceRange: 'R$ 220 - R$ 450' },
      { level: 'Mais complexa', title: 'Compressor travado mecanicamente ou sem compressão', desc: 'O motor está energizado mas não bombeia o refrigerante pelas tubulações.', priceRange: 'R$ 550 - R$ 1.150' }
    ],
    beforeCallingChecklist: [
      'Verifique se a tomada está fornecendo energia (teste com outro eletrodoméstico como liquidificador ou secador).',
      'Ouça atentamente na parte traseira se o motor faz algum som ou se está totalmente silencioso.',
      'Sinta com a mão na lateral ou traseira se há calor. Se estiver totalmente fria após horas ligada, não há circulação de gás.'
    ],
    urgencyWarning: 'Caso o compressor esteja emitindo estalos quentes seguidos de silêncio, retire o aparelho da tomada para evitar queima definitiva do enrolamento do motor.',
    effectiveSolution: 'Aferição de corrente elétrica, teste do relé, verificação de pressão do gás com manifold digital e teste da placa de potência.',
    timeToSolve: 'Atendimento de emergência hoje (60 a 120 min de conserto)',
    prefillMsg: 'Olá! Minha geladeira parou totalmente de gelar (nem freezer nem embaixo). Preciso de atendimento urgente!',
    tagService: 'Geladeiras',
    symptoms: [
      'Freezer e refrigerador totalmente quentes',
      'Motor não faz barulho ou apenas emite cliques a cada 2 minutos',
      'Luz interna acende mas o motor não parte',
      'Laterais da geladeira completamente frias'
    ],
    stepsToSolve: [
      'Inspeção elétrica da tomada e cabo de alimentação',
      'Teste de continuidade e ohmagem das bobinas do compressor',
      'Medição da pressão manométrica do sistema de gás',
      'Reparo elétrico ou recarga completa de fluido ecológico'
    ],
    faqs: [
      {
        question: 'Se a luz interna acende, o problema pode ser a tomada?',
        answer: 'Não. Se a luz acende, a energia está chegando ao aparelho. O defeito está no relé de partida, termostato, placa eletrônica ou compressor.'
      },
      {
        question: 'Compensa consertar ou trocar uma geladeira que parou totalmente?',
        answer: 'Em cerca de 80% dos casos o defeito é apenas um relé, capacitor ou placa eletrônica que custa uma fração pequena do preço de uma geladeira nova. Nossos técnicos orientam com total transparência se vale a pena consertar.'
      }
    ]
  },
  {
    slug: 'geladeira-apitando-piscando-motor-estalando',
    category: 'geladeiras',
    badge: 'Falha Eletrônica / Partida',
    badgeColor: 'bg-amber-500/20 text-amber-700 border-amber-500/40',
    title: 'Geladeira apitando, piscando luzes ou motor estalando sem partir',
    metaTitle: 'Geladeira Apitando ou Piscando: causas e conserto em Navegantes e região | Santa Catarina Refrigeração',
    metaDescription: 'Geladeira apitando alarme sem parar, painel piscando ou motor dando estalos? Veja as causas e agende reparo de placa e partida em domicílio com garantia 90 dias.',
    h1: 'Geladeira Apitando, Painel Piscando ou Motor Estalando: Como Resolver',
    intentQuery: 'geladeira apitando piscando luzes motor estalando',
    pain: 'Ruído sonoro contínuo e estressante, luzes piscando como árvore de natal e medo de queimar o motor.',
    rootCause: 'Falha no sensor da porta, desconfiguração da placa de interface ou defeito no conjunto relé/capacitor do compressor.',
    causesList: [
      { level: 'Mais simples', title: 'Interruptor ou sensor magnético de porta aberta falhando', desc: 'A geladeira acredita que a porta está aberta e dispara o alarme sonoro.', priceRange: 'R$ 120 - R$ 190' },
      { level: 'Causa frequente', title: 'Relé de partida PTC ou capacitor eletrolítico desgastado', desc: 'Causa os estalos no motor e impede a partida suave do compressor.', priceRange: 'R$ 160 - R$ 260' },
      { level: 'Intermediária', title: 'Placa eletrônica de potência com trilhas oxidadas pela maresia', desc: 'Muito comum no litoral de SC devido à umidade e salinidade do ar.', priceRange: 'R$ 250 - R$ 460' },
      { level: 'Mais complexa', title: 'Módulo Inverter IPM em curto', desc: 'Necessita substituição do módulo inversor de frequência.', priceRange: 'R$ 380 - R$ 680' }
    ],
    beforeCallingChecklist: [
      'Pressione com firmeza o interruptor da porta para verificar se o apito para.',
      'Verifique se não há sobrepeso na porta desalinhando o fechamento do ímã.',
      'Desconecte da tomada por 10 minutos para resetar a memória da placa de controle.'
    ],
    urgencyWarning: 'Não deixe o motor estalando por horas contínuas, pois os estalos sucessivos superaquecem o protetor térmico e podem queimar a bobina do compressor.',
    effectiveSolution: 'Reparo ou reprogramação da placa eletrônica original, substituição de relés e protetor térmico com peças de fábrica no mesmo dia.',
    timeToSolve: 'Diagnóstico e reparo em 40 a 70 minutos',
    prefillMsg: 'Olá! Minha geladeira está apitando/piscando ou o motor fica dando estalos sem gelar.',
    tagService: 'Geladeiras',
    symptoms: [
      'Motor dá um estalo a cada poucos minutos mas não liga',
      'Luzes do painel piscando de forma desordenada',
      'Alarme sonoro de porta aberta apitando mesmo com a porta fechada',
      'Geladeira desligando totalmente e ligando após horas'
    ],
    stepsToSolve: [
      'Teste de carga do compressor Inverter/Linear ou convencional',
      'Medição de tensão no relé PTC e protetor térmico de partida',
      'Análise de capacitores e componentes SMD na placa eletrônica de potência',
      'Troca do componente queimado ou instalação de relé/capacitor reforçado'
    ],
    faqs: [
      {
        question: 'Se o motor está estalando, significa que o compressor queimou?',
        answer: 'Nem sempre! Na maioria das vezes (cerca de 70% dos casos), o defeito está no relé de partida ou capacitor que custa muito menos que o compressor novo. Nosso técnico testa o motor isoladamente para dar a resposta exata.'
      },
      {
        question: 'A maresia do litoral pode fazer a geladeira apitar?',
        answer: 'Sim! A umidade e o sal no ar de Penha, Piçarras, Navegantes e Balneário oxidam os contatos dos sensores de porta e placas eletrônicas, causando leitura falsa de porta aberta.'
      }
    ]
  },
  {
    slug: 'vazamento-de-agua-geladeira-troca-borracha',
    category: 'geladeiras',
    badge: 'Vedação & Drenagem',
    badgeColor: 'bg-blue-500/20 text-blue-700 border-blue-500/40',
    title: 'Vazamento de água sob a geladeira ou troca de borracha',
    metaTitle: 'Vazamento de Água e Troca de Borracha de Geladeira: causas e conserto | SC Refrigeração',
    metaDescription: 'Geladeira vazando água no chão ou dentro da gaveta? Borracha ressecada ou dreno entupido? Conserto rápido em domicílio com garantia de 90 dias.',
    h1: 'Vazamento de Água e Troca de Borracha da Geladeira',
    intentQuery: 'geladeira vazando agua no chao troca borracha',
    pain: 'Chão da cozinha molhado estufando móveis planejados, poça de água dentro da geladeira e borracha soltando ar frio.',
    rootCause: 'Borracha (gaxeta) ressecada que permite entrada de ar úmido gerando condensação excessiva, ou dreno de degelo obstruído.',
    causesList: [
      { level: 'Mais simples', title: 'Bandeja de evaporação sobre o compressor trincada ou fora de posição', desc: 'A água do degelo pinga direto no chão em vez de evaporar com o calor do motor.', priceRange: 'R$ 120 - R$ 180' },
      { level: 'Causa frequente', title: 'Canal do dreno de degelo entupido com sujeira/lodo', desc: 'A água transborda para dentro do refrigerador por baixo das gavetas de legumes.', priceRange: 'R$ 140 - R$ 220' },
      { level: 'Intermediária', title: 'Gaxeta de vedação da porta ressecada ou rasgada', desc: 'O ar quente de fora entra sem parar, provocando suor e escorrimento contínuo de água.', priceRange: 'R$ 150 - R$ 260' },
      { level: 'Mais complexa', title: 'Mangueira interna de abastecimento de água furada (Side by Side)', desc: 'Vazamento contínuo da linha de água do dispenser e fábrica de gelo.', priceRange: 'R$ 220 - R$ 380' }
    ],
    beforeCallingChecklist: [
      'Passe um papel toalha por baixo da geladeira para verificar de onde vem a água.',
      'Verifique se os drenos internos não estão tampados por restos de alimentos ou folhas de verduras.',
      'Faça o teste da folha de papel na borracha da porta: feche a porta com a folha e tente puxar; se sair sem resistência, a borracha precisa de ajuste ou troca.'
    ],
    urgencyWarning: 'Água constante no piso danifica rodapés de madeira e móveis planejados da cozinha, além de criar risco de curto-circuito caso atinja a fiação do motor.',
    effectiveSolution: 'Desobstrução do dreno, troca de bandeja de evaporação e instalação de borracha original com ímã de alta fixação.',
    timeToSolve: 'Conserto no local em 30 a 60 minutos',
    prefillMsg: 'Olá! Minha geladeira está vazando água / precisa trocar a borracha de vedação. Gostaria de um orçamento.',
    tagService: 'Geladeiras',
    symptoms: [
      'Poça de água no chão na frente ou atrás da geladeira',
      'Água acumulada embaixo da gaveta de frutas e legumes',
      'Paredes internas suando e pingando sobre os alimentos',
      'Borracha da porta solta, rasgada ou com mofo preto'
    ],
    stepsToSolve: [
      'Localização do ponto de vazamento térmico ou hidráulico',
      'Limpeza pressurizada do duto de dreno com bactericida',
      'Substituição da gaxeta magnética sob medida',
      'Alinhamento e nivelamento das portas'
    ],
    faqs: [
      {
        question: 'Posso usar secador de cabelo para ajeitar a borracha da geladeira?',
        answer: 'O secador ajuda a amolecer pequenas dobras temporariamente, mas se a borracha estiver ressecada ou com o ímã enfraquecido, ela continuará vazando ar frio e aumentando o consumo de energia.'
      },
      {
        question: 'Trocar a borracha reduz a conta de luz?',
        answer: 'Sim! Uma borracha bem vedada reduz o tempo de funcionamento do motor em até 30%, gerando economia direta na conta de energia.'
      }
    ]
  },
  {
    slug: 'geladeira-fazendo-barulho-alto',
    category: 'geladeiras',
    badge: 'Ruído & Vibração',
    badgeColor: 'bg-slate-500/20 text-slate-700 border-slate-500/40',
    title: 'Geladeira fazendo barulho alto ou ruído estranho',
    metaTitle: 'Geladeira Fazendo Barulho Alto: causas e conserto em Navegantes e região | Santa Catarina Refrigeração',
    metaDescription: 'Geladeira vibrando forte, zumbido alto ou hélice batendo no gelo? Diagnóstico preciso no mesmo dia em residências com garantia formal de 90 dias.',
    h1: 'Geladeira Fazendo Barulho Alto ou Estranho: O que Pode Ser?',
    intentQuery: 'geladeira fazendo barulho alto vibracao estalo',
    pain: 'Barulho incômodo durante a noite, vibração nas portas e medo de o motor estourar ou queimar.',
    rootCause: 'Hélice do moto-ventilador batendo em gelo acumulado, amortecedores de borracha do compressor gastos ou desgaste interno mecânico do motor.',
    causesList: [
      { level: 'Mais simples', title: 'Geladeira desnivelada ou encostada na parede/móvel', desc: 'A vibração natural do motor ressoa na parede amplificando o som.', priceRange: 'R$ 80 - R$ 140' },
      { level: 'Causa frequente', title: 'Hélice do moto-ventilador raspando no bloco de gelo do degelo', desc: 'Gera um barulho estridente que para assim que a porta é aberta.', priceRange: 'R$ 160 - R$ 260' },
      { level: 'Intermediária', title: 'Coxins de borracha do compressor ressecados', desc: 'As borrachas antivibração perdem a flexibilidade e transmitem o choque mecânico para a carcaça.', priceRange: 'R$ 140 - R$ 220' },
      { level: 'Mais complexa', title: 'Desgaste interno dos pistões/molas do compressor', desc: 'Zumbido metálico grave ou batida de biela no motor.', priceRange: 'R$ 550 - R$ 980' }
    ],
    beforeCallingChecklist: [
      'Afaste a geladeira cerca de 10 a 15 cm da parede para ver se o ruído diminui.',
      'Abra a porta do congelador: se o barulho parar imediatamente, é o ventilador batendo no gelo.',
      'Verifique se os pés niveladores dianteiros estão firmemente apoiados no piso.'
    ],
    urgencyWarning: 'Se o barulho for de atrito metálico forte acompanhado de superaquecimento na carcaça traseira, desligue o aparelho da tomada para não fundir o motor.',
    effectiveSolution: 'Descongelamento técnico, troca do moto-ventilador ou substituição dos amortecedores e revisão mecânica.',
    timeToSolve: '40 a 60 minutos em domicílio',
    prefillMsg: 'Olá! Minha geladeira está fazendo um barulho muito alto e estranho. Gostaria de uma avaliação técnica.',
    tagService: 'Geladeiras',
    symptoms: [
      'Ruído tipo turbina de avião ou hélice batendo',
      'Vibração forte que faz tremer os copos nas prateleiras',
      'Barulho cessa quando a porta é aberta',
      'Zumbido elétrico agudo contínuo'
    ],
    stepsToSolve: [
      'Aferição acústica e inspeção do conjunto moto-ventilador',
      'Verificação do nível de gelo no evaporador e calha',
      'Ajuste e troca de coxins e presilhas antivibração',
      'Nivelamento micrométrico dos pés de apoio'
    ],
    faqs: [
      {
        question: 'É normal a geladeira Frost Free fazer barulhos de estalo ou água correndo?',
        answer: 'Estalos leves de dilatação térmica do gabinete e som suave de expansão de gás são normais. Porém ruídos metálicos, ronco contínuo ou hélice raspando indicam defeito mecânico ou acúmulo de gelo.'
      }
    ]
  },
  {
    slug: 'motor-da-geladeira-nao-desliga',
    category: 'geladeiras',
    badge: 'Consumo Excessivo',
    badgeColor: 'bg-orange-500/20 text-orange-700 border-orange-500/40',
    title: 'Motor da geladeira não desliga / funcionando direto',
    metaTitle: 'Motor da Geladeira Não Desliga: causas e conserto em Navegantes e região | Santa Catarina Refrigeração',
    metaDescription: 'Geladeira funcionando 24h sem desligar e esquentando as laterais? Termostato ou perda de gás? Agende conserto domiciliar com 90 dias de garantia.',
    h1: 'Motor da Geladeira Não Desliga: Causas e Riscos',
    intentQuery: 'motor da geladeira nao desliga funciona direto',
    pain: 'Conta de luz explodindo no final do mês, compressor trabalhando superaquecido e risco iminente de queima do motor.',
    rootCause: 'Termostato ou sensor de temperatura avariado que não reconhece o ponto de corte de frio, ou perda parcial de fluido refrigerante.',
    causesList: [
      { level: 'Mais simples', title: 'Regulagem no nível máximo de frio em dias muito quentes', desc: 'Ajuste incorreto que força o aparelho a atingir temperaturas desnecessárias.', priceRange: 'R$ 0 (ajuste pelo usuário)' },
      { level: 'Causa frequente', title: 'Termostato eletromecânico com contato colado', desc: 'O bulbo térmico perde a sensibilidade e o circuito elétrico nunca corta a energia.', priceRange: 'R$ 160 - R$ 260' },
      { level: 'Intermediária', title: 'Sensor de temperatura do refrigerador descalibrado', desc: 'Informa à placa que está quente mesmo com a geladeira já resfriada.', priceRange: 'R$ 180 - R$ 280' },
      { level: 'Mais complexa', title: 'Micro-vazamento de gás refrigerante com baixa compressão', desc: 'O motor trabalha sem parar pois não consegue atingir a temperatura de desligamento.', priceRange: 'R$ 250 - R$ 480' }
    ],
    beforeCallingChecklist: [
      'Gire o botão do termostato para a posição mínima (1) e observe se o motor desliga.',
      'Verifique se a borracha da porta está vedando 100%.',
      'Confira se há espaço suficiente de ventilação nas laterais e traseira da geladeira.'
    ],
    urgencyWarning: 'O funcionamento contínuo do compressor sem os ciclos de descanso reduz a vida útil do motor pela metade e pode queimar o enrolamento elétrico por fadiga térmica.',
    effectiveSolution: 'Substituição do termostato/sensor com teste de histerese e verificação da pressão do fluido refrigerante.',
    timeToSolve: '45 a 60 minutos no local',
    prefillMsg: 'Olá! O motor da minha geladeira não está desligando, fica direto ligado. Gostaria de agendar uma visita.',
    tagService: 'Geladeiras',
    symptoms: [
      'Compressor funcionando 24 horas por dia',
      'Laterais do refrigerador extremamente quentes',
      'Alimentos na parte de baixo começando a congelar',
      'Aumento notável na fatura de energia elétrica'
    ],
    stepsToSolve: [
      'Medição da temperatura interna com termômetro digital a laser',
      'Teste elétrico de abertura e fechamento dos contatos do termostato',
      'Verificação da curva de resistência dos sensores NTC',
      'Troca da peça defeituosa e calibração de fábrica'
    ],
    faqs: [
      {
        question: 'Quantas vezes por hora uma geladeira normal deve desligar?',
        answer: 'Em média, um refrigerador convencional liga de 2 a 3 vezes por hora, permanecendo ligado de 15 a 25 minutos em cada ciclo dependendo da temperatura ambiente e abertura de portas.'
      }
    ]
  },
  {
    slug: 'geladeira-desarmando-o-disjuntor',
    category: 'geladeiras',
    badge: 'Segurança Elétrica',
    badgeColor: 'bg-red-500/20 text-red-700 border-red-500/40',
    title: 'Geladeira desarmando o disjuntor da casa ou dando choque',
    metaTitle: 'Geladeira Desarmando Disjuntor: causas e conserto em Navegantes e região | Santa Catarina Refrigeração',
    metaDescription: 'Geladeira caindo o disjuntor ou dando choque na porta? Curto na resistência ou motor? Chame socorro técnico seguro com garantia de 90 dias.',
    h1: 'Geladeira Desarmando Disjuntor ou Dando Choque: Perigo Elétrico',
    intentQuery: 'geladeira desarmando disjuntor dando choque',
    pain: 'Casa ficando sem energia elétrica ao ligar a geladeira, medo de choque elétrico em crianças ou idosos e risco de incêndio.',
    rootCause: 'Fuga de corrente elétrica para a carcaça metálica provocada por resistência de degelo em curto, fiação desgastada ou queima de bobina do compressor.',
    causesList: [
      { level: 'Causa frequente #1', title: 'Resistência de degelo com infiltração de água', desc: 'A blindagem da resistência racha e a água do degelo causa curto direto com a carcaça.', priceRange: 'R$ 220 - R$ 360' },
      { level: 'Causa frequente #2', title: 'Moto-ventilador ou fiação roída/desencapada', desc: 'Fios encostando na chapa metálica de proteção.', priceRange: 'R$ 160 - R$ 260' },
      { level: 'Mais complexa', title: 'Compressor com fuga de corrente na carcaça (motor em massa)', desc: 'Isolamento interno do estator rompido que joga fase para o chassi.', priceRange: 'R$ 550 - R$ 980' }
    ],
    beforeCallingChecklist: [
      'Não toque na geladeira descalço ou com as mãos molhadas.',
      'Desconecte o plugue da tomada imediatamente até a chegada do técnico.',
      'Não tente substituir o disjuntor da casa por um maior, pois isso retira a proteção contra incêndios.'
    ],
    urgencyWarning: 'Risco real de choque elétrico grave! Mantenha crianças e animais afastados do aparelho e mantenha-o desligado da tomada.',
    effectiveSolution: 'Teste de isolamento elétrico com megômetro, localização da fuga de corrente e substituição do componente em curto.',
    timeToSolve: '45 a 80 minutos em domicílio',
    prefillMsg: 'Olá! Minha geladeira está desarmando o disjuntor da casa / dando choque. Preciso de socorro técnico urgente.',
    tagService: 'Geladeiras',
    symptoms: [
      'Disjuntor ou DR da residência desarma segundos após colocar a geladeira na tomada',
      'Formigamento ou choque ao tocar no puxador ou carcaça metálica',
      'Cheiro leve de queimado próximo ao motor ou evaporador'
    ],
    stepsToSolve: [
      'Teste de isolamento em todos os componentes de alta tensão com megômetro',
      'Desconexão individual de resistência, ventilador e compressor para isolar a peça com fuga',
      'Substituição da peça blindada defeituosa',
      'Aferição do aterramento da tomada'
    ],
    faqs: [
      {
        question: 'Posso usar adaptador T (benjamim) na tomada da geladeira?',
        answer: 'Nunca! Geladeiras exigem tomada exclusiva de 10A ou 20A com aterramento adequado para suportar a corrente de pico de partida do compressor sem derreter os contatos.'
      }
    ]
  },
  {
    slug: 'geladeira-ligando-e-desligando',
    category: 'geladeiras',
    badge: 'Falha de Partida',
    badgeColor: 'bg-amber-500/20 text-amber-700 border-amber-500/40',
    title: 'Geladeira ligando e desligando em poucos segundos',
    metaTitle: 'Geladeira Ligando e Desligando Rápido: causas e conserto | SC Refrigeração',
    metaDescription: 'Geladeira parte e morre em 5 segundos? Protetor térmico ou relé? Conserto no mesmo dia em Navegantes, Penha e região com garantia 90 dias.',
    h1: 'Geladeira Ligando e Desligando Rápido: Causas e Solução',
    intentQuery: 'geladeira ligando e desligando rapido poucos segundos',
    pain: 'Geladeira não consegue refrigerar, motor tenta partir e desliga repetidamente.',
    rootCause: 'Protetor térmico desarmando por sobrecorrente provocada por relé PTC quebrado, capacitor de partida fraco ou compressor travado.',
    causesList: [
      { level: 'Mais simples', title: 'Relé de partida PTC esfarelado por desgaste térmico', desc: 'A pastilha interna quebra e impede a alimentação da bobina auxiliar de partida.', priceRange: 'R$ 140 - R$ 220' },
      { level: 'Intermediária', title: 'Capacitor de partida sem capacitância', desc: 'Não entrega o torque necessário para girar o rotor do compressor.', priceRange: 'R$ 150 - R$ 240' },
      { level: 'Mais complexa', title: 'Compressor travado mecanicamente por falta de óleo/lubrificação', desc: 'O pistão trava e gera pico de amperagem desarmando a proteção.', priceRange: 'R$ 550 - R$ 980' }
    ],
    beforeCallingChecklist: [
      'Verifique se a voltagem da tomada está correta (127V ou 220V conforme o aparelho).',
      'Veja se a extensão ou cabo de energia não está superaquecido.',
      'Desligue por 20 minutos para esfriar o protetor térmico antes de um novo teste.'
    ],
    urgencyWarning: 'Tentativas repetidas de partida forçada podem queimar as bobinas internas do motor.',
    effectiveSolution: 'Troca do kit elétrico de partida (relé + protetor térmico + capacitor) ou destravamento técnico.',
    timeToSolve: '30 a 60 minutos',
    prefillMsg: 'Olá! Minha geladeira tenta ligar mas desliga logo em seguida (em poucos segundos).',
    tagService: 'Geladeiras',
    symptoms: [
      'Motor dá um ronco curto de 3 a 5 segundos, estala e desliga',
      'Compressor muito quente ao toque',
      'Temperatura interna subindo gradualmente'
    ],
    stepsToSolve: [
      'Medição de corrente de partida com alicate amperímetro',
      'Aferição das resistências ôhmicas das bobinas (marcha e auxiliar)',
      'Substituição do relé PTC e protetor térmico original',
      'Teste sob carga em regime contínuo'
    ],
    faqs: [
      {
        question: 'O que faz o relé de partida quebrar?',
        answer: 'Variações de energia na rede elétrica, raios durante tempestades no litoral e anos de uso contínuo provocam a quebra da pastilha cerâmica do relé.'
      }
    ]
  },
  {
    slug: 'congelador-gela-demais-forma-gelo',
    category: 'geladeiras',
    badge: 'Descalibração Térmica',
    badgeColor: 'bg-cyan-500/20 text-cyan-700 border-cyan-500/40',
    title: 'Congelador gela demais ou criando placas de gelo excessivas',
    metaTitle: 'Congelador Gela Demais e Cria Gelo: causas e conserto | SC Refrigeração',
    metaDescription: 'Geladeira congelando legumes e criando blocos grossos de gelo? Troca de termostato e sensores em Penha, Piçarras e região com garantia 90 dias.',
    h1: 'Congelador Gela Demais ou Formando Placas de Gelo: O que Fazer?',
    intentQuery: 'congelador gela demais congelando refrigerador placas gelo',
    pain: 'Verduras e ovos congelando e quebrando na parte inferior, garrafas estourando e excesso de gelo nas gavetas.',
    rootCause: 'Termostato regulado em corte excessivo ou com bulbo solto, damper termostático travado totalmente aberto ou sensor NTC fora da curva.',
    causesList: [
      { level: 'Mais simples', title: 'Bulbo do termostato desencaixado da serpentina', desc: 'O sensor não sente o frio do evaporador e mantém o motor ligado sem parar.', priceRange: 'R$ 120 - R$ 180' },
      { level: 'Causa frequente', title: 'Damper mecânico ou eletrônico travado 100% aberto', desc: 'Todo o ar polar do freezer desce descontrolado para as prateleiras de baixo.', priceRange: 'R$ 180 - R$ 290' },
      { level: 'Intermediária', title: 'Sensor de temperatura do refrigerador defeituoso', desc: 'Envia sinal errado de temperatura alta fazendo a placa gelar além da conta.', priceRange: 'R$ 180 - R$ 280' }
    ],
    beforeCallingChecklist: [
      'Reduza o controle de temperatura para o nível mínimo.',
      'Verifique se o duto central de passagem de ar não está sem o damper de vedação.'
    ],
    urgencyWarning: 'Congelar garrafas de vidro e líquidos fechados no refrigerador pode causar explosão do vidro e ferimentos.',
    effectiveSolution: 'Substituição do damper e calibração dos sensores de precisão.',
    timeToSolve: '40 a 60 minutos',
    prefillMsg: 'Olá! Minha geladeira está gelando demais e congelando os alimentos na parte de baixo.',
    tagService: 'Geladeiras',
    symptoms: [
      'Alface, tomate e ovos congelados na gaveta inferior',
      'Garrafas de refrigerante e água criando pedras de gelo',
      'Paredes do freezer com crosta grossa de neve'
    ],
    stepsToSolve: [
      'Verificação mecânica da portinhola do damper',
      'Aferição das leituras de temperatura com termômetro calibrado',
      'Substituição do damper ou termostato original'
    ],
    faqs: [
      {
        question: 'O que é o damper de uma geladeira?',
        answer: 'É uma válvula dosadora instalada no duto que liga o freezer ao refrigerador. Quando a parte de baixo atinge a temperatura correta, o damper se fecha para impedir que o frio excessivo congele os alimentos.'
      }
    ]
  },
  {
    slug: 'freezer-nao-congela',
    category: 'geladeiras',
    badge: 'Perda de Frio',
    badgeColor: 'bg-blue-500/20 text-blue-700 border-blue-500/40',
    title: 'Freezer não atinge temperatura negativa e descongela alimentos',
    metaTitle: 'Freezer Não Congela: causas e conserto em Navegantes e região | Santa Catarina Refrigeração',
    metaDescription: 'Freezer não congela carnes nem faz gelo? Sorvete mole e perda de temperatura? Atendimento domiciliar no mesmo dia com garantia formal de 90 dias.',
    h1: 'Freezer Não Congela: Causas, Testes e Conserto',
    intentQuery: 'freezer nao congela sorvete mole perde temperatura',
    pain: 'Carnes amolecendo, sorvete líquido e perda de estoque valioso de carnes e pescados.',
    rootCause: 'Falta de fluido refrigerante por micro-vazamento, serpentina obstruída por óleo ou compressor fraco sem compressão.',
    causesList: [
      { level: 'Causa frequente #1', title: 'Micro-vazamento de gás refrigerante', desc: 'O gás vaza lentamente e o freezer perde a capacidade de atingir -18°C.', priceRange: 'R$ 220 - R$ 450' },
      { level: 'Causa frequente #2', title: 'Ventilador do evaporador parado', desc: 'O gelo não circula pelo compartimento.', priceRange: 'R$ 160 - R$ 280' },
      { level: 'Mais complexa', title: 'Filtro secador parcialmente entupido de umidade/óleo', desc: 'Bloqueia a expansão do fluido no tubo capilar.', priceRange: 'R$ 260 - R$ 480' }
    ],
    beforeCallingChecklist: [
      'Verifique se a porta do freezer está fechando com pressão correta.',
      'Confira se não há excesso de alimentos quentes colocados de uma só vez.',
      'Ouça se o ventilador traseiro interno está funcionando.'
    ],
    urgencyWarning: 'Alimentos descongelados e recongelados oferecem sério risco de contaminação bacteriana. Conserte antes de repor o estoque.',
    effectiveSolution: 'Solda e pressurização de vazamento, troca de filtro secador, vácuo e recarga de fluido com balança.',
    timeToSolve: '60 a 100 minutos',
    prefillMsg: 'Olá! O freezer da minha geladeira não está congelando (o sorvete fica mole). Preciso de assistência.',
    tagService: 'Geladeiras',
    symptoms: [
      'Sorvete fica mole e pastoso',
      'Carnes descongelando e soltando sangue',
      'Gelo não se forma nas formas de água',
      'Temperatura fica acima de 0°C'
    ],
    stepsToSolve: [
      'Aferição das pressões de baixa e alta no manifold digital',
      'Localização do vazamento com detector de gás ultrassônico',
      'Carga de fluido refrigerante novo por peso exato'
    ],
    faqs: [
      {
        question: 'Qual a temperatura ideal de um freezer residencial?',
        answer: 'Um freezer saudável deve operar entre -18°C e -24°C para garantir a conservação segura dos alimentos sem perda de textura e nutrientes.'
      }
    ]
  },
  {
    slug: 'geladeira-com-cheiro-de-queimado',
    category: 'geladeiras',
    badge: 'Urgência Máxima',
    badgeColor: 'bg-red-500/20 text-red-700 border-red-500/40',
    title: 'Geladeira com cheiro de queimado ou fumaça no motor',
    metaTitle: 'Geladeira com Cheiro de Queimado: causas e conserto em SC | Santa Catarina Refrigeração',
    metaDescription: 'Cheiro de fio queimado na geladeira ou fumaça no compressor? Desligue da tomada e chame socorro técnico imediato com garantia de 90 dias.',
    h1: 'Geladeira com Cheiro de Queimado ou Fumaça: Procedimento de Emergência',
    intentQuery: 'geladeira com cheiro de queimado fumaca motor',
    pain: 'Fumaça ou cheiro forte de plástico/fio queimado na cozinha gerando pânico de curto-circuito.',
    rootCause: 'Relé de partida derretendo, protetor térmico queimado por sobrecarga ou queima do enrolamento interno do compressor.',
    causesList: [
      { level: 'Causa frequente #1', title: 'Relé de partida / capacitor derretido', desc: 'Mau contato na conexão elétrica gera aquecimento excessivo e queima da carcaça plástica.', priceRange: 'R$ 160 - R$ 260' },
      { level: 'Causa frequente #2', title: 'Placa eletrônica em curto com componentes carbonizados', desc: 'Varistor ou capacitor explodido após raio ou surto da Celesc.', priceRange: 'R$ 240 - R$ 480' },
      { level: 'Mais complexa', title: 'Compressor queimado com queima de verniz isolante', desc: 'Cheiro acre característico de óleo de refrigeração carbonizado.', priceRange: 'R$ 550 - R$ 1.150' }
    ],
    beforeCallingChecklist: [
      'DESLIGUE O PLUGUE DA TOMADA IMEDIATAMENTE!',
      'Não tente religar o aparelho antes da avaliação de um técnico certificado.',
      'Ventile o ambiente para dispersar a fumaça e odores.'
    ],
    urgencyWarning: 'PERIGO DE INCÊNDIO! Mantenha o aparelho desligado até a remoção das peças carbonizadas.',
    effectiveSolution: 'Troca da fiação danificada, limpeza de terminais, instalação de peças novas originais e testes de isolamento.',
    timeToSolve: 'Atendimento prioritário de emergência',
    prefillMsg: 'Olá! Minha geladeira está com cheiro forte de queimado / fumaça no motor. Preciso de socorro técnico urgente!',
    tagService: 'Geladeiras',
    symptoms: [
      'Cheiro característico de plástico derretido ou fio queimado',
      'Leve fumaça saindo da parte traseira inferior',
      'Motor não parte e a carcaça traseira está quente'
    ],
    stepsToSolve: [
      'Desenergização e inspeção visual da caixa de ligações do compressor',
      'Remoção de componentes derretidos e limpeza dos bornes',
      'Substituição de relés e cabeamento com terminal de alta temperatura',
      'Teste sob supervisão contínua'
    ],
    faqs: [
      {
        question: 'O cheiro de queimado significa que a geladeira deu perda total?',
        answer: 'Geralmente não! Na imensa maioria dos casos apenas o relé plástico de R$ 150 a R$ 250 derreteu e a carcaça do compressor e tubulações continuam 100% intactas.'
      }
    ]
  },
  {
    slug: 'luz-da-geladeira-nao-acende',
    category: 'geladeiras',
    badge: 'Elétrica Simples',
    badgeColor: 'bg-yellow-500/20 text-yellow-700 border-yellow-500/40',
    title: 'Luz da geladeira não acende e painel apagado',
    metaTitle: 'Luz da Geladeira Não Acende: causas e conserto em Navegantes e região | SC Refrigeração',
    metaDescription: 'Luz interna da geladeira queimou ou painel não liga? Troca de lâmpadas LED, soquetes e sensores de porta com atendimento rápido em domicílio.',
    h1: 'Luz da Geladeira Não Acende ou Painel Apagado: Causas',
    intentQuery: 'luz da geladeira nao acende painel apagado',
    pain: 'Dificuldade para enxergar os alimentos à noite e dúvida se o refrigerador está ligado.',
    rootCause: 'Lâmpada LED queimada, interruptor de porta com contato quebrado ou módulo de interface sem alimentação.',
    causesList: [
      { level: 'Mais simples', title: 'Lâmpada LED / Soquete com filamento queimado', desc: 'Desgaste natural da lâmpada de iluminação interna.', priceRange: 'R$ 80 - R$ 140' },
      { level: 'Causa frequente', title: 'Interruptor mecânico da porta travado na posição fechada', desc: 'O botão não retorna ao abrir a porta.', priceRange: 'R$ 110 - R$ 180' },
      { level: 'Intermediária', title: 'Placa de iluminação LED ou chicote da dobradiça rompido', desc: 'Fios partidos pelo movimento de abrir e fechar a porta ao longo dos anos.', priceRange: 'R$ 180 - R$ 320' }
    ],
    beforeCallingChecklist: [
      'Verifique se a geladeira continua refrigerando normalmente.',
      'Pressione o interruptor da porta várias vezes para verificar se há travamento mecânico.'
    ],
    urgencyWarning: 'Se além da luz o motor também estiver apagado, o defeito é na tomada ou placa principal de energia.',
    effectiveSolution: 'Troca da barra de LED ou interruptor com garantia de 90 dias.',
    timeToSolve: '20 a 40 minutos',
    prefillMsg: 'Olá! A luz interna / painel da minha geladeira não está acendendo.',
    tagService: 'Geladeiras',
    symptoms: [
      'Interior escuro ao abrir a porta',
      'Painel digital frontal sem dígitos ou piscando fraco',
      'Lâmpada pisca e apaga'
    ],
    stepsToSolve: [
      'Teste de tensão nos polos do soquete',
      'Substituição da lâmpada original de fábrica',
      'Revisão do interruptor e fiação'
    ],
    faqs: [
      {
        question: 'Posso colocar qualquer lâmpada de casa na geladeira?',
        answer: 'Não. Lâmpadas comuns incandescentes emitem muito calor e não suportam a umidade e vibração do eletrodoméstico. Deve-se usar lâmpada LED para refrigeração.'
      }
    ]
  },
  {
    slug: 'porta-da-geladeira-nao-veda',
    category: 'geladeiras',
    badge: 'Vedação & Gaxeta',
    badgeColor: 'bg-emerald-500/20 text-emerald-700 border-emerald-500/40',
    title: 'Porta da geladeira não fecha direito ou borracha solta',
    metaTitle: 'Porta da Geladeira Não Veda: causas e troca de borracha | SC Refrigeração',
    metaDescription: 'Porta da geladeira abrindo sozinha, desnivelada ou borracha ressecada? Troca e alinhamento em Navegantes, Penha e região com garantia 90 dias.',
    h1: 'Porta da Geladeira Não Veda: Como Ajustar e Trocar a Borracha',
    intentQuery: 'porta da geladeira nao veda nao fecha borracha solta',
    pain: 'Porta abrindo sozinha, ar gelado escapando e sobrecarregando o compressor.',
    rootCause: 'Borracha magnética envelhecida, dobradiças gastas ou bucha plástica de sustentação da porta quebrada.',
    causesList: [
      { level: 'Mais simples', title: 'Desnivelamento da geladeira com inclinação para a frente', desc: 'Ajuste simples nos pés dianteiros para permitir fechamento por gravidade.', priceRange: 'R$ 80 - R$ 120' },
      { level: 'Causa frequente', title: 'Borracha (gaxeta) ressecada ou desencaixada do canal', desc: 'Perda do poder magnético de vedação.', priceRange: 'R$ 140 - R$ 260' },
      { level: 'Intermediária', title: 'Dobradiça inferior ou pino central empenado/quebrado', desc: 'A porta fica caída e esbarra na carcaça sem selar.', priceRange: 'R$ 160 - R$ 280' }
    ],
    beforeCallingChecklist: [
      'Faça o teste da folha de papel em todo o contorno da porta.',
      'Verifique se prateleiras e garrafas não estão esbarrando no fundo da porta ao fechar.',
      'Incline levemente a geladeira para trás rosqueando os pés dianteiros.'
    ],
    urgencyWarning: 'Porta entreaberta causa acúmulo severo de gelo nas serpentinas e pode queimar o motor em poucos dias por trabalho contínuo.',
    effectiveSolution: 'Substituição das gaxetas por modelos sob medida originais e alinhamento das dobradiças.',
    timeToSolve: '30 a 50 minutos',
    prefillMsg: 'Olá! A porta da minha geladeira não está vedando direito / borracha está solta.',
    tagService: 'Geladeiras',
    symptoms: [
      'Porta abre sozinha ou precisa ser forçada',
      'Gotas de suor e condensação em volta do batente',
      'Gelo na parte superior do gabinete'
    ],
    stepsToSolve: [
      'Inspeção do alinhamento das três dobradiças',
      'Troca da borracha com fixação térmica uniforme',
      'Teste de estanqueidade'
    ],
    faqs: [
      {
        question: 'Vale a pena colar a borracha com cola instantânea?',
        answer: 'Não recomendamos, pois a cola endurece o PVC da gaxeta, tornando-a quebradiça e impedindo a vedação magnética correta.'
      }
    ]
  },
  {
    slug: 'frost-free-acumulando-gelo',
    category: 'geladeiras',
    badge: 'Bloqueio de Degelo',
    badgeColor: 'bg-cyan-500/20 text-cyan-700 border-cyan-500/40',
    title: 'Geladeira Frost Free acumulando gelo no duto de ar',
    metaTitle: 'Frost Free Acumulando Gelo: causas e conserto em Navegantes e região | SC Refrigeração',
    metaDescription: 'Geladeira Frost Free com placa grossa de gelo no freezer ou dutos trancados? Troca de resistência e kit de degelo com garantia formal de 90 dias.',
    h1: 'Geladeira Frost Free Acumulando Gelo: O que Fazer?',
    intentQuery: 'frost free acumulando gelo placa no freezer duto trancado',
    pain: 'Geladeira moderna tendo que ser descongelada como geladeira antiga.',
    rootCause: 'Falha completa no ciclo de degelo automático por resistência rompida, sensor descalibrado ou dreno congelado.',
    causesList: [
      { level: 'Causa frequente #1', title: 'Termo-fusível de segurança aberto', desc: 'Interrompe a corrente para a resistência de degelo.', priceRange: 'R$ 180 - R$ 260' },
      { level: 'Causa frequente #2', title: 'Resistência de degelo queimada', desc: 'Não aquece para derreter a neve do evaporador.', priceRange: 'R$ 220 - R$ 380' },
      { level: 'Intermediária', title: 'Calha de alumínio do dreno amassada ou sem fita de aquecimento', desc: 'A água recongela na calha antes de sair pelo dreno.', priceRange: 'R$ 200 - R$ 320' }
    ],
    beforeCallingChecklist: [
      'Evite deixar a porta do congelador aberta por longos períodos.',
      'Não use facas ou objetos pontiagudos para remover blocos de gelo.'
    ],
    urgencyWarning: 'O gelo acumulado pode travar as pás do ventilador, queimando o motor do ventilador e cortando totalmente a refrigeração.',
    effectiveSolution: 'Substituição completa do kit de degelo original e teste de condução.',
    timeToSolve: '45 a 80 minutos',
    prefillMsg: 'Olá! Minha geladeira Frost Free está acumulando blocos de gelo no freezer.',
    tagService: 'Geladeiras',
    symptoms: [
      'Parede traseira do freezer estufada de gelo',
      'Som de hélice raspando na neve',
      'Refrigerador começa a perder temperatura'
    ],
    stepsToSolve: [
      'Descongelamento seguro com soprador térmico industrial',
      'Medição da resistência ôhmica da resistência de degelo',
      'Substituição do kit térmico'
    ],
    faqs: [
      {
        question: 'Geladeira Frost Free precisa ser descongelada manualmente?',
        answer: 'Não. O sistema Frost Free foi criado justamente para não precisar de descongelamento. Se está criando gelo, há defeito em algum componente do ciclo automático.'
      }
    ]
  },
  {
    slug: 'side-by-side-sem-agua-gelo',
    category: 'geladeiras',
    badge: 'Dispenser & Ice Maker',
    badgeColor: 'bg-blue-500/20 text-blue-700 border-blue-500/40',
    title: 'Geladeira Side by Side não sai água nem fabrica gelo / dispenser travado',
    metaTitle: 'Side by Side Não Sai Água Nem Gelo: causas e conserto | SC Refrigeração',
    metaDescription: 'Dispenser da Side by Side travado ou máquina de gelo parou de fabricar cubos? Manutenção especializada em Brastemp, Electrolux, Samsung e LG com garantia 90 dias.',
    h1: 'Geladeira Side by Side Não Sai Água Nem Fabrica Gelo: Soluções',
    intentQuery: 'side by side nao sai agua nao fabrica gelo ice maker',
    pain: 'Dispenser sem água gelada, máquina de gelo (Ice Maker) travada e perda do principal conforto da geladeira premium.',
    rootCause: 'Filtro de água saturado, válvula solenóide dupla de entrada de água queimada, mangueira congelada na porta ou motor do Ice Maker avariado.',
    causesList: [
      { level: 'Mais simples', title: 'Filtro de água externo/interno saturado ou sem pressão de água', desc: 'O fluxo de água é cortado para proteger o sistema.', priceRange: 'R$ 150 - R$ 280' },
      { level: 'Causa frequente', title: 'Válvula solenóide de água de 2 ou 3 vias queimada', desc: 'A bobina elétrica não abre a passagem de água para o dispenser ou gelo.', priceRange: 'R$ 240 - R$ 390' },
      { level: 'Intermediária', title: 'Duto de abastecimento de água congelado na porta', desc: 'A resistência do tubo de água perdeu eficiência térmica.', priceRange: 'R$ 220 - R$ 360' },
      { level: 'Mais complexa', title: 'Módulo motorizado do Ice Maker (fábrica de gelo) danificado', desc: 'O mecanismo de ejeção dos cubos de gelo quebrou os dentes de engrenagem.', priceRange: 'R$ 380 - R$ 750' }
    ],
    beforeCallingChecklist: [
      'Verifique se o registro de água da parede está totalmente aberto.',
      'Confira se a função "Ice Off" ou trava de segurança (Lock) não está ativada no painel digital.',
      'Verifique se a pressão de água do ponto hidráulico é suficiente (mínimo de 20 psi).'
    ],
    urgencyWarning: 'Não force a alavanca do dispenser com copos duros para não quebrar o micro-switch de acionamento.',
    effectiveSolution: 'Troca de válvula solenóide, desobstrução de dutos e substituição de peças genuínas de Ice Maker.',
    timeToSolve: '60 a 90 minutos em domicílio',
    prefillMsg: 'Olá! O dispenser de água / gelo da minha geladeira Side by Side não está funcionando.',
    tagService: 'Side by Side',
    symptoms: [
      'Não sai água ao pressionar a alavanca do dispenser',
      'Ice Maker não enche de água ou não ejeta os cubos prontos',
      'Água pingando sem parar no dispenser',
      'Painel acusando troca de filtro'
    ],
    stepsToSolve: [
      'Teste elétrico de abertura das bobinas da válvula solenóide',
      'Verificação da vazão e pressão da linha hidráulica',
      'Diagnóstico do micromotor e sensor de nível de gelo',
      'Substituição e calibração do ciclo de produção de gelo'
    ],
    faqs: [
      {
        question: 'De quanto em quanto tempo devo trocar o filtro da geladeira Side by Side?',
        answer: 'Os fabricantes recomendam a troca do filtro a cada 6 meses ou 1.500 litros de água filtrada para garantir pureza e evitar entupimento da válvula solenóide.'
      }
    ]
  },
  {
    slug: 'lava-e-seca-erro-oe-5e-barulho-centrifugacao',
    category: 'lava-e-seca',
    badge: 'Lava e Seca #1',
    badgeColor: 'bg-emerald-500/20 text-emerald-700 border-emerald-500/40',
    title: 'Lava e Seca com erro OE/5E ou barulho na centrifugação',
    metaTitle: 'Lava e Seca Erro OE/5E e Barulho: causas e conserto em SC | SC Refrigeração',
    metaDescription: 'Lava e Seca LG erro OE ou Samsung erro 5E? Não esgota água ou barulho na centrifugação? Conserto no mesmo dia com peças originais e garantia 90 dias.',
    h1: 'Lava e Seca com Erro OE/5E ou Barulho Forte: Guia de Conserto',
    intentQuery: 'lava e seca erro oe 5e barulho centrifugacao lg samsung',
    pain: 'Máquina travada cheia de água e sabão com roupas molhadas trancadas na porta e barulho assustador de avião.',
    rootCause: 'Bomba de drenagem travada por moedas/grampos ou queimada, filtro de resíduos obstruído ou amortecedores gastos.',
    causesList: [
      { level: 'Mais simples', title: 'Filtro de resíduos inferior com sujeira acumulada', desc: 'Moedas, grampos ou fiapos impedem o giro da hélice.', priceRange: 'R$ 120 - R$ 180 (ou limpeza pelo usuário)' },
      { level: 'Causa frequente', title: 'Eletrobomba de drenagem queimada ou com folga no eixo', desc: 'A máquina tenta escoar a água, ronca e gera o código de erro no painel.', priceRange: 'R$ 190 - R$ 380' },
      { level: 'Intermediária', title: 'Amortecedores da suspensão do cesto estourados', desc: 'Provoca vibração violenta e estrondos na centrifugação.', priceRange: 'R$ 220 - R$ 420' },
      { level: 'Mais complexa', title: 'Rolamento do tambor desgastado com vazamento no retentor', desc: 'Ruído metálico estridente na rotação rápida.', priceRange: 'R$ 480 - R$ 850' }
    ],
    beforeCallingChecklist: [
      'Abra a portinhola inferior dianteira e limpe o filtro de fiapos (coloque uma toalha no chão antes).',
      'Verifique se a mangueira de esgoto não está dobrada atrás da máquina.',
      'Confira se a carga de roupas está bem balanceada dentro do tambor.'
    ],
    urgencyWarning: 'Não force a trava da escotilha com a máquina cheia de água para não quebrar a maçaneta plástica.',
    effectiveSolution: 'Substituição da bomba blindada de drenagem, troca de amortecedores e revisão do sistema mecânico.',
    timeToSolve: '45 a 75 minutos',
    prefillMsg: 'Olá! Minha lava e seca está dando erro OE/5E ou com muito barulho na centrifugação.',
    tagService: 'Lava e Seca',
    symptoms: [
      'Erro OE (LG) ou erro 5E/5C (Samsung) no visor',
      'Água não desce pelo esgoto e a porta fica bloqueada',
      'Máquina trepida e anda pela lavanderia na centrifugação',
      'Ruído agudo de rolamento desgastado'
    ],
    stepsToSolve: [
      'Drenagem manual de segurança e desbloqueio da porta',
      'Teste elétrico da eletrobomba e pressostato de nível',
      'Substituição da bomba por peça original com hélice reforçada',
      'Ciclo completo de lavagem e centrifugação'
    ],
    faqs: [
      {
        question: 'O que significa o erro OE na Lava e Seca LG?',
        answer: 'O erro OE significa "Output Error" (Falha na drenagem). Indica que a máquina não conseguiu escoar toda a água em menos de 10 minutos.'
      }
    ]
  },
  {
    slug: 'lava-e-seca-nao-centrifuga',
    category: 'lava-e-seca',
    badge: 'Desbalanceamento',
    badgeColor: 'bg-emerald-500/20 text-emerald-700 border-emerald-500/40',
    title: 'Lava e Seca não centrifuga e roupa sai encharcada',
    metaTitle: 'Lava e Seca Não Centrifuga: causas e conserto em SC | SC Refrigeração',
    metaDescription: 'Lava e Seca fica girando sem acelerar ou erro UE/Ub? Conserto rápido em Navegantes, Penha, Itajaí e região com garantia de 90 dias.',
    h1: 'Lava e Seca Não Centrifuga: Causas e Solução Técnica',
    intentQuery: 'lava e seca nao centrifuga erro ue ub roupa encharcada',
    pain: 'Roupas saindo pingando água da lavadora, ciclo de lavagem nunca termina e erro UE no painel.',
    rootCause: 'Carga de roupas desbalanceada no tambor, falha no sensor de rotação Hall (RPS), amortecedores ruins ou correia/motor com defeito.',
    causesList: [
      { level: 'Mais simples', title: 'Carga desbalanceada (apenas uma peça pesada como edredom)', desc: 'A máquina tenta redistribuir o peso e aborta a centrifugação por segurança.', priceRange: 'R$ 0 (redistribuir roupas)' },
      { level: 'Causa frequente', title: 'Sensor de rotação do motor Direct Drive (Sensor Hall) danificado', desc: 'A placa não recebe a contagem de giros do cesto e cancela a aceleração.', priceRange: 'R$ 220 - R$ 360' },
      { level: 'Intermediária', title: 'Amortecedores hidráulicos sem pressão', desc: 'O cesto balança excessivamente acionando o sensor de impacto.', priceRange: 'R$ 240 - R$ 420' }
    ],
    beforeCallingChecklist: [
      'Evite lavar apenas um edredom pesado ou misturar toalhas grossas com roupas finas.',
      'Verifique se os 4 pés da máquina estão 100% nivelados e travados no piso.'
    ],
    urgencyWarning: 'Centrifugar com amortecedores quebrados pode quebrar o tanque plástico da lavadora.',
    effectiveSolution: 'Troca do sensor Hall ou amortecedores originais.',
    timeToSolve: '40 a 60 minutos',
    prefillMsg: 'Olá! Minha lava e seca não está centrifugando as roupas (erro UE).',
    tagService: 'Lava e Seca',
    symptoms: [
      'Visor trava em 11 ou 13 minutos e recomeça a encher de água',
      'Erro UE (LG) ou Ub/dc (Samsung) no painel',
      'Roupas saem encharcadas ao final do processo'
    ],
    stepsToSolve: [
      'Diagnóstico do sensor Hall e fiação do estator',
      'Inspeção dos amortecedores e molas superiores',
      'Teste de centrifugação a 1.200 ou 1.400 RPM'
    ],
    faqs: [
      {
        question: 'O que é o sensor Hall em uma Lava e Seca?',
        answer: 'É um sensor magnético de precisão montado no motor Direct Drive que informa a velocidade exata e a posição do tambor para a placa eletrônica.'
      }
    ]
  },
  {
    slug: 'lava-e-seca-nao-esquenta',
    category: 'lava-e-seca',
    badge: 'Secagem & Aquecimento',
    badgeColor: 'bg-emerald-500/20 text-emerald-700 border-emerald-500/40',
    title: 'Lava e Seca não seca as roupas ou não esquenta a água',
    metaTitle: 'Lava e Seca Não Seca / Não Esquenta: causas e conserto | SC Refrigeração',
    metaDescription: 'Lava e Seca termina o ciclo de secagem com roupas úmidas e frias? Resistência de secagem ou duto entupido? Conserto com garantia formal de 90 dias.',
    h1: 'Lava e Seca Não Seca as Roupas: Diagnóstico e Conserto',
    intentQuery: 'lava e seca nao seca roupas nao esquenta ciclo demorado',
    pain: 'Roupas passam 3 horas no ciclo de secagem e saem mornas e úmidas.',
    rootCause: 'Duto de ar de secagem entupido de fiapos compactados, resistência tubular de secagem queimada ou termostato de segurança desarmado.',
    causesList: [
      { level: 'Causa frequente #1', title: 'Duto do ventilador de secagem entupido de fiapos e pelos', desc: 'Bloqueia totalmente o fluxo de ar quente sobre o tambor.', priceRange: 'R$ 180 - R$ 290 (limpeza técnica completa)' },
      { level: 'Causa frequente #2', title: 'Termostato bimetálico de secagem desarmado', desc: 'Corta a corrente da resistência por superaquecimento anterior.', priceRange: 'R$ 160 - R$ 240' },
      { level: 'Intermediária', title: 'Resistência de ar quente de secagem queimada', desc: 'A ventoinha sopra apenas ar frio.', priceRange: 'R$ 260 - R$ 450' }
    ],
    beforeCallingChecklist: [
      'Não ultrapasse a capacidade máxima de secagem da máquina (ex: em uma máquina de 11kg, a secagem é para no máximo 6 a 7kg).',
      'Confira se a torneira de água fria está aberta (as lava e seca usam água fria para condensar o vapor na secagem).'
    ],
    urgencyWarning: 'O acúmulo excessivo de fiapos secos no duto de aquecimento representa risco de combustão se não for higienizado periodicamente.',
    effectiveSolution: 'Desmontagem e higienização química do duto de secagem, teste de resistência e reativação térmica.',
    timeToSolve: '60 a 90 minutos',
    prefillMsg: 'Olá! Minha lava e seca não está secando as roupas (saem úmidas).',
    tagService: 'Lava e Seca',
    symptoms: [
      'Roupas continuam molhadas após 2 horas de ciclo de secagem',
      'O vidro da escotilha não esquenta durante a secagem',
      'Cheiro de mofo nas roupas'
    ],
    stepsToSolve: [
      'Abertura e higienização completa do duto de ar quente',
      'Teste de ohmagem da resistência de secagem',
      'Aferição dos termostatos de proteção e sensor NTC de duto'
    ],
    faqs: [
      {
        question: 'Por que a lava e seca precisa de água para secar roupa?',
        answer: 'Porque a maioria das lava e seca brasileiras utiliza sistema de condensação: a água fria resfria a parede do duto para que o vapor de água da roupa condense em líquido e escorra pelo esgoto.'
      }
    ]
  },
  {
    slug: 'camara-fria-cervejeira-perdendo-temperatura',
    category: 'comercial',
    badge: 'Comercial 24h',
    badgeColor: 'bg-indigo-500/20 text-indigo-700 border-indigo-500/40',
    title: 'Câmara Fria ou Cervejeira perdendo temperatura',
    metaTitle: 'Câmara Fria e Cervejeira Perdendo Temperatura: conserto urgente | SC Refrigeração',
    metaDescription: 'Cervejeira ou câmara frigorífica esquentando e perdendo bebidas e mercadorias? Atendimento emergencial 24h para bares, mercados e restaurantes de SC.',
    h1: 'Câmara Fria e Cervejeira Comercial Perdendo Temperatura: Socorro 24h',
    intentQuery: 'camara fria cervejeira comercial perdendo temperatura esquentando',
    pain: 'Bebidas quentes gerando reclamações de clientes, perda de carnes e pescados e risco de fechamento pela vigilância sanitária.',
    rootCause: 'Condensador com sujeira espessa bloqueando a troca térmica, vazamento de refrigerante, ventilador queimado ou microcontrolador descalibrado.',
    causesList: [
      { level: 'Causa frequente #1', title: 'Condensador com acúmulo de gordura e poeira', desc: 'Impede a dissipação do calor aumentando a pressão de descarga do compressor.', priceRange: 'R$ 180 - R$ 320' },
      { level: 'Causa frequente #2', title: 'Vazamento de fluido em soldas ou válvulas de serviço', desc: 'Queda na capacidade frigorífica do evaporador.', priceRange: 'R$ 280 - R$ 580' },
      { level: 'Intermediária', title: 'Micromotor do ventilador do evaporador ou condensador queimado', desc: 'Corta a ventilação forçada das aletas.', priceRange: 'R$ 240 - R$ 460' },
      { level: 'Mais complexa', title: 'Controlador digital (Full Gauge / Coel) desprogramado ou queimado', desc: 'Não aciona o degelo ou corta o compressor fora de hora.', priceRange: 'R$ 290 - R$ 580' }
    ],
    beforeCallingChecklist: [
      'Verifique se o condensador não está abafado por caixas ou encostado na parede.',
      'Confira se a porta ou cortina de ar está fechando adequadamente.',
      'Veja qual a temperatura indicada no controlador digital.'
    ],
    urgencyWarning: 'Plantão emergencial 24h com prioridade para estabelecimentos gastronômicos e comerciais em todo o Litoral Norte de SC.',
    effectiveSolution: 'Limpeza química com ar pressurizado, troca de micromotores, calibração do controlador Full Gauge e recarga de gás.',
    timeToSolve: 'Atendimento imediato (chegada em 30 a 60 min)',
    prefillMsg: 'Olá! Sou de um comércio / restaurante e minha câmara fria / cervejeira está perdendo temperatura. Preciso de socorro emergencial!',
    tagService: 'Comercial',
    symptoms: [
      'Cervejeira não atinge -4°C e bebidas saem mornas',
      'Alarme de alta temperatura no visor digital Full Gauge',
      'Bloco maciço de gelo no evaporador da câmara fria'
    ],
    stepsToSolve: [
      'Inspeção da unidade condensadora remota ou acoplada',
      'Medição de superaquecimento e sub-resfriamento com manifold',
      'Programação e calibração de parâmetros do controlador digital'
    ],
    faqs: [
      {
        question: 'Vocês atendem emergências em fins de semana e madrugadas?',
        answer: 'Sim! Possuímos equipe de plantão técnico 24h para atender comércios, peixarias, hotéis e restaurantes em Penha, Piçarras, Navegantes, Itajaí e BC.'
      }
    ]
  },
  {
    slug: 'camara-fria-nao-atinge-temperatura',
    category: 'comercial',
    badge: 'Refrigeração Industrial',
    badgeColor: 'bg-indigo-500/20 text-indigo-700 border-indigo-500/40',
    title: 'Câmara Frigorífica comercial não atinge temperatura programada',
    metaTitle: 'Câmara Fria Não Atinge Temperatura: manutenção comercial | SC Refrigeração',
    metaDescription: 'Câmara fria de congelados ou resfriados não atinge a temperatura? Válvula de expansão, degelo ou compressor? Assistência técnica especializada em SC.',
    h1: 'Câmara Frigorífica Não Atinge a Temperatura Programada: Como Solucionar',
    intentQuery: 'camara frigorifica fria comercial nao atinge temperatura',
    pain: 'Mercadorias correndo risco de descongelamento, multas sanitárias e prejuízos de milhares de reais.',
    rootCause: 'Desregulagem da válvula de expansão termostática, insuficiência de gás, gelo na serpentina por falha no degelo elétrico ou compressor com válvulas desgastadas.',
    causesList: [
      { level: 'Causa frequente #1', title: 'Falha no ciclo de degelo elétrico por resistências queimadas', desc: 'As aletas do evaporador viram um bloco sólido de gelo que bloqueia o ar.', priceRange: 'R$ 280 - R$ 560' },
      { level: 'Causa frequente #2', title: 'Válvula de expansão termostática (TXV) descalibrada ou entupida', desc: 'Não injeta refrigerante suficiente no evaporador.', priceRange: 'R$ 320 - R$ 680' },
      { level: 'Mais complexa', title: 'Compressor semi-hermético ou scroll com placa de válvulas danificada', desc: 'Perda do poder de compressão em alta rotação.', priceRange: 'R$ 680 - R$ 1.800' }
    ],
    beforeCallingChecklist: [
      'Verifique se a câmara não está recebendo carga de mercadoria quente acima da capacidade diária.',
      'Confira se a vedação de borracha das portas e cantoneiras térmicas está intacta.'
    ],
    urgencyWarning: 'Atendimento emergencial prioritário com emissão de laudo técnico para órgãos de fiscalização sanitária.',
    effectiveSolution: 'Regulagem de superaquecimento, substituição de resistências de degelo e revisão da unidade condensadora.',
    timeToSolve: '1 a 3 horas no local',
    prefillMsg: 'Olá! Nossa câmara frigorífica não está atingindo a temperatura programada. Solicitamos visita técnica de emergência.',
    tagService: 'Comercial',
    symptoms: [
      'Temperatura estagnada em +5°C em câmara que deveria operar a -18°C',
      'Compressor funcionando em regime forçado ininterrupto',
      'Pressão de sucção muito baixa no manifold'
    ],
    stepsToSolve: [
      'Degelo forçado das baterias de aletas com controle de drenagem',
      'Aferição das pressões de sucção/descarga e temperatura de linha',
      'Regulagem micrométrica da válvula de expansão'
    ],
    faqs: [
      {
        question: 'Vocês oferecem contrato de manutenção preventiva mensal (PMOC)?',
        answer: 'Sim! Oferecemos planos de manutenção preventiva com visitas regulares, laudo PMOC, higienização e prioridade no atendimento emergencial 24h.'
      }
    ]
  },
  {
    slug: 'frigobar-nao-gela-furo-no-congelador',
    category: 'adegas-e-frigobares',
    badge: 'Frigobares & Pousadas',
    badgeColor: 'bg-purple-500/20 text-purple-700 border-purple-500/40',
    title: 'Frigobar furado no congelador ou sem gelar',
    metaTitle: 'Frigobar Furado no Congelador ou Não Gela: causas e conserto | SC Refrigeração',
    metaDescription: 'Furou o congelador do frigobar com faca ao raspar gelo? Perda de gás ou termostato? Conserto em hotéis, pousadas e residências com garantia de 90 dias.',
    h1: 'Frigobar Furado no Congelador com Faca ou Não Gela: Tem Conserto?',
    intentQuery: 'frigobar furado com faca congelador nao gela conserto',
    pain: 'Chiado forte após furar a placa com faca, gás escapando e medo de ter que jogar o frigobar no lixo.',
    rootCause: 'Furo acidental na placa evaporadora de alumínio provocado por faca ou objeto pontiagudo ao tentar tirar gelo, ou queima de termostato.',
    causesList: [
      { level: 'Mais simples', title: 'Termostato descalibrado ou quebrado', desc: 'O motor não parte.', priceRange: 'R$ 140 - R$ 220' },
      { level: 'Causa frequente #1', title: 'Furo na placa de alumínio do congelador com faca', desc: 'O gás vaza instantaneamente em segundos com barulho de chiado.', priceRange: 'R$ 220 - R$ 380' },
      { level: 'Intermediária', title: 'Infiltração de água e umidade no circuito de refrigeração após o furo', desc: 'Exige limpeza química interna com solvente 141b para salvar o compressor.', priceRange: 'R$ 280 - R$ 450' }
    ],
    beforeCallingChecklist: [
      'SE FUROU COM FACA, DESLIGUE DA TOMADA IMEDIATAMENTE!',
      'Não deixe o motor ligado após o furo, pois ele puxará água para dentro do compressor danificando o óleo.',
      'Tape o furo com uma fita adesiva para evitar a entrada de umidade até o técnico chegar.'
    ],
    urgencyWarning: 'Manter o frigobar ligado após furar a tubulação faz o motor aspirar a água do degelo, causando queima definitiva por oxidação interna.',
    effectiveSolution: 'Solda especial de alumínio com resina/vareta específica, limpeza de circuito com fluido 141b, troca de filtro secador, vácuo profundo e recarga de gás.',
    timeToSolve: '45 a 90 minutos',
    prefillMsg: 'Olá! O congelador do meu frigobar furou com uma faca / parou de gelar. Gostaria de saber o valor para consertar.',
    tagService: 'Frigobares',
    symptoms: [
      'Chiado forte de gás vazando após toque de faca no congelador',
      'Cheiro leve de óleo de refrigeração dentro do frigobar',
      'Motor funciona mas a placa fica morna'
    ],
    stepsToSolve: [
      'Solda técnica no ponto de ruptura da chapa de alumínio',
      'Lavagem química interna do circuito frigorífico com R141b',
      'Substituição do filtro secador e recarga de fluido ecológico R600a/R134a'
    ],
    faqs: [
      {
        question: 'Frigobar furado com faca tem conserto garantido?',
        answer: 'Sim! Se você desligou da tomada logo após o furo para não puxar água para o motor, nós fazemos a solda de precisão no alumínio e recarregamos o gás com 100% de sucesso e garantia de 90 dias.'
      }
    ]
  },
  {
    slug: 'adega-climatizada-esquentando-vinhos',
    category: 'adegas-e-frigobares',
    badge: 'Adegas & Climatização',
    badgeColor: 'bg-purple-500/20 text-purple-700 border-purple-500/40',
    title: 'Adega climatizada esquentando e alterando temperatura dos vinhos',
    metaTitle: 'Adega Climatizada Esquentando: causas e conserto em SC | SC Refrigeração',
    metaDescription: 'Adega climatizada não atinge a temperatura, painel piscando ou ventoinha parada? Conserto de adegas termoelétricas e com compressor com garantia 90 dias.',
    h1: 'Adega Climatizada Esquentando ou com Erro no Painel: Como Proteger seus Vinhos',
    intentQuery: 'adega climatizada esquentando nao gela placa peltier compressor',
    pain: 'Vinhos nobres e caros expostos a calor excessivo correndo risco de oxidação e perda de bouquet.',
    rootCause: 'Queima da pastilha termoelétrica Peltier, acúmulo de poeira nos dissipadores de calor, sensor NTC descalibrado ou falha no compressor.',
    causesList: [
      { level: 'Mais simples', title: 'Cooler traseiro travado por sujeira ou poeira', desc: 'O calor da pastilha não dissipa e retorna para dentro da adega.', priceRange: 'R$ 140 - R$ 220' },
      { level: 'Causa frequente', title: 'Pastilha termoelétrica Peltier queimada', desc: 'Perde a capacidade de gerar diferença de temperatura.', priceRange: 'R$ 220 - R$ 380' },
      { level: 'Intermediária', title: 'Placa controladora digital com sensor NTC descalibrado', desc: 'Lê temperatura errada no visor digital.', priceRange: 'R$ 240 - R$ 420' },
      { level: 'Mais complexa', title: 'Compressor de precisão silencioso com vazamento de gás', desc: 'Em adegas com compressor de alta capacidade.', priceRange: 'R$ 380 - R$ 750' }
    ],
    beforeCallingChecklist: [
      'Verifique se a adega possui pelo menos 10 cm de espaço livre nas laterais e traseira para ventilação.',
      'Não instale a adega em nichos fechados sem ventilação adequada.',
      'Confira se a vedação da porta de vidro duplo está perfeita.'
    ],
    urgencyWarning: 'Altas temperaturas e variações térmicas contínuas degradam a rolha e oxidam vinhos tintos e brancos rapidamente.',
    effectiveSolution: 'Substituição de pastilha Peltier de alto rendimento, troca de cooler e pasta térmica de prata, calibração do sensor.',
    timeToSolve: '45 a 80 minutos em domicílio',
    prefillMsg: 'Olá! Minha adega climatizada está esquentando e não mantém a temperatura ideal dos vinhos.',
    tagService: 'Adegas',
    symptoms: [
      'Temperatura interna subindo para 22°C ou mais',
      'Painel digital piscando ou apitando',
      'Cooler traseiro fazendo barulho estridente ou parado',
      'Gotas de água escorrendo no vidro frontal'
    ],
    stepsToSolve: [
      'Desmontagem do bloco térmico e aferição da voltagem da fonte chaveada',
      'Aplicação de nova pasta térmica de alta condutividade',
      'Instalação de pastilha Peltier ou conserto da unidade selada'
    ],
    faqs: [
      {
        question: 'Qual a diferença entre adega com pastilha Peltier e adega com compressor?',
        answer: 'Adegas termoelétricas (Peltier) são mais silenciosas e recomendadas para ambientes com temperatura de até 25°C. Adegas com compressor suportam o calor do verão litorâneo mantendo os vinhos perfeitamente entre 12°C e 16°C com precisão.'
      }
    ]
  }
];

export function getSearchIntentBySlug(slug: string): SearchIntentItem | undefined {
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '').replace(/^problemas\//, '');
  return SEARCH_INTENTS.find(s => s.slug === clean);
}
