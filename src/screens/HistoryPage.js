import React from 'react'
import styled from 'styled-components/macro'
import HistoryEntry from '../components/HistoryEntry'

export default function History({ history }) {
  return (
    <HistoryWrapper>
      {history.map(({ nameOfGame, players, id }) => (
        <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
      ))}
    </HistoryWrapper>
  )
}

const HistoryWrapper = styled.div`
  display: grid;
  gap: 25px;
`
