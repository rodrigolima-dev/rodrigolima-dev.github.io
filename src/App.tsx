import { useEffect, useState, type ReactNode } from 'react'
import { FaEnvelope, FaGithub, FaJava, FaLinkedinIn, FaMoon, FaSun } from 'react-icons/fa'
import {
  SiCloudflare,
  SiDocker,
  SiGithubactions,
  SiKong,
  SiN8N,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { content, readLocale, readTheme, type Locale, type Theme } from './content'
import { projectLinks, publicRepositories } from './projects'

const socials = {
  email: 'mailto:rodrigolima.developer@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rodrigo-lima-95a548242/',
  github: 'https://github.com/rodrigolima-dev',
}

const media = {
  overview: '/media/v2-overview-rich-sanitized.jpg',
  conversation: '/media/v2-conversation-rich-sanitized.jpg',
  dashboard: '/media/dashboard-showcase-pt.webp',
}

function Icon({ name }: { name: 'arrow' | 'grid' | 'code' | 'spark' | 'shield' | 'eye' }) {
  const paths = {
    arrow: 'M5 12h13M13 6l6 6-6 6',
    grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
    code: 'm8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14',
    spark:
      'M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8',
    shield: 'M12 3 20 6v5c0 5-3.3 8.3-8 10-4.7-1.7-8-5-8-10V6l8-3Zm-3 9 2 2 4-4',
    eye: 'M2.5 12s3.3-5 9.5-5 9.5 5 9.5 5-3.3 5-9.5 5-9.5-5-9.5-5Zm9.5 2.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z',
  }
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name]} />
    </svg>
  )
}

function External({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <Icon name="arrow" />
    </a>
  )
}

function SectionTitle({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <div className="section-title">
      <p>{kicker}</p>
      <h2>
        <HeadingLines text={title} />
      </h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  )
}

