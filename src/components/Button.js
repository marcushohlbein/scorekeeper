import React from 'react'
import './Button.css'

export default function Button({ text, onClick, isActive }) {
  return (
    <button
      className={isActive ? 'Button Button--active' : 'Button'}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
