import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('return a div with a title', () => {
    render(<Header text="Title" />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
