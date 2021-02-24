import React from 'react'
import Header from '../components/Header'
import Player from '../components/PlayerItem'
import Button from '../components/Button'

export default function Game({
  nameOfGame,
  players,
  handlePlus,
  handleMinus,
  resetScores,
  endGame,
}) {
  return (
    <div>
      <Header>{nameOfGame}</Header>
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
      <Button onClick={endGame}>End game</Button>
    </div>
  )
}
