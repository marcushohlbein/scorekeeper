import styled from 'styled-components/macro'

<<<<<<< HEAD
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
=======
export default styled.button`
  padding: 5px;
  background: #bbb;
  border-radius: 7px;
  border: none;
`
>>>>>>> main
