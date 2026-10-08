import { useEffect, useState } from 'react'
import { content, type Locale, type Theme } from './content'
import { projectCopy, projects, type Project } from './projects'

const links = {
  github: 'https://github.com/rodrigolima-dev',
  linkedin: 'https://www.linkedin.com/in/rodrigo-lima-95a548242/',
  company: 'https://opportunusai.com/',
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? <path d="M5 19 19 5M7 5h12v12" /> : <path d="M4 12h16m-6-6 6 6-6 6" />}
    </svg>
  )
}

function ProjectVisual({
  kind,
  alt,
  caption,
  locale,
}: {
  kind: Project['visual']
  alt: string
  caption: string
  locale: Locale
}) {
  const dashboardAsset =
    locale === 'pt-BR' ? '/media/dashboard-showcase-pt.webp' : '/media/dashboard-showcase.webp'
  const flow =
    locale === 'pt-BR'
      ? {
          gate: 'Acesso',
          retrieve: 'Busca',
          answer: 'Resposta',
          denied: 'Sem acesso: parar',
          input: 'Entrada',
          rules: ['Validar', 'Tentar novamente', 'Sinalizar', 'Buscar'],
        }
      : {
          gate: 'Access',
          retrieve: 'Retrieve',
          answer: 'Answer',
          denied: 'Denied: stop',
          input: 'Input',
          rules: ['Validate', 'Retry', 'Signal', 'Lookup'],
        }

  return (
    <figure className={`project-visual ${kind}-visual visual-media`}>
      {kind === 'dashboard' ? (
        <img
          className="dashboard-screen"
          src={dashboardAsset}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      ) : kind === 'graph' ? (
        <div className="graph-flow" role="img" aria-label={alt}>
          <div className="graph-steps" aria-hidden="true">
            {[flow.gate, flow.retrieve, flow.answer].map((step, index) => (
              <div className="graph-step" key={step}>
                <span className="graph-dot">{String(index + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
          <span className="graph-denied" aria-hidden="true">
            ↳ {flow.denied}
          </span>
        </div>
      ) : (
        <div className="workflow-flow" role="img" aria-label={alt}>
          <span className="workflow-input" aria-hidden="true">
            {flow.input}
          </span>
          <div className="workflow-rules" aria-hidden="true">
            {flow.rules.map((rule, index) => (
              <span className="workflow-rule" key={rule}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                {rule}
              </span>
            ))}
          </div>
        </div>
      )}
      <figcaption className="visual-caption">{caption}</figcaption>
    </figure>
  )
}

function ProjectCard({
  project,
  index,
  locale,
  featured = false,
}: {
  project: Project
  index: number
  locale: Locale
  featured?: boolean
}) {
  const t = content[locale]
  const copy = projectCopy[locale][index]

  return (
    <article className={`project-card ${featured ? 'featured-card' : ''}`}>
      <div className="project-copy">
        <div className="project-card-top">
          <span className="project-number">
            {project.number} / {t.selectedWork}
          </span>
          <span className="project-category">{copy.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{copy.description}</p>
        {featured ? (
          <div className="project-detail">
            <span>{t.engineeringDecision}</span>
            <p>{copy.decision}</p>
          </div>
        ) : (
          <p className="project-decision">{copy.decision}</p>
        )}
        <div className="project-bottom">
          <ul aria-label={`${project.title}: ${t.technologies}`}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <a
            className="project-link"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.repositoryAria(project.title)}
          >
            {t.repositoryAction} <ArrowIcon diagonal />
          </a>
        </div>
      </div>
      <ProjectVisual
        kind={project.visual}
        alt={copy.visualAlt}
        caption={copy.visualCaption}
        locale={locale}
      />
    </article>
  )
}

export function App() {
  const [locale, setLocale] = useState<Locale>(() =>
    document.documentElement.lang === 'pt-BR' ? 'pt-BR' : 'en',
  )
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const t = content[locale]
  const companyImages = [
    '/media/v2-overview-rich-sanitized.jpg',
    '/media/v2-conversation-rich-sanitized.jpg',
    '/media/v2-learning-rich-sanitized.jpg',
  ]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.metaTitle)
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', t.metaDescription)
    try {
      localStorage.setItem('portfolio-locale', locale)
    } catch {
      /* Browsing can disable storage. */
    }
  }, [locale, t.metaTitle, t.metaDescription])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#111d1a' : '#f4f1eb')
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      /* Browsing can disable storage. */
    }
  }, [theme])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={t.backToTop} onClick={closeMenu}>
            <span className="brand-mark">
              RL<span>.</span>
            </span>
            <span className="brand-name">Rodrigo Lima</span>
          </a>
          <nav
            id="main-navigation"
            className={menuOpen ? 'nav-open' : ''}
            aria-label={t.navigation}
          >
            <a href="#work" onClick={closeMenu}>
              {t.menuWork}
            </a>
            <a href="#company" onClick={closeMenu}>
              {t.menuCompany}
            </a>
            <a href="#approach" onClick={closeMenu}>
              {t.menuApproach}
            </a>
            <a href="#about" onClick={closeMenu}>
              {t.menuAbout}
            </a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              {t.menuContact} <ArrowIcon diagonal />
            </a>
          </nav>
          <div className="header-controls">
            <div className="locale-control" role="group" aria-label={t.languageControl}>
              <button
                type="button"
                lang="en"
                aria-label={t.english}
                aria-pressed={locale === 'en'}
                onClick={() => setLocale('en')}
              >
                EN
              </button>
              <button
                type="button"
                lang="pt-BR"
                aria-label={t.portuguese}
                aria-pressed={locale === 'pt-BR'}
                onClick={() => setLocale('pt-BR')}
              >
                PT
              </button>
            </div>
            <button
              className="theme-toggle"
              type="button"
              aria-label={theme === 'light' ? t.darkMode : t.lightMode}
              aria-pressed={theme === 'dark'}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <span aria-hidden="true">{theme === 'light' ? '◐' : '☼'}</span>
              <span>{theme === 'light' ? t.dark : t.light}</span>
            </button>
          </div>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" /> {t.heroRole}{' '}
                <span className="eyebrow-plus">+</span> {t.heroAi}
              </p>
              <h1 id="hero-title">
                {t.heroTitleStart}
                <br />
                {t.heroTitleMiddle} <em>{t.heroTitleEmphasis}</em>
                <br />
                {t.heroTitleEnd}
                <span className="period">.</span>
              </h1>
              <p className="hero-lead">{t.heroLead}</p>
              <p className="hero-cto">{t.heroCto}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  {t.heroAction} <ArrowIcon />
                </a>
                <a
                  className="text-link"
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.githubProfile} <ArrowIcon diagonal />
                </a>
              </div>
              <div className="hero-signals" aria-label={t.focusAreas}>
                <span>JavaScript / TypeScript</span>
                <span>Python</span>
                <span>LangGraph</span>
                <span>n8n</span>
              </div>
            </div>
            <div className="hero-art">
              <div className="art-coordinate art-coordinate-top" aria-hidden="true">
                {t.artTop}
              </div>
              <div className="art-orbit art-orbit-outer" aria-hidden="true" />
              <div className="art-orbit art-orbit-middle" aria-hidden="true" />
              <div className="art-orbit art-orbit-inner" aria-hidden="true" />
              <div className="art-cross art-cross-a" aria-hidden="true">
                +
              </div>
              <div className="art-cross art-cross-b" aria-hidden="true">
                +
              </div>
              <div className="portrait-frame">
                <img src="/media/portrait-head.png" alt={t.portraitAlt} fetchPriority="high" />
              </div>
              <div className="art-note art-note-left" aria-hidden="true">
                {t.artLeft} <i /> {t.artRight}
              </div>
              <div className="art-note art-note-right" aria-hidden="true">
                {t.artNote}
              </div>
            </div>
          </div>
        </section>

        <section className="work-section section-space" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">{t.workKicker}</p>
                <h2 id="work-title">
                  {t.workTitleStart} <em>{t.workTitleEnd}</em>
                </h2>
              </div>
              <p>{t.workIntro}</p>
            </div>
            <div className="project-list">
              <ProjectCard project={projects[0]} index={0} locale={locale} featured />
              <div className="project-grid">
                <ProjectCard project={projects[1]} index={1} locale={locale} />
                <ProjectCard project={projects[2]} index={2} locale={locale} />
              </div>
            </div>
            <div className="work-footer">
              <p>{t.workFooter}</p>
              <a
                className="underlined-link"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.allRepositories} <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>

        <section
          className="company-section section-space"
          id="company"
          aria-labelledby="company-title"
        >
          <div className="container company-layout">
            <div className="company-intro">
              <div className="company-heading">
                <p className="section-kicker">{t.companyKicker}</p>
                <h2 id="company-title">
                  {t.companyTitleStart}
                  <br />
                  <em>{t.companyTitleEnd}</em>
                </h2>
              </div>
              <div className="company-copy">
                <p>{t.companyIntro}</p>
                <p className="company-privacy">{t.companyPrivacy}</p>
                <a
                  className="company-site-link"
                  href={links.company}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.companySiteLink} <ArrowIcon diagonal />
                </a>
              </div>
            </div>
            <div className="company-feature" aria-label={t.companyCarousel}>
              <div className={`company-feature-image company-feature-image-${slideIndex + 1}`}>
                <span className="company-image-index" aria-hidden="true">
                  V2 / {String(slideIndex + 1).padStart(2, '0')}
                </span>
                <div className="mac-window">
                  <div className="mac-toolbar" aria-hidden="true">
                    <span className="mac-dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span>OpportunusAI</span>
                    <span className="mac-version">V2</span>
                  </div>
                  <img
                    src={companyImages[slideIndex]}
                    alt={t.companySlideAlt[slideIndex]}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="company-feature-copy" aria-live="polite">
                <span>{t.companySlideLabel}</span>
                <h3>{t.companySlideTitles[slideIndex]}</h3>
                <p>{t.companySlideBodies[slideIndex]}</p>
                <a href={companyImages[slideIndex]} target="_blank" rel="noopener noreferrer">
                  {t.companyViewImage} <ArrowIcon diagonal />
                </a>
              </div>
              <div className="carousel-controls">
                <button
                  type="button"
                  aria-label={t.previousSlide}
                  onClick={() =>
                    setSlideIndex((slideIndex + companyImages.length - 1) % companyImages.length)
                  }
                >
                  ←
                </button>
                <span>{t.slideOf(slideIndex + 1, companyImages.length)}</span>
                <button
                  type="button"
                  aria-label={t.nextSlide}
                  onClick={() => setSlideIndex((slideIndex + 1) % companyImages.length)}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="approach-section section-space"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="container">
            <div className="section-heading approach-heading">
              <div>
                <p className="section-kicker">{t.approachKicker}</p>
                <h2 id="approach-title">
                  {t.approachTitleStart}
                  <br />
                  <em>{t.approachTitleEnd}</em>
                </h2>
              </div>
              <p>{t.approachIntro}</p>
            </div>
            <div className="principles">
              <div className="principle">
                <span className="principle-index">01</span>
                <div className="principle-icon" aria-hidden="true">
                  ↗
                </div>
                <h3>{t.principleOneTitle}</h3>
                <p>{t.principleOneBody}</p>
              </div>
              <div className="principle">
                <span className="principle-index">02</span>
                <div className="principle-icon" aria-hidden="true">
                  ◇
                </div>
                <h3>{t.principleTwoTitle}</h3>
                <p>{t.principleTwoBody}</p>
              </div>
              <div className="principle">
                <span className="principle-index">03</span>
                <div className="principle-icon" aria-hidden="true">
                  ⌘
                </div>
                <h3>{t.principleThreeTitle}</h3>
                <p>{t.principleThreeBody}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-space" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div>
              <p className="section-kicker">{t.aboutKicker}</p>
              <h2 id="about-title">
                {t.aboutTitleStart}
                <br />
                <em>{t.aboutTitleEnd}</em>
              </h2>
            </div>
            <div className="about-copy">
              <p>{t.aboutOne}</p>
              <p>{t.aboutTwo}</p>
              <div className="about-tags" aria-label={t.practiceAreas}>
                <span>{t.practiceWeb}</span>
                <span>{t.practiceAi}</span>
                <span>{t.practiceAutomation}</span>
                <span>{t.practiceArchitecture}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="portuguese-section" aria-label={t.summaryAria}>
          <div className="container portuguese-inner">
            <span>{t.summaryLabel}</span>
            <p>{t.summary}</p>
          </div>
        </section>

        <section
          className="contact-section section-space"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container contact-inner">
            <p className="section-kicker">{t.contactKicker}</p>
            <h2 id="contact-title">
              {t.contactTitleStart}
              <br />
              <em>{t.contactTitleEnd}</em>
            </h2>
            <p>{t.contactIntro}</p>
            <div className="contact-actions">
              <a
                className="button button-light"
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.linkedinAction} <ArrowIcon diagonal />
              </a>
              <a
                className="contact-github"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.githubAction} <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#top" aria-label={t.footerBackToTop}>
            RL<span>.</span>
          </a>
          <span>Rodrigo Lima · {t.footerRole}</span>
          <div>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
