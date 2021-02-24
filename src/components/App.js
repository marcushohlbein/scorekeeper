import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
<<<<<<< HEAD
import GameForm from './GameForm'
import Header from './Header'
import HistoryEntry from './HistoryEntry'
import Navigation from './Navigation'
import Player from './Player'
=======
import Player from './PlayerItem'
>>>>>>> main
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
      <GameForm onCreateGame={data => console.log('onCreateGame', data)} />
      <Navigation
        activeIndex={0}
        onNavigate={index => console.log('onNavigate', index)}
      />
      <Header text="Carcassonne" />
      <HistoryEntry
        nameOfGame="Carcassonne"
        players={[
          { name: 'John Doe', score: 10 },
          { name: 'Jane Doe', score: 20 },
        ]}
      />
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
<<<<<<< HEAD
=======

  return (
    <Appgrid>
      <PlayerForm onAddPlayer={handleAddPlayer} />
      {players.map((player, index) => (
        <Player
          name={player.name}
          score={player.score}
          onPlus={() => handlePlus(index)}
          onMinus={() => handleMinus(index)}
        />
      ))}

      <Button onClick={resetScore}>Reset scores</Button>
      <ResetButton onClick={resetAll}>Reset all</ResetButton>
    </Appgrid>
  )
>>>>>>> main
}

const Appgrid = styled.main`
  display: grid;
  gap: 20px;
  padding: 20px;
`

const ResetButton = styled(Button)`
  background-color: salmon;
  color: white;
`

export default App
