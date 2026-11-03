export type Project = {
  number: string
  title: string
  technologies: string[]
  href?: string
  visual: 'store' | 'dashboard' | 'fit' | 'chunks'
  visibility: 'public' | 'private'
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'E-commerce Application',
    technologies: ['React', 'Vite', 'Java', 'Spring Boot'],
    href: 'https://github.com/rodrigolima-dev/orpheuswim-frontend',
    visual: 'store',
    visibility: 'public',
  },
  {
    number: '02',
    title: 'OpportunusAI Dashboard',
    technologies: ['Next.js', 'React', 'TypeScript'],
    href: 'https://github.com/rodrigolima-dev/opportunus-dashboard',
    visual: 'dashboard',
    visibility: 'public',
  },
  {
    number: '03',
    title: 'HIT',
    technologies: ['Mobile product', 'Sports community'],
    visual: 'fit',
    visibility: 'private',
  },
  {
    number: '04',
    title: 'Vector Chunk Kit',
    technologies: ['Python', 'PostgreSQL', 'pgvector'],
    href: 'https://github.com/rodrigolima-dev/vector-chunk-kit',
    visual: 'chunks',
    visibility: 'public',
  },
]

export const projectCopy = {
  en: [
    {
      category: 'Full stack · Web application',
      description:
        'A crochet storefront with a catalog, product choices, cart, and an order started in WhatsApp.',
      decision:
        'The cart gathers product, size, color, quantity, and total before opening the WhatsApp conversation.',
      visualAlt: 'Real screenshot of the e-commerce product catalog',
      visualCaption: 'PRODUCT CATALOG',
    },
    {
      category: 'Product engineering · Multi-tenant',
      description: 'A multi-tenant dashboard for reports, permissions, and read-only API views.',
      decision:
        'The server checks the session, organization, and route permissions before returning data.',
      visualAlt: 'Screenshot of the OpportunusAI dashboard demonstration with fictional data',
      visualCaption: 'DASHBOARD / FICTIONAL DATA',
    },
    {
      category: 'Mobile product · Fitness',
      description:
        'An app for people who live sport: find your group, follow your routine, and keep playing between activities.',
      decision: 'In development · planned launch: December 2026.',
      visualAlt: 'Real HIT app screens showing login, performance, and a sports community feed',
      visualCaption: 'HIT / MOBILE SPORTS PRODUCT / DECEMBER 2026',
    },
    {
      category: 'Python · Data tooling',
      description:
        'A Python tool that turns documents into searchable chunks with titles, keywords, metadata, stable IDs, and hashes for a RAG pipeline.',
      decision:
        'A local preview lets you review the chunk context before embeddings or database writes.',
      visualAlt: 'Data preparation flow from JSONL input to reviewable chunks and explicit apply',
      visualCaption: 'JSONL / PREVIEW / APPLY / PGVECTOR',
    },
  ],
  'pt-BR': [
    {
      category: 'Full stack · Aplicação web',
      description:
        'Uma loja de crochê com catálogo, escolha da peça, carrinho e pedido iniciado no WhatsApp.',
      decision:
        'O carrinho reúne produto, tamanho, cor, quantidade e total antes de abrir a conversa no WhatsApp.',
      visualAlt: 'Screenshot real do catálogo de produtos do e-commerce',
      visualCaption: 'CATÁLOGO DE PRODUTOS',
    },
    {
      category: 'Engenharia de produto · Multi-tenant',
      description:
        'Um dashboard multi-tenant para relatórios, permissões e visualizações de APIs de leitura.',
      decision:
        'O servidor confere sessão, organização e permissão da rota antes de devolver os dados.',
      visualAlt: 'Captura do dashboard da OpportunusAI com dados fictícios',
      visualCaption: 'DASHBOARD / DADOS FICTÍCIOS',
    },
    {
      category: 'Produto mobile · Fitness',
      description:
        'Um app para quem vive o esporte: encontrar sua turma, acompanhar sua rotina e continuar jogando entre as atividades.',
      decision: 'Em desenvolvimento · previsão de lançamento: dezembro de 2026.',
      visualAlt: 'Telas reais do app HIT com login, desempenho e feed de comunidade esportiva',
      visualCaption: 'HIT / PRODUTO ESPORTIVO MOBILE / DEZEMBRO DE 2026',
    },
    {
      category: 'Python · Ferramenta de dados',
      description:
        'Uma ferramenta Python que transforma documentos em chunks pesquisáveis com título, palavras-chave, metadados, IDs estáveis e hashes para um pipeline RAG.',
      decision:
        'A prévia local permite revisar o contexto do chunk antes de embeddings ou gravações no banco.',
      visualAlt: 'Fluxo de preparação de JSONL para chunks revisáveis e apply explícito',
      visualCaption: 'JSONL / PRÉVIA / APPLY / PGVECTOR',
    },
  ],
} as const
