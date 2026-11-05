export type Locale = 'pt-BR' | 'en'
export type Theme = 'dark'
export const content = {
  'pt-BR': {
    nav: ['Início', 'Projetos', 'Experiência', 'Stack', 'Contato'],
    heroKicker: 'DESENVOLVEDOR FULL STACK',
    profileBio: 'Dev e empresário, transformando problemas reais em produtos digitais.',
    heroTitle: 'ENGENHEIRO DE\nSOFTWARE',
    heroBody:
      'Engenheiro de software há mais de 2 anos, com visão de negócio para transformar problemas reais em produtos digitais claros, úteis e sustentáveis.',
    stats: [
      ['24+', 'PROJETOS\nPUBLICADOS'],
      ['2', 'PRODUTOS\nEM PRODUÇÃO'],
      ['∞', 'CURIOSIDADE\nTÉCNICA'],
    ],
    orbit: 'INTERFACE, PRODUTO, CÓDIGO',
    projectsKicker: 'PROJETOS RECENTES',
    reposKicker: 'OUTROS REPOSITÓRIOS',
    reposTitle: 'MAIS\nPROJETOS',
    projectsTitle: 'PROJETOS\nSELECIONADOS',
    store: 'Loja de crochê',
    storeBody:
      'Um catálogo onde a cliente escolhe peças, tamanho e cor e envia o carrinho completo em uma única mensagem. A lojista gerencia os produtos pelo painel.',
    dashboard: 'Painel de vendas',
    dashboardBody:
      'Dashboard para duas lojas acompanharem vendas, estoque e campanhas, com atendimento conectado às APIs das lojas.',
    fictional: 'DEMONSTRAÇÃO / DADOS FICTÍCIOS',
    open: 'ABRIR PROJETO',
    experienceKicker: 'EXPERIÊNCIA',
    experienceTitle: 'SOFTWARE\nCOM CONTEXTO',
    experienceBody:
      'Curso Sistemas de Informação e conduzo atividades de lógica e programação para crianças e jovens na Nave do Conhecimento. Antes disso, trabalhei com redes e servidores como técnico de TI no Exército Brasileiro.',
    exp1: 'Co-founder & CTO · OpportunusAI',
    exp1Body:
      'Liderança técnica e construção de produto, conectando estratégia, engenharia e operação.',
    exp1Date: 'EXPERIÊNCIA ATUAL',
    exp2: 'Nave do Conhecimento',
    exp2Body: 'Atividades de lógica e programação para crianças e jovens.',
    exp2Date: 'ATUALMENTE',
    exp3: 'Exército Brasileiro',
    exp3Body: 'Redes, servidores e suporte como técnico de TI.',
    exp3Date: 'EXPERIÊNCIA ANTERIOR',
    toolsKicker: 'STACK PRINCIPAL',
    toolsTitle: 'FERRAMENTAS\nQUE USO',
    tools: [
      ['React', 'Interfaces'],
      ['Node.js', 'APIs e integrações'],
      ['Java', 'Spring Boot'],
      ['TypeScript', 'Código seguro'],
      ['Python', 'Dados e automação'],
      ['PostgreSQL', 'Persistência'],
    ],
    contactKicker: 'VAMOS CONVERSAR',
    contactTitle: 'TEM UM PROBLEMA\nPARA RESOLVER?',
    contactBody:
      'E-mail, LinkedIn e GitHub estão abertos. O currículo completo também está disponível em PDF.',
    email: 'Enviar e-mail',
    resume: 'Baixar currículo PDF',
    about: 'Sobre Rodrigo Lima',
    hit: 'HIT · em desenvolvimento',
    vector: 'Vector Chunk Kit',
    hitBody: 'Aplicativo para encontrar pessoas com quem praticar esportes.',
    vectorBody: 'Ferramenta Python para revisar trechos antes de gerar vetores.',
  },
  en: {
    nav: ['Home', 'Projects', 'Experience', 'Stack', 'Contact'],
    heroKicker: 'FULL-STACK DEVELOPER',
    profileBio: 'Developer and entrepreneur, turning real problems into digital products.',
    heroTitle: 'SOFTWARE\nENGINEER',
    heroBody:
      'Software engineer with 2+ years of experience and business vision to turn real problems into clear, useful, sustainable digital products.',
    stats: [
      ['24+', 'PUBLISHED\nPROJECTS'],
      ['2', 'PRODUCTS\nIN PRODUCTION'],
      ['∞', 'TECHNICAL\nCURIOSITY'],
    ],
    orbit: 'INTERFACE, PRODUCT, CODE',
    projectsKicker: 'RECENT PROJECTS',
    reposKicker: 'MORE REPOSITORIES',
    reposTitle: 'MORE\nPROJECTS',
    projectsTitle: 'SELECTED\nPROJECTS',
    store: 'Storefront for a crochet shop',
    storeBody:
      'A catalog where customers choose items, sizes, and colors, then send the complete cart in one message. The owner manages the products from a dashboard.',
    dashboard: 'Sales and customer support dashboard',
    dashboardBody:
      'A dashboard for two retailers to track sales, inventory, and campaigns, with support connected to the stores’ APIs.',
    fictional: 'DEMO / FICTIONAL DATA',
    open: 'OPEN PROJECT',
    experienceKicker: 'EXPERIENCE',
    experienceTitle: 'SOFTWARE\nWITH CONTEXT',
    experienceBody:
      'I study Information Systems and teach programming and logic to children and teenagers at Nave do Conhecimento. Before that, I worked on networks and servers as an IT technician in the Brazilian Army.',
    exp1: 'Co-founder & CTO · OpportunusAI',
    exp1Body:
      'Technical leadership and product building across strategy, engineering, and operations.',
    exp1Date: 'CURRENT EXPERIENCE',
    exp2: 'Nave do Conhecimento',
    exp2Body: 'Logic and programming activities for children and teenagers.',
    exp2Date: 'CURRENTLY',
    exp3: 'Brazilian Army',
    exp3Body: 'Networks, servers, and support as an IT technician.',
    exp3Date: 'PREVIOUS EXPERIENCE',
    toolsKicker: 'CORE STACK',
    toolsTitle: 'TOOLS\nI USE',
    tools: [
      ['React', 'Interfaces'],
      ['Node.js', 'APIs and integrations'],
      ['Java', 'Spring Boot'],
      ['TypeScript', 'Safer code'],
      ['Python', 'Data and automation'],
      ['PostgreSQL', 'Persistence'],
    ],
    contactKicker: 'LET’S TALK',
    contactTitle: 'HAVE A PROBLEM\nTO SOLVE?',
    contactBody:
      'Email, LinkedIn, and GitHub are open. The full résumé is also available as a PDF.',
    email: 'Send an email',
    resume: 'Download résumé PDF',
    about: 'About Rodrigo Lima',
    hit: 'HIT · in development',
    vector: 'Vector Chunk Kit',
    hitBody: 'An app for finding people to play sports with.',
    vectorBody: 'A Python tool for reviewing passages before generating vectors.',
  },
} as const
export const getLocale = (): Locale => {
  try {
    return navigator.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en'
  } catch {
    return 'en'
  }
}
export const readLocale = (): Locale => {
  try {
    const v = localStorage.getItem('portfolio-locale')
    return v === 'pt-BR' || v === 'en' ? v : getLocale()
  } catch {
    return getLocale()
  }
}
