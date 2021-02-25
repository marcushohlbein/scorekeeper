import React from 'react'
import GameForm from '../components/GameForm'

export default function CreateGame({ onCreateGame }) {
  return <GameForm onCreateGame={onCreateGame} />
}
