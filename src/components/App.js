import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import Player from './PlayerItem'
import GameForm from './GameForm'
import Navigation from './Navigation'
import Header from './Header'
import HistoryEntry from './HistoryEntry'

function App() {
  const [players, setPlayers] = useState([])
  const [currentPage, setCurrentPage] = useState('play')

  return (
    <Appgrid>
      {currentPage === 'play' && (
        <div>
          <GameForm onCreateGame={data => console.log('onCreateGame', data)} />
        </div>
      )}
      {currentPage === 'game' && (
        <div>
          <Header>Carcassonne</Header>
          {players.map(({ name, score }, index) => (
            <Player
              key={name}
              name={name}
              score={score}
              onPlus={() => handlePlus(index)}
              onMinus={() => handleMinus(index)}
            />
          ))}
          <Button onClick={resetScores}>Reset scores</Button>
          <Button onClick={() => console.log('end game')}>End game</Button>
        </div>
      )}
      {currentPage === 'history' && (
        <HistoryEntry
          nameOfGame="Carcassonne"
          players={[
            { name: 'John Doe', score: 10 },
            { name: 'Jane Doe', score: 20 },
          ]}
        />
      )}
      {(currentPage === 'play' || currentPage === 'history') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </Appgrid>
  )

  function handleAddPlayer(name) {
    setPlayers(oldPlayers => [...oldPlayers, { name, score: 0 }])
  }

  function resetAll() {
    setPlayers([])
  }

  function resetScores() {
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
