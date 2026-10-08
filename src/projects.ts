export type Project = {
  number: string
  category: string
  title: string
  description: string
  decision: string
  evidence: string
  technologies: string[]
  href: string
  visual: 'dashboard' | 'graph' | 'workflow'
}

export const projects: Project[] = [
  {
    number: '01',
    category: 'Full stack · Product',
    title: 'OpportunusAI Dashboard',
    description:
      'A runnable Next.js dashboard with fictional organizations, roles, reporting views, and read-only APIs.',
    decision:
      'Keep the experience easy to explore while checking session, tenant membership, and route capability on the server.',
    evidence: 'Synthetic data · signed demo sessions · tests for access and tenant isolation',
    technologies: ['Next.js', 'React', 'TypeScript'],
    href: 'https://github.com/rodrigolima-dev/opportunus-dashboard',
    visual: 'dashboard',
  },
  {
    number: '02',
    category: 'Applied AI · Architecture',
    title: 'Guarded Retrieval Graph',
    description:
      'A deterministic LangGraph example that makes validation, authorization, scoped retrieval, and response boundaries explicit.',
    decision:
      'Stop denied requests before retrieval; keep a bounded lexical retry inside the same tenant and pass only allowed, published samples to the response component.',
    evidence:
      'Offline Python example · tests cover allowed, denied, fallback, empty, and failure paths · no LLM call',
    technologies: ['Python', 'LangGraph', 'LangChain Core'],
    href: 'https://github.com/rodrigolima-dev/guarded-langgraph-demo',
    visual: 'graph',
  },
  {
    number: '03',
    category: 'Automation · Reliability',
    title: 'n8n Automation Patterns',
    description:
      'Four small workflows for input validation, bounded retry decisions, health-signal routing, and tenant-scoped sample retrieval.',
    decision:
      'Give each branch an explicit outcome and keep the examples inactive, local, and free of external integrations.',
    evidence:
      'Four synthetic workflows · imported and executed offline · no Agent node or credentials',
    technologies: ['n8n', 'JavaScript'],
    href: 'https://github.com/rodrigolima-dev/n8n-patterns',
    visual: 'workflow',
  },
]
