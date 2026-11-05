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
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('SOFTWARE')
    expect(screen.getByText('Storefront for a crochet shop')).toBeTruthy()
    expect(screen.getByText('Sales and customer support dashboard')).toBeTruthy()
    expect(screen.getByText('React')).toBeTruthy()
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
    expect(screen.getByRole('link', { name: /JAVA API/i }).getAttribute('href')).toContain(
      'orpheuswim-api',
    )
    expect(screen.getByRole('link', { name: /ACCESS TESTS/i }).getAttribute('href')).toContain(
      'http-smoke.mjs',
    )
  })
})
