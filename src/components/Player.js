import React from 'react'
import './Player.css'

function Player({ name, score, onMinus, onPlus }) {
  return (
    <section>
      {name}
      <button onClick={onMinus}>-</button>
      <span>{score}</span>
      <button onClick={onPlus}>+</button>
    </section>
  )
}

export default Player
