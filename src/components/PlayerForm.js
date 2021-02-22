import React from 'react'
import './PlayerForm.css'

function PlayerForm(label, onAddPlayer) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onAddPlayer(e.target.value)
      }}
    >
      <label>
        {label}
        <input type="text" name="playerName" />
      </label>
    </form>
  )
}

export default PlayerForm
