import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import Player from './PlayerItem'
import PlayerForm from './PlayerForm'

function App() {
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
