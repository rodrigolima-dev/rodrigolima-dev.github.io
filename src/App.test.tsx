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
  it('links only reviewed public projects and labels their limits', () => {
    render(<App />)
    expect(projects.map((project) => project.href)).toEqual([
      'https://github.com/rodrigolima-dev/opportunus-dashboard',
      'https://github.com/rodrigolima-dev/guarded-langgraph-demo',
      'https://github.com/rodrigolima-dev/n8n-patterns',
    ])
    const links = screen.getAllByRole('link', { name: /source code on GitHub/i })
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link.getAttribute('rel')).toContain('noopener')
      expect(link.getAttribute('target')).toBe('_blank')
    }
    expect(screen.getByText(/public, runnable V1 dashboard/i)).toBeTruthy()
    expect(screen.getAllByText(/no LLM call/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/no Agent node or credentials/i)).toBeTruthy()
    expect(screen.queryByText(/SCROLL TO EXPLORE/i)).toBeNull()
  })

  it('switches all primary copy and visual assets to Brazilian Portuguese', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Português do Brasil' }))
    expect(document.documentElement.lang).toBe('pt-BR')
    expect(localStorage.getItem('portfolio-locale')).toBe('pt-BR')
    expect(document.title).toContain('Engenheiro de Software')
    expect(screen.getByRole('link', { name: 'Ir para o conteúdo' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Abordagem' })).toBeTruthy()
    expect(screen.getByRole('heading', { name: /Projetos que mostram meu trabalho/i })).toBeTruthy()
    expect(screen.getByRole('region', { name: 'Resumo profissional' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Ativar modo escuro' })).toBeTruthy()
    expect(screen.getByRole('img', { name: /Retrato de Rodrigo Lima/i })).toBeTruthy()
    expect(
      screen.getByRole('img', { name: /Fluxo LangGraph: acesso, busca e resposta/i }),
    ).toBeTruthy()
    expect(
      screen
        .getAllByRole('img', { name: /Captura do dashboard público V1/i })[0]
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

  it('opens and closes navigation, and advances the sanitized private V2 carousel', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menu = screen.getByRole('button', { name: 'Open navigation' })
    expect(menu.getAttribute('aria-expanded')).toBe('false')
    await user.click(menu)
    expect(menu.getAttribute('aria-expanded')).toBe('true')
    await user.click(screen.getByRole('link', { name: 'Approach' }))
    expect(menu.getAttribute('aria-expanded')).toBe('false')

    expect(screen.getByText('1 of 3')).toBeTruthy()
    expect(screen.getByRole('img', { name: /V2 overview interface with navigation/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'View full image' }).getAttribute('href')).toBe(
      '/media/v2-overview-rich-sanitized.jpg',
    )
    await user.click(screen.getByRole('button', { name: 'Next example' }))
    expect(screen.getByText('2 of 3')).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Conversations with AI' })).toBeTruthy()
    await user.click(screen.getByRole('button', { name: 'Next example' }))
    expect(screen.getByText('3 of 3')).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Knowledge under review' })).toBeTruthy()
    await user.click(screen.getByRole('button', { name: 'Previous example' }))
    expect(screen.getByText('2 of 3')).toBeTruthy()
  })
})