function HeadingLines({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, index, lines) => (
        <span key={`${line}-${index}`}>
          {line}
          {index < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  )
}

function TechIcon({ name }: { name: string }) {
  const icons: Record<string, ReactNode> = {
    React: <SiReact />,
    TypeScript: <SiTypescript />,
    'Java / Spring': <FaJava />,
    Python: <SiPython />,
    PostgreSQL: <SiPostgresql />,
    'Agents / MCP': <Icon name="spark" />,
    Docker: <SiDocker />,
    'CI/CD': <SiGithubactions />,
    'Kong API Gateway': <SiKong />,
    'Cloudflare Tunnel': <SiCloudflare />,
    'Cloudflare Zero Trust': <SiCloudflare />,
    'n8n workflows': <SiN8N />,
    'REST + JWT': <Icon name="shield" />,
    'PostgreSQL / pgvector': <SiPostgresql />,
    'Automated tests': <Icon name="eye" />,
    'Testes automatizados': <Icon name="eye" />,
    'Code review': <Icon name="code" />,
  }
  return (
    <span className="tech-icon" aria-hidden="true">
      {icons[name] ?? <Icon name="grid" />}
    </span>
  )
}

export function App() {
  const [locale, setLocale] = useState<Locale>(readLocale)
  const [theme, setTheme] = useState<Theme>(readTheme)
  const [activeRepoGroup, setActiveRepoGroup] = useState<'interface' | 'code' | null>(null)
  const [activeScreen, setActiveScreen] = useState<number | null>(null)
  const t = content[locale]
  const navIds = ['top', 'projects', 'ai-work', 'experience', 'stack', 'contact']
  const screenGallery = [
    {
      src: media.dashboard,
      alt: t.screenPublicDemo,
      title: t.v1ScreensTitle,
      detail: t.v1ScreensBody,
    },
    {
      src: media.overview,
      alt: t.screenOverview,
      title: t.v2ScreensTitle,
      detail: t.v2ScreensBody,
    },
    {
      src: media.conversation,
      alt: t.screenConversation,
      title: t.screenConversation,
      detail: t.v2ConversationBody,
    },
  ]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title =
      locale === 'pt-BR' ? 'Rodrigo Lima | AI Engineer' : 'Rodrigo Lima | AI Engineer'
    try {
      localStorage.setItem('portfolio-locale', locale)
    } catch {
      /* storage may be unavailable */
    }
  }, [locale])

  useEffect(() => {
    if (activeScreen === null) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveScreen(null)
      if (event.key === 'ArrowRight')
        setActiveScreen((current) => (current === null ? 0 : (current + 1) % screenGallery.length))
      if (event.key === 'ArrowLeft')
        setActiveScreen((current) =>
          current === null
            ? screenGallery.length - 1
            : (current - 1 + screenGallery.length) % screenGallery.length,
        )
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeScreen, screenGallery.length])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      /* storage may be unavailable */
    }
  }, [theme])

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.hero-block, .content-section, .profile-card, .case-study',
    )
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add('is-visible'),
        ),
      { threshold: 0.12 },
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [locale])

  return (
    <div className="portfolio-shell" data-theme={theme}>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Rodrigo Lima">
          RL<span>•</span>
        </a>
        <nav aria-label="Navegação principal">
          {t.nav.map((item, index) => (
            <a key={item} href={`#${navIds[index]}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="top-actions">
          <button
            type="button"
            className="lang"
            onClick={() => setLocale(locale === 'pt-BR' ? 'en' : 'pt-BR')}
            aria-label={locale === 'pt-BR' ? 'Switch to English' : 'Mudar para português'}
          >
            {locale === 'pt-BR' ? 'PT' : 'EN'}
          </button>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
          >
            {theme === 'light' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
          </button>
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="code" />
          </a>
        </div>
      </header>

      <main id="top" className="layout">
        <aside className="profile-column">
          <div className="profile-card">
            <div className="profile-image">
              <img src="/media/portrait-head.png" alt="Rodrigo Lima" />
              <span className="orbit orbit-a" />
              <span className="orbit orbit-b" />
            </div>
            <div className="profile-status">
              <span /> OPEN TO GENAI INTERNSHIPS
            </div>
            <h2>Rodrigo Lima</h2>
            <div className="profile-mark">
              <Icon name="spark" />
            </div>
            <p className="profile-about">{t.profileBio}</p>
            <div className="social-row">
              <a href={socials.email} aria-label="E-mail">
                <FaEnvelope aria-hidden="true" />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn aria-hidden="true" />
              </a>
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="profile-note">
            {t.heroKicker}
            <br />
            <span>RIO DE JANEIRO / 2026</span>
          </div>
        </aside>

        <section className="content-column">
          <section className="hero-block">
            <p className="eyebrow">{t.heroKicker}</p>
            <h1>
              <HeadingLines text={t.heroTitle} />
            </h1>
            <p className="hero-body">{t.heroBody}</p>
            <div className="stats">
              {t.stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>
                    {label.split('\n').map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <div className="hero-cards">
              <a className="color-card orange" href="#ai-work">
                <Icon name="spark" />
                <strong>{t.orbit}</strong>
                <small>{t.orbitBody}</small>
                <span>↗</span>
              </a>
              <a className="color-card lime" href="#projects">
                <Icon name="grid" />
                <strong>{t.build}</strong>
                <small>{t.buildBody}</small>
                <span>↗</span>
              </a>
            </div>
            <div className="repo-toggle-row">
              <button
                type="button"
                className="text-button"
                onClick={() =>
                  setActiveRepoGroup(activeRepoGroup === 'interface' ? null : 'interface')
                }
              >
                Interfaces e produto <span>+</span>
              </button>
              <button
                type="button"
                className="text-button"
                onClick={() => setActiveRepoGroup(activeRepoGroup === 'code' ? null : 'code')}
              >
                Código e IA <span>+</span>
              </button>
            </div>
            {activeRepoGroup ? (
              <div className="related-repositories">
                <p className="eyebrow">OUTROS REPOSITÓRIOS</p>
                <div className="related-repo-list">
                  {publicRepositories
                    .filter(([, , language]) =>
                      activeRepoGroup === 'interface'
                        ? ['TypeScript', 'JavaScript', 'CSS', 'HTML'].includes(language)
                        : ['Java', 'Python', 'PHP', 'AI'].includes(language),
                    )
                    .slice(0, 6)
                    .map(([name, description, language]) => (
                      <External key={name} href={`https://github.com/rodrigolima-dev/${name}`}>
                        <span>{language}</span>
                        <strong>{name}</strong>
                        <small>{description}</small>
                      </External>
                    ))}
                </div>
              </div>
            ) : null}
          </section>

          <section className="content-section" id="projects">
            <SectionTitle kicker={t.projectsKicker} title={t.projectsTitle} lead={t.projectsLead} />
            <div className="project-list">
              <article className="project-row">
                <img src={media.dashboard} alt="Dashboard público V1 da OpportunusAI" />
                <div>
                  <p className="project-meta">{t.opportunusMeta}</p>
                  <h3>{t.opportunus}</h3>
                  <p>{t.opportunusBody}</p>
                  <div className="project-tags">
                    <span>AGENTS</span>
                    <span>RAG</span>
                    <span>MCP</span>
                  </div>
                  <div className="project-links">
                    <External href={projectLinks.opportunus}>{t.visitSite}</External>
                    <a href="#opportunusai">
                      {t.open}
                      <Icon name="arrow" />
                    </a>
                    <a href="#opportunusai-screens">
                      {t.viewScreens}
                      <Icon name="arrow" />
                    </a>
                  </div>
                </div>
              </article>
              <article className="project-row">
                <img src="/media/ecommerce-fictional-products.png" alt={t.store} />
                <div>
                  <p className="project-meta">{t.storeMeta}</p>
                  <h3>{t.store}</h3>
                  <p>{t.storeBody}</p>
                  <div className="project-links">
                    <External href={projectLinks.storefront}>{t.sourceCode}</External>
                    <External href={projectLinks.api}>JAVA API</External>
                  </div>
                </div>
              </article>
              <article className="project-row">
                <img src="/media/hit-screens.png" alt={t.hit} loading="lazy" />
                <div>
                  <p className="project-meta">{t.hitMeta}</p>
                  <h3>{t.hit}</h3>
                  <p>{t.hitBody}</p>
                  <div className="project-links">
                    <a href="#stack">
                      STACK <Icon name="arrow" />
                    </a>
                  </div>
                </div>
              </article>
              <article className="project-row">
                <div className="vector-thumb">
                  <Icon name="code" />
                </div>
                <div>
                  <p className="project-meta">{t.vectorMeta}</p>
                  <h3>{t.vector}</h3>
                  <p>{t.vectorBody}</p>
                  <div className="project-links">
                    <External href={projectLinks.vector}>{t.sourceCode}</External>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="content-section" id="ai-work">
            <SectionTitle kicker={t.aiKicker} title={t.aiTitle} lead={t.aiLead} />
            <div className="ai-grid">
              {t.aiCards.map(([index, title, body]) => (
                <article key={index}>
                  <span className="card-index">{index}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="governance-panel">
              <div>
                <p className="eyebrow">{t.governanceKicker}</p>
                <h3>
                  <HeadingLines text={t.governanceTitle} />
                </h3>
                <p>{t.governanceBody}</p>
              </div>
              <div className="governance-list">
                {t.governanceItems.map(([title, body]) => (
                  <div key={title}>
                    <span className="governance-icon">
                      <Icon name="shield" />
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <p>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="content-section case-study" id="opportunusai">
            <SectionTitle
              kicker={t.opportunusKicker}
              title={t.opportunusTitle}
              lead={t.opportunusLead}
            />
            <div className="case-flow">
              {t.opportunusSteps.map(([index, title, body]) => (
                <div key={index}>
                  <span>{index}</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              ))}
            </div>
            <div className="metrics-grid">
              {t.publicMetrics.map(([value, label, note]) => (
                <div key={value}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                  <small>{note}</small>
                </div>
              ))}
            </div>
            <div className="case-links">
              <External href={projectLinks.opportunus} className="primary-link">
                {t.visitSite}
              </External>
              <External href={projectLinks.demo}>{t.open}</External>
              <External href={projectLinks.tests}>ACCESS TESTS</External>
            </div>
          </section>

          <section className="content-section screens-section" id="opportunusai-screens">
            <SectionTitle kicker={t.screensKicker} title={t.screensTitle} lead={t.screensBody} />
            <div className="screen-groups">
              <div className="screen-group">
                <p className="project-meta">V1 · DASHBOARD PÚBLICO</p>
                <h3>{t.v1ScreensTitle}</h3>
                <p>{t.v1ScreensBody}</p>
                <div className="screen-grid">
                  <button
                    type="button"
                    className="screen-card screen-wide"
                    onClick={() => setActiveScreen(0)}
                  >
                    <img src={media.dashboard} alt={t.screenPublicDemo} />
                    <span>
                      {t.screenPublicDemo}
                      <Icon name="arrow" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="screen-group">
                <p className="project-meta">V2 · DASHBOARD DE OPERAÇÃO</p>
                <h3>{t.v2ScreensTitle}</h3>
                <p>{t.v2ScreensBody}</p>
                <div className="screen-grid">
                  <button type="button" className="screen-card" onClick={() => setActiveScreen(1)}>
                    <img src={media.overview} alt={t.screenOverview} />
                    <span>
                      {t.screenOverview}
                      <Icon name="arrow" />
                    </span>
                  </button>
                  <button type="button" className="screen-card" onClick={() => setActiveScreen(2)}>
                    <img src={media.conversation} alt={t.screenConversation} />
                    <span>
                      {t.screenConversation}
                      <Icon name="arrow" />
                    </span>
                  </button>
                </div>
                <p className="screen-detail">{t.v2ConversationBody}</p>
              </div>
            </div>
          </section>

          <section className="content-section" id="experience">
            <SectionTitle kicker={t.experienceKicker} title={t.experienceTitle} />
            <p className="section-lead">{t.experienceBody}</p>
            <div className="timeline">
              <article>
                <span>{t.exp1Date}</span>
                <h3>{t.exp1}</h3>
                <p>{t.exp1Body}</p>
              </article>
              <article>
                <span>{t.exp2Date}</span>
                <h3>{t.exp2}</h3>
                <p>{t.exp2Body}</p>
              </article>
              <article>
                <span>{t.exp3Date}</span>
                <h3>{t.exp3}</h3>
                <p>{t.exp3Body}</p>
              </article>
            </div>
          </section>

          <section className="content-section tools-section" id="stack">
            <SectionTitle kicker={t.toolsKicker} title={t.toolsTitle} />
            <div className="tools-grid">
              {t.tools.map(([name, desc]) => (
                <div key={name}>
                  <span className="tool-icon">
                    <TechIcon name={name} />
                  </span>
                  <strong>{name}</strong>
                  <small>{desc}</small>
                </div>
              ))}
            </div>
            <div className="delivery-panel">
              <div>
                <p className="eyebrow">{t.deliveryKicker}</p>
                <h3>
                  <HeadingLines text={t.deliveryTitle} />
                </h3>
                <p>{t.deliveryBody}</p>
              </div>
              <div className="delivery-tags">
                {t.deliveryTags.map((tag) => (
                  <span key={tag}>
                    <TechIcon name={tag} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="content-section contact-section" id="contact">
            <p className="eyebrow">{t.contactKicker}</p>
            <h2>
              <HeadingLines text={t.contactTitle} />
            </h2>
            <p className="section-lead">{t.contactBody}</p>
            <div className="contact-actions">
              <a className="primary-button" href={socials.email}>
                {t.email}
                <Icon name="arrow" />
              </a>
              <a href="/cv/rodrigo-lima-full-stack.pdf" target="_blank" rel="noreferrer">
                {t.resume}
                <Icon name="arrow" />
              </a>
            </div>
          </section>
        </section>
      </main>
      {activeScreen !== null ? (
        <div
          className="screen-modal-backdrop"
          role="presentation"
          onMouseDown={() => setActiveScreen(null)}
        >
          <div
            className="screen-modal"
            role="dialog"
            aria-modal="true"
            aria-label={screenGallery[activeScreen].title}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="screen-modal-topline">
              <span>{screenGallery[activeScreen].title}</span>
              <button
                type="button"
                className="screen-modal-close"
                onClick={() => setActiveScreen(null)}
                aria-label="Fechar tela"
              >
                ×
              </button>
            </div>
            <img src={screenGallery[activeScreen].src} alt={screenGallery[activeScreen].alt} />
            <div className="screen-modal-footer">
              <p>{screenGallery[activeScreen].detail}</p>
              <span>
                {activeScreen + 1} / {screenGallery.length}
              </span>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveScreen(
                      (activeScreen - 1 + screenGallery.length) % screenGallery.length,
                    )
                  }
                  aria-label="Tela anterior"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScreen((activeScreen + 1) % screenGallery.length)}
                  aria-label="Próxima tela"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <footer>
        © Rodrigo Lima · AI engineering · React · TypeScript · Java · Python · PostgreSQL · MCP
      </footer>
    </div>
  )
}

export default App
