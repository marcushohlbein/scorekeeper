import React from 'react'
import './Input.css'

export default function Input({ labelText, placeholder }) {
  return (
    <label className="Input">
      {labelText}
      <input placeholder={placeholder} type="text" />
    </label>
  )
}
