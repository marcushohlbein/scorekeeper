import React from 'react'
import GameForm from '../components/GameForm'

export default function CreateGame({ createGame }) {
  return <GameForm onCreateGame={createGame} />
}
