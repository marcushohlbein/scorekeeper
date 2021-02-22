import './App.css'
import PlayerForm from './components/PlayerForm'

function App() {
  return (
    <PlayerForm label="Add Player:" onAddPlayer={name => console.log(name)} />
  )
}

export default App
