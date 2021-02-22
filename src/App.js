import React from 'react'
import './App.css'
import Button from './components/Button'

export default function App() {
  return (
    <>
      <Button text="Reset Score" onClick={() => console.log('Reset Score')} />
      <Button text="Reset all" onClick={() => console.log('Reset All')} />
    </>
  )
}
