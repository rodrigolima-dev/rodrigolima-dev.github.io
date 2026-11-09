import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

beforeEach(() => {
  document.documentElement.lang = 'pt-BR'
  localStorage.clear()
})
describe('portfolio redesign', () => {
  it('renders the reference grid with Rodrigo content', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('FULL STACK DEVELOPER')
    expect(screen.getByText('OpportunusAI · WhatsApp support and sales')).toBeTruthy()
    expect(screen.getByText('Crochet storefront')).toBeTruthy()
    expect(screen.getByText('Agents / MCP')).toBeTruthy()
    expect(screen.getByText('paid orders with AI participation')).toBeTruthy()
    expect(screen.getByText('Cloudflare Zero Trust')).toBeTruthy()
    expect(screen.getByText('Kong API Gateway')).toBeTruthy()
    expect(screen.getByAltText('Dashboard público V1 da OpportunusAI')).toBeTruthy()
    expect(screen.getByAltText('Dashboard overview')).toBeTruthy()
  })
  it('switches language and keeps the PDF CTA', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Mudar para português' }))
    expect(document.documentElement.lang).toBe('pt-BR')
    expect(screen.getByRole('link', { name: /Baixar currículo PDF/i }).getAttribute('href')).toBe(
      '/cv/rodrigo-lima-full-stack.pdf',
    )
  })
  it('exposes anchors and project destinations', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Projects' }).getAttribute('href')).toBe('#projects')
    expect(
      screen
        .getAllByRole('link', { name: /VISIT OPPORTUNUSAI.COM/i })
        .every((link) => link.getAttribute('href') === 'https://opportunusai.com/'),
    ).toBe(true)
    expect(screen.getByRole('link', { name: /VIEW SCREENS/i }).getAttribute('href')).toBe(
      '#opportunusai-screens',
    )
    expect(screen.getByRole('link', { name: /JAVA API/i }).getAttribute('href')).toContain(
      'orpheuswim-api',
    )
    expect(screen.getByRole('link', { name: /ACCESS TESTS/i }).getAttribute('href')).toContain(
      'http-smoke.mjs',
    )
    expect(screen.getByRole('button', { name: /Dashboard overview/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /Conversation with AI assistance/i })).toBeTruthy()
  })

  it('defaults to light theme and toggles to dark', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(document.documentElement.dataset.theme).toBe('light')
    await user.click(screen.getByRole('button', { name: 'Ativar tema escuro' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('portfolio-theme')).toBe('dark')
  })

  it('opens the screen gallery modal and navigates between prints', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Dashboard overview/i }))
    expect(screen.getByRole('dialog')).toBeTruthy()
    expect(screen.getByRole('dialog').textContent).toContain('2 / 3')
    await user.click(screen.getByRole('button', { name: 'Próxima tela' }))
    expect(screen.getByRole('dialog').textContent).toContain('3 / 3')
    await user.click(screen.getByRole('button', { name: 'Fechar tela' }))
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})
