import { useState } from 'react'
import { projects, type Project } from './projects'

const links = {
  github: 'https://github.com/rodrigolima-dev',
  linkedin: 'https://www.linkedin.com/in/rodrigo-lima-95a548242/',
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

function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  if (kind === 'dashboard') {
    return (
      <div
        className="project-visual dashboard-visual"
        aria-label="Illustration of a fictional dashboard interface"
        role="img"
      >
        <div className="window-top">
          <span />
          <span />
          <span />
          <i>synthetic interface</i>
        </div>
        <div className="dashboard-shell">
          <div className="dashboard-rail">
            <b>O.</b>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="dashboard-content">
            <div className="dashboard-heading">
              <span>Overview</span>
              <small>Sample workspace</small>
            </div>
            <div className="dashboard-metrics">
              <i />
              <i />
              <i />
            </div>
            <div className="dashboard-panels">
              <div className="mini-chart">
                <span style={{ height: '35%' }} />
                <span style={{ height: '66%' }} />
                <span style={{ height: '52%' }} />
                <span style={{ height: '84%' }} />
                <span style={{ height: '59%' }} />
                <span style={{ height: '74%' }} />
              </div>
              <div className="mini-list">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
        <div className="visual-caption">UI sketch · fictional information</div>
      </div>
    )
  }

  if (kind === 'graph') {
    return (
      <div
        className="project-visual graph-visual"
        aria-label="Diagram of validation, authorization, scoped retrieval, evaluation, and offline response. Denied requests stop; an empty result may retry once inside the same tenant."
        role="img"
      >
        <div className="graph-step">
          <span className="node-index">01</span>
          <strong>Validate</strong>
          <small>input</small>
        </div>
        <div className="graph-line" />
        <div className="graph-step accent-node">
          <span className="node-index">02</span>
          <strong>Authorize</strong>
          <small>membership</small>
        </div>
        <div className="graph-line" />
        <div className="graph-step">
          <span className="node-index">03</span>
          <strong>Retrieve</strong>
          <small>scoped</small>
        </div>
        <div className="graph-line" />
        <div className="graph-step">
          <span className="node-index">04</span>
          <strong>Evaluate</strong>
          <small>evidence</small>
        </div>
        <div className="graph-line" />
        <div className="graph-step">
          <span className="node-index">05</span>
          <strong>Respond</strong>
          <small>offline</small>
        </div>
        <div className="graph-notes">
          <span className="graph-rejected">denied → stop</span>
          <span className="graph-retry">no match ↶ one scoped retry</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="project-visual workflow-visual"
      aria-label="Diagram of an automation decision that routes to allowed or review"
      role="img"
    >
      <div className="workflow-entry">
        <span className="workflow-kicker">MANUAL INPUT</span>
        <strong>Event envelope</strong>
      </div>
      <div className="workflow-stem" />
      <div className="workflow-rule">VALIDATE</div>
      <div className="workflow-branches">
        <div>
          <span className="branch-dot positive" /> Accepted
        </div>
        <div>
          <span className="branch-dot caution" /> Review
        </div>
      </div>
      <div className="workflow-label">Explicit paths. Bounded effects.</div>
    </div>
  )
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? 'featured-card' : ''}`}>
      <div className="project-copy">
        <div className="project-card-top">
          <span className="project-number">{project.number} / SELECTED WORK</span>
          <span className="project-category">{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-detail">
          <span>ENGINEERING DECISION</span>
          <p>{project.decision}</p>
        </div>
        <div className="project-proof">
          <span className="proof-dot" />
          <span>{project.evidence}</span>
        </div>
        <div className="project-bottom">
          <ul aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <a
            className="project-link"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
          >
            Explore repository <ArrowIcon diagonal />
          </a>
        </div>
      </div>
      <ProjectVisual kind={project.visual} />
    </article>
  )
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#top"
            aria-label="Rodrigo Lima, back to top"
            onClick={closeMenu}
          >
            <span className="brand-mark">
              RL<span>.</span>
            </span>
            <span className="brand-name">Rodrigo Lima</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav
            id="main-navigation"
            className={menuOpen ? 'nav-open' : ''}
            aria-label="Primary navigation"
          >
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
            <a href="#approach" onClick={closeMenu}>
              Approach
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let’s connect <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" /> FULL STACK SOFTWARE ENGINEER{' '}
                <span className="eyebrow-plus">+</span> APPLIED AI
              </p>
              <h1 id="hero-title">
                From complex
                <br />
                systems to <em>clear</em>
                <br />
                experiences<span className="period">.</span>
              </h1>
              <p className="hero-lead">
                I’m Rodrigo Lima. I build web products and AI-enabled workflows with explicit
                boundaries, thoughtful interfaces, and code that can be tested.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my work <ArrowIcon />
                </a>
                <a
                  className="text-link"
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub profile <ArrowIcon diagonal />
                </a>
              </div>
              <div className="hero-signals" aria-label="Core focus areas">
                <span>JavaScript / TypeScript</span>
                <span>Python</span>
                <span>LangGraph</span>
                <span>n8n</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-coordinate art-coordinate-top">ENGINEERING / 001</div>
              <div className="art-orbit art-orbit-outer" />
              <div className="art-orbit art-orbit-middle" />
              <div className="art-orbit art-orbit-inner" />
              <div className="art-cross art-cross-a">+</div>
              <div className="art-cross art-cross-b">+</div>
              <div className="art-core">
                <span className="art-core-small">BUILD FOR</span>
                <strong>clarity</strong>
                <span className="art-core-line" />
                <small>
                  01 / DESIGN
                  <br />
                  02 / SYSTEMS
                  <br />
                  03 / DELIVERY
                </small>
              </div>
              <div className="art-note art-note-left">
                interface <i /> logic
              </div>
              <div className="art-note art-note-right">idea → system</div>
              <div className="art-coordinate art-coordinate-bottom">
                RODRIGO LIMA — SELECTED WORK
              </div>
            </div>
          </div>
          <div className="container hero-footer">
            <span>SCROLL TO EXPLORE</span>
            <span className="hero-footer-line" />
            <span>01 — 03</span>
          </div>
        </section>

        <section className="work-section section-space" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">01 / SELECTED WORK</p>
                <h2 id="work-title">
                  Proof in the <em>work.</em>
                </h2>
              </div>
              <p>
                Three public repositories. Each one shows a specific engineering decision and the
                code behind it.
              </p>
            </div>
            <div className="project-list">
              <ProjectCard project={projects[0]} featured />
              <div className="project-grid">
                <ProjectCard project={projects[1]} />
                <ProjectCard project={projects[2]} />
              </div>
            </div>
            <div className="work-footer">
              <p>
                Want to inspect the implementation? The repositories include setup instructions,
                tests, and stated limits.
              </p>
              <a
                className="underlined-link"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                See all repositories <ArrowIcon diagonal />
              </a>
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
                <p className="section-kicker">02 / ENGINEERING APPROACH</p>
                <h2 id="approach-title">
                  The details make
                  <br />
                  <em>the difference.</em>
                </h2>
              </div>
              <p>
                I care about what happens after the happy path: a rejected request, a failed
                workflow, or a system that needs to be understood by someone else.
              </p>
            </div>
            <div className="principles">
              <div className="principle">
                <span className="principle-index">01</span>
                <div className="principle-icon">↗</div>
                <h3>Define the boundary</h3>
                <p>
                  Make identity, scope, and permissions visible in code. Check access at the server
                  and data boundary, not only in the interface.
                </p>
              </div>
              <div className="principle">
                <span className="principle-index">02</span>
                <div className="principle-icon">◇</div>
                <h3>Design for failure</h3>
                <p>
                  Give invalid input, denied access, and unavailable context explicit paths. Small,
                  bounded decisions are easier to test and maintain.
                </p>
              </div>
              <div className="principle">
                <span className="principle-index">03</span>
                <div className="principle-icon">⌘</div>
                <h3>Make it reproducible</h3>
                <p>
                  Document the setup and limits, use synthetic examples, and keep verification steps
                  close to the implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-space" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div>
              <p className="section-kicker">03 / ABOUT</p>
              <h2 id="about-title">
                Engineering across
                <br />
                the <em>whole system.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I work where product experience meets system design: frontends people can use,
                backends with clear responsibilities, and automation that behaves predictably.
              </p>
              <p>
                My current focus is JavaScript, Python, LangChain, LangGraph, and n8n. I also work
                with Docker Swarm operations and Zero Trust access controls. The public examples
                above show specific implementation choices and clearly state their limits.
              </p>
              <div className="about-tags" aria-label="Areas of practice">
                <span>Web applications</span>
                <span>Applied AI</span>
                <span>Automation</span>
                <span>System architecture</span>
              </div>
            </div>
          </div>
        </section>

        <section className="portuguese-section" lang="pt-BR" aria-label="Resumo em português">
          <div className="container portuguese-inner">
            <span>EM PORTUGUÊS</span>
            <p>
              Sou engenheiro de software full stack, com foco em JavaScript, Python, arquitetura de
              sistemas e IA aplicada. Gosto de transformar problemas complexos em produtos claros,
              seguros e verificáveis.
            </p>
          </div>
        </section>

        <section
          className="contact-section section-space"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container contact-inner">
            <p className="section-kicker">04 / CONTACT</p>
            <h2 id="contact-title">
              Let’s build something
              <br />
              <em>worth using.</em>
            </h2>
            <p>Interested in how I think and build? Explore the code or reach out on LinkedIn.</p>
            <div className="contact-actions">
              <a
                className="button button-light"
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <ArrowIcon diagonal />
              </a>
              <a
                className="contact-github"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#top" aria-label="Back to top">
            RL<span>.</span>
          </a>
          <span>Rodrigo Lima · Full Stack Software Engineer</span>
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
