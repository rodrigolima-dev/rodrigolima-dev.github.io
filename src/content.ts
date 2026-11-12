export type Locale = 'pt-BR' | 'en'
export type Theme = 'light' | 'dark'

export const content = {
  'pt-BR': {
    nav: ['Início', 'Projetos', 'IA aplicada', 'Experiência', 'Stack', 'Contato'],
    heroKicker: 'AI ENGINEERING · FULL STACK · RIO DE JANEIRO',
    profileBio:
      'Desenvolvedor full stack e cofundador da OpportunusAI. Trabalho entre produto, código e operação.',
    heroTitle: 'FULL STACK DEVELOPER\nCOM IA APLICADA',
    heroBody:
      'Construo aplicações web e APIs. Uso IA para pesquisar, implementar e revisar com mais precisão, do primeiro fluxo ao deploy.',
    stats: [
      ['24+', 'PROJETOS\nPUBLICADOS'],
      ['18+', 'REPOSITÓRIOS\nPÚBLICOS'],
      ['3', 'FRENTES: PRODUTO,\nPLATAFORMA E IA'],
    ],
    orbit: 'AGENTES · RAG · MCP · PRODUTO',
    orbitBody:
      'A IA entra no ciclo inteiro: descoberta, arquitetura, implementação, validação, operação e aprendizado.',
    build: 'WEB, API, DADOS',
    buildBody: 'React, TypeScript, Java, Python e PostgreSQL em produtos que precisam funcionar.',
    projectsKicker: 'CASES E PROVAS',
    projectsTitle: 'PROJETOS\nSELECIONADOS',
    projectsLead: 'O problema, a decisão técnica e o que ficou de pé.',
    opportunus: 'OpportunusAI · atendimento e vendas no WhatsApp',
    opportunusMeta: 'PROJETO PÚBLICO · DASHBOARD V1',
    opportunusBody:
      'Desenvolvi o dashboard público da primeira versão e coordenei a evolução do produto até a operação atual. Acompanhei integrações, regras, acesso e os sinais que a equipe precisa para intervir.',
    store: 'Loja de crochê',
    storeBody:
      'Catálogo com seleção de peça, tamanho e cor. O carrinho chega completo em uma única mensagem e a lojista gerencia os produtos pelo painel.',
    storeMeta: 'REACT · JAVA · SPRING BOOT · MYSQL',
    vector: 'Vector Chunk Kit',
    vectorBody:
      'Ferramenta Python que prepara e revisa trechos antes de gerar embeddings, com metadados explícitos para um pipeline de RAG mais previsível.',
    vectorMeta: 'PYTHON · POSTGRESQL · PGVECTOR · OFFLINE',
    hit: 'HIT · produto mobile',
    hitBody:
      'Aplicativo para encontrar pessoas com quem praticar esportes e transformar treino em rotina compartilhada.',
    hitMeta: 'REACT NATIVE · MOBILE PRODUCT',
    open: 'ABRIR CASE',
    visitSite: 'VISITAR OPPORTUNUSAI.COM',
    viewScreens: 'VER TELAS',
    sourceCode: 'VER CÓDIGO',
    fictional: 'DEMONSTRAÇÃO · DADOS SINTÉTICOS',
    aiKicker: 'COMO EU USO IA',
    aiTitle: 'IA NO CICLO\nINTEIRO',
    aiLead:
      'Uso IA para reduzir trabalho repetitivo e melhorar decisões. Cada ferramenta tem um limite claro.',
    aiCards: [
      [
        '01',
        'Orquestro agentes',
        'Divido tarefas por contexto, contrato e critério de saída. Agentes pesquisam, implementam, revisam e registram decisões.',
      ],
      [
        '02',
        'Conecto ferramentas com MCP',
        'Uso ferramentas e servidores como interfaces explícitas para arquivos, repositórios, dados e automações, com permissões visíveis.',
      ],
      [
        '03',
        'Recupero contexto com RAG',
        'Preparo documentos, metadados e filtros antes da geração. O contexto precisa ser rastreável e relevante para a tarefa.',
      ],
      [
        '04',
        'Observo e governo',
        'Defino handoff, logs, testes, aprovação humana e métricas para saber quando a IA ajudou e quando precisa parar.',
      ],
    ],
    opportunusKicker: 'CASE · OPPORTUNUSAI',
    opportunusTitle: 'DA CONVERSA\nAO RESULTADO',
    opportunusLead:
      'Na OpportunusAI, coordenei e acompanhei a evolução do produto: da V1 pública ao dashboard da operação, passando por integrações, regras, acesso e acompanhamento.',
    opportunusSteps: [
      [
        '01',
        'Entender',
        'A IA interpreta texto, áudio ou foto e espera o cliente concluir a intenção.',
      ],
      [
        '02',
        'Consultar',
        'Busca catálogo, variação, preço, estoque e frete diretamente nas integrações.',
      ],
      [
        '03',
        'Confirmar',
        'Resume itens, frete e total; só cria o checkout depois do “sim” do cliente.',
      ],
      [
        '04',
        'Acompanhar',
        'Atualiza pagamento, envio e entrega e passa para uma pessoa quando necessário.',
      ],
    ],
    publicMetrics: [
      ['+270', 'pedidos pagos com participação da IA', 'métrica pública na landing page'],
      ['~20 s', 'mediana para responder', 'inclui a espera para o cliente terminar de digitar'],
    ],
    screensKicker: 'TELAS DO PRODUTO',
    screensTitle: 'V1 E V2\nDO PRODUTO',
    screensBody:
      'A V1 mostra o dashboard público. A V2 organiza a operação. Abra uma tela para navegar pelos prints.',
    v1ScreensTitle: 'Dashboard público',
    v1ScreensBody:
      'Leads, vendas por canal e atribuição em uma demonstração pública com dados sintéticos.',
    v2ScreensTitle: 'Dashboard de operação',
    v2ScreensBody:
      'Visão geral de vendas, conversas, carrinhos em atenção e indicadores de IA para a equipe.',
    v2ConversationBody:
      'Conversa assistida, pausa da IA, resumo, handoff para o Chatwoot e memória sob revisão.',
    screenOverview: 'Visão geral do dashboard',
    screenConversation: 'Conversa com assistência de IA',
    screenPublicDemo: 'Demonstração pública do painel',
    experienceKicker: 'EXPERIÊNCIA',
    experienceTitle: 'SOFTWARE\nCOM CONTEXTO',
    experienceBody:
      'Estudante de Sistemas de Informação na Universidade Federal de Ciência e Inovação do Rio de Janeiro.',
    exp1: 'Co-founder & CTO · OpportunusAI',
    exp1Body:
      'Produto, arquitetura e operação de uma IA que atende, vende e entrega contexto para equipes.',
    exp1Date: 'ATUALMENTE',
    exp2: 'Nave do Conhecimento',
    exp2Body:
      'Ministro aulas de programação, informática e tecnologia para jovens da comunidade na Nave do Conhecimento.',
    exp2Date: 'ATUALMENTE',
    exp3: 'Exército Brasileiro',
    exp3Body: 'Redes, servidores e suporte como técnico de TI.',
    exp3Date: 'EXPERIÊNCIA ANTERIOR',
    toolsKicker: 'STACK PRINCIPAL',
    toolsTitle: 'FERRAMENTAS\nQUE USO',
    tools: [
      ['React', 'Interfaces e produto'],
      ['TypeScript', 'Contratos e segurança'],
      ['Java / Spring', 'APIs e domínio'],
      ['Python', 'RAG e automação'],
      ['PostgreSQL', 'Dados e pgvector'],
      ['Agentes / MCP', 'Orquestração e ferramentas'],
    ],
    deliveryKicker: 'ENTREGA E OPERAÇÃO',
    deliveryTitle: 'ENTREGA\nREPRODUTÍVEL',
    deliveryBody:
      'Uso práticas de plataforma para repetir build, validação e entrega com menos surpresa. No dashboard, usei Cloudflare Tunnel e Zero Trust no acesso; o Kong organizou a entrada das APIs.',
    deliveryTags: [
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Kong API Gateway',
      'Cloudflare Tunnel',
      'Cloudflare Zero Trust',
      'REST + JWT',
      'PostgreSQL / pgvector',
      'n8n workflows',
      'Testes automatizados',
      'Code review',
    ],
    contactKicker: 'VAMOS CONVERSAR',
    contactTitle: 'TEM UM PROBLEMA\nPARA RESOLVER?',
    contactBody:
      'Procuro estágio em GenAI para trabalhar perto do produto, do código e da operação.',
    email: 'ENVIAR E-MAIL',
    resume: 'BAIXAR CURRÍCULO PDF',
  },
  en: {
    nav: ['Home', 'Projects', 'Applied AI', 'Experience', 'Stack', 'Contact'],
    heroKicker: 'AI ENGINEERING · FULL STACK · RIO DE JANEIRO',
    profileBio:
      'Full-stack developer and OpportunusAI co-founder. I work across product, code, and operations.',
    heroTitle: 'FULL STACK DEVELOPER\nWITH APPLIED AI',
    heroBody:
      'I build web applications and APIs. I use AI to research, implement, and review with more precision, from the first flow to deployment.',
    stats: [
      ['24+', 'PUBLISHED\nPROJECTS'],
      ['18+', 'PUBLIC\nREPOSITORIES'],
      ['3', 'PRODUCT, PLATFORM,\nAND AI'],
    ],
    orbit: 'AGENTS · RAG · MCP · PRODUCT',
    orbitBody:
      'AI enters the full loop: discovery, architecture, implementation, validation, operations, and learning.',
    build: 'WEB, API, DATA',
    buildBody: 'React, TypeScript, Java, Python, and PostgreSQL for products that need to work.',
    projectsKicker: 'CASES AND PROOF',
    projectsTitle: 'SELECTED\nPROJECTS',
    projectsLead: 'The problem, the technical decision, and what shipped.',
    opportunus: 'OpportunusAI · WhatsApp support and sales',
    opportunusMeta: 'PUBLIC PROJECT · DASHBOARD V1',
    opportunusBody:
      'I built the public dashboard for the first version and coordinated the product evolution into its current operation. I followed integrations, rules, access, and the signals the team needs to step in.',
    store: 'Crochet storefront',
    storeBody:
      'A catalog where customers choose item, size, and color. The full cart arrives in one message and the owner manages products from a dashboard.',
    storeMeta: 'REACT · JAVA · SPRING BOOT · MYSQL',
    vector: 'Vector Chunk Kit',
    vectorBody:
      'A Python tool that prepares and reviews passages before embeddings, with explicit metadata for a more predictable RAG pipeline.',
    vectorMeta: 'PYTHON · POSTGRESQL · PGVECTOR · OFFLINE',
    hit: 'HIT · mobile product',
    hitBody:
      'An app for finding people to play sports with and turning training into a shared routine.',
    hitMeta: 'REACT NATIVE · MOBILE PRODUCT',
    open: 'OPEN CASE',
    visitSite: 'VISIT OPPORTUNUSAI.COM',
    viewScreens: 'VIEW SCREENS',
    sourceCode: 'VIEW CODE',
    fictional: 'DEMO · SYNTHETIC DATA',
    aiKicker: 'HOW I USE AI',
    aiTitle: 'AI THROUGH\nTHE WHOLE LOOP',
    aiLead:
      'I use AI to cut repetitive work and improve decisions. Each tool has a clear boundary.',
    aiCards: [
      [
        '01',
        'I orchestrate agents',
        'I split work by context, contract, and exit criteria. Agents research, implement, review, and record decisions.',
      ],
      [
        '02',
        'I connect tools with MCP',
        'I use tools and servers as explicit interfaces for files, repositories, data, and automations, with visible permissions.',
      ],
      [
        '03',
        'I retrieve context with RAG',
        'I prepare documents, metadata, and filters before generation. Context must be traceable and relevant to the task.',
      ],
      [
        '04',
        'I observe and govern',
        'I define handoff, logs, tests, human approval, and metrics to know when AI helped and when it must stop.',
      ],
    ],
    opportunusKicker: 'CASE · OPPORTUNUSAI',
    opportunusTitle: 'FROM CONVERSATION\nTO OUTCOME',
    opportunusLead:
      'At OpportunusAI, I coordinated and followed the product evolution from the public V1 to the production dashboard, across integrations, rules, access, and follow-up.',
    opportunusSteps: [
      [
        '01',
        'Understand',
        'AI interprets text, audio, or images and waits for the customer to finish their intent.',
      ],
      [
        '02',
        'Check',
        'It looks up catalog, variation, price, inventory, and shipping through integrations.',
      ],
      [
        '03',
        'Confirm',
        'It summarizes items, shipping, and total; checkout is created only after a “yes”.',
      ],
      [
        '04',
        'Follow through',
        'It updates payment, shipping, and delivery and hands off to a person when needed.',
      ],
    ],
    publicMetrics: [
      ['+270', 'paid orders with AI participation', 'public metric on the landing page'],
      ['~20 s', 'median response time', 'includes wait time while the customer finishes typing'],
    ],
    screensKicker: 'PRODUCT SCREENS',
    screensTitle: 'PRODUCT\nVERSIONS',
    screensBody:
      'The V1 is the public dashboard. The V2 organizes operations. Open a screen to browse the prints.',
    v1ScreensTitle: 'Public dashboard',
    v1ScreensBody:
      'Leads, sales by channel, and attribution in a public demonstration with synthetic data.',
    v2ScreensTitle: 'Operations dashboard',
    v2ScreensBody:
      'Sales overview, conversations, carts that need attention, and AI indicators for the team.',
    v2ConversationBody:
      'Assisted conversation, AI pause, summary, Chatwoot handoff, and memory under review.',
    screenOverview: 'Dashboard overview',
    screenConversation: 'Conversation with AI assistance',
    screenPublicDemo: 'Public panel demo',
    experienceKicker: 'EXPERIENCE',
    experienceTitle: 'SOFTWARE\nWITH CONTEXT',
    experienceBody:
      'Information Systems student at the Federal University of Science and Innovation of Rio de Janeiro.',
    exp1: 'Co-founder & CTO · OpportunusAI',
    exp1Body:
      'Product, architecture, and operations for an AI that supports, sells, and delivers context to teams.',
    exp1Date: 'CURRENTLY',
    exp2: 'Nave do Conhecimento',
    exp2Body:
      'I teach programming, computer literacy, and technology to young people from the community at Nave do Conhecimento.',
    exp2Date: 'CURRENTLY',
    exp3: 'Brazilian Army',
    exp3Body: 'Networks, servers, and support as an IT technician.',
    exp3Date: 'PREVIOUS EXPERIENCE',
    toolsKicker: 'CORE STACK',
    toolsTitle: 'TOOLS\nI USE',
    tools: [
      ['React', 'Interfaces and product'],
      ['TypeScript', 'Contracts and safety'],
      ['Java / Spring', 'APIs and domain'],
      ['Python', 'RAG and automation'],
      ['PostgreSQL', 'Data and pgvector'],
      ['Agents / MCP', 'Orchestration and tools'],
    ],
    deliveryKicker: 'DELIVERY AND OPERATIONS',
    deliveryTitle: 'REPEATABLE\nDELIVERY',
    deliveryBody:
      'I use platform practices to repeat build, validation, and delivery with fewer surprises. The dashboard used Cloudflare Tunnel and Zero Trust for access; Kong organized the API entry point.',
    deliveryTags: [
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Kong API Gateway',
      'Cloudflare Tunnel',
      'Cloudflare Zero Trust',
      'REST + JWT',
      'PostgreSQL / pgvector',
      'n8n workflows',
      'Automated tests',
      'Code review',
    ],
    contactKicker: 'LET’S TALK',
    contactTitle: 'HAVE A PROBLEM\nTO SOLVE?',
    contactBody: 'I am looking for a GenAI internship close to product, code, and operations.',
    email: 'SEND AN EMAIL',
    resume: 'DOWNLOAD RESUME PDF',
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
    const value = localStorage.getItem('portfolio-locale')
    return value === 'pt-BR' || value === 'en' ? value : getLocale()
  } catch {
    return getLocale()
  }
}

export const readTheme = (): Theme => {
  try {
    const value = localStorage.getItem('portfolio-theme')
    return value === 'dark' || value === 'light' ? value : 'light'
  } catch {
    return 'light'
  }
}
