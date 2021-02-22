<<<<<<< HEAD
import React from 'react'
import './App.css'
import Button from './components/Button'
=======
import './App.css'
<<<<<<< HEAD
import Player from './components/Player'
>>>>>>> main

export default function App() {
  return (
    <>
<<<<<<< HEAD
      <Button text="Reset Score" onClick={() => console.log('Reset Score')} />
      <Button text="Reset all" onClick={() => console.log('Reset All')} />
    </>
  )
}
=======
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
    </>
=======
import PlayerForm from './components/PlayerForm'

function App() {
  return (
    <PlayerForm label="Add Player:" onAddPlayer={name => console.log(name)} />
>>>>>>> main
  )
}

export default App
>>>>>>> main
