import React from 'react'
import './App.css'
import PlayerForm from './components/PlayerForm'
import Player from './components/Player'
import Button from './components/Button'

export default function App() {
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
