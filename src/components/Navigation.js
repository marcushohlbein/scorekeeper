import React from 'react'
import Button from './Button'
import styled from 'styled-components/macro'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <NavigationBar>
      <Button isActive={activeIndex === 0} onClick={() => onNavigate(0)}>
        Play
      </Button>
      <Button isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
        History
      </Button>
    </NavigationBar>
  )
}
const NavigationBar = styled.nav`
  display: flex;
`
