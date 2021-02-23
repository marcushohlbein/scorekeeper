import React from 'react'
import './Input.css'

export default function Input({ labelText, placeholderText }) {
  return (
    <label>
      {labelText}
      <input name="player" placeholder={placeholderText} />
    </label>
  )
}
