import React from 'react'
import styled from 'styled-components/macro'
export default function Input({ labelText, placeholder, name }) {
  return (
    <InputFieldElement>
      {labelText}
      <InputField
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        type="text"
      />
    </InputFieldElement>
  )
}

function handleChange(e) {
  const inputValue = e.target.value
  return inputValue
}

const InputFieldElement = styled.div`
  display: grid;
  gap: 4px;
`

const InputField = styled.input`
  border: 2px solid #bbb;
`

/* const InputField = styled.input`
  border-color: ${props => (props.value >= 3 ? 'green' : '#bbb')};
  border-width: 2px;
` */
