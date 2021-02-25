import React from 'react'
import Button from './Button'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavigationBar>
      <Button as={NavLink} exact to="/">
        Create
      </Button>
      <Button as={NavLink} to="/history">
        History
      </Button>
    </NavigationBar>
  )
}
const NavigationBar = styled.nav`
  display: flex;
`
