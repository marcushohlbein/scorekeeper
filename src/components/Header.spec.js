import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('returns a header with a title', () => {
    render(<Header text="Title" />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('banner').textContent).toBe('Title')
  })
})
