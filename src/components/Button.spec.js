import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('should show a different color when the button is active', () => {
    const { rerender, container } = render(<Button>Play</Button>)
    const defaultColor = getComputedStyle(container.firstChild).backgroundColor
    rerender(<Button isActive>History</Button>)
    const otherColor = getComputedStyle(container.firstChild).backgroundColor
    expect(defaultColor).not.toBe(otherColor)
  })
})
