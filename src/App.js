import './App.css'
<<<<<<< HEAD
import Player from './components/Player'

function App() {
  return (
    <>
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
