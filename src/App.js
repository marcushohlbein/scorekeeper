import './App.css'
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
  )
}

export default App
