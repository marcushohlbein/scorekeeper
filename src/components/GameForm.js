import React from 'react'
import './GameForm.css'

function GameForm({ onCreateGame }) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <label>
        Name of game:
        <input name="nameOfGame" placeholder="e.g. Carcassonne " />
      </label>
      <label>
        Player names:
        <input name="playerNames" placeholder="e.g. Jone Doe, Jane Doe" />
      </label>
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
