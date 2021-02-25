import React from 'react'
import Header from '../components/Header'
import Player from '../components/PlayerItem'
import Button from '../components/Button'

export default function Game({
  nameOfGame,
  players,
  onPlus,
  onMinus,
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
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <Button onClick={resetScores}>Reset scores</Button>
      <Button onClick={endGame}>End game</Button>
    </div>
  )
}
