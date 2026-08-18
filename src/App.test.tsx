import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the get started heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /get started/i }),
    ).toBeInTheDocument()
  })

  it('starts the counter at 0', () => {
    render(<App />)

    expect(
      screen.getByRole('button', { name: /count is 0/i }),
    ).toBeInTheDocument()
  })

  it('increments the counter when clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /count is 0/i }))

    expect(
      screen.getByRole('button', { name: /count is 1/i }),
    ).toBeInTheDocument()
  })

  it('increments the counter multiple times', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', { name: /count is/i })
    await user.click(button)
    await user.click(button)
    await user.click(button)

    expect(
      screen.getByRole('button', { name: /count is 3/i }),
    ).toBeInTheDocument()
  })

  it('renders documentation links', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /explore vite/i })).toHaveAttribute(
      'href',
      'https://vite.dev/',
    )
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute(
      'href',
      'https://react.dev/',
    )
  })

  it('renders community links', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/vitejs/vite',
    )
    expect(screen.getByRole('link', { name: /discord/i })).toHaveAttribute(
      'href',
      'https://chat.vite.dev/',
    )
    expect(screen.getByRole('link', { name: /x\.com/i })).toHaveAttribute(
      'href',
      'https://x.com/vite_js',
    )
    expect(screen.getByRole('link', { name: /bluesky/i })).toHaveAttribute(
      'href',
      'https://bsky.app/profile/vite.dev',
    )
  })
})
