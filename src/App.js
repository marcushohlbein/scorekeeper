import React, { useState } from 'react'
import './App.css'
import PlayerForm from './components/PlayerForm'
import Player from './components/Player'
import Button from './components/Button'

export default function App() {
  const [players, setPlayers] = useState([])

  function handleAddPlayer(name) {
    setPlayers(oldPlayers => [...oldPlayers, { name, score: 0 }])
  }

  function resetAll() {
    setPlayers([])
  }

  function resetScore() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handlePlus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function handleMinus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  return (
    <main className="App">
      <PlayerForm label="Add Player:" onAddPlayer={name => console.log(name)} />
      <Player
        name="Jone Doe"
        score="20"
        onMinus={() => console.log('Minus')}
        onPlus={() => console.log('Plus')}
      />
      <Player
        name="Jane Doe"
        score="30"
        onMinus={() => console.log('Minus')}
        onPlus={() => console.log('Plus')}
      />
      <Button text="Reset Score" onClick={() => console.log('Reset Score')} />
      <Button text="Reset all" onClick={() => console.log('Reset All')} />
    </main>
  )
}
