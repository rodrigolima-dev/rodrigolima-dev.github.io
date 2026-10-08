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
      description: 'An offline LangGraph example with access checks before retrieval.',
      decision: 'Denied requests stop early. A bounded retry stays within the same tenant.',
      visualAlt: 'LangGraph flow: access, retrieval, answer; denied requests stop',
      visualCaption: 'OFFLINE EXAMPLE / NO LLM CALL',
    },
    {
      category: 'Automation · Reliability',
      description: 'Four offline n8n patterns for validation, retry, health, and lookup.',
      decision: 'Each branch has an explicit outcome and no external calls.',
      visualAlt: 'Four n8n patterns branching from one input: validation, retry, health, lookup',
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
      description: 'Exemplo offline em LangGraph: o acesso é conferido antes da busca.',
      decision: 'Sem permissão, o fluxo para. A nova tentativa fica na mesma organização.',
      visualAlt: 'Fluxo LangGraph: acesso, busca e resposta; sem permissão, o fluxo para',
      visualCaption: 'EXEMPLO OFFLINE / SEM CHAMADA A LLM',
    },
    {
      category: 'Automação · Confiabilidade',
      description: 'Quatro padrões offline em n8n: validação, nova tentativa, saúde e busca.',
      decision: 'Cada caminho tem um resultado definido, sem chamar serviços externos.',
      visualAlt:
        'Quatro padrões n8n a partir de uma entrada: validação, nova tentativa, saúde e busca',
      visualCaption: 'QUATRO FLUXOS OFFLINE / SEM AGENT NEM CREDENCIAIS',
    },
  ],
} as const
