import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './Navigation'
import Game from '../screens/GamePage'
import History from '../screens/HistoryPage'
import CreateGame from '../screens/CreatePage'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [history, setHistory] = useState([])
  const [currentPage, setCurrentPage] = useState('play')

  return (
    <Appgrid>
      {currentPage === 'play' && <CreateGame onCreateGame={createGame} />}

      {currentPage === 'game' && (
        <Game
          players={players}
          nameOfGame={nameOfGame}
          onPlus={handlePlus}
          onMinus={handleMinus}
          resetScores={resetScores}
          endGame={endGame}
        />
      )}

      {currentPage === 'history' && <History history={history} />}

      {(currentPage === 'play' || currentPage === 'history') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </Appgrid>
  )

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    setCurrentPage('game')
  }

  function endGame() {
    setHistory([{ id: uuidv4(), players, nameOfGame }, ...history])
    setPlayers([])
    setNameOfGame([])
    setCurrentPage('play')
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

export default App
