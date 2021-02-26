import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.isActive ? 'salmon' : 'lightgray')};
  ${props => props.isActive && 'color: white;'}
  border: none;
  width: 100%;
  padding: 8px;
  text-decoration: none;
  color: inherit;
  text-align: center;
  &.active {
    background-color: salmon;
    color: white;
  }
`
