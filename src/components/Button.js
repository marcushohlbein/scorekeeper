import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.isActive ? 'salmon' : 'lightgray')};
  ${props => props.isActive && 'color: white;'}
  border: none;
  width: 100%;
`
