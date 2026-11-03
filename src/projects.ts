export type Project = {
  number: string
  title: string
  technologies: string[]
  href?: string
  visual: 'store' | 'dashboard' | 'fit' | 'graph' | 'workflow'
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
    technologies: ['Fitness app', 'Private build'],
    visual: 'fit',
    visibility: 'private',
  },
  {
    number: '04',
    title: 'Vector Chunk Kit',
    technologies: ['Python', 'PostgreSQL', 'pgvector'],
    href: 'https://github.com/rodrigolima-dev/vector-chunk-kit',
    visual: 'workflow',
    visibility: 'public',
  },
  {
    number: '05',
    title: 'Guarded Retrieval Graph',
    technologies: ['Python', 'LangGraph', 'LangChain Core'],
    href: 'https://github.com/rodrigolima-dev/guarded-langgraph-demo',
    visual: 'graph',
    visibility: 'public',
  },
  {
    number: '06',
    title: 'n8n Automation Patterns',
    technologies: ['n8n', 'JavaScript'],
    href: 'https://github.com/rodrigolima-dev/n8n-patterns',
    visual: 'workflow',
    visibility: 'public',
  },
]

export const projectCopy = {
  en: [
    {
      category: 'Full stack · Web application',
      description:
        'A React storefront connected to a Java/Spring Boot API: catalog, product choices, cart, and an order started in WhatsApp.',
      decision:
        'The browser assembles the product, size, color, quantity, and total before opening the WhatsApp conversation. It does not process payment.',
      visualAlt: 'Storefront flow from catalog to cart and WhatsApp order message',
      visualCaption: 'CATALOG / CART / WHATSAPP',
    },
    {
      category: 'Product engineering · Multi-tenant',
      description:
        'A runnable public V1 dashboard with fictional data, reports, permissions, and read-only APIs.',
      decision:
        'The server checks the session, organization, and route permissions before returning data. The public demo uses synthetic fixtures.',
      visualAlt: 'Screenshot of the public V1 dashboard demonstration with fictional data',
      visualCaption: 'PUBLIC V1 / SYNTHETIC DATA',
    },
    {
      category: 'Private product · Fitness',
      description:
        'A fitness app in development with its own product identity. The portfolio shows the direction without exposing private screens or code.',
      decision: 'Status: private build. Planned launch: December 2026.',
      visualAlt: 'HIT fitness app wordmark with private build status and December 2026 target',
      visualCaption: 'PRIVATE BUILD / DECEMBER 2026 TARGET',
    },
    {
      category: 'Python · Data tooling',
      description:
        'A reviewable JSONL-to-chunks pipeline that previews work locally before embeddings or database writes.',
      decision:
        'The default path is preview-only. An explicit apply step is required before external calls or persistence.',
      visualAlt: 'Data preparation flow from JSONL input to reviewable chunks and explicit apply',
      visualCaption: 'PREVIEW FIRST / APPLY EXPLICITLY',
    },
    {
      category: 'Applied AI · Architecture',
      description:
        'An offline LangGraph retrieval flow that checks access before using organization-scoped context.',
      decision:
        'Denied requests stop before retrieval, and the retry path stays within the same organization.',
      visualAlt: 'LangGraph flow: access, retrieval, answer; denied requests stop',
      visualCaption: 'OFFLINE EXAMPLE / NO LLM CALL',
    },
    {
      category: 'Automation · Reliability',
      description:
        'Four offline n8n flows for validation, bounded retries, health routing, and tenant-scoped lookup.',
      decision: 'Each path has an explicit outcome and the public examples make no external calls.',
      visualAlt: 'Four n8n patterns branching from one input: validation, retry, health, lookup',
      visualCaption: 'FOUR OFFLINE FLOWS / NO CREDENTIALS',
    },
  ],
  'pt-BR': [
    {
      category: 'Full stack · Aplicação web',
      description:
        'Uma loja React conectada a uma API Java/Spring Boot: catálogo, escolha da peça, carrinho e pedido iniciado no WhatsApp.',
      decision:
        'O navegador monta produto, tamanho, cor, quantidade e total antes de abrir a conversa no WhatsApp. O código não processa pagamento.',
      visualAlt: 'Fluxo da loja do catálogo ao carrinho e à mensagem de pedido no WhatsApp',
      visualCaption: 'CATÁLOGO / CARRINHO / WHATSAPP',
    },
    {
      category: 'Engenharia de produto · Multi-tenant',
      description:
        'Um dashboard V1 público e executável, com dados fictícios, relatórios, permissões e APIs de leitura.',
      decision:
        'O servidor confere sessão, organização e permissão da rota antes de devolver os dados. A demo pública usa fixtures sintéticas.',
      visualAlt: 'Captura do dashboard público V1 com dados fictícios',
      visualCaption: 'V1 PÚBLICA / DADOS FICTÍCIOS',
    },
    {
      category: 'Produto privado · Fitness',
      description:
        'Um app de fitness em desenvolvimento, com identidade própria. O portfólio mostra a direção sem expor telas ou código privados.',
      decision: 'Status: desenvolvimento privado. Previsão de lançamento: dezembro de 2026.',
      visualAlt: 'Logo HIT do app de fitness com status privado e previsão para dezembro de 2026',
      visualCaption: 'PROJETO PRIVADO / PREVISÃO DEZEMBRO DE 2026',
    },
    {
      category: 'Python · Ferramenta de dados',
      description:
        'Um pipeline revisável de JSONL para chunks que permite pré-visualizar o resultado antes de embeddings ou gravações no banco.',
      decision:
        'O caminho padrão só gera uma prévia. É preciso aplicar uma ação explícita antes de chamadas externas ou persistência.',
      visualAlt: 'Fluxo de preparação de JSONL para chunks revisáveis e apply explícito',
      visualCaption: 'PRÉVIA PRIMEIRO / APPLY EXPLÍCITO',
    },
    {
      category: 'IA aplicada · Arquitetura',
      description:
        'Um fluxo offline em LangGraph que confere o acesso antes de usar contexto da organização.',
      decision:
        'Sem permissão, o fluxo para antes da busca e a nova tentativa permanece na mesma organização.',
      visualAlt: 'Fluxo LangGraph: acesso, busca e resposta; sem permissão, o fluxo para',
      visualCaption: 'EXEMPLO OFFLINE / SEM CHAMADA A LLM',
    },
    {
      category: 'Automação · Confiabilidade',
      description:
        'Quatro fluxos offline em n8n para validação, novas tentativas limitadas, saúde e busca por organização.',
      decision:
        'Cada caminho tem um resultado explícito e os exemplos públicos não chamam serviços externos.',
      visualAlt:
        'Quatro padrões n8n a partir de uma entrada: validação, nova tentativa, saúde e busca',
      visualCaption: 'QUATRO FLUXOS OFFLINE / SEM CREDENCIAIS',
    },
  ],
} as const
