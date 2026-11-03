import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { projects } from './projects'

beforeEach(() => {
  document.documentElement.lang = 'en'
  document.documentElement.dataset.theme = 'light'
  localStorage.clear()
})

describe('portfolio presentation', () => {
  it('renders the approach icons as platform-independent vector graphics', () => {
    render(<App />)

    const icons = document.querySelectorAll('#approach .principle-icon')
    expect(icons).toHaveLength(3)
    for (const icon of icons) {
      expect(icon.querySelector('svg')).not.toBeNull()
      expect(icon.textContent?.trim()).toBe('')
    }
  })

  it('links reviewed projects and shows the evidence behind them', () => {
    render(<App />)
    expect(projects.map((project) => project.href)).toEqual([
      'https://github.com/rodrigolima-dev/orpheuswim-frontend',
      'https://github.com/rodrigolima-dev/opportunus-dashboard',
      undefined,
      'https://github.com/rodrigolima-dev/vector-chunk-kit',
    ])
    const links = screen.getAllByRole('link', { name: /source code on GitHub/i })
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link.getAttribute('rel')).toContain('noopener')
      expect(link.getAttribute('target')).toBe('_blank')
    }
    expect(screen.getByText(/multi-tenant dashboard for reports/i)).toBeTruthy()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('From code')
    expect(screen.getByRole('heading', { name: /Code that moves/i })).toBeTruthy()
    const emailContact = screen.getByRole('link', {
      name: /Email: rodrigolima\.developer@gmail\.com/i,
    })
    expect(emailContact.getAttribute('href')).toBe('mailto:rodrigolima.developer@gmail.com')
    expect(screen.getByText(/JSONL \/ PREVIEW \/ APPLY \/ PGVECTOR/i)).toBeTruthy()
    expect(screen.queryByText(/SCROLL TO EXPLORE/i)).toBeNull()
    const heroFocus = screen.getByText('JavaScript / TypeScript').parentElement
    expect(heroFocus?.textContent).toContain('Python')
    expect(heroFocus?.textContent).toContain('LangChain')
    expect(heroFocus?.textContent).toContain('LangGraph')
    expect(screen.getByText('HIT')).toBeTruthy()
    expect(screen.getByText(/app for people who live sport/i)).toBeTruthy()
    expect(screen.getByRole('img', { name: /Real HIT app screens/i })).toBeTruthy()
    expect(screen.getByText(/In development · planned launch: December 2026/i)).toBeTruthy()
    expect(screen.queryByText(/private project|public V1|PRIVATE V2|V2 \/\s*0/i)).toBeNull()
  })

  it('switches all primary copy and visual assets to Brazilian Portuguese', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Português do Brasil' }))
    expect(document.documentElement.lang).toBe('pt-BR')
    expect(localStorage.getItem('portfolio-locale')).toBe('pt-BR')
    expect(document.title).toContain('Full Stack Developer')
    expect(screen.getByRole('link', { name: 'Ir para o conteúdo' })).toBeTruthy()
    const emailContact = screen.getByRole('link', {
      name: /E-mail: rodrigolima\.developer@gmail\.com/i,
    })
    expect(emailContact.getAttribute('href')).toBe('mailto:rodrigolima.developer@gmail.com')
    expect(screen.getByRole('link', { name: 'Como trabalho' })).toBeTruthy()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Do código')
    expect(screen.getByRole('heading', { name: /Projetos com/i })).toBeTruthy()
    expect(screen.getByRole('heading', { name: /Código que move/i })).toBeTruthy()
    expect(screen.queryByRole('region', { name: 'Como trabalho' })).toBeNull()
    expect(screen.getByRole('button', { name: 'Ativar modo escuro' })).toBeTruthy()
    expect(screen.getByRole('img', { name: /Retrato de Rodrigo Lima/i })).toBeTruthy()
    expect(
      screen
        .getAllByRole('img', { name: /Captura do dashboard da OpportunusAI/i })[0]
        .getAttribute('src'),
    ).toBe('/media/dashboard-showcase-pt.webp')
  })

  it('toggles the theme with a persistent, accessible state', async () => {
    const user = userEvent.setup()
    render(<App />)

    const dark = screen.getByRole('button', { name: 'Switch to dark mode' })
    expect(dark.getAttribute('aria-pressed')).toBe('false')
    await user.click(dark)
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('portfolio-theme')).toBe('dark')
    expect(
      screen.getByRole('button', { name: 'Switch to light mode' }).getAttribute('aria-pressed'),
    ).toBe('true')
  })

  it('opens and closes navigation, and advances the product carousel', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menu = screen.getByRole('button', { name: 'Open navigation' })
    expect(menu.getAttribute('aria-expanded')).toBe('false')
    await user.click(menu)
    expect(menu.getAttribute('aria-expanded')).toBe('true')
    await user.click(screen.getByRole('link', { name: 'How I work' }))
    expect(menu.getAttribute('aria-expanded')).toBe('false')

    expect(screen.getByText('1 of 3')).toBeTruthy()
    expect(
      screen.getByRole('img', { name: /OpportunusAI operations interface with navigation/i }),
    ).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Open image' }).getAttribute('href')).toBe(
      '/media/v2-overview-rich-sanitized.jpg',
    )
    await user.click(screen.getByRole('button', { name: 'Next example' }))
    expect(screen.getByText('2 of 3')).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'AI assistance with human control' })).toBeTruthy()
    await user.click(screen.getByRole('button', { name: 'Next example' }))
    expect(screen.getByText('3 of 3')).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Knowledge reviewed by the team' })).toBeTruthy()
    await user.click(screen.getByRole('button', { name: 'Previous example' }))
    expect(screen.getByText('2 of 3')).toBeTruthy()
  })
})
