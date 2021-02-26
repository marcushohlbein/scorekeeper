import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GameForm from './GameForm'

describe('GameForm', () => {
  it('renders a form with two inputs and a button', () => {
    render(<GameForm />)
    expect(screen.getByLabelText('Name of game')).toBeInTheDocument()
    expect(screen.getByLabelText('Player names')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Create Game' })
    ).toBeInTheDocument()
  })
  it('sends onSubmit with a data object', () => {
    const callback = jest.fn()
    render(<GameForm onCreateGame={callback} />)
    userEvent.type(screen.getByLabelText('Name of game'), 'Carcassonne')
    userEvent.type(screen.getByLabelText('Player names'), 'Jane, John')
    userEvent.click(screen.getByRole('button'))

    expect(callback).toHaveBeenCalledWith({
      nameOfGame: 'Carcassonne',
      playerNames: ['Jane', 'John'],
    })
  })
})