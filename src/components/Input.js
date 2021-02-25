import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <InputFieldElement>
      {labelText}
      <InputField name={name} placeholder={placeholder} type="text" />
    </InputFieldElement>
  )
}

const InputFieldElement = styled.div`
  display: grid;
  gap: 4px;
`

const InputField = styled.input`
  border: 2px solid #bbb;
`
