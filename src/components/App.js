import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import { Route, Switch, useHistory } from 'react-router-dom'

import Navigation from './Navigation'
import GamePage from '../screens/GamePage'
import HistoryPage from '../screens/HistoryPage'
import CreatePage from '../screens/CreatePage'

function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [history, setHistory] = useState([])
  const { push } = useHistory()

  return (
    <Appgrid>
      <Switch>
        <Route exact path="/">
          <CreatePage onCreateGame={createGame} />
        </Route>
        <Route path="/game">
          <GamePage
            players={players}
            nameOfGame={nameOfGame}
            onPlus={handlePlus}
            onMinus={handleMinus}
            resetScores={resetScores}
            endGame={endGame}
          />
        </Route>
        <Route path="/history">
          <HistoryPage history={history} />
        </Route>
      </Switch>
      <Route exact path={['/', '/history']}>
        <Navigation />
      </Route>
    </Appgrid>
  )

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    push('/game')
  }

  function endGame() {
    setHistory([{ id: uuidv4(), players, nameOfGame }, ...history])
    setPlayers([])
    setNameOfGame([])
    push('/history')
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
