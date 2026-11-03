# Copy final — PT-BR e English

## Alternativas da primeira tela

### Alternativa A — cargo primeiro

#### PT-BR

**Rodrigo Lima**

**Full Stack Developer | React, TypeScript, Node.js, Python & Docker | Web Applications & REST APIs**

Desenvolvo aplicações web e APIs REST.

No E-commerce Application, a pessoa escolhe a peça, define tamanho, cor e quantidade e abre o WhatsApp com o pedido já preenchido.

[**Abrir case E-commerce Application**](#work)

[**Ver código no GitHub**](https://github.com/rodrigolima-dev)

#### English

**Rodrigo Lima**

**Full Stack Developer | React, TypeScript, Node.js, Python & Docker | Web Applications & REST APIs**

I build web applications and REST APIs.

In the E-commerce Application, a customer chooses a piece, size, color, and quantity, then opens WhatsApp with the order details already filled in.

[**Open the E-commerce Application case**](#work)

[**View code on GitHub**](https://github.com/rodrigolima-dev)

### Alternativa B — projeto mais cedo

#### PT-BR

**Rodrigo Lima**

**E-commerce Application**

Uma loja de crochê em que a pessoa escolhe a peça, ajusta tamanho e cor, monta o carrinho e abre o WhatsApp com o pedido preenchido.

**Full Stack Developer | React, TypeScript, Node.js, Python & Docker | Web Applications & REST APIs**

[**Abrir o case**](#work)

[**Ver código no GitHub**](https://github.com/rodrigolima-dev)

#### English

**Rodrigo Lima**

**E-commerce Application**

A crochet store where a customer chooses a piece, selects size and color, builds a cart, and opens WhatsApp with the order filled in.

**Full Stack Developer | React, TypeScript, Node.js, Python & Docker | Web Applications & REST APIs**

[**Open the case**](#work)

[**View code on GitHub**](https://github.com/rodrigolima-dev)

## Versão escolhida — PT-BR

### Navegação

Rodrigo Lima

Projetos  
Experiência  
Sobre  
Contato

EN  
Modo escuro

### Primeira tela

**Rodrigo Lima**

**Full Stack Developer | React, TypeScript, Node.js, Python & Docker | Web Applications & REST APIs**

Desenvolvo aplicações web e APIs REST.

No E-commerce Application, a pessoa escolhe a peça, define tamanho, cor e quantidade e abre o WhatsApp com o pedido já preenchido.

[**Abrir case E-commerce Application**](#work)

[**Ver código no GitHub**](https://github.com/rodrigolima-dev)

Texto alternativo do retrato: Retrato de Rodrigo Lima

### Case principal

### Card curto

## E-commerce Application

Uma loja de crochê em que a pessoa escolhe a peça, define tamanho, cor e quantidade, adiciona ao carrinho e abre o WhatsApp com os dados do pedido preenchidos.

React/Vite · Java/Spring Boot

[**Abrir case E-commerce Application**](#work)

[**Abrir Cart.jsx**](https://github.com/rodrigolima-dev/orpheuswim-frontend/blob/271bd002b16d70dde014b3f6adef73a2cca1a610/src/pages/Cart/Cart.jsx#L16-L40)

#### 01 / CASE PRINCIPAL

## E-commerce Application

**Catálogo, seleção da peça, carrinho e pedido iniciado no WhatsApp.**

A loja combina uma interface React/Vite com uma API REST em Java/Spring Boot.

#### O que a pessoa consegue fazer

Ela vê lançamentos e produtos, filtra o catálogo, abre uma peça, escolhe tamanho e cor, ajusta a quantidade, adiciona ao carrinho e revisa o total antes de iniciar a conversa no WhatsApp.

#### O que implementei

Implementei a interface React/Vite e a API REST Java/Spring Boot. O carrinho preserva os itens no navegador; a API entrega produtos, lançamentos e operações administrativas protegidas por JWT.

#### Decisão para discutir

No checkout, o navegador monta a mensagem com produto, tamanho, cor, quantidade, preço unitário e total e abre o link do WhatsApp.

#### Consequência observável

Ao clicar em “Finalizar Compra”, a conversa é aberta com esses dados já preenchidos. O carrinho é limpo depois da abertura da janela.

#### Limite honesto

O código abre o WhatsApp; não processa pagamento e não prova que uma venda ou um pedido foram concluídos.

[**Abrir o primeiro arquivo: Cart.jsx**](https://github.com/rodrigolima-dev/orpheuswim-frontend/blob/271bd002b16d70dde014b3f6adef73a2cca1a610/src/pages/Cart/Cart.jsx#L16-L40)

[**Ver código do frontend**](https://github.com/rodrigolima-dev/orpheuswim-frontend/tree/271bd002b16d70dde014b3f6adef73a2cca1a610)

[**Ver código da API**](https://github.com/rodrigolima-dev/orpheuswim-api/tree/4b5dfd059057500f13a0cc561f0b5225980a4748)

Legenda da figura: Fluxo de pedido com dados escolhidos no navegador · sem pagamento processado

### Projetos técnicos

#### 02 / CASE TÉCNICO

## OpportunusAI Dashboard

**Permissões e isolamento entre organizações em uma demonstração pública com dados fictícios.**

O dashboard Next.js usa perfis, empresas e registros sintéticos. Páginas e APIs repetem no servidor a verificação de sessão, empresa ativa, vínculo e permissão da rota antes de devolver dados.

**O que conferir:** trocar o tenant na URL não libera os dados de outra empresa; os testes HTTP cobrem respostas 401 e 403, troca de empresa, origem inválida, cache privado e logout.

**Limite:** é uma demonstração local, sem banco, integrações comerciais ou dados reais.

[**Ver repositório**](https://github.com/rodrigolima-dev/opportunus-dashboard/tree/3ee0dc86fd31c0fe153f3779846305378969ee51)

[**Ler walkthrough de cinco minutos**](https://github.com/rodrigolima-dev/opportunus-dashboard/blob/3ee0dc86fd31c0fe153f3779846305378969ee51/docs/DEMO_WALKTHROUGH.md)

Legenda da figura: Dashboard V1 · organizações, perfis e números fictícios

#### 03 / PRODUTO PRIVADO

## HIT

**Um app de fitness em desenvolvimento, com identidade própria e previsão de lançamento para dezembro de 2026.**

O review público mostra a direção do produto e o status do projeto sem expor telas ou código privados.

**Limite:** o repositório é privado; esta página não apresenta demo, métricas ou funcionalidades que não foram autorizadas para divulgação.

Status: desenvolvimento privado · previsão de lançamento: dezembro de 2026

Legenda da figura: Logo HIT · projeto privado · previsão dezembro de 2026

#### 04 / PROVA DE PYTHON

## vector-chunk-kit

**Chunks de texto revisáveis antes de embeddings e escrita no pgvector.**

A ferramenta lê documentos JSONL, aplica um template e prepara chunks com ID, posição, hash e metadados. O comando padrão faz preview offline; somente --apply pode chamar a API de embeddings ou escrever no banco.

**O que conferir:** os testes cobrem saída determinística, sobreposição de chunks, rejeição de namespace inválido, idempotência por hash e substituição explícita de uma fonte.

**Limite:** a estimativa de tokens usa caracteres; ela é uma prévia, não uma cotação do modelo.

[**Ver repositório**](https://github.com/rodrigolima-dev/vector-chunk-kit/tree/fd5302a14b0e1afaa66f37528899ef27d8fdd584)

Legenda da figura: JSONL → chunks revisáveis → preview offline → apply explícito

#### 05 / FLUXO OFFLINE

## Guarded Retrieval Graph

**Autorização por tenant antes da recuperação em um grafo LangGraph.**

O fluxo valida a entrada, verifica o vínculo do principal, busca somente documentos publicados do tenant selecionado e limita a uma nova tentativa lexical. Um pedido negado termina antes da recuperação e da resposta.

**Limite:** os tenants e documentos são fictícios; não há LLM, chave de API, banco ou integração externa.

[**Ver repositório**](https://github.com/rodrigolima-dev/guarded-langgraph-demo/tree/077b4aff19ccb6e9b09ed91a1e53f754aad5b6d3)

[**Abrir testes do fluxo**](https://github.com/rodrigolima-dev/guarded-langgraph-demo/blob/077b4aff19ccb6e9b09ed91a1e53f754aad5b6d3/tests/test_workflow.py)

#### 06 / AUTOMAÇÃO OFFLINE

## n8n Automation Patterns

**Quatro workflows inativos para validar entradas, limitar tentativas, classificar um sinal e filtrar documentos sintéticos por tenant.**

Cada caminho termina em um resultado explícito. Os exports não têm Agent, prompt autorado, credencial ou chamada externa.

**O que conferir:** os testes verificam que cada tenant recebe somente documentos publicados do próprio escopo, que consultas inválidas são rejeitadas e que o resultado é determinístico e somente leitura.

**Limite:** os exemplos não monitoram um serviço real, não fazem busca vetorial e não mutam sistemas externos.

[**Ver repositório**](https://github.com/rodrigolima-dev/n8n-patterns/tree/3f1c6dc3ce342a2e31fc9e05d70e15a516029c80)

### Experiência

#### Cofundador e CTO — OpportunusAI

Atuo na engenharia de produto da OpportunusAI. Nos projetos públicos, disponibilizei o dashboard V1 e exemplos offline de autorização, recuperação e automação.

A V2 privada não está aberta para inspeção. As imagens públicas da V2 usam conteúdo e números fictícios.

[**Ver projetos públicos da OpportunusAI**](#projetos)

### Sobre

## Interface, API e dados

Trabalho entre interface, API e dados. Em projetos públicos, você pode acompanhar uma loja React/Vite conectada a uma API Java/Spring Boot, um dashboard Next.js com isolamento por organização, ferramentas Python para preparar e revisar dados antes da ingestão.

Meu trabalho público mostra o caminho entre uma ação na interface e a regra que a sustenta no servidor: o carrinho leva escolhas ao WhatsApp; o dashboard bloqueia uma empresa fora da sessão; o preview de chunks permite revisar o texto antes de chamar um provedor.

### Contato

## Estou aberto a vagas de desenvolvimento full stack.

Se você está recrutando ou quer revisar o código, comece pelo case E-commerce Application e depois abra o dashboard da OpportunusAI ou o review do HIT.

[**Ver código no GitHub**](https://github.com/rodrigolima-dev)

[**Conectar no LinkedIn**](https://www.linkedin.com/in/rodrigo-lima-95a548242/)

[**Enviar e-mail**](mailto:rodrigolima.developer@gmail.com)

### Rodapé

Rodrigo Lima · Full Stack Developer

GitHub  
LinkedIn

### Metadados e prévia de compartilhamento

Título: Rodrigo Lima — Full Stack Developer | React, TypeScript, Node.js, Python & Docker

Description: Full Stack Developer em React, TypeScript, Node.js, Python e Docker. Comece pelo E-commerce Application e inspecione aplicações web e APIs REST com código público.

Open Graph title: Rodrigo Lima — Full Stack Developer | React, TypeScript, Node.js, Python & Docker

Open Graph description: Comece pelo E-commerce Application: uma aplicação web com catálogo, carrinho e pedido iniciado no WhatsApp. Depois, abra os projetos técnicos com código e testes públicos.

Twitter card: summary_large_image

Social card:

Rodrigo Lima  
FULL STACK DEVELOPER  
Web applications & REST APIs  
ORPHEUSWIM · REACT · JAVA

## Final version — English

### Navigation

Rodrigo Lima

Projects  
Experience  
About  
Contact

PT  
Dark mode

### First screen

**Rodrigo Lima**

**Full Stack Developer | React, TypeScript, Node.js, Python & Docker | Web Applications & REST APIs**

I build web applications and REST APIs.

In the E-commerce Application, a customer chooses a piece, size, color, and quantity, then opens WhatsApp with the order details already filled in.

[**Open the E-commerce Application case**](#work)

[**View code on GitHub**](https://github.com/rodrigolima-dev)

Portrait alt text: Portrait of Rodrigo Lima

### Main case

### Short card

## E-commerce Application

A crochet store where a customer chooses a piece, size, color, and quantity, adds it to the cart, and opens WhatsApp with the order details filled in.

React/Vite · Java/Spring Boot

[**Open the E-commerce Application case**](#work)

[**Open Cart.jsx**](https://github.com/rodrigolima-dev/orpheuswim-frontend/blob/271bd002b16d70dde014b3f6adef73a2cca1a610/src/pages/Cart/Cart.jsx#L16-L40)

#### 01 / MAIN CASE

## E-commerce Application

**Catalog, product selection, cart, and an order started in WhatsApp.**

The store pairs a React/Vite interface with a Java/Spring Boot REST API.

#### What a customer can do

They can browse releases and products, filter the catalog, open a product, choose a size and color, adjust the quantity, add it to the cart, and review the total before starting a WhatsApp conversation.

#### What I implemented

I implemented the React/Vite interface and the Java/Spring Boot REST API. The cart keeps items in the browser; the API serves products and releases and protects administrative operations with JWT.

#### A decision to discuss

At checkout, the browser builds a message with the product, size, color, quantity, unit price, and total, then opens the WhatsApp link.

#### Observable consequence

Clicking “Finish order” opens the conversation with those details already filled in. The cart is cleared after the new window is opened.

#### Honest limit

The code opens WhatsApp; it does not process payment or prove that a sale or order was completed.

[**Open the first file: Cart.jsx**](https://github.com/rodrigolima-dev/orpheuswim-frontend/blob/271bd002b16d70dde014b3f6adef73a2cca1a610/src/pages/Cart/Cart.jsx#L16-L40)

[**View frontend code**](https://github.com/rodrigolima-dev/orpheuswim-frontend/tree/271bd002b16d70dde014b3f6adef73a2cca1a610)

[**View API code**](https://github.com/rodrigolima-dev/orpheuswim-api/tree/4b5dfd059057500f13a0cc561f0b5225980a4748)

Figure caption: Order flow with customer choices assembled in the browser · no payment processed

### Technical projects

#### 02 / TECHNICAL CASE

## OpportunusAI Dashboard

**Permissions and organization isolation in a public demonstration with fictional data.**

The Next.js dashboard uses fictional profiles, companies, and records. Pages and APIs repeat the server-side checks for session, active company, membership, and route capability before returning data.

**What to inspect:** changing the tenant in the URL does not release another company’s data; HTTP tests cover 401 and 403 responses, tenant switching, invalid origin, private cache, and logout.

**Limit:** this is a local demonstration with no database, commercial integrations, or real data.

[**View repository**](https://github.com/rodrigolima-dev/opportunus-dashboard/tree/3ee0dc86fd31c0fe153f3779846305378969ee51)

[**Read the five-minute walkthrough**](https://github.com/rodrigolima-dev/opportunus-dashboard/blob/3ee0dc86fd31c0fe153f3779846305378969ee51/docs/DEMO_WALKTHROUGH.md)

Figure caption: V1 dashboard · fictional organizations, profiles, and figures

#### 03 / PRIVATE PRODUCT

## HIT

**A fitness app in development with its own identity and a planned December 2026 launch.**

The public review shows the product direction and project status without exposing private screens or code.

**Limit:** the repository is private; this page does not present a demo, metrics, or features that were not authorized for publication.

Status: private build · planned launch: December 2026

Figure caption: HIT wordmark · private product · December 2026 target

#### 04 / PYTHON PROOF

## vector-chunk-kit

**Reviewable text chunks before embeddings and pgvector writes.**

The tool reads JSONL documents, applies a template, and prepares chunks with an ID, position, hash, and metadata. The default command runs an offline preview; only --apply can call the embeddings API or write to the database.

**What to inspect:** tests cover deterministic output, chunk overlap, invalid namespaces, hash-based idempotence, and explicit source replacement.

**Limit:** the token estimate uses character count; it is a preview, not a model quote.

[**View repository**](https://github.com/rodrigolima-dev/vector-chunk-kit/tree/fd5302a14b0e1afaa66f37528899ef27d8fdd584)

Figure caption: JSONL → reviewable chunks → offline preview → explicit apply

#### 05 / OFFLINE FLOW

## Guarded Retrieval Graph

**Tenant authorization before retrieval in a LangGraph flow.**

The flow validates input, checks principal membership, retrieves only published documents from the selected tenant, and allows one bounded lexical retry. A denied request ends before retrieval and response.

**Limit:** tenants and documents are fictional; there is no LLM, API key, database, or external integration.

[**View repository**](https://github.com/rodrigolima-dev/guarded-langgraph-demo/tree/077b4aff19ccb6e9b09ed91a1e53f754aad5b6d3)

[**Open the workflow tests**](https://github.com/rodrigolima-dev/guarded-langgraph-demo/blob/077b4aff19ccb6e9b09ed91a1e53f754aad5b6d3/tests/test_workflow.py)

#### 06 / OFFLINE AUTOMATION

## n8n Automation Patterns

**Four inactive workflows for input validation, bounded retry decisions, signal classification, and tenant-scoped filtering of synthetic documents.**

Each path ends in an explicit result. The exports contain no Agent node, authored prompt, credential, or external call.

**What to inspect:** tests check that each tenant receives only published documents from its own scope, invalid queries are rejected, and the result is deterministic and read-only.

**Limit:** the examples do not monitor a real service, perform vector search, or mutate external systems.

[**View repository**](https://github.com/rodrigolima-dev/n8n-patterns/tree/3f1c6dc3ce342a2e31fc9e05d70e15a516029c80)

### Experience

#### Co-founder and CTO — OpportunusAI

I work in product engineering at OpportunusAI. In the public work, I shipped the V1 dashboard and offline examples for authorization, retrieval, and automation.

The private V2 is not open for inspection. Public V2 images use fictional content and figures.

[**View public projects from OpportunusAI**](#projects)

### About

## Interfaces, APIs, and data

I work across interfaces, APIs, and data. In public projects, you can follow a React/Vite store connected to a Java/Spring Boot API, a Next.js dashboard with organization isolation, Python tools that prepare and review data before ingestion.

My public work follows the path between an interface action and the server rule behind it: the cart carries choices to WhatsApp; the dashboard blocks a company outside the session; the chunk preview lets you review text before calling a provider.

### Contact

## I’m open to full stack development roles.

If you are hiring or want to review the code, start with the E-commerce Application case, then open the OpportunusAI dashboard or the HIT review.

[**View code on GitHub**](https://github.com/rodrigolima-dev)

[**Connect on LinkedIn**](https://www.linkedin.com/in/rodrigo-lima-95a548242/)

[**Send an email**](mailto:rodrigolima.developer@gmail.com)

### Footer

Rodrigo Lima · Full Stack Developer

GitHub  
LinkedIn

### Metadata and share preview

Title: Rodrigo Lima — Full Stack Developer | React, TypeScript, Node.js, Python & Docker

Description: Full Stack Developer using React, TypeScript, Node.js, Python and Docker. Start with the E-commerce Application, then inspect public web applications and REST APIs.

Open Graph title: Rodrigo Lima — Full Stack Developer | React, TypeScript, Node.js, Python & Docker

Open Graph description: Start with the E-commerce Application: a web application with a catalog, cart, and an order started in WhatsApp. Then open technical projects with public code and tests.

Twitter card: summary_large_image

Social card:

Rodrigo Lima  
FULL STACK DEVELOPER  
Web applications & REST APIs  
ORPHEUSWIM · REACT · JAVA
