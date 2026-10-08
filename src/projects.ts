export type Project = {
  number: string
  title: string
  technologies: string[]
  href: string
  visual: 'dashboard' | 'graph' | 'workflow'
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'OpportunusAI Dashboard',
    technologies: ['Next.js', 'React', 'TypeScript'],
    href: 'https://github.com/rodrigolima-dev/opportunus-dashboard',
    visual: 'dashboard',
  },
  {
    number: '02',
    title: 'Guarded Retrieval Graph',
    technologies: ['Python', 'LangGraph', 'LangChain Core'],
    href: 'https://github.com/rodrigolima-dev/guarded-langgraph-demo',
    visual: 'graph',
  },
  {
    number: '03',
    title: 'n8n Automation Patterns',
    technologies: ['n8n', 'JavaScript'],
    href: 'https://github.com/rodrigolima-dev/n8n-patterns',
    visual: 'workflow',
  },
]

export const projectCopy = {
  en: [
    {
      category: 'Full stack · Product',
      description:
        'A public, runnable V1 dashboard with fictional data for exploring reports, permissions, and APIs.',
      decision: 'Session, tenant access, and route permissions are checked on the server.',
      visualAlt: 'Screenshot of the public V1 dashboard demonstration with fictional data',
      visualCaption: 'PUBLIC V1 DEMO / SYNTHETIC DATA',
    },
    {
      category: 'Applied AI · Architecture',
      description:
        'A LangGraph example that checks access before retrieving information and knows when to stop.',
      decision: 'Denied requests stop early; a bounded retry stays within the same tenant.',
      visualAlt: 'Simple animated diagram of the offline LangGraph retrieval flow',
      visualCaption: 'OFFLINE EXAMPLE / NO LLM CALL',
    },
    {
      category: 'Automation · Reliability',
      description:
        'Four reusable n8n workflows to validate input, handle failures, and route each case.',
      decision: 'Every branch has a clear outcome, with no external service calls.',
      visualAlt: 'Simple animated diagram of an offline n8n automation flow',
      visualCaption: 'FOUR OFFLINE FLOWS / NO AGENT NODE OR CREDENTIALS',
    },
  ],
  'pt-BR': [
    {
      category: 'Full stack · Produto',
      description:
        'Primeira versão pública e executável do dashboard, com dados fictícios para explorar relatórios, permissões e APIs.',
      decision: 'Sessão, acesso à organização e permissão da rota são conferidos no servidor.',
      visualAlt: 'Captura do dashboard público V1 com dados fictícios',
      visualCaption: 'DEMO PÚBLICA V1 / DADOS FICTÍCIOS',
    },
    {
      category: 'IA aplicada · Arquitetura',
      description:
        'Um exemplo de LangGraph que confere o acesso antes de buscar informações e sabe quando parar.',
      decision: 'Sem permissão, a busca não começa. A tentativa extra fica na mesma organização.',
      visualAlt: 'Diagrama animado e simples do fluxo de busca offline em LangGraph',
      visualCaption: 'EXEMPLO OFFLINE / SEM CHAMADA A LLM',
    },
    {
      category: 'Automação · Confiabilidade',
      description:
        'Quatro automações reutilizáveis para validar entradas, lidar com falhas e encaminhar cada caso.',
      decision: 'Cada caminho tem um resultado claro, sem chamadas a serviços externos.',
      visualAlt: 'Diagrama animado e simples de uma automação n8n offline',
      visualCaption: 'QUATRO FLUXOS OFFLINE / SEM AGENT NEM CREDENCIAIS',
    },
  ],
} as const
