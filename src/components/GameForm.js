import React from 'react'
import Input from './Input'
import './GameForm.css'

function GameForm({ onCreateGame }) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <Input labelText="Name of game:" placeholderText="e.g. Carcassonne" />
      <Input
        labelText="Player names:"
        placeholderText="e.g. Jone Doe, Jane Doe"
      />
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const gameInput = form.elements.nameOfGame
    const playerInput = form.elements.playerName
    const nameOfGame = gameInput.value
    const playerName = playerInput.value
    onCreateGame(nameOfGame, playerName)
    form.reset()
    gameInput.focus()
  }
}
