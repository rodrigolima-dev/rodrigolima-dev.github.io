import { useEffect, useState } from 'react'
import { FaEnvelope, FaGithub, FaJava, FaLinkedinIn } from 'react-icons/fa'
import { SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTypescript } from 'react-icons/si'
import { content, readLocale, type Locale } from './content'
import { projectLinks, publicRepositories } from './projects'

const socials = {
  email: 'mailto:rodrigolima.developer@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rodrigo-lima-95a548242/',
  github: 'https://github.com/rodrigolima-dev',
}
function Icon({ name }: { name: 'arrow' | 'grid' | 'code' | 'db' | 'spark' }) {
  const paths = {
    arrow: 'M5 12h13M13 6l6 6-6 6',
    grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
    code: 'm8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14',
    db: 'M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Zm0 0v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6m-14 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6',
    spark:
      'M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8',
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
function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
      <Icon name="arrow" />
    </a>
  )
}
export function App() {
  const [locale, setLocale] = useState<Locale>(readLocale)
  const [activeRepoGroup, setActiveRepoGroup] = useState<'interface' | 'code' | null>(null)
  const t = content[locale]
  useEffect(() => {
    document.documentElement.lang = locale
    document.title =
      locale === 'pt-BR'
        ? 'Rodrigo Lima | Desenvolvedor Full Stack'
        : 'Rodrigo Lima | Full-Stack Developer'
    try {
      localStorage.setItem('portfolio-locale', locale)
    } catch {
      /* storage may be unavailable */
    }
  }, [locale])
  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <a className="wordmark" href="#top">
          RL<span>•</span>
        </a>
        <nav>
          {t.nav.map((item, i) => (
            <a key={item} href={['#top', '#projects', '#experience', '#stack', '#contact'][i]}>
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
              {t.heroTitle.split('\n').map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="hero-body">{t.heroBody}</p>
            <div className="stats">
              {t.stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>
                    {label.split('\n').map((x) => (
                      <span key={x}>
                        {x}
                        <br />
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <div className="hero-cards">
              <button
                type="button"
                className={`color-card orange ${activeRepoGroup === 'interface' ? 'is-active' : ''}`}
                onClick={() =>
                  setActiveRepoGroup(activeRepoGroup === 'interface' ? null : 'interface')
                }
              >
                <Icon name="spark" />
                <strong>{t.orbit}</strong>
                <span>↗</span>
              </button>
              <button
                type="button"
                className={`color-card lime ${activeRepoGroup === 'code' ? 'is-active' : ''}`}
                onClick={() => setActiveRepoGroup(activeRepoGroup === 'code' ? null : 'code')}
              >
                <Icon name="grid" />
                <strong>
                  REACT, NODE.JS,
                  <br />
                  JAVA, PYTHON
                </strong>
                <span>↗</span>
              </button>
            </div>
            {activeRepoGroup ? (
              <div className="related-repositories">
                <p className="eyebrow">{t.reposKicker}</p>
                <div className="related-repo-list">
                  {publicRepositories
                    .filter(([, , language]) =>
                      activeRepoGroup === 'interface'
                        ? ['TypeScript', 'JavaScript', 'CSS', 'HTML'].includes(language)
                        : ['Java', 'Python', 'PHP', 'AI'].includes(language),
                    )
                    .slice(0, 8)
                    .map(([name, description, language]) => (
                      <a
                        key={name}
                        href={'https://github.com/rodrigolima-dev/' + name}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{language}</span>
                        <strong>{name}</strong>
                        <Icon name="arrow" />
                        <small>{description}</small>
                      </a>
                    ))}
                </div>
              </div>
            ) : null}
          </section>
          <section className="content-section" id="projects">
            <div className="section-title">
              <p>{t.projectsKicker}</p>
              <h2>
                {t.projectsTitle.split('\n').map((x) => (
                  <span key={x}>
                    {x}
                    <br />
                  </span>
                ))}
              </h2>
            </div>
            <div className="project-list">
              <article className="project-row">
                <img src="/media/ecommerce-fictional-products.png" alt={t.store} />
                <div>
                  <h3>{t.store}</h3>
                  <p>{t.storeBody}</p>
                  <small>REACT · JAVA · SPRING BOOT · MYSQL</small>
                  <External href={projectLinks.storefront}>{t.open}</External>
                  <External href={projectLinks.api}>JAVA API</External>
                </div>
              </article>
              <article className="project-row">
                <img src="/media/dashboard-showcase-pt.webp" alt={t.dashboard} />
                <div>
                  <h3>{t.dashboard}</h3>
                  <p>{t.dashboardBody}</p>
                  <small>NEXT.JS · TYPESCRIPT · NODE.JS</small>
                  <em>{t.fictional}</em>
                  <External href={projectLinks.demo}>{t.open}</External>
                  <External href={projectLinks.tests}>ACCESS TESTS</External>
                </div>
              </article>
            </div>
            <div className="project-list selected-secondary">
              <article className="project-row">
                <img src="/media/hit-screens.png" alt={t.hit} loading="lazy" />
                <div>
                  <h3>{t.hit}</h3>
                  <p>{t.hitBody}</p>
                  <small>REACT NATIVE · MOBILE PRODUCT</small>
                  <a href="#stack">
                    VIEW APP SCREENS <Icon name="arrow" />
                  </a>
                </div>
              </article>
              <article className="project-row">
                <div className="vector-thumb" aria-label={t.vector}>
                  <FaGithub aria-hidden="true" />
                </div>
                <div>
                  <h3>{t.vector}</h3>
                  <p>{t.vectorBody}</p>
                  <small>PYTHON · POSTGRESQL · PGVECTOR</small>
                  <External href={projectLinks.vector}>TRY LOCAL EXAMPLE</External>
                </div>
              </article>
            </div>
          </section>
          <section className="content-section" id="experience">
            <div className="section-title">
              <p>{t.experienceKicker}</p>
              <h2>
                {t.experienceTitle.split('\n').map((x) => (
                  <span key={x}>
                    {x}
                    <br />
                  </span>
                ))}
              </h2>
            </div>
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
            <div className="section-title">
              <p>{t.toolsKicker}</p>
              <h2>
                {t.toolsTitle.split('\n').map((x) => (
                  <span key={x}>
                    {x}
                    <br />
                  </span>
                ))}
              </h2>
            </div>
            <div className="tools-grid">
              {t.tools.map(([name, desc], i) => (
                <div key={name}>
                  <span className="tool-icon">
                    {i === 0 ? (
                      <SiReact />
                    ) : i === 1 ? (
                      <SiNodedotjs />
                    ) : i === 2 ? (
                      <FaJava />
                    ) : i === 3 ? (
                      <SiTypescript />
                    ) : i === 4 ? (
                      <SiPython />
                    ) : (
                      <SiPostgresql />
                    )}
                  </span>
                  <strong>{name}</strong>
                  <small>{desc}</small>
                </div>
              ))}
            </div>
          </section>
          <section className="content-section contact-section" id="contact">
            <p className="eyebrow">{t.contactKicker}</p>
            <h2>
              {t.contactTitle.split('\n').map((x) => (
                <span key={x}>
                  {x}
                  <br />
                </span>
              ))}
            </h2>
            <p className="section-lead">{t.contactBody}</p>
            <div className="contact-actions">
              <a className="primary-button" href={socials.email}>
                {t.email} <Icon name="arrow" />
              </a>
              <a href="/cv/rodrigo-lima-full-stack.pdf" target="_blank" rel="noreferrer">
                {t.resume} <Icon name="arrow" />
              </a>
            </div>
          </section>
        </section>
      </main>
      <footer>
        © Rodrigo Lima · React · Node.js · Java · Spring Boot · TypeScript · Python · PostgreSQL
      </footer>
    </div>
  )
}
export default App
