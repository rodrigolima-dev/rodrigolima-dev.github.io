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
        'A runnable public V1 dashboard with fictional data, reports, permissions, and APIs.',
      decision:
        'The server checks the session, organization, and route permissions before returning data.',
      visualAlt: 'Screenshot of the public V1 dashboard demonstration with fictional data',
      visualCaption: 'PUBLIC V1 DEMO / SYNTHETIC DATA',
    },
    {
      category: 'Applied AI · Architecture',
      description: 'An offline LangGraph retrieval flow that checks access before using context.',
      decision: 'Denied requests stop there. Retries remain limited to the same organization.',
      visualAlt: 'LangGraph flow: access, retrieval, answer; denied requests stop',
      visualCaption: 'OFFLINE EXAMPLE / NO LLM CALL',
    },
    {
      category: 'Automation · Reliability',
      description: 'Four offline n8n flows for validation, retries, health checks, and lookup.',
      decision: 'Each path has an explicit outcome and makes no external calls.',
      visualAlt: 'Four n8n patterns branching from one input: validation, retry, health, lookup',
      visualCaption: 'FOUR OFFLINE FLOWS / NO AGENT NODE OR CREDENTIALS',
    },
  ],
  'pt-BR': [
    {
      category: 'Full stack · Produto',
      description:
        'V1 pública e executável do dashboard, com dados fictícios, relatórios, permissões e APIs.',
      decision:
        'O servidor confere sessão, organização e permissão da rota antes de devolver os dados.',
      visualAlt: 'Captura do dashboard público V1 com dados fictícios',
      visualCaption: 'DEMO PÚBLICA V1 / DADOS FICTÍCIOS',
    },
    {
      category: 'IA aplicada · Arquitetura',
      description: 'Fluxo offline em LangGraph que confere o acesso antes de buscar contexto.',
      decision: 'Sem permissão, o fluxo para. As novas tentativas ficam na mesma organização.',
      visualAlt: 'Fluxo LangGraph: acesso, busca e resposta; sem permissão, o fluxo para',
      visualCaption: 'EXEMPLO OFFLINE / SEM CHAMADA A LLM',
    },
    {
      category: 'Automação · Confiabilidade',
      description:
        'Quatro fluxos offline em n8n para validação, novas tentativas, checagem de disponibilidade e consulta.',
      decision: 'Cada caminho tem um resultado explícito e não chama serviços externos.',
      visualAlt:
        'Quatro padrões n8n a partir de uma entrada: validação, nova tentativa, saúde e busca',
      visualCaption: 'QUATRO FLUXOS OFFLINE / SEM AGENT NEM CREDENCIAIS',
    },
  ],
} as const
