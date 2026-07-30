export interface Testimonial {
  id: string;
  author: string;
  role: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
  avatarBg: string;
}

export const REAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Ana Maria S.",
    role: "Cliente Residencial",
    city: "Penha - SC",
    rating: 5,
    date: "Julho de 2026",
    comment: "Excelente atendimento! Minha geladeira Brastemp Inverse estava com problema no compressor e a equipe da Santa Catarina Refrigeração resolveu rapidamente no mesmo dia. Técnicos muito competentes, educados e preço justo.",
    service: "Geladeira Brastemp",
    avatarBg: "bg-blue-600"
  },
  {
    id: "2",
    author: "Roberto C.",
    role: "Proprietário de Pousada",
    city: "Balneário Piçarras - SC",
    rating: 5,
    date: "Junho de 2026",
    comment: "Meu freezer horizontal e dois frigobares das suítes pararam de funcionar na véspera do feriado. Pensei que teria que comprar novos. A equipe veio com agilidade e consertou com peças originais e garantia formal de 90 dias!",
    service: "Freezer & Frigobares",
    avatarBg: "bg-cyan-600"
  },
  {
    id: "3",
    author: "Juliana L.",
    role: "Gerente de Conveniência",
    city: "Itajaí - SC",
    rating: 5,
    date: "Julho de 2026",
    comment: "Atendimento via WhatsApp muito prático! O técnico veio à nossa loja em Itajaí no mesmo dia e resolveu o problema do balcão refrigerado e da cervejeira. Manteve todas as bebidas trincando. Super recomendo!",
    service: "Balcão Refrigerado e Cervejeira",
    avatarBg: "bg-indigo-600"
  },
  {
    id: "4",
    author: "Marcos P.",
    role: "Chef de Restaurante",
    city: "Balneário Camboriú - SC",
    rating: 5,
    date: "Maio de 2026",
    comment: "A câmara fria de congelados do restaurante em BC apresentou ruído e perda de temperatura. O plantão 24h nos atendeu de madrugada e salvou todo o estoque de frutos do mar. Profissionalismo exemplar!",
    service: "Câmara Fria Comercial",
    avatarBg: "bg-teal-600"
  },
  {
    id: "5",
    author: "Cláudia F.",
    role: "Moradora da Praia Brava",
    city: "Itajaí - SC",
    rating: 5,
    date: "Julho de 2026",
    comment: "Minha lava e seca LG apresentou o erro OE e travou com água dentro. Chamei pelo WhatsApp e o orçamento foi sem complicação. Trocaram a bomba de drenagem rapidamente. Nota 10!",
    service: "Lava e Seca LG",
    avatarBg: "bg-sky-600"
  },
  {
    id: "6",
    author: "Luciana M.",
    role: "Sommelier & Colecionadora",
    city: "Itapema - SC",
    rating: 5,
    date: "Abril de 2026",
    comment: "Minha adega climatizada de 48 garrafas parou de refrigerar. Fizeram a troca da placa do painel e do sensor de precisão. O vinho voltou à temperatura ideal sem ruído.",
    service: "Adega Climatizada",
    avatarBg: "bg-blue-700"
  }
];
