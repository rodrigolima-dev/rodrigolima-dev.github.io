import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { projects } from './projects'

describe('portfolio content and navigation', () => {
  it('shows only reviewed public project links with source labels', () => {
    render(<App />)

    expect(projects.map((project) => project.href)).toEqual([
      'https://github.com/rodrigolima-dev/opportunus-dashboard',
      'https://github.com/rodrigolima-dev/guarded-langgraph-demo',
      'https://github.com/rodrigolima-dev/n8n-patterns',
    ])
    const projectLinks = screen.getAllByRole('link', { name: /source code on GitHub/i })
    expect(projectLinks).toHaveLength(3)
    expect(projectLinks.map((link) => link.getAttribute('href'))).toEqual(
      projects.map((project) => project.href),
    )
    for (const link of projectLinks) {
      expect(link.getAttribute('rel')).toContain('noopener')
      expect(link.getAttribute('target')).toBe('_blank')
    }
    expect(screen.getByText(/no LLM call/i)).toBeTruthy()
    expect(screen.getByText(/no Agent node or credentials/i)).toBeTruthy()
  })

  it('opens and closes the narrow navigation accessibly', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    await user.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    await user.click(screen.getByRole('link', { name: 'Approach' }))
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })

  it('provides a skip link and a Portuguese summary', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Skip to content' }).getAttribute('href')).toBe('#main')
    expect(screen.getByLabelText('Resumo em português').getAttribute('lang')).toBe('pt-BR')
  })
})
