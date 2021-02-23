import { useState } from 'react'
import './App.css'
import Button from './Button'
import GameForm from './GameForm'
import Header from './Header'
import Navigation from './Navigation'
import Player from './Player'
import PlayerForm from './PlayerForm'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <PlayerForm onAddPlayer={handleAddPlayer} />
      {players.map((player, index) => (
        <Player
          name={player.name}
          score={player.score}
          onPlus={() => handlePlus(index)}
          onMinus={() => handleMinus(index)}
        />
      ))}
      <Button text="Reset scores" onClick={resetScore}></Button>
      <Button text="Reset all" onClick={resetAll}></Button>
      <GameForm onCreateGame={() => console.log('onCreateGame')} />
      <Navigation
        activeIndex={0}
        onNavigate={index => console.log('onNavigate', index)}
      />
      <Header text="Carcassonne" />
    </div>
  )

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
}

export default App
