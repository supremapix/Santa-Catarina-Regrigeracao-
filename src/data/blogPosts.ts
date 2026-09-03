export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  author: string;
  excerpt: string;
  contentHtml: string;
  takeaways: string[];
  faqs: { question: string; answer: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "geladeira-nao-gela-7-causas",
    title: "Geladeira não gela: conheça as 7 causas mais comuns e o que fazer",
    metaTitle: "Geladeira Não Gela: 7 Causas Comuns e Como Resolver | Blog SC Refrigeração",
    metaDescription: "Sua geladeira parou de gelar? Descubra as 7 causas mais frequentes (sensor NTC, kit degelo, gás, termostato, borracha) e saiba quando chamar o técnico.",
    category: "Diagnóstico & Dicas",
    datePublished: "2026-06-10",
    dateModified: "2026-08-15",
    readTime: "6 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Entenda por que o freezer gela mas o refrigerador fica quente, quando o motor liga e desliga rápido e quais peças costumam falhar nos modelos Frost Free.",
    takeaways: [
      "Em 70% dos casos de refrigerador quente, o problema está no sistema de degelo automático e não no motor.",
      "Desligar da tomada por 24h é apenas um paliativo: se a resistência ou sensor estiver queimado, o gelo voltará em 3 dias.",
      "Borrachas gastas aumentam o consumo de energia em até 30% e sobrecarregam o compressor.",
      "Nunca tente retirar placas de gelo com facas pontiagudas para não furar a tubulação de alumínio."
    ],
    faqs: [
      {
        question: "Por que a geladeira gela o freezer mas não gela embaixo?",
        answer: "Em geladeiras Frost Free, isso acontece quando o kit de degelo (sensor, resistência ou fusível) queima. O gelo acumula no evaporador e tampa a passagem de ar frio para a parte de baixo."
      },
      {
        question: "Quanto tempo depois de ligar na tomada a geladeira atinge a temperatura ideal?",
        answer: "Um refrigerador recém-ligado leva de 4 a 6 horas para estabilizar a temperatura do freezer (-18°C) e de 2 a 4 horas para a parte inferior (+3°C a +5°C)."
      }
    ],
    contentHtml: `
      <h2>1. Falha no Kit de Degelo Automático (Frost Free)</h2>
      <p>O problema número um em geladeiras Frost Free modernas (Brastemp, Electrolux, Consul, Samsung e LG) ocorre quando o freezer funciona perfeitamente, mas a parte de baixo permanece quente. O sistema Frost Free realiza ciclos automáticos a cada 8 horas para derreter o gelo da serpentina. Quando o sensor NTC descalibra, o termo-fusível abre ou a resistência elétrica queima, o gelo acumula progressivamente até bloquear o duto de ar e o ventilador.</p>
      
      <h2>2. Borracha de Vedação (Gaxeta) Desgastada ou Ressecada</h2>
      <p>A maresia no litoral de Santa Catarina (como em Penha, Navegantes, Piçarras e Balneário Camboriú) acelera o ressecamento do PVC e a perda do poder magnético das borrachas. O ar quente e úmido de fora entra sem parar, provocando suor interno, poças de água e sobrecarregando o compressor.</p>

      <h2>3. Dreno de Degelo Entupido</h2>
      <p>A água resultante do degelo automático deve descer por um duto até a bandeja sobre o motor. Se restos de sujeira ou lodo bloquearem o dreno, a água transborda para o fundo do refrigerador e recongela no canal, impedindo o fluxo de ar refrigerado.</p>

      <h2>4. Defeito no Relé de Partida ou Protetor Térmico</h2>
      <p>Se o motor da geladeira emite um estalo (click) a cada 2 ou 3 minutos mas não começa a funcionar, o defeito geralmente está no relé PTC cerâmico ou no capacitor de partida. O reparo é rápido e dispensa a troca do compressor.</p>

      <h2>5. Micro-vazamento de Gás Refrigerante (R134a / R600a)</h2>
      <p>Ao contrário da crença popular, o gás da geladeira não 'vence' nem se gasta com o tempo. Ele só acaba se houver um furo ou trinca na tubulação de cobre ou alumínio. O sintoma é o motor funcionando continuamente sem gelar nem o freezer nem a parte inferior.</p>

      <h2>6. Termostato ou Sensor de Temperatura Descalibrado</h2>
      <p>Em modelos tradicionais com botão de regulagem, o termostato corta e aciona o motor. Se os contatos internos colarem ou o bulbo perder pressão de gás, a geladeira pode parar de gelar ou congelar tudo nas prateleiras.</p>

      <h2>7. Placa Eletrônica de Potência com Trilhas Queimadas</h2>
      <p>Descargas atmosféricas (raios) e oscilações na rede elétrica comuns durante tempestades de verão no litoral podem queimar varistores, capacitores e microcontroladores da placa de controle.</p>
    `
  },
  {
    slug: "consertar-ou-trocar-geladeira",
    title: "Consertar ou trocar a geladeira? Veja a regra dos 50% e quando compensa",
    metaTitle: "Consertar ou Trocar a Geladeira? Guia Completo | SC Refrigeração",
    metaDescription: "Dúvida se vale a pena consertar sua geladeira usada ou comprar uma nova? Conheça a regra dos 50%, vida útil média e análise de custo-benefício.",
    category: "Economia & Planejamento",
    datePublished: "2026-05-20",
    dateModified: "2026-08-10",
    readTime: "5 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Descubra critérios técnicos objetivos para decidir entre o reparo ou a compra de um refrigerador novo.",
    takeaways: [
      "Se o orçamento do conserto for menor que 40% a 50% do valor de uma nova equivalente, o conserto é financeiramente mais vantajoso.",
      "Geladeiras antigas com gabinete em perfeito estado costumam durar mais 5 a 10 anos após uma revisão de peças de desgaste.",
      "Modelos modernos Inverter custam entre R$ 4.000 e R$ 9.000, tornando a manutenção de placas e sensores extremamente rentável."
    ],
    faqs: [
      {
        question: "Qual a regra dos 50% para eletrodomésticos?",
        answer: "A regra diz que se o conserto custar menos de 50% do preço de um aparelho novo e a geladeira tiver menos de 8 a 10 anos de uso, o conserto é a escolha mais inteligente e econômica."
      }
    ],
    contentHtml: `
      <h2>A Análise Financeira: Conserto vs Nova Aquisição</h2>
      <p>Diante de uma geladeira que parou de funcionar, a primeira reação de muitas pessoas é pesquisar os preços de aparelhos novos em grandes varejistas. No entanto, os preços médios de refrigeradores duplex e Frost Free hoje variam entre R$ 2.800 e R$ 6.500, enquanto modelos Side by Side ultrapassam R$ 8.000.</p>
      
      <h2>Quando o Conserto é 100% Recomendado:</h2>
      <ul>
        <li><strong>Defeitos em periféricos:</strong> Sensores de degelo, termostatos, relés, ventiladores e borrachas custam tipicamente entre R$ 140 e R$ 380.</li>
        <li><strong>Aparelho com menos de 10 anos de uso:</strong> A estrutura térmica (isolamento em poliuretano) e serpentinas continuam com alta eficiência.</li>
        <li><strong>Geladeiras Inverter de alto padrão:</strong> A troca de uma placa eletrônica por uma fração pequena do preço restaura o aparelho para estado de zero km.</li>
      </ul>

      <h2>Quando a Troca Pode Ser Avaliada:</h2>
      <p>A compra de uma nova só se justifica quando o gabinete metálico estiver totalmente enferrujado por maresia extrema, com furos múltiplos no isolamento térmico interno que inviabilizem a estanqueidade.</p>
    `
  },
  {
    slug: "quanto-tempo-dura-uma-geladeira",
    title: "Quanto tempo dura uma geladeira moderna e como aumentar sua vida útil?",
    metaTitle: "Quanto Tempo Dura uma Geladeira? Dicas de Durabilidade | SC Refrigeração",
    metaDescription: "Descubra a vida útil real de geladeiras convencionais e Inverter. Dicas práticas de manutenção para fazer seu eletrodoméstico durar mais de 15 anos.",
    category: "Durabilidade & Cuidados",
    datePublished: "2026-04-15",
    dateModified: "2026-08-01",
    readTime: "5 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Saiba quanto tempo dura um compressor Embraco e como pequenos hábitos diários evitam a queima precoce do motor.",
    takeaways: [
      "A vida útil média de um bom refrigerador é de 10 a 16 anos com as manutenções corretas.",
      "Manter 10cm de distância da parede reduz a temperatura de trabalho do compressor e economiza energia.",
      "Limpar a poeira da serpentina traseira a cada 6 meses evita sobreaquecimento do motor."
    ],
    faqs: [
      {
        question: "Compressores Inverter duram mais que os tradicionais?",
        answer: "Sim! Como o compressor Inverter não sofre o impacto liga-e-desliga violento das partidas convencionais, seu desgaste mecânico é consideravelmente menor."
      }
    ],
    contentHtml: `
      <h2>A Durabilidade Média dos Refrigeradores no Brasil</h2>
      <p>Em média, uma geladeira de marcas consagradas como Brastemp, Electrolux, Consul, Samsung e LG tem expectativa de vida útil entre 10 e 15 anos. Com trocas periódicas de borrachas e limpeza de condensadores, muitos modelos chegam a operar perfeitamente por mais de duas décadas.</p>
      
      <h2>Fatores que Encurtam a Vida Útil da Geladeira:</h2>
      <ol>
        <li><strong>Falta de espaço para ventilação:</strong> Encostar o aparelho na parede ou embutir em nichos apertados sem circulação de ar superaquece o motor.</li>
        <li><strong>Colocar alimentos fervendo:</strong> Força o sistema de refrigeração a trabalhar no limite por horas seguidas.</li>
        <li><strong>Portas mal vedadas:</strong> Faz o motor trabalhar 24h sem desligar, acelerando a queima das bobinas elétricas.</li>
      </ol>
    `
  },
  {
    slug: "como-economizar-energia-geladeira",
    title: "Como economizar energia com a geladeira: 9 dicas práticas e comprovadas",
    metaTitle: "Como Economizar Energia com a Geladeira: 9 Dicas | SC Refrigeração",
    metaDescription: "A geladeira representa até 30% da conta de luz da sua casa. Veja 9 dicas práticas para reduzir o consumo de energia do refrigerador hoje mesmo.",
    category: "Economia & Energia",
    datePublished: "2026-03-25",
    dateModified: "2026-07-28",
    readTime: "6 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Reduza sua conta de energia da Celesc adotando pequenos ajustes na temperatura, vedação e organização interna dos alimentos.",
    takeaways: [
      "Ajustar a temperatura de acordo com a estação (verão/inverno) evita desperdício de eletricidade.",
      "Nunca use a grade traseira da geladeira para secar tênis ou panos de prato.",
      "Uma geladeira cheia de forma organizada consome menos que uma geladeira quase vazia, pois os alimentos frios ajudam a reter a temperatura."
    ],
    faqs: [
      {
        question: "Secar roupa atrás da geladeira gasta mais energia?",
        answer: "Sim! Cobrir o condensador traseiro impede a dissipação do calor, fazendo o compressor trabalhar sob pressão extrema e aumentando o consumo em até 40%."
      }
    ],
    contentHtml: `
      <h2>A Geladeira na Conta de Energia</h2>
      <p>Sendo um dos poucos eletrodomésticos que fica ligado 24 horas por dia, 365 dias por ano, a geladeira pode responder por 25% a 30% do total da fatura residencial de energia elétrica.</p>
      
      <h2>As 9 Dicas de Ouro dos Nossos Técnicos:</h2>
      <ul>
        <li>1. Faça o teste da folha de papel na borracha para checar a vedação.</li>
        <li>2. Não forre as prateleiras com plásticos ou toalhas que impeçam a circulação do ar frio.</li>
        <li>3. Deixe os alimentos quentes atingirem a temperatura ambiente antes de guardar.</li>
        <li>4. Mantenha pelo menos 10 cm de espaço livre nas laterais e fundo da geladeira.</li>
        <li>5. Ajuste o termostato para níveis moderados nos dias de temperatura amena.</li>
        <li>6. Evite abrir a porta repetidamente sem necessidade.</li>
        <li>7. Limpe a poeira e teias de aranha do motor e condensador semestralmente.</li>
        <li>8. Verifique se o dreno de degelo está livre de obstruções.</li>
        <li>9. Chame assistência técnica especializada se o motor não desligar em nenhum momento do dia.</li>
      </ul>
    `
  },
  {
    slug: "frost-free-vs-degelo-manual",
    title: "Frost Free vs Degelo Manual: qual escolher e como cuidar de cada tipo",
    metaTitle: "Frost Free vs Degelo Manual: Comparativo Completo | SC Refrigeração",
    metaDescription: "Entenda as diferenças reais de funcionamento, consumo de energia e custos de manutenção entre geladeiras Frost Free e degelo manual.",
    category: "Guia de Compra",
    datePublished: "2026-03-05",
    dateModified: "2026-07-15",
    readTime: "5 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Saiba qual sistema atende melhor seu perfil de uso e como ocorrem os defeitos em cada tecnologia.",
    takeaways: [
      "Frost Free oferece conforto total sem necessidade de descongelar o freezer manualmente.",
      "Refrigeradores manuais/Cycle Defrost consomem ligeiramente menos energia mas exigem paradas periódicas para limpeza.",
      "A manutenção do Frost Free exige técnicos equipados com instrumentos digitais de teste de sensores e resistências."
    ],
    faqs: [
      {
        question: "Por que a Frost Free resseca alguns alimentos destampados?",
        answer: "O ar dentro da Frost Free é seco e circula constantemente por ventilação forçada. Para evitar o ressecamento, guarde sempre frutas, verduras e sobras em recipientes fechados com tampa ou filme plástico."
      }
    ],
    contentHtml: `
      <h2>O Conceito do Sistema Frost Free</h2>
      <p>O termo Frost Free significa literalmente 'livre de gelo'. Nesses aparelhos, a formação de gelo ocorre exclusivamente em uma serpentina escondida atrás da parede plástica do freezer. Um ventilador distribui o ar resfriado para todos os compartimentos, e uma resistência automática queima o gelo periodicamente.</p>
    `
  },
  {
    slug: "erros-comuns-geladeira-nova",
    title: "Erros mais comuns ao instalar e ligar uma geladeira nova pela primeira vez",
    metaTitle: "Erros ao Ligar Geladeira Nova: O que Não Fazer | SC Refrigeração",
    metaDescription: "Comprou geladeira nova? Descubra por que você não deve ligar na tomada imediatamente após o transporte e como fazer a primeira instalação com segurança.",
    category: "Instalação & Cuidados",
    datePublished: "2026-02-18",
    dateModified: "2026-07-02",
    readTime: "4 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Evite a queima imediata do motor ou perda de garantia de fábrica seguindo estas orientações essenciais de primeira instalação.",
    takeaways: [
      "Aguarde de 2 a 6 horas após o transporte antes de ligar a geladeira na tomada para o óleo do compressor retornar à base.",
      "Nunca use adaptadores T (benjamins) ou extensões finas na tomada da geladeira.",
      "Deixe a geladeira funcionando vazia por pelo menos 4 horas antes de abastecer com alimentos."
    ],
    faqs: [
      {
        question: "O que acontece se ligar a geladeira logo após o transporte?",
        answer: "Se a geladeira foi inclinada ou transportada deitada, o óleo lubrificante entra na tubulação de gás. Ligar de imediato pode causar calço hidráulico no pistão e queimar o compressor."
      }
    ],
    contentHtml: `
      <h2>O Repouso Obrigatório Pós-Transporte</h2>
      <p>O compressor da geladeira contém cerca de 250ml a 350ml de óleo sintético especial que lubrifica os pistões internos. Durante o transporte em caminhões e subida de escadas, esse óleo migra para as tubulações de refrigeração. O tempo de repouso permite que a gravidade drene todo o óleo de volta para a carcaça do motor.</p>
    `
  },
  {
    slug: "gas-da-geladeira-acabou-mitos-e-verdades",
    title: "O gás da geladeira acabou? Conheça os mitos, verdades e quando realmente vaza",
    metaTitle: "Gás da Geladeira Acabou? Mitos e Verdades | SC Refrigeração",
    metaDescription: "O gás da geladeira gasta com o tempo? Descubra a verdade científica sobre o circuito selado e como identificar vazamentos reais de refrigerante.",
    category: "Refrigeração & Técnica",
    datePublished: "2026-01-20",
    dateModified: "2026-06-25",
    readTime: "5 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Desmistificando um dos maiores boatos da refrigeração e explicando como funciona o teste de pressurização com nitrogênio.",
    takeaways: [
      "O gás refrigerante opera em circuito 100% hermético e selado: ele NÃO acaba nem vence com o tempo.",
      "Se o gás sumiu, OBRIGATORIAMENTE existe um ponto de vazamento na tubulação que precisa ser soldado.",
      "Recarregar gás sem consertar o vazamento é jogar dinheiro fora, pois o fluido vazará novamente em poucos dias."
    ],
    faqs: [
      {
        question: "Quanto tempo dura uma carga de gás na geladeira?",
        answer: "A carga de gás original dura a vida inteira do refrigerador (15 a 20+ anos), a menos que ocorra uma perfuração mecânica ou corrosão por maresia nas tubulações."
      }
    ],
    contentHtml: `
      <h2>O Circuito Hermético Selado</h2>
      <p>Ao contrário do botijão de cozinha ou do combustível do carro, o gás da geladeira (R134a ou R600a ecológico) não é consumido durante o funcionamento. Ele circula em um ciclo contínuo de compressão, condensação, expansão e evaporação em circuito fechado soldado de fábrica.</p>
    `
  },
  {
    slug: "manutencao-preventiva-camara-fria",
    title: "Manutenção preventiva em câmaras frias comerciais: guia completo e PMOC",
    metaTitle: "Manutenção Preventiva em Câmara Fria Comercial | SC Refrigeração",
    metaDescription: "Garanta a conformidade sanitária da sua empresa e evite perda de mercadorias perecíveis com manutenção preventiva periódica em câmaras frigoríficas.",
    category: "Comercial & B2B",
    datePublished: "2026-01-10",
    dateModified: "2026-06-18",
    readTime: "7 min de leitura",
    author: "Equipe de Engenharia e Refrigeração Comercial SC",
    excerpt: "Plano de manutenção preventiva para supermercados, peixarias, frigoríficos, hotéis e restaurantes do Litoral Catarinense.",
    takeaways: [
      "A manutenção preventiva em câmaras frias reduz em até 40% o risco de paradas emergenciais.",
      "Limpeza mensal de condensadores evita picos de pressão de descarga e queima de compressores caros.",
      "A calibração de controladores digitais Full Gauge assegura temperaturas exatas exigidas pela Anvisa."
    ],
    faqs: [
      {
        question: "Com que frequência uma câmara fria comercial deve passar por manutenção?",
        answer: "Recomenda-se revisão mensal para verificação de pressões, teste de degelo e limpeza química das aletas, além de inspeção trimestral completa das válvulas de expansão."
      }
    ],
    contentHtml: `
      <h2>A Importância Crítica da Continuidade Térmica no Comércio</h2>
      <p>Em peixarias de Navegantes e Itajaí, restaurantes de Balneário Camboriú e hotéis de Penha, uma falha na câmara frigorífica pode acarretar perdas financeiras de dezenas de milhares de reais em poucas horas de calor. O plano de manutenção preventiva assegura o monitoramento de pressões, consumo de corrente e ciclos de degelo programados.</p>
    `
  },
  {
    slug: "lava-e-seca-nao-seca-causas",
    title: "Lava e Seca não seca as roupas: 6 causas mais comuns e como resolver",
    metaTitle: "Lava e Seca Não Seca as Roupas? 6 Causas e Conserto | SC Refrigeração",
    metaDescription: "Roupas saindo molhadas ou úmidas da lava e seca? Duto entupido, termostato aberto ou resistência queimada? Saiba o que fazer com garantia 90 dias.",
    category: "Lava e Seca",
    datePublished: "2025-12-05",
    dateModified: "2026-06-10",
    readTime: "6 min de leitura",
    author: "Especialistas em Lava e Seca SC Refrigeração",
    excerpt: "Entenda por que sua lava e seca LG, Samsung ou Electrolux não aquece ou demora horas para secar as roupas.",
    takeaways: [
      "O entupimento do duto de secagem por fiapos e pelos compactados é o vilão número 1 da secagem ineficiente.",
      "A capacidade de secagem é sempre cerca de metade da capacidade de lavagem da máquina (ex: lava 11kg / seca 6kg).",
      "As lava e seca necessitam de fornecimento de água fria durante a secagem para condensar a umidade."
    ],
    faqs: [
      {
        question: "Por que a lava e seca precisa de torneira aberta na secagem?",
        answer: "O sistema de condensação resfria a câmara do duto com água fria para que o vapor de água da roupa se torne líquido e saia pelo esgoto. Sem água, a condensação não ocorre e a roupa permanece úmida."
      }
    ],
    contentHtml: `
      <h2>O Funcionamento da Secagem por Condensação</h2>
      <p>Ao contrário dos secadores tradicionais americanos que expelem o ar quente por um duto para fora da casa, as máquinas Lava e Seca modernas brasileiras funcionam em circuito fechado por condensação de vapor. Um ventilador sopra ar quente aquecido por resistência sobre as roupas em rotação, e a água fria condensa a umidade retirada dos tecidos.</p>
    `
  },
  {
    slug: "como-escolher-assistencia-tecnica-refrigeracao",
    title: "Como escolher uma assistência técnica confiável em Santa Catarina",
    metaTitle: "Como Escolher Assistência Técnica de Refrigeração em SC | Dicas Seguras",
    metaDescription: "Evite golpes e serviços mal feitos: saiba o que exigir de uma assistência técnica de geladeiras, como garantia por escrito, peças originais e endereço real.",
    category: "Segurança & Consumidor",
    datePublished: "2025-11-15",
    dateModified: "2026-05-25",
    readTime: "5 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Checklist indispensável para contratar serviços de refrigeração residencial e comercial sem cair em armadilhas.",
    takeaways: [
      "Exija sempre ordem de serviço formal com CNPJ, endereço fixo e telefone real do prestador.",
      "Desconfie de orçamentos por telefone sem que o técnico tenha inspecionado o aparelho com instrumentos de teste.",
      "A garantia legal mínima por lei é de 90 dias para serviços e peças instaladas."
    ],
    faqs: [
      {
        question: "A assistência deve dar garantia por escrito?",
        answer: "Sim! Toda empresa séria emite ordem de serviço física ou digital com descrição das peças trocadas e o prazo legal de 90 dias de garantia."
      }
    ],
    contentHtml: `
      <h2>Cuidados Essenciais na Contratação de Técnicos em Domicílio</h2>
      <p>A entrada de um profissional em sua residência exige confiança, identificação clara e compromisso técnico. Em Santa Catarina Refrigeração, todos os nossos técnicos são devidamente uniformizados, utilizam equipamentos de medição certificados e fornecem orçamento prévio e recibo formal com 90 dias de garantia em todos os serviços prestados.</p>
    `
  },
  {
    slug: "geladeira-casa-de-praia-cuidados-fora-de-temporada",
    title: "Geladeira em casa de praia: cuidados essenciais contra maresia e fora de temporada",
    metaTitle: "Geladeira em Casa de Praia: Cuidados Contra Maresia | SC Refrigeração",
    metaDescription: "Vai fechar a casa de praia até a próxima temporada de verão? Saiba se deve deixar a geladeira ligada ou desligada e como proteger contra a maresia.",
    category: "Casa de Praia & Litoral",
    datePublished: "2025-10-20",
    dateModified: "2026-05-10",
    readTime: "6 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Dicas fundamentais para proprietários de imóveis em Penha, Piçarras, Gravatá, Itapema e Balneário Camboriú.",
    takeaways: [
      "Se for deixar a geladeira desligada por meses, deixe as portas entreabertas para evitar mofo e odores irreversíveis.",
      "Passe uma fina camada de cera automotiva na lataria externa para proteger a pintura contra a maresia do litoral.",
      "Desconecte da tomada durante os meses de baixa temporada para evitar queima por tempestades elétricas."
    ],
    faqs: [
      {
        question: "É melhor deixar a geladeira da casa de praia ligada no mínimo ou desligada?",
        answer: "Se o imóvel ficar fechado por mais de 30 dias consecutivos sem uso, o mais seguro é desligar da tomada, secar todo o interior com pano macio e deixar as portas presas entreabertas com um calço de borracha."
      }
    ],
    contentHtml: `
      <h2>O Efeito da Maresia nos Eletrodomésticos Litorâneos</h2>
      <p>A brisa marinha carrega micropartículas de sal e umidade constante que atacam as dobradiças, chapas metálicas, relés elétricos e placas de controle dos refrigeradores instalados nas cidades de Penha, Piçarras, Navegantes, Itajaí, Balneário Camboriú e Itapema. Adotar procedimentos corretos de encerramento da temporada protege seu patrimônio por muitos anos.</p>
    `
  },
  {
    slug: "codigos-de-erro-lava-e-seca-lg-samsung",
    title: "Guia definitivo de códigos de erro Lava e Seca LG e Samsung: o que cada um significa",
    metaTitle: "Códigos de Erro Lava e Seca LG e Samsung: Tabela Completa | SC Refrigeração",
    metaDescription: "Tabela completa de códigos de erro de Lava e Seca LG (OE, dE, LE, UE, tE, FE) e Samsung (5E, 4E, dE, UE, HE, 3E). Causas e soluções explicadas.",
    category: "Lava e Seca & Códigos",
    datePublished: "2025-09-12",
    dateModified: "2026-05-02",
    readTime: "7 min de leitura",
    author: "Especialistas em Lava e Seca SC Refrigeração",
    excerpt: "Consulte rapidamente o significado daquele código misterioso piscando no visor digital da sua lavadora e saiba como agir.",
    takeaways: [
      "Erros OE / 5E indicam problemas de drenagem de água (bomba ou filtro entupido).",
      "Erros dE / dC apontam falha no sensor da trava da porta ou escotilha aberta.",
      "Erros LE / 3E sinalizam sobrecarga no motor Direct Drive ou sensor Hall avariado.",
      "Erros UE / Ub representam desbalanceamento do peso de roupas durante a centrifugação."
    ],
    faqs: [
      {
        question: "Como resetar o código de erro da Lava e Seca LG ou Samsung?",
        answer: "Retire o plugue da tomada por 10 minutos. Em seguida, pressione e segure o botão Ligar/Desligar por 5 segundos com ela fora da tomada para descarregar os capacitores. Ligue novamente na tomada e inicie um ciclo de teste."
      }
    ],
    contentHtml: `
      <h2>Tabela Rápida de Códigos de Erro LG:</h2>
      <ul>
        <li><strong>OE:</strong> Falha de drenagem de água (bomba ou filtro).</li>
        <li><strong>dE / dE1 / dE2:</strong> Erro de porta destravada ou trinco quebrado.</li>
        <li><strong>UE:</strong> Cesto desbalanceado na centrifugação.</li>
        <li><strong>LE:</strong> Motor Direct Drive travado ou sobrecarregado.</li>
        <li><strong>tE:</strong> Termistor de temperatura da água ou secagem em curto.</li>
        <li><strong>FE:</strong> Transbordamento de água (válvula de entrada travada aberta).</li>
      </ul>

      <h2>Tabela Rápida de Códigos de Erro Samsung:</h2>
      <ul>
        <li><strong>5E / 5C:</strong> Falha na drenagem de água.</li>
        <li><strong>4E / 4C:</strong> Falha no fornecimento de água da torneira.</li>
        <li><strong>dE / dC:</strong> Erro na trava da porta.</li>
        <li><strong>Ub / UE:</strong> Carga de roupas desbalanceada.</li>
        <li><strong>3E:</strong> Erro no motor inversor ou placa de potência.</li>
        <li><strong>HE / HC:</strong> Falha no aquecedor de água ou secagem.</li>
      </ul>
    `
  },
  {
    slug: "camara-fria-nao-gela-causas",
    title: "Câmara fria não gela: conheça as possíveis causas e como agir rapidamente",
    metaTitle: "Câmara Fria Não Gela: Principais Causas e Soluções | SC Refrigeração",
    metaDescription: "Sua câmara frigorífica perdeu rendimento ou parou de congelar? Veja as causas comuns (pressão, válvulas, sujeira no condensador, gás) e solucione com urgência.",
    category: "Câmaras Frias B2B",
    datePublished: "2026-08-01",
    dateModified: "2026-08-20",
    readTime: "7 min de leitura",
    author: "Engenharia de Refrigeração Comercial SC",
    excerpt: "Identifique rapidamente por que a câmara fria do seu supermercado, peixaria ou restaurante em SC não está atingindo a temperatura desejada.",
    takeaways: [
      "Acúmulo de sujeira nas aletas do condensador é responsável por mais de 50% dos casos de perda de rendimento em câmaras frias.",
      "Falha no ciclo de degelo automático gera bloqueio de gelo no evaporador e impede o fluxo de ar.",
      "Vazamentos de gás refrigerante devem ser detectados com nitrogênio sob pressão para evitar queimas do compressor."
    ],
    faqs: [
      {
        question: "O que fazer imediatamente quando a câmara fria para de gelar?",
        answer: "Mantenha as portas estritamente fechadas para conservar o frio residual, verifique se o disjuntor do quadro elétrico não caiu e chame imediatamente assistência técnica com plantão de urgência."
      }
    ],
    contentHtml: `
      <h2>1. Sujeira no Condensador Externo</h2>
      <p>Em áreas comerciais e praianas do Litoral Catarinense (Penha, Navegantes, Itajaí, Balneário Camboriú), a poeira e o salitre acumulados nas aletas de alumínio do condensador travam a troca térmica. Isso eleva a pressão de descarga do compressor, fazendo o protetor de alta pressão armar e desligar o sistema.</p>
      <h2>2. Congelamento do Evaporador (Bloqueio por Gelo)</h2>
      <p>Se as resistências elétricas ou o sistema de degelo por gás quente falharem, o gelo envolve totalmente o evaporador. O ar dos forçadores não consegue atravessar a colmeia e a temperatura da câmara sobe.</p>
      <h2>3. Desregulagem da Válvula de Expansão Termostática</h2>
      <p>A válvula de expansão dosifica o fluido refrigerante que entra no evaporador. Se houver descalibração do bulbo ou entupimento por umidade/sujeira no elemento filtrante, o fluxo de gás cai drásticamente.</p>
    `
  },
  {
    slug: "quando-fazer-manutencao-preventiva-camara-fria",
    title: "Quando fazer manutenção preventiva em câmara fria? Periodicidade e Checklist",
    metaTitle: "Quando Fazer Manutenção Preventiva em Câmara Fria? | SC Refrigeração",
    metaDescription: "Saiba a frequência exata recomendada para revisão preventiva em câmaras frias comerciais e evite a perda imprevista de estoques perecíveis.",
    category: "Câmaras Frias B2B",
    datePublished: "2026-07-25",
    dateModified: "2026-08-18",
    readTime: "6 min de leitura",
    author: "Engenharia de Refrigeração Comercial SC",
    excerpt: "Conheça o cronograma de manutenção mensal, trimestral e anual exigido por normas sanitárias para câmaras de congelados e resfriados.",
    takeaways: [
      "A inspeção mensal dos filtros e condensadores previne até 80% das quebras na alta temporada.",
      "O teste de isolamento elétrico das bobinas do compressor evita curto-circuitos repentinos.",
      "Mantenha o livro de registro do PMOC atualizado para fiscalizações da Vigilância Sanitária."
    ],
    faqs: [
      {
        question: "Qual o intervalo ideal para revisão de câmaras frias em restaurantes e peixarias?",
        answer: "O plano mensal é o mais indicado para estabelecimentos comerciais com uso intensivo, garantindo higienização de forçadores e aferição de carga de gás."
      }
    ],
    contentHtml: `
      <h2>A Periodicidade Certa para Cada Tipo de Operação</h2>
      <p>Para câmaras frigoríficas operando em supermercados, indústrias de pescados e distribuição de alimentos, a manutenção preventiva mensal é essential para garantir a segurança alimentar e evitar paradas que causam prejuízos milionários.</p>
    `
  },
  {
    slug: "maquina-de-gelo-nao-produz-gelo",
    title: "Máquina de gelo não produz gelo: 5 causas frequentes e como reparar",
    metaTitle: "Máquina de Gelo Não Faz Gelo: 5 Causas e Reparo | SC Refrigeração",
    metaDescription: "Sua máquina de gelo comercial liga mas não produz cubos ou escamas? Entenda problemas na entrada de água, gás, sensores e sonda de colheita.",
    category: "Equipamentos Comerciais",
    datePublished: "2026-07-10",
    dateModified: "2026-08-15",
    readTime: "6 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Saiba o que checar na sua máquina de gelo Macom, Everest, Scotsman ou Manitowoc quando o ciclo de congelamento falha.",
    takeaways: [
      "Filtros de água entupidos cortam o fluxo para a bandeja de evaporação e paralisam a máquina.",
      "Calcificação nas placas de evaporador impede o descarte automático dos cubos de gelo.",
      "Falha na válvula de gás quente impede a soltura do gelo pronto no ciclo de colheita."
    ],
    faqs: [
      {
        question: "Por que os cubos de gelo saem finos e ocos?",
        answer: "Cubos ocos ou finos costumam indicar baixa carga de gás refrigerante, condensador extremamente sujo ou baixa vazão de água na entrada."
      }
    ],
    contentHtml: `
      <h2>1. Falha na Válvula Solenóide de Entrada de Água ou Filtro Entupido</h2>
      <p>Sem vazão suficiente de água potável, a máquina interrompe o ciclo por segurança. A substituição periódica dos elementos filtrantes de carvão ativado é indispensável.</p>
      <h2>2. Acúmulo de Calcário na Placa do Evaporador</h2>
      <p>A água mineralizada deposita sais na placa evaporadora. Essa incrustação isola o frio e impede que a lâmina de água congelada deslize para a gaveta no momento do ciclo de desmolde.</p>
    `
  },
  {
    slug: "manutencao-maquina-de-gelo-comercial",
    title: "Manutenção de máquina de gelo comercial: higienização e prevenção",
    metaTitle: "Manutenção de Máquina de Gelo Comercial em SC | SC Refrigeração",
    metaDescription: "Manutenção técnica profissional e desinfecção de máquinas de gelo comerciais para hotéis, bares, peixarias e restaurantes em Santa Catarina.",
    category: "Equipamentos Comerciais",
    datePublished: "2026-06-28",
    dateModified: "2026-08-12",
    readTime: "5 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Procedimento passo a passo para sanitarização e manutenção mecânica em produtoras de gelo comerciais.",
    takeaways: [
      "A higienização do reservatório e bicos injetores deve ocorrer trimestralmente para evitar biofilme de bactérias.",
      "Troca dos filtros de água a cada 6 meses mantém o gelo transparente e sem sabor alterado.",
      "Revisão da bomba de circulação de água evita a queima mecânica por travamento."
    ],
    faqs: [
      {
        question: "Qual produto usar para limpar o reservatório da máquina de gelo?",
        answer: "Devem ser utilizados desincrustantes e sanificantes de grau alimentício aprovados pela Anvisa, que removem incrustações minerais sem deixar resíduos tóxicos."
      }
    ],
    contentHtml: `
      <h2>Sanitarização Exigida pela Anvisa para Produção de Gelo</h2>
      <p>O gelo é um alimento e seu reservatório requer rigoroso controle sanitário. Bares, peixarias e hotéis de SC devem realizar limpezas químicas periódicas para evitar a formação de limo e algas nos dutos de recirculação.</p>
    `
  },
  {
    slug: "problemas-comuns-refrigeracao-comercial",
    title: "Os 7 problemas mais comuns em equipamentos de refrigeração comercial",
    metaTitle: "Problemas Comuns em Refrigeração Comercial | SC Refrigeração",
    metaDescription: "Conheça os defeitos mais frequentes em balcões expositores, cervejeiras, ilhas de congelados e geladeiras comerciais em estabelecimentos de SC.",
    category: "Refrigeração Comercial",
    datePublished: "2026-06-15",
    dateModified: "2026-08-05",
    readTime: "6 min de leitura",
    author: "Engenharia de Refrigeração Comercial SC",
    excerpt: "Descubra como evitar os defeitos mais caros em sistemas comerciais de refrigeração.",
    takeaways: [
      "Excesso de carga de produtos bloqueia as saídas de ar dos balcões expositores.",
      "Vedações e gaxetas danificadas geram infiltração contínua de ar úmido.",
      "Desregulagem de termostatos digitais provoca ciclos intermináveis do compressor."
    ],
    faqs: [
      {
        question: "Por que a cervejeira do bar não atinge a temperatura negativa ideal?",
        answer: "Isso ocorre por falta de ventilação no condensador traseiro, respiro de ar bloqueado por garrafas mal dispostas ou vazamento sutil de gás no microcanal."
      }
    ],
    contentHtml: `
      <h2>1. Bloqueio da Circulação de Ar por Alocação Incorreta de Produtos</h2>
      <p>Forçar mercadorias além do limite do balcão tampa a grelha de insuflamento de ar frio, gerando zonas quentes nas prateleiras superiores e sobrecarregando os compressores.</p>
    `
  },
  {
    slug: "diferenca-refrigeracao-comercial-e-industrial",
    title: "Diferenças entre refrigeração comercial e industrial: capacidade e componentes",
    metaTitle: "Refrigeração Comercial vs Industrial: Entenda as Diferenças | SC Refrigeração",
    metaDescription: "Entenda os conceitos técnicos que diferenciam a refrigeração comercial (balcões, câmaras médias) da refrigeração industrial (amônia, rack de compressores).",
    category: "Conceitos Técnicos",
    datePublished: "2026-05-30",
    dateModified: "2026-07-20",
    readTime: "6 min de leitura",
    author: "Engenharia de Refrigeração Comercial SC",
    excerpt: "Guia explicativo sobre compressores semi-herméticos, rosca, amônia (R717) e CO2 para sistemas comerciais e industriais.",
    takeaways: [
      "A refrigeração comercial foca no varejo, restaurantes e conservação de curto/médio prazo em MTR (Média Temperatura).",
      "A refrigeração industrial atende abatedouros, túneis de congelamento rápido e processamento em grande escala.",
      "Sistemas industriais costumam utilizar tubulações de aço com amônia ou sistemas de central de compressores em paralelo."
    ],
    faqs: [
      {
        question: "Qual tipo de fluído refrigerante é mais comum na refrigeração comercial?",
        answer: "A refrigeração comercial utiliza predominantemente R404A, R134a, R452A e R290 (propano ecológico), enquanto a industrial emprega R717 (Amônia) e CO2."
      }
    ],
    contentHtml: `
      <h2>Arquitetura de Refrigeração Comercial vs Industrial</h2>
      <p>Enquanto a refrigeração comercial atende supermercados, padarias e peixarias com unidades condensadoras fracionadas (1 HP a 15 HP), a refrigeração industrial utiliza centrais frigoríficas e racks de grande porte para túneis de congelamento contínuo.</p>
    `
  },
  {
    slug: "manutencao-preventiva-vs-corretiva-refrigeracao",
    title: "Manutenção preventiva vs corretiva em refrigeração: qual economiza mais?",
    metaTitle: "Manutenção Preventiva x Corretiva em Refrigeração | SC Refrigeração",
    metaDescription: "Descubra o impacto financeiro de esperar o equipamento quebrar (corretiva) versus investir em revisões periódicas planejadas (preventiva).",
    category: "Gestão & Economia B2B",
    datePublished: "2026-05-12",
    dateModified: "2026-07-10",
    readTime: "5 min de leitura",
    author: "Engenharia de Refrigeração Comercial SC",
    excerpt: "Comparativo prático de custos, tempo de paralisação e durabilidade dos compressores.",
    takeaways: [
      "A manutenção corretiva emergencial custa em média 3x a 5x mais que o plano preventivo regular.",
      "Equipamentos bem regulados consomem até 25% menos energia elétrica no final do mês.",
      "A prevenção evita perdas irrecuperáveis de alimentos durante finais de semana e feriados."
    ],
    faqs: [
      {
        question: "Como calcular o retorno sobre o investimento (ROI) da manutenção preventiva?",
        answer: "O ROI é calculated somando a economia de energia mensal + custos evitado de peças graves + o valor dos estoques mantidos sem perda por quebra."
      }
    ],
    contentHtml: `
      <h2>O Verdadeiro Custo da Quebra Inesperada</h2>
      <p>Esperar o compressor travar em pleno domingo de verão significa pagar taxas emergenciais, enfrentar descarte de insumos e perder clientes. O contrato preventivo elimina esse risco de surpresa desagradável.</p>
    `
  },
  {
    slug: "como-evitar-parada-equipamentos-refrigeracao",
    title: "Como evitar a parada repentina de equipamentos de refrigeração no verão",
    metaTitle: "Como Evitar Parada de Equipamentos de Refrigeração no Verão | SC Refrigeração",
    metaDescription: "Dicas de engenharia para preparar geladeiras comerciais, câmaras frias e chopeiras para os picos de calor do verão catarinense.",
    category: "Prevenção & Verão",
    datePublished: "2026-04-28",
    dateModified: "2026-06-30",
    readTime: "6 min de leitura",
    author: "Engenharia de Refrigeração Comercial SC",
    excerpt: "Prepare seu comércio para os meses de maior movimento em Penha, Piçarras, BC e Litoral Norte de SC.",
    takeaways: [
      "No verão, as temperaturas ambientes elevadas exigem condensadores perfeitamente limpos e desobstruídos.",
      "Verifique as proteções elétricas contra picos de tensão comuns em tempestades tropicais.",
      "Tenha um canal de suporte técnico com atendimento priorizado no mesmo dia."
    ],
    faqs: [
      {
        question: "Por que os equipamentos de refrigeração quebram mais entre Dezembro e Março?",
        answer: "A combinação de alta temperatura ambiente + umidade elevada do ar + uso intensivo e portas abrindo constantemente exige capacidade máxima do compressor, expondo falhas pré-existentes de manutenção."
      }
    ],
    contentHtml: `
      <h2>Preparação Antecipada do Parque de Refrigeração</h2>
      <p>No Litoral Catarinense, a população das cidades litorâneas triplica na temporada. Fazer a revisão do sistema de refrigeração em Outubro/Novembro garante que seu negócio fature 100% no verão sem sustos mecânicos.</p>
    `
  },
  {
    slug: "quando-chamar-assistencia-tecnica-refrigeracao",
    title: "Quando chamar a assistência técnica de refrigeração? 8 sinais de alerta",
    metaTitle: "Quando Chamar Assistência Técnica de Refrigeração? 8 Sinais | SC Refrigeração",
    metaDescription: "Aprenda a reconhecer barulhos estranhos, acúmulo de água, estalos ou estufamento de alimentos antes que o equipamento pare totalmente de funcionar.",
    category: "Diagnóstico Rápido",
    datePublished: "2026-04-10",
    dateModified: "2026-06-20",
    readTime: "5 min de leitura",
    author: "Equipe Técnica Santa Catarina Refrigeração",
    excerpt: "Saiba identificar pequenos indícios de falha e acione o suporte técnico a tempo de salvar peças valiosas.",
    takeaways: [
      "Barulho de estalo constante (click) a cada 2 minutos indica relé de partida ou protetor térmico desarmando.",
      "Poça de água no chão ou dentro das gavetas indica dreno entupido ou travamento do degelo.",
      "Gelo acumulado no fundo da placa traseira sinaliza falta de gás ou vedações danificadas."
    ],
    faqs: [
      {
        question: "É normal a geladeira esquentar bastante nas laterais?",
        answer: "Em geladeiras modernas com condensador embutido nas paredes laterais, é normal que esquentem. Porém, se ficarem fervendo a ponto de não conseguir encostar a mão, limpe o motor e verifique se as laterais têm respiro suficiente."
      }
    ],
    contentHtml: `
      <h2>Os 8 Sinais de Alerta que Exigem Atendimento Profissional</h2>
      <ol>
        <li>1. Motor funcionando de forma ininterrupta sem desligar no termostato.</li>
        <li>2. Estalo 'click' repetitivo com o compressor tentando partir sem sucesso.</li>
        <li>3. Formação de placa de gelo espessa em apenas um canto da serpentina.</li>
        <li>4. Vazamento contínuo de água sob o móvel ou na base do equipamento.</li>
        <li>5. Alimentos estragando rápido mesmo com a regulagem no máximo.</li>
        <li>6. Ruído forte de vibração metálica ao ligar ou desligar o compressor.</li>
        <li>7. Disjuntor da residência ou comércio caindo ao ligar o aparelho.</li>
        <li>8. Visor digital exibindo código de erro ou alarme sonoro ativado.</li>
      </ol>
    `
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '').replace(/^blog\//, '');
  return BLOG_POSTS.find(p => p.slug === clean);
}
