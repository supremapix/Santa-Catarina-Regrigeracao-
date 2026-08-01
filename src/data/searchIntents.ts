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

import { COMPANY_INFO } from './company';

export const SEARCH_INTENTS: SearchIntentItem[] = [
  {
    slug: 'geladeira-nao-gela-parte-de-baixo',
    category: 'geladeiras',
    badge: 'Problema #1 em Frost Free',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    title: 'Geladeira gela no freezer mas NÃO gela na parte de baixo',
    metaTitle: 'Geladeira não Gela Embaixo? Solução em Penha e Região | SC Refrigeração',
    metaDescription: 'Geladeira Frost Free congelando em cima e quente embaixo? Saiba a causa (kit degelo/sensor/dreno) e solicite conserto no mesmo dia com garantia de 90 dias.',
    h1: 'Conserto de Geladeira Frost Free que Não Gela Embaixo',
    intentQuery: '"geladeira nao gela parte de baixo frost free"',
    pain: 'Alimentos estragando na parte inferior, poça de gelo no fundo e dúvida se compensa consertar.',
    rootCause: 'Falha no sistema de degelo automático (sensor NTC descalibrado, resistência queimada, fusível térmico aberto ou dreno entupido).',
    effectiveSolution: 'Testamos a resistência e sensores com multímetro digital. Realizamos a troca do kit de degelo original e desobstrução do dreno no mesmo dia no local.',
    timeToSolve: 'Conserto em 45 a 90 minutos no local',
    prefillMsg: 'Olá! Minha geladeira gela no freezer mas não gela embaixo. Gostaria de um orçamento sem compromisso.',
    tagService: 'Geladeiras',
    videoUrl: 'https://img.supremasite.com.br/geladeiras-refrigeradores.mp4',
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
        answer: 'O valor depende do modelo e marca do eletrodoméstico (Brastemp, Electrolux, Consul, Samsung, LG). Apresentamos orçamento transparente no local antes de qualquer execução.'
      }
    ]
  },
  {
    slug: 'geladeira-apitando-piscando-motor-estalando',
    category: 'geladeiras',
    badge: 'Falha em Placa ou Compressor',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    title: 'Geladeira apitando, piscando luzes ou motor estalando sem partir',
    metaTitle: 'Geladeira Apitando ou Dá Estalo no Motor? Conserto em Domicílio',
    metaDescription: 'Geladeira piscando leds, apitando sem parar ou motor estalando? Reparo de placa Inverter e compressores em Penha, Piçarras e região com garantia 90 dias.',
    h1: 'Conserto de Geladeira Apitando, Piscando ou com Estalos no Motor',
    intentQuery: '"geladeira apitando piscando motor dando estalo"',
    pain: 'Alarme sonoro constante irritante, geladeira desligando sozinha ou estalos repetitivos no motor sem gelar.',
    rootCause: 'Defeito no capacitor/relé de partida do compressor ou desconfiguração/queima da placa eletrônica de potência Inverter.',
    effectiveSolution: 'Reparo ou reprogramação da placa eletrônica original, substituição de relés e protetor térmico com peças de fábrica no mesmo dia.',
    timeToSolve: 'Diagnóstico e reparo imediato em domicílio',
    prefillMsg: 'Olá! Minha geladeira está apitando/piscando ou o motor fica dando estalos sem gelar.',
    tagService: 'Geladeiras',
    videoUrl: 'https://img.supremasite.com.br/french-door.mp4',
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
      }
    ]
  },
  {
    slug: 'vazamento-de-agua-geladeira-troca-borracha',
    category: 'geladeiras',
    badge: 'Vedação & Dreno',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    title: 'Vazamento de água sob a geladeira ou borracha rasgada/solta',
    metaTitle: 'Geladeira Vazando Água ou Borracha da Porta Solta? Troca Rápida',
    metaDescription: 'Água escorrendo por baixo da geladeira ou porta que não veda? Troca de borrachas originais e desobstrução de dreno em Penha e litoral de SC.',
    h1: 'Conserto de Vazamento de Água e Troca de Borracha de Geladeira',
    intentQuery: '"vazamento de agua em baixo da geladeira troca de borracha"',
    pain: 'Piso da cozinha molhado estragando móveis de madeira e alto consumo de energia elétrica pelo escape de ar frio.',
    rootCause: 'Calha de evaporação obstruída por sujeira e borrachas (gaxetas) magnéticas ressecadas que perderam o magnetismo e vedação.',
    effectiveSolution: 'Higienização e desobstrução técnica do dreno + instalação de gaxeta magnética sob medida com vedação 100% hermética.',
    timeToSolve: 'Atendimento express no local',
    prefillMsg: 'Olá! Minha geladeira está vazando água ou precisa de troca da borracha da porta.',
    tagService: 'Geladeiras',
    symptoms: [
      'Poça de água constante no chão na frente ou atrás da geladeira',
      'Gelo formando ao redor do batente da porta',
      'Borracha rasgada, ressecada ou soltando do encaixe',
      'Conta de luz mais alta pelo esforço do motor'
    ],
    stepsToSolve: [
      'Desobstrução mecânica e química da calha e tubo do dreno',
      'Verificação da bandeja coletora sobre o compressor',
      'Remoção da gaxeta antiga e limpeza do canal da porta',
      'Instalação da borracha magnética nova com assentamento térmico'
    ],
    faqs: [
      {
        question: 'Como saber se a borracha da porta da geladeira precisa ser trocada?',
        answer: 'Faça o teste da folha de papel: coloque uma folha entre a borracha e o gabinete e feche a porta. Se a folha deslizar facilmente sem resistência, a borracha perdeu o magnetismo e precisa ser trocada.'
      }
    ]
  },
  {
    slug: 'lava-e-seca-erro-oe-5e-barulho-centrifugacao',
    category: 'lava-e-seca',
    badge: 'Solução Especializada Lava e Seca',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    title: 'Lava e Seca com código de erro OE / 5E / 4E ou barulho de batedeira',
    metaTitle: 'Lava e Seca com Erro OE/5E ou Barulho Forte? Conserto no Mesmo Dia',
    metaDescription: 'Lava e Seca LG, Samsung ou Electrolux com erro de drenagem (OE/5E) ou barulho no rolamento? Conserto com peças originais e garantia 90 dias em Penha/SC.',
    h1: 'Conserto de Lava e Seca com Códigos de Erro ou Barulho na Centrifugação',
    intentQuery: '"conserto lava e seca erro OE 5E barulho centrifugacao"',
    pain: 'Roupas molhadas presas dentro da máquina, água sem escoar ou barulho insuportável de ferro batendo na centrifugação.',
    rootCause: 'Bomba de drenagem queimada/obstruída por moedas ou rolamentos blindados desgastados com quebra do suporte da cruzeta do tambor.',
    effectiveSolution: 'Substituição imediata da bomba de esgotamento ou troca do kit completo de rolamentos blindados e suporte do tambor com alinhamento perfeito.',
    timeToSolve: 'Atendimento e reparo rápido em domicílio',
    prefillMsg: 'Olá! Minha Lava e Seca está com código de erro ou barulho forte na centrifugação.',
    tagService: 'Lava e Seca',
    videoUrl: 'https://img.supremasite.com.br/maquina-lavar.mp4',
    imageUrl: 'https://img.supremasite.com.br/lava-e-seca-sc.webp',
    symptoms: [
      'Código de erro OE / 5E / 5C indicando falta de drenagem',
      'Código de erro dE / dC / dE1 indicando porta destravada',
      'Barulho ensurdecedor na centrifugação parecendo uma turbina ou batedeira',
      'Vazamento de água pela parte inferior do tambor'
    ],
    stepsToSolve: [
      'Remoção e inspeção da bomba de dreno e filtro de detritos',
      'Troca do conjunto de rolamentos blindados NSK/SKF e retentor de alta vedação',
      'Substituição da triângulo cruzeta de alumínio do tambor inox',
      'Teste do motor Direct Drive / Digital Inverter e calibração final'
    ],
    faqs: [
      {
        question: 'O que significa o erro OE nas lavadoras LG ou 5E nas lavadoras Samsung?',
        answer: 'Indica falha no escoamento de água. Na maioria dos casos é causados por moedas ou objetos travando o hélice da bomba de dreno ou a queima da própria bomba elétrica.'
      }
    ]
  },
  {
    slug: 'camara-fria-cervejeira-perdendo-temperatura',
    category: 'comercial',
    badge: 'Plantão Comercial 24h',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
    title: 'Câmara Fria, Balcão Expositor ou Cervejeira perdendo temperatura',
    metaTitle: 'Conserto Emergencial 24h de Câmara Fria e Cervejeira | Penha e SC',
    metaDescription: 'Câmara frigorífica ou cervejeira esquentando e arriscando mercadorias? Atendimento emergencial 24h para peixarias, restaurantes e mercados.',
    h1: 'Assitência Técnica Emergencial de Câmara Fria e Refrigeração Comercial',
    intentQuery: '"conserto camara fria cervejeira comercial urgente"',
    pain: 'Risco urgente de perda de estoque de bebidas, carnes, peixes e laticínios em peixarias, restaurantes, mercados e pousadas.',
    rootCause: 'Vazamento de fluido refrigerante, obstrução no tubo capilar ou queima do micromotor do evaporador/condensador.',
    effectiveSolution: 'Atendimento emergencial prioritário com teste de pressão por nitrogênio, solda técnica de cobre/prata e recarga de gás.',
    timeToSolve: 'Chegada rápida emergencial com prioridade',
    prefillMsg: 'Olá! Preciso de atendimento URGENTE para refrigeração comercial (Câmara Fria / Cervejeira / Balcão).',
    tagService: 'Câmara Fria',
    videoUrl: 'https://img.supremasite.com.br/frigor%C3%ADfica.mp4',
    symptoms: [
      'Câmara fria acumulando gelo no evaporador e ventiladores parados',
      'Cervejeira comercial sem atingir temperatura negativa',
      'Compressor desarmando no pressostato de alta ou baixa pressão',
      'Alarme de alta temperatura no controlador Full Gauge ou Carel'
    ],
    stepsToSolve: [
      'Pressurização com gás Nitrogênio para localização de vazamentos em soldas',
      'Solda de alta resistência de liga de prata/cobre',
      'Processo de vácuo profundo com bomba de duplo estágio',
      'Carga de fluido refrigerante R404a, R22 ou R134a por balança de precisão'
    ],
    faqs: [
      {
        question: 'Qual o tempo de resposta para chamados comerciais urgentes?',
        answer: 'Atendemos chamados de câmaras frias e peixarias com prioridade máxima no raio de Penha, Piçarras, Navegantes e Itajaí, chegando em aproximadamente 30 a 60 minutos.'
      }
    ]
  },
  {
    slug: 'frigobar-nao-gela-furo-no-congelador',
    category: 'adegas-e-frigobares',
    badge: 'Atendimento Express',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    title: 'Frigobar não gela ou evaporador furado ao tirar gelo com faca',
    metaTitle: 'Conserto de Frigobar e Furo no Congelador | Santa Catarina Refrigeração',
    metaDescription: 'Furei o congelador do frigobar com a faca? Conserto com solda de alumínio, vácuo e carga de gás em Penha, Piçarras, Itajaí e região.',
    h1: 'Conserto de Frigobar Furado ou sem Gelar para Hotéis, Pousadas e Residências',
    intentQuery: '"frigobar nao gela furei o congelador com faca"',
    pain: 'Frigobar de pousada ou quarto sem funcionar, chiado de gás vazando por furo de faca e transtorno com hóspedes.',
    rootCause: 'Perfuração da tubulação de alumínio do evaporador ou queima do relé do compressor.',
    effectiveSolution: 'Solda técnica em alumínio, teste de estanqueidade, vácuo no sistema e recarga de gás R600a/R134a no próprio local.',
    timeToSolve: 'Conserto rápido no mesmo dia',
    prefillMsg: 'Olá! Furei o congelador do meu frigobar ou ele parou de gelar. Gostaria de um orçamento.',
    tagService: 'Frigobares',
    videoUrl: 'https://img.supremasite.com.br/frigobares.mp4',
    symptoms: [
      'Chiado forte de gás vazando após tentar tirar gelo com faca',
      'Frigobar liga o motor mas não gela absolutamente nada',
      'Aquecimento excessivo nas laterais sem refrigerar a cabine'
    ],
    stepsToSolve: [
      'Vedação e solda fria ou quente da perfuração no alumínio',
      'Troca do filtro secador para remover umidade do circuito',
      'Vácuo mecânico e nova carga de fluido refrigerante por balança'
    ],
    faqs: [
      {
        question: 'O que devo fazer imediatamente se furar o evaporador do frigobar?',
        answer: 'Desligue OBRIGATORIAMENTE o frigobar da tomada imediatamente. Se o compressor continuar rodando com o sistema furado, ele irá sugar umidade e água para dentro do motor, o que pode queimá-lo. Em seguida, chame nosso atendimento.'
      }
    ]
  },
  {
    slug: 'adega-climatizada-esquentando-vinhos',
    category: 'adegas-e-frigobares',
    badge: 'Controle Fino de Temperatura',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    title: 'Adega climatizada esquentando e alterando a temperatura dos vinhos',
    metaTitle: 'Conserto de Adega Climatizada em Penha e Região | Vinhos Conservados',
    metaDescription: 'Adega de vinhos esquentando ou apitando? Conserto de pastilha Peltier, placas e compressores de adegas Spicy, Electrolux, Brastemp e Tocave.',
    h1: 'Conserto e Manutenção de Adegas Climatizadas de Vinhos',
    intentQuery: '"adega climatizada esquentando nao gela vinhos"',
    pain: 'Risco de estragar rótulos e safras valiosas de vinho devido ao aumento não planejado de temperatura na adega.',
    rootCause: 'Queima da pastilha termoelétrica Peltier, acúmulo de poeira no cooler de exaustão ou falha na placa de fonte alimentadora.',
    effectiveSolution: 'Substituição da pastilha termoelétrica original, limpeza de dissipadores térmicos e reparo de placas eletrônicas.',
    timeToSolve: 'Atendimento rápido e cuidadoso no local',
    prefillMsg: 'Olá! Minha adega climatizada está esquentando e não mantém a temperatura do vinho.',
    tagService: 'Adegas',
    videoUrl: 'https://img.supremasite.com.br/adega-climatizada.mp4',
    symptoms: [
      'Display digital marcando temperatura muito alta (ex: 22°C a 26°C)',
      'Barulho excessivo nos miniventiladores traseiros',
      'Painel touch travado ou apitando continuadamente'
    ],
    stepsToSolve: [
      'Medição de voltagem na saída da placa para a pastilha Peltier',
      'Troca da pastilha Peltier de alta potência com pasta térmica de prata',
      'Troca dos miniventiladores silenciados e regulagem do termostato'
    ],
    faqs: [
      {
        question: 'Vocês consertam adegas termoelétricas e adegas com compressor?',
        answer: 'Sim! Atendemos ambos os sistemas: adegas termoelétricas (Peltier) e adegas de grande porte com compressores Inverter de baixo ruído.'
      }
    ]
  }
];
