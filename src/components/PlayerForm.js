import React from 'react'
import './PlayerForm.css'

function PlayerForm({ label, onAddPlayer }) {
  return (
    <form
      className="PlayerForm"
      onSubmit={e => {
        e.preventDefault()
        onAddPlayer(e.target.value)
      }}
    >
      <label for="playerName">{label}</label>
      <input type="text" id="playerName" name="playerName" />
    </form>
  )
}

export default PlayerForm
