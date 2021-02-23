import React from 'react'
import Button from './Button'
import Input from './Input'
import './GameForm.css'

export default function GameForm({ onCreateGame }) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <Input labelText="Name of game" placeholder="e.g. Carcassonne" />
      <Input labelText="Player names" placeholder="e.g. John Doe, Jane Doe" />
      <Button text="Create game" />
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    // get data from input

    form.reset()
  }
}
